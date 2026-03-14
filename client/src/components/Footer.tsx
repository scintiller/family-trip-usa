// California Sunshine Design - Footer Component
import { Heart, Plane } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white py-12">
      <div className="container">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-[#FFB800] to-[#E85D04] rounded-xl flex items-center justify-center">
              <Plane className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="font-bold text-xl">美国家庭之旅</p>
              <p className="text-white/60 text-sm">2026 USA Family Trip</p>
            </div>
          </div>

          {/* Trip Summary */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-white/80">
            <div className="flex items-center gap-2">
              <span className="text-[#FFB800]">📍</span>
              <span>洛杉矶</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#0077B6]">📍</span>
              <span>圣地亚哥</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#E85D04]">📍</span>
              <span>拉斯维加斯</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#1E40AF]">📍</span>
              <span>纽约</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#DC2626]">📍</span>
              <span>华盛顿</span>
            </div>
          </div>

          {/* Divider */}
          <div className="w-24 h-1 bg-gradient-to-r from-[#FFB800] via-[#E85D04] to-[#0077B6] rounded-full mb-8" />

          {/* Message */}
          <p className="text-white/60 mb-4 max-w-md">
            愿这次旅行充满阳光与欢笑，留下美好的家庭回忆 ✨
          </p>

          {/* Copyright */}
          <p className="text-white/40 text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-400 fill-red-400" /> for Family
          </p>
        </div>
      </div>
    </footer>
  );
}
