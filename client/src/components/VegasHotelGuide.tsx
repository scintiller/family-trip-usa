// 拉斯维加斯特色酒店指南组件
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Star, Clock, Camera, DollarSign, ChevronDown, ChevronUp, ExternalLink, X, ChevronLeft, ChevronRight, Footprints, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { vegasHotels, vegasAreas, VegasHotel, chineseNewYearHotels } from '@/data/vegasHotels';

// 图片画廊组件
function ImageGallery({ images, onClose }: { images: string[]; onClose: () => void }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white/80 hover:text-white p-2"
      >
        <X className="w-8 h-8" />
      </button>
      
      <button
        onClick={(e) => { e.stopPropagation(); prevImage(); }}
        className="absolute left-4 text-white/80 hover:text-white p-2"
      >
        <ChevronLeft className="w-10 h-10" />
      </button>
      
      <img
        src={images[currentIndex]}
        alt=""
        className="max-w-[90vw] max-h-[85vh] object-contain"
        onClick={(e) => e.stopPropagation()}
      />
      
      <button
        onClick={(e) => { e.stopPropagation(); nextImage(); }}
        className="absolute right-4 text-white/80 hover:text-white p-2"
      >
        <ChevronRight className="w-10 h-10" />
      </button>
      
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80">
        {currentIndex + 1} / {images.length}
      </div>
    </motion.div>
  );
}

// 酒店详情页组件
function HotelDetailPage({ hotel, onClose }: { hotel: VegasHotel; onClose: () => void }) {
  const [galleryImages, setGalleryImages] = useState<string[] | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // 收集所有图片
  const allImages = [
    ...hotel.images,
    ...hotel.mustSee.flatMap(item => item.images)
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 z-40 overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        className="min-h-screen py-8 px-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* 头部图片 */}
          <div className="relative">
            <div className="aspect-[21/9] overflow-hidden">
              <img
                src={hotel.images[activeImageIndex]}
                alt={hotel.name}
                className="w-full h-full object-cover cursor-pointer"
                onClick={() => setGalleryImages(hotel.images)}
              />
            </div>
            
            {/* 关闭按钮 */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* 图片缩略图 */}
            <div className="absolute bottom-4 left-4 right-4 flex gap-2 overflow-x-auto pb-2">
              {hotel.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                    idx === activeImageIndex ? 'border-white' : 'border-transparent opacity-70'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* 春节标签 */}
            {hotel.chineseNewYear?.hasEvent && (
              <div className="absolute top-4 left-4 bg-red-600 text-white px-4 py-2 rounded-full flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span className="font-medium">春节特别活动</span>
              </div>
            )}
          </div>

          {/* 内容区域 */}
          <div className="p-8">
            {/* 标题和基本信息 */}
            <div className="mb-6">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    {hotel.name}
                    <span className="text-gray-400 font-normal text-xl ml-3">{hotel.nameEn}</span>
                  </h2>
                  <p className="text-orange-600 font-medium mt-1">{hotel.theme}</p>
                </div>
                <div className="flex items-center gap-1 bg-yellow-50 px-3 py-1 rounded-full">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-bold text-gray-900">{hotel.rating}</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 text-sm text-gray-600 mt-3">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <span>{hotel.address}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Footprints className="w-4 h-4 text-gray-400" />
                  <span>距MGM Grand {hotel.walkingFromMGM.distance}，{hotel.walkingFromMGM.time}</span>
                </div>
              </div>
            </div>

            {/* 亮点标签 */}
            <div className="flex flex-wrap gap-2 mb-6">
              {hotel.highlights.map((highlight, idx) => (
                <span
                  key={idx}
                  className="bg-orange-50 text-orange-700 px-4 py-2 rounded-full text-sm font-medium"
                >
                  {highlight}
                </span>
              ))}
            </div>

            {/* 详细描述 */}
            <div className="mb-8">
              <p className="text-gray-700 leading-relaxed">{hotel.description}</p>
            </div>

            {/* 春节特别活动 */}
            {hotel.chineseNewYear?.hasEvent && (
              <div className="mb-8 bg-red-50 rounded-2xl p-6 border border-red-100">
                <h3 className="text-xl font-bold text-red-800 mb-3 flex items-center gap-2">
                  🧧 2026春节特别活动
                </h3>
                <p className="text-red-700 mb-4">{hotel.chineseNewYear.description}</p>
                <div className="flex flex-wrap gap-2">
                  {hotel.chineseNewYear.highlights.map((item, idx) => (
                    <span key={idx} className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* 必看项目 */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Camera className="w-5 h-5 text-orange-500" />
                必看项目
              </h3>
              <div className="space-y-6">
                {hotel.mustSee.map((item, idx) => (
                  <div key={idx} className="bg-gray-50 rounded-xl p-5">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-gray-900">{item.name}</h4>
                      {item.price && (
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          item.price === '免费' || item.price.includes('免费')
                            ? 'bg-green-100 text-green-700'
                            : 'bg-orange-100 text-orange-700'
                        }`}>
                          {item.price}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                    
                    {/* 项目图片 */}
                    {item.images.length > 0 && (
                      <div className="flex gap-2 overflow-x-auto pb-2">
                        {item.images.map((img, imgIdx) => (
                          <button
                            key={imgIdx}
                            onClick={() => setGalleryImages(item.images)}
                            className="flex-shrink-0 w-32 h-24 rounded-lg overflow-hidden hover:opacity-90 transition-opacity"
                          >
                            <img src={img} alt="" className="w-full h-full object-cover" />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* 免费项目 */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-green-500" />
                免费项目
              </h3>
              <div className="grid md:grid-cols-2 gap-3">
                {hotel.freeAttractions.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 bg-green-50 rounded-lg p-3">
                    <span className="text-green-500 mt-0.5">✓</span>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 底部操作 */}
            <div className="flex flex-wrap gap-4 pt-6 border-t border-gray-100">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(hotel.mapQuery)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-colors"
              >
                <MapPin className="w-5 h-5" />
                在Google地图中查看
                <ExternalLink className="w-4 h-4" />
              </a>
              <button
                onClick={onClose}
                className="px-6 py-3 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors"
              >
                返回列表
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* 图片画廊 */}
      <AnimatePresence>
        {galleryImages && (
          <ImageGallery images={galleryImages} onClose={() => setGalleryImages(null)} />
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// 单个酒店卡片组件
function HotelCard({ hotel, onClick }: { hotel: VegasHotel; onClick: () => void }) {
  const [activeImage, setActiveImage] = useState(0);
  const hasChineseNewYear = chineseNewYearHotels.includes(hotel.id);

  return (
    <motion.div
      layout
      className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 cursor-pointer hover:shadow-xl transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
    >
      {/* 图片区域 */}
      <div className="relative">
        <div className="aspect-[16/10] overflow-hidden">
          <img
            src={hotel.images[activeImage]}
            alt={hotel.name}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        
        {/* 图片指示器 */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {hotel.images.slice(0, 5).map((_, idx) => (
            <button
              key={idx}
              onClick={(e) => { e.stopPropagation(); setActiveImage(idx); }}
              className={`w-2 h-2 rounded-full transition-all ${
                idx === activeImage ? 'bg-white w-6' : 'bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* 评分标签 */}
        <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full flex items-center gap-1">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span className="font-semibold">{hotel.rating}</span>
        </div>

        {/* 主题标签 */}
        <div className="absolute top-3 left-3 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
          {hotel.theme}
        </div>

        {/* 春节标签 */}
        {hasChineseNewYear && (
          <div className="absolute bottom-3 right-3 bg-red-600 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
            🧧 春节活动
          </div>
        )}
      </div>

      {/* 内容区域 */}
      <div className="p-5">
        {/* 标题和位置 */}
        <div className="mb-3">
          <h3 className="text-xl font-bold text-gray-900 mb-1">
            {hotel.name}
            <span className="text-gray-400 font-normal text-base ml-2">{hotel.nameEn}</span>
          </h3>
          <div className="flex items-center gap-4 text-gray-500 text-sm">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>{hotel.location}</span>
            </div>
            <div className="flex items-center gap-1">
              <Footprints className="w-4 h-4" />
              <span>{hotel.walkingFromMGM.time}</span>
            </div>
          </div>
        </div>

        {/* 亮点标签 */}
        <div className="flex flex-wrap gap-2 mb-4">
          {hotel.highlights.slice(0, 3).map((highlight, idx) => (
            <span
              key={idx}
              className="bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-sm"
            >
              {highlight}
            </span>
          ))}
        </div>

        {/* 简介 */}
        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
          {hotel.description}
        </p>

        {/* 查看详情按钮 */}
        <button className="w-full flex items-center justify-center gap-2 py-2 text-orange-600 hover:text-orange-700 font-medium transition-colors border-t border-gray-100 pt-3">
          <span>点击查看详情</span>
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </motion.div>
  );
}

// 主组件
export default function VegasHotelGuide() {
  const [selectedHotel, setSelectedHotel] = useState<VegasHotel | null>(null);
  const [selectedArea, setSelectedArea] = useState<string | null>(null);
  const [showChineseNewYearOnly, setShowChineseNewYearOnly] = useState(false);

  let filteredHotels = vegasHotels;
  
  if (selectedArea) {
    const area = vegasAreas.find(a => a.id === selectedArea);
    filteredHotels = filteredHotels.filter(hotel => area?.hotels.includes(hotel.id));
  }
  
  if (showChineseNewYearOnly) {
    filteredHotels = filteredHotels.filter(hotel => chineseNewYearHotels.includes(hotel.id));
  }

  return (
    <div className="bg-gradient-to-b from-orange-50 to-white py-8">
      <div className="container">
        {/* 标题 */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            🎰 拉斯维加斯酒店指南
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            拉斯维加斯的酒店不仅仅是住宿，每一家都是独特的主题乐园。点击卡片查看详细信息、更多图片和必看项目。
          </p>
          <p className="text-orange-600 font-medium mt-2">
            📍 所有距离均以您入住的MGM Grand为起点计算
          </p>
        </div>

        {/* 筛选区域 */}
        <div className="flex flex-wrap justify-center gap-3 mb-4">
          <button
            onClick={() => setSelectedArea(null)}
            className={`px-4 py-2 rounded-full font-medium transition-all ${
              selectedArea === null
                ? 'bg-orange-500 text-white shadow-lg'
                : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            全部酒店
          </button>
          {vegasAreas.map(area => (
            <button
              key={area.id}
              onClick={() => setSelectedArea(area.id)}
              className={`px-4 py-2 rounded-full font-medium transition-all ${
                selectedArea === area.id
                  ? 'bg-orange-500 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {area.name}
            </button>
          ))}
        </div>

        {/* 春节筛选 */}
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setShowChineseNewYearOnly(!showChineseNewYearOnly)}
            className={`px-4 py-2 rounded-full font-medium transition-all flex items-center gap-2 ${
              showChineseNewYearOnly
                ? 'bg-red-600 text-white shadow-lg'
                : 'bg-white text-red-600 hover:bg-red-50 border border-red-200'
            }`}
          >
            🧧 只看春节活动酒店
          </button>
        </div>

        {/* 区域说明 */}
        {selectedArea && (
          <div className="text-center mb-6">
            <p className="text-gray-500 text-sm">
              {vegasAreas.find(a => a.id === selectedArea)?.description}
            </p>
          </div>
        )}

        {/* 酒店卡片网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredHotels.map(hotel => (
            <HotelCard
              key={hotel.id}
              hotel={hotel}
              onClick={() => setSelectedHotel(hotel)}
            />
          ))}
        </div>

        {/* 游览建议 */}
        <div className="mt-10 bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-4">💡 游览建议</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">🌅 白天游览路线</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                从MGM Grand出发，向南步行10分钟到Excalibur和Luxor看金字塔，再向北经过纽约纽约、
                巴黎酒店、百乐宫植物园，最后到威尼斯人看运河。全程约3小时。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">🌃 夜间游览路线</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                夜间必看百乐宫音乐喷泉（每15分钟一场）、巴黎酒店埃菲尔铁塔灯光、
                永利酒店Lake of Dreams水上秀。如果时间充裕，可打车去Fremont Street看LED天幕灯光秀。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">🚶 步行提示</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Strip全长约6.8公里，建议穿舒适的鞋子。酒店之间有空调连廊和人行天桥，
                可以避免烈日暴晒。也可以乘坐Deuce公交车（$8/2小时）或打Uber/Lyft。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">🧧 春节特别推荐</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                2026年春节（2月17日）期间，百乐宫植物园有马年主题展览，云顶世界有舞狮舞龙表演。
                建议2月5日-7日期间去这两家酒店感受春节氛围！
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 酒店详情页 */}
      <AnimatePresence>
        {selectedHotel && (
          <HotelDetailPage hotel={selectedHotel} onClose={() => setSelectedHotel(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}
