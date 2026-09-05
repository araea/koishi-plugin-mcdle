import { Context, h, Schema, Session } from 'koishi'
import {} from 'koishi-plugin-puppeteer'
import { mobData, blockData, itemData, MobData, BlockData, ItemData, keyMap, blockChineseTitle, mobChineseTitle, itemChineseTitle } from './data';
import {
  boardCard,
  displayValues,
  fieldLabel,
  FIELDS,
  formatDuration,
  helpCard,
  introCard,
  Mode,
  MODES,
  rankCard,
  RankEntry,
  startCard,
  STATUS_META,
  statusOf,
  winCard,
} from './view';
// mobData: MobData[]
// blockData: BlockData[]
// itemData: ItemData[]
// export interface MobData {
//   id: string;
//   title: string;
//   url: string;
//   image_url: string;
//   health: number;
//   behavior: string[];
//   spawn: string[];
//   classification: string[];
//   height: number;
//   initial_release: string;
//   chinese_title: string;
//   wiki_image_url: string;
// }

// export interface BlockData {
//   id: string;
//   title: string;
//   url: string;
//   image_url: string;
//   renewable: string;
//   stackable: number;
//   tool: string;
//   blast_resistance: number;
//   hardness: number;
//   luminous: string;
//   full_block: string;
//   flammable: string;
//   fire_catch: string;
//   initial_release: string;
//   transparent: string;
//   chinese_title: string;
//   wiki_image_url: string;
// }

// export interface ItemData {
//   id: string;
//   title: string;
//   url: string;
//   image_url: string;
//   renewable: string;
//   stackable: number;
//   rarity: string;
//   initial_release: string;
//   obtaining: string[];
//   usage: string[];
//   inventory_categories: string[];
//   recipe: string[];
//   loot: string[];
//   chinese_title: string;
//   wiki_image_url: string;
// }

export const name = 'mcdle'
export const usage = `## 使用

\`mcdle.猜 [名称]\` 开局或猜测。系统随机选择生物、物品或方块，按属性颜色提示接近程度。

## 提示

| 符号 | 含义 |
| --- | --- |
| 🟩 | 完全匹配 |
| 🟨 | 部分匹配 |
| 🟥 | 不匹配 |
| 🟥⬆️ / 🟥⬇️ | 答案更大 / 更小 |

## 指令

| 指令 | 说明 |
| --- | --- |
| \`mcdle\` | 查看帮助 |
| \`mcdle.猜 [名称]\` | 开局或猜测 |
| \`mcdle.帮助\` | 完整说明 |
| \`mcdle.排行榜\` | 群内战绩 |
| \`mcdle.词库\` | 全部词条 |`;
export const inject = { required: ["database"], optional: ["puppeteer"] };
// pz*
export interface Config {
  atReply: boolean;
  quoteReply: boolean;
  isEnableMiddleware: boolean;
  addStatusTextAfterEmoji: boolean;
  maxRank: number;
  dailyPlayLimit: number;
  retractDelay: number;
  allowRepeatedGuesses: boolean;
  disableImages: boolean;
}
export const Config: Schema<Config> = Schema.object({
  atReply: Schema.boolean().default(false).description("响应时@用户"),
  quoteReply: Schema.boolean().default(true).description("响应时引用消息"),
  isEnableMiddleware: Schema.boolean().default(false).description("启用中间件（无需指令直接猜测）"),
  addStatusTextAfterEmoji: Schema.boolean().default(true).description("在状态表情后添加文字说明"),
  maxRank: Schema.number().default(10).min(0).description("排行榜最大显示人数"),
  dailyPlayLimit: Schema.number().default(1).min(1).description("每日游玩次数上限"),
  retractDelay: Schema.number()
    .min(0)
    .default(0)
    .description(
      `撤回上一条消息的等待时间，单位是秒。值为 0 时不启用自动撤回功能。`
    ),
  allowRepeatedGuesses: Schema.boolean().default(false).description("允许重复猜测已猜过的词语（防止撤回时历史不可见）"),
  disableImages: Schema.boolean().default(false).description("不发送图片，全部改用文本（解决网络问题导致的图片下载失败）"),
});
// smb*
declare module "koishi" {
  interface Tables {
    mcdle: Mcdle;
    mcdle_rank: McdleRank;
  }
}

interface Mcdle {
  id: number;
  channelId: string;
  answer: MobData | ItemData | BlockData | null;
  guesses: any[];
  historyChineseTitles: string[];
  guessedChineseTitles: string[];
  dailyPlayedToday: number;
  gameEnded: boolean;
  lastGameStartTime: Date;
  gameMode: 'mob' | 'item' | 'block' | null;
  formatVersion: number;
}

interface McdleRank {
  id: number;
  userId: string;
  username: string;
  mobSuccessCount: number;
  itemSuccessCount: number;
  blockSuccessCount: number;
  totalSuccessCount: number;
}

/** 猜测记录的写入格式版本。2 起用 JSON 保存完整的对象数组。 */
const FORMAT_VERSION = 2;

/**
 * `list` 在 Minato 中是逗号分隔的字符串列表，对象会被写成
 * `[object Object]`。这里显式做 JSON 转换，同时容忍已经落库的损坏值，
 * 具体内容会在读取局面后用猜过的标题重建。
 */
const guessesField = {
  type: "text" as const,
  initial: [] as any[],
  dump(value: any[] | null): string {
    return JSON.stringify(Array.isArray(value) ? value : []);
  },
  load(value: string | any[] | null): any[] {
    if (Array.isArray(value)) return value;
    if (!value) return [];
    try {
      const parsed = JSON.parse(value);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  },
};

export function apply(ctx: Context, cfg: Config) {
  //tzb*
  // 游戏记录表定义
  ctx.model.extend(
    "mcdle",
    {
      channelId: "string",
      answer: { type: "json", initial: null },
      guesses: guessesField,
      historyChineseTitles: { type: "list", initial: [] },
      guessedChineseTitles: { type: "list", initial: [] },
      dailyPlayedToday: { type: "unsigned", initial: 0 },
      gameEnded: { type: "boolean", initial: true },
      lastGameStartTime: { type: "timestamp", initial: new Date(0) },
      gameMode: { type: "string", initial: null },
      // 猜测记录的写入格式：靠这一列识别需要重建或回退的旧局面。
      formatVersion: { type: "unsigned", initial: 0 },
    },
    {
      primary: "channelId",
    },
  );

  // 用户成绩表定义
  ctx.model.extend(
    "mcdle_rank",
    {
      userId: "string",
      username: { type: "string", initial: "" },
      mobSuccessCount: { type: "unsigned", initial: 0 },
      itemSuccessCount: { type: "unsigned", initial: 0 },
      blockSuccessCount: { type: "unsigned", initial: 0 },
      totalSuccessCount: { type: "unsigned", initial: 0 },
    },
    {
      primary: "userId",
    },
  );

  // cl*
  const logger = ctx.logger("mcdle")

  //zjj*
  if (cfg.isEnableMiddleware) {
    ctx.middleware(async (session, next) => {
      // 获取当前频道游戏记录
      let gameRecords = await ctx.database.get("mcdle", { channelId: session.channelId });
      if (!gameRecords || gameRecords.length === 0) {
        return next();
      }
      const game = gameRecords[0];

      if (game.gameEnded) {
        return next();
      }

      const content = session.content.trim();
      // 过滤无关猜测：长度超过10个字符，或包含特殊符号、标点符号
      if (content.length > 10 || /[，。！？；：'"“”‘’【】（）《》.,!?;:'"\[\]()<>]/.test(content)) return next();

      // 如果本局游戏已经猜过的中文标题，且不允许重复猜测，则直接next()
      if (!cfg.allowRepeatedGuesses && game.guessedChineseTitles.includes(content)) {
        return next();
      }

      // 依据当前游戏模式选择对应数据源
      let dataSource: (MobData | ItemData | BlockData)[] = [];
      if (game.gameMode === "mob") dataSource = mobData;
      else if (game.gameMode === "item") dataSource = itemData;
      else if (game.gameMode === "block") dataSource = blockData;
      else return next();

      // 查找匹配项
      const matched = dataSource.find(
        (d) => d.chinese_title === content
      );
      if (!matched) {
        return next();
      }

      // 执行猜测指令替代
      await session.execute(`mcdle.猜 ${content}`);
      return;
    });
  }

  //zl*
  ctx.command("mcdle", "我的世界猜谜游戏")
    .action(async ({ session }) => mcdle(session));
  ctx.command("mcdle.猜 [guess:string]").action(async ({ session }, guess) => c(session, guess?.trim()));
  ctx.command("mcdle.帮助").action(async ({ session }) => bz(session));
  ctx.command("mcdle.排行榜").action(async ({ session }) => phb(session));
  ctx.command("mcdle.词库").action(async ({ session }) => ck(session));


  // tp* 文本排版
  //
  // 图片渲染不可用时，所有回复都要有等价的文本形态。为了让两种形态读起来
  // 像同一个游戏，文本也遵循固定的骨架：一条 ▍标题、一条分隔线、若干段落。

  const RULE = "────────────";

  function textCard(title: string, ...sections: (string | string[] | null | undefined)[]): string {
    const body = sections
      .map((s) => (Array.isArray(s) ? s.filter(Boolean).join("\n") : s))
      .filter((s): s is string => !!s && !!s.trim())
      .join("\n\n");
    return [`▍${title}`, RULE, body].filter(Boolean).join("\n");
  }

  function modeName(mode: Mode): string {
    return MODES[mode].name;
  }

  /** 距离跨零点重置还有多久，用于把「次数用完了」变成一句有用的话。 */
  function untilReset(now: Date): string {
    const next = new Date(now);
    next.setHours(24, 0, 0, 0);
    const minutes = Math.max(1, Math.round((next.getTime() - now.getTime()) / 60000));
    const hh = Math.floor(minutes / 60);
    const mm = minutes % 60;
    return hh > 0 ? `${hh} 小时 ${mm} 分` : `${mm} 分`;
  }

  /** 依据已锁定的字段比例给一句恰如其分的旁白，而不是千篇一律的「加油」。 */
  function encourage(locked: number, total: number, attempts: number): string {
    const ratio = total ? locked / total : 0;
    if (ratio >= 1) return "只差名字了";
    if (ratio >= 0.7) return "非常接近";
    if (ratio >= 0.4) return "范围在收窄";
    if (attempts >= 6) return "不妨换个方向试试";
    return "继续缩小范围";
  }

  function statusTag(label: string): string {
    return cfg.addStatusTextAfterEmoji ? `(${label})` : "";
  }

  /**
   * 文本形态下仍然把词条的 Wiki 配图带上。
   * 这条路径只在没有 puppeteer 时走到，图片由平台自己去抓，
   * 所以 disableImages 打开时必须彻底不出图。
   */
  function wikiImage(entry: any): string | null {
    if (cfg.disableImages || !entry?.wiki_image_url) return null;
    // koishi 解析消息时会吃掉紧贴元素的换行，所以用 <p> 显式断行，
    // 否则配图会和上一行文字挤在一起
    return `${h("p", "")}${h.image(entry.wiki_image_url)}${h("p", "")}`;
  }

  /** 一次猜测的文本牌面：状态在前，命中的子标签用【】点亮。 */
  function boardText(mode: Mode, guesses: any[], titles: string[]): string {
    const last = guesses[guesses.length - 1];
    const fields = FIELDS[mode];

    const lines = fields.map((key) => {
      const status = statusOf(last, key);
      const meta = STATUS_META[status];
      const hits: string[] = Array.isArray(last[`${key}_hits`])
        ? last[`${key}_hits`].map(String)
        : [];
      const value = displayValues(key, last[key])
        .map((v) => (status === "mixed" && hits.includes(v.raw) ? `【${v.text}】` : v.text))
        .join("、");
      return `${meta.emoji}${statusTag(meta.label)} ${fieldLabel(key)} ${value}`;
    });

    const locked = fields.filter((k) => statusOf(last, k) === "true").length;
    const history = titles.length > 1 ? `本局已猜：${titles.join(" › ")}` : null;

    return textCard(
      `${modeName(mode)}模式 · 第 ${guesses.length} 次猜测`,
      wikiImage(last),
      `${last.chinese_title}${last.title ? ` ${last.title}` : ""}`,
      lines,
      `已锁定 ${locked}/${fields.length} 项 · ${encourage(locked, fields.length, guesses.length)}`,
      history,
    );
  }

  function startText(mode: Mode, played: number): string {
    const meta = MODES[mode];
    return textCard(
      `新的一局 · ${meta.name}模式`,
      `${meta.tagline}，从 ${meta.total} 个候选中锁定唯一答案。`,
      `可推理属性：${FIELDS[mode].map((k) => keyMap[k] || k).join(" / ")}`,
      [`mcdle.猜 [名称]　提交一次猜测`, `今日进度 ${played}/${cfg.dailyPlayLimit}`],
    );
  }

  function winText(o: {
    mode: Mode;
    answer: any;
    attempts: number;
    seconds: number;
    username: string;
    total: number;
    played: number;
  }): string {
    const left = Math.max(0, cfg.dailyPlayLimit - o.played);
    const profile = FIELDS[o.mode]
      .map(
        (k) =>
          `${fieldLabel(k)} ${displayValues(k, o.answer[k])
            .map((v) => v.text)
            .join("、")}`,
      )
      .join(" · ");

    return textCard(
      "猜中了",
      wikiImage(o.answer),
      `答案　${o.answer.chinese_title}${o.answer.title ? ` ${o.answer.title}` : ""}`,
      [
        `猜测　${o.attempts} 次`,
        `用时　${formatDuration(o.seconds)}`,
        `${o.username} 累计猜中 ${o.total} 次`,
      ],
      `答案档案：${profile}`,
      left > 0 ? `今日还剩 ${left} 局 · mcdle.排行榜 查看战绩` : "今日额度已用完 · mcdle.排行榜 查看战绩",
    );
  }

  // tx* 图片渲染
  //
  // puppeteer 是可选服务：没装、渲染超时、图片抓不下来，都只是「这次没有图」，
  // 一律安静地回退到等价文本，绝不让一局游戏卡在渲染上。
  async function renderCard(html: string): Promise<string | null> {
    if (cfg.disableImages || !ctx.puppeteer) return null;
    try {
      return await ctx.puppeteer.render("", async (page, next) => {
        try {
          // 视口给得比最宽的棋盘还宽，让卡片按内容自然收缩而不是被挤到换行
          await page.setViewport({ width: 1800, height: 1200, deviceScaleFactor: 2 });
          try {
            await page.setContent(html, { waitUntil: "load", timeout: 15000 });
          } catch (error: any) {
            // 词条配图来自 Wiki，慢或挂掉都不该拖垮整张卡片，按现状截图即可
            logger.debug("页面资源加载超时，按当前状态出图：%s", error?.message ?? error);
          }
          await page.evaluate(async () => {
            await (document as any).fonts?.ready;
          });
          const card = await page.$("#card");
          return await next((card ?? undefined) as any);
        } catch (error) {
          // render() 只在回调正常返回后关页，出错这条路得自己收尾
          await page.close().catch(() => {});
          throw error;
        }
      });
    } catch (error: any) {
      logger.warn("图片渲染失败，本次回退为文本：%s", error?.message ?? error);
      return null;
    }
  }

  async function sendCard(session: Session, html: string, fallback: string) {
    const image = await renderCard(html);
    await sendMsg(session, image ?? fallback);
  }

  // zlhs*
  async function mcdle(session: Session) {
    await sendCard(session, introCard(cfg.dailyPlayLimit), introText());
  }

  function introText(): string {
    const total = mobData.length + itemData.length + blockData.length;
    return textCard(
      "MCDLE · 我的世界猜谜",
      `从 ${total} 个词条里，只凭属性提示锁定唯一答案。`,
      [
        `壹　mcdle.猜 苦力怕　随便报个名字即可开局`,
        `贰　对照颜色与箭头缩小范围，每次猜测都会留在棋盘上`,
        `叁　猜中后自动记入 mcdle.排行榜`,
      ],
      [
        `生物 ${mobData.length} · 物品 ${itemData.length} · 方块 ${blockData.length}`,
        `每日 ${cfg.dailyPlayLimit} 局，跨零点重置`,
        `完整规则：mcdle.帮助`,
      ],
    );
  }

  async function ck(session: Session) {
    const sections: [string, string[]][] = [
      [`生物词库 · ${mobChineseTitle.length} 条`, mobChineseTitle],
      [`方块词库 · ${blockChineseTitle.length} 条`, blockChineseTitle],
      [`物品词库 · ${itemChineseTitle.length} 条`, itemChineseTitle],
    ];

    // 仅在OneBot平台尝试合并转发
    if (["red", "onebot"].includes(session.platform)) {
      const allContentNodes = sections.map(([title, words]) =>
        h("message", { userId: session.userId }, `▍${title}\n${RULE}\n${words.join(" ")}`),
      );
      try {
        await session.send(h("figure", {}, allContentNodes));
        return;
      } catch (error) {
        // 如果合并转发失败，降级为普通消息发送
        logger.warn("合并转发失败，降级为普通消息:", error);
      }
    }

    // 非onebot/qq适配器或合并转发失败时使用普通消息发送
    // 将三个词库合并为一条消息发送，避免消息过多
    await sendMsg(
      session,
      sections.map(([title, words]) => `▍${title}\n${RULE}\n${words.join(" ")}`).join("\n\n"),
    );
  }

  // dj* 局面读写
  const POOLS: Record<Mode, (MobData | ItemData | BlockData)[]> = {
    mob: mobData,
    item: itemData,
    block: blockData,
  };

  function modeOf(entry: MobData | ItemData | BlockData): Mode {
    if (mobData.includes(entry as MobData)) return "mob";
    if (itemData.includes(entry as ItemData)) return "item";
    return "block";
  }

  function findAnywhere(title: string) {
    return (
      mobData.find((d) => d.chinese_title === title) ||
      itemData.find((d) => d.chinese_title === title) ||
      blockData.find((d) => d.chinese_title === title)
    );
  }

  async function ensureRecord(session: Session) {
    let records = await ctx.database.get("mcdle", { channelId: session.channelId });
    if (!records || records.length === 0) {
      records = [
        await ctx.database.create("mcdle", {
          channelId: session.channelId,
          answer: null,
          guesses: [],
          historyChineseTitles: [],
          guessedChineseTitles: [],
          dailyPlayedToday: 0,
          gameEnded: true,
          lastGameStartTime: new Date(0),
          gameMode: null,
        }),
      ];
    }
    return records[0];
  }

  /** 跨过零点就把当日局数清零。 */
  async function resetDailyIfNeeded(session: Session, record: Mcdle, now: Date) {
    const last = new Date(record.lastGameStartTime);
    if (
      now.getFullYear() !== last.getFullYear() ||
      now.getMonth() !== last.getMonth() ||
      now.getDate() !== last.getDate()
    ) {
      record.dailyPlayedToday = 0;
      await ctx.database.set("mcdle", { channelId: session.channelId }, { dailyPlayedToday: 0 });
    }
  }

  /** 抽一个本频道没做过答案的词条；该模式全做过时，只重置这一模式的历史。 */
  async function pickAnswer(session: Session, record: Mcdle, mode: Mode) {
    const pool = POOLS[mode];
    let candidates = pool.filter((d) => !record.historyChineseTitles.includes(d.chinese_title));
    if (candidates.length === 0) {
      const remaining = record.historyChineseTitles.filter(
        (title) => !pool.some((d) => d.chinese_title === title),
      );
      await ctx.database.set(
        "mcdle",
        { channelId: session.channelId },
        { historyChineseTitles: remaining },
      );
      record.historyChineseTitles = remaining;
      candidates = pool;
    }
    return candidates[Math.floor(Math.random() * candidates.length)];
  }

  interface GameState {
    mode: Mode;
    answer: any;
    guesses: any[];
    titles: string[];
    startedAt: Date;
    played: number;
  }

  async function c(session: Session, guess: string | undefined) {
    const record = await ensureRecord(session);
    const now = new Date();
    await resetDailyIfNeeded(session, record, now);

    // list 字段会丢掉对象内容；用同步保存的标题与答案重建历史棋盘。
    if (!record.gameEnded && record.formatVersion !== FORMAT_VERSION) {
      if (record.guessedChineseTitles.length) {
        const restored = restoreGuessHistory(record);
        if (restored) {
          await ctx.database.set(
            "mcdle",
            { channelId: session.channelId },
            { guesses: restored, formatVersion: FORMAT_VERSION },
          );
          record.guesses = restored;
          record.formatVersion = FORMAT_VERSION;
        } else {
          await rollbackLegacyGame(session, record, guess, now);
          return;
        }
      } else if (record.guesses.length) {
        await rollbackLegacyGame(session, record, guess, now);
        return;
      } else {
        // 刚开局还没有猜测时只需升级标记。
        await ctx.database.set(
          "mcdle",
          { channelId: session.channelId },
          { formatVersion: FORMAT_VERSION },
        );
        record.formatVersion = FORMAT_VERSION;
      }
    }

    if (record.gameEnded) {
      await startNewGame(session, record, guess, now);
    } else {
      await continueGame(session, record, guess);
    }
  }

  /** 根据未受影响的标题列表，重新计算被 list 序列化丢掉的每次比对结果。 */
  function restoreGuessHistory(record: Mcdle): any[] | null {
    const mode = record.gameMode as Mode;
    if (!mode || !MODES[mode] || !record.answer) return null;

    const entries = record.guessedChineseTitles.map((title) =>
      POOLS[mode].find((entry) => entry.chinese_title === title),
    );
    if (entries.some((entry) => !entry)) return null;
    return entries.map((entry) => compareData(entry!, record.answer!));
  }

  /**
   * 旧版本遗留的残局：把没猜完的词退回到待猜测词池（从本频道历史中移除，之后
   * 仍可能被抽为答案），作废这一局并退还当日额度，再凭玩家这次的输入重新开局。
   */
  async function rollbackLegacyGame(
    session: Session,
    record: Mcdle,
    guess: string | undefined,
    now: Date,
  ) {
    const answerTitle = record.answer?.chinese_title;
    const history = answerTitle
      ? record.historyChineseTitles.filter((title) => title !== answerTitle)
      : record.historyChineseTitles;
    // 这局是升级弄没的，不该再占玩家一个今日名额
    const refunded = Math.max(0, record.dailyPlayedToday - 1);

    await ctx.database.set(
      "mcdle",
      { channelId: session.channelId },
      {
        gameEnded: true,
        answer: null,
        guesses: [],
        guessedChineseTitles: [],
        gameMode: null,
        historyChineseTitles: history,
        dailyPlayedToday: refunded,
        formatVersion: FORMAT_VERSION,
      },
    );

    await sendMsg(
      session,
      textCard(
        "检测到旧版本遗留的一局",
        "这局是在旧版本下开始的，已有的猜测记录没法用新版图片牌面渲染。",
        answerTitle ? `「${answerTitle}」已退回词库，之后仍有机会被抽到。` : null,
        "这一局已作废并退还今日额度，马上为你重新开一局。",
      ),
    );

    await startNewGame(
      session,
      {
        ...record,
        historyChineseTitles: history,
        dailyPlayedToday: refunded,
        gameEnded: true,
        formatVersion: FORMAT_VERSION,
      },
      guess,
      now,
    );
  }

  async function startNewGame(
    session: Session,
    record: Mcdle,
    guess: string | undefined,
    now: Date,
  ) {
    if (record.dailyPlayedToday >= cfg.dailyPlayLimit) {
      await sendMsg(
        session,
        textCard(
          `⚠️ 今日 ${cfg.dailyPlayLimit} 局已经用完`,
          `跨零点后重置，还要等 ${untilReset(now)}。`,
          "在那之前可以查看 mcdle.排行榜 或 mcdle.词库。",
        ),
      );
      return;
    }

    // 开局那句话如果本身就是个词条，就顺势决定模式，并把它记作第一次猜测
    const opener = guess ? findAnywhere(guess) : undefined;
    const mode: Mode = opener
      ? modeOf(opener)
      : (["mob", "item", "block"] as Mode[])[Math.floor(Math.random() * 3)];
    const answer = await pickAnswer(session, record, mode);
    const played = record.dailyPlayedToday + 1;

    await ctx.database.set(
      "mcdle",
      { channelId: session.channelId },
      {
        answer,
        guesses: [],
        guessedChineseTitles: [],
        gameEnded: false,
        lastGameStartTime: now,
        dailyPlayedToday: played,
        historyChineseTitles: [...record.historyChineseTitles, answer.chinese_title],
        gameMode: mode,
        formatVersion: FORMAT_VERSION,
      },
    );

    await sendCard(session, startCard(mode, played, cfg.dailyPlayLimit), startText(mode, played));

    if (opener) {
      await applyGuess(
        session,
        { mode, answer, guesses: [], titles: [], startedAt: now, played },
        opener,
      );
    }
  }

  async function continueGame(session: Session, record: Mcdle, guess: string | undefined) {
    const mode = record.gameMode as Mode;
    if (!mode || !MODES[mode] || !record.answer) {
      // 局面残缺（如手工改库或旧版本遗留）时不再空转，直接收摊让玩家重开
      await ctx.database.set(
        "mcdle",
        { channelId: session.channelId },
        { gameEnded: true, answer: null, guesses: [], guessedChineseTitles: [], gameMode: null },
      );
      await sendMsg(
        session,
        textCard("⚠️ 这一局的牌面已经无法还原", "已经把它收掉了。发送 mcdle.猜 [名称] 可以重新开一局。"),
      );
      return;
    }

    const state: GameState = {
      mode,
      answer: record.answer,
      guesses: record.guesses,
      titles: record.guessedChineseTitles,
      startedAt: new Date(record.lastGameStartTime),
      played: record.dailyPlayedToday,
    };

    // 不带参数时不该是一句死板的报错：把当前棋盘再摆一遍更有用
    if (!guess) {
      if (state.guesses.length) {
        await sendCard(
          session,
          boardCard({ mode, guesses: state.guesses, tip: "轮到你了 · mcdle.猜 [名称]" }),
          boardText(mode, state.guesses, state.titles),
        );
      } else {
        await sendMsg(
          session,
          textCard(
            `轮到你了 · ${modeName(mode)}模式`,
            `报一个${modeName(mode)}的名字，比如 mcdle.猜 ${POOLS[mode][0].chinese_title}。`,
            `拿不准有哪些词条就看 mcdle.词库。`,
          ),
        );
      }
      return;
    }

    if (!cfg.allowRepeatedGuesses && state.titles.includes(guess)) {
      await sendMsg(
        session,
        textCard(
          `⚠️ 「${guess}」这一局已经猜过了`,
          `本局已猜 ${state.titles.length} 个：${state.titles.join(" › ")}`,
          "换一个还没试过的词条吧。",
        ),
      );
      return;
    }

    const matched = POOLS[mode].find((d) => d.chinese_title === guess);
    if (!matched) {
      const near = POOLS[mode]
        .filter((d) => d.chinese_title.includes(guess) || guess.includes(d.chinese_title))
        .slice(0, 3)
        .map((d) => d.chinese_title);
      await sendMsg(
        session,
        textCard(
          `⚠️ 「${guess}」不在${modeName(mode)}词库里`,
          near.length ? `是不是想猜：${near.join("、")}？` : null,
          `本局共有 ${MODES[mode].total} 个${modeName(mode)}候选，mcdle.词库 可以全部翻看。`,
        ),
      );
      return;
    }

    await applyGuess(session, state, matched);
  }

  /** 落子：比对、入库、出牌面，猜中则揭晓并记分。 */
  async function applyGuess(
    session: Session,
    state: GameState,
    matched: MobData | ItemData | BlockData,
  ) {
    const comparison = compareData(matched, state.answer);
    const guesses = [...state.guesses, comparison];
    const titles = [...state.titles, matched.chinese_title];

    await ctx.database.set(
      "mcdle",
      { channelId: session.channelId },
      { guesses, guessedChineseTitles: titles },
    );

    const solved = matched.chinese_title === state.answer.chinese_title;
    const locked = FIELDS[state.mode].filter((k) => statusOf(comparison, k) === "true").length;

    await sendCard(
      session,
      boardCard({
        mode: state.mode,
        guesses,
        tip: solved ? "答案已锁定" : encourage(locked, FIELDS[state.mode].length, guesses.length),
      }),
      boardText(state.mode, guesses, titles),
    );

    if (!solved) return;

    await ctx.database.set(
      "mcdle",
      { channelId: session.channelId },
      { gameEnded: true, answer: null, guesses: [], guessedChineseTitles: [], gameMode: null },
    );

    // 群昵称有可能拿不到，兜一个 userId，免得榜单上出现空白的一行
    const username = session.username || session.userId || "匿名冒险者";
    const total = await updateRank(session.userId, username, state.mode);
    const started = new Date(state.startedAt).getTime();
    // 开局时间缺失（老数据、手工改库）时给 NaN，让展示层落到「—」而不是编一个 0 秒
    const seconds = started > 0 ? Math.max(0, Math.round((Date.now() - started) / 1000)) : NaN;
    const summary = {
      mode: state.mode,
      answer: state.answer,
      attempts: guesses.length,
      seconds,
      username,
      total,
      played: state.played,
    };

    await sendCard(
      session,
      winCard({ ...summary, limit: cfg.dailyPlayLimit }),
      winText(summary),
    );
  }

  function bz(session: Session) {
    return sendCard(session, helpCard(cfg.dailyPlayLimit, cfg.allowRepeatedGuesses), helpText());
  }

  function helpText(): string {
    const legend = (["true", "mixed", "false", "false_up", "false_down"] as const).map(
      (s) => `${STATUS_META[s].emoji} ${STATUS_META[s].label}`,
    );
    return textCard(
      "MCDLE 玩法说明",
      "每局随机抽一个生物、物品或方块，你的每次猜测都会逐项与答案比对，用颜色告诉你差在哪里。",
      legend,
      [
        "部分匹配的字段里，【】括起来的就是与答案重合的那几项。",
        "数值与版本用箭头指向答案：向上代表答案更大、更晚。",
      ],
      [
        `生物 ${mobData.length} 条 · ${FIELDS.mob.length} 项属性`,
        `物品 ${itemData.length} 条 · ${FIELDS.item.length} 项属性`,
        `方块 ${blockData.length} 条 · ${FIELDS.block.length} 项属性`,
      ],
      [
        "mcdle.猜 [名称]　开始一局，或提交猜测",
        "mcdle.猜　局中直接使用可回看当前棋盘",
        "mcdle.排行榜　查看群内战绩",
        "mcdle.词库　查阅全部候选词条",
      ],
      [
        `每个群每日 ${cfg.dailyPlayLimit} 局，跨零点重置。`,
        cfg.allowRepeatedGuesses
          ? "允许重复提交已经猜过的词条。"
          : "同一局内不能重复提交已猜过的词条。",
        "词条与数据来自 zh.minecraft.wiki，版本号按发布先后比较。",
      ],
    );
  }

  async function phb(session: Session) {
    // 获取排行榜，根据totalSuccessCount排序，限制个数为配置maxRank
    const ranks = await ctx.database.get(
      "mcdle_rank",
      {},
      { limit: cfg.maxRank, sort: { totalSuccessCount: "desc" } },
    );

    const entries: RankEntry[] = ranks.map((r) => ({
      username: r.username,
      userId: r.userId,
      mob: r.mobSuccessCount,
      item: r.itemSuccessCount,
      block: r.blockSuccessCount,
      total: r.totalSuccessCount,
    }));

    if (!entries.length) {
      await sendCard(
        session,
        rankCard([], 0),
        textCard("⚠️ 排行榜还空着", "用 mcdle.猜 开出第一局，这里的第一行就是你。"),
      );
      return;
    }

    const lines = entries.map((e, i) => {
      const medal = ["①", "②", "③"][i] || `${i + 1}.`;
      const split = `生物 ${e.mob} · 物品 ${e.item} · 方块 ${e.block}`;
      return `${medal} ${e.username || e.userId}　${e.total} 次　（${split}）`;
    });

    await sendCard(
      session,
      rankCard(entries, entries.length),
      textCard(`排行榜 · 前 ${entries.length} 名`, lines, "每猜中一局记一分，按模式分别计数。"),
    );
  }

  // hs*
  function compareData(guess: MobData | ItemData | BlockData, answer: MobData | ItemData | BlockData): any {
    const result: any = { ...guess };

    // 处理每个字段的比较
    for (const key in guess) {
      if (key === 'initial_release') {
        const guessVersion = normalizeVersion(guess[key]);
        const answerVersion = normalizeVersion(answer[key]);

        if (guessVersion === answerVersion) {
          result[`${key}_gui`] = 'true';
        } else {
          // 版本号比较：拆分为数字数组逐位比较大小
          const guessParts = guessVersion.split('.').map(part => parseInt(part, 10) || 0);
          const answerParts = answerVersion.split('.').map(part => parseInt(part, 10) || 0);

          let setFlag = false;
          for (let i = 0; i < Math.max(guessParts.length, answerParts.length); i++) {
            const g = guessParts[i] || 0;
            const a = answerParts[i] || 0;
            if (g < a) {
              result[`${key}_gui`] = 'false_up';
              setFlag = true;
              break;
            } else if (g > a) {
              result[`${key}_gui`] = 'false_down';
              setFlag = true;
              break;
            }
          }
          if (!setFlag) {
            // 如果完全相等（虽然上面没触发），标记true
            result[`${key}_gui`] = 'true';
          }
        }
      } else if (typeof guess[key] === 'number' && typeof answer[key] === 'number') {
        if (guess[key] === answer[key]) {
          result[`${key}_gui`] = 'true';
        } else if (guess[key] < answer[key]) {
          result[`${key}_gui`] = 'false_up';
        } else {
          result[`${key}_gui`] = 'false_down';
        }
      } else if (Array.isArray(guess[key]) && Array.isArray(answer[key])) {
        const guessArr = guess[key] as any[];
        const answerArr = answer[key] as any[];
        const intersection = guessArr.filter(x => answerArr.includes(x));

        // 记下究竟命中了哪几项：牌面上要把它们单独点亮，
        // 否则一个笼统的「部分匹配」等于什么都没说
        result[`${key}_hits`] = intersection;

        if (intersection.length === guessArr.length && intersection.length === answerArr.length) {
          result[`${key}_gui`] = 'true';
        } else if (intersection.length > 0) {
          result[`${key}_gui`] = 'mixed';
        } else {
          result[`${key}_gui`] = 'false';
        }
      } else if (guess[key] === answer[key]) {
        result[`${key}_gui`] = 'true';
      } else {
        result[`${key}_gui`] = 'false';
      }
    }

    return result;
  }

  /** 记一分，并返回该玩家的累计猜中次数。 */
  async function updateRank(userId: string, username: string, mode: Mode): Promise<number> {
    let rankRecord = await ctx.database.get("mcdle_rank", { userId });
    if (!rankRecord || rankRecord.length === 0) {
      rankRecord = [await ctx.database.create("mcdle_rank", {
        userId,
        username,
        mobSuccessCount: 0,
        itemSuccessCount: 0,
        blockSuccessCount: 0,
        totalSuccessCount: 0,
      })];
    }

    const record = rankRecord[0];
    const updates: any = {
      username,
      totalSuccessCount: record.totalSuccessCount + 1
    };

    if (mode === 'mob') updates.mobSuccessCount = record.mobSuccessCount + 1;
    else if (mode === 'item') updates.itemSuccessCount = record.itemSuccessCount + 1;
    else updates.blockSuccessCount = record.blockSuccessCount + 1;

    await ctx.database.set("mcdle_rank", { userId }, updates);
    return updates.totalSuccessCount;
  }

  function normalizeVersion(versionString: string): string {
    if (versionString === "pre-alpha") return "0";
    if (versionString.startsWith("Alpha ")) return "0.0.0.0." + versionString.replace("Alpha ", "");
    if (versionString.startsWith("Beta ")) return "0." + versionString.replace("Beta ", "");
    switch (versionString) {
      case "2.0":
        return "1.5.1.1";
      case "15w14a":
        return "1.8.3.1";
      case "1.RV-Pre1":
        return "1.9.2.1";
      case "3D Shareware v1.34":
        return "1.13.2.1";
      case "20w14∞":
        return "1.14.4.1";
      case "22w13oneBlockAtATime":
        return "1.18.2.1";
      case "23w13a_or_b":
        return "1.19.4.1";
      case "24w14potato":
        return "1.20.4.1";
      case "25w14craftmine":
        return "1.21.5.1";
    }
    return versionString;
  }

  const lastMessageInfo = new Map<string, { id: string; timestamp: number }>();

  async function sendMsg(session: Session, msg: string) {
    if (cfg.atReply) {
      msg = `${h.at(session.userId)}${h("p", "")}${msg}`;
    }
    if (cfg.quoteReply) {
      msg = `${h.quote(session.messageId)}${msg}`;
    }
    const [messageId] = await session.send(msg);

    if (cfg.retractDelay > 0 && messageId) {
      const prevMessage = lastMessageInfo.get(session.channelId);

      if (prevMessage) {
        const timePassed = Date.now() - prevMessage.timestamp;
        const remainingDelay = cfg.retractDelay * 1000 - timePassed;

        if (timePassed < 118000) {
          // 留 2 秒余量；用 ctx.setTimeout 以便插件停用时一并清理
          ctx.setTimeout(() => {
            session.bot.deleteMessage(session.channelId, prevMessage.id).catch((error: any) => {
              logger.warn(`撤回消息 ${prevMessage.id} 失败：${error.message}`);
            });
          }, Math.max(0, remainingDelay));
        }
      }

      lastMessageInfo.set(session.channelId, { id: messageId, timestamp: Date.now() });
    }
  }
}
