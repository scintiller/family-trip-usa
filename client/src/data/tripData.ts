// California Sunshine Design - Trip Data
// 美国家庭旅行行程数据

export interface TicketInfo {
  required: boolean;
  name: string;
  url?: string;
  price?: string;
  status: 'pending' | 'done';
}

export interface DistanceInfo {
  to: string;
  distance: string;
  driveTime: string;
  method?: string;
  subwayLine?: string;
  walkTime?: string;
  taxiTime?: string;
  taxiCost?: string;
}

export interface Attraction {
  id: string;
  name: string;
  nameEn: string;
  time: string;
  description: string;
  highlights: string[];
  tips?: string;
  image: string;
  mapQuery: string;
  ticket?: TicketInfo;
  distanceToNext?: DistanceInfo;
}

export interface DayOption {
  id: string;
  title: string;
  location: string;
  driveTime: string;
  description: string;
  highlights: string[];
  image: string;
  recommended?: boolean;
  ticket?: TicketInfo;
}

export interface FlightInfo {
  id: string;
  airline: string;
  flightNumber: string;
  departure: {
    airport: string;
    code: string;
    time: string;
    date: string;
  };
  arrival: {
    airport: string;
    code: string;
    time: string;
    date: string;
  };
  duration: string;
  passenger: string;
  confirmationCode: string;
  note?: string;
}

export interface HotelDeparture {
  hotelName: string;
  destination: string;
  distance: string;
  driveTime: string;
}

export interface CSRRestaurant {
  name: string;
  cuisine: string;
  location: string;
  price: string;
  note: string;
}

export interface CSRBenefits {
  hotelCredit: string;
  diningCredit: string;
  freeBreakfast: string;
  roomUpgrade: string;
  recommendedRestaurants: CSRRestaurant[];
}

export interface DaySchedule {
  day: number;
  date: string;
  weekday: string;
  title: string;
  subtitle: string;
  city: string;
  mode: string;
  attractions: Attraction[];
  options?: DayOption[];
  isOptionDay?: boolean;
  dinner?: {
    location: string;
    suggestion: string;
    address?: string;
    tips?: string;
  };
  flights?: FlightInfo[];
  hotelDeparture?: HotelDeparture;
  hotelTonight?: {
    hotelName: string;
    address: string;
    confirmationCode?: string;
  };
  csrBenefits?: CSRBenefits;
}

export interface Hotel {
  id: string;
  name: string;
  city: string;
  checkIn: string;
  checkOut: string;
  image: string;
  address: string;
  csrBenefits?: string;
  confirmationCode?: string;
}

export interface CityTransfer {
  from: string;
  to: string;
  date: string;
  driveTime: string;
  distance: string;
}

export interface TodoItem {
  id: string;
  day: number;
  type: 'ticket' | 'reservation' | 'other';
  name: string;
  location: string;
  url?: string;
  price?: string;
  status: 'pending' | 'done';
}

// 酒店信息
export const hotels: Hotel[] = [
  {
    id: 'la-hotel',
    name: 'Hyatt Place Glendale / Los Angeles',
    city: '洛杉矶 Glendale',
    checkIn: '2026-01-29',
    checkOut: '2026-02-02',
    image: '/images/7HlSsEqtqyKz.jpg',
    address: '400 W Glenoaks Blvd, Glendale, CA 91202'
  },
  {
    id: 'sd-hotel',
    name: 'Hyatt House San Diego/Sorrento Mesa',
    city: '圣地亚哥',
    checkIn: '2026-02-02',
    checkOut: '2026-02-05',
    image: '/images/R6NR28UJpWgb.jpg',
    address: '9280 Scranton Rd, San Diego, CA 92121'
  },
  {
    id: 'vegas-hotel-1',
    name: 'MGM Grand Hotel & Casino',
    city: '拉斯维加斯',
    checkIn: '2026-02-04',
    checkOut: '2026-02-06',
    image: 'https://images.unsplash.com/photo-1605833556294-ea5c7a74f57d?w=800',
    address: '3799 Las Vegas Blvd S, Las Vegas, NV 89109',
    confirmationCode: '883JL3SL2C-'
  },
  {
    id: 'vegas-hotel-2',
    name: 'Mandalay Bay Resort And Casino',
    city: '拉斯维加斯',
    checkIn: '2026-02-05',
    checkOut: '2026-02-07',
    image: 'https://images.unsplash.com/photo-1581351721010-8cf859cb14a4?w=800',
    address: '3950 Las Vegas Blvd S, Las Vegas, NV 89119',
    confirmationCode: '3OG0VP8134-'
  },
  {
    id: 'nyc-hotel',
    name: 'Hyatt Place New York City / Times Square',
    city: '纽约 时代广场',
    checkIn: '2026-02-07',
    checkOut: '2026-02-11',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800',
    address: '350 W 39th St, New York, NY 10018'
  },
  {
    id: 'dc-hotel',
    name: 'Hyatt Place Washington DC/White House',
    city: '华盛顿',
    checkIn: '2026-02-11',
    checkOut: '2026-02-14',
    image: 'https://images.unsplash.com/photo-1501466044931-62695aada8e9?w=800',
    address: '1522 K St NW, Washington, DC 20005'
  }
];

// 城市间交通
export const cityTransfers: CityTransfer[] = [
  {
    from: '洛杉矶 (Glendale)',
    to: '圣地亚哥',
    date: '2026-02-02',
    driveTime: '约2小时',
    distance: '约120英里 (193公里)'
  },
  {
    from: '圣地亚哥',
    to: '拉斯维加斯',
    date: '2026-02-05',
    driveTime: '约5小时',
    distance: '约330英里 (530公里)'
  }
];



// 每日行程
export const tripSchedule: DaySchedule[] = [
  {
    day: 1,
    date: '2026-01-29',
    weekday: '星期四',
    title: 'Day 1：抵达洛杉矶',
    subtitle: '接机日 | 晚上到达',
    city: 'Los Angeles',
    mode: '接机',
    flights: [
      {
        id: 'flight-parents-arrival',
        airline: '厦门航空',
        flightNumber: 'MF 829',
        departure: {
          airport: '厦门高崎国际机场',
          code: 'XMN',
          time: '22:55',
          date: '2026-01-29'
        },
        arrival: {
          airport: '洛杉矶国际机场',
          code: 'LAX',
          time: '19:00',
          date: '2026-01-29'
        },
        duration: '12小时5分钟',
        passenger: '父母 + 妹妹',
        confirmationCode: 'PBB1C6',
        note: '直飞，经济舱'
      },
      {
        id: 'flight-yujun-arrival',
        airline: 'Frontier Airlines',
        flightNumber: 'F9 1061',
        departure: {
          airport: '凤凰城天港国际机场',
          code: 'PHX',
          time: '16:19',
          date: '2026-01-29'
        },
        arrival: {
          airport: '洛杉矶国际机场',
          code: 'LAX',
          time: '16:54',
          date: '2026-01-29'
        },
        duration: '1小时35分钟',
        passenger: '你',
        confirmationCode: 'IB7INI',
        note: '直飞'
      }
    ],
    attractions: [
      {
        id: 'arrival',
        name: '洛杉矶国际机场',
        nameEn: 'LAX International Airport',
        time: '晚间 19:00',
        description: '父母和妹妹晚上7点到达洛杉矶，你下午4:54先到，在机场等待接机。接到后前往Glendale酒店入住休息。',
        highlights: ['接机', '入住酒店', '调整时差'],
        image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/KuskrhnDrWZxMPfE.jpg',
        mapQuery: 'LAX Airport to Hyatt Place Glendale',
        distanceToNext: {
          to: '酒店 Hyatt Place Glendale',
          distance: '约30公里',
          driveTime: '约35分钟'
        }
      }
    ]
  },
  {
    day: 2,
    date: '2026-01-30',
    weekday: '星期五',
    title: 'Day 2：西区艺术与海滨之旅',
    subtitle: '分头行动 | 你在图书馆办公',
    city: 'Los Angeles',
    mode: '你开车送后自驾 / 父母妹妹打车',
    hotelDeparture: {
      hotelName: 'Hyatt Place Glendale',
      destination: '盖蒂中心',
      distance: '约18公里',
      driveTime: '约25分钟'
    },
    attractions: [
      {
        id: 'getty-center',
        name: '盖蒂中心（父母+妹妹）',
        nameEn: 'The Getty Center',
        time: '10:00 - 13:30',
        description: '世界级艺术博物馆，坐落于山顶，可俯瞰整个洛杉矶。乘坐免费小火车上山，欣赏现代建筑、精美花园和珍贵艺术收藏。你送他们到达后去图书馆办公。',
        highlights: ['免费小火车', '现代建筑', '中央花园', '俯瞰LA全景', '艺术收藏'],
        tips: '馆内有餐厅可解决午餐',
        image: '/images/vvDBSu0J42jx.webp',
        mapQuery: 'The Getty Center Los Angeles',
        distanceToNext: {
          to: 'Abbot Kinney大道',
          distance: '约20公里',
          driveTime: '约30分钟'
        }
      },
      {
        id: 'west-la-library',
        name: 'West LA图书馆（你）',
        nameEn: 'West Los Angeles Regional Branch Library',
        time: '10:30 - 17:30',
        description: '你在这里办公一整天，下午5:30结束后去圣塔莫尼卡海滩接父母和妹妹。',
        highlights: ['办公', '安静环境', '免费WiFi'],
        image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/KuskrhnDrWZxMPfE.jpg',
        mapQuery: 'West Los Angeles Regional Branch Library',
        distanceToNext: {
          to: '圣塔莫尼卡海滩',
          distance: '约8公里',
          driveTime: '约15分钟'
        }
      },
      {
        id: 'abbot-kinney',
        name: 'Abbot Kinney大道（父母+妹妹）',
        nameEn: 'Abbot Kinney Boulevard',
        time: '14:30 - 15:30',
        description: '被誉为"美国最酷的街道"，汇集了精品店、画廊、咖啡馆和餐厅。非常适合漫步和拍照。',
        highlights: ['精品店', '艺术画廊', '网红咖啡', '街拍圣地'],
        image: '/images/uplKq9gON2fQ.jpg',
        mapQuery: 'Abbot Kinney Boulevard Venice',
        distanceToNext: {
          to: 'Venice滑板公园',
          distance: '约1公里',
          driveTime: '约5分钟步行'
        }
      },
      {
        id: 'venice-skate-park',
        name: 'Venice滑板公园（父母+妹妹）',
        nameEn: 'Venice Skate Park',
        time: '15:45 - 16:30',
        description: '世界著名的滑板圣地，位于Venice海滩旁。可以观看滑板高手表演各种特技，感受加州的街头文化氛围。',
        highlights: ['滑板表演', '街头文化', '海滩氛围', '拍照打卡'],
        image: '/images/yNplUQMAUoia.jpg',
        mapQuery: 'Venice Skate Park',
        distanceToNext: {
          to: '圣塔莫尼卡海滩',
          distance: '约5公里',
          driveTime: '约10分钟'
        }
      },
      {
        id: 'santa-monica',
        name: '圣塔莫尼卡海滩（全家集合）',
        nameEn: 'Santa Monica Beach',
        time: '17:00 - 19:00',
        description: '著名的海滨度假胜地，66号公路的终点。在码头上找到标志性的"Route 66 End of Trail"路牌打卡，欣赏太平洋日落。你下班后来这里接他们，全家一起看日落。',
        highlights: ['66号公路终点', '圣塔莫尼卡码头', '太平洋日落', '全家集合'],
        tips: '你下班后来这里接他们，一起看日落',
        image: '/images/yNplUQMAUoia.jpg',
        mapQuery: 'Santa Monica Pier',
        distanceToNext: {
          to: 'Sun Nong Dan餐厅',
          distance: '约20公里',
          driveTime: '约30分钟'
        }
      }
    ],
    dinner: {
      location: 'Koreatown - Sun Nong Dan',
      suggestion: '招牌牛排骨汤（Galbi-jjim）'
    }
  },
  {
    day: 3,
    date: '2026-01-31',
    weekday: '星期六',
    title: 'Day 3：名校与城市文化之旅',
    subtitle: '全家同行 | 感受洛杉矶的多元魅力',
    city: 'Los Angeles',
    mode: '全家一辆车',
    hotelDeparture: {
      hotelName: 'Hyatt Place Glendale',
      destination: 'UCLA',
      distance: '约25公里',
      driveTime: '约30分钟'
    },
    attractions: [
      {
        id: 'ucla',
        name: 'UCLA 加州大学洛杉矶分校',
        nameEn: 'University of California, Los Angeles',
        time: '09:00 - 10:30',
        description: '美国顶尖公立大学，校园环境优美。参观标志性的罗伊斯礼堂和大草坪，感受名校学术氛围。',
        highlights: ['罗伊斯礼堂', '校园大草坪', '名校氛围', '建筑欣赏'],
        tips: '🅿️ 停车指南：可停在 Structure 8 停车场（Westwood Plaza 旁）或 Lot 4，周末停车费约$14/天。从停车场步行到罗伊斯礼堂约5分钟。',
        image: '/images/HC2as0f3o4YG.jpg',
        mapQuery: 'UCLA Royce Hall',
        distanceToNext: {
          to: '小东京',
          distance: '约22公里',
          driveTime: '约25分钟'
        }
      },
      {
        id: 'little-tokyo',
        name: '小东京',
        nameEn: 'Little Tokyo',
        time: '11:00 - 12:30',
        description: '洛杉矶的日本城，充满日式风情。在这里享用正宗日本料理，推荐大黑家拉面或寿司。',
        highlights: ['日式街区', '正宗拉面', '日本文化', 'Arts District'],
        tips: '🅿️ 停车指南：建议停在 Japanese Village Plaza 停车场（335 E 2nd St）或 Weller Court 停车场（123 Astronaut E S Onizuka St），费用约$5-10。吃完午饭后步行去天使铁路（约1公里，10-15分钟），车停在这里不用动。\n🍜 午餐推荐：大黑家拉面 Daikokuya',
        image: '/images/cNViwmycJ3Ox.jpg',
        mapQuery: 'Little Tokyo Los Angeles',
        distanceToNext: {
          to: '天使铁路',
          distance: '约1公里',
          driveTime: '约10-15分钟步行'
        }
      },
      {
        id: 'angels-flight',
        name: '天使铁路 & 最后一家书店',
        nameEn: 'Angels Flight & The Last Bookstore',
        time: '13:30 - 15:15',
        description: '天使铁路是世界上最短的铁路，复古橙色车厢极具特色。最后一家书店是洛杉矶最有特色的独立书店，书籍隧道和艺术装置非常适合拍照。',
        highlights: ['复古铁路', '书籍隧道', '艺术装置', '拍照打卡'],
        tips: '🚶 从小东京步行过来，车停在小东京不用动。天使铁路和最后一家书店步行距离5分钟，先坐铁路上山，再步行去书店。',
        image: '/images/lOl1JS8w4Pui.jpg',
        mapQuery: 'Angels Flight Railway Los Angeles',
        ticket: {
          required: true,
          name: '天使铁路车票',
          url: 'https://www.angelsflight.org/',
          price: '$1/次',
          status: 'done'
        },
        distanceToNext: {
          to: 'Greek Theatre停车场',
          distance: '约13公里',
          driveTime: '约20分钟（返回小东京取车后开车）'
        }
      },
      {
        id: 'griffith',
        name: '格里菲斯天文台',
        nameEn: 'Griffith Observatory',
        time: '16:00 - 18:30',
        description: '洛杉矶最佳观景点，可远眰好莱坞标志。傍晚时分前往，欣赏洛杉矶从黄昏到亮灯的全过程，夜景绝美。',
        highlights: ['Hollywood Sign', '洛杉矶夜景', '天文展览', '免费参观'],
        tips: '🅿️ 停车指南：停在 Greek Theatre 停车场（2700 N Vermont Ave），然后乘坐免费摆渡车（DASH Observatory Shuttle）上山，约10分钟一班。这样可以避免天文台停车场满员的问题，尤其是周末和日落时分。Greek Theatre停车费约$10-15。',
        image: '/images/AzHiJAJPplKO.webp',
        mapQuery: 'Griffith Observatory',
        distanceToNext: {
          to: '韩国城',
          distance: '约10公里',
          driveTime: '约15分钟'
        }
      }
    ],
    dinner: {
      location: '活粥王 (Tasty Garden)',
      suggestion: '粥品、点心、广式小炒',
      address: '288 W Valley Blvd, Alhambra, CA 91801',
      tips: '从格里菲斯天文台开车约20分钟到达，推荐皂火粥和烧鸭'
    }
  },
  {
    day: 4,
    date: '2026-02-01',
    weekday: '星期日',
    title: 'Day 4：购物与魔法之日',
    subtitle: '父母悠闲购物 | 你和妹妹迪士尼双园奇幻之旅',
    city: 'Los Angeles',
    mode: '分头行动：父母步行 | 你和妹妹打车',
    isOptionDay: false,
    hotelDeparture: {
      hotelName: 'Hyatt Place Glendale',
      destination: 'The Americana at Brand',
      distance: '步行约5分钟',
      driveTime: '步行可达'
    },
    attractions: [
      {
        id: 'americana-at-brand',
        name: 'The Americana at Brand（父母）',
        nameEn: 'The Americana at Brand',
        time: '10:00 - 14:00',
        description: '洛杉矶最美的露天购物中心，欧洲小镇风格设计。中心有音乐喷泉、复古有轨电车、精美建筑和花园。白天可以欣赏喷泉表演，夜晚灯光璀璐。',
        highlights: ['音乐喷泉表演', '复古有轨电车', '欧洲小镇风格', '露天购物中心'],
        tips: '从酒店步行约5分钟即可到达，非常方便',
        image: '/images/rSeKiPCkmh7M.jpg',
        mapQuery: 'The Americana at Brand Glendale',
        distanceToNext: {
          to: 'Glendale Galleria',
          distance: '步行约3分钟',
          driveTime: '直接连通'
        }
      },
      {
        id: 'glendale-galleria',
        name: 'Glendale Galleria（父母）',
        nameEn: 'Glendale Galleria',
        time: '14:00 - 18:00',
        description: '加州最大的室内购物中心之一，拥有超过200家商店。与The Americana直接连通，室内有空调，适合慢慢逛。设有多家美食广场和餐厅。',
        highlights: ['超过200家商店', '室内空调', '美食广场', '与Americana连通'],
        tips: '两个商场直接连通，可以无缝购物一整天',
        image: '/images/kEcGxCb8DwWH.jpg',
        mapQuery: 'Glendale Galleria',
        distanceToNext: {
          to: '酒店',
          distance: '步行约5分钟',
          driveTime: '步行可达'
        }
      },
      {
        id: 'disneyland-both-parks',
        name: '迪士尼双园（你+妹妹）',
        nameEn: 'Disneyland Resort (Both Parks)',
        time: '08:00 - 22:00',
        description: '你和妹妹打车前往迪士尼度假区，畅玩两个园区：迪士尼乐园（Disneyland Park）和加州冒险乐园（Disney California Adventure）。建议购买Park Hopper票，可以在两个园区之间自由穿梭。',
        highlights: ['迪士尼乐园', '加州冒险乐园', 'Park Hopper票', '烟花表演', 'Genie+快速通道'],
        tips: '建议07:30从Glendale打车出发，约45分钟到达，赶在开园前到达',
        image: '/images/dwYmqzeploef.jpg',
        mapQuery: 'Disneyland Resort Anaheim',
        ticket: {
          required: true,
          name: '迪士尼双园票 (Park Hopper)',
          url: 'https://disneyland.disney.go.com/tickets/',
          price: '约$179/人',
          status: 'done'
        },
        distanceToNext: {
          to: '酒店 Glendale',
          distance: '约45公里',
          driveTime: '约45分钟打车'
        }
      }
    ],
    dinner: {
      location: 'The Americana at Brand',
      suggestion: '父母可在购物中心内用晚餐，你和妹妹在迪士尼内用餐',
      address: 'The Americana at Brand, Glendale',
      tips: '推荐父母在Americana的Cheesecake Factory或Granville用餐'
    }
  },
  {
    day: 5,
    date: '2026-02-02',
    weekday: '星期一',
    title: 'Day 5：海岸公路之旅',
    subtitle: 'LA → 海滩 → 圣地亚哥',
    city: 'San Diego',
    mode: '自驾（约4小时总车程）',
    hotelDeparture: {
      hotelName: 'Hyatt Place Glendale',
      destination: 'In-N-Out LAX',
      distance: '约26英里',
      driveTime: '约40分钟'
    },
    attractions: [
      {
        id: 'innout-lax',
        name: 'In-N-Out 看飞机 + 曼哈顿海滩',
        nameEn: 'In-N-Out LAX + Manhattan Beach',
        time: '10:00 - 11:30',
        description: '世界上最独特的In-N-Out！就在LAX跑道24R旁边，飞机从头顶飞过，震撼体验。吃完汉堡后开5分钟到曼哈顿海滩码头拍照。',
        highlights: ['飞机从头顶飞过', '网红打卡点', '曼哈顿海滩码头', '加州汉堡'],
        tips: '建议坐户外座位，飞机每隔几分钟就有一架',
        image: '/images/innout-lax.jpg',
        mapQuery: 'In-N-Out Burger 9149 S Sepulveda Blvd Los Angeles',
        distanceToNext: {
          to: '拉古纳海滩',
          distance: '约50英里',
          driveTime: '约55分钟'
        }
      },
      {
        id: 'laguna-beach',
        name: '拉古纳海滩',
        nameEn: 'Laguna Beach',
        time: '12:30 - 14:30',
        description: '加州最美的艺术家小镇！悬崖海景、清澈海水、精品画廊和特色餐厅。在这里享用午餐，欣赏太平洋美景。',
        highlights: ['艺术家小镇', '悬崖海景', '精品画廊', '海滨午餐'],
        tips: '推荐在Main Beach附近的餐厅用午餐',
        image: '/images/laguna-beach.jpg',
        mapQuery: 'Laguna Beach California',
        distanceToNext: {
          to: 'La Jolla Cove',
          distance: '约64英里',
          driveTime: '约1小时15分'
        }
      },
      {
        id: 'la-jolla',
        name: 'La Jolla Cove + Children\'s Pool',
        nameEn: 'La Jolla Cove & Children\'s Pool',
        time: '16:00 - 18:00',
        description: '圣地亚哥最美的海滨区域！La Jolla Cove看海狮，步行10分钟到Children\'s Pool看海豹。2月正是繁殖季，可能看到小海豹宝宝！',
        highlights: ['海狮观赏', '海豹观赏', '悬崖海景', '繁殖季'],
        tips: 'La Jolla Cove有海狮，Children\'s Pool有海豹，两个都要去',
        image: '/images/NhpH1AFSnFsU.jpg',
        mapQuery: 'La Jolla Cove San Diego',
        distanceToNext: {
          to: 'Blue Water Seafood',
          distance: '约15英里',
          driveTime: '约25分钟'
        }
      }
    ],
    dinner: {
      location: 'Blue Water Seafood Ocean Beach',
      suggestion: '圣地亚哥最新鲜的海鲜！曾上过Food Network的Triple D节目',
      address: '5083 Santa Monica Ave, San Diego, CA 92107',
      tips: '推荐Fish Tacos、Yellowtail ($30)、Rockfish ($22)'
    }
  },
  {
    day: 6,
    date: '2026-02-03',
    weekday: '星期二',
    title: 'Day 6：圣地亚哥动物园',
    subtitle: '世界顶级动物园',
    city: 'San Diego',
    mode: '自驾',
    hotelDeparture: {
      hotelName: 'Hyatt House San Diego',
      destination: '圣地亚哥动物园',
      distance: '约15公里',
      driveTime: '约18分钟'
    },
    attractions: [
      {
        id: 'sd-zoo',
        name: '圣地亚哥动物园',
        nameEn: 'San Diego Zoo',
        time: '09:00 - 17:00',
        description: '全球最大、最著名的动物园之一，拥有超过3700种动物。园区设计精美，动物生活环境接近自然。必看大熊猫、考拉和非洲草原区。',
        highlights: ['大熊猫', '考拉', '非洲草原', '空中缆车', '3700+种动物'],
        tips: '建议预留一整天时间',
        image: '/images/ARfeFjCC0Eqt.jpg',
        mapQuery: 'San Diego Zoo',
        ticket: {
          required: true,
          name: '圣地亚哥动物园门票',
          url: 'https://zoo.sandiegozoo.org/tickets',
          price: '$67/人',
          status: 'done'
        },
        distanceToNext: {
          to: '巴尔博亚公园',
          distance: '步行可达',
          driveTime: '约5分钟步行'
        }
      },
      {
        id: 'balboa-park',
        name: '巴尔博亚公园',
        nameEn: 'Balboa Park',
        time: '傍晚',
        description: '动物园就在公园内，游览完可以在公园散步。西班牙殖民风格建筑群，众多博物馆和花园。',
        highlights: ['西班牙建筑', '博物馆群', '花园', '文化中心'],
        image: '/images/UEy7zOYKz0yO.webp',
        mapQuery: 'Balboa Park San Diego',
        distanceToNext: {
          to: '酒店',
          distance: '约15公里',
          driveTime: '约18分钟'
        }
      }
    ]
  },
  {
    day: 7,
    date: '2026-02-04',
    weekday: '星期三',
    title: 'Day 7：航母 → 拉斯维加斯',
    subtitle: '军事历史 + 穿越沙漠',
    city: 'Las Vegas',
    mode: '自驾（约5小时）',
    hotelDeparture: {
      hotelName: 'Hyatt House San Diego',
      destination: '中途岛号航空母舰',
      distance: '约18公里',
      driveTime: '约20分钟'
    },
    hotelTonight: {
      hotelName: 'MGM Grand Hotel & Casino',
      address: '3799 Las Vegas Blvd S, Las Vegas, NV 89109',
      confirmationCode: '883JL3SL2C-'
    },
    attractions: [
      {
        id: 'uss-midway',
        name: '中途岛号航空母舰',
        nameEn: 'USS Midway Museum',
        time: '09:00 - 12:00',
        description: '美国海军退役航空母舰，现为博物馆。可以登上甲板参观各种战斗机，进入舰内了解水兵生活。非常震撼的军事体验！',
        highlights: ['航空母舰', '战斗机展示', '舰内参观', '军事历史', '海港风景'],
        tips: '建议预留3小时，语音导览非常精彩',
        image: '/images/oc6tgpk5Pgm5.jpg',
        mapQuery: 'USS Midway Museum San Diego',
        ticket: {
          required: true,
          name: '中途岛号航空母舰门票',
          url: 'https://www.midway.org/tickets/',
          price: '$26/人',
          status: 'done'
        },
        distanceToNext: {
          to: '海港午餐',
          distance: '步行可达',
          driveTime: '约5分钟步行'
        }
      },
      {
        id: 'lunch-sd',
        name: '海港午餐',
        nameEn: 'Waterfront Lunch',
        time: '12:00 - 13:00',
        description: '在航母附近的Seaport Village或港口区享用午餐，欣赏最后的圣地亚哥海景。',
        highlights: ['海港风景', '快速午餐', '告别圣地亚哥'],
        image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/vQzrlNMczdgokoHM.jpg',
        mapQuery: 'Seaport Village San Diego',
        distanceToNext: {
          to: '拉斯维加斯',
          distance: '约530公里',
          driveTime: '约5小时'
        }
      },
      {
        id: 'drive-to-vegas',
        name: '圣地亚哥 → 拉斯维加斯',
        nameEn: 'San Diego to Las Vegas Drive',
        time: '13:00 - 18:00',
        description: '穿越莫哈韦沙漠，约5小时车程。沿途可以欣赏壮观的沙漠风光，建议中途在Barstow休息加油。',
        highlights: ['沙漠公路', '约530公里', '壮观风景', 'Barstow休息站'],
        tips: '记得在出发前加满油，沙漠中加油站较少',
        image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/uIxgsSuOPOnejuZb.jpg',
        mapQuery: 'San Diego to Las Vegas',
        distanceToNext: {
          to: 'EDIT酒店',
          distance: '约530公里',
          driveTime: '约5小时'
        }
      },
      {
        id: 'vegas-checkin',
        name: '抵达EDIT酒店',
        nameEn: 'Check-in EDIT Hotel',
        time: '18:00 - 19:00',
        description: '抵达拉斯维加斯，入住EDIT酒店。记得在前台询问Chase Sapphire Reserve的房间升级和免费早餐福利！',
        highlights: ['酒店入住', 'CSR福利', '房间升级', '免费早餐'],
        tips: '出示CSR卡并询问升级和福利',
        image: '/images/CA3xWsMJYthL.jpg',
        mapQuery: 'EDIT Hotel Las Vegas',
        distanceToNext: {
          to: '百乐宫喷泉',
          distance: '约2公里',
          driveTime: '约5分钟'
        }
      },
      {
        id: 'bellagio-fountain',
        name: '百乐宫喷泉秀',
        nameEn: 'Bellagio Fountains',
        time: '晚上',
        description: '世界最著名的音乐喷泉表演，免费观看！每15-30分钟一场，配合音乐的水舞表演非常震撼。到达第一晚必看！',
        highlights: ['音乐喷泉', '免费表演', '每15-30分钟一场', '夜景绝佳'],
        image: '/images/Lvz9vZSL0u5w.jpg',
        mapQuery: 'Bellagio Fountains Las Vegas',
        distanceToNext: {
          to: 'EDIT酒店',
          distance: '约2公里',
          driveTime: '约5分钟'
        }
      }
    ]
  },
  {
    day: 8,
    date: '2026-02-05',
    weekday: '星期四',
    title: 'Day 8：拉斯维加斯酒店巡游 Day 1',
    subtitle: 'Strip南段经典酒店',
    city: 'Las Vegas',
    mode: '步行 + 打车',
    hotelDeparture: {
      hotelName: 'MGM Grand Hotel & Casino',
      destination: '威尼斯人酒店',
      distance: '约3公里',
      driveTime: '约10分钟'
    },
    hotelTonight: {
      hotelName: 'Mandalay Bay Resort And Casino',
      address: '3950 Las Vegas Blvd S, Las Vegas, NV 89119',
      confirmationCode: '3OG0VP8134-'
    },
    attractions: [
      {
        id: 'venetian',
        name: '威尼斯人酒店',
        nameEn: 'The Venetian Resort',
        time: '10:00 - 12:00',
        description: '拉斯维加斯最豪华的酒店之一！室内运河、贡多拉船、圣马可广场复制品，仿佛置身意大利威尼斯。大运河购物中心也很值得逛。',
        highlights: ['室内运河', '贡多拉船', '圣马可广场', '大运河购物中心', '免费参观'],
        tips: '贡多拉船票约$34/人，可选择不坐只看',
        image: '/images/UK6VZazQUB68.jpg',
        mapQuery: 'The Venetian Las Vegas',
        distanceToNext: {
          to: '巴黎酒店',
          distance: '约1.5公里',
          driveTime: '约15分钟步行'
        }
      },
      {
        id: 'paris',
        name: '巴黎酒店',
        nameEn: 'Paris Las Vegas',
        time: '12:30 - 14:00',
        description: '法式浪漫风情！半比例埃菲尔铁塔复制品是标志性景点，可以乘电梯登顶俘瞰Strip全景。酒店内部仿巴黎街道设计，很适合拍照。',
        highlights: ['埃菲尔铁塔', '观景台', '法式装潢', '拍照打卡'],
        tips: '铁塔观景台票约$25/人，日落时分最美',
        image: '/images/5JKQG0En3mao.jpg',
        mapQuery: 'Paris Las Vegas',
        ticket: {
          required: false,
          name: '埃菲尔铁塔观景台',
          url: 'https://www.caesars.com/paris-las-vegas/things-to-do/eiffel-tower',
          price: '$25/人',
          status: 'done'
        },
        distanceToNext: {
          to: '午餐',
          distance: '酒店内',
          driveTime: '步行即可'
        }
      },
      {
        id: 'lunch-vegas',
        name: '午餐时光',
        nameEn: 'Lunch Break',
        time: '14:00 - 15:00',
        description: '在巴黎酒店或附近的美食广场享用午餐。推荐Mon Ami Gabi法式餐厅，户外座位可以看到百乐宫喷泉。',
        highlights: ['法式餐厅', '观景座位', '休息充电'],
        image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/uIxgsSuOPOnejuZb.jpg',
        mapQuery: 'Mon Ami Gabi Las Vegas',
        distanceToNext: {
          to: '凯撒宫',
          distance: '约500米',
          driveTime: '约8分钟步行'
        }
      },
      {
        id: 'caesars',
        name: '凯撒宫',
        nameEn: 'Caesars Palace',
        time: '15:00 - 17:00',
        description: '罗马帝国主题酒店，宫殿级装潢！Forum Shops购物中心有仿古罗马天空和雕塑，还有定时的灯光秀。酒店大厅的罗马雕塑和喷泉也很壮观。',
        highlights: ['Forum Shops', '罗马雕塑', '天空灯光秀', '免费参观'],
        tips: 'Forum Shops的天空会随时间变化，很适合拍照',
        image: '/images/SrtVwPILUEEb.jpg',
        mapQuery: 'Caesars Palace Las Vegas',
        distanceToNext: {
          to: '百乐宫',
          distance: '约300米',
          driveTime: '约5分钟步行'
        }
      },
      {
        id: 'bellagio',
        name: '百乐宫',
        nameEn: 'Bellagio',
        time: '17:00 - 19:00',
        description: '拉斯维加斯最优雅的酒店！必看的玻璃花天花板艺术品、室内植物园（季节性布置）、和世界著名的音乐喷泉。在这里等待日落和喷泉秀。',
        highlights: ['玻璃花天花板', '植物园', '音乐喷泉', '免费参观'],
        tips: '喷泉秀每15-30分钟一场，晚上效果更佳',
        image: '/images/Lvz9vZSL0u5w.jpg',
        mapQuery: 'Bellagio Las Vegas',
        distanceToNext: {
          to: '晚餐',
          distance: '约2公里',
          driveTime: '约10分钟'
        }
      },
      {
        id: 'dinner-day8',
        name: '晚餐',
        nameEn: 'Dinner',
        time: '19:00 - 20:30',
        description: '在Strip上选择一家餐厅享用晚餐。推荐百乐宫的Spago或凯撒宫的Gordon Ramsay餐厅。',
        highlights: ['美食体验', 'Strip景观', '休息充电'],
        image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/uIxgsSuOPOnejuZb.jpg',
        mapQuery: 'Spago Las Vegas',
        distanceToNext: {
          to: '弗里蒙特街',
          distance: '约6公里',
          driveTime: '约12分钟打车'
        }
      },
      {
        id: 'fremont',
        name: '弗里蒙特街',
        nameEn: 'Fremont Street Experience',
        time: '21:00 - 23:00',
        description: '老城区的步行街，巨大的LED天幕每晚上演精彩灯光秀！复古霓虹灯、街头表演，感受不一样的拉斯维加斯。这里是拉斯维加斯的发源地！',
        highlights: ['LED天幕秀', '复古霓虹灯', '街头表演', '老城风情'],
        tips: '灯光秀每小时整点开始，持续约6分钟',
        image: '/images/SrtVwPILUEEb.jpg',
        mapQuery: 'Fremont Street Experience',
        distanceToNext: {
          to: 'EDIT酒店',
          distance: '约7公里',
          driveTime: '约15分钟打车'
        }
      }
    ]
  },
  {
    day: 9,
    date: '2026-02-06',
    weekday: '星期五',
    title: 'Day 9：拉斯维加斯酒店巡游 Day 2',
    subtitle: 'Strip北段 + 摩天轮 + CSR福利大餐',
    city: 'Las Vegas',
    mode: '步行 + 打车',
    hotelDeparture: {
      hotelName: 'Mandalay Bay Resort And Casino',
      destination: 'Wynn酒店',
      distance: '约3公里',
      driveTime: '约10分钟'
    },
    hotelTonight: {
      hotelName: 'Mandalay Bay Resort And Casino',
      address: '3950 Las Vegas Blvd S, Las Vegas, NV 89119',
      confirmationCode: '3OG0VP8134-'
    },
    csrBenefits: {
      hotelCredit: '$100酒店消费额度',
      diningCredit: '$150 Dining Credit（半年额度）',
      freeBreakfast: '每日双人早餐',
      roomUpgrade: '入住时可询问升级',
      recommendedRestaurants: [
        { name: 'Hell\'s Kitchen', cuisine: '美式', location: 'Caesars Palace', price: '~$100', note: 'Gordon Ramsay主题餐厅' },
        { name: 'Nobu', cuisine: '日料', location: 'Caesars Palace', price: '~$100', note: '世界知名日料' },
        { name: 'Top of the World', cuisine: '牛排', location: 'STRAT Tower', price: '~$150', note: '800英尺高空旋转餐厅' },
        { name: 'Momofuku', cuisine: '亚洲融合', location: 'Cosmopolitan', price: '~$70', note: 'David Chang的餐厅' }
      ]
    },
    attractions: [
      {
        id: 'wynn',
        name: 'Wynn / Encore酒店',
        nameEn: 'Wynn Las Vegas',
        time: '10:00 - 12:00',
        description: '拉斯维加斯最奢华的酒店！由赌王史蒂夫·永利打造，室内装潢精美绝伦。必看的人工湖和瀑布、花园、以及奢华的大厅装饰。',
        highlights: ['人工湖瀑布', '奢华装潢', '花园', '免费参观'],
        tips: '酒店内的花园和瀑布是拍照绝佳地点',
        image: '/images/UK6VZazQUB68.jpg',
        mapQuery: 'Wynn Las Vegas',
        distanceToNext: {
          to: 'Cosmopolitan',
          distance: '约2公里',
          driveTime: '约20分钟步行'
        }
      },
      {
        id: 'cosmopolitan',
        name: 'Cosmopolitan酒店',
        nameEn: 'The Cosmopolitan',
        time: '12:30 - 14:00',
        description: '最时尚的拉斯维加斯酒店！现代艺术装置、网红打卡点众多。特别推荐The Chandelier酒吧（三层水晶吸管装饰）和酒店内的艺术品展览。',
        highlights: ['现代艺术', 'The Chandelier酒吧', '网红打卡', '免费参观'],
        tips: 'Momofuku就在这里，可以在这里午餐',
        image: '/images/5JKQG0En3mao.jpg',
        mapQuery: 'The Cosmopolitan Las Vegas',
        distanceToNext: {
          to: '午餐',
          distance: '酒店内',
          driveTime: '步行即可'
        }
      },
      {
        id: 'lunch-day9',
        name: '午餐时光',
        nameEn: 'Lunch Break',
        time: '14:00 - 15:00',
        description: '在Cosmopolitan的美食广场或Momofuku享用午餐。推荐尝试David Chang的亚洲融合菜。',
        highlights: ['Momofuku', '亚洲融合', '休息充电'],
        image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/uIxgsSuOPOnejuZb.jpg',
        mapQuery: 'Momofuku Las Vegas',
        distanceToNext: {
          to: 'High Roller摩天轮',
          distance: '约1公里',
          driveTime: '约12分钟步行'
        }
      },
      {
        id: 'high-roller',
        name: 'High Roller 摩天轮',
        nameEn: 'High Roller Observation Wheel',
        time: '15:30 - 17:00',
        description: '世界最大的观景摩天轮，高达167米！一圈约30分钟，可以360度俘瞰整个拉斯维加斯。建议选择日落时分乘坐，景色最美！',
        highlights: ['世界最大摩天轮', '360度全景', '30分钟一圈', '日落美景'],
        tips: '建议日落前30分钟上去，可以看到白天和夜景两种风光',
        image: '/images/5JKQG0En3mao.jpg',
        mapQuery: 'High Roller Las Vegas',
        ticket: {
          required: true,
          name: 'High Roller摩天轮门票',
          url: 'https://www.caesars.com/linq/high-roller',
          price: '$25起/人',
          status: 'done'
        },
        distanceToNext: {
          to: 'LINQ Promenade',
          distance: '步行可达',
          driveTime: '约5分钟步行'
        }
      },
      {
        id: 'linq',
        name: 'LINQ Promenade',
        nameEn: 'LINQ Promenade',
        time: '17:00 - 18:00',
        description: '摩天轮旁边的步行街，有各种特色商店和餐厅。可以在这里散步、购物或喝个酒，等待晚餐时间。',
        highlights: ['步行街', '特色商店', '餐厅酒吧', '休闲散步'],
        image: '/images/SrtVwPILUEEb.jpg',
        mapQuery: 'LINQ Promenade Las Vegas',
        distanceToNext: {
          to: 'CSR福利晚餐',
          distance: '约2公里',
          driveTime: '约10分钟'
        }
      },
      {
        id: 'csr-dinner',
        name: 'CSR福利晚餐',
        nameEn: 'Chase Sapphire Reserve Dining',
        time: '18:30 - 20:30',
        description: '使用Chase Sapphire Reserve的$150 Dining Credit！通过OpenTable预订Sapphire Reserve Exclusive Tables餐厅，用CSR卡支付即可获得返还。推荐Hell\'s Kitchen或Nobu。',
        highlights: ['$150 Dining Credit', 'Hell\'s Kitchen或Nobu', 'OpenTable预订', 'CSR卡支付'],
        tips: '必须通过OpenTable的Sapphire Reserve Exclusive Tables预订，并用CSR卡支付才能获得返还',
        image: '/images/Lvz9vZSL0u5w.jpg',
        mapQuery: 'Hell\'s Kitchen Las Vegas',
        distanceToNext: {
          to: 'Strip夜景',
          distance: '约1公里',
          driveTime: '约10分钟步行'
        }
      },
      {
        id: 'strip-night',
        name: 'Strip夜景漫步',
        nameEn: 'Las Vegas Strip Night Walk',
        time: '晚上',
        description: '晚餐后在Strip上漫步，欣赏各大酒店的夜景。再次观看百乐宫喷泉秀，感受拉斯维加斯的最后一晚。',
        highlights: ['夜景漫步', '百乐宫喷泉', '酒店灯光', '最后一晚'],
        image: '/images/Lvz9vZSL0u5w.jpg',
        mapQuery: 'Las Vegas Strip',
        distanceToNext: {
          to: 'EDIT酒店',
          distance: '约2公里',
          driveTime: '约10分钟'
        }
      }
    ]
  },
  {
    day: 10,
    date: '2026-02-07',
    weekday: '星期六',
    title: 'Day 10：飞往纽约 & 抵达',
    subtitle: '结束西海岸之旅 | 晚上抵达纽约 | 入住Hyatt Place Times Square',
    city: 'Las Vegas',
    mode: '机场送机',
    hotelDeparture: {
      hotelName: 'EDIT Hotel',
      destination: '拉斯维加斯机场',
      distance: '约5公里',
      driveTime: '约10分钟'
    },
    flights: [
      {
        id: 'flight-parents-departure',
        airline: 'American Airlines',
        flightNumber: 'AA 1069',
        departure: {
          airport: '拉斯维加斯哈里·里德国际机场',
          code: 'LAS',
          time: '11:37',
          date: '2026-02-07'
        },
        arrival: {
          airport: '纽约肯尼迪国际机场',
          code: 'JFK',
          time: '19:30',
          date: '2026-02-07'
        },
        duration: '4小时53分钟',
        passenger: '父母 + 妹妹',
        confirmationCode: 'UBQHVL',
        note: '直飞，基础经济舱'
      },
      {
        id: 'flight-yujun-departure',
        airline: 'Frontier Airlines',
        flightNumber: 'F9 1020',
        departure: {
          airport: '拉斯维加斯哈里·里德国际机场',
          code: 'LAS',
          time: '13:01',
          date: '2026-02-07'
        },
        arrival: {
          airport: '凤凰城天港国际机场',
          code: 'PHX',
          time: '15:27',
          date: '2026-02-07'
        },
        duration: '1小时26分钟',
        passenger: '你',
        confirmationCode: 'JYKGHY',
        note: '直飞'
      }
    ],
    attractions: [
      {
        id: 'departure',
        name: '拉斯维加斯机场',
        nameEn: 'Harry Reid International Airport',
        time: '上午',
        description: '收拾行李，前往机场。父母和妹妹乘坐AA1069飞往纽约（11:37起飞，19:30抵达JFK），你乘坐F9 1020飞往凤凰城（13:01起飞）。结束西海岸之旅，开启纽约新篇章！',
        highlights: ['飞往纽约', '西海岸再见', '东海岸开启'],
        image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/uIxgsSuOPOnejuZb.jpg',
        mapQuery: 'Harry Reid International Airport'
      },
      {
        id: 'jfk-arrival',
        name: '抵达纽约 JFK 机场',
        nameEn: 'JFK International Airport',
        time: '晚间 19:30',
        description: '父母和妹妹晚上7:30抵达纽约JFK机场。Google地图导航到酒店即可。',
        highlights: ['抵达纽约', '入住酒店'],
        tips: '注意时差：纽约比Vegas早3小时',
        image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800',
        mapQuery: 'JFK Airport New York'
      },
      {
        id: 'nyc-hotel-checkin',
        name: '入住 Hyatt Place Times Square',
        nameEn: 'Hyatt Place New York City / Times Square',
        time: '晚间 21:00',
        description: '入住Hyatt Place New York City / Times Square酒店。酒店位于时代广场附近，步行可达各大景点。',
        highlights: ['入住酒店', '时代广场附近', '交通便利'],
        image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800',
        mapQuery: 'Hyatt Place New York City Times Square 350 W 39th St'
      }
    ]
  },
  // Day 12: 纽约下城华尔街与布鲁克林大桥
  {
    day: 11,
    date: '2026-02-08',
    weekday: '星期日',
    title: 'Day 11：自由女神与下城华尔街',
    subtitle: '🆓 Staten Island Ferry看自由女神 | 华尔街 | 世贸中心 | 布鲁克林大桥 | DUMBO | 时代广场',
    city: 'New York City',
    mode: '渡轮 + 步行',
    hotelDeparture: {
      hotelName: 'Hyatt Place Times Square (350 W 39th St)',
      destination: 'Whitehall Terminal (Staten Island Ferry)',
      distance: '约8公里',
      driveTime: '地铁1线约20分钟（Times Sq↚South Ferry）'
    },
    attractions: [
      {
        id: 'staten-island-ferry',
        name: '史丹顿岛渡轮看自由女神',
        nameEn: 'Staten Island Ferry - Statue of Liberty View',
        time: '08:30 - 10:00',
        description: '🆓 完全免费！乘坐Staten Island Ferry是观赏自由女神像的最佳免费方式。渡轮从曼哈顿Whitehall Terminal出发，单程约25分钟，渡轮会经过自由女神像旁边，可以近距离拍照。到达Staten Island后不需下船，直接坐回程渡轮返回曼哈顿。全程约50分钟往返。',
        highlights: ['🆓 完全免费', '近距离看自由女神', '曼哈顿天际线', '约50分钟往返'],
        tips: 'ℹ️ 乘船攻略：\n• 导航到：Whitehall Terminal, 4 Whitehall St\n• 渡轮24小时运行，约每30分钟一班\n• 去程坐右侧（面向行驶方向）拍自由女神\n• 回程坐左侧拍曼哈顿天际线\n• 到达Staten Island后不用下船，等待回程即可\n• 无需购票，无需安检',
        image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/ggMehFhCLlUelRcL.jpg',
        mapQuery: 'Whitehall Terminal Staten Island Ferry',
        distanceToNext: {
          to: 'Charging Bull',
          distance: '约600米',
          driveTime: '约8分钟',
          method: '步行'
        }
      },
      {
        id: 'charging-bull',
        name: '华尔街铜牛',
        nameEn: 'Charging Bull',
        time: '12:40 - 12:55',
        description: '华尔街的标志性雕塑，象征着美国金融市场的力量与乐观。这头重达3.2吨的青铜公牛是纽约最受欢迎的打卡地点之一。',
        highlights: ['华尔街标志', '网红打卡点', '金融象征'],
        tips: '早上人较少，拍照更方便。',
        image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/givxUJoIrtjjikki.jpg',
        mapQuery: 'Charging Bull Wall Street',
        distanceToNext: {
          to: 'Fearless Girl',
          distance: '约200米',
          driveTime: '约3分钟',
          method: '步行'
        }
      },
      {
        id: 'fearless-girl',
        name: '无畏女孩',
        nameEn: 'Fearless Girl',
        time: '12:55 - 13:05',
        description: '著名的《无畏女孩》雕塑，现位于纽约证券交易所对面。这座雕塑象征着女性赋权和平等，是纽约新的标志性景点。',
        highlights: ['女性赋权象征', '纽约证交所', '网红打卡'],
        tips: '停留约10分钟拍照即可。',
        image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/UufhdfsWqyygvRZg.jpg',
        mapQuery: 'Fearless Girl Statue New York Stock Exchange',
        distanceToNext: {
          to: 'Trinity Church',
          distance: '约300米',
          driveTime: '约4分钟',
          method: '步行'
        }
      },
      {
        id: 'trinity-church',
        name: '三一教堂',
        nameEn: 'Trinity Church',
        time: '13:10 - 13:30',
        description: '纽约最古老的教堂之一，建于1846年，哥特式复兴建筑风格。教堂内部装饰精美，外部的墓地埋葬着许多美国开国元勋，包括亚历山大·汉密尔顿。',
        highlights: ['哥特式建筑', '历史墓地', '汉密尔顿之墓', '免费参观'],
        tips: '免费入内参观，建议停留约25分钟。',
        image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/oEFjvNviYnRALIOD.jpg',
        mapQuery: 'Trinity Church Wall Street',
        distanceToNext: {
          to: '世贸中心/Oculus',
          distance: '约400米',
          driveTime: '约5分钟',
          method: '步行'
        }
      },
      {
        id: 'wtc-oculus',
        name: '世贸中心 & Oculus',
        nameEn: 'World Trade Center & Oculus',
        time: '13:35 - 14:15',
        description: '参观9/11纪念池，缅怀遇难者。然后参观壮观的Oculus交通枢纽，由建筑大师卡拉特拉瓦设计，外形如展翅的白鸽，内部是大型购物中心。',
        highlights: ['9/11纪念池', 'Oculus建筑', '卡拉特拉瓦设计', 'Westfield购物中心'],
        tips: '建议在Oculus内吃午餐，选择很多。',
        image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/cWvXUsTjmsAxEoeh.jpg',
        mapQuery: 'Oculus World Trade Center',
        distanceToNext: {
          to: '布鲁克林大桥',
          distance: '约2公里',
          driveTime: '约8分钟',
          method: '步行'
        }
      },
      {
        id: 'lunch-day11',
        name: '午餐时光',
        nameEn: 'Lunch Break',
        time: '14:15 - 15:00',
        description: '在Oculus内的Westfield购物中心享用午餐。这里有各种餐厅选择，从Le District法式美食市场到Eataly意式美食，应有尽有。',
        highlights: ['Westfield美食广场', 'Le District', 'Eataly', '多种选择'],
        image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/cWvXUsTjmsAxEoeh.jpg',
        mapQuery: 'Westfield World Trade Center',
        distanceToNext: {
          to: '布鲁克林大桥',
          distance: '约800米',
          driveTime: '约10分钟',
          method: '步行'
        }
      },
      {
        id: 'brooklyn-bridge',
        name: '布鲁克林大桥',
        nameEn: 'Brooklyn Bridge',
        time: '15:15 - 16:15',
        description: '步行跨越这座标志性的大桥！从曼哈顿侧出发，步行约30-40分钟到达布鲁克林侧。桥上可以欣赏曼哈顿天际线的壮丽景色。',
        highlights: ['步行跨桥', '曼哈顿天际线', '历史地标', '约30-40分钟'],
        tips: '建议从曼哈顿侧开始走，终点在DUMBO。',
        image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800',
        mapQuery: 'Brooklyn Bridge Pedestrian Entrance Manhattan',
        distanceToNext: {
          to: 'DUMBO',
          distance: '约800米',
          driveTime: '约10分钟',
          method: '步行'
        }
      },
      {
        id: 'dumbo',
        name: 'DUMBO拍照点',
        nameEn: 'DUMBO Manhattan Bridge View',
        time: '16:15 - 17:00',
        description: '纽约最经典的拍照点！在Washington Street与Water Street交口，可以拍到曼哈顿大桥在红砖建筑间的经典角度。DUMBO区域也有很多网红咖啡店和精品店。',
        highlights: ['经典拍照点', '曼哈顿大桥', '网红咖啡店', 'Brooklyn Bridge Park'],
        tips: '下午光线最佳，适合拍照。附近有Jane Carousel旋转木马。',
        image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/nOpoHnzJQhEnfDoh.jpg',
        mapQuery: 'DUMBO Manhattan Bridge View Brooklyn',
        distanceToNext: {
          to: '时代广场',
          distance: '约8公里',
          driveTime: '约25分钟',
          method: '地铁',
          subwayLine: 'F线↚B/D/F/M',
          taxiTime: '约20分钟',
          taxiCost: '$20-25'
        }
      },
      {
        id: 'times-square-day11',
        name: '时代广场',
        nameEn: 'Times Square',
        time: '18:00 - 19:30',
        description: '“世界的十字路口”，纽约最繁华的地标。巨大的霸屏广告牌、忙碌的人群和街头表演，晚上灯光效果更佳。第一次来纽约必打卡！',
        highlights: ['霸屏广告', '街头表演', '夜景灯光', '免费'],
        tips: '晚上灯光效果更好，注意保管贵重物品。',
        image: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800',
        mapQuery: 'Times Square New York'
      }
    ],
    dinner: {
      location: '时代广场附近',
      suggestion: 'Shake Shack Times Square',
      address: '691 8th Ave, New York, NY 10036',
      tips: 'Shake Shack是纽约最受欢迎的汉堡店，时代广场店位置方便。'
    }
  },
  // Day 12: 纽约 - 自然历史博物馆+图书馆+中央车站+联合国
  {
    day: 12,
    date: '2026-02-09',
    weekday: '星期一',
    title: 'Day 12：博物馆与联合国',
    subtitle: '自然历史博物馆 | 纽约公共图书馆 | 中央车站 | 联合国总部',
    city: 'New York City',
    mode: '地铁 + 步行',
    hotelDeparture: {
      hotelName: 'Hyatt Place Times Square (350 W 39th St)',
      destination: '美国自然历史博物馆',
      distance: '约3公里',
      driveTime: '地铁C线约15分钟（42 St↚81 St-Museum）'
    },
    attractions: [
      {
        id: 'amnh',
        name: '美国自然历史博物馆',
        nameEn: 'American Museum of Natural History',
        time: '09:30 - 12:30',
        description: '世界上最大的自然历史博物馆之一！必看恐龙化石大厅（4楼）、蓝鲸模型（海洋生物馆）、宝石矿物展厅（印度之星蓝宝石）。新建的Richard Gilder Center也非常值得参观。适合全家老少。',
        highlights: ['恐龙化石', '蓝鲸模型', '宝石矿物', 'Gilder Center'],
        tips: '建议网上提前购票。博物馆很大，建议重点看恐龙厅和海洋馆。周一开放。',
        image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/HfaLDEJYmUuHnZFr.jpg',
        mapQuery: 'American Museum of Natural History',
        ticket: {
          required: true,
          name: '自然历史博物馆门票',
          url: 'https://www.amnh.org/plan-your-visit/tickets',
          price: '成人$28，学生$22',
          status: 'pending'
        },
        distanceToNext: {
          to: '午餐',
          distance: '博物馆附近',
          driveTime: '约5分钟',
          method: '步行'
        }
      },
      {
        id: 'lunch-day12',
        name: '午餐时光',
        nameEn: 'Lunch Break',
        time: '12:30 - 13:15',
        description: '在自然历史博物馆附近用午餐。博物馆内有餐厅，或者可以在Columbus Ave上的餐厅吃。推荐Shake Shack (Columbus Ave店)或附近的其他餐厅。',
        highlights: ['博物馆内餐厅', 'Columbus Ave餐厅', 'Shake Shack'],
        image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/HfaLDEJYmUuHnZFr.jpg',
        mapQuery: 'restaurants near American Museum of Natural History',
        distanceToNext: {
          to: '纽约公共图书馆',
          distance: '约3公里',
          driveTime: '约15分钟（含步行+等车）',
          method: '地铁',
          subwayLine: 'C线↚42 St，换乘7线或5 Av站步行',
          taxiTime: '约10分钟',
          taxiCost: '$12-15'
        }
      },
      {
        id: 'nypl',
        name: '纽约公共图书馆',
        nameEn: 'New York Public Library (Stephen A. Schwarzman Building)',
        time: '13:30 - 14:30',
        description: '美国最大的公共图书馆系统之一，主馆是壮丽的Beaux-Arts风格建筑。门口有两座标志性的石狮子雕像"Patience"和"Fortitude"。内部的Rose Main Reading Room长达92米，天花板壁画精美绝伦。免费参观。',
        highlights: ['Beaux-Arts建筑', '石狮子雕像', 'Rose阅览室', '免费参观'],
        tips: '从第五大道正门进入，Rose Main Reading Room在3楼，非常值得一看。',
        image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/lVjQdzbUgzzopvyB.jpg',
        mapQuery: 'New York Public Library Stephen A Schwarzman Building',
        distanceToNext: {
          to: '中央车站 Grand Central Terminal',
          distance: '约600米',
          driveTime: '约8分钟',
          method: '步行'
        }
      },
      {
        id: 'grand-central',
        name: '中央车站',
        nameEn: 'Grand Central Terminal',
        time: '14:40 - 15:30',
        description: '纽约最壮观的交通枢纽！建于1913年，Beaux-Arts风格的主大厅拥有高达38米的拱形天花板，上面绘有精美的星座图。大厅中央的四面钟是纽约最著名的地标之一，据说价值超过1000万美元。',
        highlights: ['星座天花板', '四面钟', 'Beaux-Arts建筑', '免费参观'],
        tips: '站在主大厅中央抬头看星座天花板，然后去看看著名的Whispering Gallery（耳语廊）。',
        image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/xNPgtvaBOojDIsmH.jpg',
        mapQuery: 'Grand Central Terminal Main Concourse',
        distanceToNext: {
          to: '联合国 Visitors Check-in Office',
          distance: '约1公里',
          driveTime: '约12分钟',
          method: '步行',
          taxiTime: '约5分钟',
          taxiCost: '$8-10'
        }
      },
      {
        id: 'united-nations',
        name: '联合国总部导览',
        nameEn: 'United Nations Headquarters Guided Tour',
        time: '16:00 - 17:30',
        description: '✅ 已预约 2/9 周一 4:30 PM 导览团。联合国总部大楼位于曼哈顿东河畔，是世界和平与国际合作的象征。导览团约1小时，可以参观大会堂、安理会会议厅等。外部广场有各国赠送的雕塑和纪念碑。',
        highlights: ['✅ 已预约4:30 PM', '大会堂', '安理会', '国际地标'],
        tips: '❗ 入场流程：\n1️⃣ 先去 Visitors Check-in Office（801 First Ave，45th St转角，联合国对面）\n2️⃣ 过安检\n3️⃣ 在Visitors Lobby后方的Cashier\'s Desk办理导览团登记\n建议提前30分钟到达，带好护照或身份证件。',
        image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/QeEjemhcIEcYwVjv.jpg',
        mapQuery: 'United Nations Visitors Check-in Office 801 First Ave',
        ticket: {
          required: true,
          name: '联合国导览团 4:30 PM',
          url: 'https://visit.un.org',
          price: '已预约 2/9 4:30 PM',
          status: 'done'
        },
        distanceToNext: {
          to: '酒店 Hyatt Place Times Square',
          distance: '约3公里',
          driveTime: '约20分钟（含步行+等车）',
          method: '地铁',
          subwayLine: 'M42公交或地铁7线',
          taxiTime: '约10分钟',
          taxiCost: '$12-15'
        }
      }
    ],
    dinner: {
      location: '酒店附近',
      suggestion: 'Koreatown 韩国城美食（W 32nd St）',
      address: 'Koreatown, W 32nd St, New York',
      tips: '韩国城在32街附近，离酒店步行约10分钟，有很多韩国烤肉和火锅选择。'
    }
  },
  // Day 13: 纽约 - 大都会博物馆与中城经典
  {
    day: 13,
    date: '2026-02-10',
    weekday: '星期二',
    title: 'Day 13：大都会博物馆与中城经典',
    subtitle: '大都会博物馆 | 中央公园 | 第五大道 | 圣巴特里克教堂 | Top of the Rock夜景',
    city: 'New York City',
    mode: '步行 + 地铁',
    hotelDeparture: {
      hotelName: 'Hyatt Place Times Square (350 W 39th St)',
      destination: '大都会博物馆',
      distance: '约4公里',
      driveTime: '地铁约20分钟（Times Sq→4/5/6线↚86 St）'
    },
    attractions: [
      {
        id: 'met-museum',
        name: '大都会艺术博物馆',
        nameEn: 'The Metropolitan Museum of Art',
        time: '09:30 - 12:30',
        description: '世界四大博物馆之一，收藏超过200万件艺术品。必看埃及神殿（Temple of Dendur）、欧洲绘画馆（梵高、莫奈）、中国艺术展厅。建议重点看几个展厅，不要贪多。',
        highlights: ['世界级博物馆', '埃及神殿', '欧洲绘画', '中国艺术'],
        tips: '门票建议网上提前购买。周二开放。博物馆很大，建议提前规划好想看的展厅。',
        image: 'https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?w=800',
        mapQuery: 'The Metropolitan Museum of Art',
        ticket: {
          required: true,
          name: '大都会博物馆门票',
          url: 'https://www.metmuseum.org/visit/plan-your-visit',
          price: '成人$30，儿童免费',
          status: 'pending'
        },
        distanceToNext: {
          to: '中央公园',
          distance: '约500米',
          driveTime: '约7分钟',
          method: '步行'
        }
      },
      {
        id: 'central-park',
        name: '中央公园',
        nameEn: 'Central Park',
        time: '12:30 - 15:00',
        description: '纽约的绿色心脏，占地843英亩。从大都会博物馆出来后直接进入公园，步行游览Bethesda Fountain、Bow Bridge、Strawberry Fields（纪念约翰·列侬）等经典景点。可以在公园内吃午餐。',
        highlights: ['Bethesda Fountain', 'Bow Bridge', 'Strawberry Fields', '免费'],
        tips: '从博物馆出来后向南步行，经Great Lawn到Bethesda Fountain，再到Bow Bridge。可以在公园内的小卖部买午餐。',
        image: 'https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?w=800',
        mapQuery: 'Central Park Bethesda Fountain',
        distanceToNext: {
          to: '第五大道',
          distance: '约1公里',
          driveTime: '约15分钟',
          method: '步行'
        }
      },
      {
        id: 'fifth-avenue',
        name: '第五大道',
        nameEn: 'Fifth Avenue',
        time: '15:00 - 16:00',
        description: '世界最著名的购物街之一，从中央公园向南延伸。汇集了Tiffany & Co.、Saks Fifth Avenue、Bergdorf Goodman等顶级奢侈品牌旗舰店。即使不购物，也值得欣赏沿街的经典建筑。',
        highlights: ['世界级购物街', '奢侈品旗舰店', '经典建筑', '免费'],
        tips: '从中央公园南端出来后沿第五大道向南步行，一路欣赏橱窗和建筑。',
        image: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800',
        mapQuery: 'Fifth Avenue New York',
        distanceToNext: {
          to: '圣巴特里克主教座堂',
          distance: '约500米',
          driveTime: '约7分钟',
          method: '步行'
        }
      },
      {
        id: 'st-patricks-cathedral',
        name: '圣巴特里克主教座堂',
        nameEn: "St. Patrick's Cathedral",
        time: '16:00 - 16:45',
        description: '美国最大的哥特式天主教堂，位于第五大道与50街交汇处，正对洛克菲勒中心。建于1878年，内部的彩色玻璃窗和拱形天花板非常壮观。免费参观。',
        highlights: ['哥特式建筑', '彩色玻璃窗', '免费参观', '第五大道地标'],
        tips: '免费入场，内部可以拍照但请保持安静。参观后步行几分钟即可到洛克菲勒中心。',
        image: 'https://images.unsplash.com/photo-1555109307-f7d9da25c244?w=800',
        mapQuery: "St. Patrick's Cathedral New York",
        distanceToNext: {
          to: 'Top of the Rock 观景台',
          distance: '约200米',
          driveTime: '约3分钟',
          method: '步行'
        }
      },
      {
        id: 'top-of-the-rock',
        name: 'Top of the Rock 观景台',
        nameEn: 'Top of the Rock Observation Deck',
        time: '17:30 - 19:30',
        description: '位于洛克菲勒中心，是纽约最佳观景台之一。可以同时看到帝国大厦和中央公园，视野开阔无遮挡。建议日落前1小时到达，可以同时欣赏日落和夜景。',
        highlights: ['帝国大厦景观', '中央公园全景', '日落+夜景', '无玻璃遮挡'],
        tips: '建议买日落时段的票（Sun & Stars Ticket），可以同时看日落和夜景。2月日落约5:30pm左右。',
        image: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800',
        mapQuery: 'Top of the Rock Observation Deck',
        ticket: {
          required: true,
          name: 'Top of the Rock观景台门票',
          url: 'https://www.topoftherocknyc.com/buy-tickets',
          price: '成人$43，Sun & Stars Ticket $65',
          status: 'pending'
        }
      }
    ],
    dinner: {
      location: '洛克菲勒中心附近',
      suggestion: '观景台下来后在洛克菲勒中心附近用晚餐，然后步行回酒店',
      address: '30 Rockefeller Plaza, New York, NY 10112',
      tips: '洛克菲勒中心附近有很多餐厅选择，离酒店也很近。'
    }
  },
  // Day 14: 纽约上午Hudson Yards + Amtrak去华盛顿
  {
    day: 14,
    date: '2026-02-11',
    weekday: '星期三',
    title: 'Day 14：前往华盛顿',
    subtitle: '酒店附近逛逛 | Penn Station午餐 | Amtrak火车 | 抵达华盛顿',
    city: 'New York City',
    mode: 'Amtrak火车',
    hotelDeparture: {
      hotelName: 'Hyatt Place Times Square (350 W 39th St)',
      destination: 'Moynihan Train Hall (Penn Station)',
      distance: '约500米',
      driveTime: '步行约7分钟'
    },
    attractions: [
      {
        id: 'morning-walk',
        name: '酒店附近逛逛',
        nameEn: 'Morning Walk Around Hotel',
        time: '08:30 - 09:30',
        description: '最后一个早上在纽约，在酒店附近随便逛逛。可以去时代广场周边走走，或者去附近的咖啡店吃个早餐。',
        highlights: ['时代广场周边', '随便逛逛', '早餐咖啡'],
        tips: '建议前一晚就打包好行李，早上出去前先寄存在前台。',
        image: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800',
        mapQuery: 'Times Square New York',
        distanceToNext: {
          to: '酒店拿行李',
          distance: '酒店附近',
          driveTime: '约5分钟',
          method: '步行'
        }
      },
      {
        id: 'hotel-checkout',
        name: '回酒店拿行李',
        nameEn: 'Hotel Checkout & Pick Up Luggage',
        time: '09:30 - 10:00',
        description: '回酒店拿行李，退房。行李提前打包好，拿完行李后直接步行去火车站。',
        highlights: ['拿行李', '退房', '前往火车站'],
        tips: '酒店到Penn Station只有7分钟步行，早点去火车站吃午饭。',
        image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800',
        mapQuery: 'Hyatt Place New York City Times Square 350 W 39th St',
        distanceToNext: {
          to: 'Moynihan Train Hall (Penn Station)',
          distance: '约500米',
          driveTime: '约7分钟',
          method: '步行'
        }
      },
      {
        id: 'penn-station-lunch',
        name: 'Penn Station 午餐',
        nameEn: 'Moynihan Train Hall Lunch',
        time: '10:30 - 11:15',
        description: '提前到达 Moynihan Train Hall，在火车站内吃午餐。Moynihan Train Hall是2021年新开放的壮观火车站大厅，玻璃天花板非常漂亮。内部有多家餐厅和咕啡店。',
        highlights: ['Moynihan Train Hall', '玻璃天花板', '多家餐厅', '提前到达'],
        tips: '❗ 火车12:40发车，建议11:15前到达火车站。在火车站内吃完午餐后直接上车。',
        image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/xlZWzsPBIpiGbILI.jpg',
        mapQuery: 'Moynihan Train Hall Penn Station New York',
        distanceToNext: {
          to: 'Amtrak火车',
          distance: '站内',
          driveTime: '步行到站台',
          method: '步行'
        }
      },
      {
        id: 'amtrak-to-dc',
        name: 'Amtrak火车前往华盛顿',
        nameEn: 'Amtrak to Washington DC',
        time: '12:40 - 16:25',
        description: '从Moynihan Train Hall at Penn Station乘坐Amtrak 171次Northeast Regional列车前往华盛顿Union Station。车程约3小时45分钟，沿途可欣赏美国东海岸风光。',
        highlights: ['Amtrak 171', 'Penn Station→Union Station', '3小时45分钟', '东海岸风光'],
        tips: '导航到：Moynihan Train Hall at Penn Station。建议提前15分钟到达站台。',
        image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=800',
        mapQuery: 'Moynihan Train Hall Penn Station New York'
      },
      {
        id: 'dc-arrival',
        name: '抑达华盛顿 Union Station',
        nameEn: 'Washington DC Union Station',
        time: '16:25',
        description: '抑达华盛顿Union Station，这是华盛顿的主要火车站，也是一座美丽的Beaux-Arts风格建筑。从这里前往酒店入住。',
        highlights: ['抑达华盛顿', 'Union Station', '入住酒店'],
        image: 'https://images.unsplash.com/photo-1501466044931-62695aada8e9?w=800',
        mapQuery: 'Washington DC Union Station',
        distanceToNext: {
          to: 'Hyatt Place White House',
          distance: '约3公里',
          driveTime: '约15分钟',
          method: '打车',
          taxiCost: '$10-15'
        }
      },
      {
        id: 'dc-hotel-checkin',
        name: '入住 Hyatt Place White House',
        nameEn: 'Hyatt Place Washington DC/White House',
        time: '17:00',
        description: '入住Hyatt Place Washington DC/White House酒店。酒店位于白宫附近，步行可辽National Mall各大景点。',
        highlights: ['入住酒店', '白宫附近', '交通便利'],
        image: 'https://images.unsplash.com/photo-1501466044931-62695aada8e9?w=800',
        mapQuery: 'Hyatt Place Washington DC White House 1522 K St NW'
      }
    ],
    dinner: {
      location: '华盛顿酒店附近',
      suggestion: '在酒店附近找餐厅用晚餐',
      address: '1522 K St NW, Washington, DC 20005',
      tips: '到达后先休息，晚上可以在附近随便吃点。'
    }
  },
  // Day 15: 华盛顿 - 白宫+National Mall纪念碑+博物馆
  {
    day: 15,
    date: '2026-02-12',
    weekday: '星期四',
    title: 'Day 15：白宫与国家广场',
    subtitle: '白宫 | 华盛顿纪念碑 | 二战纪念碑 | 林肯纪念堂 | 航空航天博物馆 | 自然历史博物馆',
    city: 'Washington DC',
    mode: '步行',
    hotelDeparture: {
      hotelName: 'Hyatt Place White House (1522 K St NW)',
      destination: '白宫 (Lafayette Square)',
      distance: '约500米',
      driveTime: '步行约7分钟'
    },
    attractions: [
      {
        id: 'white-house',
        name: '白宫',
        nameEn: 'The White House',
        time: '09:00 - 09:40',
        description: '美国总统官邸，世界最著名的建筑之一。从酒店步行仅约7分钟即可到达。在北侧的Lafayette Square拍白宫正面，然后绕到南侧的Ellipse拍白宫南面（带喷泉的经典角度）。',
        highlights: ['📸 经典拍照点', '总统官邸', 'Lafayette Square', '免费'],
        tips: '📸 拍照攻略：\n• 北侧Lafayette Square：拍白宫正门经典角度\n• 南侧Ellipse：拍白宫南草坪+喷泉\n• 早上光线最佳，人也较少',
        image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/CboBXqNzcbyWLNjb.jpg',
        mapQuery: 'The White House Lafayette Square',
        distanceToNext: {
          to: '华盛顿纪念碑',
          distance: '约1公里',
          driveTime: '约12分钟',
          method: '步行'
        }
      },
      {
        id: 'washington-monument',
        name: '华盛顿纪念碑',
        nameEn: 'Washington Monument',
        time: '09:55 - 10:25',
        description: '华盛顿的标志性建筑，高达169米的白色方尖碑，是National Mall的中心地标。周围是开阔的草地，可以从不同角度拍摄。',
        highlights: ['📸 经典拍照点', '华盛顿地标', '169米方尖碑', '免费'],
        tips: '📸 拍照攻略：\n• 从倒影池方向拍纪念碑倒影（经典角度）\n• 登顶需提前在nps.gov预约免费票，名额有限',
        image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/EFRamKHrVOODXYfR.jpg',
        mapQuery: 'Washington Monument',
        distanceToNext: {
          to: '二战纪念碑',
          distance: '约500米',
          driveTime: '约7分钟',
          method: '步行'
        }
      },
      {
        id: 'wwii-memorial',
        name: '二战纪念碑',
        nameEn: 'World War II Memorial',
        time: '10:35 - 10:55',
        description: '纪念第二次世界大战中服役的美国军人。开阔的广场上有形式优美的喷泉和56根花岗岩柱子，代表各州和领地。拍照效果很好。',
        highlights: ['📸 喷泉广场', '二战纪念', '56根石柱', '免费'],
        image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/woaoVloTzlwzgsKe.jpg',
        mapQuery: 'World War II Memorial Washington DC',
        distanceToNext: {
          to: '林肯纪念堂',
          distance: '约600米',
          driveTime: '约8分钟',
          method: '步行'
        }
      },
      {
        id: 'lincoln-memorial',
        name: '林肯纪念堂',
        nameEn: 'Lincoln Memorial',
        time: '11:05 - 11:45',
        description: '纪念美国第16任总统亚伯拉罕·林肯的宫殿式建筑。内部有巨大的林肯坐像，外部可以俶瞰整个National Mall和倒影池。马丁·路德·金就是在这里发表了著名的"I Have a Dream"演讲。这是华盛顿最经典的拍照点！',
        highlights: ['📸 最经典拍照点', '林肯坐像', '倒影池全景', 'I Have a Dream'],
        tips: '📸 拍照攻略：\n• 台阶上回望：倒影池+华盛顿纪念碑（超经典！）\n• 内部与林肯坐像合影\n• 地板上找"I Have a Dream"标记拍照',
        image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/fSuyepdmFLtHlLGr.jpg',
        mapQuery: 'Lincoln Memorial Washington DC',
        distanceToNext: {
          to: '国家航空航天博物馆',
          distance: '约3公里',
          driveTime: '步行约35分钟',
          method: '步行',
          taxiTime: '约8分钟',
          taxiCost: '$10-15'
        }
      },
      {
        id: 'lunch-day15',
        name: '午餐时光',
        nameEn: 'Lunch Break',
        time: '12:00 - 12:45',
        description: '从林肯纪念堂可以打车或步行到博物馆区域。推荐在航空航天博物馆内的餐厅用午餐，或者走到附近的Penn Quarter区域。',
        highlights: ['博物馆内餐厅', 'Penn Quarter区域', '多种选择'],
        image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/MqNXgSGceQyXZkxn.jpg',
        mapQuery: 'Penn Quarter Washington DC restaurants',
        distanceToNext: {
          to: '国家航空航天博物馆',
          distance: '约500米',
          driveTime: '约7分钟',
          method: '步行'
        }
      },
      {
        id: 'air-space-museum',
        name: '国家航空航天博物馆',
        nameEn: 'National Air and Space Museum',
        time: '13:10 - 15:00',
        description: '世界上最受欢迎的博物馆之一，展示了人类航空航天的历史。可以看到莱特兄弟的飞机、阿波罗11号指令舱、各种战斗机和火箭。全部免费！小朋友特别喜欢。',
        highlights: ['莱特兄弟飞机', '阿波罗11号', '战斗机', '🆓 免费'],
        tips: '免费入场，但需要在官网预约免费时间段门票：https://airandspace.si.edu',
        image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/mmaPSxggFywYEVUs.jpg',
        mapQuery: 'National Air and Space Museum Washington DC',
        ticket: {
          required: true,
          name: '航空航天博物馆免费预约',
          url: 'https://airandspace.si.edu/visit',
          price: '免费（需预约）',
          status: 'pending'
        },
        distanceToNext: {
          to: '国家自然历史博物馆',
          distance: '约500米',
          driveTime: '约7分钟',
          method: '步行'
        }
      },
      {
        id: 'natural-history-dc',
        name: '国家自然历史博物馆',
        nameEn: 'National Museum of Natural History',
        time: '15:10 - 17:00',
        description: '另一座世界级的免费博物馆！必看希望钻石(Hope Diamond)、恐龙化石展厅、海洋展厅。对家庭游客非常友好。',
        highlights: ['希望钻石', '恐龙化石', '海洋展厅', '🆓 免费'],
        tips: '免费入场，需要在官网预约免费时间段门票：https://naturalhistory.si.edu',
        image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/XoJzTKqGRnVLzpUJ.jpg',
        mapQuery: 'National Museum of Natural History Washington DC',
        ticket: {
          required: true,
          name: '自然历史博物馆免费预约',
          url: 'https://naturalhistory.si.edu/visit',
          price: '免费（需预约）',
          status: 'pending'
        },
        distanceToNext: {
          to: '酒店 Hyatt Place White House',
          distance: '约2公里',
          driveTime: '约25分钟',
          method: '步行',
          taxiTime: '约8分钟',
          taxiCost: '$8-12'
        }
      }
    ],
    dinner: {
      location: '酒店附近',
      suggestion: '回酒店休息后在K St附近用晚餐，或去 Penn Quarter 区域',
      address: 'K Street NW / Penn Quarter, Washington DC',
      tips: 'K街附近有很多餐厅选择，离酒店很近。'
    }
  },
  // Day 16: 华盛顿 - 国会山 + 潮汐湖 + 拍照为主
  {
    day: 16,
    date: '2026-02-13',
    weekday: '星期五',
    title: 'Day 16：国会山与潮汐湖',
    subtitle: '杰弗逊纪念堂 | MLK纪念碑 | 最高法院 | 国会图书馆 | 国会大厦Tour 2:00PM',
    city: 'Washington DC',
    mode: '步行 + 地铁',
    hotelDeparture: {
      hotelName: 'Hyatt Place White House (1522 K St NW)',
      destination: '杰弗逊纪念堂',
      distance: '约3公里',
      driveTime: '打车约10分钟 ($10-15) 或 步行约35分钟'
    },
    attractions: [
      {
        id: 'jefferson-memorial',
        name: '杰弗逊纪念堂',
        nameEn: 'Thomas Jefferson Memorial',
        time: '09:00 - 09:40',
        description: '纪念美国第三任总统托马斯·杰弗逊的新古典主义建筑。位于潮汐湖畔，建筑倒影在湖面上非常美丽。内部有巨大的杰弗逊铜像。早上人少，拍照效果最佳。',
        highlights: ['📸 湖面倒影', '新古典建筑', '潮汐湖', '免费'],
        tips: '📸 拍照攻略：\n• 从潮汐湖对岸拍建筑倒影（经典角度）\n• 内部与杰弗逊铜像合影\n• 早上光线柔和，人少，拍照最佳时间',
        image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/RowWRigryNAWYhVj.jpg',
        mapQuery: 'Thomas Jefferson Memorial Washington DC',
        distanceToNext: {
          to: '马丁·路德·金纪念碑',
          distance: '约800米',
          driveTime: '约10分钟',
          method: '步行'
        }
      },
      {
        id: 'mlk-memorial',
        name: '马丁·路德·金纪念碑',
        nameEn: 'Martin Luther King Jr. Memorial',
        time: '09:50 - 10:20',
        description: '纪念民权运动领袖马丁·路德·金博士。巨大的石雕像从岩石中浮现，非常震撼。周围刻有他的著名语录。位于潮汐湖边，与杰弗逊纪念堂顺路。',
        highlights: ['📸 石雕像', '民权运动', '潮汐湖边', '免费'],
        image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/DWuZeHPsammMiQKx.jpg',
        mapQuery: 'Martin Luther King Jr Memorial Washington DC',
        distanceToNext: {
          to: '美国最高法院',
          distance: '约4.5公里',
          driveTime: '约15分钟',
          method: '打车',
          taxiTime: '约15分钟',
          taxiCost: '$12-18'
        }
      },
      {
        id: 'supreme-court',
        name: '美国最高法院',
        nameEn: 'Supreme Court of the United States',
        time: '10:40 - 11:10',
        description: '美国最高司法机构所在地，壮观的新古典主义建筑正面刻有"EQUAL JUSTICE UNDER LAW"（法律面前人人平等）。16根科林斯式大理石柱非常壮观，是华盛顿最具标志性的建筑之一。与国会大厦和国会图书馆组成Capitol Hill三大建筑。',
        highlights: ['📸 科林斯柱廊', 'EQUAL JUSTICE UNDER LAW', '新古典建筑', '免费'],
        tips: '📸 拍照攻略：\n• 正面台阶：拍摄16根大理石柱和"EQUAL JUSTICE UNDER LAW"铭文\n• 可以免费进入一楼大厅参观\n• 周一至周五 9:30-16:30 开放\n• 不开庭时可以参观法庭内部',
        image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/pJTSzCeUxbBGPHMy.jpg',
        mapQuery: 'Supreme Court of the United States Washington DC',
        distanceToNext: {
          to: '国会图书馆',
          distance: '约200米',
          driveTime: '约3分钟',
          method: '步行'
        }
      },
      {
        id: 'library-of-congress',
        name: '国会图书馆',
        nameEn: 'Library of Congress',
        time: '11:15 - 12:00',
        description: '世界上最大的图书馆！Thomas Jefferson Building的大厅装饰极其精美，天花板壁画、大理石柱子和金色装饰令人叹为观止。是华盛顿最被低估的拍照点之一！',
        highlights: ['📸 精美内饰', '世界最大图书馆', 'Jefferson Building', '免费'],
        tips: '免费入场，无需预约。大厅内可以拍照，但不能用闪光灯。',
        image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/IszAMilVhvUERzjh.webp',
        mapQuery: 'Library of Congress Thomas Jefferson Building',
        distanceToNext: {
          to: '国会大厦外拍照',
          distance: '约300米',
          driveTime: '约4分钟',
          method: '步行'
        }
      },
      {
        id: 'capitol-photo',
        name: '国会大厦外拍照',
        nameEn: 'Capitol Building Photo Stop',
        time: '12:05 - 12:25',
        description: '在国会大厦西侧草坪拍照，这是拍国会正面的经典角度。拍完照后去附近吃午餐。',
        highlights: ['📸 经典拍照点', '西侧草坪', '国会圆顶'],
        tips: '📸 拍照攻略：\n• 西侧草坪：拍国会正面经典角度\n• 倒影池方向拍国会+倒影',
        image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/apzcJOgdlSRwCSwH.jpg',
        mapQuery: 'United States Capitol West Front',
        distanceToNext: {
          to: '午餐',
          distance: '约500米',
          driveTime: '约7分钟',
          method: '步行'
        }
      },
      {
        id: 'lunch-day16',
        name: '午餐时光',
        nameEn: 'Lunch Break',
        time: '12:35 - 13:20',
        description: 'Capitol Hill附近有很多不错的午餐选择！推荐国会大厦访客中心餐厅（方便且品质不错），或步行到Pennsylvania Ave SE的餐厅。',
        highlights: ['国会访客中心餐厅', 'AMBAR巴尔干菜', 'Ted\'s Bulletin', 'Market Lunch'],
        tips: '🍽️ 午餐推荐：\n• 国会访客中心餐厅：在国会大厦内，无需重新过安检，汉堡、沙拉、三明治等\n• AMBAR (523 8th St SE)：巴尔干半岛菜，评分超高\n• Ted\'s Bulletin (505 8th St SE)：美式早午餐，自制Pop-Tarts\n• Market Lunch (Eastern Market内)：经典蓝莓松饼',
        image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800',
        mapQuery: 'Capitol Hill restaurants Washington DC',
        distanceToNext: {
          to: '国会大厦Tour入口',
          distance: '约500米',
          driveTime: '约7分钟',
          method: '步行'
        }
      },
      {
        id: 'us-capitol-tour',
        name: '国会大厦 Tour',
        nameEn: 'United States Capitol Tour',
        time: '13:30 - 15:00',
        description: '✅ 建议预约下午2:00 PM的Tour！提前30分钟到达过安检。壮丽的圆顶建筑是华盛顿最具辨识度的地标，圆顶大厅的壁画和雕塑非常壮观。Tour约45分钟。',
        highlights: ['✅ 建议预约 2:00 PM', '国会圆顶', '4张票', '免费参观'],
        tips: '✅ 预约信息：\n• 原确认号：202601310244466\n• 建议改为 2:00 PM 的Tour（更顺路）\n• 4张票\n• 建议 1:30 PM 到达过安检\n• 安检严格，不能带食物和饮料\n• 内部圆顶大厅仰拍稹顶壁画很壮观',
        image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/apzcJOgdlSRwCSwH.jpg',
        mapQuery: 'United States Capitol Visitor Center',
        ticket: {
          required: true,
          name: '国会大厦Tour预约',
          url: 'https://www.visitthecapitol.gov',
          price: '免费（已改约 2:00PM）',
          status: 'done'
        },
        distanceToNext: {
          to: '酒店 Hyatt Place White House',
          distance: '约3公里',
          driveTime: '地铁约15分钟',
          method: '地铁',
          subwayLine: '红线 Union Station→McPherson Sq',
          taxiTime: '约10分钟',
          taxiCost: '$10-15'
        }
      }
    ],
    dinner: {
      location: '华盛顿市中心',
      suggestion: '可以去 Georgetown 区域用晚餐，有很多特色餐厅',
      address: 'Georgetown, Washington DC',
      tips: 'Georgetown是华盛顿最古老的街区，有很多精品店和餐厅。最后一晚晚餐，可以吃好一点！'
    }
  },
  // Day 18: 华盛顿返程 - 飞凤凰城
  {
    day: 17,
    date: '2026-02-14',
    weekday: '星期六',
    title: 'Day 17：返程回家',
    subtitle: '国家美术馆 | DCA→PHX | 结束旅程',
    city: 'Washington DC',
    mode: '飞机',
    hotelDeparture: {
      hotelName: 'Hyatt Place White House (1522 K St NW)',
      destination: '国家美术馆西馆',
      distance: '约1.5公里',
      driveTime: '步行约20分钟 或 打车约7分钟 ($8-10)'
    },
    flights: [
      {
        id: 'return-flight-dc',
        airline: 'American Airlines',
        flightNumber: 'AA 2831',
        departure: {
          airport: '华盛顿里根国家机场',
          code: 'DCA',
          time: '16:59',
          date: '2026-02-14'
        },
        arrival: {
          airport: '凤凰城天港国际机场',
          code: 'PHX',
          time: '20:17',
          date: '2026-02-14'
        },
        duration: '5小时18分钟',
        passenger: '全家',
        confirmationCode: '',
        note: '直飞，Basic Economy'
      }
    ],
    attractions: [
      {
        id: 'nga-west',
        name: '国家美术馆 · 西馆',
        nameEn: 'National Gallery of Art - West Building',
        time: '10:00 - 11:15',
        description: '世界级的免费美术馆！西馆收藏了13世纪到19世纪的欧洲经典绘画和雕塑，包括全美唯一的达芬奇画作、伦勃朗、莫奈、维米尔等大师作品。建筑本身也非常壮观，大理石圆形大厅配上喷泉和花卉非常美。',
        highlights: ['🎨 达芬奇真迹', '印象派大师', '免费入场', '世界级藏品'],
        tips: '🎨 2小时精华路线（西馆部分）：\n\n① Gallery 6：达芬奇《Ginevra de\' Benci》——全美唯一的达芬奇画作，必看！\n② Gallery 17：贝利尼&提香《众神的盛宴》\n③ Gallery 39：扬·凡·艾克《天使报喜》——细节精美到难以置信\n④ Gallery 80s区域：印象派大师们——莫奈、雷诺阿、德加\n⑤ Gallery 86：玛丽·卡萨特《拿向日葵的女人》\n\n💡 小贴士：入口处可以拿免费地图，按地图上的Gallery编号走很方便',
        image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/ccHqtusNkTytaioQ.jpg',
        mapQuery: 'National Gallery of Art West Building Washington DC',
        distanceToNext: {
          to: '国家美术馆·东馆',
          distance: '地下通道直达',
          driveTime: '约5分钟',
          method: '步行'
        }
      },
      {
        id: 'nga-east',
        name: '国家美术馆 · 东馆',
        nameEn: 'National Gallery of Art - East Building',
        time: '11:20 - 12:00',
        description: '贝聿铭设计的现代主义建筑杰作！东馆收藏了20世纪至当代的现代艺术，包括毕加索、波洛克、奥基弦等大师作品。中庭悬挂的巨型卡尔德动态雕塑是标志性景观。',
        highlights: ['贝聿铭设计', '毕加索', '卡尔德雕塑', '现代艺术'],
        tips: '🎨 东馆精华路线：\n\n① Atrium中庭：卡尔德巨型动态雕塑——整个东馆的标志，必拍！\n② Gallery 217：毕加索《杂技艺人家族》——1905年玫瑰时期代表作\n③ Gallery 407：波洛克《Lavender Mist》——抽象表现主义经典\n④ Gallery 415：奥基弦《Shell No. 1》\n\n💡 东馆建筑本身就是艺术品，三角形空间和光影效果很适合拍照',
        image: 'https://images.unsplash.com/photo-1605034313761-73ea4a0cfbf3?w=800',
        mapQuery: 'National Gallery of Art East Building Washington DC',
        distanceToNext: {
          to: '酒店取行李',
          distance: '约2公里',
          driveTime: '约10分钟',
          method: '打车',
          taxiTime: '约10分钟',
          taxiCost: '$8-12'
        }
      },
      {
        id: 'hotel-checkout-dc',
        name: '酒店取行李',
        nameEn: 'Hotel Checkout & Luggage Pickup',
        time: '12:15 - 12:30',
        description: '回酒店取寄存的行李，然后前往机场。',
        highlights: ['取行李', '前往机场'],
        tips: '✅ 早上退房前将行李寄存在酒店前台，参观完美术馆后回来取。',
        image: 'https://images.unsplash.com/photo-1501466044931-62695aada8e9?w=800',
        mapQuery: 'Hyatt Place Washington DC White House',
        distanceToNext: {
          to: '里根国家机场',
          distance: '约8公里',
          driveTime: '约20分钟',
          method: '打车',
          taxiTime: '约20分钟',
          taxiCost: '$15-25'
        }
      },
      {
        id: 'dca-airport',
        name: '华盛顿里根国家机场',
        nameEn: 'Ronald Reagan Washington National Airport',
        time: '下午 16:59',
        description: '乘坐American Airlines AA 2831航班从华盛顿DCA直飞凤凰城PHX。飞行时间约5小时18分钟，晚上8:17抵达凤凰城。',
        highlights: ['AA 2831', 'DCA→PHX', '直飞5小时18分'],
        tips: '建议提前2小时到达机场办理登机手续。',
        image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800',
        mapQuery: 'Ronald Reagan Washington National Airport'
      },
      {
        id: 'phx-arrival',
        name: '抵达凤凰城',
        nameEn: 'Arrive at Phoenix',
        time: '晚上 20:17',
        description: '抵达凤凰城天港国际机场，东海岸旅程结束！回家休息，接下来在凤凰城家里休息到2/22返程。',
        highlights: ['抵达凤凰城', '东海岸旅程结束'],
        image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800',
        mapQuery: 'Phoenix Sky Harbor International Airport'
      }
    ]
  },
  // Day 25: 返程 - 凤凰城飞洛杉矶
  {
    day: 25,
    date: '2026-02-22',
    weekday: '星期日',
    title: 'Day 25：返程回洛杉矶',
    subtitle: '凤凰城 → 洛杉矶 | 结束美好旅程',
    city: 'Phoenix',
    mode: '飞机',
    flights: [
      {
        id: 'return-flight-parents',
        airline: 'Southwest Airlines',
        flightNumber: '3164',
        departure: {
          airport: '凤凰城天港国际机场',
          code: 'PHX',
          time: '10:20',
          date: '2026-02-22'
        },
        arrival: {
          airport: '洛杉矶国际机场',
          code: 'LAX',
          time: '10:55',
          date: '2026-02-22'
        },
        duration: '1小时35分钟',
        passenger: 'Huimei Li, Junyan Zhao',
        confirmationCode: '待确认',
        note: '2人合订，总费用$316.80'
      },
      {
        id: 'return-flight-zhenfa',
        airline: 'Southwest Airlines',
        flightNumber: '3164',
        departure: {
          airport: '凤凰城天港国际机场',
          code: 'PHX',
          time: '10:20',
          date: '2026-02-22'
        },
        arrival: {
          airport: '洛杉矶国际机场',
          code: 'LAX',
          time: '10:55',
          date: '2026-02-22'
        },
        duration: '1小时35分钟',
        passenger: 'Zhenfa Zhao',
        confirmationCode: 'A4KL2P',
        note: '单独订票'
      }
    ],
    attractions: [
      {
        id: 'phx-airport-final',
        name: '凤凰城天港国际机场',
        nameEn: 'Phoenix Sky Harbor International Airport',
        time: '上午 10:20',
        description: '从凤凰城乘坐Southwest Airlines 3164航班返回洛杉矶。飞行时间约1小时35分钟，直飞。',
        highlights: ['Southwest 3164', 'PHX→LAX', '直飞1小时35分'],
        tips: '建议提前2小时到达机场办理登机手续',
        image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800',
        mapQuery: 'Phoenix Sky Harbor International Airport'
      },
      {
        id: 'lax-arrival-final',
        name: '抵达洛杉矶',
        nameEn: 'Arrive at Los Angeles',
        time: '上午 10:55',
        description: '抵达洛杉矶国际机场，结束美好的美国家庭之旅！感谢这段难忘的时光，期待下次再见！',
        highlights: ['旅程结束', '美好回忆', '期待下次'],
        image: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800',
        mapQuery: 'Los Angeles International Airport'
      }
    ]
  }
];

// 城市信息
export const cities = [
  {
    id: 'la',
    name: '洛杉矶',
    nameEn: 'Los Angeles',
    dates: '1/29 - 2/2',
    days: 4,
    color: '#FFB800',
    heroImage: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/KuskrhnDrWZxMPfE.jpg',
    description: '天使之城，好莱坞的故乡，阳光海滩与文化艺术的完美融合'
  },
  {
    id: 'sd',
    name: '圣地亚哥',
    nameEn: 'San Diego',
    dates: '2/2 - 2/4',
    days: 3,
    color: '#0077B6',
    heroImage: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/vQzrlNMczdgokoHM.jpg',
    description: '美国最宜居城市，世界级动物园与壮美海岸线'
  },
  {
    id: 'vegas',
    name: '拉斯维加斯',
    nameEn: 'Las Vegas',
    dates: '2/4 - 2/7',
    days: 4,
    color: '#E85D04',
    heroImage: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/uIxgsSuOPOnejuZb.jpg',
    description: '世界娱乐之都，沙漠中的不夜城'
  },
  {
    id: 'nyc',
    name: '纽约',
    nameEn: 'New York City',
    dates: '2/7 - 2/11',
    days: 4,
    color: '#1E40AF',
    heroImage: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=1200',
    description: '世界之都，自由女神与华尔街的金融中心'
  },
  {
    id: 'dc',
    name: '华盛顿',
    nameEn: 'Washington DC',
    dates: '2/11 - 2/14',
    days: 3,
    color: '#DC2626',
    heroImage: 'https://images.unsplash.com/photo-1501466044931-62695aada8e9?w=1200',
    description: '美国首都，白宫与国会山的政治中心'
  }
];

// 生成待办事项汇总
export function generateTodoList(): TodoItem[] {
  const todos: TodoItem[] = [];
  
  tripSchedule.forEach(day => {
    day.attractions.forEach(attraction => {
      if (attraction.ticket?.required) {
        todos.push({
          id: `${day.day}-${attraction.id}`,
          day: day.day,
          type: 'ticket',
          name: attraction.ticket.name,
          location: attraction.name,
          url: attraction.ticket.url,
          price: attraction.ticket.price,
          status: attraction.ticket.status
        });
      }
    });
    
    if (day.options) {
      day.options.forEach(option => {
        if (option.ticket?.required) {
          todos.push({
            id: `${day.day}-${option.id}`,
            day: day.day,
            type: 'ticket',
            name: option.ticket.name,
            location: option.location,
            url: option.ticket.url,
            price: option.ticket.price,
            status: option.ticket.status
          });
        }
      });
    }
  });
  
  return todos;
}

// 费用信息
export interface ExpenseItem {
  id: string;
  category: 'flight' | 'hotel' | 'ticket' | 'car' | 'food' | 'other';
  name: string;
  description: string;
  date: string;
  amount: number;
  currency: string;
  paidBy?: string;
  passengers?: string[];
  confirmationCode?: string;
  note?: string;
}

export const expenses: ExpenseItem[] = [
  // ===== 机票费用 =====
  {
    id: 'flight-parents-arrival',
    category: 'flight',
    name: '父母+妹妹 厦门→洛杉矶',
    description: 'MF 829 厦门→洛杉矶（3人）',
    date: '2026-01-29',
    amount: 3161,
    currency: 'USD',
    passengers: ['Huimei Li', 'Junyan Zhao', 'Zhenfa Zhao'],
    note: '3人合计'
  },
  {
    id: 'flight-las-to-jfk',
    category: 'flight',
    name: '拉斯维加斯→纽约',
    description: 'AA 1069 LAS→JFK（3人）',
    date: '2026-02-07',
    amount: 325,
    currency: 'USD',
    passengers: ['Huimei Li', 'Junyan Zhao', 'Zhenfa Zhao'],
    note: '3人合计'
  },
  {
    id: 'flight-dc-to-phx',
    category: 'flight',
    name: '华盛顿→凤凰城',
    description: 'AA 2831 DCA→PHX（3人）',
    date: '2026-02-14',
    amount: 355,
    currency: 'USD',
    passengers: ['Huimei Li', 'Junyan Zhao', 'Zhenfa Zhao'],
    note: '3人合计，Basic Economy，4:59pm起飞'
  },
  {
    id: 'flight-return-phx-lax',
    category: 'flight',
    name: '返程 PHX→LAX',
    description: 'SW 3164 PHX→LAX（3人）',
    date: '2026-02-22',
    amount: 466.80,
    currency: 'USD',
    passengers: ['Huimei Li', 'Junyan Zhao', 'Zhenfa Zhao'],
    confirmationCode: 'A4KL2P',
    note: '父母+妹妹$316.80 + Zhenfa$150，10:20am起飞'
  },
  // ===== 住宿费用 =====
  {
    id: 'hotel-la',
    category: 'hotel',
    name: 'Hyatt Place Glendale',
    description: '洛杉矶住宿 1/29-2/2（4晚 × $198）',
    date: '2026-01-29',
    amount: 792,
    currency: 'USD',
    note: '每晚$198'
  },
  {
    id: 'hotel-sd',
    category: 'hotel',
    name: 'Hyatt House San Diego',
    description: '圣地亚哥住宿 2/2-2/5（3晚 × $180）',
    date: '2026-02-02',
    amount: 540,
    currency: 'USD',
    note: '每晚$180'
  },
  {
    id: 'hotel-vegas-mgm',
    category: 'hotel',
    name: 'MGM Grand Hotel & Casino',
    description: '拉斯维加斯住宿 2/4-2/6（2晚）',
    date: '2026-02-04',
    amount: 425,
    currency: 'USD',
    confirmationCode: '883JL3SL2C-',
    note: ''
  },
  {
    id: 'hotel-vegas-mandalay',
    category: 'hotel',
    name: 'Mandalay Bay Resort',
    description: '拉斯维加斯住宿 2/5-2/7（2晚）',
    date: '2026-02-05',
    amount: 350,
    currency: 'USD',
    confirmationCode: '3OG0VP8134-',
    note: ''
  },
  {
    id: 'hotel-nyc',
    category: 'hotel',
    name: 'Hyatt Place Times Square',
    description: '纽约住宿 2/7-2/11（4晚）',
    date: '2026-02-07',
    amount: 810,
    currency: 'USD',
    note: ''
  },
  {
    id: 'hotel-dc',
    category: 'hotel',
    name: 'Hyatt Place Washington DC/White House',
    description: '华盛顿住宿 2/11-2/14（3晚 × $200）',
    date: '2026-02-11',
    amount: 600,
    currency: 'USD',
    note: '每晚$200'
  },
  // ===== 租车/交通 =====
  {
    id: 'car-rental',
    category: 'car',
    name: '加州段租车',
    description: '洛杉矶-圣地亚哥-拉斯维加斯',
    date: '2026-01-29',
    amount: 1081,
    currency: 'USD',
    note: '加州全程租车'
  },
  {
    id: 'car-parking',
    category: 'car',
    name: '停车费',
    description: '加州段停车费用合计',
    date: '2026-01-29',
    amount: 200,
    currency: 'USD',
    note: '酒店+景点停车'
  },
  {
    id: 'car-gas',
    category: 'car',
    name: '加油费',
    description: '加州段加油费用合计',
    date: '2026-01-29',
    amount: 150,
    currency: 'USD',
    note: ''
  },
  {
    id: 'uber-giftcard',
    category: 'car',
    name: 'Uber打车（育君部分）',
    description: 'Uber礼品卡（育君支付，不含爸妈自付部分）',
    date: '2026-01-29',
    amount: 300,
    currency: 'USD',
    note: 'Uber礼品卡，爸妈在纽约/华盛顿另有自付打车费'
  },
  {
    id: 'amtrak-nyc-dc',
    category: 'car',
    name: 'Amtrak火车票',
    description: '纽约→华盛顿（4人）',
    date: '2026-02-11',
    amount: 165,
    currency: 'USD',
    passengers: ['全家'],
    note: '4人合计'
  },
  // ===== 门票 =====
  {
    id: 'ticket-disney',
    category: 'ticket',
    name: '迪士尼双园票',
    description: 'Park Hopper（2人）',
    date: '2026-02-03',
    amount: 500,
    currency: 'USD',
    note: '你+妹妹'
  },
  {
    id: 'ticket-zoo',
    category: 'ticket',
    name: '圣地亚哥动物园',
    description: '全家4人',
    date: '2026-02-05',
    amount: 312,
    currency: 'USD',
    note: ''
  },
  {
    id: 'ticket-midway',
    category: 'ticket',
    name: '中途岛号航母',
    description: '全家4人',
    date: '2026-02-05',
    amount: 82,
    currency: 'USD',
    note: ''
  },
  {
    id: 'ticket-topgolf',
    category: 'ticket',
    name: 'TopGolf',
    description: '拉斯维加斯',
    date: '2026-02-06',
    amount: 75,
    currency: 'USD',
    note: ''
  },

  {
    id: 'ticket-amnh',
    category: 'ticket',
    name: '纽约自然历史博物馆',
    description: '3人（不含育君）',
    date: '2026-02-09',
    amount: 60,
    currency: 'USD',
    note: '育君不在纽约'
  },
  {
    id: 'ticket-un',
    category: 'ticket',
    name: '联合国导览团',
    description: '3人（不含育君）',
    date: '2026-02-09',
    amount: 104,
    currency: 'USD',
    note: '4:30 PM Tour，育君不在纽约'
  },
  {
    id: 'ticket-met',
    category: 'ticket',
    name: '大都会博物馆',
    description: '3人（不含育君）',
    date: '2026-02-10',
    amount: 77,
    currency: 'USD',
    note: '育君不在纽约'
  },
  {
    id: 'ticket-angels-flight',
    category: 'ticket',
    name: '天使铁路',
    description: '全家4人往返',
    date: '2026-02-02',
    amount: 8,
    currency: 'USD',
    note: '$1/次 × 4人 × 2次'
  },
  // ===== 餐饮（加州段） =====
  {
    id: 'food-california',
    category: 'food',
    name: '加州段餐饮',
    description: '洛杉矶/圣地亚哥/拉斯维加斯（9天 × $150）',
    date: '2026-01-29',
    amount: 1350,
    currency: 'USD',
    note: '1/29-2/7 平均每天$150'
  },
  // ===== 其他 =====
  {
    id: 'other-sim-cards',
    category: 'other',
    name: '手机卡',
    description: '2张SIM卡',
    date: '2026-01-29',
    amount: 40,
    currency: 'USD',
    note: ''
  },
  {
    id: 'other-travel-insurance',
    category: 'other',
    name: '旅行医疗保险',
    description: '全程旅行医疗保险',
    date: '2026-01-29',
    amount: 310,
    currency: 'USD',
    note: ''
  },
  // ===== Yujun个人机票 =====
  {
    id: 'flight-yujun-personal',
    category: 'flight',
    name: 'Yujun 凤凰城↔LA/拉斯维加斯',
    description: '个人往返机票',
    date: '2026-01-29',
    amount: 200,
    currency: 'USD',
    passengers: ['Yujun Zhao'],
    note: '凤凰城和LA/拉斯维加斯往返'
  }
];

// ===== 爸妈自付费用（不计入我们的总计，但计入旅行总开销） =====
export const parentsExpenses: ExpenseItem[] = [
  {
    id: 'parents-food-nyc',
    category: 'food',
    name: '纽约餐饮',
    description: '2/7-2/11（4天 × $150）',
    date: '2026-02-07',
    amount: 600,
    currency: 'USD',
    paidBy: '爸妈',
    note: '平均每天$150'
  },
  {
    id: 'parents-food-dc',
    category: 'food',
    name: '华盛顿餐饮',
    description: '2/11-2/14（3天 × $150）',
    date: '2026-02-11',
    amount: 450,
    currency: 'USD',
    paidBy: '爸妈',
    note: '平均每天$150'
  },
  {
    id: 'parents-uber-nyc',
    category: 'car',
    name: '纽约Uber打车',
    description: '纽约4天打车',
    date: '2026-02-07',
    amount: 200,
    currency: 'USD',
    paidBy: '爸妈',
    note: '估计$50/天'
  },
  {
    id: 'parents-uber-dc',
    category: 'car',
    name: '华盛顿Uber打车',
    description: '华盛顿3天打车',
    date: '2026-02-11',
    amount: 120,
    currency: 'USD',
    paidBy: '爸妈',
    note: '估计$40/天'
  },
  {
    id: 'parents-top-of-rock',
    category: 'ticket',
    name: 'Top of the Rock观景台',
    description: '3人（不含育君）',
    date: '2026-02-10',
    amount: 135,
    currency: 'USD',
    paidBy: '爸妈',
    note: '估计$45/人 × 3人'
  },
  {
    id: 'parents-o-show',
    category: 'ticket',
    name: 'O秀（太阳马戏团）',
    description: '爸妈去看的',
    date: '2026-02-06',
    amount: 200,
    currency: 'USD',
    paidBy: '爸妈',
    note: '拉斯维加斯'
  }
];

// 计算爸妈费用汇总
export function calculateParentsExpenseSummary() {
  const summary = {
    flight: 0,
    hotel: 0,
    ticket: 0,
    car: 0,
    food: 0,
    other: 0,
    total: 0
  };
  
  parentsExpenses.forEach(expense => {
    summary[expense.category] += expense.amount;
    summary.total += expense.amount;
  });
  
  return summary;
}

// 返程航班信息
export const returnFlights: FlightInfo[] = [
  {
    id: 'return-flight-parents',
    airline: 'Southwest Airlines',
    flightNumber: '3164',
    departure: {
      airport: '凤凰城天港国际机场',
      code: 'PHX',
      time: '10:20',
      date: '2026-02-22'
    },
    arrival: {
      airport: '洛杉矶国际机场',
      code: 'LAX',
      time: '10:55',
      date: '2026-02-22'
    },
    duration: '1小时35分钟',
    passenger: 'Huimei Li, Junyan Zhao',
    confirmationCode: '待确认',
    note: '2人合订，总费用$316.80'
  },
  {
    id: 'return-flight-zhenfa',
    airline: 'Southwest Airlines',
    flightNumber: '3164',
    departure: {
      airport: '凤凰城天港国际机场',
      code: 'PHX',
      time: '10:20',
      date: '2026-02-22'
    },
    arrival: {
      airport: '洛杉矶国际机场',
      code: 'LAX',
      time: '10:55',
      date: '2026-02-22'
    },
    duration: '1小时35分钟',
    passenger: 'Zhenfa Zhao',
    confirmationCode: 'A4KL2P',
    note: '单独订票'
  }
];

// 计算我们的费用汇总
export function calculateExpenseSummary() {
  const summary = {
    flight: 0,
    hotel: 0,
    ticket: 0,
    car: 0,
    food: 0,
    other: 0,
    total: 0
  };
  
  expenses.forEach(expense => {
    summary[expense.category] += expense.amount;
    summary.total += expense.amount;
  });
  
  return summary;
}

// 计算旅行总开销（我们 + 爸妈）
export function calculateTotalTripCost() {
  const ours = calculateExpenseSummary();
  const parents = calculateParentsExpenseSummary();
  return {
    ours,
    parents,
    grandTotal: ours.total + parents.total
  };
}
