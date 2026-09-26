import { blockData, itemData, keyMap, mobData, valueMap } from './data'
import { baseline, components, EMPHASIZED_WEIGHT, FONT_STACK, lch, MEDAL, MONO_STACK, scheme, TYPE } from './m3'

/** 草绿。三种模式各有强调色，但都从同一套色调板上取，明度是齐的。 */
const HUE = 138
const SCHEME = scheme(HUE, true)

/** 暗色方案里的强调色统一取色调 80，正文压在它上面才够对比。 */
const accentOf = (hue: number) => lch(80, 46, hue)


// ─────────────────────────────────────────────────────────────────────────────
// 像素图标
//
// 图标以「字符画」的形式书写：`#` 为实心像素，`+` 为半透明像素，`.` 为留空。
// 运行时逐行合并连续像素并转成 <rect>，因此不依赖任何外部字体或图片资源，
// 在缺少 Emoji 字体的无头浏览器里也能稳定呈现，且天然带有我的世界的方块感。
// ─────────────────────────────────────────────────────────────────────────────

const PIXELS: Record<string, string[]> = {
  // 品牌与模式
  creeper: [
    '........',
    '.##..##.',
    '.##..##.',
    '...##...',
    '..####..',
    '..####..',
    '..#..#..',
    '........',
  ],
  grassblock: [
    '########',
    '########',
    '#++++++#',
    '#++++++#',
    '#++++++#',
    '#++++++#',
    '#++++++#',
    '########',
  ],
  ingot: [
    '........',
    '..####..',
    '.######.',
    '########',
    '########',
    '.######.',
    '..####..',
    '........',
  ],

  // 状态
  hit: [
    '.......#',
    '......##',
    '#....##.',
    '##..##..',
    '.##.##..',
    '..####..',
    '...##...',
    '........',
  ],
  half: [
    '########',
    '####...#',
    '####...#',
    '####...#',
    '####...#',
    '####...#',
    '####...#',
    '########',
  ],
  miss: [
    '##....##',
    '###..###',
    '.######.',
    '..####..',
    '..####..',
    '.######.',
    '###..###',
    '##....##',
  ],
  up: [
    '...##...',
    '..####..',
    '.######.',
    '########',
    '...##...',
    '...##...',
    '...##...',
    '...##...',
  ],
  down: [
    '...##...',
    '...##...',
    '...##...',
    '...##...',
    '########',
    '.######.',
    '..####..',
    '...##...',
  ],
  unknown: [
    '..####..',
    '.##..##.',
    '.....##.',
    '....##..',
    '...##...',
    '...##...',
    '........',
    '...##...',
  ],

  // 字段
  health: [
    '.##..##.',
    '########',
    '########',
    '########',
    '.######.',
    '..####..',
    '...##...',
    '........',
  ],
  height: [
    '...##...',
    '..####..',
    '...##...',
    '...##...',
    '...##...',
    '...##...',
    '..####..',
    '...##...',
  ],
  behavior: [
    '......##',
    '.....##+',
    '....##..',
    '...##...',
    '..##....',
    '+##.....',
    '##+.....',
    '#.......',
  ],
  spawn: [
    '.+#..#+.',
    '+##.###.',
    '.####+..',
    '..###...',
    '...##...',
    '...##...',
    '..####..',
    '.++++++.',
  ],
  classification: [
    '##..##..',
    '##..##..',
    '........',
    '..##..##',
    '..##..##',
    '........',
    '##..##..',
    '##..##..',
  ],
  release: [
    '..####..',
    '.#....#.',
    '#..#...#',
    '#..#...#',
    '#..####.',
    '#......#',
    '.#....#.',
    '..####..',
  ],
  renewable: [
    '..####..',
    '.##..##.',
    '##....##',
    '........',
    '........',
    '##....##',
    '.##..##.',
    '..####..',
  ],
  stackable: [
    '...#####',
    '...#...#',
    '.#####.#',
    '.#...#.#',
    '.#...###',
    '#####...',
    '#...#...',
    '#####...',
  ],
  tool: [
    '##....##',
    '.##..##.',
    '..####..',
    '...##...',
    '...##...',
    '...##...',
    '...##...',
    '...##...',
  ],
  blast: [
    '#..##..#',
    '.#.##.#.',
    '..####..',
    '########',
    '########',
    '..####..',
    '.#.##.#.',
    '#..##..#',
  ],
  hardness: [
    '..####..',
    '.#++###.',
    '##+#####',
    '########',
    '.###++#.',
    '..####..',
    '........',
    '........',
  ],
  luminous: [
    '..+##+..',
    '.+####+.',
    '..####..',
    '...##...',
    '...##...',
    '...##...',
    '...##...',
    '..####..',
  ],
  fullblock: [
    '########',
    '#++++++#',
    '#++++++#',
    '#++++++#',
    '#++++++#',
    '#++++++#',
    '#++++++#',
    '########',
  ],
  flammable: [
    '...##...',
    '..####..',
    '..####..',
    '.######.',
    '.##++##.',
    '##+..+##',
    '##+..+##',
    '.######.',
  ],
  firecatch: [
    '+..##..+',
    '..####..',
    '.######.',
    '.##++##.',
    '##+..+##',
    '##+..+##',
    '.######.',
    '..####..',
  ],
  transparent: [
    '########',
    '#..##..#',
    '#..##..#',
    '########',
    '#..##..#',
    '#..##..#',
    '########',
    '........',
  ],
  rarity: [
    '...##...',
    '+..##..+',
    '..####..',
    '########',
    '########',
    '..####..',
    '+..##..+',
    '...##...',
  ],
  obtaining: [
    '.######.',
    '########',
    '#+.##.+#',
    '########',
    '#++++++#',
    '#++++++#',
    '########',
    '........',
  ],
  usage: [
    '.##..##.',
    '.##..##.',
    '.######.',
    '..####..',
    '..####..',
    '..####..',
    '..####..',
    '..####..',
  ],
  inventory: [
    '..#..#..',
    '.######.',
    '########',
    '#+####+#',
    '#+#..#+#',
    '#+####+#',
    '########',
    '.######.',
  ],
  recipe: [
    '.######.',
    '#++++++#',
    '#+####+#',
    '#++++++#',
    '#+####+#',
    '#++++++#',
    '#+####+#',
    '.######.',
  ],
  loot: [
    '.######.',
    '##+..+##',
    '########',
    '.######.',
    '.######.',
    '..####..',
    '..####..',
    '...##...',
  ],

  // 装饰
  crown: [
    '#......#',
    '#..##..#',
    '#.####.#',
    '##.##.##',
    '########',
    '#+####+#',
    '########',
    '........',
  ],
  trophy: [
    '########',
    '#+####+#',
    '########',
    '.######.',
    '..####..',
    '...##...',
    '..####..',
    '.######.',
  ],
}

/** 把字符画转成内联 SVG。`shape-rendering=crispEdges` 保证像素边缘不被抗锯齿糊掉。 */
export function px(name: string, size = 14, cls = ''): string {
  const rows = PIXELS[name]
  if (!rows) return ''
  const h = rows.length
  const w = Math.max(...rows.map((r) => r.length))
  const rects: string[] = []
  for (let y = 0; y < h; y++) {
    const row = rows[y].padEnd(w, '.')
    let x = 0
    while (x < w) {
      const ch = row[x]
      if (ch !== '#' && ch !== '+') {
        x++
        continue
      }
      let len = 1
      while (x + len < w && row[x + len] === ch) len++
      rects.push(
        `<rect x="${x}" y="${y}" width="${len}" height="1"${ch === '+' ? ' opacity=".42"' : ''}/>`,
      )
      x += len
    }
  }
  return (
    `<svg class="px ${cls}" viewBox="0 0 ${w} ${h}" width="${size}" height="${Math.round((size * h) / w)}"` +
    ` fill="currentColor" shape-rendering="crispEdges" aria-hidden="true">${rects.join('')}</svg>`
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// 模式与字段元数据
// ─────────────────────────────────────────────────────────────────────────────

export type Mode = 'mob' | 'item' | 'block'

export interface ModeMeta {
  name: string
  icon: string
  /** 主色，用于卡片高亮与徽记 */
  accent: string
  /** 该模式下的图片是否为小尺寸像素贴图（决定缩放算法） */
  pixelArt: boolean
  tagline: string
  total: number
}

export const MODES: Record<Mode, ModeMeta> = {
  mob: {
    name: '生物',
    icon: 'creeper',
    accent: accentOf(138),
    pixelArt: false,
    tagline: '从生命、体型与生成方式里辨认它',
    total: mobData.length,
  },
  item: {
    name: '物品',
    icon: 'ingot',
    accent: accentOf(82),
    pixelArt: true,
    tagline: '从稀有度、来源与用途里辨认它',
    total: itemData.length,
  },
  block: {
    name: '方块',
    icon: 'grassblock',
    accent: accentOf(238),
    pixelArt: true,
    tagline: '从硬度、工具与光学性质里辨认它',
    total: blockData.length,
  },
}

/** 每种模式下参与比对的字段及其展示顺序（数值在前、标签在后、版本收尾）。 */
export const FIELDS: Record<Mode, string[]> = {
  mob: ['health', 'height', 'behavior', 'spawn', 'classification', 'initial_release'],
  block: [
    'hardness',
    'blast_resistance',
    'stackable',
    'tool',
    'renewable',
    'luminous',
    'full_block',
    'transparent',
    'flammable',
    'fire_catch',
    'initial_release',
  ],
  item: [
    'rarity',
    'stackable',
    'renewable',
    'obtaining',
    'usage',
    'recipe',
    'loot',
    'inventory_categories',
    'initial_release',
  ],
}

const FIELD_ICON: Record<string, string> = {
  health: 'health',
  height: 'height',
  behavior: 'behavior',
  spawn: 'spawn',
  classification: 'classification',
  initial_release: 'release',
  renewable: 'renewable',
  stackable: 'stackable',
  tool: 'tool',
  blast_resistance: 'blast',
  hardness: 'hardness',
  luminous: 'luminous',
  full_block: 'fullblock',
  transparent: 'transparent',
  flammable: 'flammable',
  fire_catch: 'firecatch',
  rarity: 'rarity',
  obtaining: 'obtaining',
  usage: 'usage',
  inventory_categories: 'inventory',
  recipe: 'recipe',
  loot: 'loot',
}

/** 表头用的短标签：完整中文名在窄列里会挤成两三行。 */
const SHORT_KEY: Record<string, string> = {
  full_block: '完整方块',
  fire_catch: '引燃性',
  inventory_categories: '类别',
  blast_resistance: '爆炸抗性',
  initial_release: '版本',
}

export function fieldLabel(key: string): string {
  return SHORT_KEY[key] || keyMap[key] || key
}

export function fieldIcon(key: string): string {
  return FIELD_ICON[key] || 'unknown'
}

/** 数值字段补上单位，让「64」「0.6」这类裸数字有语境。 */
function withUnit(key: string, value: number): string {
  if (key === 'stackable') {
    if (value <= 0) return '不适用'
    if (value === 1) return '不可堆叠'
    return `${value} 个`
  }
  if (key === 'health') return `${value} 点`
  if (key === 'height') return `${value} 格`
  return String(value)
}

/** 把原始字段值翻译成中文展示值，数组字段保留逐项结构以便高亮命中项。 */
export function displayValues(key: string, raw: any): { text: string; raw: string }[] {
  if (Array.isArray(raw)) {
    if (!raw.length) return [{ text: '无', raw: '' }]
    return raw.map((v) => ({ text: valueMap[key]?.[v] ?? String(v), raw: String(v) }))
  }
  if (typeof raw === 'number') return [{ text: withUnit(key, raw), raw: String(raw) }]
  const s = String(raw ?? '')
  return [{ text: valueMap[key]?.[s] ?? s, raw: s }]
}

export type Status = 'true' | 'mixed' | 'false' | 'false_up' | 'false_down' | 'unknown'

export const STATUS_META: Record<Status, { cls: string; icon: string; label: string; emoji: string }> = {
  true: { cls: 's-hit', icon: 'hit', label: '完全匹配', emoji: '🟩' },
  mixed: { cls: 's-half', icon: 'half', label: '部分匹配', emoji: '🟨' },
  false: { cls: 's-miss', icon: 'miss', label: '不匹配', emoji: '🟥' },
  false_up: { cls: 's-miss s-up', icon: 'up', label: '答案更大', emoji: '🟥⬆️' },
  false_down: { cls: 's-miss s-down', icon: 'down', label: '答案更小', emoji: '🟥⬇️' },
  unknown: { cls: 's-none', icon: 'unknown', label: '未知', emoji: '❓' },
}

export function statusOf(guess: any, key: string): Status {
  const v = guess?.[`${key}_gui`]
  return (STATUS_META as any)[v] ? (v as Status) : 'unknown'
}

// ─────────────────────────────────────────────────────────────────────────────
// 样式
//
// 设计基调：Material 3 Expressive 的暗色方案，源色取草绿。
// 像素字形（页眉的 MCDLE、模式徽记、图例角标）保留为内容，
// 其余的容器、层级与字阶一律交给设计系统，与其它插件同源。
// ─────────────────────────────────────────────────────────────────────────────

/**
 * 状态色块上的前景色。取色调 100（M3 的白），与色块同属 lch 体系。
 * 不取 onSurface：那是色调 90 的中性色，压在「部分匹配」的黄块上
 * 只有 4.29:1，低于正文要求的 4.5:1；白在这三档色块上是 5.54 ~ 6.03:1。
 */
const INK = lch(100, 0, HUE)

/**
 * 状态色。四档都落在色调 40 附近，只有色相在变——
 * 于是「对 / 半对 / 错」的强弱靠色相区分，而不是靠谁更亮，
 * 整块棋盘的明度因此是平的，扫一眼就能看出分布。
 */
const STATUS_TILE = {
  hit: lch(42, 44, 142),
  half: lch(44, 46, 82),
  miss: lch(42, 48, 28),
  none: SCHEME.surfaceContainerHigh,
}

/**
 * 字体栈先尝试常见的中文点阵字体（Zpix / 缝合像素 / Unifont），
 * 装了的用户会直接得到原汁原味的像素中文；没有则回落到设计系统的字体栈。
 */
const FONT_STACK_CJK =
  `"Minecraft", "Fusion Pixel 12px monospaced", "Fusion Pixel 12px", "Zpix", ` + FONT_STACK

/**
 * 要比对的数字读数（次数、名次、用时）走等宽栈。等宽栈不含汉字，
 * 把卡片自己的栈接在后面，读数里夹着的「分」「秒」「已锁定」才不掉队。
 */
const NUM_FONT = `${MONO_STACK},${FONT_STACK_CJK}`

const CSS = `
${baseline(SCHEME)}${components()}
body{font-family:${FONT_STACK_CJK};background:transparent}
html,body{background:transparent}
.px{display:block;flex:none}

#card{
  position:relative;
  display:inline-block;
  overflow:hidden;
  border-radius:var(--md-sys-shape-corner-extra-large);
}
.pad{padding:24px}

/* ── 页眉 ─────────────────────────────────────────── */
.hd{
  position:relative;
  background:var(--md-sys-color-surface-container);
  padding:20px 24px 18px;
}
/* 顶端那道强调色仍在，但收成一条细的圆头指示条，不再模拟草皮 */
.hd .turf{
  position:absolute;left:24px;top:14px;width:56px;height:4px;
  border-radius:var(--md-sys-shape-corner-full);background:var(--accent);
}
.hd-row{display:flex;align-items:flex-end;justify-content:space-between;gap:24px;margin-top:18px}
.brand{display:flex;align-items:center;gap:12px}
.brand .mark{color:var(--accent)}
.brand .word{font-size:${TYPE.headlineMedium.size}px;font-weight:${EMPHASIZED_WEIGHT.headline};letter-spacing:.18em;line-height:1}
.brand .word b{color:var(--accent);font-weight:${EMPHASIZED_WEIGHT.headline}}
.hd .sub{margin-top:8px;font-size:${TYPE.bodySmall.size}px;letter-spacing:.05em;color:var(--md-sys-color-on-surface-variant)}
.hd-meta{text-align:right;flex:none}
.hd-meta .big{font-family:${NUM_FONT};font-size:${TYPE.headlineMedium.size}px;font-weight:${EMPHASIZED_WEIGHT.headline};color:var(--accent);line-height:1;font-variant-numeric:tabular-nums}
.hd-meta .cap{font-size:${TYPE.labelSmall.size}px;letter-spacing:.1em;color:var(--md-sys-color-on-surface-variant);margin-top:6px}

/* 模式徽记：药丸形。底色是每模式各自的 accent（同一套色调板上的色调 80），
   不是主题容器色，m3-chip 没有对应档位 */
.badge{
  display:inline-flex;align-items:center;gap:7px;padding:6px 14px;
  border-radius:var(--md-sys-shape-corner-full);
  background:var(--accent);color:var(--md-sys-color-surface);
  font-size:${TYPE.labelMedium.size}px;letter-spacing:.06em;font-weight:${EMPHASIZED_WEIGHT.label};
}

/* ── 猜测板 ───────────────────────────────────────── */
table{border-collapse:separate;border-spacing:6px;margin:0 -6px}
th{padding:0 0 8px;vertical-align:bottom}
.col{display:flex;flex-direction:column;align-items:center;gap:6px;
  min-width:80px;max-width:132px;color:var(--md-sys-color-on-surface-variant)}
.col .lb{font-size:${TYPE.labelSmall.size}px;letter-spacing:.04em;color:var(--md-sys-color-on-surface-variant);
  text-align:center;line-height:1.25;font-weight:${EMPHASIZED_WEIGHT.label}}
th.n .col{align-items:flex-start;min-width:150px}

td{padding:0}
.tile{
  position:relative;overflow:hidden;height:100%;
  min-height:60px;min-width:76px;max-width:132px;
  padding:9px 10px;
  display:flex;flex-direction:column;align-items:center;justify-content:center;gap:5px;
  border-radius:var(--md-sys-shape-corner-medium);
  background:var(--tile);
}
/* 多标签字段给更宽的上限，否则一列里会折成很高的一坨 */
.tile.list{max-width:168px}
th.list .col{max-width:168px}
.tile .v{font-size:${TYPE.titleSmall.size}px;font-weight:${EMPHASIZED_WEIGHT.title};line-height:1.35;text-align:center;
  color:${INK};word-break:break-word}
.tile .chips{display:flex;flex-wrap:wrap;gap:4px;justify-content:center}
.chip{
  font-size:${TYPE.labelSmall.size}px;line-height:1.35;padding:2px 8px;
  border-radius:var(--md-sys-shape-corner-full);
  color:${INK};background:color-mix(in srgb, var(--md-sys-color-scrim) 24%, transparent);
}
/* 部分匹配时把真正命中的标签点亮，让「黄」变得可读 */
.chip.on{background:${INK};color:var(--md-sys-color-surface);font-weight:${EMPHASIZED_WEIGHT.label}}
.tile .flag{position:absolute;top:5px;right:5px;color:color-mix(in srgb, ${INK} 85%, transparent)}
/* 数值方向不只靠角标：整块的上/下边缘会亮起一条，指向答案所在的一侧 */
.tile.s-up::after,.tile.s-down::after{content:"";position:absolute;left:12px;right:12px;height:4px;
  border-radius:var(--md-sys-shape-corner-full);background:color-mix(in srgb, ${INK} 62%, transparent)}
.tile.s-up::after{top:5px}
.tile.s-down::after{bottom:5px}

.s-hit{--tile:${STATUS_TILE.hit}}
.s-half{--tile:${STATUS_TILE.half}}
.s-miss{--tile:${STATUS_TILE.miss}}
.s-none{--tile:${STATUS_TILE.none}}

/* 名称格 */
.name{
  display:flex;align-items:center;gap:12px;min-height:60px;min-width:150px;
  padding:8px 12px 8px 9px;
  border-radius:var(--md-sys-shape-corner-medium);
  background:var(--md-sys-color-surface-container-high);
}
.name.correct{background:${STATUS_TILE.hit}}
.thumb{
  width:44px;height:44px;flex:none;
  display:flex;align-items:center;justify-content:center;
  border-radius:var(--md-sys-shape-corner-small);
  background:var(--md-sys-color-surface-container-lowest);
}
.thumb img{max-width:38px;max-height:38px;display:block}
.thumb img.sharp{image-rendering:pixelated}
.thumb img.broken{display:none}
.thumb .fb{display:none;color:var(--md-sys-color-on-surface-variant)}
.thumb.failed .fb{display:block}
.name .txt{min-width:0}
.name .cn{font-size:${TYPE.titleMedium.size}px;font-weight:${EMPHASIZED_WEIGHT.title};line-height:1.25}
.name .en{font-size:${TYPE.labelSmall.size}px;letter-spacing:.04em;color:var(--md-sys-color-on-surface-variant);margin-top:3px;
  white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:150px}
.name.correct .cn,.name.correct .en,.name.correct .no{color:${INK}}
.name.correct .en,.name.correct .no{opacity:.78}
.name .no{font-family:${NUM_FONT};font-size:${TYPE.labelSmall.size}px;color:var(--md-sys-color-on-surface-variant);margin-top:3px}

/* 最新一行的强调：外圈一圈 2px 描边 + 行首的圆头标记。
   这是高亮环不是层高，所以用 outline 而不是 box-shadow */
tr.fresh .tile,tr.fresh .name{outline:2px solid var(--accent)}
tr.fresh .name{position:relative}
tr.fresh .name::before{content:"";position:absolute;left:0;top:14px;bottom:14px;width:4px;
  border-radius:var(--md-sys-shape-corner-full);background:var(--accent)}

/* ── 进度条 ───────────────────────────────────────── */
/* 轨道内嵌填充、宽度按百分比，高度 12px；m3-bar 是「填充与轨道两个全圆角块 +
   4px 空隙」的 16px 结构，换过去要连 DOM 与高度一起改，故保留本地类名 */
.prog{display:flex;align-items:center;gap:12px;margin-top:20px}
.prog .bar{
  flex:1;height:12px;overflow:hidden;
  border-radius:var(--md-sys-shape-corner-full);
  background:var(--md-sys-color-surface-container-highest);
}
.prog .fill{height:100%;border-radius:var(--md-sys-shape-corner-full);background:var(--accent)}
.prog .num{font-family:${NUM_FONT};font-size:${TYPE.labelMedium.size}px;color:var(--md-sys-color-on-surface-variant);letter-spacing:.04em;flex:none;
  font-variant-numeric:tabular-nums}

/* ── 图例 / 页脚 ──────────────────────────────────── */
.legend{
  display:flex;flex-wrap:wrap;gap:8px 10px;align-items:center;
  padding:14px 24px;
  background:var(--md-sys-color-surface-container);
}
.lg{
  display:flex;align-items:center;gap:6px;padding:5px 12px;
  border-radius:var(--md-sys-shape-corner-full);
  font-size:${TYPE.labelSmall.size}px;color:${INK};background:var(--tile);
}
.lg.s-none{color:var(--md-sys-color-on-surface-variant)}
.tip{margin-left:auto;font-size:${TYPE.labelSmall.size}px;color:var(--md-sys-color-on-surface-variant);letter-spacing:.02em}

/* ── 通用区块 ─────────────────────────────────────── */
.sec{margin-top:22px}
.sec:first-child{margin-top:0}
.sec-t{display:flex;align-items:center;gap:10px;font-size:${TYPE.labelMedium.size}px;letter-spacing:.1em;
  font-weight:${EMPHASIZED_WEIGHT.label};color:var(--md-sys-color-on-surface-variant);margin-bottom:12px}
.sec-t::after{content:"";flex:1;height:1px;background:var(--md-sys-color-outline-variant)}
.panel{
  padding:16px 18px;
  border-radius:var(--md-sys-shape-corner-large);
  background:var(--md-sys-color-surface-container);
}
.rows{display:flex;flex-direction:column;gap:9px}
.row{display:flex;align-items:center;gap:10px;font-size:${TYPE.bodyMedium.size}px;
  color:var(--md-sys-color-on-surface);line-height:1.5}
.row .k{color:var(--accent);flex:none;font-weight:${EMPHASIZED_WEIGHT.label}}
.row .m{color:var(--md-sys-color-on-surface-variant);font-size:${TYPE.bodySmall.size}px}
.cmd{
  font-weight:${EMPHASIZED_WEIGHT.label};color:var(--md-sys-color-on-surface);
  background:var(--md-sys-color-surface-container-highest);
  padding:2px 9px;border-radius:var(--md-sys-shape-corner-small);
}

.grid3{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.mode-card{
  padding:15px 16px;
  border-radius:var(--md-sys-shape-corner-large);
  background:var(--md-sys-color-surface-container);
}
.mode-card .top{display:flex;align-items:center;gap:9px;font-size:${TYPE.titleMedium.size}px;font-weight:${EMPHASIZED_WEIGHT.title}}
.mode-card .cnt{font-size:${TYPE.labelSmall.size}px;color:var(--md-sys-color-on-surface-variant);margin-top:8px;letter-spacing:.04em}
.mode-card .tl{font-size:${TYPE.labelSmall.size}px;color:var(--md-sys-color-on-surface-variant);margin-top:6px;line-height:1.5}

.attrs{display:flex;flex-wrap:wrap;gap:8px}
/* 配色与 m3-chip 的默认档（secondary-container）一致，但尺寸更小：
   12px 字、7px/14px 内距、无固定高度，降级要覆盖组件的字号与内距，故留本地类名 */
.attr{
  display:flex;align-items:center;gap:7px;padding:7px 14px;
  border-radius:var(--md-sys-shape-corner-full);
  font-size:${TYPE.labelMedium.size}px;color:var(--md-sys-color-on-secondary-container);
  background:var(--md-sys-color-secondary-container);
}
.attr .px{color:var(--accent)}

/* ── 揭晓卡 ───────────────────────────────────────── */
.reveal{display:flex;align-items:center;gap:22px}
.reveal .who{flex:1;min-width:0}
.reveal .cn .crown{display:inline-block;vertical-align:middle;margin-left:12px;color:var(--accent)}
.reveal .big-thumb{
  width:136px;height:136px;flex:none;
  display:flex;align-items:center;justify-content:center;
  border-radius:var(--md-sys-shape-corner-extra-large);
  background:var(--md-sys-color-surface-container);
}
.reveal .big-thumb img{max-width:112px;max-height:112px;display:block}
.reveal .big-thumb img.sharp{image-rendering:pixelated}
.reveal .big-thumb img.broken{display:none}
.reveal .big-thumb .fb{display:none;color:var(--md-sys-color-on-surface-variant)}
.reveal .big-thumb.failed .fb{display:block}
.reveal .cn{font-size:${TYPE.displaySmall.size}px;font-weight:${EMPHASIZED_WEIGHT.display};line-height:1.1}
.reveal .en{font-size:${TYPE.bodySmall.size}px;letter-spacing:.1em;color:var(--md-sys-color-on-surface-variant);margin-top:10px}
.stats{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}
.stat{
  padding:13px 16px;
  border-radius:var(--md-sys-shape-corner-large);
  background:var(--md-sys-color-surface-container);
}
.stat .n{font-family:${NUM_FONT};font-size:${TYPE.titleLarge.size}px;font-weight:${EMPHASIZED_WEIGHT.title};color:var(--accent);line-height:1;font-variant-numeric:tabular-nums}
.stat .c{font-size:${TYPE.labelSmall.size}px;color:var(--md-sys-color-on-surface-variant);margin-top:7px;letter-spacing:.06em}

/* ── 排行榜 ───────────────────────────────────────── */
/* 列用 m3-list、行用 m3-list-item：圆角（首尾项放大到 extraLarge）、容器色与
   徽章配色都由组件给，本地只补这张卡片自己的行距与内距 */
.rank{display:flex;flex-direction:column;gap:6px}
.rk{gap:14px;padding:12px 14px}
.rk .pos{
  width:34px;height:34px;padding:0;
  font-family:${NUM_FONT};
}
.rk.p1{outline:2px solid ${MEDAL.gold}}
.rk .who{flex:1;min-width:0}
.rk .nm{font-size:${TYPE.titleSmall.size}px;font-weight:${EMPHASIZED_WEIGHT.title};white-space:nowrap;overflow:hidden;text-overflow:ellipsis;
  max-width:260px}
.rk .split{display:flex;gap:10px;margin-top:6px}
.rk .sp{display:flex;align-items:center;gap:4px;font-size:${TYPE.labelSmall.size}px;font-family:${NUM_FONT};color:var(--md-sys-color-on-surface-variant)}
.rk .tot{flex:none;text-align:right}
.rk .tot .n{font-family:${NUM_FONT};font-size:${TYPE.titleLarge.size}px;font-weight:${EMPHASIZED_WEIGHT.title};color:var(--accent);line-height:1;font-variant-numeric:tabular-nums}
.rk .tot .c{font-size:${TYPE.labelSmall.size}px;color:var(--md-sys-color-on-surface-variant);margin-top:5px;letter-spacing:.06em}

.empty{padding:36px 20px;min-width:400px;text-align:center;
  color:var(--md-sys-color-on-surface-variant);font-size:${TYPE.bodyMedium.size}px;line-height:2}
.empty .px{margin:0 auto 14px;color:var(--md-sys-color-on-surface-variant)}
`

export interface ShellOptions {
  accent: string
  /** 固定卡片宽度；棋盘类卡片省略此项，按列数自适应 */
  width?: number
}

function shell(body: string, opts: ShellOptions): string {
  const width = opts.width ? `width:${opts.width}px;` : ''
  return `<!DOCTYPE html><html lang="zh-CN"><head><meta charset="utf-8"><style>${CSS}</style></head>
<body><div id="card" class="m3-surface" style="--accent:${opts.accent};${width}">${body}</div></body></html>`
}

export function esc(s: any): string {
  return String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function header(mode: Mode | null, sub: string, meta?: { big: string; cap: string }): string {
  const m = mode ? MODES[mode] : null
  const mark = px(m ? m.icon : 'creeper', 22, 'mark')
  const right = meta
    ? `<div class="hd-meta"><div class="big">${esc(meta.big)}</div><div class="cap">${esc(meta.cap)}</div></div>`
    : ''
  return `<header class="hd"><div class="turf"></div><div class="hd-row"><div>
    <div class="brand">${mark}<div class="word">MC<b>DLE</b></div></div>
    <div class="sub">${esc(sub)}</div>
  </div>${right}</div></header>`
}

/** 生物贴图是高分辨率渲染图，物品/方块是小尺寸像素图，缩放策略不同。 */
function thumb(url: string | undefined, mode: Mode, big = false): string {
  const cls = MODES[mode].pixelArt ? ' class="sharp"' : ''
  const box = big ? 'big-thumb' : 'thumb'
  const fb = px(MODES[mode].icon, big ? 56 : 22, 'fb')
  if (!url) return `<div class="${box} failed">${fb}</div>`
  return `<div class="${box}">${fb}<img src="${esc(url)}"${cls} onerror="this.classList.add('broken');this.parentNode.classList.add('failed')"></div>`
}

const LEGEND_ORDER: Status[] = ['true', 'mixed', 'false', 'false_up', 'false_down']

function legendChips(): string {
  return LEGEND_ORDER.map((s) => {
    const m = STATUS_META[s]
    return `<div class="lg ${m.cls}">${px(m.icon, 11)}<span>${m.label}</span></div>`
  }).join('')
}

/** 棋盘页脚：图例 + 一句提示。只有真正需要读色块的卡片才带图例。 */
function legendRow(tip: string): string {
  return `<footer class="legend">${legendChips()}<div class="tip">${esc(tip)}</div></footer>`
}

/** 其余卡片的页脚：只留一句落款，避免图例到处重复。 */
function noteRow(note: string): string {
  return `<footer class="legend"><div class="tip" style="margin:0">${esc(note)}</div></footer>`
}

// ─────────────────────────────────────────────────────────────────────────────
// 卡片
// ─────────────────────────────────────────────────────────────────────────────

function tileCell(guess: any, key: string): string {
  const st = statusOf(guess, key)
  const m = STATUS_META[st]
  const values = displayValues(key, guess[key])
  const hits: string[] = Array.isArray(guess[`${key}_hits`]) ? guess[`${key}_hits`].map(String) : []
  const isList = Array.isArray(guess[key])

  const body = isList
    ? `<div class="chips">${values
        .map(
          (v) =>
            `<span class="chip${st === 'mixed' && hits.includes(v.raw) ? ' on' : ''}">${esc(v.text)}</span>`,
        )
        .join('')}</div>`
    : `<div class="v">${esc(values[0].text)}</div>`

  return `<td><div class="tile ${m.cls}${isList ? ' list' : ''}"><span class="flag">${px(m.icon, 11)}</span>${body}</div></td>`
}

/** 该字段在这一局里是否是「多标签」型，用于给表头列同样的宽度上限。 */
function isListField(key: string, sample: any): boolean {
  return Array.isArray(sample?.[key])
}

export interface BoardOptions {
  mode: Mode
  guesses: any[]
  /** 已锁定字段数 / 总字段数，用于进度条 */
  tip?: string
}

export function boardCard(opts: BoardOptions): string {
  const { mode, guesses } = opts
  const meta = MODES[mode]
  const fields = FIELDS[mode]
  const last = guesses[guesses.length - 1]

  const cards = guesses.map((g, i) => `<article class="guess-card">
    <h2 class="m3-title-large">${i + 1}. ${esc(g.chinese_title)} <span class="m3-body-medium">${esc(g.title || '')}</span></h2>
    <div class="guess-fields">${fields.map(key => `<table><thead><tr><th>${esc(fieldLabel(key))}</th></tr></thead><tbody><tr>${tileCell(g, key)}</tr></tbody></table>`).join('')}</div>
  </article>`).join('')

  const locked = fields.filter((k) => statusOf(last, k) === 'true').length
  const pct = Math.round((locked / fields.length) * 100)
  const prog = `<div class="prog"><div class="num">已锁定 ${locked}/${fields.length}</div>
    <div class="bar"><div class="fill" style="width:${pct}%"></div></div>
    <div class="num">${pct}%</div></div>`

  const body =
    header(mode, `${meta.name}模式 · ${meta.tagline}`, {
      big: `#${guesses.length}`,
      cap: '猜测次数',
    }) +
    `<style>.board-compact{width:640px;max-width:100%}.guess-card{padding:16px;border-radius:24px;background:var(--md-sys-color-surface-container-low);margin-bottom:16px}.guess-card h2{overflow-wrap:anywhere}.guess-fields{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.guess-fields table{width:100%;table-layout:fixed}.guess-fields .tile{width:100%;max-width:none;min-width:0}.guess-fields td,.guess-fields th{white-space:normal;overflow-wrap:anywhere}</style><div class="pad board-compact">${cards}${prog}</div>` +
    legendRow(opts.tip || '箭头指向答案所在的方向')

  return shell(body, { accent: meta.accent })
}

export function startCard(mode: Mode, played: number, limit: number, middleware: boolean): string {
  const meta = MODES[mode]
  const fields = FIELDS[mode]
  const attrs = fields
    .map((k) => `<div class="attr">${px(fieldIcon(k), 13)}<span>${esc(keyMap[k] || k)}</span></div>`)
    .join('')

  const body =
    header(mode, '新的一局已经开始', { big: `${played}/${limit}`, cap: '今日局数' }) +
    `<div class="pad">
      <div class="sec">
        <div class="sec-t"><span>本 局 目 标</span></div>
        <div class="panel"><div class="rows">
          <div class="row"><span class="badge">${px(meta.icon, 13)}${esc(meta.name)}模式</span>
            <span class="m">从 ${meta.total} 个候选中锁定唯一答案</span></div>
          <div class="row"><span>${esc(meta.tagline)}。</span></div>
        </div></div>
      </div>
      <div class="sec">
        <div class="sec-t"><span>可 供 推 理 的 属 性</span></div>
        <div class="attrs">${attrs}</div>
      </div>
      <div class="sec">
        <div class="sec-t"><span>下 一 步</span></div>
        <div class="panel"><div class="rows">
          <div class="row"><span class="cmd">${middleware ? `直接发送${esc(meta.name)}名称` : 'mcdle.猜 [名称]'}</span><span class="m">提交后续猜测</span></div>
          <div class="row"><span class="cmd">mcdle.词库</span><span class="m">忘了有哪些词条时翻一翻</span></div>
        </div></div>
      </div>
    </div>` +
    legendRow('第一枪不妨挑一个属性分布很典型的词条')

  return shell(body, { accent: meta.accent, width: 700 })
}

export interface WinOptions {
  mode: Mode
  answer: any
  attempts: number
  seconds: number
  username: string
  total: number
  played: number
  limit: number
}

/** 把秒数说成人话；秒级以内也要有话说，异常才落到破折号。 */
export function formatDuration(seconds: number): string {
  if (!Number.isFinite(seconds) || seconds < 0) return '—'
  if (seconds === 0) return '不到 1 秒'
  const mm = Math.floor(seconds / 60)
  const ss = seconds % 60
  if (mm >= 60) return `${Math.floor(mm / 60)}时${mm % 60}分`
  return mm > 0 ? `${mm}分${ss}秒` : `${ss}秒`
}

export function winCard(o: WinOptions): string {
  const meta = MODES[o.mode]
  const fields = FIELDS[o.mode]
  const attrs = fields
    .map((k) => {
      const vs = displayValues(k, o.answer[k])
        .map((v) => v.text)
        .join('、')
      return `<div class="attr">${px(fieldIcon(k), 13)}<span>${esc(fieldLabel(k))} ${esc(vs)}</span></div>`
    })
    .join('')

  const left = o.limit - o.played
  const body =
    header(o.mode, `${esc(o.username)} 锁定了答案`, {
      big: formatDuration(o.seconds),
      cap: '本 局 用 时',
    }) +
    `<div class="pad">
      <div class="reveal">
        ${thumb(o.answer.wiki_image_url, o.mode, true)}
        <div class="who">
          <div class="cn">${esc(o.answer.chinese_title)}${px('crown', 22, 'crown')}</div>
          <div class="en">${esc(o.answer.title || '')}</div>
        </div>
      </div>
      <div class="sec">
        <div class="stats">
          <div class="stat"><div class="n">${o.attempts}</div><div class="c">猜 测 次 数</div></div>
          <div class="stat"><div class="n">${o.total}</div><div class="c">累 计 猜 中</div></div>
          <div class="stat"><div class="n">${left > 0 ? left : 0}</div><div class="c">今 日 剩 余 局 数</div></div>
        </div>
      </div>
      <div class="sec">
        <div class="sec-t"><span>答 案 档 案</span></div>
        <div class="attrs">${attrs}</div>
      </div>
    </div>` +
    noteRow('发送「mcdle.排行榜」查看累计战绩')

  return shell(body, { accent: meta.accent, width: 720 })
}

export function helpCard(dailyLimit: number, allowRepeat: boolean, middleware: boolean): string {
  const modeCards = (['mob', 'item', 'block'] as Mode[])
    .map((m) => {
      const meta = MODES[m]
      return `<div class="mode-card" style="--accent:${meta.accent}">
        <div class="top" style="color:${meta.accent}">${px(meta.icon, 17)}<span>${meta.name}</span></div>
        <div class="cnt">${meta.total} 个词条 · ${FIELDS[m].length} 项属性</div>
        <div class="tl">${meta.tagline}</div>
      </div>`
    })
    .join('')

  const legend = legendChips()
  const total = mobData.length + itemData.length + blockData.length

  const body =
    header(null, '猜生物 · 猜物品 · 猜方块', { big: `${total}`, cap: '词条总量' }) +
    `<div class="pad">
      <div class="sec">
        <div class="sec-t"><span>玩 什 么</span></div>
        <div class="panel"><div class="rows">
          <div class="row"><span>每局随机抽一个生物、物品或方块，你的每次猜测都会逐项与答案比对，用颜色告诉你差在哪里。</span></div>
          <div class="row"><span>首次猜测的词条属于哪一类，本局就在哪一类里出题。</span></div>
        </div></div>
      </div>
      <div class="sec">
        <div class="sec-t"><span>三 种 模 式</span></div>
        <div class="grid3">${modeCards}</div>
      </div>
      <div class="sec">
        <div class="sec-t"><span>怎 么 读 提 示</span></div>
        <div class="panel">
          <div class="legend" style="border:0;padding:0;background:transparent;margin-bottom:12px">${legend}</div>
          <div class="rows">
            <div class="row"><span class="k">${px('half', 11)}</span><span>部分匹配的格子里，<b>被点亮的标签</b>就是与答案重合的那几项。</span></div>
            <div class="row"><span class="k">${px('up', 11)}</span><span>数值与版本用箭头指向答案：向上代表答案更大、更晚。</span></div>
          </div>
        </div>
      </div>
      <div class="sec">
        <div class="sec-t"><span>三 步 上 手</span></div>
        <div class="panel"><div class="rows">
          <div class="row"><span class="k">壹</span><span class="cmd">mcdle.猜 苦力怕</span><span class="m">用一个有效词条开局</span></div>
          <div class="row"><span class="k">贰</span><span>${middleware ? '开局后可直接发送当前模式的完整词条名称继续猜测。' : '对照颜色与箭头缩小范围，每一次猜测都会留在棋盘上。'}</span></div>
          <div class="row"><span class="k">叁</span><span>锁定答案，战绩自动记入 <span class="cmd">mcdle.排行榜</span>。</span></div>
        </div></div>
      </div>
      <div class="sec">
        <div class="sec-t"><span>指 令</span></div>
        <div class="panel"><div class="rows">
          <div class="row"><span class="cmd">mcdle</span><span class="m">这份玩法与指令说明</span></div>
          <div class="row"><span class="cmd">mcdle.猜 [名称]</span><span class="m">开始一局，或提交猜测</span></div>
          <div class="row"><span class="cmd">mcdle.猜</span><span class="m">局中再次发送可回看当前棋盘</span></div>
          <div class="row"><span class="cmd">mcdle.裸猜 [开/关]</span><span class="m">临时切换本频道的无前缀续猜</span></div>
          <div class="row"><span class="cmd">mcdle.排行榜</span><span class="m">查看累计战绩</span></div>
          <div class="row"><span class="cmd">mcdle.词库</span><span class="m">查阅全部候选词条</span></div>
        </div></div>
      </div>
      <div class="sec">
        <div class="sec-t"><span>规 则 细 则</span></div>
        <div class="panel"><div class="rows">
          <div class="row"><span class="k">•</span><span>每个频道每日可开始 <b>${dailyLimit}</b> 局，跨零点重置。</span></div>
          <div class="row"><span class="k">•</span><span>${allowRepeat ? '允许重复提交已经猜过的词条。' : '同一局内不能重复提交已猜过的词条。'}</span></div>
          <div class="row"><span class="k">•</span><span>${middleware ? '本频道裸猜已开启：只接受当前模式词库中的完整纯文本词条。' : '本频道裸猜已停用：续猜请用完整指令。'}</span></div>
          <div class="row"><span class="k">•</span><span>空指令与词库外名称不会开启新局或消耗额度。</span></div>
          <div class="row"><span class="k">•</span><span>词条与数据来自 Minecraft Wiki，版本号按发布先后比较。</span></div>
        </div></div>
      </div>
    </div>` +
    noteRow('灵感来自 Wordle 与 mcdle.net')

  return shell(body, { accent: accentOf(138), width: 760 })
}

export interface RankEntry {
  username: string
  userId: string
  mob: number
  item: number
  block: number
  total: number
}

/** 名次徽章：前三名用金银铜，之后退回 m3-badge 的中性档。 */
const RANK_BADGE = ['m3-badge--gold', 'm3-badge--silver', 'm3-badge--bronze']

export function rankCard(entries: RankEntry[], shown: number): string {
  if (!entries.length) {
    const body =
      header(null, '排行榜', { big: '0', cap: '上榜人数' }) +
      `<div class="pad"><div class="empty">${px('trophy', 44)}
        排行榜还空着<br>第一个猜中的人，名字会写在这里。<br><span style="font-size:${TYPE.bodySmall.size}px">用 <span class="cmd">mcdle.猜 苦力怕</span> 开出第一局，成为榜首</span></div></div>`
    return shell(body, { accent: accentOf(90), width: 560 })
  }

  const max = Math.max(...entries.map((e) => e.total), 1)
  const rows = entries
    .map((e, i) => {
      const pos = i + 1
      const split = (['mob', 'item', 'block'] as Mode[])
        .map((m) => {
          const n = m === 'mob' ? e.mob : m === 'item' ? e.item : e.block
          return `<span class="sp" style="color:${n ? MODES[m].accent : 'var(--md-sys-color-on-surface-variant)'}">${px(MODES[m].icon, 10)}<span>${n}</span></span>`
        })
        .join('')
      const w = Math.round((e.total / max) * 100)
      return `<div class="rk p${pos <= 3 ? pos : 'n'} m3-list-item">
        <div class="pos m3-badge ${RANK_BADGE[pos - 1] || ''}">${pos === 1 ? px('crown', 15) : pos}</div>
        <div class="who"><div class="nm">${esc(e.username || e.userId)}</div><div class="split">${split}</div>
          <div class="prog" style="margin-top:8px"><div class="bar" style="height:6px"><div class="fill" style="width:${w}%"></div></div></div>
        </div>
        <div class="tot"><div class="n">${e.total}</div><div class="c">猜 中</div></div>
      </div>`
    })
    .join('')

  const body =
    header(null, '累计战绩 · 按累计猜中排序', { big: `${shown}`, cap: '上榜人数' }) +
    `<div class="pad"><div class="rank m3-list">${rows}</div></div>` +
    noteRow('每猜中一局记一分，按模式分别计数')

  return shell(body, { accent: accentOf(90), width: 560 })
}
