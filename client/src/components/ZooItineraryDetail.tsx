import { useState } from 'react';
import { zooItinerary, ZooStop, ZooMeal } from '@/data/zooItinerary';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Clock, 
  MapPin, 
  Footprints, 
  Car, 
  Utensils, 
  Camera,
  ChevronDown,
  ChevronUp,
  Navigation,
  Star,
  Info,
  PawPrint
} from 'lucide-react';

interface ZooStopCardProps {
  stop: ZooStop;
  isExpanded: boolean;
  onToggle: () => void;
}

function ZooStopCard({ stop, isExpanded, onToggle }: ZooStopCardProps) {
  const isHighlight = stop.name.includes('⭐');
  
  return (
    <Card className={`overflow-hidden transition-all duration-300 ${isHighlight ? 'ring-2 ring-amber-400 bg-amber-50/50' : 'bg-white'}`}>
      <div className="flex flex-col md:flex-row">
        {/* 图片 */}
        <div className="md:w-1/3 h-48 md:h-auto relative overflow-hidden">
          <img 
            src={stop.image} 
            alt={stop.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-3 left-3">
            <Badge className="bg-emerald-600 text-white font-bold text-lg px-3 py-1">
              {stop.order}
            </Badge>
          </div>
          {isHighlight && (
            <div className="absolute top-3 right-3">
              <Badge className="bg-amber-500 text-white">
                <Star className="w-3 h-3 mr-1" />
                必看
              </Badge>
            </div>
          )}
        </div>
        
        {/* 内容 */}
        <div className="md:w-2/3 p-4 md:p-6">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="text-xl font-bold text-gray-900">{stop.name.replace('⭐必看', '')}</h3>
              <p className="text-sm text-gray-500">{stop.nameEn}</p>
            </div>
            <Badge variant="outline" className="text-emerald-700 border-emerald-300">
              {stop.area}
            </Badge>
          </div>
          
          {/* 时间信息 */}
          <div className="flex flex-wrap gap-4 mb-4 text-sm">
            <div className="flex items-center text-gray-600">
              <Clock className="w-4 h-4 mr-1 text-emerald-600" />
              <span>{stop.time}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Footprints className="w-4 h-4 mr-1 text-emerald-600" />
              <span>停留 {stop.duration}</span>
            </div>
          </div>
          
          {/* 描述 */}
          <p className="text-gray-700 mb-4 leading-relaxed">{stop.description}</p>
          
          {/* 亮点标签 */}
          <div className="flex flex-wrap gap-2 mb-4">
            {stop.highlights.map((highlight, idx) => (
              <Badge key={idx} variant="secondary" className="bg-emerald-100 text-emerald-800">
                {highlight}
              </Badge>
            ))}
          </div>
          
          {/* 展开/收起按钮 */}
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={onToggle}
            className="text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 p-0"
          >
            {isExpanded ? (
              <>收起详情 <ChevronUp className="w-4 h-4 ml-1" /></>
            ) : (
              <>查看详情 <ChevronDown className="w-4 h-4 ml-1" /></>
            )}
          </Button>
          
          {/* 展开内容 */}
          {isExpanded && (
            <div className="mt-4 pt-4 border-t border-gray-200 space-y-4">
              {/* 动物列表 */}
              {stop.animals && stop.animals.length > 0 && (
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                    <PawPrint className="w-4 h-4 mr-2 text-emerald-600" />
                    可以看到的动物
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {stop.animals.map((animal, idx) => (
                      <Badge key={idx} className="bg-orange-100 text-orange-800">
                        {animal}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
              
              {/* 如何到达 */}
              <div>
                <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                  <Navigation className="w-4 h-4 mr-2 text-emerald-600" />
                  如何到达
                </h4>
                <p className="text-gray-600 text-sm">{stop.howToGetThere}</p>
              </div>
              
              {/* 小贴士 */}
              {stop.tips && (
                <div className="bg-amber-50 p-3 rounded-lg">
                  <h4 className="font-semibold text-amber-800 mb-1 flex items-center">
                    <Info className="w-4 h-4 mr-2" />
                    小贴士
                  </h4>
                  <p className="text-amber-700 text-sm">{stop.tips}</p>
                </div>
              )}
              
              {/* 下一站 */}
              {stop.nextStop && (
                <div className="bg-emerald-50 p-3 rounded-lg">
                  <h4 className="font-semibold text-emerald-800 mb-1">
                    → 下一站：{stop.nextStop.name}
                  </h4>
                  <p className="text-emerald-700 text-sm">
                    步行 {stop.nextStop.walkTime} | {stop.nextStop.direction}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}

function MealCard({ meal }: { meal: ZooMeal }) {
  const mealTypeLabels = {
    breakfast: { label: '早餐', color: 'bg-yellow-500' },
    lunch: { label: '午餐', color: 'bg-orange-500' },
    snack: { label: '小吃', color: 'bg-pink-500' },
    dinner: { label: '晚餐', color: 'bg-purple-500' }
  };
  
  const { label, color } = mealTypeLabels[meal.type];
  
  return (
    <Card className="overflow-hidden">
      <CardHeader className={`${color} text-white py-3`}>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg flex items-center">
            <Utensils className="w-5 h-5 mr-2" />
            {label}
          </CardTitle>
          <Badge className="bg-white/20 text-white">{meal.time}</Badge>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <h4 className="font-bold text-gray-900 mb-1">{meal.location}</h4>
        <p className="text-sm text-gray-500 mb-3">{meal.locationEn}</p>
        <p className="text-gray-700 text-sm mb-3">{meal.description}</p>
        
        <div className="space-y-2">
          <p className="font-semibold text-gray-800 text-sm">推荐菜品：</p>
          <div className="flex flex-wrap gap-2">
            {meal.recommendations.map((item, idx) => (
              <Badge key={idx} variant="outline" className="text-xs">
                {item}
              </Badge>
            ))}
          </div>
        </div>
        
        <div className="mt-3 pt-3 border-t">
          <p className="text-sm text-gray-600">
            💰 人均：<span className="font-semibold">{meal.priceRange}</span>
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

export default function ZooItineraryDetail() {
  const [expandedStops, setExpandedStops] = useState<Set<string>>(new Set(['panda-ridge']));
  const [activeTab, setActiveTab] = useState<'itinerary' | 'meals' | 'tips'>('itinerary');
  
  const toggleStop = (id: string) => {
    setExpandedStops(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };
  
  return (
    <div className="max-w-5xl mx-auto">
      {/* 头部概览 */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-6 md:p-8 mb-8 text-white">
        <div className="flex items-center gap-2 mb-2">
          <Badge className="bg-white/20 text-white">{zooItinerary.weekday}</Badge>
          <Badge className="bg-white/20 text-white">{zooItinerary.date}</Badge>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold mb-2">{zooItinerary.title}</h1>
        <p className="text-emerald-100 mb-6">{zooItinerary.subtitle}</p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white/10 rounded-lg p-3">
            <div className="flex items-center text-emerald-200 mb-1">
              <Clock className="w-4 h-4 mr-1" />
              <span className="text-xs">开放时间</span>
            </div>
            <p className="font-bold">{zooItinerary.overview.openTime} - {zooItinerary.overview.closeTime}</p>
          </div>
          <div className="bg-white/10 rounded-lg p-3">
            <div className="flex items-center text-emerald-200 mb-1">
              <Footprints className="w-4 h-4 mr-1" />
              <span className="text-xs">游览时长</span>
            </div>
            <p className="font-bold">{zooItinerary.overview.totalDuration}</p>
          </div>
          <div className="bg-white/10 rounded-lg p-3">
            <div className="flex items-center text-emerald-200 mb-1">
              <MapPin className="w-4 h-4 mr-1" />
              <span className="text-xs">步行距离</span>
            </div>
            <p className="font-bold">{zooItinerary.overview.walkingDistance}</p>
          </div>
          <div className="bg-white/10 rounded-lg p-3">
            <div className="flex items-center text-emerald-200 mb-1">
              <Car className="w-4 h-4 mr-1" />
              <span className="text-xs">停车费</span>
            </div>
            <p className="font-bold">{zooItinerary.parking.fee}</p>
          </div>
        </div>
      </div>
      
      {/* 标签切换 */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        <Button 
          variant={activeTab === 'itinerary' ? 'default' : 'outline'}
          onClick={() => setActiveTab('itinerary')}
          className={activeTab === 'itinerary' ? 'bg-emerald-600 hover:bg-emerald-700' : ''}
        >
          <Camera className="w-4 h-4 mr-2" />
          游览路线
        </Button>
        <Button 
          variant={activeTab === 'meals' ? 'default' : 'outline'}
          onClick={() => setActiveTab('meals')}
          className={activeTab === 'meals' ? 'bg-emerald-600 hover:bg-emerald-700' : ''}
        >
          <Utensils className="w-4 h-4 mr-2" />
          餐饮安排
        </Button>
        <Button 
          variant={activeTab === 'tips' ? 'default' : 'outline'}
          onClick={() => setActiveTab('tips')}
          className={activeTab === 'tips' ? 'bg-emerald-600 hover:bg-emerald-700' : ''}
        >
          <Info className="w-4 h-4 mr-2" />
          游玩贴士
        </Button>
      </div>
      
      {/* 游览路线 */}
      {activeTab === 'itinerary' && (
        <div className="space-y-6">
          {/* 时间线 */}
          <div className="relative">
            {zooItinerary.stops.map((stop, index) => (
              <div key={stop.id} className="relative">
                {/* 连接线 */}
                {index < zooItinerary.stops.length - 1 && (
                  <div className="absolute left-6 top-full w-0.5 h-6 bg-emerald-300 z-0" />
                )}
                <ZooStopCard 
                  stop={stop}
                  isExpanded={expandedStops.has(stop.id)}
                  onToggle={() => toggleStop(stop.id)}
                />
                {index < zooItinerary.stops.length - 1 && <div className="h-6" />}
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* 餐饮安排 */}
      {activeTab === 'meals' && (
        <div className="grid md:grid-cols-2 gap-6">
          {zooItinerary.meals.map((meal, index) => (
            <MealCard key={index} meal={meal} />
          ))}
        </div>
      )}
      
      {/* 游玩贴士 */}
      {activeTab === 'tips' && (
        <Card>
          <CardHeader className="bg-amber-50">
            <CardTitle className="flex items-center text-amber-800">
              <Info className="w-5 h-5 mr-2" />
              游玩小贴士
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <ul className="space-y-3">
              {zooItinerary.tips.map((tip, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-amber-100 text-amber-800 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                    {index + 1}
                  </span>
                  <span className="text-gray-700">{tip}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
