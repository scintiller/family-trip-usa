// California Sunshine Design - Vertical Timeline Component
// 垂直时间轴布局：连续滚动查看所有天数 + 固定侧边导航
import { motion } from 'framer-motion';
import { Calendar, Car, Clock, MapPin, Utensils, ChevronUp, ArrowDown, Ticket, ExternalLink, CheckCircle2, Circle, Plane, Building, ArrowRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { DaySchedule, tripSchedule, Attraction, FlightInfo, HotelDeparture } from '@/data/tripData';
import OptionCards from './OptionCards';
import { MapView } from './Map';
import ZooItineraryDetail from './ZooItineraryDetail';
import DetailedItinerary from './DetailedItinerary';
import { lagunaItinerary } from '@/data/lagunaItinerary';
import { laJollaItinerary, sealVsSeaLion } from '@/data/laJollaItinerary';
import { midwayItinerary, midwayTips } from '@/data/midwayItinerary';
import VegasHotelGuide from './VegasHotelGuide';

// 城市颜色映射
const cityColors: Record<string, string> = {
  'Los Angeles': '#FFB800',
  'San Diego': '#0077B6',
  'Las Vegas': '#E85D04',
  'New York City': '#1E40AF',
  'Washington DC': '#B91C1C',
  'Phoenix': '#DC2626'
};

// 城市中文名映射
const cityNames: Record<string, string> = {
  'Los Angeles': '洛杉矶',
  'San Diego': '圣地亚哥',
  'Las Vegas': '拉斯维加斯',
  'New York City': '纽约',
  'Washington DC': '华盛顿',
  'Phoenix': '凤凰城'
};

// 格式化日期显示
function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return `${date.getMonth() + 1}/${date.getDate().toString().padStart(2, '0')}`;
}

// 交通方式图标和颜色
function getTransportStyle(method?: string) {
  switch (method) {
    case '步行': return { icon: '🚶', bg: 'bg-green-50', text: 'text-green-600', border: 'border-green-200' };
    case '地铁': return { icon: '🚇', bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200' };
    case '打车': return { icon: '🚕', bg: 'bg-yellow-50', text: 'text-yellow-700', border: 'border-yellow-200' };
    case '公交': return { icon: '🚌', bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-200' };
    case '开车': return { icon: '🚗', bg: 'bg-orange-50', text: 'text-orange-600', border: 'border-orange-200' };
    case '火车': return { icon: '🚆', bg: 'bg-indigo-50', text: 'text-indigo-600', border: 'border-indigo-200' };
    default: return { icon: '📍', bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200' };
  }
}

// 距离信息组件
function DistanceInfo({ distance, driveTime, to, method, subwayLine, taxiTime, taxiCost }: { 
  distance: string; driveTime: string; to: string; method?: string; subwayLine?: string; taxiTime?: string; taxiCost?: string;
}) {
  const style = getTransportStyle(method);
  return (
    <div className="flex items-center justify-center my-4">
      <div className="flex flex-col items-center w-full max-w-sm">
        <div className="w-px h-4 bg-gray-300" />
        <div className={`flex flex-col items-center gap-1 ${style.bg} px-4 py-2 rounded-xl text-xs ${style.text} border ${style.border}`}>
          <div className="flex items-center gap-2">
            <span className="text-base">{style.icon}</span>
            <span className="font-medium">{method || '前往'}</span>
            {subwayLine && <span className="bg-white/80 px-1.5 py-0.5 rounded text-[10px] font-bold">{subwayLine}</span>}
          </div>
          <div className="flex items-center gap-2">
            <span>{distance}</span>
            <span>·</span>
            <span>{driveTime}</span>
          </div>
          {(taxiTime || taxiCost) && (
            <div className="flex items-center gap-1 text-[10px] text-gray-500">
              <span>🚕</span>
              {taxiTime && <span>打车{taxiTime}</span>}
              {taxiCost && <span>约{taxiCost}</span>}
            </div>
          )}
        </div>
        <div className="text-xs text-gray-400 mt-1">→ {to}</div>
        <div className="w-px h-4 bg-gray-300" />
      </div>
    </div>
  );
}

// 待办事项标签组件
function TicketBadge({ ticket, attractionId }: { ticket: Attraction['ticket']; attractionId: string }) {
  const [status, setStatus] = useState<'pending' | 'done'>(ticket?.status || 'pending');

  useEffect(() => {
    // 从localStorage加载状态
    const savedStatus = localStorage.getItem('tripTodoStatus');
    if (savedStatus) {
      const statusMap = JSON.parse(savedStatus);
      // 查找匹配的状态
      Object.keys(statusMap).forEach(key => {
        if (key.includes(attractionId)) {
          setStatus(statusMap[key]);
        }
      });
    }
  }, [attractionId]);

  const toggleStatus = () => {
    const newStatus = status === 'done' ? 'pending' : 'done';
    setStatus(newStatus);
    
    // 保存到localStorage
    const savedStatus = localStorage.getItem('tripTodoStatus');
    const statusMap = savedStatus ? JSON.parse(savedStatus) : {};
    
    // 更新所有匹配的key
    Object.keys(statusMap).forEach(key => {
      if (key.includes(attractionId)) {
        statusMap[key] = newStatus;
      }
    });
    
    // 如果没有找到，添加新的
    let found = false;
    Object.keys(statusMap).forEach(key => {
      if (key.includes(attractionId)) found = true;
    });
    if (!found) {
      // 找到对应的day
      tripSchedule.forEach(day => {
        day.attractions.forEach(attr => {
          if (attr.id === attractionId) {
            statusMap[`${day.day}-${attractionId}`] = newStatus;
          }
        });
      });
    }
    
    localStorage.setItem('tripTodoStatus', JSON.stringify(statusMap));
    
    // 触发自定义事件通知其他组件
    window.dispatchEvent(new CustomEvent('todoStatusChanged'));
  };

  if (!ticket?.required) return null;

  return (
    <div className={`mt-3 p-3 rounded-lg border ${
      status === 'done' 
        ? 'bg-green-50 border-green-200' 
        : 'bg-red-50 border-red-200'
    }`}>
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-start gap-2">
          <button onClick={toggleStatus} className="flex-shrink-0 mt-0.5">
            {status === 'done' ? (
              <CheckCircle2 className="w-5 h-5 text-green-500" />
            ) : (
              <Circle className="w-5 h-5 text-red-400" />
            )}
          </button>
          <div>
            <div className="flex items-center gap-2">
              <Ticket className={`w-4 h-4 ${status === 'done' ? 'text-green-500' : 'text-red-500'}`} />
              <span className={`text-sm font-medium ${
                status === 'done' ? 'text-green-700 line-through' : 'text-red-700'
              }`}>
                {status === 'done' ? '已购票' : '需要购票'}
              </span>
            </div>
            <p className={`text-xs mt-1 ${status === 'done' ? 'text-green-600' : 'text-red-600'}`}>
              {ticket.name} {ticket.price && `· ${ticket.price}`}
            </p>
          </div>
        </div>
        {ticket.url && status === 'pending' && (
          <a
            href={ticket.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs font-medium text-blue-600 hover:text-blue-700 bg-white px-2 py-1 rounded"
          >
            购票
            <ExternalLink className="w-3 h-3" />
          </a>
        )}
      </div>
    </div>
  );
}

// 单个景点卡片
function AttractionCard({ attraction, cityColor, isLast }: { attraction: Attraction; cityColor: string; isLast: boolean }) {
  const [showMap, setShowMap] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="relative pl-8 border-l-2 border-gray-200"
      >
        {/* Timeline dot */}
        <div 
          className="absolute left-[-9px] top-0 w-4 h-4 rounded-full border-2 border-white shadow-md"
          style={{ backgroundColor: cityColor }}
        />
        
        {/* Time badge */}
        <div className="inline-flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-600 mb-3">
          <Clock className="w-3.5 h-3.5" />
          <span>{attraction.time}</span>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
          <div className="flex flex-col md:flex-row">
            {/* Image */}
            <div className="md:w-48 h-40 md:h-auto flex-shrink-0">
              <img
                src={attraction.image}
                alt={attraction.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Info */}
            <div className="flex-1 p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-1">{attraction.name}</h4>
                  <p className="text-sm text-gray-500 mb-3">{attraction.nameEn}</p>
                </div>
                <button
                  onClick={() => setShowMap(true)}
                  className="flex-shrink-0 flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-medium transition-colors"
                  style={{ 
                    backgroundColor: `${cityColor}15`,
                    color: cityColor
                  }}
                >
                  <MapPin className="w-4 h-4" />
                  地图
                </button>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                {attraction.description}
              </p>

              {/* Highlights */}
              <div className="flex flex-wrap gap-2 mb-3">
                {attraction.highlights.map((highlight: string, idx: number) => (
                  <span
                    key={idx}
                    className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600"
                  >
                    ✨ {highlight}
                  </span>
                ))}
              </div>

              {/* Tips */}
              {attraction.tips && (
                <div className="flex items-start gap-2 text-sm bg-amber-50 text-amber-700 p-3 rounded-lg">
                  <span>💡</span>
                  <span><strong>小贴士：</strong> {attraction.tips}</span>
                </div>
              )}

              {/* Ticket Badge */}
              {attraction.ticket && (
                <TicketBadge ticket={attraction.ticket} attractionId={attraction.id} />
              )}
            </div>
          </div>
        </div>

        {/* Map Modal */}
        {showMap && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50" onClick={() => setShowMap(false)}>
            <div className="bg-white rounded-2xl w-full max-w-2xl h-[500px] overflow-hidden" onClick={e => e.stopPropagation()}>
              <div className="flex items-center justify-between p-4 border-b">
                <h3 className="font-bold text-lg">{attraction.name}</h3>
                <button onClick={() => setShowMap(false)} className="text-gray-500 hover:text-gray-700">✕</button>
              </div>
              <div className="h-[calc(100%-60px)]">
                <MapView
                  onMapReady={(map: google.maps.Map) => {
                    const geocoder = new google.maps.Geocoder();
                    geocoder.geocode({ address: attraction.mapQuery }, (results, status) => {
                      if (status === 'OK' && results && results[0]) {
                        map.setCenter(results[0].geometry.location);
                        map.setZoom(15);
                        new google.maps.Marker({
                          map,
                          position: results[0].geometry.location,
                          title: attraction.name
                        });
                      }
                    });
                  }}
                />
              </div>
            </div>
          </div>
        )}
      </motion.div>

      {/* Distance to next */}
      {attraction.distanceToNext && !isLast && (
        <div className="pl-8 border-l-2 border-gray-200">
          <DistanceInfo 
            distance={attraction.distanceToNext.distance}
            driveTime={attraction.distanceToNext.driveTime}
            to={attraction.distanceToNext.to}
            method={attraction.distanceToNext.method}
            subwayLine={attraction.distanceToNext.subwayLine}
            taxiTime={attraction.distanceToNext.taxiTime}
            taxiCost={attraction.distanceToNext.taxiCost}
          />
        </div>
      )}
    </>
  );
}

// 航班信息卡片组件
function FlightCard({ flight }: { flight: FlightInfo }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-5 border border-blue-100 mb-4"
    >
      <div className="flex items-center gap-2 mb-3">
        <Plane className="w-5 h-5 text-blue-600" />
        <span className="font-bold text-blue-900">{flight.airline}</span>
        <span className="text-blue-600 font-medium">{flight.flightNumber}</span>
        <span className="ml-auto text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
          {flight.passenger}
        </span>
      </div>
      
      <div className="flex items-center gap-4">
        {/* Departure */}
        <div className="flex-1">
          <div className="text-2xl font-bold text-gray-900">{flight.departure.time}</div>
          <div className="text-sm text-gray-600">{flight.departure.code}</div>
          <div className="text-xs text-gray-500">{flight.departure.airport}</div>
        </div>
        
        {/* Flight line */}
        <div className="flex-1 flex flex-col items-center">
          <div className="text-xs text-gray-500 mb-1">{flight.duration}</div>
          <div className="w-full flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-blue-400" />
            <div className="flex-1 h-px bg-blue-300 relative">
              <Plane className="w-4 h-4 text-blue-500 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
            </div>
            <div className="w-2 h-2 rounded-full bg-blue-600" />
          </div>
          <div className="text-xs text-gray-500 mt-1">直飞</div>
        </div>
        
        {/* Arrival */}
        <div className="flex-1 text-right">
          <div className="text-2xl font-bold text-gray-900">{flight.arrival.time}</div>
          <div className="text-sm text-gray-600">{flight.arrival.code}</div>
          <div className="text-xs text-gray-500">{flight.arrival.airport}</div>
        </div>
      </div>
      
      <div className="mt-3 pt-3 border-t border-blue-100 flex items-center justify-between text-xs">
        <span className="text-gray-600">确认码：<strong className="text-gray-900">{flight.confirmationCode}</strong></span>
        {flight.note && <span className="text-blue-600">{flight.note}</span>}
      </div>
    </motion.div>
  );
}

// 酒店出发信息组件
function HotelDepartureCard({ hotelDeparture, cityColor }: { hotelDeparture: HotelDeparture; cityColor: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-4 mb-6 border border-amber-100"
    >
      <div className="flex items-center gap-2 mb-2">
        <Building className="w-5 h-5 text-amber-600" />
        <span className="font-medium text-amber-900">从酒店出发</span>
      </div>
      <div className="flex items-center gap-4 text-sm">
        <div className="flex-1">
          <div className="text-gray-600">{hotelDeparture.hotelName}</div>
        </div>
        <div className="flex items-center gap-1 text-gray-500">
          <ArrowRight className="w-4 h-4" />
        </div>
        <div className="flex-1">
          <div className="text-gray-900 font-medium">{hotelDeparture.destination}</div>
        </div>
        <div className="flex items-center gap-3 text-xs">
          <span className="bg-white px-2 py-1 rounded-full text-gray-600">
            <Car className="w-3 h-3 inline mr-1" />
            {hotelDeparture.distance}
          </span>
          <span className="bg-white px-2 py-1 rounded-full text-gray-600">
            <Clock className="w-3 h-3 inline mr-1" />
            {hotelDeparture.driveTime}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

// 单天行程卡片
function DayCard({ schedule, dayRef }: { schedule: DaySchedule; dayRef: (el: HTMLDivElement | null) => void }) {
  const cityColor = cityColors[schedule.city] || '#FFB800';
  const cityName = cityNames[schedule.city] || schedule.city;

  return (
    <div ref={dayRef} className="scroll-mt-24" id={`day-${schedule.day}`}>
      {/* Day Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        {/* City & Date Badge */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span 
            className="px-4 py-1.5 rounded-full text-white text-sm font-medium"
            style={{ backgroundColor: cityColor }}
          >
            {cityName}
          </span>
          <span className="text-gray-500 text-sm">
            {schedule.date} {schedule.weekday}
          </span>
          <span className="flex items-center gap-1 text-gray-500 text-sm">
            <Car className="w-4 h-4" />
            {schedule.mode}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          {schedule.title}
        </h2>
        <p className="text-lg text-gray-600">{schedule.subtitle}</p>
      </motion.div>

      {/* Flight Info */}
      {schedule.flights && schedule.flights.length > 0 && (
        <div className="mb-6">
          {schedule.flights.map(flight => (
            <FlightCard key={flight.id} flight={flight} />
          ))}
        </div>
      )}

      {/* Hotel Departure Info */}
      {schedule.hotelDeparture && (
        <HotelDepartureCard hotelDeparture={schedule.hotelDeparture} cityColor={cityColor} />
      )}

      {/* Attractions Timeline - Special handling for Day 5, 6, 7 */}
      {schedule.day === 6 ? (
        <div className="mt-6">
          <ZooItineraryDetail />
        </div>
      ) : (
        <>
          <div className="ml-4">
            {schedule.attractions.map((attraction, index) => (
              <AttractionCard 
                key={attraction.id} 
                attraction={attraction} 
                cityColor={cityColor}
                isLast={index === schedule.attractions.length - 1}
              />
            ))}
          </div>
          
          {/* Day 5: Laguna Beach 详细攻略 */}
          {schedule.day === 5 && (
            <>
              <DetailedItinerary
                title="🏖️ 拉古纳海滩详细攻略"
                subtitle="艺术家小镇 · 悬崖海景 · 潮汐池探索"
                stops={lagunaItinerary}
                themeColor="teal"
              />
              <DetailedItinerary
                title="🦭 La Jolla 海狮海豹观赏攻略"
                subtitle="近距离观赏野生海洋哺乳动物"
                stops={laJollaItinerary}
                themeColor="blue"
                comparison={{
                  item1: sealVsSeaLion.seaLion,
                  item2: sealVsSeaLion.harborSeal
                }}
              />
            </>
          )}
          
          {/* Day 7: Midway 航母详细攻略 */}
          {schedule.day === 7 && (
            <DetailedItinerary
              title="⚓ 中途岛号航母详细攻略"
              subtitle="3小时深度游览路线"
              stops={midwayItinerary}
              tips={midwayTips}
              themeColor="amber"
            />
          )}
          
          {/* Day 8: 拉斯维加斯酒店指南 */}
          {schedule.day === 8 && (
            <div className="mt-8">
              <VegasHotelGuide />
            </div>
          )}

        </>
      )}

      {/* Day 2 Options */}
      {schedule.isOptionDay && schedule.options && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-8"
        >
          <div className="bg-gradient-to-r from-blue-50 to-amber-50 rounded-2xl p-6 mb-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">👨‍👩‍👧</span>
              <h3 className="text-xl font-bold text-gray-900">父母行程选项</h3>
            </div>
            <p className="text-gray-600">根据父亲的体力与兴趣，任选其一</p>
          </div>
          <OptionCards options={schedule.options} />
        </motion.div>
      )}

      {/* Dinner */}
      {schedule.dinner && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-8 bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-6"
        >
          <div className="flex items-center gap-2 mb-2">
            <Utensils className="w-5 h-5 text-orange-500" />
            <h4 className="font-bold text-gray-900">晚餐安排</h4>
          </div>
          <p className="text-gray-600">
            <strong>地点：</strong>{schedule.dinner.location}
          </p>
          <p className="text-gray-600">
            <strong>推荐：</strong>{schedule.dinner.suggestion}
          </p>
          {schedule.dinner.address && (
            <p className="text-gray-600">
              <strong>地址：</strong>{schedule.dinner.address}
            </p>
          )}
          {schedule.dinner.tips && (
            <p className="text-gray-500 text-sm mt-2 italic">
              💡 {schedule.dinner.tips}
            </p>
          )}
        </motion.div>
      )}

      {/* Divider */}
      <div className="my-16 flex items-center gap-4">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
        <div className="w-2 h-2 rounded-full bg-gray-300" />
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
      </div>
    </div>
  );
}

// 固定侧边导航
function SideNav({ activeDay, onDayClick }: { activeDay: number; onDayClick: (day: number) => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden lg:block"
    >
      <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-3 border border-gray-100">
        <div className="flex flex-col gap-1">
          {tripSchedule.map((schedule) => {
            const isActive = activeDay === schedule.day;
            const cityColor = cityColors[schedule.city] || '#FFB800';
            
            return (
              <button
                key={schedule.day}
                onClick={() => onDayClick(schedule.day)}
                className={`relative flex items-center gap-2 px-3 py-2 rounded-xl transition-all duration-300 ${
                  isActive ? 'bg-gray-100' : 'hover:bg-gray-50'
                }`}
              >
                {/* Day indicator */}
                <div 
                  className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold transition-all ${
                    isActive ? 'text-white' : 'text-gray-600 bg-gray-100'
                  }`}
                  style={isActive ? { backgroundColor: cityColor } : {}}
                >
                  {schedule.day}
                </div>
                
                {/* Date */}
                <div className={`text-xs transition-all ${isActive ? 'opacity-100' : 'opacity-60'}`}>
                  <div className="font-medium text-gray-900">{formatDate(schedule.date)}</div>
                  <div className="text-gray-500">{schedule.weekday.slice(2)}</div>
                </div>

                {/* Active indicator line */}
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 rounded-full"
                    style={{ backgroundColor: cityColor }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

// 每天的关键词映射
const dayKeywords: Record<number, string> = {
  1: '接机',
  2: '盖蒂',
  3: '环球',
  4: '购物',
  5: '海滩',
  6: '动物园',
  7: '航母',
  8: 'Vegas',
  9: 'Vegas',
  10: '飞纽约',
  11: '自由女神',
  12: '博物馆+联合国',
  13: '大都会',
  14: '去DC火车',
  15: '白宫+博物馆',
  16: '国会+潮汐湖',
  17: '返凤凰城',
  25: '返程'
};

// 移动端底部导航
function MobileNav({ activeDay, onDayClick }: { activeDay: number; onDayClick: (day: number) => void }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 safe-area-inset-bottom">
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-1 p-2 min-w-max">
          {tripSchedule.map((schedule) => {
            const isActive = activeDay === schedule.day;
            const cityColor = cityColors[schedule.city] || '#FFB800';
            const keyword = dayKeywords[schedule.day] || '';
            
            return (
              <button
                key={schedule.day}
                onClick={() => onDayClick(schedule.day)}
                className={`flex flex-col items-center px-2 py-1.5 rounded-xl transition-all min-w-[52px] ${
                  isActive ? 'bg-gray-100' : ''
                }`}
              >
                <div 
                  className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold ${
                    isActive ? 'text-white' : 'text-gray-600 bg-gray-100'
                  }`}
                  style={isActive ? { backgroundColor: cityColor } : {}}
                >
                  {schedule.day}
                </div>
                <span className="text-[10px] text-gray-400 mt-0.5">{schedule.weekday.replace('星期', '')}</span>
                <span className={`text-[10px] font-medium mt-0.5 ${isActive ? 'text-gray-700' : 'text-gray-500'}`}>
                  {keyword}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// 返回顶部按钮
function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!show) return null;

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      onClick={scrollToTop}
      className="fixed bottom-20 lg:bottom-8 right-4 z-30 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-gray-600 hover:text-gray-900 hover:shadow-xl transition-all"
    >
      <ChevronUp className="w-6 h-6" />
    </motion.button>
  );
}

// 主组件
export default function VerticalTimeline() {
  const [activeDay, setActiveDay] = useState(0);
  const dayRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  // 监听滚动更新当前天数 - 修复对齐问题
  useEffect(() => {
    const handleScroll = () => {
      // 获取section的顶部位置
      const sectionTop = sectionRef.current?.offsetTop || 0;
      const scrollPosition = window.scrollY;
      
      // 只有当滚动到section区域时才更新activeDay
      if (scrollPosition < sectionTop - 200) {
        setActiveDay(0);
        return;
      }
      
      // 找到当前可见的天数
      for (let i = dayRefs.current.length - 1; i >= 0; i--) {
        const ref = dayRefs.current[i];
        if (ref) {
          const refTop = ref.offsetTop;
          // 当元素顶部进入视口上方150px时认为是当前天
          if (scrollPosition >= refTop - 150) {
            // dayRefs索引是0-9，但tripSchedule的day是1-10，所以需要i+1
            setActiveDay(i + 1);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 点击导航跳转到指定天
  const handleDayClick = (day: number) => {
    // day是1-10，但dayRefs索引是0-9，所以需要day-1
    const ref = dayRefs.current[day - 1];
    if (ref) {
      const offset = 100; // 顶部偏移量
      const elementPosition = ref.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="schedule" ref={sectionRef} className="py-20 bg-[#FFFCF2]">
      <div className="container max-w-4xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#FFB800]/10 px-4 py-2 rounded-full mb-4">
            <Calendar className="w-5 h-5 text-[#FFB800]" />
            <span className="text-[#E85D04] font-medium">详细行程</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4">
            每日安排
          </h2>
          <p className="text-lg text-[#666] max-w-2xl mx-auto">
            向下滚动浏览所有行程，或使用右侧导航快速跳转
          </p>
        </motion.div>

        {/* Timeline Content */}
        <div className="relative">
          {tripSchedule.map((schedule, index) => (
            <DayCard
              key={schedule.day}
              schedule={schedule}
              dayRef={(el: HTMLDivElement | null) => { dayRefs.current[index] = el; }}
            />
          ))}
        </div>
      </div>

      {/* Side Navigation */}
      <SideNav activeDay={activeDay} onDayClick={handleDayClick} />
      
      {/* Mobile Navigation */}
      <MobileNav activeDay={activeDay} onDayClick={handleDayClick} />
      
      {/* Back to Top */}
      <BackToTop />
    </section>
  );
}
