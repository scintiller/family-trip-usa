// USS Midway 中途岛号航空母舰详细游玩攻略
export interface MidwayStop {
  id: string;
  order: number;
  name: string;
  nameEn: string;
  time: string;
  duration: string;
  description: string;
  highlights: string[];
  howToGetThere: string;
  tips: string;
  image: string;
  mustSee?: string[];
}

export const midwayItinerary: MidwayStop[] = [
  {
    id: 'midway-arrival',
    order: 1,
    name: '到达与入场',
    nameEn: 'Arrival & Entry',
    time: '09:00 - 09:15',
    duration: '15分钟',
    description: '到达Navy Pier停车场，步行前往航母入口。在入口处领取免费的语音导览器（有中文），这是参观的必备工具！',
    highlights: ['免费语音导览', '中文导览可选', '入口拍照点', '胜利之吻雕像'],
    howToGetThere: '从酒店开车约20分钟，停在Navy Pier停车场（$20/天）',
    tips: '一定要领取语音导览器！导览内容非常精彩，由退役水兵录制，讲述真实的舰上生活故事',
    image: '/images/midway-entrance.jpg'
  },
  {
    id: 'flight-deck',
    order: 2,
    name: '飞行甲板 Flight Deck',
    nameEn: 'Flight Deck',
    time: '09:15 - 10:15',
    duration: '1小时',
    description: '航母最震撼的区域！超过30架修复的战斗机整齐排列在甲板上，包括F-14雄猫、F-4幽灵、A-6入侵者等传奇机型。可以登上部分飞机驾驶舱体验！',
    highlights: ['30+架战斗机', 'F-14雄猫战斗机', '可登机体验', '甲板全景'],
    howToGetThere: '从入口乘电梯或走楼梯上到飞行甲板',
    tips: '建议先上飞行甲板，早上光线最好拍照。可以坐进部分飞机驾驶舱拍照！',
    image: '/images/midway-flight-deck.jpg',
    mustSee: ['F-14 Tomcat 雄猫战斗机', 'F-4 Phantom 幽灵战斗机', 'SH-60 Seahawk 海鹰直升机', '弹射座椅展示']
  },
  {
    id: 'island-bridge',
    order: 3,
    name: '舰岛与舰桥 Island & Bridge',
    nameEn: 'Island & Bridge',
    time: '10:15 - 10:45',
    duration: '30分钟',
    description: '攀登舰岛，参观航母的"大脑"——舰桥！这里是舰长指挥整艘航母的地方，可以看到各种导航设备、通讯设备和指挥台。需要爬4段陡峭的楼梯。',
    highlights: ['舰长指挥室', '导航设备', '通讯室', '俯瞰甲板'],
    howToGetThere: '从飞行甲板沿指示牌进入舰岛',
    tips: '楼梯非常陡峭，不适合行动不便者。但景色绝对值得！可以俯瞰整个飞行甲板和圣地亚哥海湾',
    image: '/images/midway-bridge.jpg',
    mustSee: ['舰长座椅', '航海图桌', '舰桥全景窗']
  },
  {
    id: 'hangar-deck',
    order: 4,
    name: '机库甲板 Hangar Deck',
    nameEn: 'Hangar Deck',
    time: '10:45 - 11:30',
    duration: '45分钟',
    description: '下到机库甲板，这里有更多飞机展示、中途岛战役沉浸式剧场（15分钟全息纪录片）、以及展示水兵日常生活的展览。',
    highlights: ['中途岛战役剧场', '飞机维修展示', '水兵生活展', '互动展览'],
    howToGetThere: '从舰岛下楼梯或乘电梯到机库甲板',
    tips: '一定要看中途岛战役沉浸式剧场！15分钟的全息纪录片非常震撼，讲述1942年中途岛海战的历史',
    image: '/images/midway-hangar.jpg',
    mustSee: ['Battle of Midway Theater 中途岛战役剧场', 'Aircraft Gallery 飞机画廊', "Midway's Engineers 工程师展览"]
  },
  {
    id: 'below-deck',
    order: 5,
    name: '下层甲板 Below Deck',
    nameEn: 'Below Deck',
    time: '11:30 - 12:00',
    duration: '30分钟',
    description: '探索航母的"内脏"——水兵居住区、餐厅、医务室、邮局等。了解5000名水兵如何在这艘"浮动城市"上生活和工作。',
    highlights: ['水兵宿舍', '餐厅', '医务室', '邮局', '理发店'],
    howToGetThere: '从机库甲板沿指示牌下到下层甲板',
    tips: '空间较狭窄，可以感受到水兵们的艰苦生活条件。宿舍的床铺只有2英尺宽！',
    image: '/images/midway-below-deck.jpg',
    mustSee: ['水兵宿舍（超窄床铺）', '舰上餐厅', '舰上邮局']
  },
  {
    id: 'gift-shop',
    order: 6,
    name: '礼品店与离开',
    nameEn: 'Gift Shop & Departure',
    time: '12:00 - 12:30',
    duration: '30分钟',
    description: '参观结束后，可以在礼品店购买纪念品。有各种航母模型、军事主题商品、T恤等。然后前往海港区享用午餐。',
    highlights: ['航母模型', '军事纪念品', 'T恤帽子', '明信片'],
    howToGetThere: '礼品店位于出口处',
    tips: '航母模型是很好的纪念品，价格从$20-$200不等',
    image: '/images/midway-gift-shop.jpg'
  }
];

// 航母参观小贴士
export const midwayTips = [
  {
    icon: '🎧',
    title: '语音导览必领',
    description: '免费的语音导览器是参观的精华，有中文可选，由退役水兵录制'
  },
  {
    icon: '👟',
    title: '穿舒适的鞋',
    description: '需要爬很多楼梯，舰上有很多金属台阶和狭窄通道'
  },
  {
    icon: '📸',
    title: '早上光线最好',
    description: '飞行甲板上早上的光线最适合拍照，下午可能逆光'
  },
  {
    icon: '⏰',
    title: '预留3小时',
    description: '航母非常大，认真参观需要至少3小时'
  },
  {
    icon: '🎬',
    title: '必看剧场',
    description: '中途岛战役沉浸式剧场是精华，15分钟全息纪录片'
  },
  {
    icon: '🚫',
    title: '注意限制',
    description: '部分区域不适合轮椅或婴儿车，舰桥需要爬陡峭楼梯'
  }
];

export default midwayItinerary;
