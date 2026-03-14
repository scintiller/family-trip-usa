// California Sunshine Design - Navigation Component
import { motion } from 'framer-motion';
import { Calendar, Home, Hotel, Menu, X, DollarSign, Ticket, BarChart3 } from 'lucide-react';
import { useState, useEffect } from 'react';

const navItems = [
  { id: 'home', label: '首页', icon: Home, href: '#' },
  { id: 'schedule', label: '行程', icon: Calendar, href: '#schedule' },
  { id: 'hotels', label: '住宿', icon: Hotel, href: '#hotels' },
  { id: 'tickets', label: '票务', icon: Ticket, href: '#tickets' },
  { id: 'expense-viz', label: '支出', icon: BarChart3, href: '#expense-viz' },
  { id: 'expenses', label: '明细', icon: DollarSign, href: '#expenses' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-[#FFB800] to-[#E85D04] rounded-xl flex items-center justify-center">
                <span className="text-white text-xl">✈️</span>
              </div>
              <div className={`hidden sm:block ${isScrolled ? 'text-[#1a1a1a]' : 'text-white'}`}>
                <p className="font-bold text-lg leading-tight">美国之旅</p>
                <p className="text-xs opacity-80">2026 California Trip</p>
              </div>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                    isScrolled
                      ? 'text-[#666] hover:text-[#1a1a1a] hover:bg-[#f8f6f1]'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span className="font-medium">{item.label}</span>
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden w-10 h-10 flex items-center justify-center rounded-full transition-colors ${
                isScrolled
                  ? 'text-[#1a1a1a] hover:bg-[#f8f6f1]'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          y: isMobileMenuOpen ? 0 : -20,
          pointerEvents: isMobileMenuOpen ? 'auto' : 'none',
        }}
        transition={{ duration: 0.2 }}
        className="fixed top-16 left-0 right-0 z-40 md:hidden"
      >
        <div className="container">
          <div className="bg-white rounded-2xl shadow-xl p-4 mt-2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#666] hover:text-[#1a1a1a] hover:bg-[#f8f6f1] transition-colors"
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </a>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/20 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
}
