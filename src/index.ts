import { Context, h, Schema, Session } from 'koishi'
import { mobData, blockData, itemData, MobData, BlockData, ItemData, valueMap, keyMap, blockChineseTitle, mobChineseTitle, itemChineseTitle } from './data';
import { config } from 'process';
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
export const usage = `# MCDLE - 我的世界猜谜游戏

灵感源于 **Wordle** 玩法

## 基本玩法

- **mcdle.猜 [名称]** - 开始游戏或进行猜测
- 系统随机选择**生物、物品或方块**作为答案
- 通过**颜色提示**判断接近程度：

  | 符号 | 含义 |
  |------|------|
  | 🟩 绿色 | 字段完全匹配 |
  | 🟨 黄色 | 部分匹配 |
  | 🟥 红色 | 不匹配 |
  | 🟥⬆️ | 答案更大 |
  | 🟥⬇️ | 答案更小 |

## QQ 群

956758505`;
export const inject = ["database"];
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
  disableImages: Schema.boolean().default(false).description("不发送图片（解决网络问题导致的图片下载失败）"),
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

export function apply(ctx: Context, cfg: Config) {
  //tzb*
  // 游戏记录表定义
  ctx.model.extend(
    "mcdle",
    {
      channelId: "string",
      answer: { type: "json", initial: null },
      guesses: { type: "list", initial: [] },
      historyChineseTitles: { type: "list", initial: [] },
      guessedChineseTitles: { type: "list", initial: [] },
      dailyPlayedToday: { type: "unsigned", initial: 0 },
      gameEnded: { type: "boolean", initial: true },
      lastGameStartTime: { type: "timestamp", initial: new Date(0) },
      gameMode: { type: "string", initial: null },
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

  // zlhs*
  async function mcdle(session: Session) {
    await sendMsg(session, [
      "欢迎使用 MCDLE",
      "",
      "猜生物 物品 方块",
      "挑战知识边界",
      "",
      "颜色与箭头指引方向",
      "每日限次 排行榜更新",
      "",
      "指令示例：",
      "  mcdle.猜 [名称]",
      "  mcdle.帮助",
      "  mcdle.排行榜",
      "",
      "愿你洞察世界万象"
    ].join("\n"));
  }

  async function ck(session: Session) {
    // 仅在OneBot平台尝试合并转发
    if (['red', 'onebot'].includes(session.platform)) {
      // 创建合并转发消息节点
      const allContentNodes = [
        h('message', { userId: session.userId }, `生物词库：\n${mobChineseTitle.join(' ')}`),
        h('message', { userId: session.userId }, `方块词库：\n${blockChineseTitle.join(' ')}`),
        h('message', { userId: session.userId }, `物品词库：\n${itemChineseTitle.join(' ')}`)
      ];
      try {
        await session.send(h('figure', {}, allContentNodes));
        return;
      } catch (error) {
        // 如果合并转发失败，降级为普通消息发送
        logger.warn('合并转发失败，降级为普通消息:', error);
      }
    }

    // 非onebot/qq适配器或合并转发失败时使用普通消息发送
    // 将三个词库合并为一条消息发送，避免消息过多
    const combinedMessage = [
      `生物词库：\n${mobChineseTitle.join(' ')}`,
      `方块词库：\n${blockChineseTitle.join(' ')}`,
      `物品词库：\n${itemChineseTitle.join(' ')}`
    ].join('\n\n');

    await sendMsg(session, combinedMessage);
  }

  async function c(session: Session, guess: string | undefined) {
    // 获取当前频道游戏记录
    let records = await ctx.database.get("mcdle", { channelId: session.channelId });
    if (!records || records.length === 0) {
      records = [await ctx.database.create("mcdle", {
        channelId: session.channelId,
        answer: null,
        guesses: [],
        historyChineseTitles: [],
        guessedChineseTitles: [],
        dailyPlayedToday: 0,
        gameEnded: true,
        lastGameStartTime: new Date(0),
        gameMode: null,
      })];
    }
    const record = records[0];

    // 日期判断，若日期与上次启动不一致，重置dailyPlayedToday
    const now = new Date();
    const lastDate = new Date(record.lastGameStartTime);
    if (
      now.getFullYear() !== lastDate.getFullYear() ||
      now.getMonth() !== lastDate.getMonth() ||
      now.getDate() !== lastDate.getDate()
    ) {
      record.dailyPlayedToday = 0;
      await ctx.database.set("mcdle", { channelId: session.channelId }, { dailyPlayedToday: 0 });
    }

    // 判断是否游戏结束
    if (record.gameEnded) {
      if (record.dailyPlayedToday >= cfg.dailyPlayLimit) {
        await sendMsg(session, `今日游戏次数已达上限，请明日再来！`);
        return;
      }

      // 判断猜测关键字是否存在，若存在则检测对应类别启动该类别游戏，否则随机启动
      let chosenMode: 'mob' | 'item' | 'block';
      let dataSource: (MobData | ItemData | BlockData)[];
      let matchedData: MobData | ItemData | BlockData | undefined = undefined;

      function isInHistory(title: string) {
        return record.historyChineseTitles.includes(title);
      }

      if (guess) {
        matchedData =
          mobData.find((d) => d.chinese_title === guess) ||
          itemData.find((d) => d.chinese_title === guess) ||
          blockData.find((d) => d.chinese_title === guess);
      }

      if (!matchedData) {
        // 没匹配的猜测，随机选择数据类别
        const choices: ('mob' | 'item' | 'block')[] = ['mob', 'item', 'block'];
        chosenMode = choices[Math.floor(Math.random() * choices.length)];
      } else {
        // 找到了匹配数据，根据类别启动游戏
        if (mobData.includes(matchedData as MobData)) chosenMode = 'mob';
        else if (itemData.includes(matchedData as ItemData)) chosenMode = 'item';
        else chosenMode = 'block';
      }

      if (!matchedData) {
        // 选择对应数据源
        if (chosenMode === 'mob') dataSource = mobData;
        else if (chosenMode === 'item') dataSource = itemData;
        else dataSource = blockData;

        // 过滤掉已经做过答案的元素
        const filtered = dataSource.filter((d) => !isInHistory(d.chinese_title));
        if (filtered.length === 0) {
          // 该模式所有元素已做过，只重置该模式的历史
          const remainingHistory = record.historyChineseTitles.filter(title => {
            const isMob = mobData.some(mob => mob.chinese_title === title);
            const isItem = itemData.some(item => item.chinese_title === title);
            const isBlock = blockData.some(block => block.chinese_title === title);

            if (chosenMode === 'mob') return !isMob;
            if (chosenMode === 'item') return !isItem;
            if (chosenMode === 'block') return !isBlock;
            return true;
          });

          await ctx.database.set("mcdle", { channelId: session.channelId }, {
            historyChineseTitles: remainingHistory
          });
          dataSource = chosenMode === 'mob' ? mobData : chosenMode === 'item' ? itemData : blockData;
        } else {
          dataSource = filtered;
        }
        // 随机选一个答案
        const answer = dataSource[Math.floor(Math.random() * dataSource.length)];

        // 更新游戏状态
        await ctx.database.set("mcdle", { channelId: session.channelId }, {
          answer,
          guesses: [],
          guessedChineseTitles: [],
          gameEnded: false,
          lastGameStartTime: now,
          dailyPlayedToday: record.dailyPlayedToday + 1,
          historyChineseTitles: [...record.historyChineseTitles, answer.chinese_title],
          gameMode: chosenMode,
        });

        await sendMsg(session, `游戏开始！模式: ${chosenMode === 'mob' ? '生物' : chosenMode === 'item' ? '物品' : '方块'}`);
        return;
      }

      if (matchedData) {
        if (mobData.includes(matchedData as MobData)) chosenMode = 'mob';
        else if (itemData.includes(matchedData as ItemData)) chosenMode = 'item';
        else chosenMode = 'block';

        // 过滤已做历史并随机出答案
        if (chosenMode === 'mob') dataSource = mobData;
        else if (chosenMode === 'item') dataSource = itemData;
        else dataSource = blockData;

        let filtered = dataSource.filter((d) => !isInHistory(d.chinese_title));
        if (filtered.length === 0) {
          // 只重置当前模式的历史记录，保留其他模式的历史
          const remainingHistory = record.historyChineseTitles.filter(title => {
            const isMob = mobData.some(mob => mob.chinese_title === title);
            const isItem = itemData.some(item => item.chinese_title === title);
            const isBlock = blockData.some(block => block.chinese_title === title);

            if (chosenMode === 'mob') return !isMob;
            if (chosenMode === 'item') return !isItem;
            if (chosenMode === 'block') return !isBlock;
            return true;
          });

          await ctx.database.set("mcdle", { channelId: session.channelId }, {
            historyChineseTitles: remainingHistory
          });
          filtered = chosenMode === 'mob' ? mobData : chosenMode === 'item' ? itemData : blockData;
        }

        const answer = filtered[Math.floor(Math.random() * filtered.length)];

        await ctx.database.set("mcdle", { channelId: session.channelId }, {
          answer,
          guesses: [],
          guessedChineseTitles: [],
          gameEnded: false,
          lastGameStartTime: now,
          dailyPlayedToday: record.dailyPlayedToday + 1,
          historyChineseTitles: [...record.historyChineseTitles, answer.chinese_title],
          gameMode: chosenMode,
        });

        // 处理猜测和答案对比逻辑
        const comparisonResult = compareData(matchedData, answer);
        await ctx.database.set("mcdle", { channelId: session.channelId }, {
          guesses: [...record.guesses, comparisonResult],
          guessedChineseTitles: [...record.guessedChineseTitles, matchedData.chinese_title],
        });

        // 生成截图并发送
        await generateAndSendComparison(session, [...record.guesses, comparisonResult]);

        // 检查是否猜中
        if (matchedData.chinese_title === answer.chinese_title) {
          await sendMsg(session, `恭喜你猜对啦！\n答案：${matchedData.chinese_title}\n猜测：${record.guesses.length + 1} 次`);
          await ctx.database.set("mcdle", { channelId: session.channelId }, {
            gameEnded: true,
            answer: null,
            guesses: [],
            guessedChineseTitles: [],
            gameMode: null
          });

          // 更新排行榜
          await updateRank(session.userId, session.username, chosenMode);
        }

        await sendMsg(session, `游戏开始！模式：${chosenMode === 'mob' ? '生物' : chosenMode === 'item' ? '物品' : '方块'}`);
        return;
      }
    } else {
      // 游戏未结束
      if (!guess) {
        await sendMsg(session, `请输入 ${record.gameMode === 'mob' ? '生物' : record.gameMode === 'item' ? '物品' : '方块'}名称 猜测`);
        return;
      }

      // 模糊匹配猜测是否存在当前模式数据中
      let dataSource: (MobData | ItemData | BlockData)[];
      if (record.gameMode === 'mob') dataSource = mobData;
      else if (record.gameMode === 'item') dataSource = itemData;
      else if (record.gameMode === 'block') dataSource = blockData;
      else {
        await sendMsg(session, `模式数据异常`);
        return;
      }

      // 判断是否已经猜过该中文标题，根据配置决定是否允许重复猜测
      if (!cfg.allowRepeatedGuesses && record.guessedChineseTitles.includes(guess)) {
        await sendMsg(session, `${guess} 已猜过`);
        return;
      }

      // 精确匹配
      const matched = dataSource.find((d) => d.chinese_title === guess);

      if (!matched) {
        // 模糊匹配提示
        const fuzzyMatches = dataSource.filter(d =>
          d.chinese_title.includes(guess) || guess.includes(d.chinese_title)
        ).slice(0, 3);

        if (fuzzyMatches.length > 0) {
          const suggestions = fuzzyMatches.map(d => d.chinese_title).join('、');
          await sendMsg(session, `${guess} 不在${record.gameMode === 'mob' ? '生物' : record.gameMode === 'item' ? '物品' : '方块'}词库中\n\n是否想猜：${suggestions}？`);
        } else {
          await sendMsg(session, `${guess} 不在${record.gameMode === 'mob' ? '生物' : record.gameMode === 'item' ? '物品' : '方块'}词库中`);
        }
        return;
      }

      // 处理对比逻辑
      const answer = record.answer;
      if (!answer) {
        await sendMsg(session, `数据异常`);
        return;
      }

      const comparisonResult = compareData(matched, answer);
      const updatedGuesses = [...record.guesses, comparisonResult];
      const updatedChineseTitles = [...record.guessedChineseTitles, matched.chinese_title];

      await ctx.database.set("mcdle", { channelId: session.channelId }, {
        guesses: updatedGuesses,
        guessedChineseTitles: updatedChineseTitles,
      });

      // 生成截图并发送
      await generateAndSendComparison(session, updatedGuesses);

      // 检查是否猜中
      if (matched.chinese_title === answer.chinese_title) {
        await sendMsg(session, `恭喜你猜对啦！\n答案：${matched.chinese_title}\n猜测：${record.guesses.length + 1} 次`);
        await ctx.database.set("mcdle", { channelId: session.channelId }, {
          gameEnded: true,
          answer: null,
          guesses: [],
          guessedChineseTitles: [],
          gameMode: null
        });

        // 更新排行榜
        await updateRank(session.userId, session.username, record.gameMode);
      }
    }
  }

  function bz(session: Session) {
    return sendMsg(session,
      [
        "MCDLE 我的世界猜谜（类 Wordle）",
        "玩法核心：根据猜测物品/生物/方块与答案字段对应，标记正确、部分匹配、不匹配。",
        "颜色标识：",
        "🟩 绿色 - 字段完全匹配",
        "🟨 黄色 - 部分匹配",
        "🟥 红色 - 不匹配",
        "🟥⬆️ 红色上箭头 - 答案更大",
        "🟥⬇️ 红色下箭头 - 答案更小",
        "使用指令：mcdle.猜 [名称] 进行开始或猜测，mcdle.排行榜 查看成绩。",
        `每日游玩次数限制：${cfg.dailyPlayLimit}次`,
        "我的世界中文Wiki：https://zh.minecraft.wiki/w/Minecraft_Wiki",
      ].join("\n")
    );
  }

  async function phb(session: Session) {
      // 获取排行榜，根据totalSuccessCount排序，限制个数为配置maxRank
      const ranks = await ctx.database.get("mcdle_rank", {}, {
          limit: cfg.maxRank,
          sort: { totalSuccessCount: 'desc' }
      });
      if (!ranks || ranks.length === 0) {
          await sendMsg(session, "暂无排行榜数据");
          return;
      }
      const text = "MCDLE 排行榜：\n" + ranks.map((r, i) => `${i + 1}. ${r.username} ${r.totalSuccessCount}`).join("\n") + "\n...";
      await sendMsg(session, text);
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

  async function updateRank(userId: string, username: string, mode: 'mob' | 'item' | 'block') {
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
  }

  async function generateAndSendComparison(session: Session, guesses: any[]) {
    // 这里先使用文本结果展示猜测对比，待后续实现HTML截图功能
    if (guesses.length === 0) {
      await sendMsg(session, "暂无猜测结果");
      return;
    }
    const lastGuess = guesses[guesses.length - 1];
    let resultText = "";

    // 先放置 wiki_image_url 的图片，不带 gui 标记
    if (!cfg.disableImages && lastGuess.wiki_image_url) {
      resultText += `${h.image(lastGuess.wiki_image_url)}\n`;
    }
    // 放置 chinese_title
    if (lastGuess.chinese_title) {
      resultText += `名称：${lastGuess.chinese_title}\n`;
    }

    for (const key in lastGuess) {
      if (key.endsWith('_gui')) continue;
      // 不展示 id, title, url, image_url 字段
      if (key === 'id' || key === 'title' || key === 'url' || key === 'image_url') continue;
      if (key === 'wiki_image_url' || key === 'chinese_title') continue; // 已显示图片和中文标题，跳过后续输出

      const guiKey = `${key}_gui`;
      const guiStatus = lastGuess[guiKey];

      const addText = cfg.addStatusTextAfterEmoji;

      let statusEmoji = "❓" + (addText ? "(未知)" : "");
      if (guiStatus === 'true') statusEmoji = "🟩" + (addText ? "(完全匹配)" : "");
      else if (guiStatus === 'mixed') statusEmoji = "🟨" + (addText ? "(部分匹配)" : "");
      else if (guiStatus === 'false') statusEmoji = "🟥" + (addText ? "(不匹配)" : "");
      else if (guiStatus === 'false_up') statusEmoji = "🟥⬆️" + (addText ? "(答案更大)" : "");
      else if (guiStatus === 'false_down') statusEmoji = "🟥⬇️" + (addText ? "(答案更小)" : "");

      // 中文字段名，默认用原key
      const displayKey = keyMap[key] || key;

      // 中文字段值，支持多为数组或字符串的自动替换
      let value = lastGuess[key];
      if (Array.isArray(value)) {
        // 针对数组字段，中文化每个元素并拼接
        value = value.map(v => {
          if (typeof v === 'string' && valueMap[key]?.[v]) {
            return valueMap[key][v];
          }
          return v;
        }).join('、');
      } else if (typeof value === 'string') {
        // 对字符串直接替换
        if (valueMap[key]?.[value]) {
          value = valueMap[key][value];
        }
      }

      resultText += `${displayKey}: ${value} ${statusEmoji}\n`;
    }

    await sendMsg(session, resultText);
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
    const [messageId]  = await session.send(msg);

    if (cfg.retractDelay > 0 && messageId) {
      const prevMessage = lastMessageInfo.get(session.channelId);

      if (prevMessage) {
        const timePassed = Date.now() - prevMessage.timestamp;
        const remainingDelay = cfg.retractDelay * 1000 - timePassed;

        if (timePassed < 118000) {
          // 留2秒余量
          setTimeout(async () => {
            try {
              await session.bot.deleteMessage(session.channelId, prevMessage.id);
            } catch (error: any) {
              logger.warn(`Failed to retract message ${prevMessage.id}: ${error.message}`);
            }
          }, remainingDelay);
        }
      }

      lastMessageInfo.set(session.channelId, { id: messageId, timestamp: Date.now() });
    }
  }
}
