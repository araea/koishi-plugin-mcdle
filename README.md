# 我的世界猜谜

Koishi 插件：玩《我的世界》猜谜，凭属性提示从生物、物品、方块中锁定唯一答案

[![GitHub](https://img.shields.io/badge/GitHub-araea%2Fkoishi--plugin--mcdle-181717?logo=github&logoColor=white)](https://github.com/araea/koishi-plugin-mcdle)
[![npm](https://img.shields.io/npm/v/koishi-plugin-mcdle?logo=npm&logoColor=white&color=CB3837)](https://www.npmjs.com/package/koishi-plugin-mcdle)

## 安装

```sh
npm i koishi-plugin-mcdle
```

启用插件，并安装 `database` 服务。图片输出可选，需要 `puppeteer` 服务。

## 快速使用

发送 `mcdle` 查看玩法与全部指令。发送 `mcdle.猜 [名称]` 开局或提交猜测；首次猜测的词条决定题目类型（生物 / 物品 / 方块）。

| 指令 | 说明 |
| --- | --- |
| `mcdle` | 查看玩法与指令 |
| `mcdle.猜 [名称]` | 开局或提交猜测 |
| `mcdle.裸猜 [开/关]` | 切换本频道无前缀续猜 |
| `mcdle.排行榜` | 查看本群战绩 |
| `mcdle.词库` | 查看全部词条 |

提示颜色：🟩 完全匹配，🟨 部分匹配，🟥 不匹配；🟥⬆️ / 🟥⬇️ 表示答案更大或更小。裸猜设置仅对当前频道有效，插件重载后恢复默认。

## 配置

| 配置项 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `atReply` | boolean | `false` | 回复时 @ 用户 |
| `quoteReply` | boolean | `false` | 回复时引用消息 |
| `enableDirectInput` | boolean | `false` | 对局中直接发送词条名称即可续猜 |
| `addStatusTextAfterEmoji` | boolean | `true` | 在状态方块后补一段文字说明 |
| `maxRank` | number | `10` | 排行榜最多显示的人数 |
| `dailyPlayLimit` | number | `1` | 每个频道每日可开始的局数，跨零点重置 |
| `retractDelay` | number | `0` | 自动撤回延迟（秒），0 表示不撤回 |
| `allowRepeatedGuesses` | boolean | `false` | 允许重复提交已猜过的词条 |
| `disableImages` | boolean | `false` | 全部改用文本，不发送图片 |

## 限制 / 风险

依赖 `database` 服务持久化对局与战绩。图片输出需 `puppeteer`，未安装或渲染失败时自动回退为等价文本，不中断对局。

裸猜为各频道内存态，插件重载后回到配置默认。

## 链接

- [设计系统](DESIGN_SYSTEM.md)
- [MIT](LICENSE-MIT) / [Apache-2.0](LICENSE-APACHE)
