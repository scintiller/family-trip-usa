// La Jolla Cove + Children's Pool 详细游玩攻略
export interface LaJollaStop {
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
  animals?: string[];
}

export const laJollaItinerary: LaJollaStop[] = [
  {
    id: 'lajolla-parking',
    order: 1,
    name: '停车',
    nameEn: 'Parking',
    time: '16:00',
    duration: '5-10分钟',
    description: 'La Jolla Cove附近停车位紧张，建议停在Coast Blvd或Prospect St附近的路边咪表，或使用付费停车场。',
    highlights: ['路边咪表停车', 'Coast Blvd停车', 'Prospect St停车场'],
    howToGetThere: '从拉古纳海滩沿I-5 S行驶约1小时15分钟',
    tips: '周末和节假日停车非常困难，建议早到。停车费约$2-3/小时',
    image: '/images/la-jolla-cove.jpg'
  },
  {
    id: 'ellen-browning-scripps-park',
    order: 2,
    name: 'Ellen Browning Scripps Park',
    nameEn: 'Ellen Browning Scripps Park',
    time: '16:10 - 16:25',
    duration: '15分钟',
    description: '这个海边公园是俯瞰La Jolla Cove的最佳地点。绿草如茵的草坪延伸到悬崖边，可以看到下方的海狮在岩石上晒太阳或在海里游泳。',
    highlights: ['悬崖观景台', '俯瞰海狮', '草坪野餐区', '拍照打卡点'],
    howToGetThere: '从停车位步行约2-3分钟',
    tips: '这里是拍摄La Jolla Cove全景的最佳位置，可以看到海狮在下方的岩石和海水中活动',
    image: '/images/scripps-park.jpg',
    animals: ['海狮 (Sea Lions)']
  },
  {
    id: 'la-jolla-cove-beach',
    order: 3,
    name: 'La Jolla Cove 海滩',
    nameEn: 'La Jolla Cove Beach',
    time: '16:25 - 16:55',
    duration: '30分钟',
    description: '沿着台阶下到La Jolla Cove海滩，近距离观赏海狮！这里的海狮非常活跃，会在岩石上晒太阳、在海里游泳、甚至大声叫唤。海水清澈见底，是浮潜的热门地点。',
    highlights: ['近距离看海狮', '清澈海水', '岩石海岸', '浮潜热点'],
    howToGetThere: '从Scripps Park沿台阶下到海滩约3分钟',
    tips: '海狮有时会靠近游客，保持至少6英尺（2米）距离。不要触摸或喂食！海狮有外耳、会大声叫',
    image: '/images/la-jolla-cove-beach.jpg',
    animals: ['海狮 (Sea Lions) - 有外耳、会叫、鳍状肢较大']
  },
  {
    id: 'walk-to-childrens-pool',
    order: 4,
    name: '步行前往Children\'s Pool',
    nameEn: 'Walk to Children\'s Pool',
    time: '16:55 - 17:05',
    duration: '10分钟',
    description: '沿着海岸步道向南步行，经过精品店和咖啡馆，前往Children\'s Pool观赏海豹。沿途可以欣赏La Jolla村庄的特色建筑和海景。',
    highlights: ['海岸步道', '精品店', '咖啡馆', 'La Jolla村庄'],
    howToGetThere: '从La Jolla Cove沿Coast Blvd向南步行约10分钟',
    tips: '步道平坦好走，沿途有很多拍照机会',
    image: '/images/la-jolla-walk.jpg'
  },
  {
    id: 'childrens-pool',
    order: 5,
    name: 'Children\'s Pool 看海豹',
    nameEn: 'Children\'s Pool',
    time: '17:05 - 17:40',
    duration: '35分钟',
    description: '这里是观赏海豹的最佳地点！1930年代建造的弯曲防波堤创造了一个平静的小海湾，成为海豹的理想栖息地。2月正是繁殖季，可能看到小海豹宝宝！',
    highlights: ['海豹观赏', '防波堤步道', '繁殖季看小海豹', '平静海湾'],
    howToGetThere: '从La Jolla Cove步行约10分钟',
    tips: '可以走上防波堤近距离观看海豹。海豹没有外耳、比较安静、鳍状肢较小收在身下。12月15日-5月15日是繁殖季，海滩可能关闭但可在防波堤上观看',
    image: '/images/childrens-pool.jpg',
    animals: ['海豹 (Harbor Seals) - 无外耳、安静、鳍状肢较小']
  },
  {
    id: 'lajolla-departure',
    order: 6,
    name: '前往Blue Water晚餐',
    nameEn: 'Head to Blue Water Seafood',
    time: '17:45',
    duration: '约25分钟车程',
    description: '离开La Jolla，前往Ocean Beach的Blue Water Seafood享用新鲜海鲜晚餐。这家餐厅曾上过Food Network的《Diners, Drive-Ins and Dives》节目！',
    highlights: ['约15英里', 'Ocean Beach', 'Food Network推荐'],
    howToGetThere: '沿La Jolla Blvd和I-8 W行驶约25分钟',
    tips: '餐厅营业到晚上9点，建议6点前到达避免排队',
    image: '/images/blue-water-seafood.jpg'
  }
];

// 海狮 vs 海豹对比
export const sealVsSeaLion = {
  seaLion: {
    name: '海狮',
    nameEn: 'Sea Lion',
    location: 'La Jolla Cove',
    features: [
      '有外耳（小耳朵）',
      '会大声叫唤',
      '鳍状肢较大，可以用来"走路"',
      '体型较大，更活跃',
      '喜欢群居'
    ],
    image: '/images/sea-lion.jpg'
  },
  harborSeal: {
    name: '海豹',
    nameEn: 'Harbor Seal',
    location: "Children's Pool",
    features: [
      '无外耳（只有耳孔）',
      '比较安静',
      '鳍状肢较小，收在身下',
      '体型较小，较慵懒',
      '喜欢晒太阳'
    ],
    image: '/images/harbor-seal.jpg'
  }
};

export default laJollaItinerary;
