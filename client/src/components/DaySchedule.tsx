// California Sunshine Design - Day Schedule Component
import { motion } from 'framer-motion';
import { Calendar, Car, Clock, MapPin, Star, Utensils } from 'lucide-react';
import { useState } from 'react';
import { DaySchedule as DayScheduleType, tripSchedule } from '@/data/tripData';
import OptionCards from './OptionCards';
import { MapView } from './Map';

interface DayCardProps {
  schedule: DayScheduleType;
  isActive: boolean;
  onClick: () => void;
}

function DayCard({ schedule, isActive, onClick }: DayCardProps) {
  const getCityColor = (city: string) => {
    if (city.includes('Los Angeles')) return '#FFB800';
    if (city.includes('San Diego')) return '#0077B6';
    if (city.includes('Las Vegas')) return '#E85D04';
    return '#FFB800';
  };

  const color = getCityColor(schedule.city);

  return (
    <motion.button
      onClick={onClick}
      className={`flex-shrink-0 w-24 md:w-28 p-3 rounded-xl transition-all duration-300 ${
        isActive
          ? 'bg-white shadow-lg scale-105'
          : 'bg-white/50 hover:bg-white/80'
      }`}
      whileHover={{ scale: isActive ? 1.05 : 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div
        className="w-full h-1 rounded-full mb-2"
        style={{ backgroundColor: color }}
      />
      <p className="text-xs text-[#666] mb-1">{schedule.weekday}</p>
      <p className="text-sm font-bold text-[#1a1a1a]">Day {schedule.day}</p>
      <p className="text-xs text-[#666] mt-1">
        {schedule.date.split('-').slice(1).join('/')}
      </p>
    </motion.button>
  );
}

export default function DayScheduleSection() {
  const [activeDay, setActiveDay] = useState(1);
  const currentSchedule = tripSchedule.find(s => s.day === activeDay) || tripSchedule[0];
  const [showMap, setShowMap] = useState(false);
  const [mapQuery, setMapQuery] = useState('');

  const getCityColor = (city: string) => {
    if (city.includes('Los Angeles')) return '#FFB800';
    if (city.includes('San Diego')) return '#0077B6';
    if (city.includes('Las Vegas')) return '#E85D04';
    return '#FFB800';
  };

  const handleShowMap = (query: string) => {
    setMapQuery(query);
    setShowMap(true);
  };

  return (
    <section id="schedule" className="py-20 bg-[#f8f6f1]">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-[#FFB800]/10 px-4 py-2 rounded-full mb-4">
            <Calendar className="w-5 h-5 text-[#FFB800]" />
            <span className="text-[#FFB800] font-medium">详细行程</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4">
            每日安排
          </h2>
          <p className="text-lg text-[#666] max-w-2xl mx-auto">
            点击日期查看当天详细行程，每个景点都配有图片和解说
          </p>
        </motion.div>

        {/* Day Selector */}
        <div className="mb-8 overflow-x-auto pb-4">
          <div className="flex gap-3 min-w-max px-2">
            {tripSchedule.map((schedule) => (
              <DayCard
                key={schedule.day}
                schedule={schedule}
                isActive={activeDay === schedule.day}
                onClick={() => setActiveDay(schedule.day)}
              />
            ))}
          </div>
        </div>

        {/* Current Day Content */}
        <motion.div
          key={activeDay}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl shadow-xl overflow-hidden"
        >
          {/* Day Header */}
          <div
            className="p-6 md:p-8"
            style={{ backgroundColor: getCityColor(currentSchedule.city) + '15' }}
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span
                    className="px-3 py-1 rounded-full text-white text-sm font-medium"
                    style={{ backgroundColor: getCityColor(currentSchedule.city) }}
                  >
                    {currentSchedule.city}
                  </span>
                  <span className="text-[#666]">{currentSchedule.date} {currentSchedule.weekday}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-2">
                  {currentSchedule.title}
                </h3>
                <p className="text-[#666]">{currentSchedule.subtitle}</p>
              </div>
              <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full">
                <Car className="w-4 h-4 text-[#666]" />
                <span className="text-sm text-[#666]">{currentSchedule.mode}</span>
              </div>
            </div>
          </div>

          {/* Attractions */}
          <div className="p-6 md:p-8">
            <div className="space-y-6">
              {currentSchedule.attractions.map((attraction, index) => (
                <motion.div
                  key={attraction.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col md:flex-row gap-6 p-4 rounded-2xl hover:bg-[#f8f6f1] transition-colors"
                >
                  {/* Image */}
                  <div className="md:w-72 flex-shrink-0">
                    <div className="relative h-48 md:h-full rounded-xl overflow-hidden">
                      <img
                        src={attraction.image}
                        alt={attraction.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-[#FFB800]" />
                          <span className="text-xs font-medium text-[#1a1a1a]">{attraction.time}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div>
                        <h4 className="text-xl font-bold text-[#1a1a1a] mb-1">
                          {attraction.name}
                        </h4>
                        <p className="text-sm text-[#666]">{attraction.nameEn}</p>
                      </div>
                      <button
                        onClick={() => handleShowMap(attraction.mapQuery)}
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-[#0077B6]/10 hover:bg-[#0077B6]/20 rounded-full transition-colors"
                      >
                        <MapPin className="w-4 h-4 text-[#0077B6]" />
                        <span className="text-sm text-[#0077B6] font-medium">地图</span>
                      </button>
                    </div>

                    <p className="text-[#444] mb-4 leading-relaxed">
                      {attraction.description}
                    </p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {attraction.highlights.map((highlight, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1 px-3 py-1 bg-[#FFB800]/10 text-[#996d00] text-sm rounded-full"
                        >
                          <Star className="w-3 h-3" />
                          {highlight}
                        </span>
                      ))}
                    </div>

                    {/* Tips */}
                    {attraction.tips && (
                      <div className="mt-3 p-3 bg-[#E85D04]/10 rounded-lg">
                        <p className="text-sm text-[#E85D04]">
                          <span className="font-medium">💡 小贴士：</span> {attraction.tips}
                        </p>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Options for Day 2 */}
            {currentSchedule.isOptionDay && currentSchedule.options && (
              <OptionCards options={currentSchedule.options} />
            )}

            {/* Dinner */}
            {currentSchedule.dinner && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-8 p-6 bg-gradient-to-r from-[#E85D04]/10 to-[#FFB800]/10 rounded-2xl"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-[#E85D04] rounded-full flex items-center justify-center">
                    <Utensils className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-[#1a1a1a]">晚餐安排</h4>
                </div>
                <p className="text-[#444]">
                  <span className="font-medium">地点：</span>{currentSchedule.dinner.location}
                </p>
                <p className="text-[#666] mt-1">
                  <span className="font-medium">推荐：</span>{currentSchedule.dinner.suggestion}
                </p>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Map Modal */}
        {showMap && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-2xl w-full max-w-4xl h-[70vh] overflow-hidden shadow-2xl"
            >
              <div className="flex items-center justify-between p-4 border-b">
                <h3 className="text-lg font-bold text-[#1a1a1a]">📍 {mapQuery}</h3>
                <button
                  onClick={() => setShowMap(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
                >
                  ✕
                </button>
              </div>
              <div className="h-[calc(100%-60px)]">
                <MapView
                  onMapReady={(map: google.maps.Map) => {
                    const geocoder = new google.maps.Geocoder();
                    geocoder.geocode({ address: mapQuery }, (results, status) => {
                      if (status === 'OK' && results && results[0]) {
                        map.setCenter(results[0].geometry.location);
                        map.setZoom(15);
                        new google.maps.Marker({
                          map,
                          position: results[0].geometry.location,
                          title: mapQuery
                        });
                      }
                    });
                  }}
                />
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}
