import { blockData, itemData, keyMap, mobData, valueMap } from './data'

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
    accent: '#8ec96a',
    pixelArt: false,
    tagline: '从生命、体型与生成方式里辨认它',
    total: mobData.length,
  },
  item: {
    name: '物品',
    icon: 'ingot',
    accent: '#e7b249',
    pixelArt: true,
    tagline: '从稀有度、来源与用途里辨认它',
    total: itemData.length,
  },
  block: {
    name: '方块',
    icon: 'grassblock',
    accent: '#7fb0d6',
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
// 设计基调：我的世界的 GUI 语言 —— 直角、四向斜角高光、石质底色。
// 所有边框都用「左上提亮 / 右下压暗」的内阴影模拟凸起的方块面，
// 不使用任何圆角，避免破坏方块感。
// ─────────────────────────────────────────────────────────────────────────────

/**
 * 字体栈先尝试常见的中文点阵字体（Zpix / 缝合像素 / Unifont），
 * 装了的用户会直接得到原汁原味的像素中文；没有则平滑回落到系统黑体。
 */
const FONT_STACK =
  `"Minecraft", "Fusion Pixel 12px monospaced", "Fusion Pixel 12px", "Zpix", ` +
  `"HarmonyOS Sans SC", "PingFang SC", "Noto Sans CJK SC", "Source Han Sans SC", ` +
  `"Microsoft YaHei", "WenQuanYi Micro Hei", "WenQuanYi Zen Hei", ui-sans-serif, sans-serif`

const CSS = `
*{margin:0;padding:0;box-sizing:border-box}
html,body{background:transparent}
body{font-family:${FONT_STACK};-webkit-font-smoothing:antialiased}
.px{display:block;flex:none}

#card{
  position:relative;
  display:inline-block;
  background:#1b201a;
  color:#e9ece5;
  border:4px solid #0b0d0a;
  box-shadow:inset 0 0 0 4px #3c4438, inset 0 0 0 5px #262c24, 0 0 0 1px #000;
  /* 石质底噪：两层错位的斜向条纹，比纯色更有材质但不抢内容 */
  background-image:
    repeating-linear-gradient(135deg, rgba(255,255,255,.016) 0 2px, transparent 2px 5px),
    repeating-linear-gradient(45deg, rgba(0,0,0,.10) 0 3px, transparent 3px 7px);
}
#card::after{
  content:"";position:absolute;inset:0;pointer-events:none;
  background:radial-gradient(120% 90% at 50% 0%, rgba(255,255,255,.05), transparent 60%);
}
.pad{padding:22px 24px 20px}

/* ── 页眉：横切面的草方块 ────────────────────────────── */
.hd{position:relative;overflow:hidden;background:#3a2a1c;
  background-image:
    repeating-linear-gradient(90deg, rgba(0,0,0,.14) 0 4px, transparent 4px 9px),
    repeating-linear-gradient(0deg, rgba(255,255,255,.05) 0 3px, transparent 3px 8px);
  border-bottom:4px solid #0b0d0a;padding:16px 24px 15px}
.hd .turf{position:absolute;left:0;right:0;top:0;height:9px;background:var(--accent);
  box-shadow:inset 0 -3px 0 rgba(0,0,0,.28), 0 3px 0 rgba(0,0,0,.35)}
.hd .turf::after{content:"";position:absolute;inset:0;
  background:repeating-linear-gradient(90deg, rgba(255,255,255,.16) 0 3px, transparent 3px 8px)}
.hd-row{display:flex;align-items:flex-end;justify-content:space-between;gap:24px;margin-top:9px}
.brand{display:flex;align-items:center;gap:10px}
.brand .mark{color:var(--accent);filter:drop-shadow(2px 2px 0 rgba(0,0,0,.55))}
.brand .word{font-size:26px;font-weight:800;letter-spacing:.22em;line-height:1;
  text-shadow:3px 3px 0 rgba(0,0,0,.55)}
.brand .word b{color:var(--accent)}
.hd .sub{margin-top:7px;font-size:12.5px;letter-spacing:.14em;color:#a8b09f;
  text-shadow:2px 2px 0 rgba(0,0,0,.4)}
.hd-meta{text-align:right;flex:none}
.hd-meta .big{font-size:22px;font-weight:800;color:var(--accent);line-height:1;
  text-shadow:3px 3px 0 rgba(0,0,0,.5)}
.hd-meta .cap{font-size:11px;letter-spacing:.2em;color:#939b8b;margin-top:6px}

/* 模式徽记 */
.badge{display:inline-flex;align-items:center;gap:7px;padding:5px 11px;font-size:12.5px;
  letter-spacing:.1em;color:#12160f;background:var(--accent);font-weight:700;
  box-shadow:inset -3px -3px 0 rgba(0,0,0,.26), inset 3px 3px 0 rgba(255,255,255,.34)}

/* ── 猜测板 ───────────────────────────────────────── */
table{border-collapse:separate;border-spacing:5px;margin:0 -5px}
th{padding:0 0 6px;vertical-align:bottom}
.col{display:flex;flex-direction:column;align-items:center;gap:5px;
  min-width:80px;max-width:132px;color:#8d9683}
.col .lb{font-size:11px;letter-spacing:.08em;color:#a5ad9a;text-align:center;line-height:1.25}
th.n .col{align-items:flex-start;min-width:150px}

td{padding:0}
.tile{position:relative;overflow:hidden;height:100%;min-height:56px;min-width:76px;max-width:132px;
  padding:8px 9px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;
  background:var(--tile);
  box-shadow:inset -4px -4px 0 rgba(0,0,0,.30), inset 4px 4px 0 rgba(255,255,255,.16)}
/* 多标签字段给更宽的上限，否则一列里会折成很高的一坨 */
.tile.list{max-width:168px}
th.list .col{max-width:168px}
.tile .v{font-size:13px;font-weight:700;line-height:1.3;text-align:center;color:#f2f4ee;
  text-shadow:2px 2px 0 rgba(0,0,0,.4);word-break:break-word}
.tile .chips{display:flex;flex-wrap:wrap;gap:3px;justify-content:center}
.chip{font-size:11.5px;line-height:1.35;padding:2px 5px;color:#eef1e9;
  background:rgba(0,0,0,.22);box-shadow:inset 0 0 0 1px rgba(255,255,255,.07)}
/* 部分匹配时把真正命中的标签点亮，让「黄」变得可读 */
.chip.on{background:rgba(255,255,255,.9);color:#1b2016;font-weight:700;
  box-shadow:inset -2px -2px 0 rgba(0,0,0,.2)}
.tile .flag{position:absolute;top:4px;right:4px;color:rgba(255,255,255,.8)}
/* 数值方向不只靠角标：整块的上/下边缘会亮起一条，指向答案所在的一侧 */
.tile.s-up::after,.tile.s-down::after{content:"";position:absolute;left:0;right:0;height:5px;
  background:rgba(255,255,255,.45)}
.tile.s-up::after{top:0}
.tile.s-down::after{bottom:0}

.s-hit{--tile:#4a8a35}
.s-half{--tile:#b8862a}
.s-miss{--tile:#8e3f34}
.s-none{--tile:#3a4036}

/* 名称格 */
.name{display:flex;align-items:center;gap:11px;min-height:56px;min-width:150px;padding:7px 11px 7px 8px;
  background:#2a3027;
  box-shadow:inset -4px -4px 0 rgba(0,0,0,.3), inset 4px 4px 0 rgba(255,255,255,.10)}
.name.correct{background:#4a8a35}
.thumb{width:42px;height:42px;flex:none;display:flex;align-items:center;justify-content:center;
  background:rgba(0,0,0,.28);box-shadow:inset 0 0 0 2px rgba(255,255,255,.06)}
.thumb img{max-width:38px;max-height:38px;display:block}
.thumb img.sharp{image-rendering:pixelated}
.thumb img.broken{display:none}
.thumb .fb{display:none;color:#6f7866}
.thumb.failed .fb{display:block}
.name .txt{min-width:0}
.name .cn{font-size:15px;font-weight:800;line-height:1.2;text-shadow:2px 2px 0 rgba(0,0,0,.45)}
.name .en{font-size:10.5px;letter-spacing:.06em;color:#98a08e;margin-top:3px;
  white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:150px}
.name.correct .en{color:rgba(255,255,255,.72)}
.name .no{font-size:10px;color:#79826e;margin-top:3px}
.name.correct .no{color:rgba(255,255,255,.6)}

/* 最新一行的强调：外侧描边 + 左侧标记 */
tr.fresh .tile,tr.fresh .name{box-shadow:inset -4px -4px 0 rgba(0,0,0,.30),
  inset 4px 4px 0 rgba(255,255,255,.16), 0 0 0 2px var(--accent)}
tr.fresh .name{position:relative}
tr.fresh .name::before{content:"";position:absolute;left:0;top:0;bottom:0;width:4px;background:var(--accent)}

/* ── 进度条 ───────────────────────────────────────── */
.prog{display:flex;align-items:center;gap:10px;margin-top:18px}
.prog .bar{flex:1;height:12px;background:#12160f;
  box-shadow:inset 2px 2px 0 rgba(0,0,0,.5), inset -2px -2px 0 rgba(255,255,255,.05)}
.prog .fill{height:100%;background:var(--accent);
  box-shadow:inset 0 -3px 0 rgba(0,0,0,.25), inset 0 3px 0 rgba(255,255,255,.28)}
.prog .num{font-size:12px;color:#a5ad9a;letter-spacing:.08em;flex:none}

/* ── 图例 / 页脚 ──────────────────────────────────── */
.legend{display:flex;flex-wrap:wrap;gap:7px 9px;align-items:center;
  border-top:3px solid #0f120e;padding:13px 24px;background:rgba(0,0,0,.22)}
.lg{display:flex;align-items:center;gap:6px;padding:4px 8px;font-size:11.5px;color:#dfe3d9;
  background:var(--tile);box-shadow:inset -2px -2px 0 rgba(0,0,0,.28), inset 2px 2px 0 rgba(255,255,255,.14)}
.tip{margin-left:auto;font-size:11.5px;color:#828b78;letter-spacing:.05em}

/* ── 通用区块 ─────────────────────────────────────── */
.sec{margin-top:20px}
.sec:first-child{margin-top:0}
.sec-t{display:flex;align-items:center;gap:8px;font-size:12px;letter-spacing:.18em;color:#8d9683;
  margin-bottom:11px}
.sec-t::after{content:"";flex:1;height:3px;background:
  repeating-linear-gradient(90deg,#333a2f 0 4px,transparent 4px 8px)}
.panel{background:#232820;padding:14px 16px;
  box-shadow:inset -3px -3px 0 rgba(0,0,0,.32), inset 3px 3px 0 rgba(255,255,255,.06)}
.rows{display:flex;flex-direction:column;gap:8px}
.row{display:flex;align-items:center;gap:10px;font-size:13.5px;color:#dfe3d9;line-height:1.5}
.row .k{color:var(--accent);flex:none}
.row .m{color:#8d9683;font-size:12px}
.cmd{font-weight:700;color:#f0f3ea;background:rgba(0,0,0,.3);padding:2px 7px;
  box-shadow:inset 0 0 0 1px rgba(255,255,255,.07)}

.grid3{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}
.mode-card{padding:13px 14px;background:#232820;
  box-shadow:inset -3px -3px 0 rgba(0,0,0,.32), inset 3px 3px 0 rgba(255,255,255,.06)}
.mode-card .top{display:flex;align-items:center;gap:8px;font-size:15px;font-weight:800}
.mode-card .cnt{font-size:11.5px;color:#8d9683;margin-top:7px;letter-spacing:.06em}
.mode-card .tl{font-size:11.5px;color:#aab29d;margin-top:5px;line-height:1.5}

.attrs{display:flex;flex-wrap:wrap;gap:7px}
.attr{display:flex;align-items:center;gap:6px;padding:6px 10px;font-size:12.5px;color:#dfe3d9;
  background:#2b3128;box-shadow:inset -3px -3px 0 rgba(0,0,0,.3), inset 3px 3px 0 rgba(255,255,255,.08)}
.attr .px{color:var(--accent)}

/* ── 揭晓卡 ───────────────────────────────────────── */
.reveal{display:flex;align-items:center;gap:20px}
.reveal .who{flex:1;min-width:0}
.reveal .cn .crown{display:inline-block;vertical-align:middle;margin-left:12px;color:var(--accent)}
.reveal .big-thumb{width:132px;height:132px;flex:none;display:flex;align-items:center;justify-content:center;
  background:#232820;box-shadow:inset -4px -4px 0 rgba(0,0,0,.34), inset 4px 4px 0 rgba(255,255,255,.08)}
.reveal .big-thumb img{max-width:116px;max-height:116px;display:block}
.reveal .big-thumb img.sharp{image-rendering:pixelated}
.reveal .big-thumb img.broken{display:none}
.reveal .big-thumb .fb{display:none;color:#5f6857}
.reveal .big-thumb.failed .fb{display:block}
.reveal .cn{font-size:34px;font-weight:800;line-height:1.1;text-shadow:3px 3px 0 rgba(0,0,0,.5)}
.reveal .en{font-size:13px;letter-spacing:.14em;color:#98a08e;margin-top:8px}
.stats{display:grid;grid-template-columns:repeat(3,1fr);gap:9px}
.stat{padding:11px 14px;background:#2b3128;
  box-shadow:inset -3px -3px 0 rgba(0,0,0,.3), inset 3px 3px 0 rgba(255,255,255,.08)}
.stat .n{font-size:19px;font-weight:800;color:var(--accent);line-height:1;
  text-shadow:2px 2px 0 rgba(0,0,0,.45)}
.stat .c{font-size:10.5px;color:#8d9683;margin-top:6px;letter-spacing:.1em}

/* ── 排行榜 ───────────────────────────────────────── */
.rank{display:flex;flex-direction:column;gap:6px}
.rk{display:flex;align-items:center;gap:13px;padding:10px 13px;background:#232820;
  box-shadow:inset -3px -3px 0 rgba(0,0,0,.32), inset 3px 3px 0 rgba(255,255,255,.06)}
.rk .pos{width:34px;height:34px;flex:none;display:flex;align-items:center;justify-content:center;
  font-size:15px;font-weight:800;color:#12160f;background:#59614f;
  box-shadow:inset -3px -3px 0 rgba(0,0,0,.24), inset 3px 3px 0 rgba(255,255,255,.28)}
.rk.p1 .pos{background:#e8b53c}
.rk.p2 .pos{background:#c3cad3}
.rk.p3 .pos{background:#c47a45}
.rk.p1{box-shadow:inset -3px -3px 0 rgba(0,0,0,.32), inset 3px 3px 0 rgba(255,255,255,.06), 0 0 0 2px #e8b53c}
.rk .who{flex:1;min-width:0}
.rk .nm{font-size:14.5px;font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;
  max-width:260px}
.rk .split{display:flex;gap:9px;margin-top:6px}
.rk .sp{display:flex;align-items:center;gap:4px;font-size:11px;color:#98a08e}
.rk .tot{flex:none;text-align:right}
.rk .tot .n{font-size:21px;font-weight:800;color:var(--accent);line-height:1;
  text-shadow:2px 2px 0 rgba(0,0,0,.45)}
.rk .tot .c{font-size:10px;color:#7c856f;margin-top:5px;letter-spacing:.1em}

.empty{padding:34px 20px;min-width:400px;text-align:center;color:#7c856f;font-size:13.5px;line-height:2}
.empty .px{margin:0 auto 14px;color:#3f4739}
`

export interface ShellOptions {
  accent: string
  /** 固定卡片宽度；棋盘类卡片省略此项，按列数自适应 */
  width?: number
}

function shell(body: string, opts: ShellOptions): string {
  const width = opts.width ? `width:${opts.width}px;` : ''
  return `<!DOCTYPE html><html lang="zh-CN"><head><meta charset="utf-8"><style>${CSS}</style></head>
<body><div id="card" style="--accent:${opts.accent};${width}">${body}</div></body></html>`
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

  const head =
    `<tr><th class="n"><div class="col"><span class="lb">${guesses.length} 次猜测</span></div></th>` +
    fields
      .map(
        (k) =>
          `<th${isListField(k, last) ? ' class="list"' : ''}><div class="col">${px(fieldIcon(k), 15)}` +
          `<span class="lb">${esc(fieldLabel(k))}</span></div></th>`,
      )
      .join('') +
    '</tr>'

  const rows = guesses
    .map((g, i) => {
      const fresh = i === guesses.length - 1 ? ' class="fresh"' : ''
      const solved = fields.every((k) => statusOf(g, k) === 'true') && g.chinese_title_gui === 'true'
      const name =
        `<td><div class="name${solved ? ' correct' : ''}">${thumb(g.wiki_image_url, mode)}` +
        `<div class="txt"><div class="cn">${esc(g.chinese_title)}${solved ? ' ' + px('crown', 13) : ''}</div>` +
        `<div class="en">${esc(g.title || '')}</div>` +
        `<div class="no">#${String(i + 1).padStart(2, '0')}</div></div></div></td>`
      return `<tr${fresh}>${name}${fields.map((k) => tileCell(g, k)).join('')}</tr>`
    })
    .join('')

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
    `<div class="pad"><table>${head}${rows}</table>${prog}</div>` +
    legendRow(opts.tip || '箭头指向答案所在的方向')

  return shell(body, { accent: meta.accent })
}

export function startCard(mode: Mode, played: number, limit: number): string {
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
          <div class="row"><span class="cmd">mcdle.猜 [名称]</span><span class="m">提交一次猜测</span></div>
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
    noteRow('mcdle.排行榜 查看战绩')

  return shell(body, { accent: meta.accent, width: 720 })
}

export function helpCard(dailyLimit: number, allowRepeat: boolean): string {
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

  const body =
    header(null, '我的世界猜谜 · 玩法说明', { big: `${dailyLimit}`, cap: '每日局数上限' }) +
    `<div class="pad">
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
        <div class="sec-t"><span>指 令</span></div>
        <div class="panel"><div class="rows">
          <div class="row"><span class="cmd">mcdle.猜 [名称]</span><span class="m">开始一局，或提交猜测</span></div>
          <div class="row"><span class="cmd">mcdle.猜</span><span class="m">局中直接使用可回看当前棋盘</span></div>
          <div class="row"><span class="cmd">mcdle.排行榜</span><span class="m">查看群内战绩</span></div>
          <div class="row"><span class="cmd">mcdle.词库</span><span class="m">查阅全部候选词条</span></div>
        </div></div>
      </div>
      <div class="sec">
        <div class="sec-t"><span>规 则 细 则</span></div>
        <div class="panel"><div class="rows">
          <div class="row"><span class="k">·</span><span>每个群每日可开始 <b>${dailyLimit}</b> 局，跨零点重置。</span></div>
          <div class="row"><span class="k">·</span><span>${allowRepeat ? '允许重复提交已经猜过的词条。' : '同一局内不能重复提交已猜过的词条。'}</span></div>
          <div class="row"><span class="k">·</span><span>词条与数据来自 Minecraft Wiki，版本号按发布先后比较。</span></div>
        </div></div>
      </div>
    </div>` +
    noteRow('词条数据来自 zh.minecraft.wiki')

  return shell(body, { accent: '#8ec96a', width: 760 })
}

export function introCard(dailyLimit: number): string {
  const modeCards = (['mob', 'item', 'block'] as Mode[])
    .map((m) => {
      const meta = MODES[m]
      return `<div class="mode-card" style="--accent:${meta.accent}">
        <div class="top" style="color:${meta.accent}">${px(meta.icon, 17)}<span>${meta.name}</span></div>
        <div class="cnt">${meta.total} 个词条</div>
      </div>`
    })
    .join('')

  const body =
    header(null, '猜生物 · 猜物品 · 猜方块', { big: `${mobData.length + itemData.length + blockData.length}`, cap: '词条总量' }) +
    `<div class="pad">
      <div class="sec">
        <div class="sec-t"><span>玩 什 么</span></div>
        <div class="grid3">${modeCards}</div>
      </div>
      <div class="sec">
        <div class="sec-t"><span>三 步 上 手</span></div>
        <div class="panel"><div class="rows">
          <div class="row"><span class="k">壹</span><span class="cmd">mcdle.猜 苦力怕</span><span class="m">随便报一个名字即可开局</span></div>
          <div class="row"><span class="k">贰</span><span>对照颜色与箭头缩小范围，每一次猜测都会留在棋盘上。</span></div>
          <div class="row"><span class="k">叁</span><span>锁定答案，战绩自动记入 <span class="cmd">mcdle.排行榜</span>。</span></div>
        </div></div>
      </div>
      <div class="sec">
        <div class="sec-t"><span>今 日 额 度</span></div>
        <div class="panel"><div class="rows">
          <div class="row"><span class="k">·</span><span>每个群每日 <b>${dailyLimit}</b> 局，跨零点重置；详细规则见 <span class="cmd">mcdle.帮助</span>。</span></div>
        </div></div>
      </div>
    </div>` +
    noteRow('灵感来自 Wordle 与 mcdle.net')

  return shell(body, { accent: '#8ec96a', width: 700 })
}

export interface RankEntry {
  username: string
  userId: string
  mob: number
  item: number
  block: number
  total: number
}

export function rankCard(entries: RankEntry[], shown: number): string {
  if (!entries.length) {
    const body =
      header(null, '排行榜', { big: '0', cap: '上榜人数' }) +
      `<div class="pad"><div class="empty">${px('trophy', 44)}
        榜单还空着<br><span style="font-size:12px">用 <span class="cmd">mcdle.猜</span> 开出第一局，成为榜首</span></div></div>`
    return shell(body, { accent: '#e8b53c', width: 560 })
  }

  const max = Math.max(...entries.map((e) => e.total), 1)
  const rows = entries
    .map((e, i) => {
      const pos = i + 1
      const split = (['mob', 'item', 'block'] as Mode[])
        .map((m) => {
          const n = m === 'mob' ? e.mob : m === 'item' ? e.item : e.block
          return `<span class="sp" style="color:${n ? MODES[m].accent : '#5f6857'}">${px(MODES[m].icon, 10)}<span>${n}</span></span>`
        })
        .join('')
      const w = Math.round((e.total / max) * 100)
      return `<div class="rk p${pos <= 3 ? pos : 'n'}">
        <div class="pos">${pos === 1 ? px('crown', 15) : pos}</div>
        <div class="who"><div class="nm">${esc(e.username || e.userId)}</div><div class="split">${split}</div>
          <div class="prog" style="margin-top:8px"><div class="bar" style="height:6px"><div class="fill" style="width:${w}%"></div></div></div>
        </div>
        <div class="tot"><div class="n">${e.total}</div><div class="c">猜 中</div></div>
      </div>`
    })
    .join('')

  const body =
    header(null, '群内战绩 · 按累计猜中排序', { big: `${shown}`, cap: '上榜人数' }) +
    `<div class="pad"><div class="rank">${rows}</div></div>` +
    noteRow('每猜中一局记一分，按模式分别计数')

  return shell(body, { accent: '#e8b53c', width: 560 })
}
