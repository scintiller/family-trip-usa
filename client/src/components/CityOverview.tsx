// California Sunshine Design - City Overview Component
import { motion } from 'framer-motion';
import { cities } from '@/data/tripData';

export default function CityOverview() {
  return (
    <section className="py-20 bg-[#FFFCF2]">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4">
            五城之旅
          </h2>
          <p className="text-lg text-[#666] max-w-2xl mx-auto">
            从阳光明媚的洛杉矶出发，途经海滨圣地亚哥、不夜城拉斯维加斯，经世界之都纽约，最终抵达美国首都华盛顿
          </p>
        </motion.div>

        {/* City Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
          {cities.map((city, index) => (
            <motion.div
              key={city.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={city.heroImage}
                  alt={city.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                {/* City Badge */}
                <div
                  className="absolute top-4 left-4 px-3 py-1 rounded-full text-white text-sm font-medium"
                  style={{ backgroundColor: city.color }}
                >
                  {city.days}天
                </div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{city.name}</h3>
                    <p className="text-white/80 text-sm">{city.nameEn}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-white/90 font-medium">{city.dates}</p>
                  </div>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
                <p className="text-white text-center text-lg leading-relaxed">
                  {city.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Route Line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 flex items-center justify-center gap-4"
        >
          {cities.map((city, index) => (
            <div key={city.id} className="flex items-center">
              <div
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: city.color }}
              />
              {index < cities.length - 1 && (
                <div className="w-24 md:w-32 h-0.5 bg-gradient-to-r from-current to-current mx-2" style={{
                  backgroundImage: `linear-gradient(to right, ${city.color}, ${cities[index + 1].color})`
                }} />
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
