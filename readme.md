koishi-plugin-mcdle
===================

[<img alt="github" src="https://img.shields.io/badge/github-araea/mcdle-8da0cb?style=for-the-badge&labelColor=555555&logo=github" height="20">](https://github.com/araea/koishi-plugin-mcdle)
[<img alt="npm" src="https://img.shields.io/npm/v/koishi-plugin-mcdle.svg?style=for-the-badge&color=fc8d62&logo=npm" height="20">](https://www.npmjs.com/package/koishi-plugin-mcdle)

Koishi 的 Minecraft 猜词游戏插件。根据 Minecraft 物品、生物和方块的属性特征，猜测正确的名称。

## 使用

1. 设置指令别名。
2. 发送 `mcdle` 查看帮助。

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

## 致谢

* [Koishi](https://koishi.chat/)
* [MCDLE](https://www.mcdle.net/)
* [Minecraft Wiki](https://minecraft.wiki/w/Minecraft_Wiki)
* [@mikasa-akria](https://github.com/mikasa-akria)

## QQ 群

* 956758505

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
