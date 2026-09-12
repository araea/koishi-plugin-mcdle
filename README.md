# koishi-plugin-mcdle

Minecraft 猜词游戏，词库覆盖生物、物品与方块

## 安装

```sh
yarn add koishi-plugin-mcdle
```

在 Koishi 配置中启用，并提供 database 服务；puppeteer 可选，用于图片输出。

## 指令

发送 `mcdle` 查看玩法与全部指令。

| 指令 | 说明 |
| --- | --- |
| `mcdle` | 玩法与指令说明 |
| `mcdle.猜 [名称]` | 用有效词条开局或猜测 |
| `mcdle.裸猜 [开/关]` | 切换本群无前缀续猜 |
| `mcdle.排行榜` | 群内战绩 |
| `mcdle.词库` | 全部词条 |

首次猜测的词条决定题目类型。裸猜设置只对当前群生效，插件重载后恢复默认。

提示符号：🟩 完全匹配，🟨 部分匹配，🟥 不匹配；🟥⬆️ 或 🟥⬇️ 表示答案更大或更小。

## 许可证

可按 [Apache-2.0](LICENSE-APACHE) 或 [MIT](LICENSE-MIT) 使用。
