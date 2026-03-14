// 圣地亚哥动物园一日游详细行程
// Day 6: 2026-02-03 星期二

export interface ZooStop {
  id: string;
  order: number;
  name: string;
  nameEn: string;
  area: string;
  time: string;
  duration: string;
  description: string;
  highlights: string[];
  animals?: string[];
  tips?: string;
  image: string;
  howToGetThere: string;
  nextStop?: {
    name: string;
    walkTime: string;
    direction: string;
  };
}

export interface ZooMeal {
  type: 'breakfast' | 'lunch' | 'snack' | 'dinner';
  time: string;
  location: string;
  locationEn: string;
  description: string;
  recommendations: string[];
  priceRange: string;
  image?: string;
}

export interface ZooItinerary {
  date: string;
  weekday: string;
  title: string;
  subtitle: string;
  overview: {
    openTime: string;
    closeTime: string;
    totalDuration: string;
    walkingDistance: string;
    routeType: string;
  };
  parking: {
    location: string;
    fee: string;
    tips: string;
  };
  stops: ZooStop[];
  meals: ZooMeal[];
  tips: string[];
}

export const zooItinerary: ZooItinerary = {
  date: '2026-02-03',
  weekday: '星期二',
  title: '圣地亚哥动物园一日游',
  subtitle: '轻松游路线 | 4-5小时精华体验',
  overview: {
    openTime: '09:00',
    closeTime: '17:00',
    totalDuration: '约5小时',
    walkingDistance: '约3-4公里',
    routeType: '轻松游（适合全家）'
  },
  parking: {
    location: '动物园主停车场',
    fee: '$16/车/天',
    tips: '建议8:45到达，停车场入口在Park Blvd和Zoo Place交叉口'
  },
  stops: [
    {
      id: 'entrance',
      order: 1,
      name: '动物园入口 & 导览巴士',
      nameEn: 'Zoo Entrance & Guided Bus Tour',
      area: 'Front Street',
      time: '09:00 - 09:45',
      duration: '45分钟',
      description: '入园后首先乘坐免费导览巴士，35分钟环游动物园70%的区域。坐在巴士右侧上层可以看到更多动物。这是了解动物园布局的最佳方式，也能让你决定之后想重点参观哪些区域。',
      highlights: ['免费导览巴士', '35分钟环游', '了解园区布局', '看到70%动物'],
      tips: '建议坐在巴士右侧上层，视野最好。如果阳光强烈，可选择下层有遮阳',
      image: '/images/ARfeFjCC0Eqt.jpg',
      howToGetThere: '从停车场步行约5分钟到达入口，入园后左转即是巴士站',
      nextStop: {
        name: 'Skyfari空中缆车',
        walkTime: '2分钟',
        direction: '巴士下车后，沿指示牌走到Skyfari East站'
      }
    },
    {
      id: 'skyfari',
      order: 2,
      name: 'Skyfari 空中缆车',
      nameEn: 'Skyfari Aerial Tram',
      area: 'Front Street → Elephant Odyssey',
      time: '09:50 - 10:05',
      duration: '15分钟',
      description: '乘坐免费空中缆车从入口区飞越整个动物园到达山顶。俯瞰整个动物园和巴尔博亚公园的壮观景色，还能远眺圣地亚哥市区。这是动物园最受欢迎的体验之一！',
      highlights: ['免费乘坐', '俯瞰全园', '360度美景', '省力到山顶'],
      animals: [],
      tips: '缆车每隔几分钟一班，排队通常不超过10分钟',
      image: '/images/zoo/skyfari.jpg',
      howToGetThere: '导览巴士下车后，跟随Skyfari指示牌步行2分钟',
      nextStop: {
        name: '北极熊馆',
        walkTime: '5分钟',
        direction: '下缆车后右转，沿路标走向Polar Bear Plunge'
      }
    },
    {
      id: 'polar-bear',
      order: 3,
      name: '北极熊馆',
      nameEn: 'Polar Bear Plunge',
      area: 'Northern Frontier',
      time: '10:10 - 10:35',
      duration: '25分钟',
      description: '观看北极熊在水中游泳和潜水！这里有一个巨大的水下观景窗，可以近距离看到北极熊在水中优雅地游动。北极熊体型巨大，是陆地上最大的食肉动物之一，非常震撼！',
      highlights: ['水下观景窗', '看熊潜水', '近距离观察', '拍照绝佳'],
      animals: ['北极熊', '驯鹿', '北极狐'],
      tips: '北极熊上午比较活跃，是观看的最佳时间',
      image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/cRDXmNiihUdudtkf.jpg',
      howToGetThere: '从Skyfari West站下车后右转，步行约5分钟',
      nextStop: {
        name: '大熊猫馆',
        walkTime: '8分钟',
        direction: '沿Panda Trek路标向下走'
      }
    },
    {
      id: 'panda-ridge',
      order: 4,
      name: '大熊猫馆 ⭐必看',
      nameEn: 'Denny Sanford Panda Ridge',
      area: 'Panda Ridge',
      time: '10:45 - 11:30',
      duration: '45分钟',
      description: '2024年新扩建的熊猫馆，是圣地亚哥动物园的明星景点！可以看到可爱的大熊猫吃竹子、爬树、打滚。熊猫馆设计精美，模拟了中国四川的自然环境，是全美最好的熊猫展馆之一。',
      highlights: ['2024新馆', '近距离看熊猫', '中国风设计', '全美最佳'],
      animals: ['大熊猫云川', '大熊猫鑫宝'],
      tips: '熊猫上午喂食时间最活跃，建议多停留观看。排队可能较长，但非常值得！',
      image: '/images/zoo/panda-ridge.jpg',
      howToGetThere: '从北极熊馆沿Panda Trek下坡步行约8分钟',
      nextStop: {
        name: '考拉馆',
        walkTime: '10分钟',
        direction: '继续向下走，经过Asian Passage到达Australian Outback'
      }
    },
    {
      id: 'koala',
      order: 5,
      name: '考拉馆',
      nameEn: 'Australian Outback',
      area: 'Australian Outback',
      time: '11:40 - 12:10',
      duration: '30分钟',
      description: '圣地亚哥动物园拥有美国最大的考拉群落！这些萌萌的小家伙大部分时间都在睡觉（每天睡18-22小时），但偶尔会醒来吃桉树叶或换个姿势，非常可爱。还能看到袋鼠和其他澳洲动物。',
      highlights: ['美国最大考拉群', '超级萌', '袋鼠', '澳洲动物'],
      animals: ['考拉', '袋鼠', '塔斯马尼亚恶魔', '鸸鹋'],
      tips: '考拉大部分时间在睡觉，耐心等待可能会看到它们醒来活动',
      image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/iZnjyozxPmzgojKp.jpg',
      howToGetThere: '从熊猫馆继续下坡，经过Asian Passage约10分钟',
      nextStop: {
        name: '午餐',
        walkTime: '3分钟',
        direction: '步行到附近的Sydney\'s Grill餐厅'
      }
    },
    {
      id: 'lunch-break',
      order: 6,
      name: '午餐休息',
      nameEn: 'Lunch Break at Sydney\'s Grill',
      area: 'Australian Outback',
      time: '12:15 - 13:00',
      duration: '45分钟',
      description: '在考拉馆旁边的Sydney\'s Grill享用午餐，这是动物园内最受欢迎的餐厅之一。可以边吃边休息，为下午的行程补充能量。餐厅有户外座位，环境很好。',
      highlights: ['户外座位', '汉堡薯条', '休息补充能量'],
      tips: '推荐招牌汉堡和炸鱼薯条，价格约$15-20/人',
      image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/iZnjyozxPmzgojKp.jpg',
      howToGetThere: '从考拉馆步行3分钟即到',
      nextStop: {
        name: '大猩猩馆',
        walkTime: '8分钟',
        direction: '沿Lost Forest路标向上走'
      }
    },
    {
      id: 'gorilla',
      order: 7,
      name: '大猩猩馆',
      nameEn: 'Lost Forest - Gorilla Tropics',
      area: 'Lost Forest',
      time: '13:05 - 13:40',
      duration: '35分钟',
      description: '大猩猩是圣地亚哥动物园最受欢迎的动物之一！Gorilla Tropics展区模拟了非洲热带雨林环境，可以近距离观察这些聪明的灵长类动物。它们的表情和动作非常像人类，看它们互动非常有趣。',
      highlights: ['最受欢迎动物', '热带雨林环境', '近距离观察', '表情丰富'],
      animals: ['西部低地大猩猩', '倭黑猩猩'],
      tips: '下午4点前来，之后大猩猩可能会回到后场休息',
      image: '/images/zoo/gorilla.jpg',
      howToGetThere: '从Sydney\'s Grill沿Lost Forest路标步行约8分钟',
      nextStop: {
        name: '河马馆',
        walkTime: '3分钟',
        direction: '继续沿Lost Forest小路走'
      }
    },
    {
      id: 'hippo',
      order: 8,
      name: '河马馆',
      nameEn: 'Lost Forest - Hippo Trail',
      area: 'Lost Forest',
      time: '13:45 - 14:10',
      duration: '25分钟',
      description: '河马展区有一个巨大的水下观景窗，可以看到河马在水中"跳舞"！虽然河马看起来笨重，但它们在水中非常优雅，会像芭蕾舞者一样在水底弹跳行走。这是动物园最有趣的体验之一！',
      highlights: ['水下观景窗', '河马"跳舞"', '非常有趣', '适合拍视频'],
      animals: ['河马', '侏儒河马', '非洲鱼类'],
      tips: '河马在水下的样子非常有趣，建议录一段视频',
      image: '/images/zoo/hippo.jpg',
      howToGetThere: '从大猩猩馆步行3分钟即到',
      nextStop: {
        name: '非洲岩石区',
        walkTime: '10分钟',
        direction: '沿Africa Rocks路标走'
      }
    },
    {
      id: 'africa-rocks',
      order: 9,
      name: '非洲岩石区 & 企鹅',
      nameEn: 'Africa Rocks - Penguin Beach',
      area: 'Africa Rocks',
      time: '14:20 - 15:00',
      duration: '40分钟',
      description: '2017年新建的非洲岩石区是动物园最新最美的展区！这里有非洲企鹅、狐猴、豹子等动物。企鹅海滩可以看到企鹅在水中游泳和在岩石上晒太阳，非常可爱。还有美丽的瀑布和岩石景观。',
      highlights: ['最新展区', '非洲企鹅', '狐猴', '瀑布景观'],
      animals: ['非洲企鹅', '环尾狐猴', '狐獴', '豹子', '獴'],
      tips: '企鹅喂食时间约在下午2:30，可以看到它们抢食的有趣场面',
      image: '/images/zoo/penguin.jpg',
      howToGetThere: '从河马馆沿Africa Rocks路标步行约10分钟',
      nextStop: {
        name: '出口',
        walkTime: '10分钟',
        direction: '沿主路向下走回到入口区域'
      }
    },
    {
      id: 'exit',
      order: 10,
      name: '礼品店 & 离园',
      nameEn: 'Gift Shop & Exit',
      area: 'Front Street',
      time: '15:10 - 15:30',
      duration: '20分钟',
      description: '在出口处的礼品店逛逛，有很多可爱的动物主题纪念品。熊猫和考拉的毛绒玩具是最受欢迎的礼物。之后前往巴尔博亚公园散步，或直接返回酒店休息。',
      highlights: ['纪念品', '熊猫玩偶', '考拉玩偶', '明信片'],
      tips: '熊猫毛绒玩具约$25-40，是很好的纪念品',
      image: '/images/ARfeFjCC0Eqt.jpg',
      howToGetThere: '从Africa Rocks沿主路下坡步行约10分钟回到入口',
      nextStop: {
        name: '巴尔博亚公园',
        walkTime: '5分钟步行',
        direction: '出动物园后右转，步行进入公园'
      }
    }
  ],
  meals: [
    {
      type: 'breakfast',
      time: '08:00 - 08:30',
      location: '酒店早餐',
      locationEn: 'Hotel Breakfast',
      description: '在酒店享用早餐，为一天的行程补充能量',
      recommendations: ['酒店自助早餐'],
      priceRange: '酒店含早餐'
    },
    {
      type: 'lunch',
      time: '12:15 - 13:00',
      location: 'Sydney\'s Grill',
      locationEn: 'Sydney\'s Grill',
      description: '位于考拉馆旁边，是动物园内最受欢迎的餐厅。提供美式快餐，有户外座位可以边吃边休息。',
      recommendations: ['招牌汉堡 $14', '炸鱼薯条 $16', '鸡肉三明治 $13', '儿童套餐 $10'],
      priceRange: '$12-18/人',
      image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/iZnjyozxPmzgojKp.jpg'
    },
    {
      type: 'snack',
      time: '14:30',
      location: '园内小吃摊',
      locationEn: 'Snack Stands',
      description: '下午可以买些小吃补充能量',
      recommendations: ['冰淇淋 $6', '爆米花 $8', '冷饮 $5'],
      priceRange: '$5-10'
    },
    {
      type: 'dinner',
      time: '17:30 - 19:00',
      location: 'The Prado at Balboa Park',
      locationEn: 'The Prado at Balboa Park',
      description: '位于巴尔博亚公园内的高档餐厅，西班牙殖民风格建筑，提供加州创意料理。环境优雅，是结束动物园之旅的完美选择。',
      recommendations: ['海鲜意面 $28', '牛排 $38', '凯撒沙拉 $16', '提拉米苏 $12'],
      priceRange: '$25-45/人'
    }
  ],
  tips: [
    '建议8:45到达停车场，9点开门时第一批入园',
    '穿舒适的运动鞋，动物园有坡度',
    '带水和防晒霜，圣地亚哥阳光强烈',
    '下载San Diego Zoo App，有GPS地图导航',
    '门票已含导览巴士和Skyfari缆车，记得使用',
    '大熊猫和考拉是必看项目，建议多花时间',
    '下午4点前看大猩猩，之后可能回后场',
    '礼品店的熊猫玩偶是很好的纪念品'
  ]
};

export default zooItinerary;
