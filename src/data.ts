export interface MobData {
  id: string;
  title: string;
  url: string;
  image_url: string;
  health: number;
  behavior: string[];
  spawn: string[];
  classification: string[];
  height: number;
  initial_release: string;
  chinese_title: string;
  wiki_image_url: string;
}

export interface BlockData {
  id: string;
  title: string;
  url: string;
  image_url: string;
  renewable: string;
  stackable: number;
  tool: string;
  blast_resistance: number;
  hardness: number;
  luminous: string;
  full_block: string;
  flammable: string;
  fire_catch: string;
  initial_release: string;
  transparent: string;
  chinese_title: string;
  wiki_image_url: string;
}

export interface ItemData {
  id: string;
  title: string;
  url: string;
  image_url: string;
  renewable: string;
  stackable: number;
  rarity: string;
  initial_release: string;
  obtaining: string[];
  usage: string[];
  inventory_categories: string[];
  recipe: string[];
  loot: string[];
  chinese_title: string;
  wiki_image_url: string;
}

export const mobData: MobData[] = [
  {
    "id": "allay",
    "title": "Allay",
    "url": "https://minecraft.wiki/w/Allay",
    "image_url": "/mobImages/allay.gif",
    "health": 20,
    "behavior": [
      "passive"
    ],
    "spawn": [
      "structure",
      "duplication"
    ],
    "classification": [
      "none"
    ],
    "height": 0.6,
    "initial_release": "1.19",
    "chinese_title": "悦灵",
    "wiki_image_url": "https://minecraft.wiki/images/Allay_JE2_BE2.gif?aca63"
  },
  {
    "id": "armadillo",
    "title": "Armadillo",
    "url": "https://minecraft.wiki/w/Armadillo",
    "image_url": "/mobImages/armadillo.gif",
    "health": 12,
    "behavior": [
      "passive"
    ],
    "spawn": [
      "biome",
      "breeding"
    ],
    "classification": [
      "animal"
    ],
    "height": 0.65,
    "initial_release": "1.20.5",
    "chinese_title": "犰狳",
    "wiki_image_url": "https://minecraft.wiki/images/thumb/Armadillo_JE2_BE2.png/800px-Armadillo_JE2_BE2.png?9cdf1"
  },
  {
    "id": "axolotl",
    "title": "Axolotl",
    "url": "https://minecraft.wiki/w/Axolotl",
    "image_url": "/mobImages/axolotl.png",
    "health": 14,
    "behavior": [
      "passive"
    ],
    "spawn": [
      "biome",
      "breeding"
    ],
    "classification": [
      "animal",
      "aquatic"
    ],
    "height": 0.42,
    "initial_release": "1.17",
    "chinese_title": "美西螈",
    "wiki_image_url": "https://minecraft.wiki/images/thumb/Axolotl_Idle_Floor_Underwater.gif/800px-Axolotl_Idle_Floor_Underwater.gif?98deb"
  },
  {
    "id": "bat",
    "title": "Bat",
    "url": "https://minecraft.wiki/w/Bat",
    "image_url": "/mobImages/bat.gif",
    "health": 6,
    "behavior": [
      "passive"
    ],
    "spawn": [
      "light_level"
    ],
    "classification": [
      "animal"
    ],
    "height": 0.9,
    "initial_release": "1.4.2",
    "chinese_title": "蝙蝠",
    "wiki_image_url": "https://minecraft.wiki/images/Bat_JE4_BE3.png?90ab1"
  },
  {
    "id": "bee",
    "title": "Bee",
    "url": "https://minecraft.wiki/w/Bee",
    "image_url": "/mobImages/bee.gif",
    "health": 10,
    "behavior": [
      "neutral"
    ],
    "spawn": [
      "block",
      "breeding"
    ],
    "classification": [
      "animal",
      "arthropod"
    ],
    "height": 0.6,
    "initial_release": "1.15",
    "chinese_title": "蜜蜂",
    "wiki_image_url": "https://minecraft.wiki/images/Bee_JE1.gif?69ac5"
  },
  {
    "id": "blaze",
    "title": "Blaze",
    "url": "https://minecraft.wiki/w/Blaze",
    "image_url": "/mobImages/blaze.gif",
    "health": 20,
    "behavior": [
      "hostile"
    ],
    "spawn": [
      "structure",
      "spawner"
    ],
    "classification": [
      "none"
    ],
    "height": 1.8,
    "initial_release": "1.0.0",
    "chinese_title": "烈焰人",
    "wiki_image_url": "https://minecraft.wiki/images/Blaze.gif?29f6f"
  },
  {
    "id": "bogged",
    "title": "Bogged",
    "url": "https://minecraft.wiki/w/Bogged",
    "image_url": "/mobImages/bogged.webp",
    "health": 16,
    "behavior": [
      "hostile"
    ],
    "spawn": [
      "biome",
      "spawner"
    ],
    "classification": [
      "undead"
    ],
    "height": 1.99,
    "initial_release": "1.21",
    "chinese_title": "沼骸",
    "wiki_image_url": "https://minecraft.wiki/images/Bogged_JE2_BE2.png?55cb9"
  },
  {
    "id": "breeze",
    "title": "Breeze",
    "url": "https://minecraft.wiki/w/Breeze",
    "image_url": "/mobImages/breeze.webp",
    "health": 30,
    "behavior": [
      "hostile"
    ],
    "spawn": [
      "spawner"
    ],
    "classification": [
      "none"
    ],
    "height": 1.77,
    "initial_release": "1.21",
    "chinese_title": "旋风人",
    "wiki_image_url": "https://minecraft.wiki/images/Breeze_JE1.webp?181ec"
  },
  {
    "id": "camel",
    "title": "Camel",
    "url": "https://minecraft.wiki/w/Camel",
    "image_url": "/mobImages/camel.png",
    "health": 32,
    "behavior": [
      "passive"
    ],
    "spawn": [
      "structure",
      "breeding",
      "biome"
    ],
    "classification": [
      "animal"
    ],
    "height": 2.375,
    "initial_release": "1.20",
    "chinese_title": "骆驼",
    "wiki_image_url": "https://minecraft.wiki/images/Camel_JE1_BE2.png?b76b7"
  },
  {
    "id": "cat",
    "title": "Cat",
    "url": "https://minecraft.wiki/w/Cat",
    "image_url": "/mobImages/cat.png",
    "health": 10,
    "behavior": [
      "passive"
    ],
    "spawn": [
      "structure",
      "breeding"
    ],
    "classification": [
      "animal"
    ],
    "height": 0.7,
    "initial_release": "1.14",
    "chinese_title": "猫",
    "wiki_image_url": "https://minecraft.wiki/images/thumb/Tabby_Cat.png/800px-Tabby_Cat.png?ea9ab"
  },
  {
    "id": "cave_spider",
    "title": "Cave Spider",
    "url": "https://minecraft.wiki/w/Cave_Spider",
    "image_url": "/mobImages/cave_spider.png",
    "health": 12,
    "behavior": [
      "hostile",
      "neutral"
    ],
    "spawn": [
      "spawner"
    ],
    "classification": [
      "arthropod"
    ],
    "height": 0.5,
    "initial_release": "Beta 1.8",
    "chinese_title": "洞穴蜘蛛",
    "wiki_image_url": "https://minecraft.wiki/images/thumb/Cave_Spider_JE3_BE3.png/800px-Cave_Spider_JE3_BE3.png?86c1d"
  },
  {
    "id": "chicken",
    "title": "Chicken",
    "url": "https://minecraft.wiki/w/Chicken",
    "image_url": "/mobImages/chicken.png",
    "health": 4,
    "behavior": [
      "passive"
    ],
    "spawn": [
      "grass",
      "jockey",
      "projectile",
      "breeding"
    ],
    "classification": [
      "animal"
    ],
    "height": 0.7,
    "initial_release": "Alpha 1.0.14",
    "chinese_title": "鸡",
    "wiki_image_url": "https://minecraft.wiki/images/Chicken_JE2_BE2.png?30245"
  },
  {
    "id": "cod",
    "title": "Cod",
    "url": "https://minecraft.wiki/w/Cod",
    "image_url": "/mobImages/cod.gif",
    "health": 3,
    "behavior": [
      "passive"
    ],
    "spawn": [
      "biome"
    ],
    "classification": [
      "animal",
      "aquatic"
    ],
    "height": 0.3,
    "initial_release": "1.13",
    "chinese_title": "鳕鱼",
    "wiki_image_url": "https://minecraft.wiki/images/Cod.gif?fe8d7"
  },
  {
    "id": "cow",
    "title": "Cow",
    "url": "https://minecraft.wiki/w/Cow",
    "image_url": "/mobImages/cow.png",
    "health": 10,
    "behavior": [
      "passive"
    ],
    "spawn": [
      "grass",
      "conversion",
      "breeding",
      "structure"
    ],
    "classification": [
      "animal"
    ],
    "height": 1.4,
    "initial_release": "Alpha 1.0.8",
    "chinese_title": "牛",
    "wiki_image_url": "https://minecraft.wiki/images/Cow_JE7_BE4.png?a8c84"
  },
  {
    "id": "creaking",
    "title": "Creaking",
    "url": "https://minecraft.wiki/w/Creaking",
    "image_url": "/mobImages/creaking.webp",
    "health": 1,
    "behavior": [
      "hostile"
    ],
    "spawn": [
      "block",
      "summon"
    ],
    "classification": [
      "none"
    ],
    "height": 2.7,
    "initial_release": "1.21.4",
    "chinese_title": "嘎枝",
    "wiki_image_url": "https://minecraft.wiki/images/Creaking_JE1_BE1.png?1a8ab"
  },
  {
    "id": "creeper",
    "title": "Creeper",
    "url": "https://minecraft.wiki/w/Creeper",
    "image_url": "/mobImages/creeper.png",
    "health": 20,
    "behavior": [
      "hostile"
    ],
    "spawn": [
      "light_level"
    ],
    "classification": [
      "none"
    ],
    "height": 1.7,
    "initial_release": "pre-alpha",
    "chinese_title": "苦力怕",
    "wiki_image_url": "https://minecraft.wiki/images/Creeper_JE3_BE1.png?dc7b2"
  },
  {
    "id": "dolphin",
    "title": "Dolphin",
    "url": "https://minecraft.wiki/w/Dolphin",
    "image_url": "/mobImages/dolphin.gif",
    "health": 10,
    "behavior": [
      "neutral",
      "passive"
    ],
    "spawn": [
      "biome"
    ],
    "classification": [
      "animal",
      "aquatic"
    ],
    "height": 0.6,
    "initial_release": "1.13",
    "chinese_title": "海豚",
    "wiki_image_url": "https://minecraft.wiki/images/Dolphin.gif?3f0f5"
  },
  {
    "id": "donkey",
    "title": "Donkey",
    "url": "https://minecraft.wiki/w/Donkey",
    "image_url": "/mobImages/donkey.png",
    "health": 22,
    "behavior": [
      "passive"
    ],
    "spawn": [
      "biome",
      "breeding"
    ],
    "classification": [
      "animal"
    ],
    "height": 1.5,
    "initial_release": "1.6.1",
    "chinese_title": "驴",
    "wiki_image_url": "https://minecraft.wiki/images/thumb/Donkey_JE5.png/800px-Donkey_JE5.png?9e2a1"
  },
  {
    "id": "drowned",
    "title": "Drowned",
    "url": "https://minecraft.wiki/w/Drowned",
    "image_url": "/mobImages/drowned.png",
    "health": 20,
    "behavior": [
      "hostile",
      "passive"
    ],
    "spawn": [
      "conversion",
      "biome",
      "jockey",
      "structure",
      "reinforcements"
    ],
    "classification": [
      "undead"
    ],
    "height": 1.95,
    "initial_release": "1.13",
    "chinese_title": "溺尸",
    "wiki_image_url": "https://minecraft.wiki/images/Drowned_JE1.png?2454e"
  },
  {
    "id": "elder_guardian",
    "title": "Elder Guardian",
    "url": "https://minecraft.wiki/w/Elder_Guardian",
    "image_url": "/mobImages/elder_guardian.gif",
    "health": 80,
    "behavior": [
      "hostile"
    ],
    "spawn": [
      "structure"
    ],
    "classification": [
      "aquatic"
    ],
    "height": 1.9975,
    "initial_release": "1.8",
    "chinese_title": "远古守卫者",
    "wiki_image_url": "https://minecraft.wiki/images/thumb/Elder_Guardian_%28Retracted%29.png/1200px-Elder_Guardian_%28Retracted%29.png?9c607"
  },
  {
    "id": "ender_dragon",
    "title": "Ender Dragon",
    "url": "https://minecraft.wiki/w/Ender_Dragon",
    "image_url": "/mobImages/ender_dragon.gif",
    "health": 200,
    "behavior": [
      "hostile"
    ],
    "spawn": [
      "structure",
      "summon"
    ],
    "classification": [
      "boss"
    ],
    "height": 8,
    "initial_release": "1.0.0",
    "chinese_title": "末影龙",
    "wiki_image_url": "https://minecraft.wiki/images/Ender_Dragon.gif?fb9ba"
  },
  {
    "id": "enderman",
    "title": "Enderman",
    "url": "https://minecraft.wiki/w/Enderman",
    "image_url": "/mobImages/enderman.png",
    "health": 40,
    "behavior": [
      "neutral"
    ],
    "spawn": [
      "light_level",
      "biome"
    ],
    "classification": [
      "none"
    ],
    "height": 2.9,
    "initial_release": "Beta 1.8",
    "chinese_title": "末影人",
    "wiki_image_url": "https://minecraft.wiki/images/thumb/Enderman_JE3_BE1.png/800px-Enderman_JE3_BE1.png?c6308"
  },
  {
    "id": "endermite",
    "title": "Endermite",
    "url": "https://minecraft.wiki/w/Endermite",
    "image_url": "/mobImages/endermite.gif",
    "health": 8,
    "behavior": [
      "hostile"
    ],
    "spawn": [
      "projectile"
    ],
    "classification": [
      "arthropod"
    ],
    "height": 0.3,
    "initial_release": "1.8",
    "chinese_title": "末影螨",
    "wiki_image_url": "https://minecraft.wiki/images/Endermite.gif?920c2"
  },
  {
    "id": "evoker",
    "title": "Evoker",
    "url": "https://minecraft.wiki/w/Evoker",
    "image_url": "/mobImages/evoker.png",
    "health": 24,
    "behavior": [
      "hostile"
    ],
    "spawn": [
      "structure",
      "raids",
      "jockey"
    ],
    "classification": [
      "illager"
    ],
    "height": 1.95,
    "initial_release": "1.11",
    "chinese_title": "唤魔者",
    "wiki_image_url": "https://minecraft.wiki/images/thumb/Evoker_Summoning_Vexes.png/800px-Evoker_Summoning_Vexes.png?15d33"
  },
  {
    "id": "fox",
    "title": "Fox",
    "url": "https://minecraft.wiki/w/Fox",
    "image_url": "/mobImages/fox.png",
    "health": 10,
    "behavior": [
      "passive",
      "neutral"
    ],
    "spawn": [
      "biome",
      "breeding"
    ],
    "classification": [
      "animal"
    ],
    "height": 0.7,
    "initial_release": "1.14",
    "chinese_title": "狐狸",
    "wiki_image_url": "https://minecraft.wiki/images/Fox_JE1_BE1.png?ebd36"
  },
  {
    "id": "frog",
    "title": "Frog",
    "url": "https://minecraft.wiki/w/Frog",
    "image_url": "/mobImages/frog.gif",
    "health": 10,
    "behavior": [
      "passive"
    ],
    "spawn": [
      "biome",
      "conversion"
    ],
    "classification": [
      "animal"
    ],
    "height": 0.5,
    "initial_release": "1.19",
    "chinese_title": "青蛙",
    "wiki_image_url": "https://minecraft.wiki/images/Temperate_Frog_JE1_BE1.gif?5a0ff"
  },
  {
    "id": "ghast",
    "title": "Ghast",
    "url": "https://minecraft.wiki/w/Ghast",
    "image_url": "/mobImages/ghast.webp",
    "health": 10,
    "behavior": [
      "hostile"
    ],
    "spawn": [
      "biome"
    ],
    "classification": [
      "none"
    ],
    "height": 4,
    "initial_release": "Alpha 1.2.0",
    "chinese_title": "恶魂",
    "wiki_image_url": "https://minecraft.wiki/images/Ghast_JE3_BE3.gif?ae9fb"
  },
  {
    "id": "happy_ghast",
    "title": "Happy Ghast",
    "url": "https://minecraft.wiki/w/Happy_Ghast",
    "image_url": "/mobImages/happy_ghast.webp",
    "health": 20,
    "behavior": [
      "passive"
    ],
    "spawn": [
      "block"
    ],
    "classification": [
      "animal"
    ],
    "height": 4,
    "initial_release": "1.21.6",
    "chinese_title": "快乐恶魂",
    "wiki_image_url": "https://minecraft.wiki/images/thumb/Happy_Ghast_JE1_BE1.gif/640px-Happy_Ghast_JE1_BE1.gif?7e801"
  },
  {
    "id": "giant",
    "title": "Giant",
    "url": "https://minecraft.wiki/w/Giant",
    "image_url": "/mobImages/giant.png",
    "health": 100,
    "behavior": [
      "passive"
    ],
    "spawn": [
      "light_level",
      "command"
    ],
    "classification": [
      "none"
    ],
    "height": 12,
    "initial_release": "pre-alpha",
    "chinese_title": "巨人",
    "wiki_image_url": "https://minecraft.wiki/images/Zombie_JE3_BE2.png?228b5"
  },
  {
    "id": "glow_squid",
    "title": "Glow Squid",
    "url": "https://minecraft.wiki/w/Glow_Squid",
    "image_url": "/mobImages/glow_squid.gif",
    "health": 10,
    "behavior": [
      "passive"
    ],
    "spawn": [
      "light_level"
    ],
    "classification": [
      "animal",
      "aquatic"
    ],
    "height": 0.8,
    "initial_release": "1.17",
    "chinese_title": "发光鱿鱼",
    "wiki_image_url": "https://minecraft.wiki/images/Glow_Squid_JE1.gif?dcad8"
  },
  {
    "id": "goat",
    "title": "Goat",
    "url": "https://minecraft.wiki/w/Goat",
    "image_url": "/mobImages/goat.png",
    "health": 10,
    "behavior": [
      "neutral"
    ],
    "spawn": [
      "biome",
      "breeding"
    ],
    "classification": [
      "animal"
    ],
    "height": 1.3,
    "initial_release": "1.17",
    "chinese_title": "山羊",
    "wiki_image_url": "https://minecraft.wiki/images/thumb/Goat_JE1_BE1.png/1200px-Goat_JE1_BE1.png?17d44"
  },
  {
    "id": "guardian",
    "title": "Guardian",
    "url": "https://minecraft.wiki/w/Guardian",
    "image_url": "/mobImages/guardian.gif",
    "health": 30,
    "behavior": [
      "hostile"
    ],
    "spawn": [
      "structure"
    ],
    "classification": [
      "aquatic"
    ],
    "height": 0.85,
    "initial_release": "1.8",
    "chinese_title": "守卫者",
    "wiki_image_url": "https://minecraft.wiki/images/thumb/Guardian_%28Retracted%29.png/1200px-Guardian_%28Retracted%29.png?4b855"
  },
  {
    "id": "horse",
    "title": "Horse",
    "url": "https://minecraft.wiki/w/Horse",
    "image_url": "/mobImages/horse.png",
    "health": 22,
    "behavior": [
      "passive"
    ],
    "spawn": [
      "biome",
      "structure",
      "breeding"
    ],
    "classification": [
      "animal"
    ],
    "height": 1.6,
    "initial_release": "1.6.1",
    "chinese_title": "马",
    "wiki_image_url": "https://minecraft.wiki/images/thumb/White_Horse.png/800px-White_Horse.png?0cc9a"
  },
  {
    "id": "hoglin",
    "title": "Hoglin",
    "url": "https://minecraft.wiki/w/Hoglin",
    "image_url": "/mobImages/hoglin.png",
    "health": 40,
    "behavior": [
      "hostile"
    ],
    "spawn": [
      "biome",
      "structure",
      "breeding"
    ],
    "classification": [
      "animal"
    ],
    "height": 1.4,
    "initial_release": "1.16",
    "chinese_title": "疣猪兽",
    "wiki_image_url": "https://minecraft.wiki/images/thumb/Hoglin_JE3.png/800px-Hoglin_JE3.png?65eaa"
  },
  {
    "id": "husk",
    "title": "Husk",
    "url": "https://minecraft.wiki/w/Husk",
    "image_url": "/mobImages/husk.png",
    "health": 20,
    "behavior": [
      "hostile"
    ],
    "spawn": [
      "biome",
      "jockey",
      "spawner",
      "light_level",
      "reinforcements"
    ],
    "classification": [
      "undead"
    ],
    "height": 1.95,
    "initial_release": "1.10",
    "chinese_title": "尸壳",
    "wiki_image_url": "https://minecraft.wiki/images/Husk_JE2_BE2.png?a6767"
  },
  {
    "id": "illusioner",
    "title": "Illusioner",
    "url": "https://minecraft.wiki/w/Illusioner",
    "image_url": "/mobImages/illusioner.png",
    "health": 32,
    "behavior": [
      "hostile"
    ],
    "spawn": [
      "command"
    ],
    "classification": [
      "illager"
    ],
    "height": 1.95,
    "initial_release": "1.12",
    "chinese_title": "幻术师",
    "wiki_image_url": "https://minecraft.wiki/images/thumb/Illusioner_Casting.png/800px-Illusioner_Casting.png?2f926"
  },
  {
    "id": "iron_golem",
    "title": "Iron Golem",
    "url": "https://minecraft.wiki/w/Iron_Golem",
    "image_url": "/mobImages/iron_golem.png",
    "health": 100,
    "behavior": [
      "neutral",
      "passive"
    ],
    "spawn": [
      "structure",
      "summon"
    ],
    "classification": [
      "golem"
    ],
    "height": 2.7,
    "initial_release": "1.2.1",
    "chinese_title": "铁傀儡",
    "wiki_image_url": "https://minecraft.wiki/images/Iron_Golem_JE2_BE2.png?2cd73"
  },
  {
    "id": "rabbit",
    "title": "Rabbit",
    "url": "https://minecraft.wiki/w/Killer_Bunny",
    "image_url": "/mobImages/rabbit.png",
    "health": 3,
    "behavior": [
      "passive",
      "hostile"
    ],
    "spawn": [
      "biome",
      "breeding"
    ],
    "classification": [
      "animal"
    ],
    "height": 0.5,
    "initial_release": "1.8",
    "chinese_title": "兔子",
    "wiki_image_url": "https://minecraft.wiki/images/thumb/Brown_Rabbit_JE2_BE2.png/640px-Brown_Rabbit_JE2_BE2.png?bc661"
  },
  {
    "id": "llama",
    "title": "Llama",
    "url": "https://minecraft.wiki/w/Llama",
    "image_url": "/mobImages/llama.png",
    "health": 22,
    "behavior": [
      "neutral"
    ],
    "spawn": [
      "biome",
      "breeding",
      "overworld"
    ],
    "classification": [
      "animal"
    ],
    "height": 1.87,
    "initial_release": "1.11",
    "chinese_title": "羊驼",
    "wiki_image_url": "https://minecraft.wiki/images/thumb/Brown_Llama_JE2_BE2.png/640px-Brown_Llama_JE2_BE2.png?3b960"
  },
  {
    "id": "magma_cube",
    "title": "Magma Cube",
    "url": "https://minecraft.wiki/w/Magma_Cube",
    "image_url": "/mobImages/magma_cube.png",
    "health": 16,
    "behavior": [
      "hostile"
    ],
    "spawn": [
      "biome",
      "spawner",
      "structure"
    ],
    "classification": [
      "none"
    ],
    "height": 2.04,
    "initial_release": "1.0.0",
    "chinese_title": "岩浆怪",
    "wiki_image_url": "https://minecraft.wiki/images/Magma_Cube_JE2_BE2.png?b4389"
  },
  {
    "id": "mooshroom",
    "title": "Mooshroom",
    "url": "https://minecraft.wiki/w/Mooshroom",
    "image_url": "/mobImages/mooshroom.png",
    "health": 10,
    "behavior": [
      "passive"
    ],
    "spawn": [
      "biome",
      "breeding"
    ],
    "classification": [
      "animal"
    ],
    "height": 1.4,
    "initial_release": "1.0.0",
    "chinese_title": "哞菇",
    "wiki_image_url": "https://minecraft.wiki/images/Red_Mooshroom_JE5_BE3.png?de6c9"
  },
  {
    "id": "mule",
    "title": "Mule",
    "url": "https://minecraft.wiki/w/Mule",
    "image_url": "/mobImages/mule.png",
    "health": 22,
    "behavior": [
      "passive"
    ],
    "spawn": [
      "breeding"
    ],
    "classification": [
      "animal"
    ],
    "height": 1.6,
    "initial_release": "1.6.1",
    "chinese_title": "骡",
    "wiki_image_url": "https://minecraft.wiki/images/thumb/Mule_JE5.png/800px-Mule_JE5.png?3c1f0"
  },
  {
    "id": "ocelot",
    "title": "Ocelot",
    "url": "https://minecraft.wiki/w/Ocelot",
    "image_url": "/mobImages/ocelot.png",
    "health": 10,
    "behavior": [
      "passive"
    ],
    "spawn": [
      "biome",
      "breeding"
    ],
    "classification": [
      "animal"
    ],
    "height": 0.7,
    "initial_release": "1.2.1",
    "chinese_title": "豹猫",
    "wiki_image_url": "https://minecraft.wiki/images/thumb/Ocelot_JE2_BE2.png/800px-Ocelot_JE2_BE2.png?7d798"
  },
  {
    "id": "panda",
    "title": "Panda",
    "url": "https://minecraft.wiki/w/Panda",
    "image_url": "/mobImages/panda.png",
    "health": 20,
    "behavior": [
      "neutral"
    ],
    "spawn": [
      "biome",
      "breeding"
    ],
    "classification": [
      "animal"
    ],
    "height": 1.25,
    "initial_release": "1.14",
    "chinese_title": "熊猫",
    "wiki_image_url": "https://minecraft.wiki/images/thumb/Panda_JE1_BE1.png/640px-Panda_JE1_BE1.png?31d00"
  },
  {
    "id": "parrot",
    "title": "Parrot",
    "url": "https://minecraft.wiki/w/Parrot",
    "image_url": "/mobImages/parrot.png",
    "health": 6,
    "behavior": [
      "passive"
    ],
    "spawn": [
      "biome"
    ],
    "classification": [
      "animal"
    ],
    "height": 0.9,
    "initial_release": "1.12",
    "chinese_title": "鹦鹉",
    "wiki_image_url": "https://minecraft.wiki/images/thumb/Red_Parrot_JE1_BE1.png/640px-Red_Parrot_JE1_BE1.png?90904"
  },
  {
    "id": "phantom",
    "title": "Phantom",
    "url": "https://minecraft.wiki/w/Phantom",
    "image_url": "/mobImages/phantom.gif",
    "health": 20,
    "behavior": [
      "hostile"
    ],
    "spawn": [
      "summon",
      "light_level"
    ],
    "classification": [
      "undead"
    ],
    "height": 0.5,
    "initial_release": "1.13",
    "chinese_title": "幻翼",
    "wiki_image_url": "https://minecraft.wiki/images/Phantom_JE2.gif?ed906"
  },
  {
    "id": "pig",
    "title": "Pig",
    "url": "https://minecraft.wiki/w/Pig",
    "image_url": "/mobImages/pig.png",
    "health": 10,
    "behavior": [
      "passive"
    ],
    "spawn": [
      "grass",
      "breeding",
      "structure"
    ],
    "classification": [
      "animal"
    ],
    "height": 0.9,
    "initial_release": "pre-alpha",
    "chinese_title": "猪",
    "wiki_image_url": "https://minecraft.wiki/images/thumb/Temperate_Pig_JE4_BE2.png/640px-Temperate_Pig_JE4_BE2.png?26a31"
  },
  {
    "id": "piglin",
    "title": "Piglin",
    "url": "https://minecraft.wiki/w/Piglin",
    "image_url": "/mobImages/piglin.png",
    "health": 16,
    "behavior": [
      "neutral",
      "passive"
    ],
    "spawn": [
      "biome",
      "structure"
    ],
    "classification": [
      "none"
    ],
    "height": 1.95,
    "initial_release": "1.16",
    "chinese_title": "猪灵",
    "wiki_image_url": "https://minecraft.wiki/images/Piglin_JE1.png?a498e"
  },
  {
    "id": "piglin_brute",
    "title": "Piglin Brute",
    "url": "https://minecraft.wiki/w/Piglin_Brute",
    "image_url": "/mobImages/piglin_brute.png",
    "health": 50,
    "behavior": [
      "hostile"
    ],
    "spawn": [
      "structure"
    ],
    "classification": [
      "none"
    ],
    "height": 1.95,
    "initial_release": "1.16.2",
    "chinese_title": "猪灵蛮兵",
    "wiki_image_url": "https://minecraft.wiki/images/Piglin_Brute_JE1_BE1.png?5d4a0"
  },
  {
    "id": "pillager",
    "title": "Pillager",
    "url": "https://minecraft.wiki/w/Pillager",
    "image_url": "/mobImages/pillager.png",
    "health": 24,
    "behavior": [
      "hostile",
      "passive"
    ],
    "spawn": [
      "overworld",
      "structure",
      "raids",
      "jockey"
    ],
    "classification": [
      "illager"
    ],
    "height": 1.95,
    "initial_release": "1.14",
    "chinese_title": "掠夺者",
    "wiki_image_url": "https://minecraft.wiki/images/thumb/Pillager_JE3.png/800px-Pillager_JE3.png?22662"
  },
  {
    "id": "polar_bear",
    "title": "Polar Bear",
    "url": "https://minecraft.wiki/w/Polar_Bear",
    "image_url": "/mobImages/polar_bear.png",
    "health": 30,
    "behavior": [
      "neutral",
      "passive"
    ],
    "spawn": [
      "biome"
    ],
    "classification": [
      "animal"
    ],
    "height": 1.4,
    "initial_release": "1.10",
    "chinese_title": "北极熊",
    "wiki_image_url": "https://minecraft.wiki/images/Polar_Bear_JE2_BE2.png?29c45"
  },
  {
    "id": "pufferfish",
    "title": "Pufferfish",
    "url": "https://minecraft.wiki/w/Pufferfish",
    "image_url": "/mobImages/pufferfish.gif",
    "health": 3,
    "behavior": [
      "passive",
      "defensive"
    ],
    "spawn": [
      "biome"
    ],
    "classification": [
      "animal",
      "aquatic"
    ],
    "height": 0.7,
    "initial_release": "1.13",
    "chinese_title": "河豚",
    "wiki_image_url": "https://minecraft.wiki/images/Pufferfish_small.gif?f12fb"
  },
  {
    "id": "ravager",
    "title": "Ravager",
    "url": "https://minecraft.wiki/w/Ravager",
    "image_url": "/mobImages/ravager.png",
    "health": 100,
    "behavior": [
      "hostile"
    ],
    "spawn": [
      "raids"
    ],
    "classification": [
      "none"
    ],
    "height": 2.2,
    "initial_release": "1.14",
    "chinese_title": "劫掠兽",
    "wiki_image_url": "https://minecraft.wiki/images/thumb/Ravager_JE1.png/1200px-Ravager_JE1.png?55aae"
  },
  {
    "id": "salmon",
    "title": "Salmon",
    "url": "https://minecraft.wiki/w/Salmon",
    "image_url": "/mobImages/salmon.gif",
    "health": 3,
    "behavior": [
      "passive"
    ],
    "spawn": [
      "biome"
    ],
    "classification": [
      "animal",
      "aquatic"
    ],
    "height": 0.4,
    "initial_release": "1.13",
    "chinese_title": "鲑鱼",
    "wiki_image_url": "https://minecraft.wiki/images/Salmon.gif?cb24f"
  },
  {
    "id": "sheep",
    "title": "Sheep",
    "url": "https://minecraft.wiki/w/Sheep",
    "image_url": "/mobImages/sheep.png",
    "health": 8,
    "behavior": [
      "passive"
    ],
    "spawn": [
      "grass",
      "breeding",
      "structure"
    ],
    "classification": [
      "animal"
    ],
    "height": 1.3,
    "initial_release": "pre-alpha",
    "chinese_title": "绵羊",
    "wiki_image_url": "https://minecraft.wiki/images/thumb/White_Sheep_JE4_BE7.png/640px-White_Sheep_JE4_BE7.png?5062a"
  },
  {
    "id": "shulker",
    "title": "Shulker",
    "url": "https://minecraft.wiki/w/Shulker",
    "image_url": "/mobImages/shulker.png",
    "health": 30,
    "behavior": [
      "hostile"
    ],
    "spawn": [
      "structure",
      "duplication"
    ],
    "classification": [
      "none"
    ],
    "height": 1,
    "initial_release": "1.9",
    "chinese_title": "潜影贝",
    "wiki_image_url": "https://minecraft.wiki/images/Shulker_JE1_BE1.png?02a87"
  },
  {
    "id": "silverfish",
    "title": "Silverfish",
    "url": "https://minecraft.wiki/w/Silverfish",
    "image_url": "/mobImages/silverfish.gif",
    "health": 8,
    "behavior": [
      "hostile"
    ],
    "spawn": [
      "block",
      "spawner",
      "magic"
    ],
    "classification": [
      "arthropod"
    ],
    "height": 0.3,
    "initial_release": "Beta 1.8",
    "chinese_title": "蠹虫",
    "wiki_image_url": "https://minecraft.wiki/images/Silverfish_JE1_BE1.gif?d40a7"
  },
  {
    "id": "skeleton",
    "title": "Skeleton",
    "url": "https://minecraft.wiki/w/Skeleton",
    "image_url": "/mobImages/skeleton.png",
    "health": 20,
    "behavior": [
      "hostile"
    ],
    "spawn": [
      "light_level",
      "biome",
      "spawner",
      "lightning",
      "jockey",
      "structure"
    ],
    "classification": [
      "undead"
    ],
    "height": 1.99,
    "initial_release": "pre-alpha",
    "chinese_title": "骷髅",
    "wiki_image_url": "https://minecraft.wiki/images/Lefthandedskeleton.png?2221f"
  },
  {
    "id": "skeleton_horse",
    "title": "Skeleton Horse",
    "url": "https://minecraft.wiki/w/Skeleton_Horse",
    "image_url": "/mobImages/skeleton_horse.png",
    "health": 15,
    "behavior": [
      "passive"
    ],
    "spawn": [
      "lightning"
    ],
    "classification": [
      "undead",
      "animal"
    ],
    "height": 1.6,
    "initial_release": "1.6.1",
    "chinese_title": "骷髅马",
    "wiki_image_url": "https://minecraft.wiki/images/thumb/Skeleton_Horse.png/800px-Skeleton_Horse.png?5e42a"
  },
  {
    "id": "slime",
    "title": "Slime",
    "url": "https://minecraft.wiki/w/Slime",
    "image_url": "/mobImages/slime.png",
    "health": 16,
    "behavior": [
      "hostile"
    ],
    "spawn": [
      "biome",
      "magic",
      "spawner"
    ],
    "classification": [
      "none"
    ],
    "height": 2.04,
    "initial_release": "Alpha 1.0.11",
    "chinese_title": "史莱姆",
    "wiki_image_url": "https://minecraft.wiki/images/Slime_JE3_BE2.png?5b6a7"
  },
  {
    "id": "snow_golem",
    "title": "Snow Golem",
    "url": "https://minecraft.wiki/w/Snow_Golem",
    "image_url": "/mobImages/snow_golem.png",
    "health": 4,
    "behavior": [
      "passive"
    ],
    "spawn": [
      "summon"
    ],
    "classification": [
      "golem"
    ],
    "height": 1.9,
    "initial_release": "1.0.0",
    "chinese_title": "雪傀儡",
    "wiki_image_url": "https://minecraft.wiki/images/Snow_Golem_JE2_BE2.png?23125"
  },
  {
    "id": "sniffer",
    "title": "Sniffer",
    "url": "https://minecraft.wiki/w/Sniffer",
    "image_url": "/mobImages/sniffer.gif",
    "health": 14,
    "behavior": [
      "passive"
    ],
    "spawn": [
      "breeding",
      "hatching"
    ],
    "classification": [
      "animal"
    ],
    "height": 1.75,
    "initial_release": "1.20",
    "chinese_title": "嗅探兽",
    "wiki_image_url": "https://minecraft.wiki/images/Sniffer_sniffsniff.gif?36ccd"
  },
  {
    "id": "spider",
    "title": "Spider",
    "url": "https://minecraft.wiki/w/Spider",
    "image_url": "/mobImages/spider.png",
    "health": 16,
    "behavior": [
      "neutral",
      "hostile"
    ],
    "spawn": [
      "light_level",
      "spawner",
      "jockey"
    ],
    "classification": [
      "arthropod"
    ],
    "height": 0.9,
    "initial_release": "pre-alpha",
    "chinese_title": "蜘蛛",
    "wiki_image_url": "https://minecraft.wiki/images/thumb/Spider_JE5_BE4.png/1200px-Spider_JE5_BE4.png?b090e"
  },
  {
    "id": "squid",
    "title": "Squid",
    "url": "https://minecraft.wiki/w/Squid",
    "image_url": "/mobImages/squid.gif",
    "health": 10,
    "behavior": [
      "passive"
    ],
    "spawn": [
      "biome"
    ],
    "classification": [
      "animal",
      "aquatic"
    ],
    "height": 0.8,
    "initial_release": "Beta 1.2",
    "chinese_title": "鱿鱼",
    "wiki_image_url": "https://minecraft.wiki/images/Squid.gif?8a4c4"
  },
  {
    "id": "stray",
    "title": "Stray",
    "url": "https://minecraft.wiki/w/Stray",
    "image_url": "/mobImages/stray.png",
    "health": 20,
    "behavior": [
      "hostile"
    ],
    "spawn": [
      "light_level",
      "biome",
      "conversion",
      "spawner"
    ],
    "classification": [
      "undead"
    ],
    "height": 1.99,
    "initial_release": "1.10",
    "chinese_title": "流浪者",
    "wiki_image_url": "https://minecraft.wiki/images/thumb/Stray_JE2_BE4.png/640px-Stray_JE2_BE4.png?ef82d"
  },
  {
    "id": "strider",
    "title": "Strider",
    "url": "https://minecraft.wiki/w/Strider",
    "image_url": "/mobImages/strider.gif",
    "health": 20,
    "behavior": [
      "passive"
    ],
    "spawn": [
      "biome",
      "breeding",
      "jockey"
    ],
    "classification": [
      "animal"
    ],
    "height": 1.7,
    "initial_release": "1.16",
    "chinese_title": "炽足兽",
    "wiki_image_url": "https://minecraft.wiki/images/Strider_JE2_BE2.gif?f8244"
  },
  {
    "id": "tadpole",
    "title": "Tadpole",
    "url": "https://minecraft.wiki/w/Tadpole",
    "image_url": "/mobImages/tadpole.gif",
    "health": 6,
    "behavior": [
      "passive"
    ],
    "spawn": [
      "hatching"
    ],
    "classification": [
      "animal",
      "aquatic"
    ],
    "height": 0.3,
    "initial_release": "1.19",
    "chinese_title": "蝌蚪",
    "wiki_image_url": "https://minecraft.wiki/images/Tadpole_swimming.gif?8087f"
  },
  {
    "id": "tropical_fish",
    "title": "Tropical Fish",
    "url": "https://minecraft.wiki/w/Tropical_Fish",
    "image_url": "/mobImages/tropical_fish.png",
    "health": 3,
    "behavior": [
      "passive"
    ],
    "spawn": [
      "biome"
    ],
    "classification": [
      "animal",
      "aquatic"
    ],
    "height": 0.4,
    "initial_release": "1.13",
    "chinese_title": "热带鱼",
    "wiki_image_url": "https://minecraft.wiki/images/Clownfish.png?1b6b5"
  },
  {
    "id": "turtle",
    "title": "Turtle",
    "url": "https://minecraft.wiki/w/Turtle",
    "image_url": "/mobImages/turtle.png",
    "health": 30,
    "behavior": [
      "passive"
    ],
    "spawn": [
      "biome",
      "breeding",
      "hatching"
    ],
    "classification": [
      "animal",
      "aquatic"
    ],
    "height": 0.4,
    "initial_release": "1.13",
    "chinese_title": "海龟",
    "wiki_image_url": "https://minecraft.wiki/images/thumb/Turtle_JE3_BE1.png/800px-Turtle_JE3_BE1.png?373f9"
  },
  {
    "id": "vex",
    "title": "Vex",
    "url": "https://minecraft.wiki/w/Vex",
    "image_url": "/mobImages/vex.gif",
    "health": 14,
    "behavior": [
      "hostile"
    ],
    "spawn": [
      "summon"
    ],
    "classification": [
      "none"
    ],
    "height": 0.8,
    "initial_release": "1.11",
    "chinese_title": "恼鬼",
    "wiki_image_url": "https://minecraft.wiki/images/Vex_JE4.gif?da166"
  },
  {
    "id": "villager",
    "title": "Villager",
    "url": "https://minecraft.wiki/w/Villager",
    "image_url": "/mobImages/villager.png",
    "health": 20,
    "behavior": [
      "passive"
    ],
    "spawn": [
      "structure",
      "breeding",
      "conversion"
    ],
    "classification": [
      "none"
    ],
    "height": 1.95,
    "initial_release": "1.0.0",
    "chinese_title": "村民",
    "wiki_image_url": "https://minecraft.wiki/images/Plains_Villager_Base_JE2.png?a2fcc"
  },
  {
    "id": "vindicator",
    "title": "Vindicator",
    "url": "https://minecraft.wiki/w/Vindicator",
    "image_url": "/mobImages/vindicator.png",
    "health": 24,
    "behavior": [
      "hostile"
    ],
    "spawn": [
      "structure",
      "raids",
      "jockey"
    ],
    "classification": [
      "illager"
    ],
    "height": 1.95,
    "initial_release": "1.11",
    "chinese_title": "卫道士",
    "wiki_image_url": "https://minecraft.wiki/images/thumb/Vindicator_attacking.png/800px-Vindicator_attacking.png?9b581"
  },
  {
    "id": "wandering_trader",
    "title": "Wandering Trader",
    "url": "https://minecraft.wiki/w/Wandering_Trader",
    "image_url": "/mobImages/wandering_trader.png",
    "health": 20,
    "behavior": [
      "passive"
    ],
    "spawn": [
      "overworld"
    ],
    "classification": [
      "none"
    ],
    "height": 1.95,
    "initial_release": "1.14",
    "chinese_title": "流浪商人",
    "wiki_image_url": "https://minecraft.wiki/images/Wandering_Trader_JE1_BE1.png?62e9e"
  },
  {
    "id": "warden",
    "title": "Warden",
    "url": "https://minecraft.wiki/w/Warden",
    "image_url": "/mobImages/warden.gif",
    "health": 500,
    "behavior": [
      "hostile"
    ],
    "spawn": [
      "block",
      "summon"
    ],
    "classification": [
      "none"
    ],
    "height": 2.9,
    "initial_release": "1.19",
    "chinese_title": "监守者",
    "wiki_image_url": "https://minecraft.wiki/images/Warden.gif?d0f99"
  },
  {
    "id": "witch",
    "title": "Witch",
    "url": "https://minecraft.wiki/w/Witch",
    "image_url": "/mobImages/witch.png",
    "health": 26,
    "behavior": [
      "hostile"
    ],
    "spawn": [
      "light_level",
      "structure",
      "raids",
      "conversion",
      "lightning"
    ],
    "classification": [
      "none"
    ],
    "height": 1.95,
    "initial_release": "1.4.2",
    "chinese_title": "女巫",
    "wiki_image_url": "https://minecraft.wiki/images/Witch_JE3.png?aeb30"
  },
  {
    "id": "wither",
    "title": "Wither",
    "url": "https://minecraft.wiki/w/Wither",
    "image_url": "/mobImages/wither.png",
    "health": 300,
    "behavior": [
      "hostile"
    ],
    "spawn": [
      "summon"
    ],
    "classification": [
      "undead",
      "boss"
    ],
    "height": 3.5,
    "initial_release": "1.4.2",
    "chinese_title": "凋灵",
    "wiki_image_url": "https://minecraft.wiki/images/thumb/Wither_JE2_BE2.png/800px-Wither_JE2_BE2.png?60b11"
  },
  {
    "id": "wither_skeleton",
    "title": "Wither Skeleton",
    "url": "https://minecraft.wiki/w/Wither_Skeleton",
    "image_url": "/mobImages/wither_skeleton.png",
    "health": 20,
    "behavior": [
      "hostile"
    ],
    "spawn": [
      "structure"
    ],
    "classification": [
      "undead"
    ],
    "height": 2.4,
    "initial_release": "1.4.2",
    "chinese_title": "凋灵骷髅",
    "wiki_image_url": "https://minecraft.wiki/images/thumb/Wither_Skeleton_JE4_BE3.png/800px-Wither_Skeleton_JE4_BE3.png?9c107"
  },
  {
    "id": "wolf",
    "title": "Wolf",
    "url": "https://minecraft.wiki/w/Wolf",
    "image_url": "/mobImages/wolf.png",
    "health": 8,
    "behavior": [
      "neutral",
      "passive"
    ],
    "spawn": [
      "biome",
      "breeding"
    ],
    "classification": [
      "animal"
    ],
    "height": 0.85,
    "initial_release": "Beta 1.4",
    "chinese_title": "狼",
    "wiki_image_url": "https://minecraft.wiki/images/thumb/Wolf_JE2_BE2.png/800px-Wolf_JE2_BE2.png?ee46e"
  },
  {
    "id": "zoglin",
    "title": "Zoglin",
    "url": "https://minecraft.wiki/w/Zoglin",
    "image_url": "/mobImages/zoglin.png",
    "health": 40,
    "behavior": [
      "hostile"
    ],
    "spawn": [
      "conversion"
    ],
    "classification": [
      "undead"
    ],
    "height": 1.4,
    "initial_release": "1.16",
    "chinese_title": "僵尸疣猪兽",
    "wiki_image_url": "https://minecraft.wiki/images/thumb/Zoglin_JE1.png/800px-Zoglin_JE1.png?6fd4b"
  },
  {
    "id": "zombie",
    "title": "Zombie",
    "url": "https://minecraft.wiki/w/Zombie",
    "image_url": "/mobImages/zombie.png",
    "health": 20,
    "behavior": [
      "hostile"
    ],
    "spawn": [
      "light_level",
      "conversion",
      "spawner",
      "jockey",
      "reinforcements",
      "sieges"
    ],
    "classification": [
      "undead"
    ],
    "height": 1.95,
    "initial_release": "pre-alpha",
    "chinese_title": "僵尸",
    "wiki_image_url": "https://minecraft.wiki/images/thumb/Zombie_Targeting.png/640px-Zombie_Targeting.png?a66fd"
  },
  {
    "id": "zombie_horse",
    "title": "Zombie Horse",
    "url": "https://minecraft.wiki/w/Zombie_Horse",
    "image_url": "/mobImages/zombie_horse.png",
    "health": 15,
    "behavior": [
      "passive"
    ],
    "spawn": [
      "command"
    ],
    "classification": [
      "undead",
      "animal"
    ],
    "height": 1.6,
    "initial_release": "1.6.1",
    "chinese_title": "僵尸马",
    "wiki_image_url": "https://minecraft.wiki/images/thumb/Zombie_Horse_JE5_BE2.png/800px-Zombie_Horse_JE5_BE2.png?72536"
  },
  {
    "id": "zombie_villager",
    "title": "Zombie Villager",
    "url": "https://minecraft.wiki/w/Zombie_Villager",
    "image_url": "/mobImages/zombie_villager.png",
    "health": 20,
    "behavior": [
      "hostile"
    ],
    "spawn": [
      "light_level",
      "conversion",
      "structure",
      "jockey",
      "reinforcements"
    ],
    "classification": [
      "undead"
    ],
    "height": 1.95,
    "initial_release": "1.4.2",
    "chinese_title": "僵尸村民",
    "wiki_image_url": "https://minecraft.wiki/images/Plains_Zombie_Villager_Base_JE1_BE1.png?7882a"
  },
  {
    "id": "zombified_piglin",
    "title": "Zombified Piglin",
    "url": "https://minecraft.wiki/w/Zombified_Piglin",
    "image_url": "/mobImages/zombified_piglin.png",
    "health": 20,
    "behavior": [
      "neutral"
    ],
    "spawn": [
      "biome",
      "structure",
      "conversion",
      "lightning",
      "jockey",
      "reinforcements",
      "block"
    ],
    "classification": [
      "undead"
    ],
    "height": 1.95,
    "initial_release": "Alpha 1.2.0",
    "chinese_title": "僵尸猪灵",
    "wiki_image_url": "https://minecraft.wiki/images/Zombified_Piglin_BE6.png?1a419"
  },
  {
    "id": "copper_golem",
    "title": "Copper Golem",
    "url": "https://minecraft.wiki/w/Copper_Golem",
    "health": 12,
    "behavior": [
      "passive"
    ],
    "spawn": [
      "summon"
    ],
    "classification": [
      "golem"
    ],
    "height": 0.98,
    "initial_release": "1.21.9",
    "image_url": "/mobImages/copper_golem.gif",
    "chinese_title": "铜傀儡",
    "wiki_image_url": "https://minecraft.wiki/images/Copper_Golem_JE1_BE1.png?3c87d"
  }
] as const;

export const blockData: BlockData[] = [
  {
    "id": "button",
    "title": "Button",
    "url": "https://minecraft.wiki/w/Button",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/button.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "any_tool",
    "blast_resistance": 0.5,
    "hardness": 0.5,
    "luminous": "no",
    "full_block": "no",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "Alpha 1.0.1",
    "transparent": "yes",
    "chinese_title": "按钮",
    "wiki_image_url": "https://minecraft.wiki/images/thumb/All_Buttons.png/1200px-All_Buttons.png?ac72d"
  },
  {
    "id": "bush",
    "title": "Bush",
    "url": "https://minecraft.wiki/w/Bush",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/bush.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "shears",
    "blast_resistance": 0,
    "hardness": 0,
    "luminous": "no",
    "full_block": "no",
    "flammable": "yes",
    "fire_catch": "no",
    "initial_release": "1.21.5",
    "transparent": "yes",
    "chinese_title": "灌木丛",
    "wiki_image_url": "https://minecraft.wiki/images/Bush_JE1.png?735c8"
  },
  {
    "id": "cactus_flower",
    "title": "Cactus Flower",
    "url": "https://minecraft.wiki/w/Cactus_Flower",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/cactus_flower.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "any_tool",
    "blast_resistance": 0,
    "hardness": 0,
    "luminous": "no",
    "full_block": "no",
    "flammable": "yes",
    "fire_catch": "no",
    "initial_release": "1.21.5",
    "transparent": "yes",
    "chinese_title": "仙人掌花",
    "wiki_image_url": "https://minecraft.wiki/images/Cactus_Flower_JE1_BE1.png?61f52"
  },
  {
    "id": "creaking_heart",
    "title": "Creaking Heart",
    "url": "https://minecraft.wiki/w/Creaking_Heart",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/creaking_heart.webp",
    "renewable": "yes",
    "stackable": 64,
    "tool": "axe",
    "blast_resistance": 10,
    "hardness": 10,
    "luminous": "partial",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.21.4",
    "transparent": "no",
    "chinese_title": "嘎枝之心",
    "wiki_image_url": "https://minecraft.wiki/images/Creaking_Heart_JE2_BE2.png?f1a56"
  },
  {
    "id": "door",
    "title": "Door",
    "url": "https://minecraft.wiki/w/Door",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/door.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "axe",
    "blast_resistance": 3,
    "hardness": 3,
    "luminous": "no",
    "full_block": "no",
    "flammable": "no",
    "fire_catch": "partial",
    "initial_release": "pre-alpha",
    "transparent": "partial",
    "chinese_title": "门",
    "wiki_image_url": "https://minecraft.wiki/images/thumb/All_Doors.png/1200px-All_Doors.png?fbc01"
  },
  {
    "id": "eyeblossom",
    "title": "Eyeblossom",
    "url": "https://minecraft.wiki/w/Eyeblossom",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/eye_blossom.webp",
    "renewable": "yes",
    "stackable": 64,
    "tool": "any_tool",
    "blast_resistance": 0,
    "hardness": 0,
    "luminous": "no",
    "full_block": "no",
    "flammable": "yes",
    "fire_catch": "yes",
    "initial_release": "1.21.4",
    "transparent": "yes",
    "chinese_title": "眼眸花",
    "wiki_image_url": "https://minecraft.wiki/images/Closed_Eyeblossom_JE1_BE1.png?ed9aa"
  },
  {
    "id": "fence",
    "title": "Fence",
    "url": "https://minecraft.wiki/w/Fence",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/fence.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "axe, pickaxe",
    "blast_resistance": 3,
    "hardness": 2,
    "luminous": "no",
    "full_block": "no",
    "flammable": "partial",
    "fire_catch": "partial",
    "initial_release": "Alpha 1.0.17",
    "transparent": "yes",
    "chinese_title": "栅栏",
    "wiki_image_url": "https://minecraft.wiki/images/thumb/All_Fences.png/1200px-All_Fences.png?58cd3"
  },
  {
    "id": "fence_gate",
    "title": "Fence Gate",
    "url": "https://minecraft.wiki/w/Fence_Gate",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/fence_gate.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "axe",
    "blast_resistance": 3,
    "hardness": 2,
    "luminous": "no",
    "full_block": "no",
    "flammable": "partial",
    "fire_catch": "partial",
    "initial_release": "Beta 1.8",
    "transparent": "yes",
    "chinese_title": "栅栏门",
    "wiki_image_url": "https://minecraft.wiki/images/Oak_Fence_Gate_JE4_BE3.png?04baf"
  },
  {
    "id": "firefly_bush",
    "title": "Firefly Bush",
    "url": "https://minecraft.wiki/w/Firefly_Bush",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/firefly_bush.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "any_tool",
    "blast_resistance": 0,
    "hardness": 0,
    "luminous": "yes",
    "full_block": "no",
    "flammable": "yes",
    "fire_catch": "no",
    "initial_release": "1.21.5",
    "transparent": "yes",
    "chinese_title": "萤火虫灌木丛",
    "wiki_image_url": "https://minecraft.wiki/images/Firefly_Bush_JE1.gif?dfff2"
  },
  {
    "id": "leaves",
    "title": "Leaves",
    "url": "https://minecraft.wiki/w/Leaves",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/leaves.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "hoe, shears, sword",
    "blast_resistance": 0.2,
    "hardness": 0.2,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "yes",
    "fire_catch": "yes",
    "initial_release": "pre-alpha",
    "transparent": "partial",
    "chinese_title": "树叶",
    "wiki_image_url": "https://minecraft.wiki/images/Oak_Leaves.png?80d73"
  },
  {
    "id": "leaf_litter",
    "title": "Leaf Litter",
    "url": "https://minecraft.wiki/w/Leaf_Litter",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/leaf_litter.webp",
    "renewable": "yes",
    "stackable": 64,
    "tool": "any_tool",
    "blast_resistance": 0,
    "hardness": 0,
    "luminous": "no",
    "full_block": "no",
    "flammable": "yes",
    "fire_catch": "no",
    "initial_release": "1.21.5",
    "transparent": "yes",
    "chinese_title": "枯叶",
    "wiki_image_url": "https://minecraft.wiki/images/Leaf_Litter_1_%28S%29_JE2_BE2.png?dbf70"
  },
  {
    "id": "log",
    "title": "Log",
    "url": "https://minecraft.wiki/w/Log",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/log.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "axe",
    "blast_resistance": 2,
    "hardness": 2,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "partial",
    "fire_catch": "partial",
    "initial_release": "pre-alpha",
    "transparent": "no",
    "chinese_title": "原木",
    "wiki_image_url": "https://minecraft.wiki/images/Oak_Log_%28UD%29_JE8_BE3.png?8a080"
  },
  {
    "id": "resin_clump",
    "title": "Resin Clump",
    "url": "https://minecraft.wiki/w/Resin_Clump",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/resin_clump.webp",
    "renewable": "yes",
    "stackable": 64,
    "tool": "any_tool",
    "blast_resistance": 0,
    "hardness": 0,
    "luminous": "no",
    "full_block": "no",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.21.4",
    "transparent": "yes",
    "chinese_title": "树脂团",
    "wiki_image_url": "https://minecraft.wiki/images/Resin_Clump_%28item%29_JE1_BE1.png?123f8"
  },
  {
    "id": "resin_block",
    "title": "Block of Resin",
    "url": "https://minecraft.wiki/w/Block_of_Resin",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/resin_block.webp",
    "renewable": "yes",
    "stackable": 64,
    "tool": "any_tool",
    "blast_resistance": 0,
    "hardness": 0,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.21.4",
    "transparent": "no",
    "chinese_title": "树脂块",
    "wiki_image_url": "https://minecraft.wiki/images/Block_of_Resin_JE1_BE1.png?e9586"
  },
  {
    "id": "resin_bricks",
    "title": "Resin Bricks",
    "url": "https://minecraft.wiki/w/Resin_Bricks",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/resin_bricks.webp",
    "renewable": "yes",
    "stackable": 64,
    "tool": "pickaxe",
    "blast_resistance": 6,
    "hardness": 1.5,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.21.4",
    "transparent": "no",
    "chinese_title": "树脂砖块",
    "wiki_image_url": "https://minecraft.wiki/images/Resin_Bricks_JE1_BE2.png?31227"
  },
  {
    "id": "pale_hanging_moss",
    "title": "Pale Hanging Moss",
    "url": "https://minecraft.wiki/w/Pale_Hanging_Moss",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/pale_hanging_moss.webp",
    "renewable": "yes",
    "stackable": 64,
    "tool": "any_tool",
    "blast_resistance": 0,
    "hardness": 0,
    "luminous": "no",
    "full_block": "no",
    "flammable": "yes",
    "fire_catch": "yes",
    "initial_release": "1.21.4",
    "transparent": "yes",
    "chinese_title": "苍白垂须",
    "wiki_image_url": "https://minecraft.wiki/images/Pale_Hanging_Moss_JE1_BE1.png?09f9b"
  },
  {
    "id": "pale_moss_block",
    "title": "Pale Hanging Moss",
    "url": "https://minecraft.wiki/w/Pale_Moss_Block",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/pale_moss_block.webp",
    "renewable": "yes",
    "stackable": 64,
    "tool": "hoe",
    "blast_resistance": 0.1,
    "hardness": 0.1,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "yes",
    "fire_catch": "yes",
    "initial_release": "1.21.4",
    "transparent": "no",
    "chinese_title": "苍白苔藓块",
    "wiki_image_url": "https://minecraft.wiki/images/Pale_Moss_Block_JE1_BE1.png?4ed9c"
  },
  {
    "id": "pale_moss_carpet",
    "title": "Pale Hanging Moss",
    "url": "https://minecraft.wiki/w/Pale_Moss_Carpet",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/pale_moss_carpet.webp",
    "renewable": "yes",
    "stackable": 64,
    "tool": "hoe",
    "blast_resistance": 0.1,
    "hardness": 0.1,
    "luminous": "no",
    "full_block": "no",
    "flammable": "yes",
    "fire_catch": "yes",
    "initial_release": "1.21.4",
    "transparent": "yes",
    "chinese_title": "苍白覆地苔藓",
    "wiki_image_url": "https://minecraft.wiki/images/Pale_Moss_Carpet_JE1_BE1.png?25d36"
  },
  {
    "id": "planks",
    "title": "Planks",
    "url": "https://minecraft.wiki/w/Planks",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/planks.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "axe",
    "blast_resistance": 3,
    "hardness": 2,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "partial",
    "fire_catch": "partial",
    "initial_release": "pre-alpha",
    "transparent": "no",
    "chinese_title": "木板",
    "wiki_image_url": "https://minecraft.wiki/images/Oak_Planks.png?d9efa"
  },
  {
    "id": "pressure_plate",
    "title": "Pressure Plate",
    "url": "https://minecraft.wiki/w/Pressure_Plate",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/pressure_plate.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "axe, pickaxe",
    "blast_resistance": 0.5,
    "hardness": 0.5,
    "luminous": "no",
    "full_block": "no",
    "flammable": "no",
    "fire_catch": "partial",
    "initial_release": "Alpha 1.0.1",
    "transparent": "yes",
    "chinese_title": "压力板",
    "wiki_image_url": "https://minecraft.wiki/images/thumb/All_Pressure_Plates.png/1200px-All_Pressure_Plates.png?64638"
  },
  {
    "id": "sapling",
    "title": "Sapling",
    "url": "https://minecraft.wiki/w/Sapling",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/sapling.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "any_tool",
    "blast_resistance": 0,
    "hardness": 0,
    "luminous": "no",
    "full_block": "no",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "pre-alpha",
    "transparent": "yes",
    "chinese_title": "树苗",
    "wiki_image_url": "https://minecraft.wiki/images/Oak_Sapling_JE14.png?c2c3b"
  },
  {
    "id": "sign",
    "title": "Sign",
    "url": "https://minecraft.wiki/w/Hanging_Sign",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/sign.png",
    "renewable": "yes",
    "stackable": 16,
    "tool": "axe",
    "blast_resistance": 1,
    "hardness": 1,
    "luminous": "no",
    "full_block": "no",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "pre-alpha",
    "transparent": "yes",
    "chinese_title": "悬挂式告示牌",
    "wiki_image_url": "https://minecraft.wiki/images/Oak_Hanging_Sign_JE1_BE1.png?cafdb"
  },
  {
    "id": "dry_grass",
    "title": "Dry Grass",
    "url": "https://minecraft.wiki/w/Short_Dry_Grass",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/dry_grass.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "shears",
    "blast_resistance": 0,
    "hardness": 0,
    "luminous": "no",
    "full_block": "no",
    "flammable": "yes",
    "fire_catch": "no",
    "initial_release": "1.21.5",
    "transparent": "yes",
    "chinese_title": "枯草丛",
    "wiki_image_url": "https://minecraft.wiki/images/Short_Dry_Grass_JE1_BE1.png?0a46a"
  },
  {
    "id": "slab",
    "title": "Slab",
    "url": "https://minecraft.wiki/w/Slab",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/slab.png",
    "renewable": "partial",
    "stackable": 64,
    "tool": "axe, pickaxe",
    "blast_resistance": 6,
    "hardness": 2,
    "luminous": "no",
    "full_block": "partial",
    "flammable": "partial",
    "fire_catch": "partial",
    "initial_release": "pre-alpha",
    "transparent": "partial",
    "chinese_title": "台阶",
    "wiki_image_url": "https://minecraft.wiki/images/thumb/All_Slabs.png/1200px-All_Slabs.png?15215"
  },
  {
    "id": "stairs",
    "title": "Stairs",
    "url": "https://minecraft.wiki/w/Stairs",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/stairs.png",
    "renewable": "partial",
    "stackable": 64,
    "tool": "axe, pickaxe",
    "blast_resistance": 6,
    "hardness": 2,
    "luminous": "no",
    "full_block": "no",
    "flammable": "partial",
    "fire_catch": "partial",
    "initial_release": "pre-alpha",
    "transparent": "partial",
    "chinese_title": "楼梯",
    "wiki_image_url": "https://minecraft.wiki/images/thumb/All_Stairs.png/1200px-All_Stairs.png?db816"
  },
  {
    "id": "test_block",
    "title": "Test Block",
    "url": "https://minecraft.wiki/w/Test_Block",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/test_block.png",
    "renewable": "no",
    "stackable": 64,
    "tool": "none",
    "blast_resistance": 3600000,
    "hardness": -1,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.21.5",
    "transparent": "no",
    "chinese_title": "测试方块",
    "wiki_image_url": "https://minecraft.wiki/images/Test_Block_start_JE2.png?e7622"
  },
  {
    "id": "test_instance_block",
    "title": "Test Instance Block",
    "url": "https://minecraft.wiki/w/Test_Block",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/test_instance_block.png",
    "renewable": "no",
    "stackable": 64,
    "tool": "none",
    "blast_resistance": 3600000,
    "hardness": -1,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.21.5",
    "transparent": "no",
    "chinese_title": "测试方块",
    "wiki_image_url": "https://minecraft.wiki/images/Test_Block_start_JE2.png?e7622"
  },
  {
    "id": "trapdoor",
    "title": "Trapdoor",
    "url": "https://minecraft.wiki/w/Trapdoor",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/trapdoor.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "axe",
    "blast_resistance": 3,
    "hardness": 3,
    "luminous": "no",
    "full_block": "no",
    "flammable": "no",
    "fire_catch": "partial",
    "initial_release": "Beta 1.6",
    "transparent": "yes",
    "chinese_title": "活板门",
    "wiki_image_url": "https://minecraft.wiki/images/thumb/All_Trapdoors.png/1200px-All_Trapdoors.png?3cd99"
  },
  {
    "id": "wildflowers",
    "title": "Dry Grass",
    "url": "https://minecraft.wiki/w/Wildflowers",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/wildflowers.webp",
    "renewable": "yes",
    "stackable": 64,
    "tool": "any_tool",
    "blast_resistance": 0,
    "hardness": 0,
    "luminous": "no",
    "full_block": "no",
    "flammable": "yes",
    "fire_catch": "no",
    "initial_release": "1.21.5",
    "transparent": "yes",
    "chinese_title": "野花簇",
    "wiki_image_url": "https://minecraft.wiki/images/Wildflowers_1_%28S%29_JE1.png?a68f5"
  },
  {
    "id": "wood",
    "title": "Wood",
    "url": "https://minecraft.wiki/w/Wood",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/wood.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "axe",
    "blast_resistance": 2,
    "hardness": 2,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "partial",
    "fire_catch": "partial",
    "initial_release": "1.3.1",
    "transparent": "no",
    "chinese_title": "木头",
    "wiki_image_url": "https://minecraft.wiki/images/Oak_Wood_%28UD%29_JE7_BE2.png?74743"
  },
  {
    "id": "activator_rail",
    "title": "Activator Rail",
    "url": "https://minecraft.wiki/w/Activator_Rail",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/activator_rail.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "pickaxe",
    "blast_resistance": 0.7,
    "hardness": 0.7,
    "luminous": "no",
    "full_block": "no",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.5",
    "transparent": "yes",
    "chinese_title": "激活铁轨",
    "wiki_image_url": "https://minecraft.wiki/images/Activator_Rail_%28NS%29_JE2_BE2.png?23196"
  },
  {
    "id": "flower",
    "title": "Flower",
    "url": "https://minecraft.wiki/w/Allium",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/flower.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "any_tool",
    "blast_resistance": 0,
    "hardness": 0,
    "luminous": "no",
    "full_block": "no",
    "flammable": "yes",
    "fire_catch": "no",
    "initial_release": "pre-alpha",
    "transparent": "yes",
    "chinese_title": "绒球葱",
    "wiki_image_url": "https://minecraft.wiki/images/Allium_JE7_BE2.png?c421f"
  },
  {
    "id": "amethyst_block",
    "title": "Block of Amethyst",
    "url": "https://minecraft.wiki/w/Block_of_Amethyst",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/amethyst_block.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "pickaxe",
    "blast_resistance": 1.5,
    "hardness": 1.5,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.17",
    "transparent": "partial",
    "chinese_title": "紫水晶块",
    "wiki_image_url": "https://minecraft.wiki/images/Block_of_Amethyst_JE3_BE1.png?14501"
  },
  {
    "id": "amethyst_cluster",
    "title": "Amethyst Cluster",
    "url": "https://minecraft.wiki/w/Amethyst_Cluster",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/amethyst_cluster.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "pickaxe",
    "blast_resistance": 1.5,
    "hardness": 1.5,
    "luminous": "yes",
    "full_block": "no",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.17",
    "transparent": "yes",
    "chinese_title": "紫水晶簇",
    "wiki_image_url": "https://minecraft.wiki/images/Small_Amethyst_Bud_%28U%29_JE1.png?f1efb"
  },
  {
    "id": "ancient_debris",
    "title": "Ancient Debris",
    "url": "https://minecraft.wiki/w/Ancient_Debris",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/ancient_debris.png",
    "renewable": "no",
    "stackable": 64,
    "tool": "pickaxe",
    "blast_resistance": 1200,
    "hardness": 30,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.16",
    "transparent": "no",
    "chinese_title": "远古残骸",
    "wiki_image_url": "https://minecraft.wiki/images/Ancient_Debris_JE1_BE1.png?571c1"
  },
  {
    "id": "andesite",
    "title": "Andesite",
    "url": "https://minecraft.wiki/w/Andesite",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/andesite.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "pickaxe",
    "blast_resistance": 6,
    "hardness": 1.5,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.8",
    "transparent": "no",
    "chinese_title": "安山岩",
    "wiki_image_url": "https://minecraft.wiki/images/Andesite.png?5db9b"
  },
  {
    "id": "wall",
    "title": "Wall",
    "url": "https://minecraft.wiki/w/Andesite_Wall",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/wall.png",
    "renewable": "partial",
    "stackable": 64,
    "tool": "pickaxe",
    "blast_resistance": 6,
    "hardness": 1.5,
    "luminous": "no",
    "full_block": "no",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.4.2",
    "transparent": "yes",
    "chinese_title": "安山岩墙",
    "wiki_image_url": "https://minecraft.wiki/images/Andesite_Wall_JE2_BE1.png?5f62d"
  },
  {
    "id": "anvil",
    "title": "Anvil",
    "url": "https://minecraft.wiki/w/Anvil",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/anvil.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "pickaxe",
    "blast_resistance": 1200,
    "hardness": 5,
    "luminous": "no",
    "full_block": "no",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.4.2",
    "transparent": "yes",
    "chinese_title": "铁砧",
    "wiki_image_url": "https://minecraft.wiki/images/Anvil_%28N%29_JE3.png?d438e"
  },
  {
    "id": "azalea",
    "title": "Azalea",
    "url": "https://minecraft.wiki/w/Azalea",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/azalea.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "any_tool",
    "blast_resistance": 0,
    "hardness": 0,
    "luminous": "no",
    "full_block": "no",
    "flammable": "yes",
    "fire_catch": "no",
    "initial_release": "1.17",
    "transparent": "yes",
    "chinese_title": "杜鹃花丛",
    "wiki_image_url": "https://minecraft.wiki/images/Azalea_JE2_BE2.png?8e29b"
  },
  {
    "id": "bamboo",
    "title": "Bamboo",
    "url": "https://minecraft.wiki/w/Bamboo",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/bamboo.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "axe, sword",
    "blast_resistance": 1,
    "hardness": 1,
    "luminous": "no",
    "full_block": "no",
    "flammable": "partial",
    "fire_catch": "yes",
    "initial_release": "1.14",
    "transparent": "yes",
    "chinese_title": "竹子",
    "wiki_image_url": "https://minecraft.wiki/images/Leafless_Bamboo_JE1_BE2.png?c0e8e"
  },
  {
    "id": "bamboo_block",
    "title": "Block of Bamboo",
    "url": "https://minecraft.wiki/w/Block_of_Bamboo",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/bamboo_block.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "axe",
    "blast_resistance": 2,
    "hardness": 2,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "yes",
    "fire_catch": "yes",
    "initial_release": "1.20",
    "transparent": "no",
    "chinese_title": "竹块",
    "wiki_image_url": "https://minecraft.wiki/images/Block_of_Bamboo_JE3_BE2.png?464e6"
  },
  {
    "id": "bamboo_mosaic",
    "title": "Bamboo Mosaic",
    "url": "https://minecraft.wiki/w/Bamboo_Mosaic",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/bamboo_mosaic.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "axe",
    "blast_resistance": 3,
    "hardness": 2,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "yes",
    "fire_catch": "yes",
    "initial_release": "1.20",
    "transparent": "no",
    "chinese_title": "竹马赛克",
    "wiki_image_url": "https://minecraft.wiki/images/Bamboo_Mosaic_JE1_BE1.png?2d702"
  },
  {
    "id": "barrel",
    "title": "Barrel",
    "url": "https://minecraft.wiki/w/Barrel",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/barrel.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "axe",
    "blast_resistance": 2.5,
    "hardness": 2.5,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "yes",
    "initial_release": "1.14",
    "transparent": "no",
    "chinese_title": "木桶",
    "wiki_image_url": "https://minecraft.wiki/images/Barrel_%28U%29_JE1_BE1.png?4cd93"
  },
  {
    "id": "barrier",
    "title": "Barrier",
    "url": "https://minecraft.wiki/w/Barrier",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/barrier.png",
    "renewable": "no",
    "stackable": 64,
    "tool": "none",
    "blast_resistance": 3600001,
    "hardness": -1,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.8",
    "transparent": "partial",
    "chinese_title": "屏障",
    "wiki_image_url": "https://minecraft.wiki/images/Barrier_%28held%29_JE2_BE2.png?c4806"
  },
  {
    "id": "basalt",
    "title": "Basalt",
    "url": "https://minecraft.wiki/w/Basalt",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/basalt.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "pickaxe",
    "blast_resistance": 4.2,
    "hardness": 1.25,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.16",
    "transparent": "no",
    "chinese_title": "玄武岩",
    "wiki_image_url": "https://minecraft.wiki/images/Basalt_%28UD%29_JE1_BE1.png?3adcd"
  },
  {
    "id": "beacon",
    "title": "Beacon",
    "url": "https://minecraft.wiki/w/Beacon",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/beacon.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "any_tool",
    "blast_resistance": 3,
    "hardness": 3,
    "luminous": "yes",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.4.2",
    "transparent": "yes",
    "chinese_title": "信标",
    "wiki_image_url": "https://minecraft.wiki/images/Beacon_JE6_BE2.png?684bf"
  },
  {
    "id": "bedrock",
    "title": "Bedrock",
    "url": "https://minecraft.wiki/w/Bedrock",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/bedrock.png",
    "renewable": "no",
    "stackable": 64,
    "tool": "none",
    "blast_resistance": 3600000,
    "hardness": -1,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "pre-alpha",
    "transparent": "no",
    "chinese_title": "基岩",
    "wiki_image_url": "https://minecraft.wiki/images/Bedrock_JE2_BE2.png?feb6c"
  },
  {
    "id": "bee_nest",
    "title": "Bee Nest",
    "url": "https://minecraft.wiki/w/Bee_Nest",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/bee_nest.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "axe",
    "blast_resistance": 0.3,
    "hardness": 0.3,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "yes",
    "fire_catch": "yes",
    "initial_release": "1.15",
    "transparent": "no",
    "chinese_title": "蜂巢",
    "wiki_image_url": "https://minecraft.wiki/images/Bee_Nest_%28S%29_JE1.png?e0b6a"
  },
  {
    "id": "beehive",
    "title": "Bee Hive",
    "url": "https://minecraft.wiki/w/Beehive",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/beehive.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "axe",
    "blast_resistance": 0.6,
    "hardness": 0.6,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "yes",
    "fire_catch": "yes",
    "initial_release": "1.15",
    "transparent": "no",
    "chinese_title": "蜂箱",
    "wiki_image_url": "https://minecraft.wiki/images/Beehive_%28S%29_JE1.png?a2997"
  },
  {
    "id": "beetroots",
    "title": "Beetroot Seeds",
    "url": "https://minecraft.wiki/w/Beetroots",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/beetroots.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "any_tool",
    "blast_resistance": 0,
    "hardness": 0,
    "luminous": "no",
    "full_block": "no",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.9",
    "transparent": "yes",
    "chinese_title": "甜菜根",
    "wiki_image_url": "https://minecraft.wiki/images/Beetroot_JE2_BE2.png?649dc"
  },
  {
    "id": "bell",
    "title": "Bell",
    "url": "https://minecraft.wiki/w/Bell",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/bell.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "pickaxe",
    "blast_resistance": 5,
    "hardness": 5,
    "luminous": "no",
    "full_block": "no",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.14",
    "transparent": "yes",
    "chinese_title": "钟",
    "wiki_image_url": "https://minecraft.wiki/images/Bell_%28N%29.png?6de47"
  },
  {
    "id": "big_dripleaf",
    "title": "Big Dripleaf",
    "url": "https://minecraft.wiki/w/Big_Dripleaf",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/big_dripleaf.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "axe",
    "blast_resistance": 0.1,
    "hardness": 0.1,
    "luminous": "no",
    "full_block": "no",
    "flammable": "yes",
    "fire_catch": "no",
    "initial_release": "1.17",
    "transparent": "yes",
    "chinese_title": "大型垂滴叶",
    "wiki_image_url": "https://minecraft.wiki/images/Big_Dripleaf_JE2_BE1.png?d212b"
  },
  {
    "id": "banner",
    "title": "Banner",
    "url": "https://minecraft.wiki/w/Banner",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/banner.gif",
    "renewable": "yes",
    "stackable": 16,
    "tool": "axe",
    "blast_resistance": 1,
    "hardness": 1,
    "luminous": "no",
    "full_block": "no",
    "flammable": "no",
    "fire_catch": "yes",
    "initial_release": "1.8",
    "transparent": "yes",
    "chinese_title": "旗帜",
    "wiki_image_url": "https://minecraft.wiki/images/White_Banner_JE2_BE2.gif?2287d"
  },
  {
    "id": "bed",
    "title": "Bed",
    "url": "https://minecraft.wiki/w/Bed",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/bed.png",
    "renewable": "yes",
    "stackable": 1,
    "tool": "any_tool",
    "blast_resistance": 0.2,
    "hardness": 0.2,
    "luminous": "no",
    "full_block": "no",
    "flammable": "no",
    "fire_catch": "yes",
    "initial_release": "Beta 1.3",
    "transparent": "yes",
    "chinese_title": "床",
    "wiki_image_url": "https://minecraft.wiki/images/White_Bed_%28N%29.png?4df42"
  },
  {
    "id": "candle",
    "title": "Candle",
    "url": "https://minecraft.wiki/w/Candle",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/candle.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "any_tool",
    "blast_resistance": 0.1,
    "hardness": 0.1,
    "luminous": "partial",
    "full_block": "no",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.17",
    "transparent": "yes",
    "chinese_title": "蜡烛",
    "wiki_image_url": "https://minecraft.wiki/images/Candle_JE1_BE1.png?6dcf9"
  },
  {
    "id": "carpet",
    "title": "Carpet",
    "url": "https://minecraft.wiki/w/Carpet",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/carpet.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "any_tool",
    "blast_resistance": 0.1,
    "hardness": 0.1,
    "luminous": "no",
    "full_block": "no",
    "flammable": "yes",
    "fire_catch": "yes",
    "initial_release": "1.6.1",
    "transparent": "yes",
    "chinese_title": "地毯",
    "wiki_image_url": "https://minecraft.wiki/images/White_Carpet_JE2_BE2.png?ec488"
  },
  {
    "id": "concrete",
    "title": "Concrete",
    "url": "https://minecraft.wiki/w/Concrete",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/concrete.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "pickaxe",
    "blast_resistance": 1.8,
    "hardness": 1.8,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.12",
    "transparent": "no",
    "chinese_title": "混凝土",
    "wiki_image_url": "https://minecraft.wiki/images/White_Concrete.png?ba07f"
  },
  {
    "id": "concrete_powder",
    "title": "Concrete Powder",
    "url": "https://minecraft.wiki/w/Concrete_Powder",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/concrete_powder.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "shovel",
    "blast_resistance": 0.5,
    "hardness": 0.5,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.12",
    "transparent": "no",
    "chinese_title": "混凝土粉末",
    "wiki_image_url": "https://minecraft.wiki/images/White_Concrete_Powder.png?3cb83"
  },
  {
    "id": "crafter",
    "title": "Crafter",
    "url": "https://minecraft.wiki/w/Crafter",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/crafter.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "pickaxe",
    "blast_resistance": 3.5,
    "hardness": 1.5,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.21",
    "transparent": "no",
    "chinese_title": "合成器",
    "wiki_image_url": "https://minecraft.wiki/images/Crafter_JE4_BE3.png?3996e"
  },
  {
    "id": "glazed_terracotta",
    "title": "Glazed Terracotta",
    "url": "https://minecraft.wiki/w/Glazed_Terracotta",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/glazed_terracotta.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "pickaxe",
    "blast_resistance": 1.4,
    "hardness": 1.4,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.12",
    "transparent": "no",
    "chinese_title": "带釉陶瓦",
    "wiki_image_url": "https://minecraft.wiki/images/White_Glazed_Terracotta_%28S%29_JE2_BE2.png?5aaa5"
  },
  {
    "id": "shulker_box",
    "title": "Shulker Box",
    "url": "https://minecraft.wiki/w/Shulker_Box",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/shulker_box.png",
    "renewable": "yes",
    "stackable": 1,
    "tool": "pickaxe",
    "blast_resistance": 2,
    "hardness": 2,
    "luminous": "no",
    "full_block": "partial",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.11",
    "transparent": "no",
    "chinese_title": "潜影盒",
    "wiki_image_url": "https://minecraft.wiki/images/Shulker_Box_JE1_BE1.png?3cfa4"
  },
  {
    "id": "glass",
    "title": "Glass",
    "url": "https://minecraft.wiki/w/Stained_Glass",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/glass.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "any_tool",
    "blast_resistance": 0.3,
    "hardness": 0.3,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "pre-alpha",
    "transparent": "yes",
    "chinese_title": "染色玻璃",
    "wiki_image_url": "https://minecraft.wiki/images/White_Stained_Glass_JE3_BE3.png?097af"
  },
  {
    "id": "glass_pane",
    "title": "Glass Pane",
    "url": "https://minecraft.wiki/w/Stained_Glass_Pane",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/glass_pane.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "any_tool",
    "blast_resistance": 0.3,
    "hardness": 0.3,
    "luminous": "no",
    "full_block": "no",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "Beta 1.8",
    "transparent": "yes",
    "chinese_title": "染色玻璃板",
    "wiki_image_url": "https://minecraft.wiki/images/White_Stained_Glass_Pane_%28EW%29_JE9.png?148e1"
  },
  {
    "id": "terracotta",
    "title": "Terracotta",
    "url": "https://minecraft.wiki/w/Terracotta",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/terracotta.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "pickaxe",
    "blast_resistance": 4.2,
    "hardness": 1.25,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.6.1",
    "transparent": "no",
    "chinese_title": "陶瓦",
    "wiki_image_url": "https://minecraft.wiki/images/Terracotta_JE2_BE2.png?b946d"
  },
  {
    "id": "wool",
    "title": "Wool",
    "url": "https://minecraft.wiki/w/Wool",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/wool.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "shears",
    "blast_resistance": 0.8,
    "hardness": 0.8,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "yes",
    "fire_catch": "yes",
    "initial_release": "pre-alpha",
    "transparent": "no",
    "chinese_title": "羊毛",
    "wiki_image_url": "https://minecraft.wiki/images/White_Wool_JE2_BE2.png?2bcdc"
  },
  {
    "id": "blackstone",
    "title": "Blackstone",
    "url": "https://minecraft.wiki/w/Blackstone",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/blackstone.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "pickaxe",
    "blast_resistance": 6,
    "hardness": 1.5,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.16",
    "transparent": "no",
    "chinese_title": "黑石",
    "wiki_image_url": "https://minecraft.wiki/images/Blackstone_JE3_BE2.png?abdc1"
  },
  {
    "id": "blast_furnace",
    "title": "Blast Furnace",
    "url": "https://minecraft.wiki/w/Blast_Furnace",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/blast_furnace.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "pickaxe",
    "blast_resistance": 3.5,
    "hardness": 3.5,
    "luminous": "partial",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.14",
    "transparent": "partial",
    "chinese_title": "高炉",
    "wiki_image_url": "https://minecraft.wiki/images/Blast_Furnace_%28S%29_JE1.png?f1920"
  },
  {
    "id": "blue_ice",
    "title": "Blue Ice",
    "url": "https://minecraft.wiki/w/Blue_Ice",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/blue_ice.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "pickaxe",
    "blast_resistance": 2.8,
    "hardness": 2.8,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.13",
    "transparent": "no",
    "chinese_title": "蓝冰",
    "wiki_image_url": "https://minecraft.wiki/images/Blue_Ice_JE3_BE2.png?b7d3d"
  },
  {
    "id": "bone_block",
    "title": "Bone Block",
    "url": "https://minecraft.wiki/w/Bone_Block",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/bone_block.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "pickaxe",
    "blast_resistance": 2,
    "hardness": 2,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.10",
    "transparent": "no",
    "chinese_title": "骨块",
    "wiki_image_url": "https://minecraft.wiki/images/Bone_Block_%28UD%29_JE2_BE2.png?21f6b"
  },
  {
    "id": "bookshelf",
    "title": "Bookshelf",
    "url": "https://minecraft.wiki/w/Bookshelf",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/bookshelf.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "axe",
    "blast_resistance": 1.5,
    "hardness": 1.5,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "yes",
    "fire_catch": "yes",
    "initial_release": "pre-alpha",
    "transparent": "no",
    "chinese_title": "书架",
    "wiki_image_url": "https://minecraft.wiki/images/Bookshelf_JE4_BE2.png?9b143"
  },
  {
    "id": "coral",
    "title": "Coral",
    "url": "https://minecraft.wiki/w/Coral",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/coral.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "any_tool",
    "blast_resistance": 0,
    "hardness": 0,
    "luminous": "no",
    "full_block": "no",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.13",
    "transparent": "yes",
    "chinese_title": "珊瑚",
    "wiki_image_url": "https://minecraft.wiki/images/Tube_Coral_JE1_BE1.png?e4230"
  },
  {
    "id": "coral_block",
    "title": "Coral Block",
    "url": "https://minecraft.wiki/w/Coral_Block",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/coral_block.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "pickaxe",
    "blast_resistance": 6,
    "hardness": 1.5,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.13",
    "transparent": "no",
    "chinese_title": "珊瑚块",
    "wiki_image_url": "https://minecraft.wiki/images/Tube_Coral_Block_JE2_BE1.png?cc8d4"
  },
  {
    "id": "coral_fan",
    "title": "Coral Fan",
    "url": "https://minecraft.wiki/w/Coral_Fan",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/coral_fan.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "any_tool",
    "blast_resistance": 0,
    "hardness": 0,
    "luminous": "no",
    "full_block": "no",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.13",
    "transparent": "yes",
    "chinese_title": "珊瑚扇",
    "wiki_image_url": "https://minecraft.wiki/images/Tube_Coral_Fan_JE1_BE2.png?ca260"
  },
  {
    "id": "brewing_stand",
    "title": "Brewing Stand",
    "url": "https://minecraft.wiki/w/Brewing_Stand",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/brewing_stand.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "pickaxe",
    "blast_resistance": 0.5,
    "hardness": 0.5,
    "luminous": "yes",
    "full_block": "no",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.0.0",
    "transparent": "yes",
    "chinese_title": "酿造台",
    "wiki_image_url": "https://minecraft.wiki/images/Brewing_Stand_%28empty%29_JE10.png?58d74"
  },
  {
    "id": "bricks",
    "title": "Bricks",
    "url": "https://minecraft.wiki/w/Bricks",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/bricks.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "pickaxe",
    "blast_resistance": 6,
    "hardness": 2,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "pre-alpha",
    "transparent": "no",
    "chinese_title": "红砖块",
    "wiki_image_url": "https://minecraft.wiki/images/Bricks_JE5_BE3.png?54bd8"
  },
  {
    "id": "mushroom",
    "title": "Mushroom",
    "url": "https://minecraft.wiki/w/Mushroom",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/mushroom.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "any_tool",
    "blast_resistance": 0,
    "hardness": 0,
    "luminous": "partial",
    "full_block": "no",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "pre-alpha",
    "transparent": "yes",
    "chinese_title": "蘑菇",
    "wiki_image_url": "https://minecraft.wiki/images/Red_Mushroom_JE9.png?c234a"
  },
  {
    "id": "mushroom_block",
    "title": "Mushroom Block",
    "url": "https://minecraft.wiki/w/Mushroom_Block",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/mushroom_block.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "axe",
    "blast_resistance": 0.2,
    "hardness": 0.2,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "yes",
    "initial_release": "Beta 1.8",
    "transparent": "no",
    "chinese_title": "蘑菇方块",
    "wiki_image_url": "https://minecraft.wiki/images/Red_Mushroom_Block_%28ESU%29_JE2_BE2.png?8d872"
  },
  {
    "id": "cactus",
    "title": "Cactus",
    "url": "https://minecraft.wiki/w/Cactus",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/cactus.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "any_tool",
    "blast_resistance": 0.4,
    "hardness": 0.4,
    "luminous": "no",
    "full_block": "no",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "Alpha 1.0.6",
    "transparent": "yes",
    "chinese_title": "仙人掌",
    "wiki_image_url": "https://minecraft.wiki/images/Cactus_JE4.png?12482"
  },
  {
    "id": "cake",
    "title": "Cake",
    "url": "https://minecraft.wiki/w/Cake",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/cake.png",
    "renewable": "yes",
    "stackable": 1,
    "tool": "any_tool",
    "blast_resistance": 0.5,
    "hardness": 0.5,
    "luminous": "partial",
    "full_block": "no",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "Beta 1.2",
    "transparent": "yes",
    "chinese_title": "蛋糕",
    "wiki_image_url": "https://minecraft.wiki/images/Cake_JE4.png?009f2"
  },
  {
    "id": "calcite",
    "title": "Calcite",
    "url": "https://minecraft.wiki/w/Calcite",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/calcite.png",
    "renewable": "no",
    "stackable": 64,
    "tool": "pickaxe",
    "blast_resistance": 0.75,
    "hardness": 0.75,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.17",
    "transparent": "no",
    "chinese_title": "方解石",
    "wiki_image_url": "https://minecraft.wiki/images/Calcite_JE4_BE1.png?9cda4"
  },
  {
    "id": "calibrated_sculk_sensor",
    "title": "Calibrated Sculk Sensor",
    "url": "https://minecraft.wiki/w/Calibrated_Sculk_Sensor",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/calibrated_sculk_sensor.gif",
    "renewable": "yes",
    "stackable": 64,
    "tool": "hoe",
    "blast_resistance": 1.5,
    "hardness": 1.5,
    "luminous": "yes",
    "full_block": "no",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.20",
    "transparent": "yes",
    "chinese_title": "校频幽匿感测体",
    "wiki_image_url": "https://minecraft.wiki/images/Calibrated_Sculk_Sensor_JE2.gif?cfb26"
  },
  {
    "id": "campfire",
    "title": "Campfire",
    "url": "https://minecraft.wiki/w/Campfire",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/campfire.gif",
    "renewable": "yes",
    "stackable": 64,
    "tool": "axe",
    "blast_resistance": 2,
    "hardness": 2,
    "luminous": "partial",
    "full_block": "no",
    "flammable": "no",
    "fire_catch": "yes",
    "initial_release": "1.14",
    "transparent": "yes",
    "chinese_title": "营火",
    "wiki_image_url": "https://minecraft.wiki/images/Campfire_%28S%29_JE2_BE2.gif?742be"
  },
  {
    "id": "carrots",
    "title": "Carrot",
    "url": "https://minecraft.wiki/w/Carrot",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/carrots.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "any_tool",
    "blast_resistance": 0,
    "hardness": 0,
    "luminous": "0",
    "full_block": "no",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.4.2",
    "transparent": "yes",
    "chinese_title": "胡萝卜",
    "wiki_image_url": "https://minecraft.wiki/images/Carrot_JE3_BE2.png?5e9c8"
  },
  {
    "id": "cartography_table",
    "title": "Cartography Table",
    "url": "https://minecraft.wiki/w/Cartography_Table",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/cartography_table.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "axe",
    "blast_resistance": 2.5,
    "hardness": 2.5,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "yes",
    "initial_release": "1.14",
    "transparent": "no",
    "chinese_title": "制图台",
    "wiki_image_url": "https://minecraft.wiki/images/Cartography_Table_JE3_BE2.png?519d2"
  },
  {
    "id": "cauldron",
    "title": "Cauldron",
    "url": "https://minecraft.wiki/w/Cauldron",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/cauldron.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "pickaxe",
    "blast_resistance": 2,
    "hardness": 2,
    "luminous": "partial",
    "full_block": "no",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.0.0",
    "transparent": "yes",
    "chinese_title": "炼药锅",
    "wiki_image_url": "https://minecraft.wiki/images/Cauldron_JE8.png?c0cac"
  },
  {
    "id": "cave_vines",
    "title": "Cave Vines",
    "url": "https://minecraft.wiki/w/Cave_Vines",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/cave_vines.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "any_tool",
    "blast_resistance": 0,
    "hardness": 0,
    "luminous": "yes",
    "full_block": "no",
    "flammable": "yes",
    "fire_catch": "no",
    "initial_release": "1.17",
    "transparent": "yes",
    "chinese_title": "发光浆果",
    "wiki_image_url": "https://minecraft.wiki/images/Glow_Berries_JE1_BE1.png?7c9cc"
  },
  {
    "id": "chain",
    "title": "Chain",
    "url": "https://minecraft.wiki/w/Iron_Chain",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/chain.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "pickaxe",
    "blast_resistance": 6,
    "hardness": 5,
    "luminous": "no",
    "full_block": "no",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.16",
    "transparent": "yes",
    "chinese_title": "锁链",
    "wiki_image_url": "https://minecraft.wiki/images/Iron_Chain_%28UD%29_JE1_BE1.png?45ed2"
  },
  {
    "id": "iron_chain",
    "title": "Iron Chain",
    "url": "https://minecraft.wiki/w/Iron_Chain",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/chain.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "pickaxe",
    "blast_resistance": 6,
    "hardness": 5,
    "luminous": "no",
    "full_block": "no",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.16",
    "transparent": "yes",
    "chinese_title": "铁链",
    "wiki_image_url": "https://minecraft.wiki/images/Iron_Chain_%28UD%29_JE1_BE1.png?45ed2"
  },
  {
    "id": "copper_chain",
    "title": "Copper Chain",
    "url": "https://minecraft.wiki/w/Copper_Chain",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/chain.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "pickaxe",
    "blast_resistance": 6,
    "hardness": 5,
    "luminous": "no",
    "full_block": "no",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.21",
    "transparent": "yes",
    "chinese_title": "铜链",
    "wiki_image_url": "https://minecraft.wiki/images/Copper_Chain_%28UD%29_JE1_BE1.png?b436c"
  },
  {
    "id": "chest",
    "title": "Chest",
    "url": "https://minecraft.wiki/w/Chest",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/chest.gif",
    "renewable": "yes",
    "stackable": 64,
    "tool": "axe",
    "blast_resistance": 2.5,
    "hardness": 2.5,
    "luminous": "no",
    "full_block": "no",
    "flammable": "no",
    "fire_catch": "yes",
    "initial_release": "pre-alpha",
    "transparent": "partial",
    "chinese_title": "箱子",
    "wiki_image_url": "https://minecraft.wiki/images/Chest.gif?ca959"
  },
  {
    "id": "chiseled_bookshelf",
    "title": "Chiseled Bookshelf",
    "url": "https://minecraft.wiki/w/Chiseled_Bookshelf",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/chiseled_bookshelf.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "axe",
    "blast_resistance": 1.5,
    "hardness": 1.5,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.20",
    "transparent": "no",
    "chinese_title": "雕纹书架",
    "wiki_image_url": "https://minecraft.wiki/images/Chiseled_Bookshelf_%28S_0%29_JE2.png?f9f84"
  },
  {
    "id": "chorus_flower",
    "title": "Chorus Flower",
    "url": "https://minecraft.wiki/w/Chorus_Flower",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/chorus_flower.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "axe",
    "blast_resistance": 0.4,
    "hardness": 0.4,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.9",
    "transparent": "yes",
    "chinese_title": "紫颂花",
    "wiki_image_url": "https://minecraft.wiki/images/Chorus_Flower_JE2_BE2.png?586dd"
  },
  {
    "id": "chorus_plant",
    "title": "Chorus Plant",
    "url": "https://minecraft.wiki/w/Chorus_Plant",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/chorus_plant.png",
    "renewable": "partial",
    "stackable": 64,
    "tool": "axe",
    "blast_resistance": 0.4,
    "hardness": 0.4,
    "luminous": "no",
    "full_block": "no",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.9",
    "transparent": "yes",
    "chinese_title": "紫颂植株",
    "wiki_image_url": "https://minecraft.wiki/images/Chorus_Plant_JE2_BE2.png?be530"
  },
  {
    "id": "clay",
    "title": "Clay",
    "url": "https://minecraft.wiki/w/Clay",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/clay.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "shovel",
    "blast_resistance": 0.6,
    "hardness": 0.6,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "Alpha 1.0.11",
    "transparent": "no",
    "chinese_title": "黏土",
    "wiki_image_url": "https://minecraft.wiki/images/Clay_JE2_BE2.png?0c9e3"
  },
  {
    "id": "coal_block",
    "title": "Block of Coal",
    "url": "https://minecraft.wiki/w/Block_of_Coal",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/coal_block.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "pickaxe",
    "blast_resistance": 6,
    "hardness": 5,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "yes",
    "fire_catch": "no",
    "initial_release": "1.6.1",
    "transparent": "no",
    "chinese_title": "煤炭块",
    "wiki_image_url": "https://minecraft.wiki/images/Block_of_Coal_JE3_BE2.png?ed300"
  },
  {
    "id": "coal_ore",
    "title": "Coal Ore",
    "url": "https://minecraft.wiki/w/Coal_Ore",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/coal_ore.png",
    "renewable": "no",
    "stackable": 64,
    "tool": "pickaxe",
    "blast_resistance": 3,
    "hardness": 3,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "pre-alpha",
    "transparent": "no",
    "chinese_title": "煤矿石",
    "wiki_image_url": "https://minecraft.wiki/images/Coal_Ore_JE5_BE4.png?73bee"
  },
  {
    "id": "coarse_dirt",
    "title": "Coarse Dirt",
    "url": "https://minecraft.wiki/w/Coarse_Dirt",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/coarse_dirt.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "shovel",
    "blast_resistance": 0.5,
    "hardness": 0.5,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.7.2",
    "transparent": "no",
    "chinese_title": "砂土",
    "wiki_image_url": "https://minecraft.wiki/images/Coarse_Dirt.png?9cd99"
  },
  {
    "id": "cobbled_deepslate",
    "title": "Cobbled Deepslate",
    "url": "https://minecraft.wiki/w/Cobbled_Deepslate",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/cobbled_deepslate.png",
    "renewable": "no",
    "stackable": 64,
    "tool": "pickaxe",
    "blast_resistance": 6,
    "hardness": 3.5,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.17",
    "transparent": "no",
    "chinese_title": "深板岩圆石",
    "wiki_image_url": "https://minecraft.wiki/images/Cobbled_Deepslate.png?86523"
  },
  {
    "id": "cobblestone",
    "title": "Cobblestone",
    "url": "https://minecraft.wiki/w/Cobblestone",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/cobblestone.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "pickaxe",
    "blast_resistance": 6,
    "hardness": 2,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "yes",
    "initial_release": "pre-alpha",
    "transparent": "no",
    "chinese_title": "圆石",
    "wiki_image_url": "https://minecraft.wiki/images/Cobblestone_JE5_BE3.png?29624"
  },
  {
    "id": "cobweb",
    "title": "Cobweb",
    "url": "https://minecraft.wiki/w/Cobweb",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/cobweb.png",
    "renewable": "no",
    "stackable": 64,
    "tool": "shears, sword",
    "blast_resistance": 4,
    "hardness": 4,
    "luminous": "no",
    "full_block": "no",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "Beta 1.5",
    "transparent": "partial",
    "chinese_title": "蜘蛛网",
    "wiki_image_url": "https://minecraft.wiki/images/Cobweb_JE5.png?0f5e7"
  },
  {
    "id": "cocoa",
    "title": "Cocoa Beans",
    "url": "https://minecraft.wiki/w/Cocoa",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/cocoa.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "axe",
    "blast_resistance": 3,
    "hardness": 0.2,
    "luminous": "no",
    "full_block": "no",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "Beta 1.2",
    "transparent": "yes",
    "chinese_title": "可可豆",
    "wiki_image_url": "https://minecraft.wiki/images/Cocoa_Beans_JE4_BE3.png?48f20"
  },
  {
    "id": "command_block",
    "title": "Command Block",
    "url": "https://minecraft.wiki/w/Command_Block",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/command_block.gif",
    "renewable": "no",
    "stackable": 64,
    "tool": "none",
    "blast_resistance": 3600000,
    "hardness": -1,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.4.2",
    "transparent": "no",
    "chinese_title": "命令方块",
    "wiki_image_url": "https://minecraft.wiki/images/Impulse_Command_Block.gif?fb024"
  },
  {
    "id": "comparator",
    "title": "Redstone Comparator",
    "url": "https://minecraft.wiki/w/Redstone_Comparator",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/comparator.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "any_tool",
    "blast_resistance": 0,
    "hardness": 0,
    "luminous": "no",
    "full_block": "no",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.5",
    "transparent": "yes",
    "chinese_title": "红石比较器",
    "wiki_image_url": "https://minecraft.wiki/images/Redstone_Comparator_%28S%29_JE5.png?cb695"
  },
  {
    "id": "composter",
    "title": "Composter",
    "url": "https://minecraft.wiki/w/Composter",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/composter.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "axe",
    "blast_resistance": 0.6,
    "hardness": 0.6,
    "luminous": "no",
    "full_block": "no",
    "flammable": "yes",
    "fire_catch": "yes",
    "initial_release": "1.14",
    "transparent": "yes",
    "chinese_title": "堆肥桶",
    "wiki_image_url": "https://minecraft.wiki/images/Composter_JE1.png?b2c39"
  },
  {
    "id": "conduit",
    "title": "Conduit",
    "url": "https://minecraft.wiki/w/Conduit",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/conduit.png",
    "renewable": "no",
    "stackable": 64,
    "tool": "pickaxe",
    "blast_resistance": 3,
    "hardness": 3,
    "luminous": "yes",
    "full_block": "no",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.13",
    "transparent": "yes",
    "chinese_title": "潮涌核心",
    "wiki_image_url": "https://minecraft.wiki/images/Conduit_JE1_BE1.png?c8b8c"
  },
  {
    "id": "copper_block",
    "title": "Block of Copper",
    "url": "https://minecraft.wiki/w/Block_of_Copper",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/copper_block.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "pickaxe",
    "blast_resistance": 6,
    "hardness": 3,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.17",
    "transparent": "no",
    "chinese_title": "铜块",
    "wiki_image_url": "https://minecraft.wiki/images/Copper_Block_JE1_BE1.png?b75fe"
  },
  {
    "id": "copper_bulb",
    "title": "Copper Bulb",
    "url": "https://minecraft.wiki/w/Copper_Bulb",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/copper_bulb.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "pickaxe",
    "blast_resistance": 6,
    "hardness": 3,
    "luminous": "partial",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.21",
    "transparent": "no",
    "chinese_title": "铜灯",
    "wiki_image_url": "https://minecraft.wiki/images/Copper_Bulb_JE1_BE1.png?0b0da"
  },
  {
    "id": "copper_door",
    "title": "Copper Door",
    "url": "https://minecraft.wiki/w/Copper_Door",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/copper_door.webp",
    "renewable": "yes",
    "stackable": 64,
    "tool": "pickaxe",
    "blast_resistance": 3,
    "hardness": 3,
    "luminous": "no",
    "full_block": "no",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.21",
    "transparent": "partial",
    "chinese_title": "铜门",
    "wiki_image_url": "https://minecraft.wiki/images/Copper_Door_JE3_BE3.png?05ca1"
  },
  {
    "id": "copper_grate",
    "title": "Copper Grate",
    "url": "https://minecraft.wiki/w/Copper_Grate",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/copper_grate.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "pickaxe",
    "blast_resistance": 6,
    "hardness": 3,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.21",
    "transparent": "yes",
    "chinese_title": "铜格栅",
    "wiki_image_url": "https://minecraft.wiki/images/Copper_Grate_JE1_BE1.png?2374a"
  },
  {
    "id": "copper_ore",
    "title": "Copper Ore",
    "url": "https://minecraft.wiki/w/Copper_Ore",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/copper_ore.png",
    "renewable": "no",
    "stackable": 64,
    "tool": "pickaxe",
    "blast_resistance": 3,
    "hardness": 3,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.17",
    "transparent": "no",
    "chinese_title": "铜矿石",
    "wiki_image_url": "https://minecraft.wiki/images/Copper_Ore_JE2_BE2.png?073cd"
  },
  {
    "id": "copper_trapdoor",
    "title": "Copper Trapdoor",
    "url": "https://minecraft.wiki/w/Copper_Trapdoor",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/copper_trapdoor.webp",
    "renewable": "yes",
    "stackable": 64,
    "tool": "pickaxe",
    "blast_resistance": 3,
    "hardness": 3,
    "luminous": "no",
    "full_block": "no",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.21",
    "transparent": "yes",
    "chinese_title": "铜活板门",
    "wiki_image_url": "https://minecraft.wiki/images/Copper_Trapdoor_JE2_BE2.png?76b17"
  },
  {
    "id": "crafting_table",
    "title": "Crafting Table",
    "url": "https://minecraft.wiki/w/Crafting_Table",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/crafting_table.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "axe",
    "blast_resistance": 2.5,
    "hardness": 2.5,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "yes",
    "initial_release": "pre-alpha",
    "transparent": "no",
    "chinese_title": "工作台",
    "wiki_image_url": "https://minecraft.wiki/images/Crafting_Table_JE4_BE3.png?5767f"
  },
  {
    "id": "head",
    "title": "Head",
    "url": "https://minecraft.wiki/w/Head",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/head.png",
    "renewable": "partial",
    "stackable": 64,
    "tool": "any_tool",
    "blast_resistance": 1,
    "hardness": 1,
    "luminous": "no",
    "full_block": "no",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.4.2",
    "transparent": "yes",
    "chinese_title": "生物头颅",
    "wiki_image_url": "https://minecraft.wiki/images/thumb/All_The_Heads.png/1200px-All_The_Heads.png?3a8c6"
  },
  {
    "id": "heavy_core",
    "title": "Heavy Core",
    "url": "https://minecraft.wiki/w/Heavy_Core",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/heavy_core.webp",
    "renewable": "no",
    "stackable": 64,
    "tool": "pickaxe",
    "blast_resistance": 30,
    "hardness": 10,
    "luminous": "no",
    "full_block": "no",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.21",
    "transparent": "no",
    "chinese_title": "沉重核心",
    "wiki_image_url": "https://minecraft.wiki/images/Heavy_Core_JE1_BE1.png?57df9"
  },
  {
    "id": "nether_fungus",
    "title": "Nether Fungus",
    "url": "https://minecraft.wiki/w/Crimson_Fungus",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/fungus.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "any_tool",
    "blast_resistance": 0,
    "hardness": 0,
    "luminous": "no",
    "full_block": "no",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.16",
    "transparent": "yes",
    "chinese_title": "下界菌",
    "wiki_image_url": "https://minecraft.wiki/images/Crimson_Fungus_JE1_BE1.png?e3eed"
  },
  {
    "id": "nylium",
    "title": "Nylium",
    "url": "https://minecraft.wiki/w/Nylium",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/nylium.png",
    "renewable": "partial",
    "stackable": 64,
    "tool": "pickaxe",
    "blast_resistance": 0.4,
    "hardness": 0.4,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.16",
    "transparent": "no",
    "chinese_title": "菌岩",
    "wiki_image_url": "https://minecraft.wiki/images/Crimson_Nylium_JE1_BE1.png?819ad"
  },
  {
    "id": "roots",
    "title": "Roots",
    "url": "https://minecraft.wiki/w/Crimson_Roots",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/roots.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "any_tool",
    "blast_resistance": 0,
    "hardness": 0,
    "luminous": "no",
    "full_block": "no",
    "flammable": "no",
    "fire_catch": "yes",
    "initial_release": "1.16",
    "transparent": "yes",
    "chinese_title": "菌索",
    "wiki_image_url": "https://minecraft.wiki/images/Crimson_Roots_JE1_BE1.png?8564a"
  },
  {
    "id": "crying_obsidian",
    "title": "Crying Obsidian",
    "url": "https://minecraft.wiki/w/Crying_Obsidian",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/crying_obsidian.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "pickaxe",
    "blast_resistance": 1200,
    "hardness": 50,
    "luminous": "yes",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.16",
    "transparent": "no",
    "chinese_title": "哭泣的黑曜石",
    "wiki_image_url": "https://minecraft.wiki/images/Crying_Obsidian_JE1_BE1.png?f1f04"
  },
  {
    "id": "daylight_detector",
    "title": "Daylight Detector",
    "url": "https://minecraft.wiki/w/Daylight_Detector",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/daylight_detector.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "axe",
    "blast_resistance": 0.2,
    "hardness": 0.2,
    "luminous": "no",
    "full_block": "no",
    "flammable": "no",
    "fire_catch": "yes",
    "initial_release": "1.5",
    "transparent": "yes",
    "chinese_title": "阳光探测器",
    "wiki_image_url": "https://minecraft.wiki/images/Daylight_Detector_JE1_BE1.png?c5bbc"
  },
  {
    "id": "dead_bush",
    "title": "Dead Bush",
    "url": "https://minecraft.wiki/w/Dead_Bush",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/dead_bush.png",
    "renewable": "no",
    "stackable": 64,
    "tool": "shears",
    "blast_resistance": 0,
    "hardness": 0,
    "luminous": "no",
    "full_block": "no",
    "flammable": "yes",
    "fire_catch": "yes",
    "initial_release": "Beta 1.6",
    "transparent": "yes",
    "chinese_title": "枯萎的灌木",
    "wiki_image_url": "https://minecraft.wiki/images/Dead_Bush_JE2_BE2.png?f3971"
  },
  {
    "id": "decorated_pot",
    "title": "Decorated Pot",
    "url": "https://minecraft.wiki/w/Decorated_Pot",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/decorated_pot.png",
    "renewable": "partial",
    "stackable": 64,
    "tool": "any_tool",
    "blast_resistance": 0,
    "hardness": 0,
    "luminous": "no",
    "full_block": "no",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.20",
    "transparent": "yes",
    "chinese_title": "饰纹陶罐",
    "wiki_image_url": "https://minecraft.wiki/images/Decorated_Pot_%28N%29_JE2_BE2.png?1209f"
  },
  {
    "id": "deepslate",
    "title": "Deepslate",
    "url": "https://minecraft.wiki/w/Deepslate",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/deepslate.png",
    "renewable": "no",
    "stackable": 64,
    "tool": "pickaxe",
    "blast_resistance": 6,
    "hardness": 3,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.17",
    "transparent": "no",
    "chinese_title": "深板岩",
    "wiki_image_url": "https://minecraft.wiki/images/Deepslate_%28UD%29_JE3.png?7635f"
  },
  {
    "id": "detector_rail",
    "title": "Detector Rail",
    "url": "https://minecraft.wiki/w/Detector_Rail",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/detector_rail.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "pickaxe",
    "blast_resistance": 0.7,
    "hardness": 0.7,
    "luminous": "no",
    "full_block": "no",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "Beta 1.5",
    "transparent": "yes",
    "chinese_title": "探测铁轨",
    "wiki_image_url": "https://minecraft.wiki/images/Detector_Rail_%28NS%29_JE2_BE2.png?af5ee"
  },
  {
    "id": "diamond_block",
    "title": "Block of Diamond",
    "url": "https://minecraft.wiki/w/Block_of_Diamond",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/diamond_block.png",
    "renewable": "no",
    "stackable": 64,
    "tool": "pickaxe",
    "blast_resistance": 6,
    "hardness": 5,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "pre-alpha",
    "transparent": "no",
    "chinese_title": "钻石块",
    "wiki_image_url": "https://minecraft.wiki/images/Block_of_Diamond_JE5_BE3.png?542ee"
  },
  {
    "id": "diamond_ore",
    "title": "Diamond Ore",
    "url": "https://minecraft.wiki/w/Deepslate_Diamond_Ore",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/diamond_ore.png",
    "renewable": "no",
    "stackable": 64,
    "tool": "pickaxe",
    "blast_resistance": 3,
    "hardness": 3,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "pre-alpha",
    "transparent": "no",
    "chinese_title": "钻石矿石",
    "wiki_image_url": "https://minecraft.wiki/images/Diamond_Ore_JE5_BE5.png?fa2f4"
  },
  {
    "id": "diorite",
    "title": "Diorite",
    "url": "https://minecraft.wiki/w/Diorite",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/diorite.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "pickaxe",
    "blast_resistance": 6,
    "hardness": 1.5,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.8",
    "transparent": "no",
    "chinese_title": "闪长岩",
    "wiki_image_url": "https://minecraft.wiki/images/Diorite.png?58334"
  },
  {
    "id": "dirt",
    "title": "Dirt",
    "url": "https://minecraft.wiki/w/Dirt",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/dirt.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "shovel",
    "blast_resistance": 0.5,
    "hardness": 0.5,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "pre-alpha",
    "transparent": "no",
    "chinese_title": "泥土",
    "wiki_image_url": "https://minecraft.wiki/images/Dirt.png?89d72"
  },
  {
    "id": "dirt_path",
    "title": "Dirt Path",
    "url": "https://minecraft.wiki/w/Dirt_Path",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/dirt_path.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "shovel",
    "blast_resistance": 0.65,
    "hardness": 0.65,
    "luminous": "no",
    "full_block": "no",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.9",
    "transparent": "yes",
    "chinese_title": "土径",
    "wiki_image_url": "https://minecraft.wiki/images/Dirt_Path_JE4_BE3.png?0309b"
  },
  {
    "id": "dispenser",
    "title": "Dispenser",
    "url": "https://minecraft.wiki/w/Dispenser",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/dispenser.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "pickaxe",
    "blast_resistance": 3.5,
    "hardness": 3.5,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "Beta 1.2",
    "transparent": "no",
    "chinese_title": "发射器",
    "wiki_image_url": "https://minecraft.wiki/images/Dispenser_%28S%29_JE4.png?a8e35"
  },
  {
    "id": "dragon_egg",
    "title": "Dragon Egg",
    "url": "https://minecraft.wiki/w/Dragon_Egg",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/dragon_egg.png",
    "renewable": "no",
    "stackable": 64,
    "tool": "any_tool",
    "blast_resistance": 9,
    "hardness": 3,
    "luminous": "yes",
    "full_block": "no",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.0.0",
    "transparent": "yes",
    "chinese_title": "龙蛋",
    "wiki_image_url": "https://minecraft.wiki/images/Dragon_Egg_JE5.png?07921"
  },
  {
    "id": "dried_kelp_block",
    "title": "Dried Kelp Block",
    "url": "https://minecraft.wiki/w/Dried_Kelp_Block",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/dried_kelp_block.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "hoe",
    "blast_resistance": 2.5,
    "hardness": 0.5,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "yes",
    "fire_catch": "no",
    "initial_release": "1.13",
    "transparent": "no",
    "chinese_title": "干海带块",
    "wiki_image_url": "https://minecraft.wiki/images/Dried_Kelp_Block_JE1_BE2.png?8ef70"
  },
  {
    "id": "dripstone_block",
    "title": "Dripstone Block",
    "url": "https://minecraft.wiki/w/Dripstone_Block",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/dripstone_block.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "pickaxe",
    "blast_resistance": 1,
    "hardness": 1.5,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.17",
    "transparent": "no",
    "chinese_title": "滴水石块",
    "wiki_image_url": "https://minecraft.wiki/images/Dripstone_Block_JE1_BE1.png?0e08d"
  },
  {
    "id": "dropper",
    "title": "Dropper",
    "url": "https://minecraft.wiki/w/Dropper",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/dropper.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "pickaxe",
    "blast_resistance": 3.5,
    "hardness": 3.5,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.5",
    "transparent": "no",
    "chinese_title": "投掷器",
    "wiki_image_url": "https://minecraft.wiki/images/Dropper_%28S%29_JE3.png?d892d"
  },
  {
    "id": "emerald_block",
    "title": "Block of Emerald",
    "url": "https://minecraft.wiki/w/Block_of_Emerald",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/emerald_block.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "pickaxe",
    "blast_resistance": 6,
    "hardness": 5,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.3.1",
    "transparent": "no",
    "chinese_title": "绿宝石块",
    "wiki_image_url": "https://minecraft.wiki/images/Block_of_Emerald_JE4_BE3.png?d5a3c"
  },
  {
    "id": "emerald_ore",
    "title": "Emerald Ore",
    "url": "https://minecraft.wiki/w/Deepslate_Emerald_Ore",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/emerald_ore.png",
    "renewable": "no",
    "stackable": 64,
    "tool": "pickaxe",
    "blast_resistance": 3,
    "hardness": 3,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.3.1",
    "transparent": "no",
    "chinese_title": "绿宝石矿石",
    "wiki_image_url": "https://minecraft.wiki/images/Emerald_Ore_JE4_BE3.png?02ea7"
  },
  {
    "id": "enchanting_table",
    "title": "Enchanting Table",
    "url": "https://minecraft.wiki/w/Enchanting_Table",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/enchanting_table.gif",
    "renewable": "no",
    "stackable": 64,
    "tool": "pickaxe",
    "blast_resistance": 1200,
    "hardness": 5,
    "luminous": "yes",
    "full_block": "no",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.0.0",
    "transparent": "yes",
    "chinese_title": "附魔台",
    "wiki_image_url": "https://minecraft.wiki/images/Enchanting_Table.gif?904a7"
  },
  {
    "id": "end_portal_frame",
    "title": "End Portal Frame",
    "url": "https://minecraft.wiki/w/End_Portal_Frame",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/end_portal_frame.png",
    "renewable": "no",
    "stackable": 64,
    "tool": "none",
    "blast_resistance": 3600000,
    "hardness": -1,
    "luminous": "yes",
    "full_block": "no",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.0.0",
    "transparent": "partial",
    "chinese_title": "末地传送门框架",
    "wiki_image_url": "https://minecraft.wiki/images/End_Portal_Frame_%28S%29_JE7.png?2fb6d"
  },
  {
    "id": "end_rod",
    "title": "End Rod",
    "url": "https://minecraft.wiki/w/End_Rod",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/end_rod.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "any_tool",
    "blast_resistance": 0,
    "hardness": 0,
    "luminous": "yes",
    "full_block": "no",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.9",
    "transparent": "yes",
    "chinese_title": "末地烛",
    "wiki_image_url": "https://minecraft.wiki/images/End_Rod_%28U%29_JE2_BE2.png?705c1"
  },
  {
    "id": "end_stone",
    "title": "End Stone",
    "url": "https://minecraft.wiki/w/End_Stone",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/end_stone.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "pickaxe",
    "blast_resistance": 9,
    "hardness": 3,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.0.0",
    "transparent": "no",
    "chinese_title": "末地石",
    "wiki_image_url": "https://minecraft.wiki/images/End_Stone_JE3_BE2.png?8f71b"
  },
  {
    "id": "end_stone_bricks",
    "title": "End Stone Bricks",
    "url": "https://minecraft.wiki/w/End_Stone_Bricks",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/end_stone_bricks.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "pickaxe",
    "blast_resistance": 9,
    "hardness": 3,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.9",
    "transparent": "no",
    "chinese_title": "末地石砖",
    "wiki_image_url": "https://minecraft.wiki/images/End_Stone_Bricks_JE2_BE2.png?2d8bb"
  },
  {
    "id": "ender_chest",
    "title": "Ender Chest",
    "url": "https://minecraft.wiki/w/Ender_Chest",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/ender_chest.gif",
    "renewable": "yes",
    "stackable": 64,
    "tool": "pickaxe",
    "blast_resistance": 600,
    "hardness": 22.5,
    "luminous": "yes",
    "full_block": "no",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.3.1",
    "transparent": "yes",
    "chinese_title": "末影箱",
    "wiki_image_url": "https://minecraft.wiki/images/Ender_Chest_JE2_BE2.gif?90e80"
  },
  {
    "id": "farmland",
    "title": "Farmland",
    "url": "https://minecraft.wiki/w/Farmland",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/farmland.png",
    "renewable": "partial",
    "stackable": 64,
    "tool": "shovel",
    "blast_resistance": 0.6,
    "hardness": 0.6,
    "luminous": "no",
    "full_block": "no",
    "flammable": "no",
    "fire_catch": "yes",
    "initial_release": "pre-alpha",
    "transparent": "partial",
    "chinese_title": "耕地",
    "wiki_image_url": "https://minecraft.wiki/images/Farmland_JE4_BE6.png?16bd6"
  },
  {
    "id": "fern",
    "title": "Fern",
    "url": "https://minecraft.wiki/w/Fern",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/fern.png",
    "renewable": "partial",
    "stackable": 64,
    "tool": "shears",
    "blast_resistance": 0,
    "hardness": 0,
    "luminous": "no",
    "full_block": "no",
    "flammable": "yes",
    "fire_catch": "yes",
    "initial_release": "Beta 1.6",
    "transparent": "yes",
    "chinese_title": "蕨",
    "wiki_image_url": "https://minecraft.wiki/images/Fern_JE6.png?0c461"
  },
  {
    "id": "fire",
    "title": "Fire",
    "url": "https://minecraft.wiki/w/Fire",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/fire.gif",
    "renewable": "no",
    "stackable": 0,
    "tool": "any_tool",
    "blast_resistance": 0,
    "hardness": 0,
    "luminous": "yes",
    "full_block": "no",
    "flammable": "no",
    "fire_catch": "yes",
    "initial_release": "pre-alpha",
    "transparent": "yes",
    "chinese_title": "火",
    "wiki_image_url": "https://minecraft.wiki/images/Fire.gif?69f99"
  },
  {
    "id": "fletching_table",
    "title": "Fletching Table",
    "url": "https://minecraft.wiki/w/Fletching_Table",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/fletching_table.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "axe",
    "blast_resistance": 2.5,
    "hardness": 2.5,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "yes",
    "initial_release": "1.14",
    "transparent": "no",
    "chinese_title": "制箭台",
    "wiki_image_url": "https://minecraft.wiki/images/Fletching_Table_JE2_BE1.png?2f09d"
  },
  {
    "id": "flower_pot",
    "title": "Flower Pot",
    "url": "https://minecraft.wiki/w/Flower_Pot",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/flower_pot.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "any_tool",
    "blast_resistance": 0,
    "hardness": 0,
    "luminous": "no",
    "full_block": "no",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.4.2",
    "transparent": "yes",
    "chinese_title": "花盆",
    "wiki_image_url": "https://minecraft.wiki/images/Flower_Pot_JE3.png?e781b"
  },
  {
    "id": "frogspawn",
    "title": "Frogspawn",
    "url": "https://minecraft.wiki/w/Frogspawn",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/frogspawn.png",
    "renewable": "partial",
    "stackable": 64,
    "tool": "any_tool",
    "blast_resistance": 0,
    "hardness": 0,
    "luminous": "no",
    "full_block": "no",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.19",
    "transparent": "yes",
    "chinese_title": "青蛙卵",
    "wiki_image_url": "https://minecraft.wiki/images/Frogspawn_JE1_BE2.png?86a09"
  },
  {
    "id": "furnace",
    "title": "Furnace",
    "url": "https://minecraft.wiki/w/Furnace",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/furnace.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "pickaxe",
    "blast_resistance": 3.5,
    "hardness": 3.5,
    "luminous": "partial",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "pre-alpha",
    "transparent": "partial",
    "chinese_title": "熔炉",
    "wiki_image_url": "https://minecraft.wiki/images/Furnace_%28S%29_JE4.png?93891"
  },
  {
    "id": "glow_lichen",
    "title": "Glow Lichen",
    "url": "https://minecraft.wiki/w/Glow_Lichen",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/glow_lichen.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "axe, shears",
    "blast_resistance": 0.2,
    "hardness": 0.2,
    "luminous": "yes",
    "full_block": "no",
    "flammable": "yes",
    "fire_catch": "yes",
    "initial_release": "1.17",
    "transparent": "yes",
    "chinese_title": "发光地衣",
    "wiki_image_url": "https://minecraft.wiki/images/Glow_Lichen_%28D%29_JE2.png?76290"
  },
  {
    "id": "glowstone",
    "title": "Glowstone",
    "url": "https://minecraft.wiki/w/Glowstone",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/glowstone.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "any_tool",
    "blast_resistance": 0.3,
    "hardness": 0.3,
    "luminous": "yes",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "Alpha 1.2.0",
    "transparent": "yes",
    "chinese_title": "荧石",
    "wiki_image_url": "https://minecraft.wiki/images/Glowstone_JE4_BE2.png?0d5b0"
  },
  {
    "id": "gold_block",
    "title": "Block of Gold",
    "url": "https://minecraft.wiki/w/Block_of_Gold",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/gold_block.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "pickaxe",
    "blast_resistance": 6,
    "hardness": 3,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "pre-alpha",
    "transparent": "no",
    "chinese_title": "金块",
    "wiki_image_url": "https://minecraft.wiki/images/Block_of_Gold_JE6_BE3.png?09478"
  },
  {
    "id": "gold_ore",
    "title": "Gold Ore",
    "url": "https://minecraft.wiki/w/Deepslate_Gold_Ore",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/gold_ore.png",
    "renewable": "no",
    "stackable": 64,
    "tool": "pickaxe",
    "blast_resistance": 3,
    "hardness": 3,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "pre-alpha",
    "transparent": "no",
    "chinese_title": "金矿石",
    "wiki_image_url": "https://minecraft.wiki/images/Gold_Ore_JE7_BE4.png?9817a"
  },
  {
    "id": "granite",
    "title": "Granite",
    "url": "https://minecraft.wiki/w/Granite",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/granite.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "pickaxe",
    "blast_resistance": 6,
    "hardness": 1.5,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.8",
    "transparent": "no",
    "chinese_title": "花岗岩",
    "wiki_image_url": "https://minecraft.wiki/images/Granite.png?9cb6d"
  },
  {
    "id": "grass_block",
    "title": "Grass Block",
    "url": "https://minecraft.wiki/w/Grass_Block",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/grass_block.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "shovel",
    "blast_resistance": 0.6,
    "hardness": 0.6,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "pre-alpha",
    "transparent": "no",
    "chinese_title": "草方块",
    "wiki_image_url": "https://minecraft.wiki/images/Grass_Block_JE7_BE6.png?8cc1b"
  },
  {
    "id": "gravel",
    "title": "Gravel",
    "url": "https://minecraft.wiki/w/Gravel",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/gravel.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "shovel",
    "blast_resistance": 0.6,
    "hardness": 0.6,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "pre-alpha",
    "transparent": "no",
    "chinese_title": "沙砾",
    "wiki_image_url": "https://minecraft.wiki/images/Gravel_JE5_BE4.png?bb814"
  },
  {
    "id": "grindstone",
    "title": "Grindstone",
    "url": "https://minecraft.wiki/w/Grindstone",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/grindstone.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "pickaxe",
    "blast_resistance": 6,
    "hardness": 2,
    "luminous": "no",
    "full_block": "no",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.14",
    "transparent": "yes",
    "chinese_title": "砂轮",
    "wiki_image_url": "https://minecraft.wiki/images/Grindstone_%28floor%29_%28N%29.png?6c72b"
  },
  {
    "id": "hanging_roots",
    "title": "Hanging Roots",
    "url": "https://minecraft.wiki/w/Hanging_Roots",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/hanging_roots.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "shears",
    "blast_resistance": 0,
    "hardness": 0,
    "luminous": "no",
    "full_block": "no",
    "flammable": "yes",
    "fire_catch": "no",
    "initial_release": "1.17",
    "transparent": "yes",
    "chinese_title": "垂根",
    "wiki_image_url": "https://minecraft.wiki/images/Hanging_Roots_JE2_BE1.png?45d53"
  },
  {
    "id": "hay_block",
    "title": "Hay Bale",
    "url": "https://minecraft.wiki/w/Hay_Bale",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/hay_block.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "hoe",
    "blast_resistance": 0.5,
    "hardness": 0.5,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "yes",
    "fire_catch": "no",
    "initial_release": "1.6.1",
    "transparent": "no",
    "chinese_title": "干草捆",
    "wiki_image_url": "https://minecraft.wiki/images/Hay_Bale_%28UD%29_JE2_BE2.png?310e1"
  },
  {
    "id": "heavy_weighted_pressure_plate",
    "title": "Heavy Weighted Pressure Plate",
    "url": "https://minecraft.wiki/w/Heavy_Weighted_Pressure_Plate",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/heavy_weighted_pressure_plate.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "pickaxe",
    "blast_resistance": 0.5,
    "hardness": 0.5,
    "luminous": "no",
    "full_block": "no",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.5",
    "transparent": "yes",
    "chinese_title": "重质测重压力板",
    "wiki_image_url": "https://minecraft.wiki/images/Heavy_Weighted_Pressure_Plate_JE2_BE2.png?89c22"
  },
  {
    "id": "honey_block",
    "title": "Honey Block",
    "url": "https://minecraft.wiki/w/Honey_Block",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/honey_block.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "any_tool",
    "blast_resistance": 0,
    "hardness": 0,
    "luminous": "no",
    "full_block": "no",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.15",
    "transparent": "partial",
    "chinese_title": "蜂蜜块",
    "wiki_image_url": "https://minecraft.wiki/images/Honey_Block_JE1_BE2.png?94b6b"
  },
  {
    "id": "honeycomb_block",
    "title": "Honeycomb Block",
    "url": "https://minecraft.wiki/w/Honeycomb_Block",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/honeycomb_block.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "any_tool",
    "blast_resistance": 0.6,
    "hardness": 0.6,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.15",
    "transparent": "no",
    "chinese_title": "蜜脾块",
    "wiki_image_url": "https://minecraft.wiki/images/Honeycomb_Block_JE1_BE1.png?ff510"
  },
  {
    "id": "hopper",
    "title": "Hopper",
    "url": "https://minecraft.wiki/w/Hopper",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/hopper.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "pickaxe",
    "blast_resistance": 4.8,
    "hardness": 3,
    "luminous": "no",
    "full_block": "no",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.5",
    "transparent": "yes",
    "chinese_title": "漏斗",
    "wiki_image_url": "https://minecraft.wiki/images/Hopper_%28D%29_JE8.png?331f6"
  },
  {
    "id": "ice",
    "title": "Ice",
    "url": "https://minecraft.wiki/w/Ice",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/ice.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "pickaxe",
    "blast_resistance": 0.5,
    "hardness": 0.5,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "Alpha 1.0.4",
    "transparent": "partial",
    "chinese_title": "冰",
    "wiki_image_url": "https://minecraft.wiki/images/Ice_JE4_BE6.png?b2bcc"
  },
  {
    "id": "infested_block",
    "title": "Infested Block",
    "url": "https://minecraft.wiki/w/Infested_Chiseled_Stone_Bricks",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/infested_block.png",
    "renewable": "partial",
    "stackable": 64,
    "tool": "pickaxe",
    "blast_resistance": 0.75,
    "hardness": 0.75,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "Beta 1.8",
    "transparent": "no",
    "chinese_title": "虫蚀方块",
    "wiki_image_url": "https://minecraft.wiki/images/Stone_JE8.png?b5028"
  },
  {
    "id": "iron_bars",
    "title": "Iron Bars",
    "url": "https://minecraft.wiki/w/Iron_Bars",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/iron_bars.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "pickaxe",
    "blast_resistance": 6,
    "hardness": 5,
    "luminous": "no",
    "full_block": "no",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "Beta 1.8",
    "transparent": "yes",
    "chinese_title": "铁栏杆",
    "wiki_image_url": "https://minecraft.wiki/images/Iron_Bars_%28EW%29_JE7.png?17b79"
  },
  {
    "id": "iron_block",
    "title": "Block of Iron",
    "url": "https://minecraft.wiki/w/Block_of_Iron",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/iron_block.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "pickaxe",
    "blast_resistance": 6,
    "hardness": 5,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "pre-alpha",
    "transparent": "no",
    "chinese_title": "铁块",
    "wiki_image_url": "https://minecraft.wiki/images/Block_of_Iron_JE4_BE3.png?18948"
  },
  {
    "id": "iron_door",
    "title": "Iron Door",
    "url": "https://minecraft.wiki/w/Iron_Door",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/iron_door.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "pickaxe",
    "blast_resistance": 5,
    "hardness": 5,
    "luminous": "no",
    "full_block": "no",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "Alpha 1.0.1",
    "transparent": "partial",
    "chinese_title": "铁门",
    "wiki_image_url": "https://minecraft.wiki/images/Iron_Door_JE5.png?108f9"
  },
  {
    "id": "iron_ore",
    "title": "Iron Ore",
    "url": "https://minecraft.wiki/w/Deepslate_Iron_Ore",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/iron_ore.png",
    "renewable": "no",
    "stackable": 64,
    "tool": "pickaxe",
    "blast_resistance": 3,
    "hardness": 3,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "pre-alpha",
    "transparent": "no",
    "chinese_title": "铁矿石",
    "wiki_image_url": "https://minecraft.wiki/images/Iron_Ore_JE6_BE4.png?b1fb3"
  },
  {
    "id": "iron_trapdoor",
    "title": "Iron Trapdoor",
    "url": "https://minecraft.wiki/w/Iron_Trapdoor",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/iron_trapdoor.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "pickaxe",
    "blast_resistance": 5,
    "hardness": 5,
    "luminous": "no",
    "full_block": "no",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.8",
    "transparent": "yes",
    "chinese_title": "活板门",
    "wiki_image_url": "https://minecraft.wiki/images/Iron_Trapdoor_JE3_BE2.png?f2a4f"
  },
  {
    "id": "jack_o_lantern",
    "title": "Jack o'Lantern",
    "url": "https://minecraft.wiki/w/Jack_o%27Lantern",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/jack_o_lantern.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "axe",
    "blast_resistance": 1,
    "hardness": 1,
    "luminous": "yes",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "Alpha 1.2.0",
    "transparent": "partial",
    "chinese_title": "南瓜灯",
    "wiki_image_url": "https://minecraft.wiki/images/Jack_o%27Lantern_%28S%29_JE4.png?fbeb0"
  },
  {
    "id": "jigsaw",
    "title": "Jigsaw Block",
    "url": "https://minecraft.wiki/w/Jigsaw_Block",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/jigsaw.png",
    "renewable": "no",
    "stackable": 64,
    "tool": "none",
    "blast_resistance": 3600000,
    "hardness": -1,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.14",
    "transparent": "no",
    "chinese_title": "拼图方块",
    "wiki_image_url": "https://minecraft.wiki/images/Jigsaw_Block_%28S%29_JE3_BE2.png?9e6a3"
  },
  {
    "id": "jukebox",
    "title": "Jukebox",
    "url": "https://minecraft.wiki/w/Jukebox",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/jukebox.png",
    "renewable": "no",
    "stackable": 64,
    "tool": "axe",
    "blast_resistance": 6,
    "hardness": 2,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "yes",
    "initial_release": "Alpha 1.0.14",
    "transparent": "no",
    "chinese_title": "唱片机",
    "wiki_image_url": "https://minecraft.wiki/images/Jukebox_JE2_BE2.png?50367"
  },
  {
    "id": "kelp",
    "title": "Kelp",
    "url": "https://minecraft.wiki/w/Kelp",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/kelp.gif",
    "renewable": "yes",
    "stackable": 64,
    "tool": "any_tool",
    "blast_resistance": 0,
    "hardness": 0,
    "luminous": "no",
    "full_block": "no",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.13",
    "transparent": "yes",
    "chinese_title": "海带",
    "wiki_image_url": "https://minecraft.wiki/images/Kelp_JE3_BE2.gif?24913"
  },
  {
    "id": "ladder",
    "title": "Ladder",
    "url": "https://minecraft.wiki/w/Ladder",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/ladder.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "axe",
    "blast_resistance": 0.4,
    "hardness": 0.4,
    "luminous": "no",
    "full_block": "no",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "pre-alpha",
    "transparent": "yes",
    "chinese_title": "梯子",
    "wiki_image_url": "https://minecraft.wiki/images/Ladder_%28S%29_JE4.png?6e4ee"
  },
  {
    "id": "lantern",
    "title": "Lantern",
    "url": "https://minecraft.wiki/w/Lantern",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/lantern.gif",
    "renewable": "yes",
    "stackable": 64,
    "tool": "pickaxe",
    "blast_resistance": 3.5,
    "hardness": 3.5,
    "luminous": "yes",
    "full_block": "no",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.14",
    "transparent": "yes",
    "chinese_title": "灯笼",
    "wiki_image_url": "https://minecraft.wiki/images/Lantern_JE1_BE1.gif?25a95"
  },
  {
    "id": "lapis_block",
    "title": "Block of Lapis Lazuli",
    "url": "https://minecraft.wiki/w/Block_of_Lapis_Lazuli",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/lapis_block.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "pickaxe",
    "blast_resistance": 3,
    "hardness": 3,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "Beta 1.2",
    "transparent": "no",
    "chinese_title": "青金石块",
    "wiki_image_url": "https://minecraft.wiki/images/Block_of_Lapis_Lazuli_JE3_BE3.png?298ce"
  },
  {
    "id": "lapis_ore",
    "title": "Lapis Lazuli Ore",
    "url": "https://minecraft.wiki/w/Deepslate_Lapis_Lazuli_Ore",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/lapis_ore.png",
    "renewable": "no",
    "stackable": 64,
    "tool": "pickaxe",
    "blast_resistance": 3,
    "hardness": 3,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "Beta 1.2",
    "transparent": "no",
    "chinese_title": "青金石矿石",
    "wiki_image_url": "https://minecraft.wiki/images/Lapis_Lazuli_Ore_JE4_BE4.png?73194"
  },
  {
    "id": "lectern",
    "title": "Lectern",
    "url": "https://minecraft.wiki/w/Lectern",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/lectern.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "axe",
    "blast_resistance": 2.5,
    "hardness": 2.5,
    "luminous": "no",
    "full_block": "no",
    "flammable": "yes",
    "fire_catch": "yes",
    "initial_release": "1.14",
    "transparent": "no",
    "chinese_title": "讲台",
    "wiki_image_url": "https://minecraft.wiki/images/Lectern_%28S%29.png?08ef0"
  },
  {
    "id": "lever",
    "title": "Lever",
    "url": "https://minecraft.wiki/w/Lever",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/lever.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "any_tool",
    "blast_resistance": 0.5,
    "hardness": 0.5,
    "luminous": "no",
    "full_block": "no",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "Alpha 1.0.1",
    "transparent": "yes",
    "chinese_title": "拉杆",
    "wiki_image_url": "https://minecraft.wiki/images/Wall_Lever_%28S%29_JE5-L3.png?039e0"
  },
  {
    "id": "light",
    "title": "Light Block",
    "url": "https://minecraft.wiki/w/Light_Block",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/light.png",
    "renewable": "no",
    "stackable": 64,
    "tool": "none",
    "blast_resistance": 3600001,
    "hardness": -1,
    "luminous": "partial",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.17",
    "transparent": "yes",
    "chinese_title": "光源方块",
    "wiki_image_url": "https://minecraft.wiki/images/Light_15_JE3.png?4aec7"
  },
  {
    "id": "lightning_rod",
    "title": "Lightning Rod",
    "url": "https://minecraft.wiki/w/Lightning_Rod",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/lightning_rod.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "pickaxe",
    "blast_resistance": 6,
    "hardness": 3,
    "luminous": "no",
    "full_block": "no",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.17",
    "transparent": "yes",
    "chinese_title": "避雷针",
    "wiki_image_url": "https://minecraft.wiki/images/Lightning_Rod_%28U%29_JE3.png?6db91"
  },
  {
    "id": "lily_pad",
    "title": "Lily Pad",
    "url": "https://minecraft.wiki/w/Lily_Pad",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/lily_pad.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "any_tool",
    "blast_resistance": 0,
    "hardness": 0,
    "luminous": "no",
    "full_block": "no",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.0.0",
    "transparent": "yes",
    "chinese_title": "睡莲",
    "wiki_image_url": "https://minecraft.wiki/images/Lily_Pad_%28on_the_water%29.png?32688"
  },
  {
    "id": "lodestone",
    "title": "Lodestone",
    "url": "https://minecraft.wiki/w/Lodestone",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/lodestone.png",
    "renewable": "no",
    "stackable": 64,
    "tool": "pickaxe",
    "blast_resistance": 3.5,
    "hardness": 3.5,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.16",
    "transparent": "no",
    "chinese_title": "磁石",
    "wiki_image_url": "https://minecraft.wiki/images/Lodestone_JE1_BE1.png?3348f"
  },
  {
    "id": "loom",
    "title": "Loom",
    "url": "https://minecraft.wiki/w/Loom",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/loom.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "axe",
    "blast_resistance": 2.5,
    "hardness": 2.5,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "yes",
    "initial_release": "1.14",
    "transparent": "no",
    "chinese_title": "织布机",
    "wiki_image_url": "https://minecraft.wiki/images/Loom_%28S%29_JE1_BE1.png?29567"
  },
  {
    "id": "magma_block",
    "title": "Magma Block",
    "url": "https://minecraft.wiki/w/Magma_Block",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/magma_block.gif",
    "renewable": "yes",
    "stackable": 64,
    "tool": "pickaxe",
    "blast_resistance": 0.5,
    "hardness": 0.5,
    "luminous": "yes",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.10",
    "transparent": "no",
    "chinese_title": "岩浆块",
    "wiki_image_url": "https://minecraft.wiki/images/Magma_Block_JE2_BE2.gif?b8077"
  },
  {
    "id": "mangrove_propagule",
    "title": "Mangrove Propagule",
    "url": "https://minecraft.wiki/w/Mangrove_Propagule",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/mangrove_propagule.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "any_tool",
    "blast_resistance": 0,
    "hardness": 0,
    "luminous": "no",
    "full_block": "no",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.19",
    "transparent": "yes",
    "chinese_title": "红树胎生苗",
    "wiki_image_url": "https://minecraft.wiki/images/Mangrove_Propagule_JE1_BE1.png?19f98"
  },
  {
    "id": "mangrove_roots",
    "title": "Mangrove Roots",
    "url": "https://minecraft.wiki/w/Mangrove_Roots",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/mangrove_roots.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "axe",
    "blast_resistance": 0.7,
    "hardness": 0.7,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "yes",
    "fire_catch": "yes",
    "initial_release": "1.19",
    "transparent": "partial",
    "chinese_title": "红树根",
    "wiki_image_url": "https://minecraft.wiki/images/Mangrove_Roots_JE2.png?405b3"
  },
  {
    "id": "melon",
    "title": "Melon",
    "url": "https://minecraft.wiki/w/Melon",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/melon.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "axe, sword",
    "blast_resistance": 1,
    "hardness": 1,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "Beta 1.8",
    "transparent": "partial",
    "chinese_title": "西瓜",
    "wiki_image_url": "https://minecraft.wiki/images/Melon_JE2_BE2.png?1ff8e"
  },
  {
    "id": "melon_stem",
    "title": "Melon Seeds",
    "url": "https://minecraft.wiki/w/Melon_Stem",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/melon_stem_block.webp",
    "renewable": "yes",
    "stackable": 64,
    "tool": "any_tool",
    "blast_resistance": 0,
    "hardness": 0,
    "luminous": "no",
    "full_block": "no",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "Beta 1.8",
    "transparent": "yes",
    "chinese_title": "西瓜种子",
    "wiki_image_url": "https://minecraft.wiki/images/Melon_Seeds_JE2.png?59562"
  },
  {
    "id": "moss_block",
    "title": "Moss Block",
    "url": "https://minecraft.wiki/w/Moss_Block",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/moss_block.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "hoe",
    "blast_resistance": 0.1,
    "hardness": 0.1,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.17",
    "transparent": "no",
    "chinese_title": "苔藓块",
    "wiki_image_url": "https://minecraft.wiki/images/Moss_Block_JE1_BE1.png?ad2d5"
  },
  {
    "id": "moss_carpet",
    "title": "Moss Carpet",
    "url": "https://minecraft.wiki/w/Moss_Carpet",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/moss_carpet.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "hoe",
    "blast_resistance": 0.1,
    "hardness": 0.1,
    "luminous": "no",
    "full_block": "no",
    "flammable": "no",
    "fire_catch": "yes",
    "initial_release": "1.17",
    "transparent": "yes",
    "chinese_title": "覆地苔藓",
    "wiki_image_url": "https://minecraft.wiki/images/Moss_Carpet.png?d10d5"
  },
  {
    "id": "mossy_cobblestone",
    "title": "Mossy Cobblestone",
    "url": "https://minecraft.wiki/w/Mossy_Cobblestone",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/mossy_cobblestone.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "pickaxe",
    "blast_resistance": 6,
    "hardness": 2,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "pre-alpha",
    "transparent": "no",
    "chinese_title": "苔石",
    "wiki_image_url": "https://minecraft.wiki/images/Mossy_Cobblestone_JE4_BE2.png?a2694"
  },
  {
    "id": "mud",
    "title": "Mud",
    "url": "https://minecraft.wiki/w/Mud",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/mud.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "shovel",
    "blast_resistance": 0.5,
    "hardness": 0.5,
    "luminous": "no",
    "full_block": "no",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.19",
    "transparent": "no",
    "chinese_title": "泥巴",
    "wiki_image_url": "https://minecraft.wiki/images/Mud_JE1_BE1.png?e483b"
  },
  {
    "id": "mud_bricks",
    "title": "Mud Bricks",
    "url": "https://minecraft.wiki/w/Mud_Bricks",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/mud_bricks.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "pickaxe",
    "blast_resistance": 3,
    "hardness": 1.5,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.19",
    "transparent": "no",
    "chinese_title": "泥砖",
    "wiki_image_url": "https://minecraft.wiki/images/Mud_Bricks_JE1_BE1.png?aab68"
  },
  {
    "id": "muddy_mangrove_roots",
    "title": "Muddy Mangrove Roots",
    "url": "https://minecraft.wiki/w/Muddy_Mangrove_Roots",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/muddy_mangrove_roots.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "shovel",
    "blast_resistance": 0.7,
    "hardness": 0.7,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "yes",
    "initial_release": "1.19",
    "transparent": "no",
    "chinese_title": "沾泥的红树根",
    "wiki_image_url": "https://minecraft.wiki/images/Muddy_Mangrove_Roots_JE1_BE1.png?14614"
  },
  {
    "id": "mycelium",
    "title": "Mycelium",
    "url": "https://minecraft.wiki/w/Mycelium",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/mycelium.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "shovel",
    "blast_resistance": 0.6,
    "hardness": 0.6,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.0.0",
    "transparent": "no",
    "chinese_title": "菌丝体",
    "wiki_image_url": "https://minecraft.wiki/images/Mycelium_JE5_BE3.png?4d3fa"
  },
  {
    "id": "nether_bricks",
    "title": "Nether Bricks",
    "url": "https://minecraft.wiki/w/Chiseled_Nether_Bricks",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/nether_bricks.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "pickaxe",
    "blast_resistance": 6,
    "hardness": 2,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.0.0",
    "transparent": "no",
    "chinese_title": "雕纹下界砖块",
    "wiki_image_url": "https://minecraft.wiki/images/Chiseled_Nether_Bricks_JE3_BE3.png?96336"
  },
  {
    "id": "nether_gold_ore",
    "title": "Nether Gold Ore",
    "url": "https://minecraft.wiki/w/Nether_Gold_Ore",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/nether_gold_ore.png",
    "renewable": "no",
    "stackable": 64,
    "tool": "pickaxe",
    "blast_resistance": 3,
    "hardness": 3,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.16",
    "transparent": "no",
    "chinese_title": "下界金矿石",
    "wiki_image_url": "https://minecraft.wiki/images/Nether_Gold_Ore_JE2_BE1.png?c7842"
  },
  {
    "id": "nether_quartz_ore",
    "title": "Nether Quartz Ore",
    "url": "https://minecraft.wiki/w/Nether_Quartz_Ore",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/nether_quartz_ore.png",
    "renewable": "no",
    "stackable": 64,
    "tool": "pickaxe",
    "blast_resistance": 3,
    "hardness": 3,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.5",
    "transparent": "no",
    "chinese_title": "下界石英矿石",
    "wiki_image_url": "https://minecraft.wiki/images/Nether_Quartz_Ore_JE3_BE2.png?f3464"
  },
  {
    "id": "nether_sprouts",
    "title": "Nether Sprouts",
    "url": "https://minecraft.wiki/w/Nether_Sprouts",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/nether_sprouts.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "shears",
    "blast_resistance": 0,
    "hardness": 0,
    "luminous": "no",
    "full_block": "no",
    "flammable": "no",
    "fire_catch": "yes",
    "initial_release": "1.16",
    "transparent": "yes",
    "chinese_title": "下界苗",
    "wiki_image_url": "https://minecraft.wiki/images/Nether_Sprouts_JE2_BE2.png?849a9"
  },
  {
    "id": "nether_wart",
    "title": "Nether Wart",
    "url": "https://minecraft.wiki/w/Nether_Wart",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/nether_wart.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "any_tool",
    "blast_resistance": 0,
    "hardness": 0,
    "luminous": "no",
    "full_block": "no",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.0.0",
    "transparent": "yes",
    "chinese_title": "下界疣",
    "wiki_image_url": "https://minecraft.wiki/images/Nether_Wart_%28item%29_JE2_BE1.png?65953"
  },
  {
    "id": "nether_wart_block",
    "title": "Nether Wart Block",
    "url": "https://minecraft.wiki/w/Nether_Wart_Block",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/nether_wart_block.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "hoe",
    "blast_resistance": 1,
    "hardness": 1,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.10",
    "transparent": "no",
    "chinese_title": "下界疣块",
    "wiki_image_url": "https://minecraft.wiki/images/Nether_Wart_Block_JE3.png?2555f"
  },
  {
    "id": "netherite_block",
    "title": "Block of Netherite",
    "url": "https://minecraft.wiki/w/Block_of_Netherite",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/netherite_block.png",
    "renewable": "no",
    "stackable": 64,
    "tool": "pickaxe",
    "blast_resistance": 1200,
    "hardness": 50,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.16",
    "transparent": "no",
    "chinese_title": "下界合金块",
    "wiki_image_url": "https://minecraft.wiki/images/Block_of_Netherite_JE1_BE1.png?7e0a3"
  },
  {
    "id": "netherrack",
    "title": "Netherrack",
    "url": "https://minecraft.wiki/w/Netherrack",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/netherrack.png",
    "renewable": "partial",
    "stackable": 64,
    "tool": "pickaxe",
    "blast_resistance": 0.4,
    "hardness": 0.4,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "Alpha 1.2.0",
    "transparent": "no",
    "chinese_title": "下界岩",
    "wiki_image_url": "https://minecraft.wiki/images/Netherrack_JE4_BE2.png?8a940"
  },
  {
    "id": "note_block",
    "title": "Note Block",
    "url": "https://minecraft.wiki/w/Note_Block",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/note_block.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "axe",
    "blast_resistance": 0.8,
    "hardness": 0.8,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "yes",
    "initial_release": "Beta 1.2",
    "transparent": "no",
    "chinese_title": "音符盒",
    "wiki_image_url": "https://minecraft.wiki/images/Note_Block_JE2_BE2.png?0bf0f"
  },
  {
    "id": "observer",
    "title": "Observer",
    "url": "https://minecraft.wiki/w/Observer",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/observer.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "pickaxe",
    "blast_resistance": 3,
    "hardness": 3,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.11",
    "transparent": "partial",
    "chinese_title": "侦测器",
    "wiki_image_url": "https://minecraft.wiki/images/Observer_JE4_BE3.png?39c33"
  },
  {
    "id": "obsidian",
    "title": "Obsidian",
    "url": "https://minecraft.wiki/w/Obsidian",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/obsidian.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "pickaxe",
    "blast_resistance": 1200,
    "hardness": 50,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "pre-alpha",
    "transparent": "no",
    "chinese_title": "黑曜石",
    "wiki_image_url": "https://minecraft.wiki/images/Obsidian_JE3_BE2.png?0a8ae"
  },
  {
    "id": "froglight",
    "title": "Froglight",
    "url": "https://minecraft.wiki/w/Ochre_Froglight",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/froglight.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "any_tool",
    "blast_resistance": 0.3,
    "hardness": 0.3,
    "luminous": "yes",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.19",
    "transparent": "no",
    "chinese_title": "蛙明灯",
    "wiki_image_url": "https://minecraft.wiki/images/Pearlescent_Froglight_%28UD%29_JE1.png?9b741"
  },
  {
    "id": "packed_ice",
    "title": "Packed Ice",
    "url": "https://minecraft.wiki/w/Packed_Ice",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/packed_ice.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "pickaxe",
    "blast_resistance": 0.5,
    "hardness": 0.5,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.7.2",
    "transparent": "no",
    "chinese_title": "浮冰",
    "wiki_image_url": "https://minecraft.wiki/images/Packed_Ice_JE2_BE3.png?b444d"
  },
  {
    "id": "packed_mud",
    "title": "Packed Mud",
    "url": "https://minecraft.wiki/w/Packed_Mud",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/packed_mud.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "pickaxe",
    "blast_resistance": 3,
    "hardness": 1,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.19",
    "transparent": "no",
    "chinese_title": "泥坯",
    "wiki_image_url": "https://minecraft.wiki/images/Packed_Mud_JE1_BE1.png?cfe7d"
  },
  {
    "id": "petrified_oak_slab",
    "title": "Petrified Oak Slab",
    "url": "https://minecraft.wiki/w/Petrified_Oak_Slab",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/petrified_oak_slab.png",
    "renewable": "no",
    "stackable": 64,
    "tool": "pickaxe",
    "blast_resistance": 6,
    "hardness": 2,
    "luminous": "no",
    "full_block": "partial",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "Beta 1.3",
    "transparent": "partial",
    "chinese_title": "石化橡木台阶",
    "wiki_image_url": "https://minecraft.wiki/images/Oak_Slab_JE5_BE2.png?ddf28"
  },
  {
    "id": "pink_petals",
    "title": "Pink Petals",
    "url": "https://minecraft.wiki/w/Pink_Petals",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/pink_petals.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "any_tool",
    "blast_resistance": 0,
    "hardness": 0,
    "luminous": "no",
    "full_block": "no",
    "flammable": "yes",
    "fire_catch": "no",
    "initial_release": "1.20",
    "transparent": "yes",
    "chinese_title": "粉红色花簇",
    "wiki_image_url": "https://minecraft.wiki/images/Pink_Petals_1_%28S%29_JE2.png?7e47c"
  },
  {
    "id": "piston",
    "title": "Piston",
    "url": "https://minecraft.wiki/w/Piston",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/piston.gif",
    "renewable": "yes",
    "stackable": 64,
    "tool": "pickaxe",
    "blast_resistance": 0.5,
    "hardness": 1.5,
    "luminous": "no",
    "full_block": "partial",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "Beta 1.7",
    "transparent": "yes",
    "chinese_title": "活塞",
    "wiki_image_url": "https://minecraft.wiki/images/Piston_%28U%29_JE3.gif?eca74"
  },
  {
    "id": "pitcher_crop",
    "title": "Pitcher Crop",
    "url": "https://minecraft.wiki/w/Pitcher_Crop",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/pitcher_crop.webp",
    "renewable": "yes",
    "stackable": 64,
    "tool": "any_tool",
    "blast_resistance": 0,
    "hardness": 0,
    "luminous": "yes",
    "full_block": "no",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.20",
    "transparent": "yes",
    "chinese_title": "瓶子草荚果",
    "wiki_image_url": "https://minecraft.wiki/images/Pitcher_Pod_JE1_BE1.png?162fa"
  },
  {
    "id": "pitcher_plant",
    "title": "Pitcher Plant",
    "url": "https://minecraft.wiki/w/Pitcher_Plant",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/pitcher_plant.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "any_tool",
    "blast_resistance": 0,
    "hardness": 0,
    "luminous": "no",
    "full_block": "no",
    "flammable": "yes",
    "fire_catch": "yes",
    "initial_release": "1.20",
    "transparent": "yes",
    "chinese_title": "瓶子草",
    "wiki_image_url": "https://minecraft.wiki/images/Pitcher_Plant_JE1_BE1.png?69d42"
  },
  {
    "id": "podzol",
    "title": "Podzol",
    "url": "https://minecraft.wiki/w/Podzol",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/podzol.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "shovel",
    "blast_resistance": 0.5,
    "hardness": 0.5,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.7.2",
    "transparent": "no",
    "chinese_title": "灰化土",
    "wiki_image_url": "https://minecraft.wiki/images/Podzol_JE2_BE2.png?72707"
  },
  {
    "id": "pointed_dripstone",
    "title": "Pointed Dripstone",
    "url": "https://minecraft.wiki/w/Pointed_Dripstone",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/pointed_dripstone.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "pickaxe",
    "blast_resistance": 3,
    "hardness": 1.5,
    "luminous": "no",
    "full_block": "no",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.17",
    "transparent": "yes",
    "chinese_title": "滴水石锥",
    "wiki_image_url": "https://minecraft.wiki/images/Pointed_Dripstone_Base_%28D%29_JE1_BE1.png?8a141"
  },
  {
    "id": "polished_blackstone",
    "title": "Polished Blackstone",
    "url": "https://minecraft.wiki/w/Chiseled_Polished_Blackstone",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/polished_blackstone.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "pickaxe",
    "blast_resistance": 6,
    "hardness": 2,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.16",
    "transparent": "no",
    "chinese_title": "雕纹磨制黑石",
    "wiki_image_url": "https://minecraft.wiki/images/Chiseled_Polished_Blackstone_JE1_BE1.png?2b5ba"
  },
  {
    "id": "potatoes",
    "title": "Potato",
    "url": "https://minecraft.wiki/w/Potato",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/potatoes.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "any_tool",
    "blast_resistance": 0,
    "hardness": 0,
    "luminous": "no",
    "full_block": "no",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.4.2",
    "transparent": "yes",
    "chinese_title": "马铃薯",
    "wiki_image_url": "https://minecraft.wiki/images/Potato_JE3_BE2.png?27685"
  },
  {
    "id": "powder_snow",
    "title": "Powder Snow",
    "url": "https://minecraft.wiki/w/Powder_Snow",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/powder_snow.png",
    "renewable": "yes",
    "stackable": 1,
    "tool": "bucket",
    "blast_resistance": 0.25,
    "hardness": 0.25,
    "luminous": "no",
    "full_block": "no",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.17",
    "transparent": "yes",
    "chinese_title": "细雪",
    "wiki_image_url": "https://minecraft.wiki/images/Powder_Snow_JE1_BE1.png?261ff"
  },
  {
    "id": "powered_rail",
    "title": "Powered Rail",
    "url": "https://minecraft.wiki/w/Powered_Rail",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/powered_rail.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "pickaxe",
    "blast_resistance": 0.7,
    "hardness": 0.7,
    "luminous": "no",
    "full_block": "no",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "Beta 1.5",
    "transparent": "yes",
    "chinese_title": "动力铁轨",
    "wiki_image_url": "https://minecraft.wiki/images/Powered_Rail_%28NS%29_JE2_BE2.png?08321"
  },
  {
    "id": "prismarine",
    "title": "Prismarine",
    "url": "https://minecraft.wiki/w/Dark_Prismarine",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/prismarine.gif",
    "renewable": "yes",
    "stackable": 64,
    "tool": "pickaxe",
    "blast_resistance": 6,
    "hardness": 1.5,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.8",
    "transparent": "no",
    "chinese_title": "暗海晶石",
    "wiki_image_url": "https://minecraft.wiki/images/Dark_Prismarine_JE2_BE2.png?06713"
  },
  {
    "id": "pumpkin",
    "title": "Pumpkin",
    "url": "https://minecraft.wiki/w/Carved_Pumpkin",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/pumpkin.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "axe",
    "blast_resistance": 1,
    "hardness": 1,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "Alpha 1.2.0",
    "transparent": "partial",
    "chinese_title": "雕刻南瓜",
    "wiki_image_url": "https://minecraft.wiki/images/Carved_Pumpkin_%28S%29_JE5.png?38be7"
  },
  {
    "id": "pumpkin_stem",
    "title": "Pumpkin Seeds",
    "url": "https://minecraft.wiki/w/Pumpkin_Stem",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/pumpkin_stem_block.webp",
    "renewable": "yes",
    "stackable": 64,
    "tool": "any_tool",
    "blast_resistance": 0,
    "hardness": 0,
    "luminous": "no",
    "full_block": "no",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "Beta 1.8",
    "transparent": "yes",
    "chinese_title": "南瓜种子",
    "wiki_image_url": "https://minecraft.wiki/images/Pumpkin_Seeds_JE1_BE1.png?d9ae3"
  },
  {
    "id": "purpur_block",
    "title": "Purpur Block",
    "url": "https://minecraft.wiki/w/Purpur_Block",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/purpur_block.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "pickaxe",
    "blast_resistance": 6,
    "hardness": 1.5,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.9",
    "transparent": "no",
    "chinese_title": "紫珀块",
    "wiki_image_url": "https://minecraft.wiki/images/Purpur_Block_JE2_BE2.png?f2101"
  },
  {
    "id": "quartz_block",
    "title": "Block of Quartz",
    "url": "https://minecraft.wiki/w/Block_of_Quartz",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/quartz_block.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "pickaxe",
    "blast_resistance": 0.8,
    "hardness": 0.8,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.5",
    "transparent": "no",
    "chinese_title": "石英块",
    "wiki_image_url": "https://minecraft.wiki/images/Block_of_Quartz_JE4_BE4.png?4b4e2"
  },
  {
    "id": "rail",
    "title": "Rail",
    "url": "https://minecraft.wiki/w/Rail",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/rail.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "pickaxe",
    "blast_resistance": 0.7,
    "hardness": 0.7,
    "luminous": "no",
    "full_block": "no",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "pre-alpha",
    "transparent": "yes",
    "chinese_title": "铁轨",
    "wiki_image_url": "https://minecraft.wiki/images/Rail_%28NS%29_JE3_BE2.png?c1f80"
  },
  {
    "id": "raw_copper_block",
    "title": "Block of Raw Copper",
    "url": "https://minecraft.wiki/w/Block_of_Raw_Copper",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/raw_copper_block.png",
    "renewable": "no",
    "stackable": 64,
    "tool": "pickaxe",
    "blast_resistance": 6,
    "hardness": 5,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.17",
    "transparent": "no",
    "chinese_title": "粗铜块",
    "wiki_image_url": "https://minecraft.wiki/images/Block_of_Raw_Copper_JE2_BE2.png?a4e9a"
  },
  {
    "id": "raw_gold_block",
    "title": "Block of Raw Gold",
    "url": "https://minecraft.wiki/w/Block_of_Raw_Gold",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/raw_gold_block.png",
    "renewable": "no",
    "stackable": 64,
    "tool": "pickaxe",
    "blast_resistance": 6,
    "hardness": 5,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.17",
    "transparent": "no",
    "chinese_title": "粗金块",
    "wiki_image_url": "https://minecraft.wiki/images/Block_of_Raw_Gold_JE3_BE2.png?f4653"
  },
  {
    "id": "raw_iron_block",
    "title": "Block of Raw Iron",
    "url": "https://minecraft.wiki/w/Block_of_Raw_Iron",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/raw_iron_block.png",
    "renewable": "no",
    "stackable": 64,
    "tool": "pickaxe",
    "blast_resistance": 6,
    "hardness": 5,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.17",
    "transparent": "no",
    "chinese_title": "粗铁块",
    "wiki_image_url": "https://minecraft.wiki/images/Block_of_Raw_Iron_JE3_BE2.png?d82b7"
  },
  {
    "id": "redstone_block",
    "title": "Block of Redstone",
    "url": "https://minecraft.wiki/w/Block_of_Redstone",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/redstone_block.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "pickaxe",
    "blast_resistance": 6,
    "hardness": 5,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.5",
    "transparent": "partial",
    "chinese_title": "红石块",
    "wiki_image_url": "https://minecraft.wiki/images/Block_of_Redstone_JE2_BE2.png?bb6e3"
  },
  {
    "id": "redstone_lamp",
    "title": "Redstone Lamp",
    "url": "https://minecraft.wiki/w/Redstone_Lamp",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/redstone_lamp.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "any_tool",
    "blast_resistance": 0.3,
    "hardness": 0.3,
    "luminous": "partial",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.2.1",
    "transparent": "partial",
    "chinese_title": "红石灯",
    "wiki_image_url": "https://minecraft.wiki/images/Redstone_Lamp_JE3_BE2.png?02b8b"
  },
  {
    "id": "redstone_ore",
    "title": "Redstone Ore",
    "url": "https://minecraft.wiki/w/Deepslate_Redstone_Ore",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/redstone_ore.png",
    "renewable": "no",
    "stackable": 64,
    "tool": "pickaxe",
    "blast_resistance": 3,
    "hardness": 3,
    "luminous": "partial",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "Alpha 1.0.1",
    "transparent": "no",
    "chinese_title": "红石矿石",
    "wiki_image_url": "https://minecraft.wiki/images/Redstone_Ore_JE4_BE3.png?69549"
  },
  {
    "id": "redstone_torch",
    "title": "Redstone Torch",
    "url": "https://minecraft.wiki/w/Redstone_Torch",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/redstone_torch.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "any_tool",
    "blast_resistance": 0,
    "hardness": 0,
    "luminous": "partial",
    "full_block": "no",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "Alpha 1.0.1",
    "transparent": "yes",
    "chinese_title": "红石火把",
    "wiki_image_url": "https://minecraft.wiki/images/Redstone_Torch_JE5.png?ceef5"
  },
  {
    "id": "redstone_wire",
    "title": "Redstone Dust",
    "url": "https://minecraft.wiki/w/Redstone_Wire",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/redstone_wire.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "any_tool",
    "blast_resistance": 0,
    "hardness": 0,
    "luminous": "no",
    "full_block": "no",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "Alpha 1.0.1",
    "transparent": "yes",
    "chinese_title": "红石粉",
    "wiki_image_url": "https://minecraft.wiki/images/Redstone_Dust_JE2_BE2.png?8cf17"
  },
  {
    "id": "reinforced_deepslate",
    "title": "Reinforced Deepslate",
    "url": "https://minecraft.wiki/w/Reinforced_Deepslate",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/reinforced_deepslate.png",
    "renewable": "no",
    "stackable": 64,
    "tool": "none",
    "blast_resistance": 1200,
    "hardness": 55,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.19",
    "transparent": "no",
    "chinese_title": "强化深板岩",
    "wiki_image_url": "https://minecraft.wiki/images/Reinforced_Deepslate_JE1.png?96376"
  },
  {
    "id": "repeater",
    "title": "Redstone Repeater",
    "url": "https://minecraft.wiki/w/Redstone_Repeater",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/repeater.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "any_tool",
    "blast_resistance": 0,
    "hardness": 0,
    "luminous": "no",
    "full_block": "no",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "Beta 1.3",
    "transparent": "yes",
    "chinese_title": "红石中继器",
    "wiki_image_url": "https://minecraft.wiki/images/Redstone_Repeater_%28S%29_JE5_BE2.png?14213"
  },
  {
    "id": "respawn_anchor",
    "title": "Respawn Anchor",
    "url": "https://minecraft.wiki/w/Respawn_Anchor",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/respawn_anchor.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "pickaxe",
    "blast_resistance": 1200,
    "hardness": 50,
    "luminous": "partial",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.16",
    "transparent": "no",
    "chinese_title": "重生锚",
    "wiki_image_url": "https://minecraft.wiki/images/Respawn_Anchor_%280%29_JE1.png?23b57"
  },
  {
    "id": "rooted_dirt",
    "title": "Rooted Dirt",
    "url": "https://minecraft.wiki/w/Rooted_Dirt",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/rooted_dirt.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "shovel",
    "blast_resistance": 0.5,
    "hardness": 0.5,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.17",
    "transparent": "no",
    "chinese_title": "缠根泥土",
    "wiki_image_url": "https://minecraft.wiki/images/Rooted_Dirt_JE1_BE1.png?83182"
  },
  {
    "id": "sand",
    "title": "Sand",
    "url": "https://minecraft.wiki/w/Red_Sand",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/sand.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "shovel",
    "blast_resistance": 0.5,
    "hardness": 0.5,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "pre-alpha",
    "transparent": "no",
    "chinese_title": "红沙",
    "wiki_image_url": "https://minecraft.wiki/images/Red_Sand_JE3_BE2.png?19111"
  },
  {
    "id": "sandstone",
    "title": "Sandstone",
    "url": "https://minecraft.wiki/w/Chiseled_Red_Sandstone",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/sandstone.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "pickaxe",
    "blast_resistance": 0.8,
    "hardness": 0.8,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "Beta 1.2",
    "transparent": "no",
    "chinese_title": "雕纹红砂岩",
    "wiki_image_url": "https://minecraft.wiki/images/Chiseled_Red_Sandstone_JE4_BE2.png?3fe71"
  },
  {
    "id": "scaffolding",
    "title": "Scaffolding",
    "url": "https://minecraft.wiki/w/Scaffolding",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/scaffolding.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "any_tool",
    "blast_resistance": 0,
    "hardness": 0,
    "luminous": "no",
    "full_block": "no",
    "flammable": "yes",
    "fire_catch": "no",
    "initial_release": "1.14",
    "transparent": "partial",
    "chinese_title": "脚手架",
    "wiki_image_url": "https://minecraft.wiki/images/Standing_Scaffolding_JE3.png?2537c"
  },
  {
    "id": "sculk",
    "title": "Sculk",
    "url": "https://minecraft.wiki/w/Sculk",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/sculk.gif",
    "renewable": "yes",
    "stackable": 64,
    "tool": "hoe",
    "blast_resistance": 0.2,
    "hardness": 0.2,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.19",
    "transparent": "no",
    "chinese_title": "幽匿块",
    "wiki_image_url": "https://minecraft.wiki/images/Sculk_JE1_BE1.gif?e168f"
  },
  {
    "id": "sculk_catalyst",
    "title": "Sculk Catalyst",
    "url": "https://minecraft.wiki/w/Sculk_Catalyst",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/sculk_catalyst.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "hoe",
    "blast_resistance": 3,
    "hardness": 3,
    "luminous": "yes",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.19",
    "transparent": "no",
    "chinese_title": "幽匿催发体",
    "wiki_image_url": "https://minecraft.wiki/images/Sculk_Catalyst_JE1_BE1.png?5639e"
  },
  {
    "id": "sculk_sensor",
    "title": "Sculk Sensor",
    "url": "https://minecraft.wiki/w/Sculk_Sensor",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/sculk_sensor.gif",
    "renewable": "yes",
    "stackable": 64,
    "tool": "hoe",
    "blast_resistance": 1.5,
    "hardness": 1.5,
    "luminous": "yes",
    "full_block": "no",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.17",
    "transparent": "yes",
    "chinese_title": "幽匿感测体",
    "wiki_image_url": "https://minecraft.wiki/images/Sculk_Sensor_JE1.gif?e98f3"
  },
  {
    "id": "sculk_shrieker",
    "title": "Sculk Shrieker",
    "url": "https://minecraft.wiki/w/Sculk_Shrieker",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/sculk_shrieker.gif",
    "renewable": "yes",
    "stackable": 64,
    "tool": "hoe",
    "blast_resistance": 3,
    "hardness": 3,
    "luminous": "no",
    "full_block": "no",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.19",
    "transparent": "no",
    "chinese_title": "幽匿尖啸体",
    "wiki_image_url": "https://minecraft.wiki/images/Sculk_Shrieker_JE2_BE3.gif?2c4b9"
  },
  {
    "id": "sculk_vein",
    "title": "Sculk Vein",
    "url": "https://minecraft.wiki/w/Sculk_Vein",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/sculk_vein.gif",
    "renewable": "yes",
    "stackable": 64,
    "tool": "hoe",
    "blast_resistance": 0.2,
    "hardness": 0.2,
    "luminous": "no",
    "full_block": "no",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.19",
    "transparent": "yes",
    "chinese_title": "幽匿脉络",
    "wiki_image_url": "https://minecraft.wiki/images/Sculk_Vein_JE1_BE1.gif?648b6"
  },
  {
    "id": "sea_lantern",
    "title": "Sea Lantern",
    "url": "https://minecraft.wiki/w/Sea_Lantern",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/sea_lantern.gif",
    "renewable": "yes",
    "stackable": 64,
    "tool": "any_tool",
    "blast_resistance": 0.3,
    "hardness": 0.3,
    "luminous": "yes",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.8",
    "transparent": "partial",
    "chinese_title": "海晶灯",
    "wiki_image_url": "https://minecraft.wiki/images/Sea_Lantern_JE1.gif?62a76"
  },
  {
    "id": "sea_pickle",
    "title": "Sea Pickle",
    "url": "https://minecraft.wiki/w/Sea_Pickle",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/sea_pickle.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "any_tool",
    "blast_resistance": 0,
    "hardness": 0,
    "luminous": "partial",
    "full_block": "no",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.13",
    "transparent": "yes",
    "chinese_title": "海泡菜",
    "wiki_image_url": "https://minecraft.wiki/images/Sea_Pickle_1_JE1_BE1.png?03469"
  },
  {
    "id": "seagrass",
    "title": "Seagrass",
    "url": "https://minecraft.wiki/w/Seagrass",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/seagrass.gif",
    "renewable": "yes",
    "stackable": 64,
    "tool": "shears",
    "blast_resistance": 0,
    "hardness": 0,
    "luminous": "no",
    "full_block": "no",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.13",
    "transparent": "yes",
    "chinese_title": "海草",
    "wiki_image_url": "https://minecraft.wiki/images/Seagrass_JE1_BE2.gif?27838"
  },
  {
    "id": "short_grass",
    "title": "Grass",
    "url": "https://minecraft.wiki/w/Short_Grass",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/short_grass.png",
    "renewable": "partial",
    "stackable": 64,
    "tool": "shears",
    "blast_resistance": 0,
    "hardness": 0,
    "luminous": "no",
    "full_block": "no",
    "flammable": "yes",
    "fire_catch": "yes",
    "initial_release": "Beta 1.6",
    "transparent": "yes",
    "chinese_title": "草丛",
    "wiki_image_url": "https://minecraft.wiki/images/Short_Grass.png?90326"
  },
  {
    "id": "shroomlight",
    "title": "Shroomlight",
    "url": "https://minecraft.wiki/w/Shroomlight",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/shroomlight.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "hoe",
    "blast_resistance": 1,
    "hardness": 1,
    "luminous": "yes",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.16",
    "transparent": "no",
    "chinese_title": "菌光体",
    "wiki_image_url": "https://minecraft.wiki/images/Shroomlight_JE1_BE1.png?d3d69"
  },
  {
    "id": "slime_block",
    "title": "Slime Block",
    "url": "https://minecraft.wiki/w/Slime_Block",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/slime_block.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "any_tool",
    "blast_resistance": 0,
    "hardness": 0,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.8",
    "transparent": "partial",
    "chinese_title": "黏液块",
    "wiki_image_url": "https://minecraft.wiki/images/Slime_Block_JE2_BE3.png?57b93"
  },
  {
    "id": "small_dripleaf",
    "title": "Small Dripleaf",
    "url": "https://minecraft.wiki/w/Small_Dripleaf",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/small_dripleaf.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "shears",
    "blast_resistance": 0,
    "hardness": 0,
    "luminous": "no",
    "full_block": "no",
    "flammable": "yes",
    "fire_catch": "no",
    "initial_release": "1.17",
    "transparent": "yes",
    "chinese_title": "小型垂滴叶",
    "wiki_image_url": "https://minecraft.wiki/images/Small_Dripleaf_JE4.png?247f6"
  },
  {
    "id": "smithing_table",
    "title": "Smithing Table",
    "url": "https://minecraft.wiki/w/Smithing_Table",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/smithing_table.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "axe",
    "blast_resistance": 2.5,
    "hardness": 2.5,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "yes",
    "initial_release": "1.14",
    "transparent": "no",
    "chinese_title": "锻造台",
    "wiki_image_url": "https://minecraft.wiki/images/Smithing_Table_JE2_BE2.png?9d5a7"
  },
  {
    "id": "smoker",
    "title": "Smoker",
    "url": "https://minecraft.wiki/w/Smoker",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/smoker.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "pickaxe",
    "blast_resistance": 3.5,
    "hardness": 3.5,
    "luminous": "partial",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.14",
    "transparent": "partial",
    "chinese_title": "烟熏炉",
    "wiki_image_url": "https://minecraft.wiki/images/Smoker_%28S%29_JE2.png?81064"
  },
  {
    "id": "smooth_quartz",
    "title": "Smooth Quartz Block",
    "url": "https://minecraft.wiki/w/Smooth_Quartz_Block",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/smooth_quartz.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "pickaxe",
    "blast_resistance": 6,
    "hardness": 2,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.5",
    "transparent": "no",
    "chinese_title": "平滑石英块",
    "wiki_image_url": "https://minecraft.wiki/images/Smooth_Quartz_Block_JE3_BE2.png?17050"
  },
  {
    "id": "smooth_stone",
    "title": "Smooth Stone",
    "url": "https://minecraft.wiki/w/Smooth_Stone",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/smooth_stone.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "pickaxe",
    "blast_resistance": 6,
    "hardness": 2,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.14",
    "transparent": "no",
    "chinese_title": "平滑石头",
    "wiki_image_url": "https://minecraft.wiki/images/Smooth_Stone_JE2_BE2.png?52fd2"
  },
  {
    "id": "sniffer_egg",
    "title": "Sniffer Egg",
    "url": "https://minecraft.wiki/w/Sniffer_Egg",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/sniffer_egg.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "any_tool",
    "blast_resistance": 0.5,
    "hardness": 0.5,
    "luminous": "no",
    "full_block": "no",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.20",
    "transparent": "no",
    "chinese_title": "嗅探兽蛋",
    "wiki_image_url": "https://minecraft.wiki/images/Sniffer_Egg_JE1_BE1.png?8ff5c"
  },
  {
    "id": "snow",
    "title": "Snow",
    "url": "https://minecraft.wiki/w/Snow",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/snow.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "shovel",
    "blast_resistance": 0.1,
    "hardness": 0.1,
    "luminous": "no",
    "full_block": "no",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "Alpha 1.0.4",
    "transparent": "yes",
    "chinese_title": "雪",
    "wiki_image_url": "https://minecraft.wiki/images/Snow_%28layers_1%29_JE3_BE3.png?bf2e0"
  },
  {
    "id": "snow_block",
    "title": "Snow Block",
    "url": "https://minecraft.wiki/w/Snow_Block",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/snow_block.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "shovel",
    "blast_resistance": 0.2,
    "hardness": 0.2,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "Alpha 1.0.5",
    "transparent": "no",
    "chinese_title": "雪块",
    "wiki_image_url": "https://minecraft.wiki/images/Snow_Block_JE2_BE2.png?e7ace"
  },
  {
    "id": "soul_sand",
    "title": "Soul Sand",
    "url": "https://minecraft.wiki/w/Soul_Sand",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/soul_sand.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "shovel",
    "blast_resistance": 0.5,
    "hardness": 0.5,
    "luminous": "no",
    "full_block": "no",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "Alpha 1.2.0",
    "transparent": "no",
    "chinese_title": "灵魂沙",
    "wiki_image_url": "https://minecraft.wiki/images/Soul_Sand_JE2_BE2.png?2334d"
  },
  {
    "id": "soul_soil",
    "title": "Soul Soil",
    "url": "https://minecraft.wiki/w/Soul_Soil",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/soul_soil.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "shovel",
    "blast_resistance": 0.5,
    "hardness": 0.5,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.16",
    "transparent": "no",
    "chinese_title": "灵魂土",
    "wiki_image_url": "https://minecraft.wiki/images/Soul_Soil_JE1_BE1.png?b79a3"
  },
  {
    "id": "spawner",
    "title": "Monster Spawner",
    "url": "https://minecraft.wiki/w/Monster_Spawner",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/spawner.png",
    "renewable": "no",
    "stackable": 64,
    "tool": "pickaxe",
    "blast_resistance": 5,
    "hardness": 5,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "pre-alpha",
    "transparent": "partial",
    "chinese_title": "刷怪笼",
    "wiki_image_url": "https://minecraft.wiki/images/Spawner_with_fire.png?43e81"
  },
  {
    "id": "sponge",
    "title": "Sponge",
    "url": "https://minecraft.wiki/w/Sponge",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/sponge.png",
    "renewable": "no",
    "stackable": 64,
    "tool": "hoe",
    "blast_resistance": 0.6,
    "hardness": 0.6,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "pre-alpha",
    "transparent": "no",
    "chinese_title": "海绵",
    "wiki_image_url": "https://minecraft.wiki/images/Sponge_JE3_BE3.png?ded7d"
  },
  {
    "id": "spore_blossom",
    "title": "Spore Blossom",
    "url": "https://minecraft.wiki/w/Spore_Blossom",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/spore_blossom.png",
    "renewable": "no",
    "stackable": 64,
    "tool": "any_tool",
    "blast_resistance": 0,
    "hardness": 0,
    "luminous": "no",
    "full_block": "no",
    "flammable": "yes",
    "fire_catch": "no",
    "initial_release": "1.17",
    "transparent": "no",
    "chinese_title": "孢子花",
    "wiki_image_url": "https://minecraft.wiki/images/Spore_Blossom_JE1.png?65c9d"
  },
  {
    "id": "stone",
    "title": "Stone",
    "url": "https://minecraft.wiki/w/Stone",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/stone.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "pickaxe",
    "blast_resistance": 6,
    "hardness": 1.5,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "pre-alpha",
    "transparent": "no",
    "chinese_title": "石头",
    "wiki_image_url": "https://minecraft.wiki/images/Stone_JE8.png?b5028"
  },
  {
    "id": "stone_bricks",
    "title": "Stone Bricks",
    "url": "https://minecraft.wiki/w/Chiseled_Stone_Bricks",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/stone_bricks.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "pickaxe",
    "blast_resistance": 6,
    "hardness": 1.5,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "Beta 1.9",
    "transparent": "no",
    "chinese_title": "雕纹石砖",
    "wiki_image_url": "https://minecraft.wiki/images/Chiseled_Stone_Bricks_JE3_BE2.png?2dae1"
  },
  {
    "id": "stonecutter",
    "title": "Stonecutter",
    "url": "https://minecraft.wiki/w/Stonecutter",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/stonecutter.gif",
    "renewable": "yes",
    "stackable": 64,
    "tool": "pickaxe",
    "blast_resistance": 3.5,
    "hardness": 3.5,
    "luminous": "no",
    "full_block": "no",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.14",
    "transparent": "no",
    "chinese_title": "切石机",
    "wiki_image_url": "https://minecraft.wiki/images/Stonecutter_JE2_BE1.gif?bb269"
  },
  {
    "id": "structure_block",
    "title": "Structure Block",
    "url": "https://minecraft.wiki/w/Structure_Block",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/structure_block.png",
    "renewable": "no",
    "stackable": 64,
    "tool": "none",
    "blast_resistance": 3600000,
    "hardness": -1,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.9",
    "transparent": "no",
    "chinese_title": "结构方块",
    "wiki_image_url": "https://minecraft.wiki/images/Structure_Block_JE2_BE1.png?559c6"
  },
  {
    "id": "structure_void",
    "title": "Structure Void",
    "url": "https://minecraft.wiki/w/Structure_Void",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/structure_void.png",
    "renewable": "no",
    "stackable": 64,
    "tool": "none",
    "blast_resistance": 3600000,
    "hardness": -1,
    "luminous": "no",
    "full_block": "no",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.10",
    "transparent": "yes",
    "chinese_title": "结构空位",
    "wiki_image_url": "https://minecraft.wiki/images/Structure_Void_%28held%29_BE3.png?f1f0b"
  },
  {
    "id": "sugar_cane",
    "title": "Sugar Cane",
    "url": "https://minecraft.wiki/w/Sugar_Cane",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/sugar_cane.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "any_tool",
    "blast_resistance": 0,
    "hardness": 0,
    "luminous": "no",
    "full_block": "no",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "Alpha 1.0.11",
    "transparent": "yes",
    "chinese_title": "甘蔗",
    "wiki_image_url": "https://minecraft.wiki/images/Sugar_Cane.png?a5cd2"
  },
  {
    "id": "suspicious_gravel",
    "title": "Suspicious Block",
    "url": "https://minecraft.wiki/w/Suspicious_Gravel",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/suspicious_gravel.png",
    "renewable": "no",
    "stackable": 64,
    "tool": "brush, shovel",
    "blast_resistance": 0.25,
    "hardness": 0.25,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.20",
    "transparent": "no",
    "chinese_title": "可疑的方块",
    "wiki_image_url": "https://minecraft.wiki/images/Suspicious_Gravel_BE1_%28dusted_0%29.png?ff854"
  },
  {
    "id": "sweet_berry_bush",
    "title": "Sweet Berries",
    "url": "https://minecraft.wiki/w/Sweet_Berry_Bush",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/sweet_berry_bush.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "any_tool",
    "blast_resistance": 0,
    "hardness": 0,
    "luminous": "no",
    "full_block": "no",
    "flammable": "yes",
    "fire_catch": "no",
    "initial_release": "1.14",
    "transparent": "yes",
    "chinese_title": "甜浆果",
    "wiki_image_url": "https://minecraft.wiki/images/Sweet_Berries_JE1_BE1.png?d29d1"
  },
  {
    "id": "target",
    "title": "Target",
    "url": "https://minecraft.wiki/w/Target",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/target.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "hoe",
    "blast_resistance": 0.5,
    "hardness": 0.5,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "yes",
    "fire_catch": "no",
    "initial_release": "1.16",
    "transparent": "no",
    "chinese_title": "标靶",
    "wiki_image_url": "https://minecraft.wiki/images/Target_JE1_BE1.png?68c73"
  },
  {
    "id": "tinted_glass",
    "title": "Tinted Glass",
    "url": "https://minecraft.wiki/w/Tinted_Glass",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/tinted_glass.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "any_tool",
    "blast_resistance": 0.3,
    "hardness": 0.3,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.17",
    "transparent": "partial",
    "chinese_title": "遮光玻璃",
    "wiki_image_url": "https://minecraft.wiki/images/Tinted_Glass_JE2_BE1.png?7eaed"
  },
  {
    "id": "tnt",
    "title": "TNT",
    "url": "https://minecraft.wiki/w/TNT",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/tnt.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "any_tool",
    "blast_resistance": 0,
    "hardness": 0,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "yes",
    "fire_catch": "yes",
    "initial_release": "pre-alpha",
    "transparent": "no",
    "chinese_title": "TNT",
    "wiki_image_url": "https://minecraft.wiki/images/TNT_JE3_BE2.png?62989"
  },
  {
    "id": "torch",
    "title": "Torch",
    "url": "https://minecraft.wiki/w/Torch",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/torch.gif",
    "renewable": "yes",
    "stackable": 64,
    "tool": "any_tool",
    "blast_resistance": 0,
    "hardness": 0,
    "luminous": "yes",
    "full_block": "no",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "pre-alpha",
    "transparent": "yes",
    "chinese_title": "火把",
    "wiki_image_url": "https://minecraft.wiki/images/Torch.gif?8e1d4"
  },
  {
    "id": "torchflower",
    "title": "Torchflower Seeds",
    "url": "https://minecraft.wiki/w/Torchflower",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/torchflower.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "any_tool",
    "blast_resistance": 0,
    "hardness": 0,
    "luminous": "no",
    "full_block": "no",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.20",
    "transparent": "yes",
    "chinese_title": "火把花",
    "wiki_image_url": "https://minecraft.wiki/images/Torchflower_JE1_BE1.png?fa91e"
  },
  {
    "id": "trapped_chest",
    "title": "Trapped Chest",
    "url": "https://minecraft.wiki/w/Trapped_Chest",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/trapped_chest.gif",
    "renewable": "yes",
    "stackable": 64,
    "tool": "axe",
    "blast_resistance": 2.5,
    "hardness": 2.5,
    "luminous": "no",
    "full_block": "no",
    "flammable": "no",
    "fire_catch": "yes",
    "initial_release": "1.5",
    "transparent": "yes",
    "chinese_title": "陷阱箱",
    "wiki_image_url": "https://minecraft.wiki/images/Trapped_Chest.gif?e943d"
  },
  {
    "id": "trial_spawner",
    "title": "Trial Spawner",
    "url": "https://minecraft.wiki/w/Trial_Spawner",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/trial_spawner.webp",
    "renewable": "no",
    "stackable": 64,
    "tool": "none",
    "blast_resistance": 50,
    "hardness": 50,
    "luminous": "partial",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.21",
    "transparent": "partial",
    "chinese_title": "试炼刷怪笼",
    "wiki_image_url": "https://minecraft.wiki/images/Active_Trial_Spawner_JE4_BE3.png?d1d81"
  },
  {
    "id": "tripwire",
    "title": "String",
    "url": "https://minecraft.wiki/w/Tripwire",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/tripwire.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "any_tool",
    "blast_resistance": 0,
    "hardness": 0,
    "luminous": "no",
    "full_block": "no",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.3.1",
    "transparent": "yes",
    "chinese_title": "线",
    "wiki_image_url": "https://minecraft.wiki/images/String_JE2_BE2.png?25d69"
  },
  {
    "id": "tripwire_hook",
    "title": "Tripwire Hook",
    "url": "https://minecraft.wiki/w/Tripwire_Hook",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/tripwire_hook.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "any_tool",
    "blast_resistance": 0,
    "hardness": 0,
    "luminous": "no",
    "full_block": "no",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.3.1",
    "transparent": "yes",
    "chinese_title": "绊线钩",
    "wiki_image_url": "https://minecraft.wiki/images/Tripwire_Hook_%28S%29_JE6_BE2.png?abf00"
  },
  {
    "id": "tuff",
    "title": "Tuff",
    "url": "https://minecraft.wiki/w/Tuff",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/tuff.png",
    "renewable": "no",
    "stackable": 64,
    "tool": "pickaxe",
    "blast_resistance": 6,
    "hardness": 1.5,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.17",
    "transparent": "no",
    "chinese_title": "凝灰岩",
    "wiki_image_url": "https://minecraft.wiki/images/Tuff.png?cd2f1"
  },
  {
    "id": "turtle_egg",
    "title": "Turtle Egg",
    "url": "https://minecraft.wiki/w/Turtle_Egg",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/turtle_egg.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "any_tool",
    "blast_resistance": 0.5,
    "hardness": 0.5,
    "luminous": "no",
    "full_block": "no",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.13",
    "transparent": "no",
    "chinese_title": "海龟蛋",
    "wiki_image_url": "https://minecraft.wiki/images/Turtle_Egg_%28item%29_JE2_BE2.png?770bd"
  },
  {
    "id": "twisting_vines",
    "title": "Twisting Vines",
    "url": "https://minecraft.wiki/w/Twisting_Vines",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/twisting_vines.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "any_tool",
    "blast_resistance": 0,
    "hardness": 0,
    "luminous": "no",
    "full_block": "no",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.16",
    "transparent": "yes",
    "chinese_title": "缠怨藤",
    "wiki_image_url": "https://minecraft.wiki/images/Twisting_Vines_JE1_BE1.png?88749"
  },
  {
    "id": "vault",
    "title": "Vault",
    "url": "https://minecraft.wiki/w/Vault",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/vault.png",
    "renewable": "no",
    "stackable": 64,
    "tool": "none",
    "blast_resistance": 50,
    "hardness": 50,
    "luminous": "partial",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.21",
    "transparent": "partial",
    "chinese_title": "宝库",
    "wiki_image_url": "https://minecraft.wiki/images/Vault_JE6_BE5.png?3c766"
  },
  {
    "id": "vine",
    "title": "Vines",
    "url": "https://minecraft.wiki/w/Vines",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/vine.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "shears, sword, axe",
    "blast_resistance": 0.2,
    "hardness": 0.2,
    "luminous": "no",
    "full_block": "no",
    "flammable": "yes",
    "fire_catch": "yes",
    "initial_release": "Beta 1.8",
    "transparent": "yes",
    "chinese_title": "藤蔓",
    "wiki_image_url": "https://minecraft.wiki/images/Vines_JE2_BE2.png?52f01"
  },
  {
    "id": "warped_wart_block",
    "title": "Warped Wart Block",
    "url": "https://minecraft.wiki/w/Warped_Wart_Block",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/warped_wart_block.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "hoe",
    "blast_resistance": 1,
    "hardness": 1,
    "luminous": "no",
    "full_block": "yes",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.16",
    "transparent": "no",
    "chinese_title": "诡异疣块",
    "wiki_image_url": "https://minecraft.wiki/images/Warped_Wart_Block_JE1_BE1.png?aff14"
  },
  {
    "id": "weeping_vines",
    "title": "Weeping Vines",
    "url": "https://minecraft.wiki/w/Weeping_Vines",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/weeping_vines.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "any_tool",
    "blast_resistance": 0,
    "hardness": 0,
    "luminous": "no",
    "full_block": "no",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.16",
    "transparent": "yes",
    "chinese_title": "垂泪藤",
    "wiki_image_url": "https://minecraft.wiki/images/Weeping_Vines_Plant_JE1.png?2db80"
  },
  {
    "id": "wheat",
    "title": "Wheat Seeds",
    "url": "https://minecraft.wiki/w/Wheat_Crops",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/wheat.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "any_tool",
    "blast_resistance": 0,
    "hardness": 0,
    "luminous": "no",
    "full_block": "no",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "pre-alpha",
    "transparent": "yes",
    "chinese_title": "小麦种子",
    "wiki_image_url": "https://minecraft.wiki/images/Wheat_Seeds_JE1_BE1.png?68de8"
  },
  {
    "id": "wither_rose",
    "title": "Wither Rose",
    "url": "https://minecraft.wiki/w/Wither_Rose",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/wither_rose.png",
    "renewable": "yes",
    "stackable": 64,
    "tool": "any_tool",
    "blast_resistance": 0,
    "hardness": 0,
    "luminous": "no",
    "full_block": "no",
    "flammable": "yes",
    "fire_catch": "no",
    "initial_release": "1.14",
    "transparent": "yes",
    "chinese_title": "凋灵玫瑰",
    "wiki_image_url": "https://minecraft.wiki/images/Wither_Rose_JE1_BE1.png?05d3b"
  },
  {
    "id": "dried_ghast",
    "title": "Dried Ghast",
    "url": "https://minecraft.wiki/w/Dried_Ghast",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/dried_ghast.webp",
    "renewable": "yes",
    "stackable": 64,
    "tool": "any_tool",
    "blast_resistance": 0,
    "hardness": 0,
    "luminous": "no",
    "full_block": "no",
    "flammable": "no",
    "fire_catch": "no",
    "initial_release": "1.21.6",
    "transparent": "yes",
    "chinese_title": "失水恶魂",
    "wiki_image_url": "https://minecraft.wiki/images/Dried_Ghast_JE1_BE1.png?04b9a"
  },
  {
    "id": "copper_chest",
    "title": "Copper Chest",
    "url": "https://minecraft.wiki/w/Copper_Chest",
    "renewable": "yes",
    "stackable": 64,
    "tool": "pickaxe",
    "blast_resistance": 6,
    "hardness": 3,
    "luminous": "no",
    "full_block": "no",
    "flammable": "no",
    "fire_catch": "no",
    "transparent": "yes",
    "initial_release": "1.21.9",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/copper_chest.gif",
    "chinese_title": "铜箱子",
    "wiki_image_url": "https://minecraft.wiki/images/Copper_Chest_BE2.gif?90501"
  },
  {
    "id": "copper_golem_statue",
    "title": "Copper Golem Statue",
    "url": "https://minecraft.wiki/w/Copper_Golem_Statue",
    "renewable": "yes",
    "stackable": 64,
    "tool": "pickaxe",
    "blast_resistance": 6,
    "hardness": 3,
    "luminous": "no",
    "full_block": "no",
    "flammable": "no",
    "fire_catch": "no",
    "transparent": "yes",
    "initial_release": "1.21.9",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/copper_golem_statue.png",
    "chinese_title": "铜傀儡像",
    "wiki_image_url": "https://minecraft.wiki/images/Copper_Golem_Statue_BE1.png?afdf5"
  },
  {
    "id": "shelf",
    "title": "Shelf",
    "url": "https://minecraft.wiki/w/Shelf",
    "renewable": "yes",
    "stackable": 64,
    "tool": "axe",
    "blast_resistance": 3,
    "hardness": 2,
    "luminous": "no",
    "full_block": "no",
    "flammable": "partial",
    "fire_catch": "partial",
    "transparent": "yes",
    "initial_release": "1.21.9",
    "image_url": "https://www.mcdle.net/gamedata/blockImages/shelf.png",
    "chinese_title": "展示架",
    "wiki_image_url": "https://minecraft.wiki/images/Oak_Shelf_JE1_BE2.png?b1719"
  }
] as const;

export const itemData: ItemData[] = [
  {
    "id": "breeze_rod",
    "title": "Breeze Rod",
    "url": "https://minecraft.wiki/w/Breeze_Rod",
    "image_url": "/itemImages/breeze_rod.webp",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "1.21",
    "obtaining": [
      "Mob loot"
    ],
    "usage": [
      "Crafting ingredient",
      "Repairing",
      "Brewing ingredient"
    ],
    "inventory_categories": [
      "ingredients"
    ],
    "recipe": [
      "none"
    ],
    "loot": [
      "mob"
    ],
    "chinese_title": "旋风棒",
    "wiki_image_url": "https://minecraft.wiki/images/Breeze_Rod_JE1_BE1.png?28670"
  },
  {
    "id": "boat",
    "title": "Boat",
    "url": "https://minecraft.wiki/w/Boat",
    "image_url": "/itemImages/boat.png",
    "renewable": "yes",
    "stackable": 1,
    "rarity": "common",
    "initial_release": "Alpha 1.0.6",
    "obtaining": [
      "Crafting"
    ],
    "usage": [
      "Crafting",
      "Trading",
      "Fuel",
      "Transportation"
    ],
    "inventory_categories": [
      "tools_and_utilities"
    ],
    "recipe": [
      "crafting_table"
    ],
    "loot": [
      "none"
    ],
    "chinese_title": "船",
    "wiki_image_url": "https://minecraft.wiki/images/thumb/Oak_Boat_JE4_BE2.png/1200px-Oak_Boat_JE4_BE2.png?114d6"
  },
  {
    "id": "chest_boat",
    "title": "Boat with Chest",
    "url": "https://minecraft.wiki/w/Boat_with_Chest",
    "image_url": "/itemImages/chest_boat.png",
    "renewable": "yes",
    "stackable": 1,
    "rarity": "common",
    "initial_release": "1.19",
    "obtaining": [
      "Crafting"
    ],
    "usage": [
      "Fuel",
      "Transportation"
    ],
    "inventory_categories": [
      "tools_and_utilities",
      "redstone_blocks"
    ],
    "recipe": [
      "crafting_table"
    ],
    "loot": [
      "none"
    ],
    "chinese_title": "运输船",
    "wiki_image_url": "https://minecraft.wiki/images/Oak_Boat_with_Chest_JE2_BE1.png?6588c"
  },
  {
    "id": "armor_stand",
    "title": "Armor Stand",
    "url": "https://minecraft.wiki/w/Armor_Stand",
    "image_url": "/itemImages/armor_stand.png",
    "renewable": "yes",
    "stackable": 16,
    "rarity": "common",
    "initial_release": "1.8",
    "obtaining": [
      "Breaking",
      "Natural generation",
      "Crafting"
    ],
    "usage": [
      "Decoration"
    ],
    "inventory_categories": [
      "functional_blocks",
      "redstone_blocks"
    ],
    "recipe": [
      "crafting_table"
    ],
    "loot": [
      "none"
    ],
    "chinese_title": "盔甲架",
    "wiki_image_url": "https://minecraft.wiki/images/Armor_Stand_JE5.png?d662f"
  },
  {
    "id": "beetroot_seeds",
    "title": "Beetroot Seeds",
    "url": "https://minecraft.wiki/w/Beetroot_Seeds",
    "image_url": "/itemImages/beetroot_seeds.png",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "1.9",
    "obtaining": [
      "Breaking",
      "Natural generation",
      "Chest loot",
      "Trading"
    ],
    "usage": [
      "Farming",
      "Breeding",
      "Taming",
      "Composting",
      "Trading"
    ],
    "inventory_categories": [
      "natural_blocks"
    ],
    "recipe": [
      "none"
    ],
    "loot": [
      "container",
      "trading"
    ],
    "chinese_title": "甜菜种子",
    "wiki_image_url": "https://minecraft.wiki/images/Beetroot_Seeds_JE2_BE2.png?51d7b"
  },
  {
    "id": "bundle",
    "title": "Bundle",
    "url": "https://minecraft.wiki/w/Bundle",
    "image_url": "/itemImages/bundle.png",
    "renewable": "yes",
    "stackable": 1,
    "rarity": "common",
    "initial_release": "1.21.2",
    "obtaining": [
      "Crafting"
    ],
    "usage": [
      "Storage"
    ],
    "inventory_categories": [
      "tools_and_utilities"
    ],
    "recipe": [
      "crafting_table"
    ],
    "loot": [
      "none"
    ],
    "chinese_title": "收纳袋",
    "wiki_image_url": "https://minecraft.wiki/images/Bundle_JE2_BE2.png?0aba5"
  },
  {
    "id": "experience_bottle",
    "title": "Bottle o' Enchanting",
    "url": "https://minecraft.wiki/w/Bottle_o%27_Enchanting",
    "image_url": "/itemImages/experience_bottle.gif",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "uncommon",
    "initial_release": "1.2.1",
    "obtaining": [
      "Chest loot",
      "Trading"
    ],
    "usage": [
      "Experience"
    ],
    "inventory_categories": [
      "ingredients"
    ],
    "recipe": [
      "none"
    ],
    "loot": [
      "container",
      "trading"
    ],
    "chinese_title": "附魔之瓶",
    "wiki_image_url": "https://minecraft.wiki/images/Bottle_o%27_Enchanting.gif?ad9ab"
  },
  {
    "id": "bow",
    "title": "Bow",
    "url": "https://minecraft.wiki/w/Bow",
    "image_url": "/itemImages/bow.png",
    "renewable": "yes",
    "stackable": 1,
    "rarity": "common",
    "initial_release": "pre-alpha",
    "obtaining": [
      "Crafting",
      "Mob loot",
      "Trading",
      "Fishing"
    ],
    "usage": [
      "Weapon",
      "Crafting ingredient",
      "Enchantments",
      "Repairing",
      "Fuel"
    ],
    "inventory_categories": [
      "combat"
    ],
    "recipe": [
      "crafting_table"
    ],
    "loot": [
      "mob",
      "fishing",
      "container",
      "trading"
    ],
    "chinese_title": "弓",
    "wiki_image_url": "https://minecraft.wiki/images/Bow_JE2_BE1.png?c428a"
  },
  {
    "id": "bucket",
    "title": "Bucket",
    "url": "https://minecraft.wiki/w/Bucket",
    "image_url": "/itemImages/bucket.png",
    "renewable": "yes",
    "stackable": 16,
    "rarity": "common",
    "initial_release": "pre-alpha",
    "obtaining": [
      "Chest loot",
      "Crafting"
    ],
    "usage": [
      "Fillable"
    ],
    "inventory_categories": [
      "tools_and_utilities"
    ],
    "recipe": [
      "crafting_table",
      "furnace"
    ],
    "loot": [
      "container"
    ],
    "chinese_title": "铁桶",
    "wiki_image_url": "https://minecraft.wiki/images/Bucket_JE2_BE2.png?cf507"
  },
  {
    "id": "aquatic_mob_bucket",
    "title": "Bucket of Aquatic Mob",
    "url": "https://minecraft.wiki/w/Bucket_of_Axolotl",
    "image_url": "/itemImages/aquatic_mob_bucket.png",
    "renewable": "yes",
    "stackable": 1,
    "rarity": "common",
    "initial_release": "1.13",
    "obtaining": [
      "Trading",
      "Tactical fishing"
    ],
    "usage": [
      "Bucket of tropical fish",
      "Bucket of axolotl",
      "Bucket of tadpole"
    ],
    "inventory_categories": [
      "tools_and_utilities"
    ],
    "recipe": [
      "none"
    ],
    "loot": [
      "trading"
    ],
    "chinese_title": "美西螈桶",
    "wiki_image_url": "https://minecraft.wiki/images/Bucket_of_Axolotl_JE1_BE1.png?a9d5c"
  },
  {
    "id": "carrot",
    "title": "Carrot",
    "url": "https://minecraft.wiki/w/Carrot",
    "image_url": "/itemImages/carrot.png",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "1.4.2",
    "obtaining": [
      "Breaking",
      "Natural generation",
      "Mob loot",
      "Chest loot"
    ],
    "usage": [
      "Farming",
      "Breeding",
      "Trading",
      "Crafting ingredient",
      "Composting"
    ],
    "inventory_categories": [
      "food_and_drinks"
    ],
    "recipe": [
      "none"
    ],
    "loot": [
      "container",
      "mob"
    ],
    "chinese_title": "胡萝卜",
    "wiki_image_url": "https://minecraft.wiki/images/Carrot_JE3_BE2.png?5e9c8"
  },
  {
    "id": "cocoa_beans",
    "title": "Cocoa Beans",
    "url": "https://minecraft.wiki/w/Cocoa_Beans",
    "image_url": "/itemImages/cocoa_beans.png",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "Beta 1.2",
    "obtaining": [
      "Breaking"
    ],
    "usage": [
      "Farming",
      "Composting",
      "Crafting ingredient"
    ],
    "inventory_categories": [
      "natural_blocks"
    ],
    "recipe": [
      "none"
    ],
    "loot": [
      "none"
    ],
    "chinese_title": "可可豆",
    "wiki_image_url": "https://minecraft.wiki/images/Cocoa_Beans_JE4_BE3.png?48f20"
  },
  {
    "id": "crossbow",
    "title": "Crossbow",
    "url": "https://minecraft.wiki/w/Crossbow",
    "image_url": "/itemImages/crossbow.png",
    "renewable": "yes",
    "stackable": 1,
    "rarity": "common",
    "initial_release": "1.14",
    "obtaining": [
      "Crafting",
      "Generated loot",
      "Mob loot",
      "Trading"
    ],
    "usage": [
      "Weapon",
      "Fireworks",
      "Repairing",
      "Enchantments",
      "Fuel"
    ],
    "inventory_categories": [
      "combat"
    ],
    "recipe": [
      "crafting_table"
    ],
    "loot": [
      "container",
      "mob",
      "trading"
    ],
    "chinese_title": "弩",
    "wiki_image_url": "https://minecraft.wiki/images/Crossbow.png?0da8f"
  },
  {
    "id": "egg",
    "title": "Egg",
    "url": "https://minecraft.wiki/w/Egg",
    "image_url": "/itemImages/egg.png",
    "renewable": "yes",
    "stackable": 16,
    "rarity": "common",
    "initial_release": "Alpha 1.0.14",
    "obtaining": [
      "Mob loot",
      "Chest loot"
    ],
    "usage": [
      "Crafting ingredient",
      "combat",
      "Spawning chickens"
    ],
    "inventory_categories": [
      "combat",
      "ingredients"
    ],
    "recipe": [
      "none"
    ],
    "loot": [
      "container",
      "mob"
    ],
    "chinese_title": "鸡蛋",
    "wiki_image_url": "https://minecraft.wiki/images/Egg_JE2_BE2.png?495d9"
  },
  {
    "id": "end_crystal",
    "title": "End Crystal",
    "url": "https://minecraft.wiki/w/End_Crystal",
    "image_url": "/itemImages/end_crystal.gif",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "1.9",
    "obtaining": [
      "Crafting"
    ],
    "usage": [
      "Healing the ender dragon",
      "Respawning the ender dragon",
      "Explosions",
      "Beams",
      "Properties"
    ],
    "inventory_categories": [
      "functional_blocks",
      "combat"
    ],
    "recipe": [
      "crafting_table"
    ],
    "loot": [
      "none"
    ],
    "chinese_title": "末地水晶",
    "wiki_image_url": "https://minecraft.wiki/images/End_Crystal_JE2.gif?04adf"
  },
  {
    "id": "ender_pearl",
    "title": "Ender Pearl",
    "url": "https://minecraft.wiki/w/Ender_Pearl",
    "image_url": "/itemImages/ender_pearl.png",
    "renewable": "yes",
    "stackable": 16,
    "rarity": "common",
    "initial_release": "Beta 1.8",
    "obtaining": [
      "Mob loot",
      "Chest loot",
      "Trading",
      "Bartering"
    ],
    "usage": [
      "Teleporting",
      "Stasis chamber",
      "Spawning endermites",
      "Crafting ingredient"
    ],
    "inventory_categories": [
      "tools_and_utilities",
      "ingredients"
    ],
    "recipe": [
      "none"
    ],
    "loot": [
      "container",
      "mob",
      "trading"
    ],
    "chinese_title": "末影珍珠",
    "wiki_image_url": "https://minecraft.wiki/images/Ender_Pearl_JE3_BE2.png?829a7"
  },
  {
    "id": "ender_eye",
    "title": "Eye of Ender",
    "url": "https://minecraft.wiki/w/Eye_of_Ender",
    "image_url": "/itemImages/ender_eye.png",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "1.0.0",
    "obtaining": [
      "Crafting"
    ],
    "usage": [
      "Locating strongholds",
      "Activating end portals",
      "Crafting ingredient"
    ],
    "inventory_categories": [
      "functional_blocks",
      "tools_and_utilities",
      "ingredients"
    ],
    "recipe": [
      "crafting_table"
    ],
    "loot": [
      "none"
    ],
    "chinese_title": "末影之眼",
    "wiki_image_url": "https://minecraft.wiki/images/Eye_of_Ender_JE2_BE2.png?3e29b"
  },
  {
    "id": "fire_charge",
    "title": "Fire Charge",
    "url": "https://minecraft.wiki/w/Fire_Charge",
    "image_url": "/itemImages/fire_charge.png",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "1.2.1",
    "obtaining": [
      "Chest loot",
      "Crafting",
      "Bartering"
    ],
    "usage": [
      "Crafting ingredient"
    ],
    "inventory_categories": [
      "tools_and_utilities",
      "ingredients"
    ],
    "recipe": [
      "crafting_table"
    ],
    "loot": [
      "container",
      "trading"
    ],
    "chinese_title": "火焰弹",
    "wiki_image_url": "https://minecraft.wiki/images/Fire_Charge_JE2_BE2.png?07e21"
  },
  {
    "id": "firework_rocket",
    "title": "Firework Rocket",
    "url": "https://minecraft.wiki/w/Firework_Rocket",
    "image_url": "/itemImages/firework_rocket.png",
    "renewable": "partial",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "1.4.6",
    "obtaining": [
      "Crafting"
    ],
    "usage": [
      "Launching fireworks",
      "Elytra",
      "Crossbow"
    ],
    "inventory_categories": [
      "tools_and_utilities",
      "combat"
    ],
    "recipe": [
      "crafting_table"
    ],
    "loot": [
      "none"
    ],
    "chinese_title": "烟花火箭",
    "wiki_image_url": "https://minecraft.wiki/images/Firework_Rocket_JE2_BE2.png?fa5d7"
  },
  {
    "id": "fishing_rod",
    "title": "Fishing Rod",
    "url": "https://minecraft.wiki/w/Fishing_Rod",
    "image_url": "/itemImages/fishing_rod.png",
    "renewable": "yes",
    "stackable": 1,
    "rarity": "common",
    "initial_release": "Alpha 1.1.1",
    "obtaining": [
      "Mob loot",
      "Chest loot",
      "Crafting",
      "Fishing",
      "Trading",
      "Carrot/warped fungus on a stick"
    ],
    "usage": [
      "Fishing",
      "Crafting ingredient",
      "Hooking mobs and other entities",
      "Fuel",
      "Other usage",
      "Enchantments"
    ],
    "inventory_categories": [
      "tools_and_utilities"
    ],
    "recipe": [
      "crafting_table"
    ],
    "loot": [
      "container",
      "mob",
      "fishing",
      "trading"
    ],
    "chinese_title": "钓鱼竿",
    "wiki_image_url": "https://minecraft.wiki/images/Fishing_Rod_JE2_BE2.png?4862d"
  },
  {
    "id": "flint_and_steel",
    "title": "Flint and Steel",
    "url": "https://minecraft.wiki/w/Flint_and_Steel",
    "image_url": "/itemImages/flint_and_steel.png",
    "renewable": "yes",
    "stackable": 1,
    "rarity": "common",
    "initial_release": "pre-alpha",
    "obtaining": [
      "Chest loot",
      "Crafting"
    ],
    "usage": [
      "Igniting",
      "Enchantments"
    ],
    "inventory_categories": [
      "tools_and_utilities"
    ],
    "recipe": [
      "crafting_table"
    ],
    "loot": [
      "container"
    ],
    "chinese_title": "打火石",
    "wiki_image_url": "https://minecraft.wiki/images/Flint_and_Steel_JE4_BE2.png?1aaaf"
  },
  {
    "id": "glow_berries",
    "title": "Glow Berries",
    "url": "https://minecraft.wiki/w/Glow_Berries",
    "image_url": "/itemImages/glow_berries.png",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "1.17",
    "obtaining": [
      "Natural generation",
      "Chest loot",
      "Post-generation"
    ],
    "usage": [
      "Placement",
      "Growth",
      "Food",
      "Light",
      "Composting",
      "Breeding"
    ],
    "inventory_categories": [
      "natural_blocks",
      "food_and_drinks"
    ],
    "recipe": [
      "none"
    ],
    "loot": [
      "container"
    ],
    "chinese_title": "发光浆果",
    "wiki_image_url": "https://minecraft.wiki/images/Glow_Berries_JE1_BE1.png?7c9cc"
  },
  {
    "id": "item_frame",
    "title": "Item Frame",
    "url": "https://minecraft.wiki/w/Glow_Item_Frame",
    "image_url": "/itemImages/item_frame.png",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "1.4.2",
    "obtaining": [
      "Breaking",
      "Natural generation",
      "Crafting",
      "Trading"
    ],
    "usage": [
      "Item display",
      "Rotation",
      "Glow item frames"
    ],
    "inventory_categories": [
      "functional_blocks"
    ],
    "recipe": [
      "crafting_table"
    ],
    "loot": [
      "trading"
    ],
    "chinese_title": "物品展示框",
    "wiki_image_url": "https://minecraft.wiki/images/Glow_Item_Frame_JE1_BE3.png?804f0"
  },
  {
    "id": "kelp",
    "title": "Kelp",
    "url": "https://minecraft.wiki/w/Kelp",
    "image_url": "/itemImages/kelp.png",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "1.13",
    "obtaining": [
      "Breaking",
      "Natural generation",
      "Trading"
    ],
    "usage": [
      "Cooking ingredient",
      "Composting",
      "Growth mechanics",
      "Farming"
    ],
    "inventory_categories": [
      "natural_blocks"
    ],
    "recipe": [
      "none"
    ],
    "loot": [
      "trading"
    ],
    "chinese_title": "海带",
    "wiki_image_url": "https://minecraft.wiki/images/Kelp_JE3_BE2.gif?24913"
  },
  {
    "id": "lava_bucket",
    "title": "Lava Bucket",
    "url": "https://minecraft.wiki/w/Lava_Bucket",
    "image_url": "/itemImages/lava_bucket.png",
    "renewable": "yes",
    "stackable": 1,
    "rarity": "common",
    "initial_release": "pre-alpha",
    "obtaining": [
      "Interacting"
    ],
    "usage": [
      "Smelting",
      "Trading",
      "Cauldrons"
    ],
    "inventory_categories": [
      "tools_and_utilities"
    ],
    "recipe": [
      "none"
    ],
    "loot": [
      "none"
    ],
    "chinese_title": "熔岩桶",
    "wiki_image_url": "https://minecraft.wiki/images/Lava_Bucket_JE2_BE2.png?55ee0"
  },
  {
    "id": "lead",
    "title": "Lead",
    "url": "https://minecraft.wiki/w/Lead",
    "image_url": "/itemImages/lead.png",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "1.6.1",
    "obtaining": [
      "Mob loot",
      "Chest loot",
      "Crafting"
    ],
    "usage": [
      "Crafting ingredient",
      "Leashing mobs"
    ],
    "inventory_categories": [
      "tools_and_utilities"
    ],
    "recipe": [
      "crafting_table"
    ],
    "loot": [
      "container",
      "mob"
    ],
    "chinese_title": "拴绳",
    "wiki_image_url": "https://minecraft.wiki/images/Lead_JE2_BE2.png?955bb"
  },
  {
    "id": "lingering_potion",
    "title": "Lingering Potion",
    "url": "https://minecraft.wiki/w/Lingering_Potion",
    "image_url": "/itemImages/lingering_potion.png",
    "renewable": "partial",
    "stackable": 1,
    "rarity": "common",
    "initial_release": "1.9",
    "obtaining": [
      "Brewing"
    ],
    "usage": [
      "Creating area effect clouds",
      "Lingering water bottle",
      "Crafting ingredient",
      "Filling cauldrons",
      "Uncraftable lingering potion"
    ],
    "inventory_categories": [
      "food_and_drinks"
    ],
    "recipe": [
      "brewing_stand"
    ],
    "loot": [
      "container"
    ],
    "chinese_title": "滞留药水",
    "wiki_image_url": "https://minecraft.wiki/images/Lingering_Water_Bottle_JE2_BE2.png?ed26b"
  },
  {
    "id": "mace",
    "title": "Mace",
    "url": "https://minecraft.wiki/w/Mace",
    "image_url": "/itemImages/mace.webp",
    "renewable": "no",
    "stackable": 1,
    "rarity": "epic",
    "initial_release": "1.21",
    "obtaining": [
      "Crafting"
    ],
    "usage": [
      "Normal attack",
      "Smash attack",
      "Mining",
      "Enchantments",
      "Repairing"
    ],
    "inventory_categories": [
      "combat"
    ],
    "recipe": [
      "crafting_table"
    ],
    "loot": [
      "none"
    ],
    "chinese_title": "重锤",
    "wiki_image_url": "https://minecraft.wiki/images/Mace_JE1_BE1.png?90f67"
  },
  {
    "id": "melon_seeds",
    "title": "Melon Seeds",
    "url": "https://minecraft.wiki/w/Melon_Seeds",
    "image_url": "/itemImages/melon_seeds.png",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "Beta 1.8",
    "obtaining": [
      "Breaking",
      "Natural generation",
      "Chest loot",
      "Crafting",
      "Trading"
    ],
    "usage": [
      "Farming",
      "Breeding",
      "Taming",
      "Composting"
    ],
    "inventory_categories": [
      "natural_blocks"
    ],
    "recipe": [
      "crafting_table"
    ],
    "loot": [
      "container",
      "trading"
    ],
    "chinese_title": "西瓜种子",
    "wiki_image_url": "https://minecraft.wiki/images/Melon_Seeds_JE2.png?59562"
  },
  {
    "id": "minecart",
    "title": "Minecart",
    "url": "https://minecraft.wiki/w/Minecart",
    "image_url": "/itemImages/minecart.png",
    "renewable": "yes",
    "stackable": 1,
    "rarity": "common",
    "initial_release": "pre-alpha",
    "obtaining": [
      "Crafting",
      "Entity loot"
    ],
    "usage": [
      "Crafting ingredient",
      "Transportation",
      "Dismounting"
    ],
    "inventory_categories": [
      "redstone_blocks",
      "tools_and_utilities"
    ],
    "recipe": [
      "crafting_table"
    ],
    "loot": [
      "none"
    ],
    "chinese_title": "矿车",
    "wiki_image_url": "https://minecraft.wiki/images/Minecart_JE4_BE2.png?92161"
  },
  {
    "id": "chest_minecart",
    "title": "Minecart with Chest",
    "url": "https://minecraft.wiki/w/Minecart_with_Chest",
    "image_url": "/itemImages/chest_minecart.png",
    "renewable": "yes",
    "stackable": 1,
    "rarity": "common",
    "initial_release": "Alpha 1.0.14",
    "obtaining": [
      "Natural generation",
      "Crafting"
    ],
    "usage": [
      "Item transportation"
    ],
    "inventory_categories": [
      "redstone_blocks",
      "tools_and_utilities"
    ],
    "recipe": [
      "crafting_table"
    ],
    "loot": [
      "none"
    ],
    "chinese_title": "运输矿车",
    "wiki_image_url": "https://minecraft.wiki/images/Minecart_with_Chest_JE4_BE2.png?74543"
  },
  {
    "id": "command_block_minecart",
    "title": "Minecart with Command Block",
    "url": "https://minecraft.wiki/w/Minecart_with_Command_Block",
    "image_url": "/itemImages/command_block_minecart.png",
    "renewable": "no",
    "stackable": 1,
    "rarity": "epic",
    "initial_release": "1.7.2",
    "obtaining": [
      "Commands"
    ],
    "usage": [
      "Command Execution"
    ],
    "inventory_categories": [
      "operator_utilities"
    ],
    "recipe": [
      "none"
    ],
    "loot": [
      "none"
    ],
    "chinese_title": "命令方块矿车",
    "wiki_image_url": "https://minecraft.wiki/images/Minecart_with_Command_Block.gif?0b4e8"
  },
  {
    "id": "furnace_minecart",
    "title": "Minecart with Furnace",
    "url": "https://minecraft.wiki/w/Minecart_with_Furnace",
    "image_url": "/itemImages/furnace_minecart.png",
    "renewable": "yes",
    "stackable": 1,
    "rarity": "common",
    "initial_release": "Alpha 1.0.14",
    "obtaining": [
      "Crafting"
    ],
    "usage": [
      "Train mechanics"
    ],
    "inventory_categories": [
      "redstone_blocks",
      "tools_and_utilities"
    ],
    "recipe": [
      "crafting_table"
    ],
    "loot": [
      "none"
    ],
    "chinese_title": "动力矿车",
    "wiki_image_url": "https://minecraft.wiki/images/Minecart_with_Furnace_JE3.png?c3c11"
  },
  {
    "id": "hopper_minecart",
    "title": "Minecart with Hopper",
    "url": "https://minecraft.wiki/w/Minecart_with_Hopper",
    "image_url": "/itemImages/hopper_minecart.png",
    "renewable": "yes",
    "stackable": 1,
    "rarity": "common",
    "initial_release": "1.5",
    "obtaining": [
      "Crafting"
    ],
    "usage": [
      "Item Pickup"
    ],
    "inventory_categories": [
      "redstone_blocks",
      "tools_and_utilities"
    ],
    "recipe": [
      "crafting_table"
    ],
    "loot": [
      "none"
    ],
    "chinese_title": "漏斗矿车",
    "wiki_image_url": "https://minecraft.wiki/images/Minecart_with_Hopper_JE2_BE2.png?8029c"
  },
  {
    "id": "tnt_minecart",
    "title": "Minecart with TNT",
    "url": "https://minecraft.wiki/w/Minecart_with_TNT",
    "image_url": "/itemImages/tnt_minecart.png",
    "renewable": "yes",
    "stackable": 1,
    "rarity": "common",
    "initial_release": "1.5",
    "obtaining": [
      "Crafting"
    ],
    "usage": [
      "Explosion"
    ],
    "inventory_categories": [
      "redstone_blocks",
      "tools_and_utilities"
    ],
    "recipe": [
      "crafting_table"
    ],
    "loot": [
      "none"
    ],
    "chinese_title": "TNT矿车",
    "wiki_image_url": "https://minecraft.wiki/images/Minecart_with_TNT_JE2_BE2.png?10e68"
  },
  {
    "id": "nether_wart",
    "title": "Nether Wart",
    "url": "https://minecraft.wiki/w/Nether_Wart",
    "image_url": "/itemImages/nether_wart.png",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "1.0.0",
    "obtaining": [
      "Breaking",
      "Natural generation",
      "Chest loot"
    ],
    "usage": [
      "Brewing ingredient",
      "Crafting ingredient",
      "Trading",
      "Farming",
      "Composting"
    ],
    "inventory_categories": [
      "natural_blocks",
      "ingredients"
    ],
    "recipe": [
      "none"
    ],
    "loot": [
      "container"
    ],
    "chinese_title": "下界疣",
    "wiki_image_url": "https://minecraft.wiki/images/Nether_Wart_%28item%29_JE2_BE1.png?65953"
  },
  {
    "id": "ominous_bottle",
    "title": "Ominous Bottle",
    "url": "https://minecraft.wiki/w/Ominous_Bottle",
    "image_url": "/itemImages/ominous_bottle.webp",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "uncommon",
    "initial_release": "1.21",
    "obtaining": [
      "Mob Loot",
      "Container Loot"
    ],
    "usage": [
      "Bad Omen"
    ],
    "inventory_categories": [
      "food_and_drinks"
    ],
    "recipe": [
      "none"
    ],
    "loot": [
      "container",
      "mob"
    ],
    "chinese_title": "不祥之瓶",
    "wiki_image_url": "https://minecraft.wiki/images/Ominous_Bottle_JE1_BE1.png?c585d"
  },
  {
    "id": "painting",
    "title": "Painting",
    "url": "https://minecraft.wiki/w/Painting",
    "image_url": "/itemImages/painting.png",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "pre-alpha",
    "obtaining": [
      "Breaking",
      "Crafting",
      "Trading"
    ],
    "usage": [
      "Placement",
      "Properties"
    ],
    "inventory_categories": [
      "functional_blocks",
      "operator_utilities"
    ],
    "recipe": [
      "crafting_table"
    ],
    "loot": [
      "trading"
    ],
    "chinese_title": "画",
    "wiki_image_url": "https://minecraft.wiki/images/Painting_JE2_BE2.png?45334"
  },
  {
    "id": "pitcher_pod",
    "title": "Pitcher Pod",
    "url": "https://minecraft.wiki/w/Pitcher_Pod",
    "image_url": "/itemImages/pitcher_pod.png",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "1.20",
    "obtaining": [
      "Sniffer"
    ],
    "usage": [
      "Pitcher Crop",
      "Feeding",
      "Taming"
    ],
    "inventory_categories": [
      "natural_blocks"
    ],
    "recipe": [
      "none"
    ],
    "loot": [
      "mob"
    ],
    "chinese_title": "瓶子草荚果",
    "wiki_image_url": "https://minecraft.wiki/images/Pitcher_Pod_JE1_BE1.png?162fa"
  },
  {
    "id": "potato",
    "title": "Potato",
    "url": "https://minecraft.wiki/w/Potato",
    "image_url": "/itemImages/potato.png",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "1.4.2",
    "obtaining": [
      "Natural generation",
      "Mob loot",
      "Chest loot"
    ],
    "usage": [
      "Farming",
      "Food",
      "Breeding",
      "Smelting ingredient",
      "Trading",
      "Composting"
    ],
    "inventory_categories": [
      "food_and_drinks"
    ],
    "recipe": [
      "none"
    ],
    "loot": [
      "container",
      "mob"
    ],
    "chinese_title": "马铃薯",
    "wiki_image_url": "https://minecraft.wiki/images/Potato_JE3_BE2.png?27685"
  },
  {
    "id": "powder_snow_bucket",
    "title": "Powder Snow Bucket",
    "url": "https://minecraft.wiki/w/Powder_Snow_Bucket",
    "image_url": "/itemImages/powder_snow_bucket.png",
    "renewable": "yes",
    "stackable": 1,
    "rarity": "common",
    "initial_release": "1.17",
    "obtaining": [
      "Interacting"
    ],
    "usage": [
      "Block Placing"
    ],
    "inventory_categories": [
      "tools_and_utilities"
    ],
    "recipe": [
      "none"
    ],
    "loot": [
      "none"
    ],
    "chinese_title": "细雪桶",
    "wiki_image_url": "https://minecraft.wiki/images/Powder_Snow_Bucket_JE1_BE1.png?65e36"
  },
  {
    "id": "pumpkin_seeds",
    "title": "Pumpkin Seeds",
    "url": "https://minecraft.wiki/w/Pumpkin_Seeds",
    "image_url": "/itemImages/pumpkin_seeds.png",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "Beta 1.8",
    "obtaining": [
      "Breaking",
      "Natural generation",
      "Chest loot",
      "Crafting",
      "Trading",
      "Post-generation"
    ],
    "usage": [
      "Farming",
      "Breeding",
      "Taming",
      "Composting"
    ],
    "inventory_categories": [
      "natural_blocks"
    ],
    "recipe": [
      "crafting_table"
    ],
    "loot": [
      "container",
      "trading"
    ],
    "chinese_title": "南瓜种子",
    "wiki_image_url": "https://minecraft.wiki/images/Pumpkin_Seeds_JE1_BE1.png?d9ae3"
  },
  {
    "id": "redstone",
    "title": "Redstone Dust",
    "url": "https://minecraft.wiki/w/Redstone_Dust",
    "image_url": "/itemImages/redstone.png",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "Alpha 1.0.1",
    "obtaining": [
      "Breaking",
      "Mining",
      "Natural generation",
      "Mob loot",
      "Chest loot",
      "Crafting",
      "Smelting",
      "Trading",
      "Villager gifts"
    ],
    "usage": [
      "Brewing ingredient",
      "Crafting ingredient",
      "Redstone component",
      "Smithing ingredient",
      "Placement",
      "Behavior"
    ],
    "inventory_categories": [
      "redstone_blocks",
      "ingredients"
    ],
    "recipe": [
      "crafting_table",
      "furnace"
    ],
    "loot": [
      "container",
      "mob",
      "trading"
    ],
    "chinese_title": "红石粉",
    "wiki_image_url": "https://minecraft.wiki/images/Redstone_Dust_JE2_BE2.png?8cf17"
  },
  {
    "id": "resin_brick",
    "title": "Resin Brick",
    "url": "https://minecraft.wiki/w/Resin_Brick",
    "image_url": "/itemImages/resin_brick.webp",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "1.21.4",
    "obtaining": [
      "Smelting"
    ],
    "usage": [
      "Crafting ingredient",
      "Smithing ingredient"
    ],
    "inventory_categories": [
      "ingredients"
    ],
    "recipe": [
      "furnace"
    ],
    "loot": [
      "none"
    ],
    "chinese_title": "树脂砖",
    "wiki_image_url": "https://minecraft.wiki/images/Resin_Brick_JE1_BE1.png?d7a10"
  },
  {
    "id": "snowball",
    "title": "Snowball",
    "url": "https://minecraft.wiki/w/Snowball",
    "image_url": "/itemImages/snowball.png",
    "renewable": "yes",
    "stackable": 16,
    "rarity": "common",
    "initial_release": "Alpha 1.0.5",
    "obtaining": [
      "Mining",
      "Mob loot",
      "Chest loot"
    ],
    "usage": [
      "Crafting ingredient",
      "combat",
      "Dispenser"
    ],
    "inventory_categories": [
      "combat",
      "ingredients"
    ],
    "recipe": [
      "none"
    ],
    "loot": [
      "container",
      "mob"
    ],
    "chinese_title": "雪球",
    "wiki_image_url": "https://minecraft.wiki/images/Snowball_JE3_BE3.png?8c074"
  },
  {
    "id": "splash_potion",
    "title": "Splash Potion",
    "url": "https://minecraft.wiki/w/Splash_Potion",
    "image_url": "/itemImages/splash_potion.png",
    "renewable": "partial",
    "stackable": 1,
    "rarity": "common",
    "initial_release": "1.0.0",
    "obtaining": [
      "Natural generation",
      "Brewing",
      "Bartering",
      "Filling bottles"
    ],
    "usage": [
      "Brewing",
      "Using",
      "Splash water bottles",
      "Filling cauldrons",
      "Uncraftable splash potion"
    ],
    "inventory_categories": [
      "food_and_drinks"
    ],
    "recipe": [
      "brewing_stand"
    ],
    "loot": [
      "container",
      "trading"
    ],
    "chinese_title": "喷溅药水",
    "wiki_image_url": "https://minecraft.wiki/images/Splash_Water_Bottle_JE2_BE2.png?7a92d"
  },
  {
    "id": "string",
    "title": "String",
    "url": "https://minecraft.wiki/w/String",
    "image_url": "/itemImages/string.png",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "pre-alpha",
    "obtaining": [
      "Breaking",
      "Natural generation",
      "Mob loot",
      "Chest loot",
      "Fishing",
      "Bartering",
      "Cat gifts"
    ],
    "usage": [
      "Crafting ingredient",
      "Redstone component",
      "Trading"
    ],
    "inventory_categories": [
      "redstone_blocks",
      "ingredients"
    ],
    "recipe": [
      "none"
    ],
    "loot": [
      "container",
      "mob",
      "fishing",
      "trading"
    ],
    "chinese_title": "线",
    "wiki_image_url": "https://minecraft.wiki/images/String_JE2_BE2.png?25d69"
  },
  {
    "id": "sweet_berries",
    "title": "Sweet Berries",
    "url": "https://minecraft.wiki/w/Sweet_Berries",
    "image_url": "/itemImages/sweet_berries.png",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "1.14",
    "obtaining": [
      "Breaking",
      "Natural generation",
      "Chest loot",
      "Post-generation"
    ],
    "usage": [
      "Food",
      "Composting",
      "Breeding",
      "Trading",
      "Entity movement"
    ],
    "inventory_categories": [
      "natural_blocks",
      "food_and_drinks"
    ],
    "recipe": [
      "none"
    ],
    "loot": [
      "container"
    ],
    "chinese_title": "甜浆果",
    "wiki_image_url": "https://minecraft.wiki/images/Sweet_Berries_JE1_BE1.png?d29d1"
  },
  {
    "id": "torchflower_seeds",
    "title": "Torchflower Seeds",
    "url": "https://minecraft.wiki/w/Torchflower_Seeds",
    "image_url": "/itemImages/torchflower_seeds.png",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "1.20",
    "obtaining": [
      "Sniffer"
    ],
    "usage": [
      "Crop",
      "Feeding",
      "Taming",
      "Composting"
    ],
    "inventory_categories": [
      "natural_blocks"
    ],
    "recipe": [
      "none"
    ],
    "loot": [
      "mob"
    ],
    "chinese_title": "火把花种子",
    "wiki_image_url": "https://minecraft.wiki/images/Torchflower_Seeds_JE1_BE1.png?050ae"
  },
  {
    "id": "trial_key",
    "title": "Trial Key",
    "url": "https://minecraft.wiki/w/Trial_Key",
    "image_url": "/itemImages/trial_key.webp",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "1.21",
    "obtaining": [
      "Container loot"
    ],
    "usage": [
      "Unlocking"
    ],
    "inventory_categories": [
      "ingredients"
    ],
    "recipe": [
      "none"
    ],
    "loot": [
      "container"
    ],
    "chinese_title": "试炼钥匙",
    "wiki_image_url": "https://minecraft.wiki/images/Trial_Key_JE2_BE2.png?a203a"
  },
  {
    "id": "trident",
    "title": "Trident",
    "url": "https://minecraft.wiki/w/Trident",
    "image_url": "/itemImages/trident.png",
    "renewable": "yes",
    "stackable": 1,
    "rarity": "rare",
    "initial_release": "1.13",
    "obtaining": [
      "Mob loot",
      "Vault loot"
    ],
    "usage": [
      "Melee attack",
      "Ranged attack",
      "Elytra",
      "Impaling damage",
      "Enchantments",
      "Repairing"
    ],
    "inventory_categories": [
      "combat"
    ],
    "recipe": [
      "none"
    ],
    "loot": [
      "container",
      "mob"
    ],
    "chinese_title": "三叉戟",
    "wiki_image_url": "https://minecraft.wiki/images/Trident.png?f6cb9"
  },
  {
    "id": "water_bucket",
    "title": "Water Bucket",
    "url": "https://minecraft.wiki/w/Water_Bucket",
    "image_url": "/itemImages/water_bucket.png",
    "renewable": "yes",
    "stackable": 1,
    "rarity": "common",
    "initial_release": "pre-alpha",
    "obtaining": [
      "Interacting",
      "Chest loot"
    ],
    "usage": [
      "Dispensers",
      "Cauldrons",
      "Filling bucket with mobs",
      "Transportation"
    ],
    "inventory_categories": [
      "tools_and_utilities"
    ],
    "recipe": [
      "furnace"
    ],
    "loot": [
      "container"
    ],
    "chinese_title": "水桶",
    "wiki_image_url": "https://minecraft.wiki/images/Water_Bucket_JE2_BE2.png?db4ce"
  },
  {
    "id": "wheat_seeds",
    "title": "Wheat Seeds",
    "url": "https://minecraft.wiki/w/Wheat_Seeds",
    "image_url": "/itemImages/wheat_seeds.png",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "pre-alpha",
    "obtaining": [
      "Breaking",
      "Natural generation",
      "Chest loot",
      "Trading",
      "Villager gifts"
    ],
    "usage": [
      "Crop",
      "Breeding",
      "Taming",
      "Composting"
    ],
    "inventory_categories": [
      "natural_blocks"
    ],
    "recipe": [
      "none"
    ],
    "loot": [
      "container",
      "trading"
    ],
    "chinese_title": "小麦种子",
    "wiki_image_url": "https://minecraft.wiki/images/Wheat_Seeds_JE1_BE1.png?68de8"
  },
  {
    "id": "wind_charge",
    "title": "Wind Charge",
    "url": "https://minecraft.wiki/w/Wind_Charge",
    "image_url": "/itemImages/wind_charge.webp",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "1.21",
    "obtaining": [
      "Crafting",
      "Container Loot"
    ],
    "usage": [
      "Throwing"
    ],
    "inventory_categories": [
      "tools_and_utilities",
      "combat"
    ],
    "recipe": [
      "crafting_table"
    ],
    "loot": [
      "container"
    ],
    "chinese_title": "风弹",
    "wiki_image_url": "https://minecraft.wiki/images/Wind_Charge_JE2_BE2.webp?06509"
  },
  {
    "id": "amethyst_shard",
    "title": "Amethyst Shard",
    "url": "https://minecraft.wiki/w/Amethyst_Shard",
    "image_url": "/itemImages/amethyst_shard.png",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "1.17",
    "obtaining": [
      "Mining",
      "Chest loot"
    ],
    "usage": [
      "Crafting ingredient",
      "Smithing ingredient",
      "Allay duplication"
    ],
    "inventory_categories": [
      "ingredients"
    ],
    "recipe": [
      "none"
    ],
    "loot": [
      "container"
    ],
    "chinese_title": "紫水晶碎片",
    "wiki_image_url": "https://minecraft.wiki/images/Amethyst_Shard_JE2_BE1.png?56555"
  },
  {
    "id": "apple",
    "title": "Apple",
    "url": "https://minecraft.wiki/w/Apple",
    "image_url": "/itemImages/apple.png",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "pre-alpha",
    "obtaining": [
      "Block loot",
      "Chest loot",
      "Trading"
    ],
    "usage": [
      "Crafting ingredient",
      "Composting",
      "Food",
      "Feeding"
    ],
    "inventory_categories": [
      "food_and_drinks"
    ],
    "recipe": [
      "none"
    ],
    "loot": [
      "container",
      "trading"
    ],
    "chinese_title": "苹果",
    "wiki_image_url": "https://minecraft.wiki/images/Apple_JE3_BE3.png?3853a"
  },
  {
    "id": "arrow",
    "title": "Arrow",
    "url": "https://minecraft.wiki/w/Arrow",
    "image_url": "/itemImages/arrow.png",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "pre-alpha",
    "obtaining": [
      "Picking up arrows",
      "Mob loot",
      "Chest loot",
      "Crafting",
      "Trading",
      "Villager gifts",
      "Bartering",
      "Retrieving"
    ],
    "usage": [
      "Redstone circuits",
      "Explosions"
    ],
    "inventory_categories": [
      "combat"
    ],
    "recipe": [
      "crafting_table"
    ],
    "loot": [
      "container",
      "mob",
      "trading"
    ],
    "chinese_title": "箭",
    "wiki_image_url": "https://minecraft.wiki/images/Arrow_JE2_BE1.png?06482"
  },
  {
    "id": "tipped_arrow",
    "title": "Tipped Arrow",
    "url": "https://minecraft.wiki/w/Tipped_Arrow",
    "image_url": "/itemImages/tipped_arrow.webp",
    "renewable": "partial",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "1.9",
    "obtaining": [
      "Picking up arrows",
      "Mob loot",
      "Crafting",
      "Trading",
      "Villager gifts",
      "Bartering"
    ],
    "usage": [
      "Special properties",
      "No-effect tipped arrows"
    ],
    "inventory_categories": [
      "combat"
    ],
    "recipe": [
      "crafting_table"
    ],
    "loot": [
      "mob",
      "container",
      "trading"
    ],
    "chinese_title": "药箭",
    "wiki_image_url": "https://minecraft.wiki/images/Arrow_of_Splashing_JE2.png?a5e3d"
  },
  {
    "id": "spectral_arrow",
    "title": "Spectral Arrow",
    "url": "https://minecraft.wiki/w/Spectral_Arrow",
    "image_url": "/itemImages/spectral_arrow.webp",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "1.9",
    "obtaining": [
      "Picking up arrows",
      "Chest loot",
      "Crafting",
      "Bartering"
    ],
    "usage": [
      "Special properties"
    ],
    "inventory_categories": [
      "combat"
    ],
    "recipe": [
      "crafting_table"
    ],
    "loot": [
      "container",
      "trading"
    ],
    "chinese_title": "光灵箭",
    "wiki_image_url": "https://minecraft.wiki/images/Spectral_Arrow_JE3.png?991ad"
  },
  {
    "id": "baked_potato",
    "title": "Baked Potato",
    "url": "https://minecraft.wiki/w/Baked_Potato",
    "image_url": "/itemImages/baked_potato.png",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "1.4.2",
    "obtaining": [
      "Mob Loot",
      "Generated loot",
      "Cooking"
    ],
    "usage": [
      "Crafting ingredient",
      "Composting",
      "Food"
    ],
    "inventory_categories": [
      "food_and_drinks"
    ],
    "recipe": [
      "furnace"
    ],
    "loot": [
      "container",
      "mob"
    ],
    "chinese_title": "烤马铃薯",
    "wiki_image_url": "https://minecraft.wiki/images/Baked_Potato_JE4_BE2.png?18727"
  },
  {
    "id": "beetroot",
    "title": "Beetroot",
    "url": "https://minecraft.wiki/w/Beetroot",
    "image_url": "/itemImages/beetroot.png",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "1.9",
    "obtaining": [
      "Farming"
    ],
    "usage": [
      "Food",
      "Crafting ingredient",
      "Breeding",
      "Composting",
      "Trading"
    ],
    "inventory_categories": [
      "food_and_drinks"
    ],
    "recipe": [
      "none"
    ],
    "loot": [
      "none"
    ],
    "chinese_title": "甜菜根",
    "wiki_image_url": "https://minecraft.wiki/images/Beetroot_JE2_BE2.png?649dc"
  },
  {
    "id": "beetroot_soup",
    "title": "Beetroot Soup",
    "url": "https://minecraft.wiki/w/Beetroot_Soup",
    "image_url": "/itemImages/beetroot_soup.png",
    "renewable": "yes",
    "stackable": 1,
    "rarity": "common",
    "initial_release": "1.9",
    "obtaining": [
      "Chest loot",
      "Crafting"
    ],
    "usage": [
      "Food"
    ],
    "inventory_categories": [
      "food_and_drinks"
    ],
    "recipe": [
      "crafting_table"
    ],
    "loot": [
      "container"
    ],
    "chinese_title": "甜菜汤",
    "wiki_image_url": "https://minecraft.wiki/images/Beetroot_Soup_JE2_BE2.png?a48bd"
  },
  {
    "id": "bone",
    "title": "Bone",
    "url": "https://minecraft.wiki/w/Bone",
    "image_url": "/itemImages/bone.png",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "Beta 1.2",
    "obtaining": [
      "Mob loot",
      "Chest loot",
      "Fishing"
    ],
    "usage": [
      "Taming",
      "Crafting ingredient"
    ],
    "inventory_categories": [
      "ingredients"
    ],
    "recipe": [
      "none"
    ],
    "loot": [
      "container",
      "mob",
      "fishing"
    ],
    "chinese_title": "骨头",
    "wiki_image_url": "https://minecraft.wiki/images/Bone_JE3_BE2.png?b405e"
  },
  {
    "id": "bone_meal",
    "title": "Bone Meal",
    "url": "https://minecraft.wiki/w/Bone_Meal",
    "image_url": "/itemImages/bone_meal.png",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "Beta 1.2",
    "obtaining": [
      "Mob loot",
      "Crafting",
      "Trading",
      "Composters"
    ],
    "usage": [
      "Crafting ingredient",
      "Loom ingredient",
      "Dye",
      "Fertilizer",
      "Creating new plants",
      "Farmer villagers"
    ],
    "inventory_categories": [
      "tools_and_utilities",
      "ingredients"
    ],
    "recipe": [
      "crafting_table"
    ],
    "loot": [
      "mob",
      "container"
    ],
    "chinese_title": "骨粉",
    "wiki_image_url": "https://minecraft.wiki/images/Bone_Meal_JE3_BE3.png?1be02"
  },
  {
    "id": "book",
    "title": "Book",
    "url": "https://minecraft.wiki/w/Book",
    "image_url": "/itemImages/book.png",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "Alpha 1.0.11",
    "obtaining": [
      "Block loot",
      "Chest loot",
      "Crafting",
      "Grindstones",
      "Villager gifts"
    ],
    "usage": [
      "Crafting ingredient",
      "Chiseled bookshelf",
      "Enchanting",
      "Trading"
    ],
    "inventory_categories": [
      "ingredients"
    ],
    "recipe": [
      "crafting_table"
    ],
    "loot": [
      "container",
      "trading"
    ],
    "chinese_title": "书",
    "wiki_image_url": "https://minecraft.wiki/images/Book_JE2_BE2.png?caac6"
  },
  {
    "id": "writable_book",
    "title": "Book and Quill",
    "url": "https://minecraft.wiki/w/Book_and_Quill",
    "image_url": "/itemImages/writable_book.png",
    "renewable": "yes",
    "stackable": 1,
    "rarity": "common",
    "initial_release": "1.3.1",
    "obtaining": [
      "Natural generation",
      "Crafting"
    ],
    "usage": [
      "Crafting ingredient",
      "Writing",
      "Lecterns",
      "Formatting codes",
      "Signing",
      "Chiseled bookshelf",
      "Trading"
    ],
    "inventory_categories": [
      "tools_and_utilities"
    ],
    "recipe": [
      "crafting_table"
    ],
    "loot": [
      "none"
    ],
    "chinese_title": "书与笔",
    "wiki_image_url": "https://minecraft.wiki/images/Book_and_Quill_JE2_BE2.png?2128f"
  },
  {
    "id": "bowl",
    "title": "Bowl",
    "url": "https://minecraft.wiki/w/Bowl",
    "image_url": "/itemImages/bowl.png",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "pre-alpha",
    "obtaining": [
      "Mob loot",
      "Crafting",
      "Fishing",
      "Eating"
    ],
    "usage": [
      "Crafting ingredient",
      "Mooshrooms",
      "Fuel"
    ],
    "inventory_categories": [
      "ingredients"
    ],
    "recipe": [
      "crafting_table"
    ],
    "loot": [
      "mob",
      "fishing"
    ],
    "chinese_title": "碗",
    "wiki_image_url": "https://minecraft.wiki/images/Bowl_JE2_BE2.png?a619b"
  },
  {
    "id": "bread",
    "title": "Bread",
    "url": "https://minecraft.wiki/w/Bread",
    "image_url": "/itemImages/bread.png",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "pre-alpha",
    "obtaining": [
      "Crafting",
      "Chest loot",
      "Trading",
      "Villager gifts"
    ],
    "usage": [
      "Food",
      "Breeding",
      "Composting"
    ],
    "inventory_categories": [
      "food_and_drinks"
    ],
    "recipe": [
      "crafting_table"
    ],
    "loot": [
      "container",
      "trading"
    ],
    "chinese_title": "面包",
    "wiki_image_url": "https://minecraft.wiki/images/Bread_JE3_BE3.png?e1046"
  },
  {
    "id": "brush",
    "title": "Brush",
    "url": "https://minecraft.wiki/w/Brush",
    "image_url": "/itemImages/brush.png",
    "renewable": "yes",
    "stackable": 1,
    "rarity": "common",
    "initial_release": "1.20",
    "obtaining": [
      "Crafting"
    ],
    "usage": [
      "Enchantments",
      "Archeology",
      "Armadillos"
    ],
    "inventory_categories": [
      "tools_and_utilities"
    ],
    "recipe": [
      "crafting_table"
    ],
    "loot": [
      "none"
    ],
    "chinese_title": "刷子",
    "wiki_image_url": "https://minecraft.wiki/images/Brush_JE1_BE1.png?fd417"
  },
  {
    "id": "carrot_on_a_stick",
    "title": "Carrot on a Stick",
    "url": "https://minecraft.wiki/w/Carrot_on_a_Stick",
    "image_url": "/itemImages/carrot_on_a_stick.png",
    "renewable": "yes",
    "stackable": 1,
    "rarity": "common",
    "initial_release": "1.4.2",
    "obtaining": [
      "Crafting"
    ],
    "usage": [
      "Riding a pig",
      "Enchantments"
    ],
    "inventory_categories": [
      "tools_and_utilities"
    ],
    "recipe": [
      "crafting_table"
    ],
    "loot": [
      "none"
    ],
    "chinese_title": "胡萝卜钓竿",
    "wiki_image_url": "https://minecraft.wiki/images/Carrot_on_a_Stick_JE2_BE2.png?cc4b3"
  },
  {
    "id": "boots",
    "title": "Boots",
    "url": "https://minecraft.wiki/w/Boots",
    "image_url": "/itemImages/boots.png",
    "renewable": "partial",
    "stackable": 1,
    "rarity": "mixed",
    "initial_release": "pre-alpha",
    "obtaining": [
      "Crafting",
      "Upgrading",
      "Chest loot",
      "Mob loot",
      "Trading",
      "Bartering",
      "Fishing"
    ],
    "usage": [
      "Defense points",
      "Knockback resistance",
      "Durability",
      "Enchantments",
      "Armor trimming",
      "Smelting usage",
      "Piglins",
      "Repairing",
      "Powder snow"
    ],
    "inventory_categories": [
      "combat"
    ],
    "recipe": [
      "crafting_table"
    ],
    "loot": [
      "container",
      "mob",
      "fishing",
      "trading"
    ],
    "chinese_title": "靴子",
    "wiki_image_url": "https://minecraft.wiki/images/Leather_Boots_JE3_BE2.png?5c1dc"
  },
  {
    "id": "chestplate",
    "title": "Chestplate",
    "url": "https://minecraft.wiki/w/Chestplate",
    "image_url": "/itemImages/chestplate.png",
    "renewable": "partial",
    "stackable": 1,
    "rarity": "mixed",
    "initial_release": "pre-alpha",
    "obtaining": [
      "Crafting",
      "Upgrading",
      "Natural generation",
      "Chest loot",
      "Mob loot",
      "Trading"
    ],
    "usage": [
      "Defense points",
      "Knockback Resistance",
      "Durability",
      "Enchantments",
      "Armor trimming",
      "Smelting usage",
      "Repairing",
      "Piglins"
    ],
    "inventory_categories": [
      "combat"
    ],
    "recipe": [
      "crafting_table"
    ],
    "loot": [
      "container",
      "mob",
      "trading"
    ],
    "chinese_title": "胸甲",
    "wiki_image_url": "https://minecraft.wiki/images/Leather_Tunic_JE4_BE2.png?a872d"
  },
  {
    "id": "helmet",
    "title": "Helmet",
    "url": "https://minecraft.wiki/w/Helmet",
    "image_url": "/itemImages/helmet.png",
    "renewable": "partial",
    "stackable": 1,
    "rarity": "mixed",
    "initial_release": "pre-alpha",
    "obtaining": [
      "Crafting",
      "Upgrading",
      "Natural generation",
      "Chest loot",
      "Mob loot",
      "Trading"
    ],
    "usage": [
      "Defense points",
      "Knockback resistance",
      "Durability",
      "Enchantments",
      "Armor trimming",
      "Turtle shell effect",
      "Brewing ingredient",
      "Smelting usage",
      "Repairing",
      "Piglins"
    ],
    "inventory_categories": [
      "combat"
    ],
    "recipe": [
      "crafting_table"
    ],
    "loot": [
      "container",
      "mob",
      "trading"
    ],
    "chinese_title": "头盔",
    "wiki_image_url": "https://minecraft.wiki/images/Leather_Cap_JE4_BE2.png?8e830"
  },
  {
    "id": "leggings",
    "title": "Leggings",
    "url": "https://minecraft.wiki/w/Leggings",
    "image_url": "/itemImages/leggings.png",
    "renewable": "partial",
    "stackable": 1,
    "rarity": "mixed",
    "initial_release": "pre-alpha",
    "obtaining": [
      "Crafting",
      "Upgrading",
      "Chest loot",
      "Mob loot",
      "Trading"
    ],
    "usage": [
      "Defense points",
      "Knockback resistance",
      "Durability",
      "Enchantments",
      "Armor trimming",
      "Smelting usage",
      "Repairing",
      "Piglins"
    ],
    "inventory_categories": [
      "combat"
    ],
    "recipe": [
      "crafting_table"
    ],
    "loot": [
      "container",
      "mob",
      "trading"
    ],
    "chinese_title": "护腿",
    "wiki_image_url": "https://minecraft.wiki/images/Leather_Pants_JE4_BE2.png?4e43a"
  },
  {
    "id": "chorus_fruit",
    "title": "Chorus Fruit",
    "url": "https://minecraft.wiki/w/Chorus_Fruit",
    "image_url": "/itemImages/chorus_fruit.png",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "1.9",
    "obtaining": [
      "Mining"
    ],
    "usage": [
      "Smelting ingredient",
      "Food"
    ],
    "inventory_categories": [
      "food_and_drinks"
    ],
    "recipe": [
      "none"
    ],
    "loot": [
      "none"
    ],
    "chinese_title": "紫颂果",
    "wiki_image_url": "https://minecraft.wiki/images/Chorus_Fruit_JE2_BE2.png?c8e41"
  },
  {
    "id": "compass",
    "title": "Compass",
    "url": "https://minecraft.wiki/w/Compass",
    "image_url": "/itemImages/compass.gif",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "Alpha 1.1.0",
    "obtaining": [
      "Chest loot",
      "Crafting",
      "Trading"
    ],
    "usage": [
      "Crafting ingredient",
      "Trading",
      "Enchantments"
    ],
    "inventory_categories": [
      "tools_and_utilities"
    ],
    "recipe": [
      "crafting_table"
    ],
    "loot": [
      "container",
      "trading"
    ],
    "chinese_title": "指南针",
    "wiki_image_url": "https://minecraft.wiki/images/Compass_JE3_BE3.gif?0043f"
  },
  {
    "id": "cooked_chicken",
    "title": "Cooked Chicken",
    "url": "https://minecraft.wiki/w/Cooked_Chicken",
    "image_url": "/itemImages/cooked_chicken.png",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "Beta 1.8",
    "obtaining": [
      "Mob loot",
      "Cooking",
      "Trading"
    ],
    "usage": [
      "Food",
      "Wolves"
    ],
    "inventory_categories": [
      "food_and_drinks"
    ],
    "recipe": [
      "furnace"
    ],
    "loot": [
      "container",
      "mob",
      "trading"
    ],
    "chinese_title": "熟鸡肉",
    "wiki_image_url": "https://minecraft.wiki/images/Cooked_Chicken_JE3_BE3.png?3f3d8"
  },
  {
    "id": "cooked_cod",
    "title": "Cooked Cod",
    "url": "https://minecraft.wiki/w/Cooked_Cod",
    "image_url": "/itemImages/cooked_cod.png",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "Alpha 1.2.0",
    "obtaining": [
      "Mob loot",
      "Chest loot",
      "Cooking",
      "Trading"
    ],
    "usage": [
      "Food",
      "Wolves"
    ],
    "inventory_categories": [
      "food_and_drinks"
    ],
    "recipe": [
      "furnace"
    ],
    "loot": [
      "container",
      "mob",
      "trading"
    ],
    "chinese_title": "熟鳕鱼",
    "wiki_image_url": "https://minecraft.wiki/images/Cooked_Cod_JE4_BE3.png?b495d"
  },
  {
    "id": "cooked_mutton",
    "title": "Cooked Mutton",
    "url": "https://minecraft.wiki/w/Cooked_Mutton",
    "image_url": "/itemImages/cooked_mutton.png",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "1.8",
    "obtaining": [
      "Mob loot",
      "Cooking",
      "Trading"
    ],
    "usage": [
      "Food",
      "Wolves"
    ],
    "inventory_categories": [
      "food_and_drinks"
    ],
    "recipe": [
      "furnace"
    ],
    "loot": [
      "mob",
      "trading"
    ],
    "chinese_title": "熟羊肉",
    "wiki_image_url": "https://minecraft.wiki/images/Cooked_Mutton_JE3_BE2.png?fcd19"
  },
  {
    "id": "cooked_porkchop",
    "title": "Cooked Porkchop",
    "url": "https://minecraft.wiki/w/Cooked_Porkchop",
    "image_url": "/itemImages/cooked_porkchop.png",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "pre-alpha",
    "obtaining": [
      "Mob loot",
      "Chest loot",
      "Cooking",
      "Trading",
      "Villager gifts"
    ],
    "usage": [
      "Food",
      "Wolves",
      "Piglins"
    ],
    "inventory_categories": [
      "food_and_drinks"
    ],
    "recipe": [
      "furnace"
    ],
    "loot": [
      "container",
      "mob",
      "trading"
    ],
    "chinese_title": "熟猪排",
    "wiki_image_url": "https://minecraft.wiki/images/Cooked_Porkchop_JE4_BE3.png?d99d3"
  },
  {
    "id": "cooked_rabbit",
    "title": "Cooked Rabbit",
    "url": "https://minecraft.wiki/w/Cooked_Rabbit",
    "image_url": "/itemImages/cooked_rabbit.png",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "1.8",
    "obtaining": [
      "Mob loot",
      "Cooking",
      "Villagers"
    ],
    "usage": [
      "Food",
      "Crafting ingredient",
      "Wolves"
    ],
    "inventory_categories": [
      "food_and_drinks"
    ],
    "recipe": [
      "furnace"
    ],
    "loot": [
      "mob",
      "trading"
    ],
    "chinese_title": "熟兔肉",
    "wiki_image_url": "https://minecraft.wiki/images/Cooked_Rabbit_JE3_BE2.png?ec522"
  },
  {
    "id": "cooked_salmon",
    "title": "Cooked Salmon",
    "url": "https://minecraft.wiki/w/Cooked_Salmon",
    "image_url": "/itemImages/cooked_salmon.png",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "1.7.2",
    "obtaining": [
      "Mob loot",
      "Chest loot",
      "Cooking",
      "Trading"
    ],
    "usage": [
      "Food",
      "Wolves"
    ],
    "inventory_categories": [
      "food_and_drinks"
    ],
    "recipe": [
      "furnace"
    ],
    "loot": [
      "container",
      "mob",
      "trading"
    ],
    "chinese_title": "熟鲑鱼",
    "wiki_image_url": "https://minecraft.wiki/images/Cooked_Salmon_JE2_BE2.png?61c91"
  },
  {
    "id": "cookie",
    "title": "Cookie",
    "url": "https://minecraft.wiki/w/Cookie",
    "image_url": "/itemImages/cookie.png",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "Beta 1.4",
    "obtaining": [
      "Crafting",
      "Trading",
      "Villager gifts"
    ],
    "usage": [
      "Food",
      "Parrots",
      "Composting"
    ],
    "inventory_categories": [
      "food_and_drinks"
    ],
    "recipe": [
      "crafting_table"
    ],
    "loot": [
      "trading"
    ],
    "chinese_title": "曲奇",
    "wiki_image_url": "https://minecraft.wiki/images/Cookie_JE2_BE2.png?15f78"
  },
  {
    "id": "dye",
    "title": "Dye",
    "url": "https://minecraft.wiki/w/Dye",
    "image_url": "/itemImages/cyan_dye.png",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "Beta 1.2",
    "obtaining": [
      "Crafting",
      "Trading",
      "Smelting",
      "Chest loot"
    ],
    "usage": [
      "Crafting ingredient",
      "Loom ingredient",
      "Trading",
      "Dyeing armor",
      "Dyeing collars",
      "Dyeing sheep",
      "Dyeing signs"
    ],
    "inventory_categories": [
      "ingredients"
    ],
    "recipe": [
      "crafting_table",
      "furnace"
    ],
    "loot": [
      "container",
      "trading"
    ],
    "chinese_title": "染料",
    "wiki_image_url": "https://minecraft.wiki/images/thumb/In-game_colored_block-item_chart_v2.png/1200px-In-game_colored_block-item_chart_v2.png?b53f7"
  },
  {
    "id": "debug_stick",
    "title": "Debug Stick",
    "url": "https://minecraft.wiki/w/Debug_Stick",
    "image_url": "/itemImages/debug_stick.gif",
    "renewable": "no",
    "stackable": 1,
    "rarity": "epic",
    "initial_release": "1.13",
    "obtaining": [
      "Commands"
    ],
    "usage": [
      "Modify States"
    ],
    "inventory_categories": [
      "operator_utilities"
    ],
    "recipe": [
      "none"
    ],
    "loot": [
      "none"
    ],
    "chinese_title": "调试棒",
    "wiki_image_url": "https://minecraft.wiki/images/Debug_Stick.gif?c7249"
  },
  {
    "id": "axe",
    "title": "Axe",
    "url": "https://minecraft.wiki/w/Axe",
    "image_url": "/itemImages/axe.png",
    "renewable": "partial",
    "stackable": 1,
    "rarity": "common",
    "initial_release": "pre-alpha",
    "obtaining": [
      "Crafting",
      "Upgrading",
      "Generated loot",
      "Mob loot",
      "Trading",
      "Villager gifts"
    ],
    "usage": [
      "Chopping",
      "Stripping",
      "Weapon",
      "Repairing",
      "Enchantments",
      "Fuel",
      "Smelting ingredient",
      "Piglins"
    ],
    "inventory_categories": [
      "tools_and_utilities",
      "combat"
    ],
    "recipe": [
      "crafting_table"
    ],
    "loot": [
      "container",
      "mob",
      "trading"
    ],
    "chinese_title": "斧",
    "wiki_image_url": "https://minecraft.wiki/images/Wooden_Axe_JE2_BE2.png?ff0b9"
  },
  {
    "id": "hoe",
    "title": "Hoe",
    "url": "https://minecraft.wiki/w/Hoe",
    "image_url": "/itemImages/hoe.png",
    "renewable": "partial",
    "stackable": 1,
    "rarity": "common",
    "initial_release": "pre-alpha",
    "obtaining": [
      "Crafting",
      "Upgrading",
      "Chest loot",
      "Trading",
      "Villager gifts"
    ],
    "usage": [
      "Harvesting",
      "Tilling",
      "Weapon",
      "Enchantments",
      "Fuel",
      "Smelting ingredient",
      "Repairing",
      "Piglins"
    ],
    "inventory_categories": [
      "tools_and_utilities"
    ],
    "recipe": [
      "crafting_table"
    ],
    "loot": [
      "container",
      "trading"
    ],
    "chinese_title": "锄",
    "wiki_image_url": "https://minecraft.wiki/images/Wooden_Hoe_JE3_BE3.png?e9940"
  },
  {
    "id": "horse_armor",
    "title": "Horse Armor",
    "url": "https://minecraft.wiki/w/Horse_Armor",
    "image_url": "/itemImages/horse_armor.png",
    "renewable": "partial",
    "stackable": 1,
    "rarity": "common",
    "initial_release": "1.6.1",
    "obtaining": [
      "Chest loot",
      "Crafting",
      "Trading"
    ],
    "usage": [
      "Protection",
      "Dyeing",
      "Smelting ingredient",
      "Piglins"
    ],
    "inventory_categories": [
      "combat"
    ],
    "recipe": [
      "crafting_table"
    ],
    "loot": [
      "container"
    ],
    "chinese_title": "马铠",
    "wiki_image_url": "https://minecraft.wiki/images/thumb/Leather_Horse_Armor_BE4.png/640px-Leather_Horse_Armor_BE4.png?eb34e"
  },
  {
    "id": "pickaxe",
    "title": "Pickaxe",
    "url": "https://minecraft.wiki/w/Pickaxe",
    "image_url": "/itemImages/pickaxe.png",
    "renewable": "partial",
    "stackable": 1,
    "rarity": "common",
    "initial_release": "pre-alpha",
    "obtaining": [
      "Crafting",
      "Upgrading",
      "Chest loot",
      "Mob loot",
      "Trading",
      "Villager gifts"
    ],
    "usage": [
      "Mining",
      "Weapon",
      "Enchantments",
      "Fuel",
      "Smelting ingredient",
      "Repairing",
      "Piglins"
    ],
    "inventory_categories": [
      "tools_and_utilities"
    ],
    "recipe": [
      "crafting_table"
    ],
    "loot": [
      "container",
      "trading"
    ],
    "chinese_title": "镐",
    "wiki_image_url": "https://minecraft.wiki/images/Wooden_Pickaxe_JE3_BE3.png?fa797"
  },
  {
    "id": "shovel",
    "title": "Shovel",
    "url": "https://minecraft.wiki/w/Shovel",
    "image_url": "/itemImages/shovel.png",
    "renewable": "partial",
    "stackable": 1,
    "rarity": "common",
    "initial_release": "pre-alpha",
    "obtaining": [
      "Crafting",
      "Upgrading",
      "Chest loot",
      "Mob loot",
      "Trading",
      "Villager gifts"
    ],
    "usage": [
      "Digging",
      "Dirt paths",
      "Campfire",
      "Weapon",
      "Enchantments",
      "Fuel",
      "Smelting ingredient",
      "Repairing",
      "Piglins"
    ],
    "inventory_categories": [
      "tools_and_utilities"
    ],
    "recipe": [
      "crafting_table"
    ],
    "loot": [
      "container",
      "mob",
      "trading"
    ],
    "chinese_title": "锹",
    "wiki_image_url": "https://minecraft.wiki/images/Wooden_Shovel_JE2_BE2.png?749b7"
  },
  {
    "id": "sword",
    "title": "Sword",
    "url": "https://minecraft.wiki/w/Sword",
    "image_url": "/itemImages/sword.png",
    "renewable": "partial",
    "stackable": 1,
    "rarity": "common",
    "initial_release": "pre-alpha",
    "obtaining": [
      "Crafting",
      "Upgrading",
      "Chest loot",
      "Mob loot",
      "Trading"
    ],
    "usage": [
      "Attacking",
      "Damage",
      "Sword breaking times",
      "Enchantments",
      "Fuel",
      "Smelting ingredient",
      "Repairing",
      "Piglins"
    ],
    "inventory_categories": [
      "combat"
    ],
    "recipe": [
      "crafting_table"
    ],
    "loot": [
      "container",
      "mob",
      "trading"
    ],
    "chinese_title": "剑",
    "wiki_image_url": "https://minecraft.wiki/images/Wooden_Sword_JE2_BE2.png?065ee"
  },
  {
    "id": "dried_kelp",
    "title": "Dried Kelp",
    "url": "https://minecraft.wiki/w/Dried_Kelp",
    "image_url": "/itemImages/dried_kelp.png",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "1.13",
    "obtaining": [
      "Crafting",
      "Cooking"
    ],
    "usage": [
      "Food",
      "Crafting ingredient",
      "Composting"
    ],
    "inventory_categories": [
      "food_and_drinks"
    ],
    "recipe": [
      "crafting_table",
      "furnace"
    ],
    "loot": [
      "none"
    ],
    "chinese_title": "干海带",
    "wiki_image_url": "https://minecraft.wiki/images/Dried_Kelp_JE1_BE2.png?441be"
  },
  {
    "id": "elytra",
    "title": "Elytra",
    "url": "https://minecraft.wiki/w/Elytra",
    "image_url": "/itemImages/elytra.png",
    "renewable": "no",
    "stackable": 1,
    "rarity": "epic",
    "initial_release": "1.9",
    "obtaining": [
      "Natural generation"
    ],
    "usage": [
      "Flying",
      "Repairing",
      "Enchantments"
    ],
    "inventory_categories": [
      "tools_and_utilities"
    ],
    "recipe": [
      "none"
    ],
    "loot": [
      "container"
    ],
    "chinese_title": "鞘翅",
    "wiki_image_url": "https://minecraft.wiki/images/Elytra_JE2_BE2.png?107c5"
  },
  {
    "id": "map",
    "title": "Map",
    "url": "https://minecraft.wiki/w/Empty_Map",
    "image_url": "/itemImages/map.png",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "Beta 1.6",
    "obtaining": [
      "Crafting",
      "Chest loot",
      "Cartography table",
      "Starting map",
      "Trading"
    ],
    "usage": [
      "Mapping",
      "Map content",
      "Player marker and pointer",
      "Zooming out",
      "Cloning",
      "Crafting ingredient",
      "Marking points",
      "Locking"
    ],
    "inventory_categories": [
      "tools_and_utilities"
    ],
    "recipe": [
      "crafting_table"
    ],
    "loot": [
      "container",
      "trading"
    ],
    "chinese_title": "地图",
    "wiki_image_url": "https://minecraft.wiki/images/thumb/Map_Zoom_4.png/800px-Map_Zoom_4.png?34c38"
  },
  {
    "id": "enchanted_book",
    "title": "Enchanted Book",
    "url": "https://minecraft.wiki/w/Enchanted_Book",
    "image_url": "/itemImages/enchanted_book.gif",
    "renewable": "partial",
    "stackable": 1,
    "rarity": "uncommon",
    "initial_release": "1.4.6",
    "obtaining": [
      "Chest loot",
      "Fishing",
      "Trading",
      "Drops",
      "Enchanting",
      "Bartering"
    ],
    "usage": [
      "Enchanting",
      "Disenchanting",
      "Chiseled bookshelf"
    ],
    "inventory_categories": [
      "ingredients"
    ],
    "recipe": [
      "none"
    ],
    "loot": [
      "container",
      "fishing",
      "trading"
    ],
    "chinese_title": "附魔书",
    "wiki_image_url": "https://minecraft.wiki/images/Enchanted_Book.gif?b21c4"
  },
  {
    "id": "enchanted_golden_apple",
    "title": "Enchanted Golden Apple",
    "url": "https://minecraft.wiki/w/Enchanted_Golden_Apple",
    "image_url": "/itemImages/enchanted_golden_apple.gif",
    "renewable": "no",
    "stackable": 64,
    "rarity": "rare",
    "initial_release": "1.3.1",
    "obtaining": [
      "Chest loot"
    ],
    "usage": [
      "Horses",
      "Crafting ingredient",
      "Piglins"
    ],
    "inventory_categories": [
      "food_and_drinks"
    ],
    "recipe": [
      "none"
    ],
    "loot": [
      "container"
    ],
    "chinese_title": "附魔金苹果",
    "wiki_image_url": "https://minecraft.wiki/images/Enchanted_Golden_Apple_JE2_BE2.gif?f4719"
  },
  {
    "id": "goat_horn",
    "title": "Goat Horn",
    "url": "https://minecraft.wiki/w/Goat_Horn",
    "image_url": "/itemImages/goat_horn.png",
    "renewable": "yes",
    "stackable": 1,
    "rarity": "uncommon",
    "initial_release": "1.19",
    "obtaining": [
      "Mob loot",
      "Chest loot"
    ],
    "usage": [
      "Sound the alarms!"
    ],
    "inventory_categories": [
      "tools_and_utilities"
    ],
    "recipe": [
      "none"
    ],
    "loot": [
      "container",
      "mob"
    ],
    "chinese_title": "山羊角",
    "wiki_image_url": "https://minecraft.wiki/images/Goat_Horn_JE1_BE1.png?e4c0f"
  },
  {
    "id": "glass_bottle",
    "title": "Glass Bottle",
    "url": "https://minecraft.wiki/w/Glass_Bottle",
    "image_url": "/itemImages/glass_bottle.png",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "1.0.0",
    "obtaining": [
      "Mob loot",
      "Crafting",
      "Drinking",
      "Mud",
      "Cauldrons"
    ],
    "usage": [
      "Collecting liquids",
      "Trading",
      "Crafting ingredients"
    ],
    "inventory_categories": [
      "ingredients"
    ],
    "recipe": [
      "crafting_table"
    ],
    "loot": [
      "mob"
    ],
    "chinese_title": "玻璃瓶",
    "wiki_image_url": "https://minecraft.wiki/images/Glass_Bottle_JE2_BE2.png?4b45e"
  },
  {
    "id": "glow_ink_sac",
    "title": "Glow Ink Sac",
    "url": "https://minecraft.wiki/w/Glow_Ink_Sac",
    "image_url": "/itemImages/glow_ink_sac.png",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "1.17",
    "obtaining": [
      "Mob loot"
    ],
    "usage": [
      "Crafting ingredient",
      "Signs"
    ],
    "inventory_categories": [
      "ingredients"
    ],
    "recipe": [
      "none"
    ],
    "loot": [
      "mob"
    ],
    "chinese_title": "荧光墨囊",
    "wiki_image_url": "https://minecraft.wiki/images/Glow_Ink_Sac_JE1_BE1.png?d2917"
  },
  {
    "id": "gold_ingot",
    "title": "Gold Ingot",
    "url": "https://minecraft.wiki/w/Gold_Ingot",
    "image_url": "/itemImages/gold_ingot.png",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "pre-alpha",
    "obtaining": [
      "Crafting",
      "Smelting",
      "Mob loot",
      "Chest loot"
    ],
    "usage": [
      "Crafting ingredient",
      "Trading",
      "Repairing",
      "Bartering",
      "Beacons",
      "Smithing ingredient"
    ],
    "inventory_categories": [
      "ingredients"
    ],
    "recipe": [
      "crafting_table",
      "furnace"
    ],
    "loot": [
      "container",
      "mob"
    ],
    "chinese_title": "金锭",
    "wiki_image_url": "https://minecraft.wiki/images/Gold_Ingot_JE4_BE2.png?80cd6"
  },
  {
    "id": "golden_apple",
    "title": "Golden Apple",
    "url": "https://minecraft.wiki/w/Golden_Apple",
    "image_url": "/itemImages/golden_apple.png",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "pre-alpha",
    "obtaining": [
      "Chest loot",
      "Crafting"
    ],
    "usage": [
      "Food",
      "Curing zombie villagers",
      "Horses",
      "Piglins"
    ],
    "inventory_categories": [
      "food_and_drinks"
    ],
    "recipe": [
      "crafting_table"
    ],
    "loot": [
      "container"
    ],
    "chinese_title": "金苹果",
    "wiki_image_url": "https://minecraft.wiki/images/Golden_Apple_JE2_BE2.png?aa827"
  },
  {
    "id": "golden_carrot",
    "title": "Golden Carrot",
    "url": "https://minecraft.wiki/w/Golden_Carrot",
    "image_url": "/itemImages/golden_carrot.png",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "1.4.2",
    "obtaining": [
      "Chest loot",
      "Crafting",
      "Trading"
    ],
    "usage": [
      "Food",
      "Animal food",
      "Brewing ingredient"
    ],
    "inventory_categories": [
      "food_and_drinks",
      "ingredients"
    ],
    "recipe": [
      "crafting_table"
    ],
    "loot": [
      "container",
      "trading"
    ],
    "chinese_title": "金胡萝卜",
    "wiki_image_url": "https://minecraft.wiki/images/Golden_Carrot_JE4_BE2.png?43b25"
  },
  {
    "id": "honeycomb",
    "title": "Honeycomb",
    "url": "https://minecraft.wiki/w/Honeycomb",
    "image_url": "/itemImages/honeycomb.png",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "1.15",
    "obtaining": [
      "Harvesting",
      "Generated loot"
    ],
    "usage": [
      "Signs",
      "Waxing",
      "Crafting ingredient"
    ],
    "inventory_categories": [
      "ingredients"
    ],
    "recipe": [
      "none"
    ],
    "loot": [
      "container"
    ],
    "chinese_title": "蜜脾",
    "wiki_image_url": "https://minecraft.wiki/images/Honeycomb_JE2_BE2.png?2ecff"
  },
  {
    "id": "honey_bottle",
    "title": "Honey Bottle",
    "url": "https://minecraft.wiki/w/Honey_Bottle",
    "image_url": "/itemImages/honey_bottle.png",
    "renewable": "yes",
    "stackable": 16,
    "rarity": "common",
    "initial_release": "1.15",
    "obtaining": [
      "Crafting",
      "Harvesting"
    ],
    "usage": [
      "Crafting ingredient",
      "Food"
    ],
    "inventory_categories": [
      "food_and_drinks"
    ],
    "recipe": [
      "crafting_table"
    ],
    "loot": [
      "container"
    ],
    "chinese_title": "蜂蜜瓶",
    "wiki_image_url": "https://minecraft.wiki/images/Honey_Bottle_JE1_BE2.png?78afc"
  },
  {
    "id": "ink_sac",
    "title": "Ink Sac",
    "url": "https://minecraft.wiki/w/Ink_Sac",
    "image_url": "/itemImages/ink_sac.png",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "Beta 1.2",
    "obtaining": [
      "Mob loot",
      "Fishing"
    ],
    "usage": [
      "Crafting ingredient",
      "Loom ingredient",
      "Dye",
      "Trading",
      "Signs"
    ],
    "inventory_categories": [
      "ingredients"
    ],
    "recipe": [
      "none"
    ],
    "loot": [
      "mob",
      "fishing"
    ],
    "chinese_title": "墨囊",
    "wiki_image_url": "https://minecraft.wiki/images/Ink_Sac_JE2_BE2.png?133f5"
  },
  {
    "id": "iron_ingot",
    "title": "Iron Ingot",
    "url": "https://minecraft.wiki/w/Iron_Ingot",
    "image_url": "/itemImages/iron_ingot.png",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "pre-alpha",
    "obtaining": [
      "Crafting",
      "Smelting",
      "Mob loot",
      "Chest loot"
    ],
    "usage": [
      "Crafting ingredient",
      "Trading",
      "Repairing",
      "Healing iron golems",
      "Beacons",
      "Smithing ingredient"
    ],
    "inventory_categories": [
      "ingredients"
    ],
    "recipe": [
      "crafting_table",
      "furnace"
    ],
    "loot": [
      "container",
      "mob"
    ],
    "chinese_title": "铁锭",
    "wiki_image_url": "https://minecraft.wiki/images/Iron_Ingot_JE3_BE2.png?849cb"
  },
  {
    "id": "knowledge_book",
    "title": "Knowledge Book",
    "url": "https://minecraft.wiki/w/Knowledge_Book",
    "image_url": "/itemImages/knowledge_book.png",
    "renewable": "no",
    "stackable": 1,
    "rarity": "epic",
    "initial_release": "1.12",
    "obtaining": [
      "Commands"
    ],
    "usage": [
      "Learn Recipes"
    ],
    "inventory_categories": [
      "none"
    ],
    "recipe": [
      "none"
    ],
    "loot": [
      "none"
    ],
    "chinese_title": "知识之书",
    "wiki_image_url": "https://minecraft.wiki/images/Knowledge_Book_JE2.png?c1af4"
  },
  {
    "id": "lapis_lazuli",
    "title": "Lapis Lazuli",
    "url": "https://minecraft.wiki/w/Lapis_Lazuli",
    "image_url": "/itemImages/lapis_lazuli.png",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "Beta 1.2",
    "obtaining": [
      "Mining",
      "Chest loot",
      "Crafting",
      "Smelting",
      "Trading",
      "Villager gifts"
    ],
    "usage": [
      "Enchanting",
      "Crafting ingredient",
      "Loom ingredient",
      "Dye",
      "Smithing ingredient"
    ],
    "inventory_categories": [
      "ingredients"
    ],
    "recipe": [
      "crafting_table",
      "furnace"
    ],
    "loot": [
      "container",
      "trading"
    ],
    "chinese_title": "青金石",
    "wiki_image_url": "https://minecraft.wiki/images/Lapis_Lazuli_JE2_BE2.png?03506"
  },
  {
    "id": "melon_slice",
    "title": "Melon Slice",
    "url": "https://minecraft.wiki/w/Melon_Slice",
    "image_url": "/itemImages/melon_slice.png",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "Beta 1.8",
    "obtaining": [
      "Block loot"
    ],
    "usage": [
      "Food",
      "Crafting ingredient",
      "Composting"
    ],
    "inventory_categories": [
      "food_and_drinks"
    ],
    "recipe": [
      "none"
    ],
    "loot": [
      "none"
    ],
    "chinese_title": "西瓜片",
    "wiki_image_url": "https://minecraft.wiki/images/Melon_Slice_JE2_BE2.png?b8c6b"
  },
  {
    "id": "milk_bucket",
    "title": "Milk Bucket",
    "url": "https://minecraft.wiki/w/Milk_Bucket",
    "image_url": "/itemImages/milk_bucket.png",
    "renewable": "yes",
    "stackable": 1,
    "rarity": "common",
    "initial_release": "Alpha 1.0.8",
    "obtaining": [
      "Harvesting",
      "Mob loot",
      "Chest loot"
    ],
    "usage": [
      "Crafting ingredient",
      "Food"
    ],
    "inventory_categories": [
      "tools_and_utilities",
      "food_and_drinks"
    ],
    "recipe": [
      "none"
    ],
    "loot": [
      "container",
      "mob"
    ],
    "chinese_title": "奶桶",
    "wiki_image_url": "https://minecraft.wiki/images/Milk_Bucket_JE2_BE2.png?99ff1"
  },
  {
    "id": "mushroom_stew",
    "title": "Mushroom Stew",
    "url": "https://minecraft.wiki/w/Mushroom_Stew",
    "image_url": "/itemImages/mushroom_stew.png",
    "renewable": "yes",
    "stackable": 1,
    "rarity": "common",
    "initial_release": "pre-alpha",
    "obtaining": [
      "Crafting",
      "Harvesting"
    ],
    "usage": [
      "Food"
    ],
    "inventory_categories": [
      "food_and_drinks"
    ],
    "recipe": [
      "crafting_table"
    ],
    "loot": [
      "mob"
    ],
    "chinese_title": "蘑菇煲",
    "wiki_image_url": "https://minecraft.wiki/images/Mushroom_Stew_JE2_BE2.png?57ddf"
  },
  {
    "id": "music_disc",
    "title": "Music Disc",
    "url": "https://minecraft.wiki/w/Music_Disc",
    "image_url": "/itemImages/music_disc.png",
    "renewable": "partial",
    "stackable": 1,
    "rarity": "mixed",
    "initial_release": "Alpha 1.0.14",
    "obtaining": [
      "Mob loot",
      "Chest loot",
      "Crafting",
      "Archaeology"
    ],
    "usage": [
      "Play Music"
    ],
    "inventory_categories": [
      "tools_and_utilities"
    ],
    "recipe": [
      "crafting_table"
    ],
    "loot": [
      "container",
      "mob"
    ],
    "chinese_title": "音乐唱片",
    "wiki_image_url": "https://minecraft.wiki/images/Music_Disc_13_JE1_BE1.png?3ad74"
  },
  {
    "id": "name_tag",
    "title": "Name Tag",
    "url": "https://minecraft.wiki/w/Name_Tag",
    "image_url": "/itemImages/name_tag.png",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "1.6.1",
    "obtaining": [
      "Chest loot",
      "Fishing",
      "Trading"
    ],
    "usage": [
      "Limitations",
      "Behavior",
      "Easter eggs"
    ],
    "inventory_categories": [
      "tools_and_utilities"
    ],
    "recipe": [
      "none"
    ],
    "loot": [
      "container",
      "fishing",
      "trading"
    ],
    "chinese_title": "命名牌",
    "wiki_image_url": "https://minecraft.wiki/images/Name_Tag_JE2_BE2.png?cbdc1"
  },
  {
    "id": "poisonous_potato",
    "title": "Poisonous Potato",
    "url": "https://minecraft.wiki/w/Poisonous_Potato",
    "image_url": "/itemImages/poisonous_potato.png",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "1.4.2",
    "obtaining": [
      "Chest loot",
      "Farming"
    ],
    "usage": [
      "Food"
    ],
    "inventory_categories": [
      "food_and_drinks"
    ],
    "recipe": [
      "none"
    ],
    "loot": [
      "container"
    ],
    "chinese_title": "毒马铃薯",
    "wiki_image_url": "https://minecraft.wiki/images/Poisonous_Potato_JE3_BE2.png?8f886"
  },
  {
    "id": "potion",
    "title": "Potion",
    "url": "https://minecraft.wiki/w/Potion",
    "image_url": "/itemImages/potion.png",
    "renewable": "partial",
    "stackable": 1,
    "rarity": "common",
    "initial_release": "1.0.0",
    "obtaining": [
      "Mob loot",
      "Chest loot",
      "Brewing",
      "Bartering",
      "Fishing"
    ],
    "usage": [
      "Modifiers",
      "Base potions",
      "Effect potions",
      "Uncraftable potion",
      "Joke potions",
      "Undead mobs",
      "Mud conversion",
      "Filling cauldrons with Potions"
    ],
    "inventory_categories": [
      "food_and_drinks"
    ],
    "recipe": [
      "brewing_stand"
    ],
    "loot": [
      "container",
      "mob",
      "fishing",
      "trading"
    ],
    "chinese_title": "药水",
    "wiki_image_url": "https://minecraft.wiki/images/Water_Bottle_JE2_BE2.png?acae5"
  },
  {
    "id": "pufferfish",
    "title": "Pufferfish",
    "url": "https://minecraft.wiki/w/Pufferfish_(item)",
    "image_url": "/itemImages/pufferfish.png",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "1.7.2",
    "obtaining": [
      "Mob loot",
      "Fishing"
    ],
    "usage": [
      "Food",
      "Brewing ingredient",
      "Trading",
      "Wolves"
    ],
    "inventory_categories": [
      "food_and_drinks",
      "ingredients"
    ],
    "recipe": [
      "none"
    ],
    "loot": [
      "mob",
      "fishing"
    ],
    "chinese_title": "河豚",
    "wiki_image_url": "https://minecraft.wiki/images/Pufferfish_%28item%29_JE5_BE2.png?c436f"
  },
  {
    "id": "pumpkin_pie",
    "title": "Pumpkin Pie",
    "url": "https://minecraft.wiki/w/Pumpkin_Pie",
    "image_url": "/itemImages/pumpkin_pie.png",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "1.4.2",
    "obtaining": [
      "Chest loot",
      "Crafting",
      "Trading"
    ],
    "usage": [
      "Food",
      "Composting"
    ],
    "inventory_categories": [
      "food_and_drinks"
    ],
    "recipe": [
      "crafting_table"
    ],
    "loot": [
      "container",
      "trading"
    ],
    "chinese_title": "南瓜派",
    "wiki_image_url": "https://minecraft.wiki/images/Pumpkin_Pie_JE2_BE2.png?d7f38"
  },
  {
    "id": "rabbit_stew",
    "title": "Rabbit Stew",
    "url": "https://minecraft.wiki/w/Rabbit_Stew",
    "image_url": "/itemImages/rabbit_stew.png",
    "renewable": "yes",
    "stackable": 1,
    "rarity": "common",
    "initial_release": "1.8",
    "obtaining": [
      "Crafting",
      "Trading"
    ],
    "usage": [
      "Food",
      "Wolves"
    ],
    "inventory_categories": [
      "food_and_drinks"
    ],
    "recipe": [
      "crafting_table"
    ],
    "loot": [
      "trading"
    ],
    "chinese_title": "兔肉煲",
    "wiki_image_url": "https://minecraft.wiki/images/Rabbit_Stew_JE3_BE2.png?f7678"
  },
  {
    "id": "beef",
    "title": "Raw Beef",
    "url": "https://minecraft.wiki/w/Raw_Beef",
    "image_url": "/itemImages/beef.png",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "Beta 1.8",
    "obtaining": [
      "Mob loot",
      "Chest loot"
    ],
    "usage": [
      "Food",
      "Smelting ingredient",
      "Wolves",
      "Trading"
    ],
    "inventory_categories": [
      "food_and_drinks"
    ],
    "recipe": [
      "none"
    ],
    "loot": [
      "container",
      "mob"
    ],
    "chinese_title": "生牛肉",
    "wiki_image_url": "https://minecraft.wiki/images/Raw_Beef_JE4_BE3.png?f3d10"
  },
  {
    "id": "chicken",
    "title": "Raw Chicken",
    "url": "https://minecraft.wiki/w/Raw_Chicken",
    "image_url": "/itemImages/chicken.png",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "Beta 1.8",
    "obtaining": [
      "Mob loot",
      "Cat gifts"
    ],
    "usage": [
      "Food",
      "Smelting ingredient",
      "Wolves",
      "Trading"
    ],
    "inventory_categories": [
      "food_and_drinks"
    ],
    "recipe": [
      "none"
    ],
    "loot": [
      "mob"
    ],
    "chinese_title": "生鸡肉",
    "wiki_image_url": "https://minecraft.wiki/images/Raw_Chicken_JE3_BE3.png?549cd"
  },
  {
    "id": "cod",
    "title": "Raw Cod",
    "url": "https://minecraft.wiki/w/Raw_Cod",
    "image_url": "/itemImages/cod.png",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "Alpha 1.2.0",
    "obtaining": [
      "Mob loot",
      "Chest loot",
      "Fishing",
      "Villager gifts"
    ],
    "usage": [
      "Smelting ingredient",
      "Food",
      "Cats",
      "Dolphins",
      "Trading",
      "Wolves"
    ],
    "inventory_categories": [
      "food_and_drinks"
    ],
    "recipe": [
      "none"
    ],
    "loot": [
      "container",
      "mob",
      "fishing",
      "trading"
    ],
    "chinese_title": "生鳕鱼",
    "wiki_image_url": "https://minecraft.wiki/images/Raw_Cod_JE4_BE2.png?f1cc7"
  },
  {
    "id": "mutton",
    "title": "Raw Mutton",
    "url": "https://minecraft.wiki/w/Raw_Mutton",
    "image_url": "/itemImages/mutton.png",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "1.8",
    "obtaining": [
      "Mob loot",
      "Chest loot"
    ],
    "usage": [
      "Food",
      "Smelting ingredient",
      "Wolves",
      "Trading"
    ],
    "inventory_categories": [
      "food_and_drinks"
    ],
    "recipe": [
      "none"
    ],
    "loot": [
      "container",
      "mob"
    ],
    "chinese_title": "生羊肉",
    "wiki_image_url": "https://minecraft.wiki/images/Raw_Mutton_JE3_BE2.png?ea808"
  },
  {
    "id": "porkchop",
    "title": "Raw Porkchop",
    "url": "https://minecraft.wiki/w/Raw_Porkchop",
    "image_url": "/itemImages/porkchop.png",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "pre-alpha",
    "obtaining": [
      "Mob loot",
      "Chest loot"
    ],
    "usage": [
      "Food",
      "Smelting ingredient",
      "Trading",
      "Wolves",
      "Piglins"
    ],
    "inventory_categories": [
      "food_and_drinks"
    ],
    "recipe": [
      "none"
    ],
    "loot": [
      "container",
      "mob"
    ],
    "chinese_title": "生猪排",
    "wiki_image_url": "https://minecraft.wiki/images/Raw_Porkchop_JE3_BE3.png?f1c5f"
  },
  {
    "id": "rabbit",
    "title": "Raw Rabbit",
    "url": "https://minecraft.wiki/w/Raw_Rabbit",
    "image_url": "/itemImages/rabbit.png",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "1.8",
    "obtaining": [
      "Mob loot"
    ],
    "usage": [
      "Smelting ingredient",
      "Wolves",
      "Trading"
    ],
    "inventory_categories": [
      "food_and_drinks"
    ],
    "recipe": [
      "none"
    ],
    "loot": [
      "mob"
    ],
    "chinese_title": "生兔肉",
    "wiki_image_url": "https://minecraft.wiki/images/Raw_Rabbit_JE3_BE2.png?54089"
  },
  {
    "id": "salmon",
    "title": "Raw Salmon",
    "url": "https://minecraft.wiki/w/Raw_Salmon",
    "image_url": "/itemImages/salmon.png",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "1.7.2",
    "obtaining": [
      "Mob loot",
      "Chest loot",
      "Fishing",
      "Villager gifts"
    ],
    "usage": [
      "Smelting ingredient",
      "Food",
      "Cats",
      "Dolphins",
      "Trading",
      "Wolves"
    ],
    "inventory_categories": [
      "food_and_drinks"
    ],
    "recipe": [
      "none"
    ],
    "loot": [
      "container",
      "mob",
      "fishing",
      "trading"
    ],
    "chinese_title": "生鲑鱼",
    "wiki_image_url": "https://minecraft.wiki/images/Raw_Salmon_JE2_BE2.png?db222"
  },
  {
    "id": "rotten_flesh",
    "title": "Rotten Flesh",
    "url": "https://minecraft.wiki/w/Rotten_Flesh",
    "image_url": "/itemImages/rotten_flesh.png",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "Beta 1.8",
    "obtaining": [
      "Mob loot",
      "Chest loot",
      "Fishing",
      "Cat gifts"
    ],
    "usage": [
      "Food",
      "Wolves",
      "Trading"
    ],
    "inventory_categories": [
      "food_and_drinks"
    ],
    "recipe": [
      "none"
    ],
    "loot": [
      "container",
      "mob",
      "fishing"
    ],
    "chinese_title": "腐肉",
    "wiki_image_url": "https://minecraft.wiki/images/Rotten_Flesh_JE3_BE2.png?023cb"
  },
  {
    "id": "saddle",
    "title": "Saddle",
    "url": "https://minecraft.wiki/w/Saddle",
    "image_url": "/itemImages/saddle.png",
    "renewable": "yes",
    "stackable": 1,
    "rarity": "common",
    "initial_release": "pre-alpha",
    "obtaining": [
      "Mob loot",
      "Chest loot",
      "Fishing",
      "Trading"
    ],
    "usage": [
      "Ride Mobs"
    ],
    "inventory_categories": [
      "tools_and_utilities"
    ],
    "recipe": [
      "crafting_table"
    ],
    "loot": [
      "container",
      "mob",
      "fishing",
      "trading"
    ],
    "chinese_title": "鞍",
    "wiki_image_url": "https://minecraft.wiki/images/Saddle_%28Pig%29_JE2_BE2.png?310b1"
  },
  {
    "id": "shears",
    "title": "Shears",
    "url": "https://minecraft.wiki/w/Shears",
    "image_url": "/itemImages/shears.png",
    "renewable": "yes",
    "stackable": 1,
    "rarity": "common",
    "initial_release": "Beta 1.7",
    "obtaining": [
      "Chest loot",
      "Crafting",
      "Trading"
    ],
    "usage": [
      "Shearing",
      "Breaking blocks",
      "Enchantments",
      "Wolf Armor"
    ],
    "inventory_categories": [
      "tools_and_utilities"
    ],
    "recipe": [
      "crafting_table"
    ],
    "loot": [
      "container",
      "trading"
    ],
    "chinese_title": "剪刀",
    "wiki_image_url": "https://minecraft.wiki/images/Shears_JE2_BE2.png?163c5"
  },
  {
    "id": "shield",
    "title": "Shield",
    "url": "https://minecraft.wiki/w/Shield",
    "image_url": "/itemImages/shield.webp",
    "renewable": "yes",
    "stackable": 1,
    "rarity": "common",
    "initial_release": "1.9",
    "obtaining": [
      "Crafting",
      "Trading"
    ],
    "usage": [
      "Defense",
      "Applying patterns",
      "Repairing",
      "Enchantments"
    ],
    "inventory_categories": [
      "combat"
    ],
    "recipe": [
      "crafting_table"
    ],
    "loot": [
      "container",
      "trading"
    ],
    "chinese_title": "盾牌",
    "wiki_image_url": "https://minecraft.wiki/images/Shield_JE2_BE1.png?4837d"
  },
  {
    "id": "spider_eye",
    "title": "Spider Eye",
    "url": "https://minecraft.wiki/w/Spider_Eye",
    "image_url": "/itemImages/spider_eye.png",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "1.0.0",
    "obtaining": [
      "Mob loot",
      "Chest loot"
    ],
    "usage": [
      "Food",
      "Crafting ingredient",
      "Brewing ingredient"
    ],
    "inventory_categories": [
      "food_and_drinks",
      "ingredients"
    ],
    "recipe": [
      "none"
    ],
    "loot": [
      "container",
      "mob"
    ],
    "chinese_title": "蜘蛛眼",
    "wiki_image_url": "https://minecraft.wiki/images/Spider_Eye_JE2_BE2.png?cc51b"
  },
  {
    "id": "spyglass",
    "title": "Spyglass",
    "url": "https://minecraft.wiki/w/Spyglass",
    "image_url": "/itemImages/spyglass.png",
    "renewable": "yes",
    "stackable": 1,
    "rarity": "common",
    "initial_release": "1.17",
    "obtaining": [
      "Crafting"
    ],
    "usage": [
      "Zoom"
    ],
    "inventory_categories": [
      "tools_and_utilities"
    ],
    "recipe": [
      "crafting_table"
    ],
    "loot": [
      "none"
    ],
    "chinese_title": "望远镜",
    "wiki_image_url": "https://minecraft.wiki/images/Spyglass_JE2_BE1.png?cb81d"
  },
  {
    "id": "cooked_beef",
    "title": "Steak",
    "url": "https://minecraft.wiki/w/Steak",
    "image_url": "/itemImages/cooked_beef.png",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "Beta 1.8",
    "obtaining": [
      "Mob loot",
      "Cooking",
      "Villager gifts",
      "Chest loot"
    ],
    "usage": [
      "Food",
      "Wolves"
    ],
    "inventory_categories": [
      "food_and_drinks"
    ],
    "recipe": [
      "furnace"
    ],
    "loot": [
      "container",
      "mob",
      "trading"
    ],
    "chinese_title": "牛排",
    "wiki_image_url": "https://minecraft.wiki/images/Steak_JE4_BE3.png?45317"
  },
  {
    "id": "sugar",
    "title": "Sugar",
    "url": "https://minecraft.wiki/w/Sugar",
    "image_url": "/itemImages/sugar.png",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "Beta 1.2",
    "obtaining": [
      "Mob loot",
      "Crafting"
    ],
    "usage": [
      "Crafting ingredient",
      "Brewing ingredient",
      "Horses"
    ],
    "inventory_categories": [
      "ingredients"
    ],
    "recipe": [
      "crafting_table"
    ],
    "loot": [
      "mob"
    ],
    "chinese_title": "糖",
    "wiki_image_url": "https://minecraft.wiki/images/Sugar_JE2_BE2.png?9185b"
  },
  {
    "id": "suspicious_stew",
    "title": "Suspicious Stew",
    "url": "https://minecraft.wiki/w/Suspicious_Stew",
    "image_url": "/itemImages/suspicious_stew.png",
    "renewable": "yes",
    "stackable": 1,
    "rarity": "common",
    "initial_release": "1.14",
    "obtaining": [
      "Mob loot",
      "Chest loot",
      "Crafting",
      "Harvesting",
      "Trading"
    ],
    "usage": [
      "Food"
    ],
    "inventory_categories": [
      "food_and_drinks"
    ],
    "recipe": [
      "crafting_table"
    ],
    "loot": [
      "container",
      "mob",
      "trading"
    ],
    "chinese_title": "谜之炖菜",
    "wiki_image_url": "https://minecraft.wiki/images/Suspicious_Stew_JE1_BE1.png?d4da8"
  },
  {
    "id": "totem_of_undying",
    "title": "Totem of Undying",
    "url": "https://minecraft.wiki/w/Totem_of_Undying",
    "image_url": "/itemImages/totem_of_undying.png",
    "renewable": "yes",
    "stackable": 1,
    "rarity": "uncommon",
    "initial_release": "1.11",
    "obtaining": [
      "Mob loot"
    ],
    "usage": [
      "Revive Token"
    ],
    "inventory_categories": [
      "combat"
    ],
    "recipe": [
      "none"
    ],
    "loot": [
      "mob"
    ],
    "chinese_title": "不死图腾",
    "wiki_image_url": "https://minecraft.wiki/images/Totem_of_Undying_JE2_BE2.png?d56eb"
  },
  {
    "id": "tropical_fish",
    "title": "Tropical Fish",
    "url": "https://minecraft.wiki/w/Tropical_Fish",
    "image_url": "/itemImages/tropical_fish.png",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "1.7.2",
    "obtaining": [
      "Fishing",
      "Mob loot"
    ],
    "usage": [
      "Food",
      "Trading",
      "Wolves"
    ],
    "inventory_categories": [
      "food_and_drinks"
    ],
    "recipe": [
      "none"
    ],
    "loot": [
      "mob",
      "fishing"
    ],
    "chinese_title": "热带鱼",
    "wiki_image_url": "https://minecraft.wiki/images/Clownfish.png?1b6b5"
  },
  {
    "id": "warped_fungus_on_a_stick",
    "title": "Warped Fungus on a Stick",
    "url": "https://minecraft.wiki/w/Warped_Fungus_on_a_Stick",
    "image_url": "/itemImages/warped_fungus_on_a_stick.png",
    "renewable": "yes",
    "stackable": 1,
    "rarity": "common",
    "initial_release": "1.16",
    "obtaining": [
      "Mob loot",
      "Crafting"
    ],
    "usage": [
      "Enchantments"
    ],
    "inventory_categories": [
      "tools_and_utilities"
    ],
    "recipe": [
      "crafting_table"
    ],
    "loot": [
      "mob"
    ],
    "chinese_title": "诡异菌钓竿",
    "wiki_image_url": "https://minecraft.wiki/images/Warped_Fungus_on_a_Stick_JE1_BE1.png?58d87"
  },
  {
    "id": "wheat",
    "title": "Wheat",
    "url": "https://minecraft.wiki/w/Wheat",
    "image_url": "/itemImages/wheat.png",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "pre-alpha",
    "obtaining": [
      "Mob loot",
      "Chest loot",
      "Crafting",
      "Farming"
    ],
    "usage": [
      "Food",
      "Crafting ingredient",
      "Trading",
      "Composting"
    ],
    "inventory_categories": [
      "ingredients"
    ],
    "recipe": [
      "crafting_table"
    ],
    "loot": [
      "container",
      "mob"
    ],
    "chinese_title": "小麦",
    "wiki_image_url": "https://minecraft.wiki/images/Wheat_JE2_BE2.png?b8cd3"
  },
  {
    "id": "written_book",
    "title": "Written Book",
    "url": "https://minecraft.wiki/w/Written_Book",
    "image_url": "/itemImages/written_book.gif",
    "renewable": "yes",
    "stackable": 16,
    "rarity": "common",
    "initial_release": "1.3.1",
    "obtaining": [
      "Signing a book and quill",
      "Copying"
    ],
    "usage": [
      "Lecterns",
      "Chiseled bookshelf"
    ],
    "inventory_categories": [
      "none"
    ],
    "recipe": [
      "crafting_table"
    ],
    "loot": [
      "none"
    ],
    "chinese_title": "成书",
    "wiki_image_url": "https://minecraft.wiki/images/Written_Book_JE2_BE2.gif?c6510"
  },
  {
    "id": "pottery_sherd",
    "title": "Pottery Sherd",
    "url": "https://minecraft.wiki/w/Pottery_Sherd",
    "image_url": "/itemImages/pottery_sherd.png",
    "renewable": "no",
    "stackable": 64,
    "rarity": "uncommon",
    "initial_release": "1.20",
    "obtaining": [
      "Breaking",
      "Suspicious block loot",
      "Identification"
    ],
    "usage": [
      "Crafting ingredient"
    ],
    "inventory_categories": [
      "ingredients"
    ],
    "recipe": [
      "none"
    ],
    "loot": [
      "container"
    ],
    "chinese_title": "陶片",
    "wiki_image_url": "https://minecraft.wiki/images/Wiki.png"
  },
  {
    "id": "banner_pattern",
    "title": "Banner Pattern",
    "url": "https://minecraft.wiki/w/Banner_Pattern",
    "image_url": "/itemImages/banner_pattern.webp",
    "renewable": "partial",
    "stackable": 1,
    "rarity": "mixed",
    "initial_release": "1.14",
    "obtaining": [
      "Crafting",
      "Trading",
      "Chest loot"
    ],
    "usage": [
      "Loom ingredient"
    ],
    "inventory_categories": [
      "ingredients"
    ],
    "recipe": [
      "crafting_table"
    ],
    "loot": [
      "container",
      "trading"
    ],
    "chinese_title": "旗帜图案",
    "wiki_image_url": "https://minecraft.wiki/images/Wiki.png"
  },
  {
    "id": "blaze_powder",
    "title": "Blaze Powder",
    "url": "https://minecraft.wiki/w/Blaze_Powder",
    "image_url": "/itemImages/blaze_powder.png",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "1.0.0",
    "obtaining": [
      "Crafting"
    ],
    "usage": [
      "Crafting Ingredient",
      "Brewing stand fuel",
      "Brewing ingredient"
    ],
    "inventory_categories": [
      "ingredients"
    ],
    "recipe": [
      "crafting_table"
    ],
    "loot": [
      "none"
    ],
    "chinese_title": "烈焰粉",
    "wiki_image_url": "https://minecraft.wiki/images/Blaze_Powder_JE2_BE1.png?b5dec"
  },
  {
    "id": "blaze_rod",
    "title": "Blaze Rod",
    "url": "https://minecraft.wiki/w/Blaze_Rod",
    "image_url": "/itemImages/blaze_rod.png",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "1.0.0",
    "obtaining": [
      "Mob loot"
    ],
    "usage": [
      "Crafting ingredient",
      "Fuel"
    ],
    "inventory_categories": [
      "ingredients"
    ],
    "recipe": [
      "none"
    ],
    "loot": [
      "mob"
    ],
    "chinese_title": "烈焰棒",
    "wiki_image_url": "https://minecraft.wiki/images/Blaze_Rod_JE1_BE1.png?ae16e"
  },
  {
    "id": "brick",
    "title": "Brick",
    "url": "https://minecraft.wiki/w/Brick",
    "image_url": "/itemImages/brick.png",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "Alpha 1.0.11",
    "obtaining": [
      "Mining",
      "Chest loot",
      "Smelting",
      "Trading"
    ],
    "usage": [
      "Crafting ingredient"
    ],
    "inventory_categories": [
      "ingredients"
    ],
    "recipe": [
      "furnace"
    ],
    "loot": [
      "container",
      "trading"
    ],
    "chinese_title": "红砖",
    "wiki_image_url": "https://minecraft.wiki/images/Brick_JE2_BE2.png?1ff17"
  },
  {
    "id": "charcoal",
    "title": "Charcoal",
    "url": "https://minecraft.wiki/w/Charcoal",
    "image_url": "/itemImages/charcoal.png",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "Beta 1.2",
    "obtaining": [
      "Mining",
      "Smelting"
    ],
    "usage": [
      "Crafting ingredient",
      "Fuel"
    ],
    "inventory_categories": [
      "ingredients"
    ],
    "recipe": [
      "furnace"
    ],
    "loot": [
      "none"
    ],
    "chinese_title": "木炭",
    "wiki_image_url": "https://minecraft.wiki/images/Charcoal_JE4_BE4.png?9a1ec"
  },
  {
    "id": "clay_ball",
    "title": "Clay Ball",
    "url": "https://minecraft.wiki/w/Clay_Ball",
    "image_url": "/itemImages/clay_ball.png",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "Alpha 1.0.11",
    "obtaining": [
      "Mining",
      "Chest loot",
      "Villager gifts"
    ],
    "usage": [
      "Crafting ingredient",
      "Smelting ingredient",
      "Trading"
    ],
    "inventory_categories": [
      "ingredients"
    ],
    "recipe": [
      "none"
    ],
    "loot": [
      "container"
    ],
    "chinese_title": "黏土球",
    "wiki_image_url": "https://minecraft.wiki/images/Clay_Ball_JE2_BE2.png?b5328"
  },
  {
    "id": "clock",
    "title": "Clock",
    "url": "https://minecraft.wiki/w/Clock",
    "image_url": "/itemImages/clock.gif",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "Alpha 1.2.0",
    "obtaining": [
      "Chest loot",
      "Crafting",
      "Trading"
    ],
    "usage": [
      "Piglins"
    ],
    "inventory_categories": [
      "tools_and_utilities"
    ],
    "recipe": [
      "crafting_table"
    ],
    "loot": [
      "container",
      "trading"
    ],
    "chinese_title": "时钟",
    "wiki_image_url": "https://minecraft.wiki/images/Clock_JE3_BE3.gif?8eaae"
  },
  {
    "id": "coal",
    "title": "Coal",
    "url": "https://minecraft.wiki/w/Coal",
    "image_url": "/itemImages/coal.png",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "pre-alpha",
    "obtaining": [
      "Mining",
      "Mob loot",
      "Chest loot",
      "Crafting",
      "Smelting"
    ],
    "usage": [
      "Crafting ingredient",
      "Fuel",
      "Trading"
    ],
    "inventory_categories": [
      "ingredients"
    ],
    "recipe": [
      "crafting_table",
      "furnace"
    ],
    "loot": [
      "container",
      "mob"
    ],
    "chinese_title": "煤炭",
    "wiki_image_url": "https://minecraft.wiki/images/Coal_JE4_BE3.png?165e9"
  },
  {
    "id": "armor_trim_smithing_template",
    "title": "Armor Trim",
    "url": "https://minecraft.wiki/w/Armor_Trim",
    "image_url": "/itemImages/armor_trim_smithing_template.png",
    "renewable": "no",
    "stackable": 64,
    "rarity": "mixed",
    "initial_release": "1.20",
    "obtaining": [
      "Crafting",
      "Generated loot",
      "Mob Loot",
      "Chest loot"
    ],
    "usage": [
      "Crafting ingredient",
      "Smithing ingredient"
    ],
    "inventory_categories": [
      "ingredients"
    ],
    "recipe": [
      "crafting_table"
    ],
    "loot": [
      "container",
      "mob"
    ],
    "chinese_title": "锻造模板",
    "wiki_image_url": "https://minecraft.wiki/images/Netherite_Upgrade_Smithing_Template_JE1_BE1.png?055f6"
  },
  {
    "id": "copper_ingot",
    "title": "Copper Ingot",
    "url": "https://minecraft.wiki/w/Copper_Ingot",
    "image_url": "/itemImages/copper_ingot.png",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "1.17",
    "obtaining": [
      "Crafting",
      "Smelting",
      "Mob loot"
    ],
    "usage": [
      "Crafting ingredient",
      "Smithing ingredient"
    ],
    "inventory_categories": [
      "ingredients"
    ],
    "recipe": [
      "crafting_table",
      "furnace"
    ],
    "loot": [
      "mob"
    ],
    "chinese_title": "铜锭",
    "wiki_image_url": "https://minecraft.wiki/images/Copper_Ingot_JE2_BE1.png?0d410"
  },
  {
    "id": "diamond",
    "title": "Diamond",
    "url": "https://minecraft.wiki/w/Diamond",
    "image_url": "/itemImages/diamond.png",
    "renewable": "no",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "pre-alpha",
    "obtaining": [
      "Mining",
      "Generated loot",
      "Crafting",
      "Smelting"
    ],
    "usage": [
      "Crafting ingredient",
      "Trading",
      "Repairing",
      "Beacons",
      "Smithing ingredient"
    ],
    "inventory_categories": [
      "ingredients"
    ],
    "recipe": [
      "crafting_table",
      "furnace"
    ],
    "loot": [
      "container"
    ],
    "chinese_title": "钻石",
    "wiki_image_url": "https://minecraft.wiki/images/Diamond_JE3_BE3.png?99d00"
  },
  {
    "id": "disc_fragment",
    "title": "Disc Fragment",
    "url": "https://minecraft.wiki/w/Disc_Fragment",
    "image_url": "/itemImages/disc_fragment.png",
    "renewable": "no",
    "stackable": 64,
    "rarity": "uncommon",
    "initial_release": "1.19",
    "obtaining": [
      "Chest loot"
    ],
    "usage": [
      "Crafting ingredient"
    ],
    "inventory_categories": [
      "ingredients"
    ],
    "recipe": [
      "none"
    ],
    "loot": [
      "container"
    ],
    "chinese_title": "唱片残片",
    "wiki_image_url": "https://minecraft.wiki/images/Disc_Fragment_5_JE1_BE1.png?7433a"
  },
  {
    "id": "dragon_breath",
    "title": "Dragon's Breath",
    "url": "https://minecraft.wiki/w/Dragon%27s_Breath",
    "image_url": "/itemImages/dragon_breath.png",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "uncommon",
    "initial_release": "1.9",
    "obtaining": [
      "Harvesting"
    ],
    "usage": [
      "Brewing ingredient"
    ],
    "inventory_categories": [
      "ingredients"
    ],
    "recipe": [
      "none"
    ],
    "loot": [
      "none"
    ],
    "chinese_title": "龙息",
    "wiki_image_url": "https://minecraft.wiki/images/Dragon%27s_Breath_JE2_BE2.png?3e5c5"
  },
  {
    "id": "echo_shard",
    "title": "Echo Shard",
    "url": "https://minecraft.wiki/w/Echo_Shard",
    "image_url": "/itemImages/echo_shard.png",
    "renewable": "no",
    "stackable": 64,
    "rarity": "uncommon",
    "initial_release": "1.19",
    "obtaining": [
      "Chest loot"
    ],
    "usage": [
      "Crafting ingredient"
    ],
    "inventory_categories": [
      "ingredients"
    ],
    "recipe": [
      "none"
    ],
    "loot": [
      "container"
    ],
    "chinese_title": "回响碎片",
    "wiki_image_url": "https://minecraft.wiki/images/Echo_Shard_JE1_BE1.png?726c3"
  },
  {
    "id": "emerald",
    "title": "Emerald",
    "url": "https://minecraft.wiki/w/Emerald",
    "image_url": "/itemImages/emerald.png",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "1.3.1",
    "obtaining": [
      "Mining",
      "Crafting",
      "Smelting",
      "Trading",
      "Mob loot",
      "Chest loot"
    ],
    "usage": [
      "Trading",
      "Crafting ingredient",
      "Beacons",
      "Smithing ingredient"
    ],
    "inventory_categories": [
      "ingredients"
    ],
    "recipe": [
      "crafting_table",
      "furnace"
    ],
    "loot": [
      "container",
      "mob",
      "trading"
    ],
    "chinese_title": "绿宝石",
    "wiki_image_url": "https://minecraft.wiki/images/Emerald_JE3_BE3.png?4c5f3"
  },
  {
    "id": "feather",
    "title": "Feather",
    "url": "https://minecraft.wiki/w/Feather",
    "image_url": "/itemImages/feather.png",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "pre-alpha",
    "obtaining": [
      "Mob loot",
      "Chest loot",
      "Cat gifts"
    ],
    "usage": [
      "Crafting ingredient",
      "Trading"
    ],
    "inventory_categories": [
      "ingredients"
    ],
    "recipe": [
      "none"
    ],
    "loot": [
      "container",
      "mob"
    ],
    "chinese_title": "羽毛",
    "wiki_image_url": "https://minecraft.wiki/images/Feather_JE3_BE2.png?b869b"
  },
  {
    "id": "fermented_spider_eye",
    "title": "Fermented Spider Eye",
    "url": "https://minecraft.wiki/w/Fermented_Spider_Eye",
    "image_url": "/itemImages/fermented_spider_eye.png",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "1.0.0",
    "obtaining": [
      "Crafting"
    ],
    "usage": [
      "Brewing ingredient"
    ],
    "inventory_categories": [
      "ingredients"
    ],
    "recipe": [
      "crafting_table"
    ],
    "loot": [
      "none"
    ],
    "chinese_title": "发酵蛛眼",
    "wiki_image_url": "https://minecraft.wiki/images/Fermented_Spider_Eye_JE2_BE2.png?ad046"
  },
  {
    "id": "firework_star",
    "title": "Firework Star",
    "url": "https://minecraft.wiki/w/Firework_Star",
    "image_url": "/itemImages/firework_star.png",
    "renewable": "partial",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "1.4.6",
    "obtaining": [
      "Crafting"
    ],
    "usage": [
      "Crafting ingredient"
    ],
    "inventory_categories": [
      "ingredients"
    ],
    "recipe": [
      "crafting_table"
    ],
    "loot": [
      "none"
    ],
    "chinese_title": "烟火之星",
    "wiki_image_url": "https://minecraft.wiki/images/Firework_Star_JE1_BE1.png?f2057"
  },
  {
    "id": "flint",
    "title": "Flint",
    "url": "https://minecraft.wiki/w/Flint",
    "image_url": "/itemImages/flint.png",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "pre-alpha",
    "obtaining": [
      "Mining",
      "Chest loot",
      "Trading"
    ],
    "usage": [
      "Crafting ingredient",
      "Trading"
    ],
    "inventory_categories": [
      "ingredients"
    ],
    "recipe": [
      "none"
    ],
    "loot": [
      "container",
      "trading"
    ],
    "chinese_title": "燧石",
    "wiki_image_url": "https://minecraft.wiki/images/Flint_JE3_BE3.png?d10d1"
  },
  {
    "id": "ghast_tear",
    "title": "Ghast Tear",
    "url": "https://minecraft.wiki/w/Ghast_Tear",
    "image_url": "/itemImages/ghast_tear.png",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "1.0.0",
    "obtaining": [
      "Mob loot"
    ],
    "usage": [
      "Brewing ingredient",
      "Crafting ingredient"
    ],
    "inventory_categories": [
      "ingredients"
    ],
    "recipe": [
      "none"
    ],
    "loot": [
      "mob"
    ],
    "chinese_title": "恶魂之泪",
    "wiki_image_url": "https://minecraft.wiki/images/Ghast_Tear_JE2_BE2.png?2c989"
  },
  {
    "id": "glistering_melon_slice",
    "title": "Glistering Melon Slice",
    "url": "https://minecraft.wiki/w/Glistering_Melon_Slice",
    "image_url": "/itemImages/glistering_melon_slice.png",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "1.0.0",
    "obtaining": [
      "Chest loot",
      "Crafting",
      "Trading"
    ],
    "usage": [
      "Brewing ingredient",
      "Piglins"
    ],
    "inventory_categories": [
      "ingredients"
    ],
    "recipe": [
      "crafting_table"
    ],
    "loot": [
      "container",
      "trading"
    ],
    "chinese_title": "闪烁的西瓜片",
    "wiki_image_url": "https://minecraft.wiki/images/Glistering_Melon_Slice_JE3_BE2.png?44715"
  },
  {
    "id": "glowstone_dust",
    "title": "Glowstone Dust",
    "url": "https://minecraft.wiki/w/Glowstone_Dust",
    "image_url": "/itemImages/glowstone_dust.png",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "Alpha 1.2.0",
    "obtaining": [
      "Mining",
      "Mob loot",
      "Trading"
    ],
    "usage": [
      "Crafting ingredient",
      "Brewing ingredient"
    ],
    "inventory_categories": [
      "ingredients"
    ],
    "recipe": [
      "none"
    ],
    "loot": [
      "mob"
    ],
    "chinese_title": "荧石粉",
    "wiki_image_url": "https://minecraft.wiki/images/Glowstone_Dust_JE2_BE2.png?9bc1d"
  },
  {
    "id": "gold_nugget",
    "title": "Gold Nugget",
    "url": "https://minecraft.wiki/w/Gold_Nugget",
    "image_url": "/itemImages/gold_nugget.png",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "1.0.0",
    "obtaining": [
      "Crafting",
      "Smelting",
      "Mob loot",
      "Chest loot",
      "Mining"
    ],
    "usage": [
      "Crafting ingredient"
    ],
    "inventory_categories": [
      "ingredients"
    ],
    "recipe": [
      "crafting_table",
      "furnace"
    ],
    "loot": [
      "container",
      "mob"
    ],
    "chinese_title": "金粒",
    "wiki_image_url": "https://minecraft.wiki/images/Gold_Nugget_JE3_BE2.png?ba665"
  },
  {
    "id": "gunpowder",
    "title": "Gunpowder",
    "url": "https://minecraft.wiki/w/Gunpowder",
    "image_url": "/itemImages/gunpowder.png",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "pre-alpha",
    "obtaining": [
      "Mob loot",
      "Chest loot",
      "Trading"
    ],
    "usage": [
      "Crafting ingredient",
      "Brewing ingredient"
    ],
    "inventory_categories": [
      "ingredients"
    ],
    "recipe": [
      "none"
    ],
    "loot": [
      "container",
      "mob",
      "trading"
    ],
    "chinese_title": "火药",
    "wiki_image_url": "https://minecraft.wiki/images/Gunpowder_JE2_BE2.png?c4145"
  },
  {
    "id": "heart_of_the_sea",
    "title": "Heart of the Sea",
    "url": "https://minecraft.wiki/w/Heart_of_the_Sea",
    "image_url": "/itemImages/heart_of_the_sea.png",
    "renewable": "no",
    "stackable": 64,
    "rarity": "uncommon",
    "initial_release": "1.13",
    "obtaining": [
      "Chest loot"
    ],
    "usage": [
      "Crafting"
    ],
    "inventory_categories": [
      "ingredients"
    ],
    "recipe": [
      "none"
    ],
    "loot": [
      "container"
    ],
    "chinese_title": "海洋之心",
    "wiki_image_url": "https://minecraft.wiki/images/Heart_of_the_Sea_JE1_BE2.png?edc40"
  },
  {
    "id": "iron_nugget",
    "title": "Iron Nugget",
    "url": "https://minecraft.wiki/w/Iron_Nugget",
    "image_url": "/itemImages/iron_nugget.png",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "1.11.1",
    "obtaining": [
      "Crafting",
      "Smelting",
      "Bartering",
      "Chest loot"
    ],
    "usage": [
      "Crafting ingredient"
    ],
    "inventory_categories": [
      "ingredients"
    ],
    "recipe": [
      "crafting_table",
      "furnace"
    ],
    "loot": [
      "container",
      "trading"
    ],
    "chinese_title": "铁粒",
    "wiki_image_url": "https://minecraft.wiki/images/Iron_Nugget_JE1_BE1.png?fa1c7"
  },
  {
    "id": "leather",
    "title": "Leather",
    "url": "https://minecraft.wiki/w/Leather",
    "image_url": "/itemImages/leather.png",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "Alpha 1.0.8",
    "obtaining": [
      "Mob loot",
      "Chest loot",
      "Crafting",
      "Fishing",
      "Bartering",
      "Villager gifts"
    ],
    "usage": [
      "Crafting ingredient",
      "Trading",
      "Repairing"
    ],
    "inventory_categories": [
      "ingredients"
    ],
    "recipe": [
      "crafting_table"
    ],
    "loot": [
      "container",
      "mob",
      "fishing",
      "trading"
    ],
    "chinese_title": "皮革",
    "wiki_image_url": "https://minecraft.wiki/images/Leather_JE2_BE2.png?10fae"
  },
  {
    "id": "magma_cream",
    "title": "Magma Cream",
    "url": "https://minecraft.wiki/w/Magma_Cream",
    "image_url": "/itemImages/magma_cream.png",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "1.0.0",
    "obtaining": [
      "Mob loot",
      "Chest loot",
      "Crafting"
    ],
    "usage": [
      "Brewing ingredient",
      "Crafting ingredient"
    ],
    "inventory_categories": [
      "ingredients"
    ],
    "recipe": [
      "crafting_table"
    ],
    "loot": [
      "container",
      "mob"
    ],
    "chinese_title": "岩浆膏",
    "wiki_image_url": "https://minecraft.wiki/images/Magma_Cream_JE3_BE2.png?7a317"
  },
  {
    "id": "nautilus_shell",
    "title": "Nautilus Shell",
    "url": "https://minecraft.wiki/w/Nautilus_Shell",
    "image_url": "/itemImages/nautilus_shell.png",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "uncommon",
    "initial_release": "1.13",
    "obtaining": [
      "Mob loot",
      "Fishing",
      "Trading"
    ],
    "usage": [
      "Crafting ingredient"
    ],
    "inventory_categories": [
      "ingredients"
    ],
    "recipe": [
      "none"
    ],
    "loot": [
      "mob",
      "fishing",
      "trading"
    ],
    "chinese_title": "鹦鹉螺壳",
    "wiki_image_url": "https://minecraft.wiki/images/Nautilus_Shell_JE1_BE2.png?d43a1"
  },
  {
    "id": "nether_brick",
    "title": "Nether Brick",
    "url": "https://minecraft.wiki/w/Nether_Brick",
    "image_url": "/itemImages/nether_brick.png",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "1.5",
    "obtaining": [
      "Smelting",
      "Bartering"
    ],
    "usage": [
      "Crafting ingredient"
    ],
    "inventory_categories": [
      "ingredients"
    ],
    "recipe": [
      "furnace"
    ],
    "loot": [
      "trading"
    ],
    "chinese_title": "下界砖",
    "wiki_image_url": "https://minecraft.wiki/images/Nether_Brick_JE2_BE2.png?be29a"
  },
  {
    "id": "quartz",
    "title": "Nether Quartz",
    "url": "https://minecraft.wiki/w/Nether_Quartz",
    "image_url": "/itemImages/quartz.png",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "1.5",
    "obtaining": [
      "Mining",
      "Chest loot",
      "Smelting",
      "Bartering"
    ],
    "usage": [
      "Crafting ingredient",
      "Trading",
      "Smithing ingredient"
    ],
    "inventory_categories": [
      "ingredients"
    ],
    "recipe": [
      "furnace"
    ],
    "loot": [
      "container",
      "trading"
    ],
    "chinese_title": "下界石英",
    "wiki_image_url": "https://minecraft.wiki/images/Nether_Quartz_JE2_BE2.png?d0049"
  },
  {
    "id": "nether_star",
    "title": "Nether Star",
    "url": "https://minecraft.wiki/w/Nether_Star",
    "image_url": "/itemImages/nether_star.gif",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "rare",
    "initial_release": "1.4.2",
    "obtaining": [
      "Mob loot"
    ],
    "usage": [
      "Crafting ingredient"
    ],
    "inventory_categories": [
      "ingredients"
    ],
    "recipe": [
      "none"
    ],
    "loot": [
      "mob"
    ],
    "chinese_title": "下界之星",
    "wiki_image_url": "https://minecraft.wiki/images/Nether_Star.gif?fb01f"
  },
  {
    "id": "netherite_ingot",
    "title": "Netherite Ingot",
    "url": "https://minecraft.wiki/w/Netherite_Ingot",
    "image_url": "/itemImages/netherite_ingot.png",
    "renewable": "no",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "1.16",
    "obtaining": [
      "Crafting",
      "Chest loot"
    ],
    "usage": [
      "Crafting ingredient",
      "Smithing ingredient",
      "Repairing",
      "Beacons"
    ],
    "inventory_categories": [
      "ingredients"
    ],
    "recipe": [
      "crafting_table"
    ],
    "loot": [
      "container"
    ],
    "chinese_title": "下界合金锭",
    "wiki_image_url": "https://minecraft.wiki/images/Netherite_Ingot_JE1_BE2.png?79364"
  },
  {
    "id": "netherite_scrap",
    "title": "Netherite Scrap",
    "url": "https://minecraft.wiki/w/Netherite_Scrap",
    "image_url": "/itemImages/netherite_scrap.png",
    "renewable": "no",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "1.16",
    "obtaining": [
      "Smelting",
      "Chest loot"
    ],
    "usage": [
      "Crafting ingredient"
    ],
    "inventory_categories": [
      "ingredients"
    ],
    "recipe": [
      "furnace"
    ],
    "loot": [
      "container"
    ],
    "chinese_title": "下界合金碎片",
    "wiki_image_url": "https://minecraft.wiki/images/Netherite_Scrap_JE2_BE1.png?ef2a4"
  },
  {
    "id": "netherite_upgrade_smithing_template",
    "title": "Netherite Upgrade",
    "url": "https://minecraft.wiki/w/Netherite_Upgrade",
    "image_url": "/itemImages/netherite_upgrade_smithing_template.png",
    "renewable": "no",
    "stackable": 64,
    "rarity": "uncommon",
    "initial_release": "1.20",
    "obtaining": [
      "Crafting",
      "Chest loot"
    ],
    "usage": [
      "Crafting ingredient",
      "Smithing ingredient"
    ],
    "inventory_categories": [
      "ingredients"
    ],
    "recipe": [
      "crafting_table"
    ],
    "loot": [
      "container"
    ],
    "chinese_title": "下界合金升级",
    "wiki_image_url": "https://minecraft.wiki/images/Netherite_Upgrade_Smithing_Template_JE1_BE1.png?055f6"
  },
  {
    "id": "paper",
    "title": "Paper",
    "url": "https://minecraft.wiki/w/Paper",
    "image_url": "/itemImages/paper.png",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "Alpha 1.0.11",
    "obtaining": [
      "Chest loot",
      "Crafting",
      "Villagers"
    ],
    "usage": [
      "Crafting ingredient",
      "Trading"
    ],
    "inventory_categories": [
      "ingredients"
    ],
    "recipe": [
      "crafting_table"
    ],
    "loot": [
      "container",
      "trading"
    ],
    "chinese_title": "纸",
    "wiki_image_url": "https://minecraft.wiki/images/Paper_JE2_BE2.png?9c3be"
  },
  {
    "id": "phantom_membrane",
    "title": "Phantom Membrane",
    "url": "https://minecraft.wiki/w/Phantom_Membrane",
    "image_url": "/itemImages/phantom_membrane.png",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "1.13",
    "obtaining": [
      "Mob loot",
      "Cat gifts"
    ],
    "usage": [
      "Repairing",
      "Brewing ingredient"
    ],
    "inventory_categories": [
      "ingredients"
    ],
    "recipe": [
      "none"
    ],
    "loot": [
      "mob"
    ],
    "chinese_title": "幻翼膜",
    "wiki_image_url": "https://minecraft.wiki/images/Phantom_Membrane_JE2_BE2.png?b9c3a"
  },
  {
    "id": "popped_chorus_fruit",
    "title": "Popped Chorus Fruit",
    "url": "https://minecraft.wiki/w/Popped_Chorus_Fruit",
    "image_url": "/itemImages/popped_chorus_fruit.png",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "1.9",
    "obtaining": [
      "Smelting"
    ],
    "usage": [
      "Crafting ingredient"
    ],
    "inventory_categories": [
      "ingredients"
    ],
    "recipe": [
      "furnace"
    ],
    "loot": [
      "none"
    ],
    "chinese_title": "爆裂紫颂果",
    "wiki_image_url": "https://minecraft.wiki/images/Popped_Chorus_Fruit_JE2_BE2.png?eb1b0"
  },
  {
    "id": "prismarine_crystals",
    "title": "Prismarine Crystals",
    "url": "https://minecraft.wiki/w/Prismarine_Crystals",
    "image_url": "/itemImages/prismarine_crystals.png",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "1.8",
    "obtaining": [
      "Mining",
      "Mob loot",
      "Chest loot"
    ],
    "usage": [
      "Crafting ingredient"
    ],
    "inventory_categories": [
      "ingredients"
    ],
    "recipe": [
      "none"
    ],
    "loot": [
      "container",
      "mob"
    ],
    "chinese_title": "海晶砂粒",
    "wiki_image_url": "https://minecraft.wiki/images/Prismarine_Crystals_JE2_BE2.png?8d8af"
  },
  {
    "id": "prismarine_shard",
    "title": "Prismarine Shard",
    "url": "https://minecraft.wiki/w/Prismarine_Shard",
    "image_url": "/itemImages/prismarine_shard.png",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "1.8",
    "obtaining": [
      "Mob Loot"
    ],
    "usage": [
      "Crafting ingredient"
    ],
    "inventory_categories": [
      "ingredients"
    ],
    "recipe": [
      "none"
    ],
    "loot": [
      "mob"
    ],
    "chinese_title": "海晶碎片",
    "wiki_image_url": "https://minecraft.wiki/images/Prismarine_Shard_JE2_BE2.png?ef03b"
  },
  {
    "id": "rabbit_hide",
    "title": "Rabbit Hide",
    "url": "https://minecraft.wiki/w/Rabbit_Hide",
    "image_url": "/itemImages/rabbit_hide.png",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "1.8",
    "obtaining": [
      "Mob loot",
      "Cat gifts"
    ],
    "usage": [
      "Crafting ingredient",
      "Trading"
    ],
    "inventory_categories": [
      "ingredients"
    ],
    "recipe": [
      "none"
    ],
    "loot": [
      "mob"
    ],
    "chinese_title": "兔子皮",
    "wiki_image_url": "https://minecraft.wiki/images/Rabbit_Hide_JE3_BE2.png?b706d"
  },
  {
    "id": "rabbit_foot",
    "title": "Rabbit's Foot",
    "url": "https://minecraft.wiki/w/Rabbit%27s_Foot",
    "image_url": "/itemImages/rabbit_foot.png",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "1.8",
    "obtaining": [
      "Mob loot",
      "Cat gifts"
    ],
    "usage": [
      "Brewing ingredient",
      "Trading"
    ],
    "inventory_categories": [
      "ingredients"
    ],
    "recipe": [
      "none"
    ],
    "loot": [
      "mob"
    ],
    "chinese_title": "兔子脚",
    "wiki_image_url": "https://minecraft.wiki/images/Rabbit%27s_Foot_JE3_BE2.png?2bf0f"
  },
  {
    "id": "raw_copper",
    "title": "Raw Copper",
    "url": "https://minecraft.wiki/w/Raw_Copper",
    "image_url": "/itemImages/raw_copper.png",
    "renewable": "no",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "1.17",
    "obtaining": [
      "Mining",
      "Crafting"
    ],
    "usage": [
      "Crafting",
      "Smelting ingredient"
    ],
    "inventory_categories": [
      "ingredients"
    ],
    "recipe": [
      "crafting_table"
    ],
    "loot": [
      "none"
    ],
    "chinese_title": "粗铜",
    "wiki_image_url": "https://minecraft.wiki/images/Raw_Copper_JE3_BE2.png?61c79"
  },
  {
    "id": "raw_gold",
    "title": "Raw Gold",
    "url": "https://minecraft.wiki/w/Raw_Gold",
    "image_url": "/itemImages/raw_gold.png",
    "renewable": "no",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "1.17",
    "obtaining": [
      "Mining",
      "Crafting"
    ],
    "usage": [
      "Crafting",
      "Smelting ingredient",
      "Piglins"
    ],
    "inventory_categories": [
      "ingredients"
    ],
    "recipe": [
      "crafting_table"
    ],
    "loot": [
      "none"
    ],
    "chinese_title": "粗金",
    "wiki_image_url": "https://minecraft.wiki/images/Raw_Gold_JE3_BE2.png?749e1"
  },
  {
    "id": "raw_iron",
    "title": "Raw Iron",
    "url": "https://minecraft.wiki/w/Raw_Iron",
    "image_url": "/itemImages/raw_iron.png",
    "renewable": "no",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "1.17",
    "obtaining": [
      "Mining",
      "Crafting"
    ],
    "usage": [
      "Crafting",
      "Smelting ingredient"
    ],
    "inventory_categories": [
      "ingredients"
    ],
    "recipe": [
      "crafting_table"
    ],
    "loot": [
      "none"
    ],
    "chinese_title": "粗铁",
    "wiki_image_url": "https://minecraft.wiki/images/Raw_Iron_JE3_BE2.png?de3cd"
  },
  {
    "id": "recovery_compass",
    "title": "Recovery Compass",
    "url": "https://minecraft.wiki/w/Recovery_Compass",
    "image_url": "/itemImages/recovery_compass.gif",
    "renewable": "no",
    "stackable": 64,
    "rarity": "uncommon",
    "initial_release": "1.19",
    "obtaining": [
      "Crafting"
    ],
    "usage": [
      "Enchantments"
    ],
    "inventory_categories": [
      "tools_and_utilities"
    ],
    "recipe": [
      "crafting_table"
    ],
    "loot": [
      "none"
    ],
    "chinese_title": "追溯指针",
    "wiki_image_url": "https://minecraft.wiki/images/Recovery_Compass_JE1_BE1.gif?c0c26"
  },
  {
    "id": "turtle_scute",
    "title": "Turtle Scute",
    "url": "https://minecraft.wiki/w/Turtle_Scute",
    "image_url": "/itemImages/scute.png",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "1.13",
    "obtaining": [
      "Mob loot"
    ],
    "usage": [
      "Crafting ingredient",
      "Repairing",
      "Trading"
    ],
    "inventory_categories": [
      "ingredients"
    ],
    "recipe": [
      "none"
    ],
    "loot": [
      "mob"
    ],
    "chinese_title": "海龟鳞甲",
    "wiki_image_url": "https://minecraft.wiki/images/Turtle_Scute_JE1_BE1.png?99cc2"
  },
  {
    "id": "shulker_shell",
    "title": "Shulker Shell",
    "url": "https://minecraft.wiki/w/Shulker_Shell",
    "image_url": "/itemImages/shulker_shell.png",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "1.11",
    "obtaining": [
      "Mob loot"
    ],
    "usage": [
      "Crafting ingredient"
    ],
    "inventory_categories": [
      "ingredients"
    ],
    "recipe": [
      "none"
    ],
    "loot": [
      "mob"
    ],
    "chinese_title": "潜影壳",
    "wiki_image_url": "https://minecraft.wiki/images/Shulker_Shell_JE2_BE2.png?f3027"
  },
  {
    "id": "slime_ball",
    "title": "Slimeball",
    "url": "https://minecraft.wiki/w/Slimeball",
    "image_url": "/itemImages/slime_ball.png",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "Alpha 1.0.11",
    "obtaining": [
      "Mob loot",
      "Crafting",
      "Trading"
    ],
    "usage": [
      "Crafting ingredient",
      "Breeding"
    ],
    "inventory_categories": [
      "ingredients"
    ],
    "recipe": [
      "crafting_table"
    ],
    "loot": [
      "mob",
      "trading"
    ],
    "chinese_title": "黏液球",
    "wiki_image_url": "https://minecraft.wiki/images/Slimeball_JE2_BE2.png?ebe30"
  },
  {
    "id": "stick",
    "title": "Stick",
    "url": "https://minecraft.wiki/w/Stick",
    "image_url": "/itemImages/stick.png",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "pre-alpha",
    "obtaining": [
      "Crafting",
      "Fishing",
      "Block loot",
      "Entity loot",
      "Chest loot"
    ],
    "usage": [
      "Crafting ingredient",
      "Fuel",
      "Trading"
    ],
    "inventory_categories": [
      "ingredients"
    ],
    "recipe": [
      "crafting_table"
    ],
    "loot": [
      "container",
      "mob",
      "fishing"
    ],
    "chinese_title": "木棍",
    "wiki_image_url": "https://minecraft.wiki/images/Stick_JE1_BE1.png?1fc15"
  },
  {
    "id": "spawn_egg",
    "title": "Spawn Egg",
    "url": "https://minecraft.wiki/w/Spawn_Egg",
    "image_url": "/itemImages/spawn_egg.png",
    "renewable": "no",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "1.1",
    "obtaining": [
      "Creative mode"
    ],
    "usage": [
      "Spawning mobs",
      "Dispensers",
      "Baby mobs",
      "Monster Spawners"
    ],
    "inventory_categories": [
      "spawn_eggs"
    ],
    "recipe": [
      "none"
    ],
    "loot": [
      "none"
    ],
    "chinese_title": "刷怪蛋",
    "wiki_image_url": "https://minecraft.wiki/images/Creeper_Spawn_Egg_JE3_BE2.png?3c0c5"
  },
  {
    "id": "armadillo_scute",
    "title": "Armadillo Scute",
    "url": "https://minecraft.wiki/w/Armadillo_Scute",
    "image_url": "/itemImages/armadillo_scute.webp",
    "renewable": "yes",
    "stackable": 64,
    "rarity": "common",
    "initial_release": "1.20.5",
    "obtaining": [
      "Mob loot"
    ],
    "usage": [
      "Crafting Ingredient"
    ],
    "inventory_categories": [
      "ingredients"
    ],
    "recipe": [
      "none"
    ],
    "loot": [
      "mob"
    ],
    "chinese_title": "犰狳鳞甲",
    "wiki_image_url": "https://minecraft.wiki/images/Armadillo_Scute_JE2_BE2.png?1e536"
  },
  {
    "id": "wolf_armor",
    "title": "Wolf Armor",
    "url": "https://minecraft.wiki/w/Wolf_Armor",
    "image_url": "/itemImages/wolf_armor.webp",
    "renewable": "yes",
    "stackable": 1,
    "rarity": "common",
    "initial_release": "1.20.5",
    "obtaining": [
      "Crafting"
    ],
    "usage": [
      "Protection",
      "Dyeing"
    ],
    "inventory_categories": [
      "combat"
    ],
    "recipe": [
      "crafting_table"
    ],
    "loot": [
      "none"
    ],
    "chinese_title": "狼铠",
    "wiki_image_url": "https://minecraft.wiki/images/thumb/Wolf_Armor_%28model%29_JE2_BE2.png/800px-Wolf_Armor_%28model%29_JE2_BE2.png?97834"
  },
  {
    "id": "harness",
    "title": "Harness",
    "url": "https://minecraft.wiki/w/Harness",
    "image_url": "/itemImages/harness.webp",
    "renewable": "yes",
    "stackable": 1,
    "rarity": "common",
    "initial_release": "1.21.6",
    "obtaining": [
      "Crafting"
    ],
    "usage": [
      "Ride Mobs"
    ],
    "inventory_categories": [
      "tools_and_utilities"
    ],
    "recipe": [
      "crafting_table"
    ],
    "loot": [
      "none"
    ],
    "chinese_title": "挽具",
    "wiki_image_url": "https://minecraft.wiki/images/thumb/White_Ghast_Harness_Goggles_Up.png/640px-White_Ghast_Harness_Goggles_Up.png?8174e"
  },
  {
    "id": "copper_nugget",
    "title": "Copper Nugget",
    "url": "https://minecraft.wiki/w/Copper_Nugget",
    "inventory_categories": [
      "ingredients"
    ],
    "loot": [
      "none"
    ],
    "recipe": [
      "crafting_table",
      "furnace"
    ],
    "renewable": "yes",
    "stackable": 64,
    "rarity": "common",
    "obtaining": [],
    "usage": [],
    "initial_release": "1.21.9",
    "image_url": "/itemImages/copper_nugget.png",
    "chinese_title": "铜粒",
    "wiki_image_url": "https://minecraft.wiki/images/Copper_Nugget_JE1_BE1.png?42865"
  }
] as const;


// 字段名中文映射
export const keyMap: Record<string, string> = {
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
export const valueMap: Record<string, Record<string, string>> = {
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

export const blockChineseTitle = [
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

export const mobChineseTitle = [
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

export const itemChineseTitle = [
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
