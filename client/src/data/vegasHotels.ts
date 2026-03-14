// 拉斯维加斯特色酒店指南数据

export interface AttractionImage {
  url: string;
  caption: string;
}

export interface VegasHotel {
  id: string;
  name: string;
  nameEn: string;
  theme: string;
  location: string;
  address: string;
  highlights: string[];
  description: string;
  mustSee: {
    name: string;
    description: string;
    price?: string;
    images: string[];
  }[];
  freeAttractions: string[];
  images: string[];
  mapQuery: string;
  rating: number;
  walkingFromMGM: {
    distance: string;
    time: string;
  };
  chineseNewYear?: {
    hasEvent: boolean;
    description: string;
    highlights: string[];
  };
}

export const vegasHotels: VegasHotel[] = [
  {
    id: 'bellagio',
    name: '百乐宫',
    nameEn: 'Bellagio',
    theme: '意大利科莫湖风情',
    location: 'Strip中段',
    address: '3600 S Las Vegas Blvd',
    highlights: ['世界闻名的音乐喷泉', '室内植物园', '精美玻璃花天花板'],
    description: '百乐宫是拉斯维加斯最优雅的酒店之一，以意大利科莫湖为灵感设计。酒店前方的音乐喷泉表演是拉斯维加斯最著名的免费景点，每15-30分钟表演一次，配合音乐和灯光，水柱最高可达140米。酒店大堂天花板由2000朵手工吹制的玻璃花组成，出自著名艺术家Dale Chihuly之手。室内植物园会根据季节变换主题，精心布置的花卉和植物造景令人叹为观止。',
    mustSee: [
      {
        name: '音乐喷泉表演',
        description: '世界最著名的喷泉表演，配合音乐和灯光，水柱最高达140米',
        price: '免费',
        images: [
          'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/cJdKkaGsQYwmDYCd.jpg',
          'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/GqWaABbVCXQtwKGD.jpg'
        ]
      },
      {
        name: 'Conservatory植物园',
        description: '14,000平方英尺的室内植物园，每季更换主题，2026春节为马年主题',
        price: '免费',
        images: [
          'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/nLQYCCqzuQfkxMPt.jpg',
          'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/CGSgnWpMQGrbNrnw.jpg',
          'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/TQUmJmzRHwsIHqFm.jpg',
          'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/bcbsNVtdGsrYaBlm.jpg',
          'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/RdQBbneNMLhYCCNN.jpg'
        ]
      },
      {
        name: '大堂玻璃花天花板',
        description: '由艺术家Dale Chihuly创作的2000朵手工吹制玻璃花',
        price: '免费',
        images: [
          'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/qHGelzAgLlnBLDbI.jpg'
        ]
      }
    ],
    freeAttractions: ['音乐喷泉：每天下午3点至午夜，每15-30分钟一场', '植物园：24小时开放，每季更换主题'],
    images: [
      'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/cJdKkaGsQYwmDYCd.jpg',
      'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/qHGelzAgLlnBLDbI.jpg',
      'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/pbYzJWMViUTEfhHB.jpg'
    ],
    mapQuery: 'Bellagio Hotel Las Vegas',
    rating: 5,
    walkingFromMGM: {
      distance: '1.2公里',
      time: '约15分钟'
    },
    chineseNewYear: {
      hasEvent: true,
      description: '百乐宫植物园2026春节特别展览"火马年"，展出至2月28日',
      highlights: ['金马雕塑', '传统红灯笼', '中国风花卉装置', '舞狮舞龙元素']
    }
  },
  {
    id: 'venetian',
    name: '威尼斯人',
    nameEn: 'The Venetian',
    theme: '意大利威尼斯水城',
    location: 'Strip中北段',
    address: '3355 S Las Vegas Blvd',
    highlights: ['室内运河贡多拉', '圣马可广场复制', '文艺复兴风格天花板'],
    description: '威尼斯人酒店是拉斯维加斯最大的酒店之一，完美复制了意大利威尼斯的浪漫风情。酒店内有一条人工运河，游客可以乘坐贡多拉船，由船夫唱着意大利歌曲划船游览。室内天花板绘有精美的文艺复兴风格壁画，仿佛置身于真正的威尼斯。大运河购物中心（Grand Canal Shoppes）是拉斯维加斯最受欢迎的购物目的地之一。',
    mustSee: [
      {
        name: '贡多拉船',
        description: '乘坐威尼斯风格的贡多拉，船夫会唱意大利歌曲',
        price: '约$34/人',
        images: [
          'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/WzSJqKdRBJNShLwy.jpg',
          'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/pkyPvoLSvxTXLXol.jpg',
          'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/AczupnTpekdoZzuV.jpg'
        ]
      },
      {
        name: '大运河购物中心',
        description: '仿威尼斯街道设计的购物中心，有人造天空和运河',
        price: '免费参观',
        images: [
          'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/FVpUYPrwFcdnluZr.jpg',
          'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/xApaZmfaPvqQcDMP.jpg',
          'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/jajBjtEpPLilSPhI.jpg'
        ]
      },
      {
        name: '圣马可广场',
        description: '威尼斯圣马可广场的复制品，有街头艺人表演',
        price: '免费',
        images: [
          'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/DPPdrfioNDpcsXWe.jpg'
        ]
      }
    ],
    freeAttractions: ['室内运河和建筑：24小时可参观', '街头艺人表演：不定时'],
    images: [
      'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/DPPdrfioNDpcsXWe.jpg',
      'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/eDxedjMIfxYiZvtp.jpg',
      'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/DpAloqHHKeGgnBLQ.jpg'
    ],
    mapQuery: 'The Venetian Resort Las Vegas',
    rating: 5,
    walkingFromMGM: {
      distance: '2.2公里',
      time: '约28分钟'
    }
  },
  {
    id: 'caesars',
    name: '凯撒宫',
    nameEn: 'Caesars Palace',
    theme: '古罗马帝国风格',
    location: 'Strip中段',
    address: '3570 S Las Vegas Blvd',
    highlights: ['罗马风格建筑', 'Forum Shops购物中心', '众神花园泳池'],
    description: '凯撒宫是拉斯维加斯历史最悠久的标志性酒店之一，以古罗马帝国为主题。酒店外观宏伟壮观，有罗马式喷泉、雕塑和柱廊。Forum Shops购物中心是拉斯维加斯最豪华的购物目的地，天花板会模拟日出日落的天空变化。Garden of the Gods泳池区域有7个泳池，是拉斯维加斯最著名的泳池派对场所。',
    mustSee: [
      {
        name: 'Forum Shops购物中心',
        description: '罗马风格购物中心，天花板模拟天空变化，有仿古罗马雕塑和喷泉',
        price: '免费参观',
        images: [
          'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/xEGozRTMLtWaGiYN.jpg',
          'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/TXwajTbNoYOleNmk.jpeg'
        ]
      },
      {
        name: 'Fall of Atlantis喷泉表演',
        description: 'Forum Shops内的机械人偶和喷泉表演，讲述亚特兰蒂斯的故事',
        price: '免费',
        images: [
          'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/rQjxeypdkvJLMGlJ.jpg'
        ]
      },
      {
        name: '罗马雕塑和喷泉',
        description: '酒店内外的罗马风格雕塑和喷泉群',
        price: '免费',
        images: [
          'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/FmezgigxYaLwiPOw.jpg'
        ]
      }
    ],
    freeAttractions: ['Forum Shops天空变化：全天循环', 'Fall of Atlantis喷泉表演：每小时整点'],
    images: [
      'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/TXwajTbNoYOleNmk.jpeg',
      'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/rQjxeypdkvJLMGlJ.jpg',
      'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/FmezgigxYaLwiPOw.jpg'
    ],
    mapQuery: 'Caesars Palace Las Vegas',
    rating: 5,
    walkingFromMGM: {
      distance: '1.5公里',
      time: '约18分钟'
    }
  },
  {
    id: 'paris',
    name: '巴黎酒店',
    nameEn: 'Paris Las Vegas',
    theme: '法国巴黎浪漫风情',
    location: 'Strip中段',
    address: '3655 S Las Vegas Blvd',
    highlights: ['1/2比例埃菲尔铁塔', '凯旋门复制品', '法式街道氛围'],
    description: '巴黎酒店将法国首都的浪漫风情带到了拉斯维加斯。酒店最著名的地标是一座1/2比例的埃菲尔铁塔复制品，高度约165米，游客可以乘电梯到观景台俯瞰整个Strip。酒店还有凯旋门、巴黎歌剧院等法国地标的复制品。夜晚埃菲尔铁塔会亮起灯光，与百乐宫喷泉隔街相望，是拍照的绝佳地点。',
    mustSee: [
      {
        name: '埃菲尔铁塔观景台',
        description: '1/2比例复制品，可乘电梯登顶俯瞰Strip全景，日落时分最美',
        price: '约$25/人',
        images: [
          'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/ByFJDQjKQOUeCiBF.jpg',
          'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/ORBLpAsDvaSwFkDo.jpg',
          'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/GqWaABbVCXQtwKGD.jpg'
        ]
      },
      {
        name: '凯旋门',
        description: '巴黎凯旋门的复制品，是拍照打卡的热门地点',
        price: '免费',
        images: [
          'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/GlPNtXZWDWxOHQuf.jpg'
        ]
      }
    ],
    freeAttractions: ['外观拍照：24小时', '大堂法式装饰：24小时'],
    images: [
      'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/GlPNtXZWDWxOHQuf.jpg',
      'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/FihnqXSwNbTRdKgK.jpg',
      'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/ORBLpAsDvaSwFkDo.jpg'
    ],
    mapQuery: 'Paris Las Vegas Hotel',
    rating: 4,
    walkingFromMGM: {
      distance: '1.0公里',
      time: '约12分钟'
    }
  },
  {
    id: 'newyork',
    name: '纽约纽约',
    nameEn: 'New York-New York',
    theme: '纽约城市风光',
    location: 'Strip南段',
    address: '3790 S Las Vegas Blvd',
    highlights: ['自由女神像复制品', '过山车穿越建筑', '纽约天际线'],
    description: '纽约纽约酒店将纽约市的标志性建筑浓缩在一起，包括自由女神像、帝国大厦、克莱斯勒大厦等。酒店最刺激的项目是Big Apple Coaster过山车，轨道穿越酒店建筑外围，最高时速可达67英里。酒店内部有仿纽约街道的购物区，还有中央公园主题的赌场区域。',
    mustSee: [
      {
        name: 'Big Apple Coaster过山车',
        description: '轨道穿越酒店建筑外围，最高时速67英里，可体验纽约天际线',
        price: '约$19/人',
        images: [
          'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/JTqGgpuhfqdORiUK.jpg',
          'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/lWsRXhfyAZpIWMSZ.jpg'
        ]
      },
      {
        name: '自由女神像',
        description: '1/2比例的自由女神像复制品，是拍照打卡的热门地点',
        price: '免费',
        images: [
          'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/HrbFthjpPTDmQZFk.jpg',
          'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/TLbRULXEDKcuEKLZ.jpg'
        ]
      }
    ],
    freeAttractions: ['外观建筑群拍照：24小时', '室内纽约街道：24小时'],
    images: [
      'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/HrbFthjpPTDmQZFk.jpg',
      'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/TLbRULXEDKcuEKLZ.jpg',
      'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/lWsRXhfyAZpIWMSZ.jpg'
    ],
    mapQuery: 'New York New York Hotel Las Vegas',
    rating: 4,
    walkingFromMGM: {
      distance: '0.5公里',
      time: '约6分钟'
    }
  },
  {
    id: 'wynn',
    name: '永利酒店',
    nameEn: 'Wynn Las Vegas',
    theme: '现代奢华度假村',
    location: 'Strip北段',
    address: '3131 S Las Vegas Blvd',
    highlights: ['精美花园景观', '高端购物', '米其林餐厅'],
    description: '永利酒店是拉斯维加斯最高端的度假村之一，由赌场大亨Steve Wynn打造。酒店以精美的花园景观和艺术品收藏著称，大堂有巨大的花卉装置和瀑布。酒店内有多家米其林星级餐厅和高端品牌购物店。Lake of Dreams是酒店独特的水上表演，结合了投影、灯光和音乐。',
    mustSee: [
      {
        name: 'Lake of Dreams水上表演',
        description: '独特的水上灯光秀，结合投影、灯光、音乐和水幕，每晚日落后每30分钟一场',
        price: '免费（需在酒店餐厅用餐观看最佳）',
        images: [
          'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/ILxRkoNMXYSbsaQw.jpg',
          'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/fsQqCGHyFVYYYbQR.jpg',
          'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/jtLkFFQUULBxdhnM.jpg'
        ]
      },
      {
        name: '大堂花卉装置',
        description: '精美的花卉装置和瀑布，是拍照的热门地点',
        price: '免费',
        images: [
          'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/ULoFATlcRWZKXcjK.jpg',
          'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/CEZThovtoVRXsbPD.jpg'
        ]
      }
    ],
    freeAttractions: ['Lake of Dreams：每晚日落后每30分钟', '大堂和花园：24小时'],
    images: [
      'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/ULoFATlcRWZKXcjK.jpg',
      'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/CEZThovtoVRXsbPD.jpg',
      'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/fsQqCGHyFVYYYbQR.jpg'
    ],
    mapQuery: 'Wynn Las Vegas',
    rating: 5,
    walkingFromMGM: {
      distance: '3.0公里',
      time: '约38分钟'
    }
  },
  {
    id: 'luxor',
    name: '卢克索',
    nameEn: 'Luxor',
    theme: '古埃及金字塔',
    location: 'Strip南端',
    address: '3900 S Las Vegas Blvd',
    highlights: ['黑色金字塔建筑', '狮身人面像', '世界最强光束'],
    description: '卢克索酒店是拉斯维加斯最独特的建筑之一，是一座30层高的黑色玻璃金字塔。酒店前方有一座巨大的狮身人面像复制品。金字塔顶端发出的光束是世界上最强的人造光源，在太空都能看到。酒店内部是一个巨大的中空空间，房间沿金字塔内壁排列，乘坐倾斜电梯到达。',
    mustSee: [
      {
        name: '金字塔和狮身人面像',
        description: '30层高的黑色玻璃金字塔和巨大的狮身人面像复制品',
        price: '免费参观',
        images: [
          'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/wGrbzrRhpZLBSYOR.jpg',
          'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/ECrVUeLmidgggdDe.jpg'
        ]
      },
      {
        name: '倾斜电梯',
        description: '独特的倾斜电梯，沿金字塔内壁39度角上升',
        price: '住客免费',
        images: [
          'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/ZfuxGVNOAFbqwKTW.jpg'
        ]
      }
    ],
    freeAttractions: ['外观拍照：24小时', '大堂参观：24小时'],
    images: [
      'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/ZfuxGVNOAFbqwKTW.jpg',
      'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/wGrbzrRhpZLBSYOR.jpg',
      'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/ECrVUeLmidgggdDe.jpg'
    ],
    mapQuery: 'Luxor Hotel Las Vegas',
    rating: 4,
    walkingFromMGM: {
      distance: '1.2公里',
      time: '约15分钟'
    }
  },
  {
    id: 'excalibur',
    name: '神剑酒店',
    nameEn: 'Excalibur',
    theme: '中世纪城堡',
    location: 'Strip南段',
    address: '3850 S Las Vegas Blvd',
    highlights: ['童话城堡外观', '骑士主题', '适合家庭'],
    description: '神剑酒店以亚瑟王传说为主题，外观是一座色彩缤纷的中世纪城堡，有尖塔、城垛和护城河。酒店非常适合家庭游客，有很多适合孩子的娱乐设施。Tournament of Kings晚餐秀是酒店的招牌表演，观众可以边吃中世纪风格的晚餐边观看骑士比武。',
    mustSee: [
      {
        name: '城堡外观',
        description: '色彩缤纷的中世纪城堡，夜晚灯光效果更佳',
        price: '免费',
        images: [
          'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/mRLGVJZjvucfGdyT.jpg',
          'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/DSHgNuszFSAwnmDh.jpeg'
        ]
      },
      {
        name: 'Tournament of Kings晚餐秀',
        description: '边吃中世纪风格晚餐边观看骑士比武表演',
        price: '约$70/人',
        images: []
      }
    ],
    freeAttractions: ['城堡外观拍照：24小时', '大堂参观：24小时'],
    images: [
      'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/mRLGVJZjvucfGdyT.jpg',
      'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/DSHgNuszFSAwnmDh.jpeg'
    ],
    mapQuery: 'Excalibur Hotel Las Vegas',
    rating: 3,
    walkingFromMGM: {
      distance: '0.8公里',
      time: '约10分钟'
    }
  },
  {
    id: 'mgm',
    name: 'MGM Grand',
    nameEn: 'MGM Grand',
    theme: '好莱坞娱乐帝国',
    location: 'Strip南段',
    address: '3799 S Las Vegas Blvd',
    highlights: ['标志性金狮雕塑', '顶级演出场馆', '大型赌场'],
    description: 'MGM Grand是拉斯维加斯最大的酒店之一，以好莱坞电影公司MGM为主题。酒店门口有一座标志性的金色狮子雕塑。酒店内有MGM Grand Garden Arena，经常举办顶级演唱会和体育赛事。酒店的赌场面积超过17万平方英尺，是世界上最大的赌场之一。',
    mustSee: [
      {
        name: '金狮雕塑',
        description: '酒店门口标志性的金色狮子雕塑，是拍照打卡的热门地点',
        price: '免费',
        images: [
          'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/BOoHPBrORDdgxaRX.jpg',
          'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/xyqrGXiwNjflWlqC.jpg'
        ]
      },
      {
        name: 'MGM Grand Garden Arena',
        description: '17,000座位的演出场馆，经常举办顶级演唱会和体育赛事',
        price: '视演出而定',
        images: [
          'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/yizLLwDPHrgCTqGE.jpg'
        ]
      }
    ],
    freeAttractions: ['金狮雕塑：24小时', '大堂和赌场：24小时'],
    images: [
      'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/yizLLwDPHrgCTqGE.jpg',
      'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/BOoHPBrORDdgxaRX.jpg',
      'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/xyqrGXiwNjflWlqC.jpg'
    ],
    mapQuery: 'MGM Grand Las Vegas',
    rating: 4,
    walkingFromMGM: {
      distance: '0公里',
      time: '您住这里！'
    }
  },
  {
    id: 'mandalay',
    name: 'Mandalay Bay',
    nameEn: 'Mandalay Bay',
    theme: '热带海滩度假村',
    location: 'Strip最南端',
    address: '3950 S Las Vegas Blvd',
    highlights: ['Shark Reef水族馆', '人造沙滩泳池', '热带风情'],
    description: 'Mandalay Bay是拉斯维加斯Strip最南端的大型度假村，以热带海滩为主题。酒店最著名的是Shark Reef水族馆，有超过2000种海洋生物，包括鲨鱼、海龟、鳄鱼等。酒店的泳池区域有一个11英亩的人造沙滩和波浪池，是拉斯维加斯最大的泳池区域。',
    mustSee: [
      {
        name: 'Shark Reef水族馆',
        description: '超过2000种海洋生物，包括鲨鱼、海龟、鳄鱼，有海底隧道',
        price: '约$29/人',
        images: [
          'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/NvSrZeRsDtKJjBsz.jpg',
          'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/YayTLvvfAfOIHVEo.jpg'
        ]
      },
      {
        name: '人造沙滩泳池',
        description: '11英亩的人造沙滩和波浪池，是拉斯维加斯最大的泳池区域',
        price: '住客免费',
        images: [
          'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/XZCTfQNrNiHVjnBo.jpg'
        ]
      }
    ],
    freeAttractions: ['大堂热带装饰：24小时', '泳池区域：住客免费'],
    images: [
      'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/XZCTfQNrNiHVjnBo.jpg',
      'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/qNGwhXVUBEAVNPtM.jpg',
      'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/NvSrZeRsDtKJjBsz.jpg'
    ],
    mapQuery: 'Mandalay Bay Las Vegas',
    rating: 4,
    walkingFromMGM: {
      distance: '1.6公里',
      time: '约20分钟'
    }
  },
  {
    id: 'resortsworld',
    name: '云顶世界',
    nameEn: 'Resorts World',
    theme: '现代亚洲风情',
    location: 'Strip北端',
    address: '3000 S Las Vegas Blvd',
    highlights: ['最新开业酒店', '亚洲美食', '春节活动'],
    description: '云顶世界是拉斯维加斯Strip上最新开业的大型度假村（2021年），由马来西亚云顶集团投资。酒店拥有现代化的设计和亚洲风情，有多家亚洲餐厅包括中餐厅"红8"和"富贵楼"。酒店每年春节都会举办盛大的庆祝活动，包括舞狮舞龙表演。',
    mustSee: [
      {
        name: '春节庆典',
        description: '每年春节举办舞狮舞龙表演、红包活动等中国传统庆祝活动',
        price: '免费',
        images: [
          'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/WkhvPZunyFIezFBx.jpg',
          'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/rOWSvpGSJmSdIGJt.jpg'
        ]
      },
      {
        name: '亚洲美食',
        description: '多家亚洲餐厅，包括中餐厅红8、富贵楼等',
        price: '视餐厅而定',
        images: []
      }
    ],
    freeAttractions: ['大堂参观：24小时', '春节装饰：1月底至2月底'],
    images: [
      'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/WkhvPZunyFIezFBx.jpg',
      'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/rOWSvpGSJmSdIGJt.jpg'
    ],
    mapQuery: 'Resorts World Las Vegas',
    rating: 4,
    walkingFromMGM: {
      distance: '3.5公里',
      time: '约45分钟（建议打车）'
    },
    chineseNewYear: {
      hasEvent: true,
      description: '2026年2月21日起举办春节庆典，是拉斯维加斯最盛大的春节活动之一',
      highlights: ['舞狮舞龙表演', '红包活动', '中式美食节', '传统装饰']
    }
  },
  {
    id: 'aria',
    name: 'ARIA',
    nameEn: 'ARIA Resort & Casino',
    theme: '现代艺术与科技',
    location: 'Strip中段',
    address: '3730 S Las Vegas Blvd',
    highlights: ['当代艺术收藏', '智能客房', '现代建筑'],
    description: 'ARIA是CityCenter综合体的核心酒店，以现代设计和科技著称。酒店收藏了大量当代艺术品，包括大堂的巨型艺术装置。客房配备智能控制系统，可以用平板控制灯光、窗帘、温度等。酒店的建筑设计获得了LEED金级认证，是拉斯维加斯最环保的酒店之一。',
    mustSee: [
      {
        name: '当代艺术收藏',
        description: '大堂和公共区域展示的当代艺术品，包括巨型艺术装置',
        price: '免费',
        images: [
          'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/QtfDwfqImMdpPQah.jpg'
        ]
      }
    ],
    freeAttractions: ['艺术品参观：24小时', '大堂：24小时'],
    images: [
      'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/QtfDwfqImMdpPQah.jpg'
    ],
    mapQuery: 'ARIA Resort Casino Las Vegas',
    rating: 5,
    walkingFromMGM: {
      distance: '0.8公里',
      time: '约10分钟'
    },
    chineseNewYear: {
      hasEvent: true,
      description: '春节期间大堂有中国风装饰',
      highlights: ['大堂装饰', '中式餐厅']
    }
  },
  {
    id: 'fremont',
    name: 'Fremont Street',
    nameEn: 'Fremont Street Experience',
    theme: '老城区灯光秀',
    location: '市中心',
    address: '425 Fremont St',
    highlights: ['巨型LED天幕', '复古赌场氛围', '街头表演'],
    description: 'Fremont Street是拉斯维加斯的老城区，与Strip的现代豪华不同，这里保留了更多复古的赌场氛围。最著名的是Viva Vision天幕，一个长约450米的LED天花板，每晚会播放震撼的灯光秀。街道两旁有很多老牌赌场和便宜的餐厅，还有SlotZilla高空滑索。',
    mustSee: [
      {
        name: 'Viva Vision灯光秀',
        description: '450米长的LED天幕，每晚播放震撼的灯光秀',
        price: '免费',
        images: [
          'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/vqdUbIWChwiPtLUT.jpg',
          'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/sUuertxBRQSrajIj.jpg'
        ]
      },
      {
        name: 'SlotZilla高空滑索',
        description: '从LED天幕下方滑过的高空滑索体验',
        price: '约$29-49/人',
        images: []
      }
    ],
    freeAttractions: ['Viva Vision灯光秀：每晚6点至凌晨2点，每小时整点', '街头表演：全天'],
    images: [
      'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/dAeOOcbNFsUqzXjU.jpg',
      'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/yuziOkvQHTEWAoqO.jpg',
      'https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/vqdUbIWChwiPtLUT.jpg'
    ],
    mapQuery: 'Fremont Street Experience Las Vegas',
    rating: 4,
    walkingFromMGM: {
      distance: '6.0公里',
      time: '建议打车（约12分钟）'
    }
  }
];

// 酒店分区信息
export const vegasAreas = [
  {
    id: 'strip-south',
    name: 'Strip南段',
    hotels: ['luxor', 'mandalay', 'mgm', 'newyork', 'excalibur'],
    description: '从Mandalay Bay到MGM Grand，包含多个主题酒店'
  },
  {
    id: 'strip-center',
    name: 'Strip中段',
    hotels: ['bellagio', 'caesars', 'paris', 'aria'],
    description: '最繁华的区域，百乐宫喷泉和凯撒宫所在地'
  },
  {
    id: 'strip-north',
    name: 'Strip北段',
    hotels: ['venetian', 'wynn', 'resortsworld'],
    description: '威尼斯人和永利等高端酒店集中区'
  },
  {
    id: 'downtown',
    name: '市中心老城区',
    hotels: ['fremont'],
    description: '复古赌场氛围，Fremont Street灯光秀'
  }
];

// 中国新年特色酒店
export const chineseNewYearHotels = ['bellagio', 'resortsworld', 'aria'];
