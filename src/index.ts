import { Context, h, Schema, Session } from 'koishi'
import { mobData, blockData, itemData, MobData, BlockData, ItemData } from './data';
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
export interface Config {
  atReply: boolean;
  quoteReply: boolean;
  isEnableMiddleware: boolean;
  maxRank: number;
  dailyPlayLimit: number;
}

export const Config: Schema<Config> = Schema.object({
  atReply: Schema.boolean().default(false).description("响应时@用户"),
  quoteReply: Schema.boolean().default(true).description("响应时引用消息"),
  isEnableMiddleware: Schema.boolean().default(false).description("启用中间件（无需指令直接猜测）"),
  maxRank: Schema.number().default(10).min(0).description("排行榜最大显示人数"),
  dailyPlayLimit: Schema.number().default(1).min(1).description("每日游玩次数上限"),
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

      // 如果本局游戏已经猜过的中文标题，则直接next()
      if (game.guessedChineseTitles.includes(content)) {
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
  ctx.command("mcdle", "我的世界wordle");
  ctx.command("mcdle.猜 [guess:string]").action(async ({ session }, guess) => c(session, guess?.trim()));
  ctx.command("mcdle.帮助").action(async ({ session }) => bz(session));
  ctx.command("mcdle.排行榜").action(async ({ session }) => phb(session));
  ctx.command("mcdle.词库").action(async ({ session }) => ck(session));

  // zlhs*
  async function ck(session: Session) {
    // 检查是否为onebot适配器且支持合并转发
    if (session.bot?.platform === 'onebot' && session.bot?.internal?.sendForwardMsg) {
      // 创建合并转发消息节点
      const nodes = [
        {
          type: 'node',
          data: {
            name: 'MCDLE词库',
            uin: session.bot.selfId,
            content: `生物词库：\n${mobChineseTitle.join(' ')}`
          }
        },
        {
          type: 'node',
          data: {
            name: 'MCDLE词库',
            uin: session.bot.selfId,
            content: `方块词库：\n${blockChineseTitle.join(' ')}`
          }
        },
        {
          type: 'node',
          data: {
            name: 'MCDLE词库',
            uin: session.bot.selfId,
            content: `物品词库：\n${itemChineseTitle.join(' ')}`
          }
        }
      ];

      try {
        // 发送合并转发消息
        await session.bot.internal.sendForwardMsg(session.channelId, nodes);
        return;
      } catch (error) {
        // 如果合并转发失败，降级为普通消息发送
        console.warn('合并转发失败，降级为普通消息:', error);
      }
    }

    // 非onebot适配器或合并转发失败时使用普通消息发送
    // 发送生物词库
    await sendMsg(session, `生物词库：\n${mobChineseTitle.join(' ')}`);

    // 发送方块词库
    await sendMsg(session, `方块词库：\n${blockChineseTitle.join(' ')}`);

    // 发送物品词库
    await sendMsg(session, `物品词库：\n${itemChineseTitle.join(' ')}`);
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

      // 判断是否已经猜过该中文标题
      if (record.guessedChineseTitles.includes(guess)) {
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
          await sendMsg(session, `${guess} 不在词库中\n\n是否想猜：${suggestions}？`);
        } else {
          await sendMsg(session, `${guess} 不在词库中`);
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
    if (lastGuess.wiki_image_url) {
      resultText += `${h.image(lastGuess.wiki_image_url)}\n`;
      // 放置 chinese_title 在图片后面
      if (lastGuess.chinese_title) {
        resultText += `名称：${lastGuess.chinese_title}\n`;
      }
    }

    for (const key in lastGuess) {
      if (key.endsWith('_gui')) continue;
      // 不展示 id, title, url, image_url 字段
      if (key === 'id' || key === 'title' || key === 'url' || key === 'image_url') continue;
      if (key === 'wiki_image_url' || key === 'chinese_title') continue; // 已显示图片和中文标题，跳过后续输出

      const guiKey = `${key}_gui`;
      const guiStatus = lastGuess[guiKey];

      let statusEmoji = "❓";
      if (guiStatus === 'true') statusEmoji = "🟩";
      else if (guiStatus === 'mixed') statusEmoji = "🟨";
      else if (guiStatus === 'false') statusEmoji = "🟥";
      else if (guiStatus === 'false_up') statusEmoji = "🟥⬆️";
      else if (guiStatus === 'false_down') statusEmoji = "🟥⬇️";

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

  async function sendMsg(session: Session, msg: string) {
    if (cfg.atReply) {
      msg = `${h.at(session.userId)}${h("p", "")}${msg}`;
    }
    if (cfg.quoteReply) {
      msg = `${h.quote(session.messageId)}${msg}`;
    }
    await session.send(msg);
  }
}


// 字段名中文映射
const keyMap: Record<string, string> = {
  renewable: "可再生性",
  tool: "工具",
  luminous: "发光性",
  full_block: "是否为完整方块",
  flammable: "可燃性",
  fire_catch: "火焰传播性",
  transparent: "透明性",
  rarity: "稀有度",
  obtaining: "获得方式",
  usage: "用途",
  inventory_categories: "库存类别",
  recipe: "合成方式",
  loot: "掉落方式",
  behavior: "行为",
  spawn: "生成方式",
  classification: "分类",
  id: "ID",
  title: "标题",
  url: "链接",
  image_url: "图片链接",
  health: "生命值",
  height: "高度",
  initial_release: "初始版本",
  chinese_title: "中文标题",
  wiki_image_url: "Wiki 图片链接",
  stackable: "堆叠数量",
  blast_resistance: "爆炸抗性",
  hardness: "硬度",
};

// 字段值中文映射
const valueMap: Record<string, Record<string, string>> = {
  renewable: {
    yes: "是",
    partial: "部分",
    no: "否",
  },
  tool: {
    any_tool: "任意工具",
    shears: "剪刀",
    axe: "斧头",
    "axe, pickaxe": "斧头, 镐",
    "hoe, shears, sword": "锄头, 剪刀, 剑",
    pickaxe: "镐",
    hoe: "锄头",
    none: "无",
    "axe, sword": "斧头, 剑",
    shovel: "铲子",
    "shears, sword": "剪刀, 剑",
    "axe, shears": "斧头, 剪刀",
    bucket: "桶",
    "brush, shovel": "刷子, 铲子",
    "shears, sword, axe": "剪刀, 剑, 斧头",
  },
  luminous: {
    no: "否",
    partial: "部分",
    yes: "是",
    "0": "无",
  },
  full_block: {
    no: "否",
    yes: "是",
    partial: "部分",
  },
  flammable: {
    no: "否",
    yes: "是",
    partial: "部分",
  },
  fire_catch: {
    no: "否",
    partial: "部分",
    yes: "是",
  },
  transparent: {
    yes: "是",
    no: "否",
    partial: "部分",
  },
  rarity: {
    common: "普通",
    uncommon: "不常见",
    epic: "史诗",
    rare: "稀有",
    mixed: "混合",
  },
  obtaining: {
    "Mob loot": "怪物掉落",
    "Crafting": "合成",
    "Breaking": "破坏",
    "Natural generation": "自然生成",
    "Chest loot": "箱子掉落",
    "Trading": "交易",
    "Fishing": "钓鱼",
    "Tactical fishing": "战术钓鱼",
    "Generated loot": "生成物品",
    "Bartering": "讨价还价",
    "Carrot/warped fungus on a stick": "胡萝卜/扭曲菌棒",
    "Post-generation": "后期生成",
    "Interacting": "交互",
    "Brewing": "酿造",
    "Entity loot": "实体掉落",
    "Commands": "指令",
    "Mob Loot": "怪物掉落",
    "Container Loot": "容器掉落",
    "Sniffer": "嗅探者",
    "Mining": "采矿",
    "Smelting": "熔炼",
    "Villager gifts": "村民礼物",
    "Filling bottles": "装瓶",
    "Cat gifts": "猫的礼物",
    "Container loot": "容器掉落",
    "Vault loot": "地牢掉落",
    "Block loot": "方块掉落",
    "Picking up arrows": "拾取箭矢",
    "Retrieving": "回收",
    "Cooking": "烹饪",
    "Farming": "耕作",
    "Composters": "堆肥箱",
    "Grindstones": "研磨石",
    "Eating": "食用",
    "Upgrading": "升级",
    "Villagers": "村民",
    "Cartography table": "制图桌",
    "Starting map": "起始地图",
    "Drops": "掉落物",
    "Enchanting": "附魔",
    "Drinking": "饮用",
    "Mud": "泥土",
    "Cauldrons": "炼药锅",
    "Harvesting": "收获",
    "Archaeology": "考古",
    "Signing a book and quill": "签书和羽毛笔",
    "Copying": "复制",
    "Suspicious block loot": "可疑方块掉落",
    "Identification": "鉴定",
    "Creative mode": "创造模式"
  },
  usage: {
    "Crafting ingredient": "合成材料",
    "Repairing": "修理",
    "Brewing ingredient": "酿造材料",
    "Crafting": "合成",
    "Trading": "交易",
    "Fuel": "燃料",
    "Transportation": "运输",
    "Decoration": "装饰",
    "Farming": "耕作",
    "Breeding": "繁殖",
    "Taming": "驯服",
    "Composting": "堆肥",
    "Storage": "存储",
    "Experience": "经验",
    "Weapon": "武器",
    "Enchantments": "附魔",
    "Fillable": "可装填",
    "Bucket of tropical fish": "热带鱼桶",
    "Bucket of axolotl": "钝口螈桶",
    "Bucket of tadpole": "蝌蚪桶",
    "Fireworks": "烟花",
    "combat": "战斗",
    "Spawning chickens": "生成小鸡",
    "Healing the ender dragon": "治疗末影龙",
    "Respawning the ender dragon": "重生末影龙",
    "Explosions": "爆炸",
    "Beams": "光束",
    "Properties": "属性",
    "Teleporting": "传送",
    "Stasis chamber": "静止室",
    "Spawning endermites": "生成末影蠕虫",
    "Locating strongholds": "定位要塞",
    "Activating end portals": "激活末地传送门",
    "Launching fireworks": "发射烟花",
    "Elytra": "鞘翅",
    "Crossbow": "弩",
    "Fishing": "钓鱼",
    "Hooking mobs and other entities": "钩住怪物和实体",
    "Other usage": "其他用途",
    "Igniting": "点燃",
    "Placement": "放置",
    "Growth": "生长",
    "Food": "食物",
    "Light": "光源",
    "Item display": "物品展示",
    "Rotation": "旋转",
    "Glow item frames": "发光物品框",
    "Cooking ingredient": "烹饪材料",
    "Growth mechanics": "生长机制",
    "Smelting": "熔炼",
    "Cauldrons": "炼药锅",
    "Leashing mobs": "拴住怪物",
    "Creating area effect clouds": "创建区域效果云",
    "Lingering water bottle": "残留水瓶",
    "Filling cauldrons": "填充炼药锅",
    "Uncraftable lingering potion": "不可合成残留药水",
    "Normal attack": "普通攻击",
    "Smash attack": "重击攻击",
    "Mining": "采矿",
    "Dismounting": "下坐骑",
    "Item transportation": "物品运输",
    "Command Execution": "命令执行",
    "Train mechanics": "火车机制",
    "Item Pickup": "拾取物品",
    "Explosion": "爆炸",
    "Bad Omen": "厄运",
    "Pitcher Crop": "投掷作物",
    "Feeding": "喂养",
    "Smelting ingredient": "熔炼材料",
    "Block Placing": "方块放置",
    "Redstone component": "红石组件",
    "Smithing ingredient": "铁匠台材料",
    "Behavior": "行为",
    "Dispenser": "发射器",
    "Brewing": "酿造",
    "Using": "使用",
    "Splash water bottles": "喷溅水瓶",
    "Uncraftable splash potion": "不可合成喷溅药水",
    "Entity movement": "实体移动",
    "Crop": "农作物",
    "Unlocking": "解锁",
    "Melee attack": "近战攻击",
    "Ranged attack": "远程攻击",
    "Impaling damage": "刺杀伤害",
    "Dispensers": "发射器",
    "Filling bucket with mobs": "用怪物装桶",
    "Throwing": "投掷",
    "Allay duplication": "小助手复制",
    "Redstone circuits": "红石电路",
    "Special properties": "特殊属性",
    "No-effect tipped arrows": "无效果镶嵌箭",
    "Loom ingredient": "织机材料",
    "Dye": "染料",
    "Fertilizer": "肥料",
    "Creating new plants": "创造新植物",
    "Farmer villagers": "农夫村民",
    "Chiseled bookshelf": "雕刻书架",
    "Enchanting": "附魔",
    "Writing": "写作",
    "Lecterns": "讲坛",
    "Formatting codes": "格式代码",
    "Signing": "签名",
    "Mooshrooms": "蘑菇牛",
    "Archeology": "考古",
    "Armadillos": "犰狳",
    "Riding a pig": "骑猪",
    "Defense points": "防御点数",
    "Knockback resistance": "击退抗性",
    "Durability": "耐久度",
    "Armor trimming": "护甲修饰",
    "Smelting usage": "熔炼用途",
    "Piglins": "猪灵",
    "Powder snow": "粉末雪",
    "Knockback Resistance": "击退抗性",
    "Turtle shell effect": "乌龟壳效果",
    "Wolves": "狼",
    "Parrots": "鹦鹉",
    "Dyeing armor": "染色护甲",
    "Dyeing collars": "染色项圈",
    "Dyeing sheep": "染色羊毛",
    "Dyeing signs": "染色告示牌",
    "Modify States": "状态修改",
    "Chopping": "砍伐",
    "Stripping": "剥树皮",
    "Harvesting": "收割",
    "Tilling": "耕种",
    "Protection": "保护",
    "Dyeing": "染色",
    "Digging": "挖掘",
    "Dirt paths": "泥土路径",
    "Campfire": "篝火",
    "Attacking": "攻击",
    "Damage": "伤害",
    "Sword breaking times": "剑使用次数",
    "Flying": "飞行",
    "Mapping": "地图制作",
    "Map content": "地图内容",
    "Player marker and pointer": "玩家标记与指针",
    "Zooming out": "缩放",
    "Cloning": "克隆",
    "Marking points": "标记点",
    "Locking": "锁定",
    "Disenchanting": "解附魔",
    "Horses": "马",
    "Sound the alarms!": "触发警报！",
    "Collecting liquids": "收集液体",
    "Crafting ingredients": "合成材料",
    "Signs": "告示牌",
    "Bartering": "讨价还价",
    "Beacons": "信标",
    "Curing zombie villagers": "治愈僵尸村民",
    "Animal food": "动物食物",
    "Waxing": "打蜡",
    "Healing iron golems": "治疗铁傀儡",
    "Learn Recipes": "学习配方",
    "Play Music": "播放音乐",
    "Limitations": "限制",
    "Easter eggs": "隐藏彩蛋",
    "Modifiers": "修改器",
    "Base potions": "基础药水",
    "Effect potions": "效果药水",
    "Uncraftable potion": "不可合成药水",
    "Joke potions": "恶搞药水",
    "Undead mobs": "亡灵生物",
    "Mud conversion": "泥巴转换",
    "Filling cauldrons with Potions": "用药水填充炼药锅",
    "Cats": "猫",
    "Dolphins": "海豚",
    "Ride Mobs": "骑乘生物",
    "Shearing": "剪毛",
    "Breaking blocks": "破坏方块",
    "Wolf Armor": "狼护甲",
    "Defense": "防御",
    "Applying patterns": "应用图案",
    "Zoom": "缩放",
    "Revive Token": "复活令牌",
    "Crafting Ingredient": "合成材料",
    "Brewing stand fuel": "酿造台燃料",
    "Spawning mobs": "生成生物",
    "Baby mobs": "幼年生物",
    "Monster Spawners": "怪物刷怪笼"
  },
  inventory_categories: {
    ingredients: "材料",
    tools_and_utilities: "工具与实用物品",
    redstone_blocks: "红石相关方块",
    functional_blocks: "功能性方块",
    natural_blocks: "自然方块",
    combat: "战斗物品",
    food_and_drinks: "食物与饮料",
    operator_utilities: "管理员工具",
    none: "无",
    spawn_eggs: "生成蛋"
  },
  recipe: {
    none: "无",
    crafting_table: "工作台",
    furnace: "熔炉",
    brewing_stand: "酿造台"
  },
  loot: {
    mob: "怪物掉落",
    none: "无",
    container: "容器",
    trading: "交易",
    fishing: "钓鱼"
  },
  behavior: {
    passive: "被动",
    neutral: "中立",
    hostile: "敌对",
    defensive: "防御"
  },
  spawn: {
    structure: "生成结构",
    duplication: "复制",
    biome: "生物群系",
    breeding: "繁殖",
    light_level: "光照等级",
    block: "方块",
    spawner: "刷怪笼",
    grass: "草地",
    jockey: "骑乘",
    projectile: "投射物",
    conversion: "转换",
    summon: "召唤",
    reinforcements: "增援",
    raids: "袭击",
    command: "指令",
    overworld: "主世界",
    magic: "魔法",
    lightning: "闪电",
    hatching: "孵化",
    sieges: "围攻"
  },
  classification: {
    none: "无",
    animal: "动物",
    aquatic: "水生",
    arthropod: "节肢动物",
    undead: "亡灵",
    boss: "首领",
    illager: "掠夺者",
    golem: "傀儡"
  },
};

const blockChineseTitle = [
  "按钮",
  "灌木丛",
  "仙人掌花",
  "嘎枝之心",
  "门",
  "眼眸花",
  "栅栏",
  "栅栏门",
  "萤火虫灌木丛",
  "树叶",
  "枯叶",
  "原木",
  "树脂团",
  "树脂块",
  "树脂砖块",
  "苍白垂须",
  "苍白苔藓块",
  "苍白覆地苔藓",
  "木板",
  "压力板",
  "树苗",
  "悬挂式告示牌",
  "枯草丛",
  "台阶",
  "楼梯",
  "测试方块",
  "活板门",
  "野花簇",
  "木头",
  "激活铁轨",
  "绒球葱",
  "紫水晶块",
  "紫水晶簇",
  "远古残骸",
  "安山岩",
  "安山岩墙",
  "铁砧",
  "杜鹃花丛",
  "竹子",
  "竹块",
  "竹马赛克",
  "木桶",
  "屏障",
  "玄武岩",
  "信标",
  "基岩",
  "蜂巢",
  "蜂箱",
  "甜菜根",
  "钟",
  "大型垂滴叶",
  "旗帜",
  "床",
  "蜡烛",
  "地毯",
  "混凝土",
  "混凝土粉末",
  "合成器",
  "带釉陶瓦",
  "潜影盒",
  "染色玻璃",
  "染色玻璃板",
  "陶瓦",
  "羊毛",
  "黑石",
  "高炉",
  "蓝冰",
  "骨块",
  "书架",
  "珊瑚",
  "珊瑚块",
  "珊瑚扇",
  "酿造台",
  "红砖块",
  "蘑菇",
  "蘑菇方块",
  "仙人掌",
  "蛋糕",
  "方解石",
  "校频幽匿感测体",
  "营火",
  "胡萝卜",
  "制图台",
  "炼药锅",
  "发光浆果",
  "锁链",
  "铁链",
  "铜链",
  "箱子",
  "雕纹书架",
  "紫颂花",
  "紫颂植株",
  "黏土",
  "煤炭块",
  "煤矿石",
  "砂土",
  "深板岩圆石",
  "圆石",
  "蜘蛛网",
  "可可豆",
  "命令方块",
  "红石比较器",
  "堆肥桶",
  "潮涌核心",
  "铜块",
  "铜灯",
  "铜门",
  "铜格栅",
  "铜矿石",
  "铜活板门",
  "工作台",
  "生物头颅",
  "沉重核心",
  "下界菌",
  "菌岩",
  "菌索",
  "哭泣的黑曜石",
  "阳光探测器",
  "枯萎的灌木",
  "饰纹陶罐",
  "深板岩",
  "探测铁轨",
  "钻石块",
  "钻石矿石",
  "闪长岩",
  "泥土",
  "土径",
  "发射器",
  "龙蛋",
  "干海带块",
  "滴水石块",
  "投掷器",
  "绿宝石块",
  "绿宝石矿石",
  "附魔台",
  "末地传送门框架",
  "末地烛",
  "末地石",
  "末地石砖",
  "末影箱",
  "耕地",
  "蕨",
  "火",
  "制箭台",
  "花盆",
  "青蛙卵",
  "熔炉",
  "发光地衣",
  "荧石",
  "金块",
  "金矿石",
  "花岗岩",
  "草方块",
  "沙砾",
  "砂轮",
  "垂根",
  "干草捆",
  "重质测重压力板",
  "蜂蜜块",
  "蜜脾块",
  "漏斗",
  "冰",
  "虫蚀方块",
  "铁栏杆",
  "铁块",
  "铁门",
  "铁矿石",
  "南瓜灯",
  "拼图方块",
  "唱片机",
  "海带",
  "梯子",
  "灯笼",
  "青金石块",
  "青金石矿石",
  "讲台",
  "拉杆",
  "光源方块",
  "避雷针",
  "睡莲",
  "磁石",
  "织布机",
  "岩浆块",
  "红树胎生苗",
  "红树根",
  "西瓜",
  "西瓜种子",
  "苔藓块",
  "覆地苔藓",
  "苔石",
  "泥巴",
  "泥砖",
  "沾泥的红树根",
  "菌丝体",
  "雕纹下界砖块",
  "下界金矿石",
  "下界石英矿石",
  "下界苗",
  "下界疣",
  "下界疣块",
  "下界合金块",
  "下界岩",
  "音符盒",
  "侦测器",
  "黑曜石",
  "蛙明灯",
  "浮冰",
  "泥坯",
  "石化橡木台阶",
  "粉红色花簇",
  "活塞",
  "瓶子草荚果",
  "瓶子草",
  "灰化土",
  "滴水石锥",
  "雕纹磨制黑石",
  "马铃薯",
  "细雪",
  "动力铁轨",
  "暗海晶石",
  "雕刻南瓜",
  "南瓜种子",
  "紫珀块",
  "石英块",
  "铁轨",
  "粗铜块",
  "粗金块",
  "粗铁块",
  "红石块",
  "红石灯",
  "红石矿石",
  "红石火把",
  "红石粉",
  "强化深板岩",
  "红石中继器",
  "重生锚",
  "缠根泥土",
  "红沙",
  "雕纹红砂岩",
  "脚手架",
  "幽匿块",
  "幽匿催发体",
  "幽匿感测体",
  "幽匿尖啸体",
  "幽匿脉络",
  "海晶灯",
  "海泡菜",
  "海草",
  "草丛",
  "菌光体",
  "黏液块",
  "小型垂滴叶",
  "锻造台",
  "烟熏炉",
  "平滑石英块",
  "平滑石头",
  "嗅探兽蛋",
  "雪",
  "雪块",
  "灵魂沙",
  "灵魂土",
  "刷怪笼",
  "海绵",
  "孢子花",
  "石头",
  "雕纹石砖",
  "切石机",
  "结构方块",
  "结构空位",
  "甘蔗",
  "可疑的方块",
  "甜浆果",
  "标靶",
  "遮光玻璃",
  "TNT",
  "火把",
  "火把花",
  "陷阱箱",
  "试炼刷怪笼",
  "线",
  "绊线钩",
  "凝灰岩",
  "海龟蛋",
  "缠怨藤",
  "宝库",
  "藤蔓",
  "诡异疣块",
  "垂泪藤",
  "小麦种子",
  "凋灵玫瑰",
  "失水恶魂",
  "铜箱子",
  "铜傀儡像",
  "展示架"
]

const mobChineseTitle = [
  "悦灵",
  "犰狳",
  "美西螈",
  "蝙蝠",
  "蜜蜂",
  "烈焰人",
  "沼骸",
  "旋风人",
  "骆驼",
  "猫",
  "洞穴蜘蛛",
  "鸡",
  "鳕鱼",
  "牛",
  "嘎枝",
  "苦力怕",
  "海豚",
  "驴",
  "溺尸",
  "远古守卫者",
  "末影龙",
  "末影人",
  "末影螨",
  "唤魔者",
  "狐狸",
  "青蛙",
  "恶魂",
  "快乐恶魂",
  "巨人",
  "发光鱿鱼",
  "山羊",
  "守卫者",
  "马",
  "疣猪兽",
  "尸壳",
  "幻术师",
  "铁傀儡",
  "兔子",
  "羊驼",
  "岩浆怪",
  "哞菇",
  "骡",
  "豹猫",
  "熊猫",
  "鹦鹉",
  "幻翼",
  "猪",
  "猪灵",
  "猪灵蛮兵",
  "掠夺者",
  "北极熊",
  "河豚",
  "劫掠兽",
  "鲑鱼",
  "绵羊",
  "潜影贝",
  "蠹虫",
  "骷髅",
  "骷髅马",
  "史莱姆",
  "雪傀儡",
  "嗅探兽",
  "蜘蛛",
  "鱿鱼",
  "流浪者",
  "炽足兽",
  "蝌蚪",
  "热带鱼",
  "海龟",
  "恼鬼",
  "村民",
  "卫道士",
  "流浪商人",
  "监守者",
  "女巫",
  "凋灵",
  "凋灵骷髅",
  "狼",
  "僵尸疣猪兽",
  "僵尸",
  "僵尸马",
  "僵尸村民",
  "僵尸猪灵",
  "铜傀儡"
]

const itemChineseTitle = [
  "旋风棒",
  "船",
  "运输船",
  "盔甲架",
  "甜菜种子",
  "收纳袋",
  "附魔之瓶",
  "弓",
  "铁桶",
  "美西螈桶",
  "胡萝卜",
  "可可豆",
  "弩",
  "鸡蛋",
  "末地水晶",
  "末影珍珠",
  "末影之眼",
  "火焰弹",
  "烟花火箭",
  "钓鱼竿",
  "打火石",
  "发光浆果",
  "物品展示框",
  "海带",
  "熔岩桶",
  "拴绳",
  "滞留药水",
  "重锤",
  "西瓜种子",
  "矿车",
  "运输矿车",
  "命令方块矿车",
  "动力矿车",
  "漏斗矿车",
  "TNT矿车",
  "下界疣",
  "不祥之瓶",
  "画",
  "瓶子草荚果",
  "马铃薯",
  "细雪桶",
  "南瓜种子",
  "红石粉",
  "树脂砖",
  "雪球",
  "喷溅药水",
  "线",
  "甜浆果",
  "火把花种子",
  "试炼钥匙",
  "三叉戟",
  "水桶",
  "小麦种子",
  "风弹",
  "紫水晶碎片",
  "苹果",
  "箭",
  "药箭",
  "光灵箭",
  "烤马铃薯",
  "甜菜根",
  "甜菜汤",
  "骨头",
  "骨粉",
  "书",
  "书与笔",
  "碗",
  "面包",
  "刷子",
  "胡萝卜钓竿",
  "靴子",
  "胸甲",
  "头盔",
  "护腿",
  "紫颂果",
  "指南针",
  "熟鸡肉",
  "熟鳕鱼",
  "熟羊肉",
  "熟猪排",
  "熟兔肉",
  "熟鲑鱼",
  "曲奇",
  "染料",
  "调试棒",
  "斧",
  "锄",
  "马铠",
  "镐",
  "锹",
  "剑",
  "干海带",
  "鞘翅",
  "地图",
  "附魔书",
  "附魔金苹果",
  "山羊角",
  "玻璃瓶",
  "荧光墨囊",
  "金锭",
  "金苹果",
  "金胡萝卜",
  "蜜脾",
  "蜂蜜瓶",
  "墨囊",
  "铁锭",
  "知识之书",
  "青金石",
  "西瓜片",
  "奶桶",
  "蘑菇煲",
  "音乐唱片",
  "命名牌",
  "毒马铃薯",
  "药水",
  "河豚",
  "南瓜派",
  "兔肉煲",
  "生牛肉",
  "生鸡肉",
  "生鳕鱼",
  "生羊肉",
  "生猪排",
  "生兔肉",
  "生鲑鱼",
  "腐肉",
  "鞍",
  "剪刀",
  "盾牌",
  "蜘蛛眼",
  "望远镜",
  "牛排",
  "糖",
  "谜之炖菜",
  "不死图腾",
  "热带鱼",
  "诡异菌钓竿",
  "小麦",
  "成书",
  "陶片",
  "旗帜图案",
  "烈焰粉",
  "烈焰棒",
  "红砖",
  "木炭",
  "黏土球",
  "时钟",
  "煤炭",
  "锻造模板",
  "铜锭",
  "钻石",
  "唱片残片",
  "龙息",
  "回响碎片",
  "绿宝石",
  "羽毛",
  "发酵蛛眼",
  "烟火之星",
  "燧石",
  "恶魂之泪",
  "闪烁的西瓜片",
  "荧石粉",
  "金粒",
  "火药",
  "海洋之心",
  "铁粒",
  "皮革",
  "岩浆膏",
  "鹦鹉螺壳",
  "下界砖",
  "下界石英",
  "下界之星",
  "下界合金锭",
  "下界合金碎片",
  "下界合金升级",
  "纸",
  "幻翼膜",
  "爆裂紫颂果",
  "海晶砂粒",
  "海晶碎片",
  "兔子皮",
  "兔子脚",
  "粗铜",
  "粗金",
  "粗铁",
  "追溯指针",
  "海龟鳞甲",
  "潜影壳",
  "黏液球",
  "木棍",
  "刷怪蛋",
  "犰狳鳞甲",
  "狼铠",
  "挽具",
  "铜粒"
]
