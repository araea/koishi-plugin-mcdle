import assert from "node:assert/strict";
import test from "node:test";
import { h, Session } from "koishi";
import { mobData } from "../src/data";
import {
  canHandleMiddlewareGuess,
  getMiddlewareGuess,
  Mcdle,
  resolveMiddlewareSwitch,
} from "../src";

function session(
  elements: h[],
  options: { quote?: boolean; isBot?: boolean } = {},
): Session {
  return {
    event: {
      user: { isBot: options.isBot },
      message: {
        elements,
        quote: options.quote ? { id: "quoted" } : undefined,
      },
    },
  } as unknown as Session;
}

function game(overrides: Partial<Mcdle> = {}): Mcdle {
  return {
    id: 1,
    channelId: "channel",
    answer: mobData.find((entry) => entry.chinese_title === "苦力怕")!,
    guesses: [],
    historyChineseTitles: ["苦力怕"],
    guessedChineseTitles: [],
    dailyPlayedToday: 1,
    gameEnded: false,
    lastGameStartTime: new Date("2026-09-01T00:00:00+08:00"),
    gameMode: "mob",
    formatVersion: 2,
    ...overrides,
  };
}

test("裸猜只接受一条无修饰且精确命中词库的纯文本", () => {
  assert.equal(getMiddlewareGuess(session([h.text("苦力怕")])), "苦力怕");
  assert.equal(getMiddlewareGuess(session([h.text("TNT")])), "TNT");

  for (const elements of [
    [h.text(" 苦力怕")],
    [h.text("苦力怕 ")],
    [h.text("苦力怕！")],
    [h.text("我猜苦力怕")],
    [h.text("不是词条")],
    [h.text("苦力怕"), h.text("僵尸")],
    [h("at", { id: "bot" }), h.text("苦力怕")],
    [h("image", { url: "https://example.com/image.png" })],
    [h("b", {}, "苦力怕")],
  ]) {
    assert.equal(getMiddlewareGuess(session(elements)), null);
  }
});

test("引用消息和机器人消息不会触发裸猜", () => {
  assert.equal(
    getMiddlewareGuess(session([h.text("苦力怕")], { quote: true })),
    null,
  );
  assert.equal(
    getMiddlewareGuess(session([h.text("苦力怕")], { isBot: true })),
    null,
  );
});

test("没有进行中的完整局面时，裸猜绝不能开新局", () => {
  assert.equal(canHandleMiddlewareGuess(undefined, "苦力怕"), false);
  assert.equal(canHandleMiddlewareGuess(null, "苦力怕"), false);
  assert.equal(canHandleMiddlewareGuess(game({ gameEnded: true }), "苦力怕"), false);
  assert.equal(canHandleMiddlewareGuess(game({ answer: null }), "苦力怕"), false);
  assert.equal(canHandleMiddlewareGuess(game({ gameMode: null }), "苦力怕"), false);
});

test("裸猜必须属于当前模式词库，并遵守重复猜测配置", () => {
  assert.equal(canHandleMiddlewareGuess(game(), "苦力怕"), true);
  assert.equal(canHandleMiddlewareGuess(game(), "石头"), false);
  assert.equal(canHandleMiddlewareGuess(game(), "钻石"), false);

  const repeated = game({ guessedChineseTitles: ["苦力怕"] });
  assert.equal(canHandleMiddlewareGuess(repeated, "苦力怕"), false);
  assert.equal(canHandleMiddlewareGuess(repeated, "苦力怕", true), true);
});

test("无参切换在配置默认与本群临时相反之间往返", () => {
  assert.deepEqual(resolveMiddlewareSwitch(false, undefined, undefined), {
    override: true,
    on: true,
    reverted: false,
  });
  assert.deepEqual(resolveMiddlewareSwitch(false, true, ""), {
    override: undefined,
    on: false,
    reverted: true,
  });
  assert.deepEqual(resolveMiddlewareSwitch(true, undefined, undefined), {
    override: false,
    on: false,
    reverted: false,
  });
  assert.deepEqual(resolveMiddlewareSwitch(true, false, undefined), {
    override: undefined,
    on: true,
    reverted: true,
  });
});

test("显式开关、状态查询与错误参数都有确定语义", () => {
  assert.deepEqual(resolveMiddlewareSwitch(false, undefined, "开"), {
    override: true,
    on: true,
    reverted: false,
  });
  assert.deepEqual(resolveMiddlewareSwitch(true, false, "开启"), {
    override: undefined,
    on: true,
    reverted: true,
  });
  assert.deepEqual(resolveMiddlewareSwitch(true, undefined, "关"), {
    override: false,
    on: false,
    reverted: false,
  });
  assert.deepEqual(resolveMiddlewareSwitch(false, true, "关闭"), {
    override: undefined,
    on: false,
    reverted: true,
  });
  assert.deepEqual(resolveMiddlewareSwitch(true, false, " 状态 "), {
    override: false,
    on: false,
    reverted: false,
  });

  for (const bad of ["切换", "on", "off", "苦力怕"]) {
    assert.equal("error" in resolveMiddlewareSwitch(false, undefined, bad), true);
  }
});
