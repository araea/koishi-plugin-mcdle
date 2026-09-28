# 我的世界猜谜

在 Koishi 群里玩《我的世界》猜谜，凭属性提示从生物、物品、方块中锁定唯一答案

[![GitHub](https://img.shields.io/badge/GitHub-仓库-blue)](https://github.com/araea/koishi-plugin-mcdle) [![npm](https://img.shields.io/badge/npm-包-red)](https://www.npmjs.com/package/koishi-plugin-mcdle)

## 安装

```sh
yarn add koishi-plugin-mcdle
```

在 Koishi 中启用，并安装 `database` 服务。图片输出可选，需要 `puppeteer` 服务。

## 快速使用

发送 `mcdle` 查看玩法与全部指令。发送 `mcdle.猜 [名称]` 开局或提交猜测。首次猜测的词条决定题目类型（生物 / 物品 / 方块）。

| 指令 | 说明 |
| --- | --- |
| `mcdle` | 查看玩法与指令 |
| `mcdle.猜 [名称]` | 开局或提交猜测 |
| `mcdle.裸猜 [开/关]` | 切换本频道无前缀续猜 |
| `mcdle.排行榜` | 查看本群战绩 |
| `mcdle.词库` | 查看全部词条 |

提示中绿色表示完全匹配，黄色表示部分匹配，红色表示不匹配。红色加上升或下降箭头表示答案更大或更小。裸猜设置仅对当前群有效，插件重载后恢复默认。

## 配置

| 配置项 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `atReply` | boolean | false | 回复时 @ 用户 |
| `quoteReply` | boolean | false | 回复时引用消息 |
| `enableDirectInput` | boolean | false | 对局中直接发送词条名称即可续猜，无需指令前缀 |
| `addStatusTextAfterEmoji` | boolean | true | 在状态方块后补一段文字说明 |
| `maxRank` | number（≥0） | 10 | 排行榜最多显示的人数 |
| `dailyPlayLimit` | number（≥1） | 1 | 每个频道每日可开始的局数，跨零点重置 |
| `retractDelay` | number（≥0） | 0 | 自动撤回延迟（秒），0 表示不撤回 |
| `allowRepeatedGuesses` | boolean | false | 允许重复提交已猜过的词条 |
| `disableImages` | boolean | false | 全部改用文本，不发送图片 |

## 限制 / 风险

依赖 `database` 服务持久化对局与战绩。图片输出需 `puppeteer`；未安装或渲染失败时自动回退为等价文本，不会中断对局。裸猜为各频道内存态，插件重载后回到配置默认。

## 必要链接

- [LICENSE-APACHE](LICENSE-APACHE) / [LICENSE-MIT](LICENSE-MIT)：双协议任选其一
