// California Sunshine Design - Hero Component
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663316452927/ltSxHCRVGMXgTKDk.jpg"
          alt="California Coast"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center text-center px-4 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full mb-6"
          >
            <span className="w-2 h-2 bg-[#FFB800] rounded-full animate-pulse" />
            <span className="text-white/90 text-sm font-medium">2026年1月29日 - 2月22日</span>
          </motion.div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 tracking-tight">
            <span className="block">美国东西海岸</span>
            <span className="block mt-2 bg-gradient-to-r from-[#FFB800] via-[#E85D04] to-[#0077B6] bg-clip-text text-transparent">
              家庭之旅
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/80 mb-8 font-light">
            洛杉矶 · 圣地亚哥 · 拉斯维加斯 · 纽约 · 华盛顿
          </p>

          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-10"
          >
            <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm px-5 py-3 rounded-xl">
              <Calendar className="w-5 h-5 text-[#FFB800]" />
              <span className="text-white font-medium">25天行程</span>
            </div>
            <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm px-5 py-3 rounded-xl">
              <MapPin className="w-5 h-5 text-[#0077B6]" />
              <span className="text-white font-medium">5座城市</span>
            </div>
            <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm px-5 py-3 rounded-xl">
              <Users className="w-5 h-5 text-[#E85D04]" />
              <span className="text-white font-medium">家庭出游</span>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.a
            href="#schedule"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-[#FFB800] hover:bg-[#E5A600] text-[#1a1a1a] font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            查看完整行程
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-white rounded-full"
            />
          </div>
        </motion.div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120L48 110C96 100 192 80 288 70C384 60 480 60 576 65C672 70 768 80 864 85C960 90 1056 90 1152 85C1248 80 1344 70 1392 65L1440 60V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z"
            fill="#FFFCF2"
          />
        </svg>
      </div>
    </section>
  );
}
