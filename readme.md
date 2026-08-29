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

部分匹配的字段里，**被点亮的那几个标签**就是与答案重合的值 —— 图片中高亮显示，
文本中用 `【】` 括起。

## 指令

| 指令 | 说明 |
|------|------|
| `mcdle` | 游戏简介与快速上手 |
| `mcdle.猜 [名称]` | 开始一局，或提交一次猜测 |
| `mcdle.猜` | 局中直接使用，回看当前棋盘 |
| `mcdle.帮助` | 完整玩法说明 |
| `mcdle.排行榜` | 群内战绩 |
| `mcdle.词库` | 全部候选词条 |

## 图片

安装 [puppeteer](https://www.npmjs.com/package/koishi-plugin-puppeteer) 服务后，
棋盘、开局、揭晓与排行榜都会渲染成像素风卡片：内联 SVG 像素图标、我的世界式的
方块斜角，不依赖任何外部字体或图片资源。

puppeteer 是**可选**依赖。未安装、渲染超时或截图失败时，都会自动回退到等价的
文本形态，玩法与信息量不受影响；配置项 `disableImages` 可以强制只用文本。

## 致谢

- [Koishi](https://koishi.chat/)
- [MCDLE](https://www.mcdle.net/)
- [Minecraft Wiki](https://minecraft.wiki/w/Minecraft_Wiki)
- [@magisk317](https://github.com/magisk317)

## QQ 群

- 956758505

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
