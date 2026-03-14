// California Sunshine Design - Option Cards Component
import { motion } from 'framer-motion';
import { Car, CheckCircle, Star, Ticket, ExternalLink } from 'lucide-react';
import { DayOption } from '@/data/tripData';

interface OptionCardsProps {
  options: DayOption[];
}

export default function OptionCards({ options }: OptionCardsProps) {
  return (
    <div className="mt-10">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-[#0077B6] rounded-full flex items-center justify-center">
          <span className="text-white text-lg">🤔</span>
        </div>
        <div>
          <h4 className="text-xl font-bold text-[#1a1a1a]">父亲（及母亲）方案选择</h4>
          <p className="text-sm text-[#666]">根据父亲的体力与兴趣，任选其一</p>
        </div>
      </div>

      {/* Option Cards Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {options.map((option, index) => (
          <motion.div
            key={option.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`relative bg-white rounded-xl overflow-hidden border-2 transition-all duration-300 hover:shadow-lg ${
              option.recommended
                ? 'border-[#FFB800] shadow-md'
                : 'border-transparent hover:border-[#0077B6]/30'
            }`}
          >
            {/* Recommended Badge */}
            {option.recommended && (
              <div className="absolute top-3 right-3 z-10 flex items-center gap-1 bg-[#FFB800] px-2 py-1 rounded-full">
                <CheckCircle className="w-3 h-3 text-white" />
                <span className="text-xs font-medium text-white">推荐</span>
              </div>
            )}

            {/* Image */}
            <div className="relative h-36 overflow-hidden">
              <img
                src={option.image}
                alt={option.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3">
                <h5 className="text-white font-bold text-sm">{option.title}</h5>
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              <div className="flex items-center gap-2 text-[#666] text-sm mb-2">
                <Car className="w-4 h-4 text-[#0077B6]" />
                <span>{option.driveTime}</span>
              </div>
              
              <h6 className="font-semibold text-[#1a1a1a] mb-2 text-sm">
                {option.location}
              </h6>
              
              <p className="text-[#666] text-xs leading-relaxed mb-3 line-clamp-3">
                {option.description}
              </p>

              {/* Highlights */}
              <div className="flex flex-wrap gap-1 mb-3">
                {option.highlights.slice(0, 3).map((highlight, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-0.5 px-2 py-0.5 bg-[#f8f6f1] text-[#666] text-xs rounded-full"
                  >
                    <Star className="w-2.5 h-2.5 text-[#FFB800]" />
                    {highlight}
                  </span>
                ))}
              </div>

              {/* Ticket Info */}
              {option.ticket?.required && (
                <div className="p-2 bg-red-50 rounded-lg border border-red-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <Ticket className="w-3.5 h-3.5 text-red-500" />
                      <span className="text-xs font-medium text-red-600">需要购票</span>
                      {option.ticket.price && (
                        <span className="text-xs text-red-500">· {option.ticket.price}</span>
                      )}
                    </div>
                    {option.ticket.url && (
                      <a
                        href={option.ticket.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-0.5 text-xs text-blue-600 hover:text-blue-700"
                      >
                        购票
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Note */}
      <div className="mt-6 p-4 bg-[#0077B6]/10 rounded-xl">
        <p className="text-sm text-[#0077B6]">
          <span className="font-medium">📝 备注：</span> 
          如果母亲想休息，可留在 Glendale 逛街（Americana 商场环境极好）；如果想玩，随父亲车出发。
        </p>
      </div>
    </div>
  );
}
