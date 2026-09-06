koishi-plugin-mcdle
===================

[<img alt="github" src="https://img.shields.io/badge/github-araea/koishi__plugin__mcdle-8da0cb?style=for-the-badge&labelColor=555555&logo=github" height="20">](https://github.com/araea/koishi-plugin-mcdle)
[<img alt="npm" src="https://img.shields.io/npm/v/koishi-plugin-mcdle.svg?style=for-the-badge&color=fc8d62&logo=npm" height="20">](https://www.npmjs.com/package/koishi-plugin-mcdle)

Koishi 的 Minecraft 猜词游戏插件。

## 使用

`mcdle.猜 [名称]` 使用词库中的有效名称开局或猜测。首个词条决定生物、物品或方块模式，系统再从同类词库中抽取答案。开局后可用 `mcdle.裸猜` 临时切换本群的无前缀续猜；这一状态不改插件配置，插件重载后自动复原。

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
| `mcdle` | 查看帮助 |
| `mcdle.猜 [名称]` | 用有效词条开局或猜测 |
| `mcdle.裸猜 [开/关]` | 临时切换本群无前缀续猜 |
| `mcdle.帮助` | 完整说明 |
| `mcdle.排行榜` | 群内战绩 |
| `mcdle.词库` | 全部词条 |

## QQ 群

956758505

<br>

#### License

<sup>
Licensed under either of <a href="LICENSE-APACHE">Apache License, Version
2.0</a> or <a href="LICENSE-MIT">MIT license</a> at your option.
</sup>

<br>

<sub>
Unless you explicitly state otherwise, any contribution intentionally submitted
for inclusion in this crate by you, as defined in the Apache-2.0 license, shall
be dual licensed as above, without any additional terms or conditions.
</sub>
