// 拉古纳海滩详细游玩攻略
export interface LagunaStop {
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
}

export const lagunaItinerary: LagunaStop[] = [
  {
    id: 'laguna-parking',
    order: 1,
    name: '停车',
    nameEn: 'Parking',
    time: '12:30',
    duration: '5分钟',
    description: '拉古纳海滩停车位较紧张，建议停在Main Beach附近的公共停车场或路边咪表。',
    highlights: ['Main Beach停车场', '路边咪表停车', '周末较难停车'],
    howToGetThere: '从In-N-Out LAX出发，沿I-405 S和CA-133 S行驶约55分钟',
    tips: '停车费约$2-3/小时，建议准备好零钱或使用ParkMobile App',
    image: '/images/laguna-beach.jpg'
  },
  {
    id: 'main-beach',
    order: 2,
    name: 'Main Beach 主海滩',
    nameEn: 'Main Beach Park',
    time: '12:35 - 12:50',
    duration: '15分钟',
    description: '拉古纳海滩的标志性地点！金色沙滩、清澈海水、标志性的救生员塔。这里是拍照打卡的最佳地点，可以看到整个海湾的全景。',
    highlights: ['标志性救生员塔', '金色沙滩', '海湾全景', '拍照打卡点'],
    howToGetThere: '从停车场步行约2分钟',
    tips: '在救生员塔前拍照是经典打卡姿势，海滩上有篮球场和游乐设施',
    image: '/images/laguna-main-beach.jpg'
  },
  {
    id: 'heisler-park',
    order: 3,
    name: 'Heisler Park 海斯勒公园',
    nameEn: 'Heisler Park',
    time: '12:50 - 13:25',
    duration: '35分钟',
    description: '沿着悬崖边的海岸步道漫步，欣赏壮观的太平洋美景。公园内有多个观景台，可以俯瞰整个海岸线，还有潮汐池可以探索海洋生物。',
    highlights: ['悬崖海景步道', '多个观景台', '潮汐池', '野餐区'],
    howToGetThere: '从Main Beach沿海岸步道向北步行约10分钟',
    tips: '潮汐池在低潮时最佳，可以看到海星、海葵、小螃蟹等。注意只观察不触摸！',
    image: '/images/heisler-park.jpg'
  },
  {
    id: 'laguna-lunch',
    order: 4,
    name: '午餐时间',
    nameEn: 'Lunch Time',
    time: '13:30 - 14:15',
    duration: '45分钟',
    description: '在拉古纳海滩小镇中心享用午餐。这里有各种风格的餐厅，从休闲的墨西哥菜到精致的海鲜餐厅应有尽有。',
    highlights: ['海景餐厅', '墨西哥菜', '海鲜', '咖啡甜点'],
    howToGetThere: '从Heisler Park步行回到小镇中心约5分钟',
    tips: '推荐餐厅：La Sirena Grill（墨西哥菜，休闲氛围）、Orange Inn（冰沙和简餐）、Laguna Beer Company（家庭友好）',
    image: '/images/laguna-dining.jpg'
  },
  {
    id: 'laguna-departure',
    order: 5,
    name: '离开前往La Jolla',
    nameEn: 'Depart to La Jolla',
    time: '14:30',
    duration: '约1小时15分钟车程',
    description: '沿着美丽的加州海岸公路继续南下，前往圣地亚哥的La Jolla区域观赏海狮和海豹。',
    highlights: ['海岸公路风景', '约64英里', '沿途可看到太平洋'],
    howToGetThere: '沿I-5 S向南行驶约1小时15分钟',
    tips: '可以在路上欣赏加州海岸风光，但注意不要疲劳驾驶',
    image: '/images/california-coast.jpg'
  }
];

export default lagunaItinerary;
