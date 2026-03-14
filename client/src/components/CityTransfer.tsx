// California Sunshine Design - City Transfer Component
import { motion } from 'framer-motion';
import { ArrowRight, Car, Clock, MapPin } from 'lucide-react';
import { cityTransfers } from '@/data/tripData';

export default function CityTransfer() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#E85D04]/10 px-4 py-2 rounded-full mb-4">
            <Car className="w-5 h-5 text-[#E85D04]" />
            <span className="text-[#E85D04] font-medium">城市间交通</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4">
            自驾路线
          </h2>
          <p className="text-lg text-[#666] max-w-2xl mx-auto">
            沿着加州海岸和沙漠公路，体验美国西部的壮丽风光
          </p>
        </motion.div>

        {/* Transfer Cards */}
        <div className="max-w-4xl mx-auto space-y-6">
          {cityTransfers.map((transfer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-gradient-to-r from-[#f8f6f1] to-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col md:flex-row items-center gap-6">
                {/* From */}
                <div className="flex-1 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                    <MapPin className="w-5 h-5 text-[#FFB800]" />
                    <span className="text-sm text-[#666]">出发</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#1a1a1a]">
                    {transfer.from}
                  </h3>
                </div>

                {/* Arrow & Info */}
                <div className="flex flex-col items-center gap-2">
                  <div className="flex items-center gap-3">
                    <div className="w-16 h-0.5 bg-gradient-to-r from-[#FFB800] to-[#E85D04] hidden md:block" />
                    <div className="w-12 h-12 bg-[#E85D04] rounded-full flex items-center justify-center">
                      <ArrowRight className="w-6 h-6 text-white" />
                    </div>
                    <div className="w-16 h-0.5 bg-gradient-to-r from-[#E85D04] to-[#0077B6] hidden md:block" />
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1 text-[#666]">
                      <Clock className="w-4 h-4 text-[#0077B6]" />
                      <span>{transfer.driveTime}</span>
                    </div>
                    <span className="text-[#999]">|</span>
                    <span className="text-[#666]">{transfer.distance}</span>
                  </div>
                </div>

                {/* To */}
                <div className="flex-1 text-center md:text-right">
                  <div className="flex items-center justify-center md:justify-end gap-2 mb-2">
                    <MapPin className="w-5 h-5 text-[#0077B6]" />
                    <span className="text-sm text-[#666]">到达</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#1a1a1a]">
                    {transfer.to}
                  </h3>
                </div>
              </div>

              {/* Date */}
              <div className="mt-4 pt-4 border-t border-[#e5e5e5] text-center">
                <span className="text-sm text-[#666]">
                  📅 {transfer.date}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 max-w-2xl mx-auto text-center"
        >
          <div className="bg-[#FFB800]/10 rounded-2xl p-6">
            <h4 className="font-bold text-[#1a1a1a] mb-2">🚗 自驾小贴士</h4>
            <ul className="text-sm text-[#666] space-y-1">
              <li>• 建议提前在Google Maps下载离线地图</li>
              <li>• 长途驾驶时每2小时休息一次</li>
              <li>• 加州高速限速65-70mph，注意遵守交通规则</li>
              <li>• 沙漠路段注意补充水分和防晒</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
