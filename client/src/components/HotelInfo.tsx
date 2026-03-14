// California Sunshine Design - Hotel Info Component
import { motion } from 'framer-motion';
import { Building2, Calendar, MapPin, Hash } from 'lucide-react';
import { hotels } from '@/data/tripData';

export default function HotelInfo() {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return `${date.getMonth() + 1}/${date.getDate()}`;
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#FFFCF2] to-white">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#0077B6]/10 px-4 py-2 rounded-full mb-4">
            <Building2 className="w-5 h-5 text-[#0077B6]" />
            <span className="text-[#0077B6] font-medium">住宿安排</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4">
            入住酒店
          </h2>
          <p className="text-lg text-[#666] max-w-2xl mx-auto">
            全程入住舒适的品牌酒店，为旅途提供温馨的休息空间
          </p>
        </motion.div>

        {/* Hotel Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {hotels.map((hotel, index) => (
            <motion.div
              key={hotel.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                
                {/* City Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-[#1a1a1a] font-medium text-sm">{hotel.city}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-3 group-hover:text-[#0077B6] transition-colors">
                  {hotel.name}
                </h3>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[#666]">
                    <Calendar className="w-4 h-4 text-[#FFB800]" />
                    <span className="text-sm">
                      {formatDate(hotel.checkIn)} - {formatDate(hotel.checkOut)}
                    </span>
                  </div>
                  <div className="flex items-start gap-2 text-[#666]">
                    <MapPin className="w-4 h-4 text-[#E85D04] mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{hotel.address}</span>
                  </div>
                  {hotel.confirmationCode && (
                    <div className="flex items-center gap-2 text-[#666]">
                      <Hash className="w-4 h-4 text-[#0077B6]" />
                      <span className="text-sm font-mono">确认号: {hotel.confirmationCode}</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
