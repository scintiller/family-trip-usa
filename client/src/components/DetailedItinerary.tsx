import { useState } from 'react';
import { Clock, MapPin, Lightbulb, ChevronDown, ChevronUp, Navigation, Star, Camera } from 'lucide-react';

interface ItineraryStop {
  id: string;
  order: number;
  name: string;
  nameEn: string;
  time: string;
  duration: string;
  description: string;
  highlights: string[];
  howToGetThere: string;
  tips: string;
  image: string;
  mustSee?: string[];
  animals?: string[];
}

interface DetailedItineraryProps {
  title: string;
  subtitle: string;
  stops: ItineraryStop[];
  tips?: { icon: string; title: string; description: string }[];
  comparison?: {
    item1: { name: string; nameEn: string; location: string; features: string[]; image: string };
    item2: { name: string; nameEn: string; location: string; features: string[]; image: string };
  };
  themeColor?: string;
}

export default function DetailedItinerary({ 
  title, 
  subtitle, 
  stops, 
  tips,
  comparison,
  themeColor = 'amber'
}: DetailedItineraryProps) {
  const [expandedStops, setExpandedStops] = useState<Set<string>>(new Set([stops[0]?.id]));
  const [activeTab, setActiveTab] = useState<'route' | 'tips' | 'compare'>('route');

  const toggleStop = (id: string) => {
    const newExpanded = new Set(expandedStops);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedStops(newExpanded);
  };

  const colorClasses = {
    amber: {
      bg: 'bg-amber-50',
      border: 'border-amber-200',
      text: 'text-amber-700',
      accent: 'bg-amber-500',
      light: 'bg-amber-100',
      hover: 'hover:bg-amber-100'
    },
    blue: {
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      text: 'text-blue-700',
      accent: 'bg-blue-500',
      light: 'bg-blue-100',
      hover: 'hover:bg-blue-100'
    },
    teal: {
      bg: 'bg-teal-50',
      border: 'border-teal-200',
      text: 'text-teal-700',
      accent: 'bg-teal-500',
      light: 'bg-teal-100',
      hover: 'hover:bg-teal-100'
    }
  };

  const colors = colorClasses[themeColor as keyof typeof colorClasses] || colorClasses.amber;

  return (
    <div className={`${colors.bg} rounded-2xl p-6 mt-6`}>
      {/* Header */}
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-slate-800">{title}</h3>
        <p className="text-slate-600 mt-1">{subtitle}</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6 justify-center flex-wrap">
        <button
          onClick={() => setActiveTab('route')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            activeTab === 'route' 
              ? `${colors.accent} text-white` 
              : `${colors.light} ${colors.text} ${colors.hover}`
          }`}
        >
          📍 游览路线
        </button>
        {tips && tips.length > 0 && (
          <button
            onClick={() => setActiveTab('tips')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeTab === 'tips' 
                ? `${colors.accent} text-white` 
                : `${colors.light} ${colors.text} ${colors.hover}`
            }`}
          >
            💡 游玩贴士
          </button>
        )}
        {comparison && (
          <button
            onClick={() => setActiveTab('compare')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeTab === 'compare' 
                ? `${colors.accent} text-white` 
                : `${colors.light} ${colors.text} ${colors.hover}`
            }`}
          >
            🔍 对比指南
          </button>
        )}
      </div>

      {/* Route Tab */}
      {activeTab === 'route' && (
        <div className="space-y-4">
          {stops.map((stop, index) => (
            <div 
              key={stop.id}
              className={`bg-white rounded-xl border ${colors.border} overflow-hidden transition-all`}
            >
              {/* Stop Header */}
              <button
                onClick={() => toggleStop(stop.id)}
                className="w-full p-4 flex items-center gap-4 text-left hover:bg-slate-50 transition-colors"
              >
                {/* Order Number */}
                <div className={`w-10 h-10 ${colors.accent} text-white rounded-full flex items-center justify-center font-bold text-lg shrink-0`}>
                  {stop.order}
                </div>
                
                {/* Stop Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h4 className="font-bold text-slate-800">{stop.name}</h4>
                    <span className="text-xs text-slate-500">{stop.nameEn}</span>
                  </div>
                  <div className="flex items-center gap-3 mt-1 text-sm text-slate-600">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {stop.time}
                    </span>
                    <span className={`${colors.light} ${colors.text} px-2 py-0.5 rounded-full text-xs`}>
                      {stop.duration}
                    </span>
                  </div>
                </div>

                {/* Expand Icon */}
                <div className="shrink-0">
                  {expandedStops.has(stop.id) ? (
                    <ChevronUp className="w-5 h-5 text-slate-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400" />
                  )}
                </div>
              </button>

              {/* Expanded Content */}
              {expandedStops.has(stop.id) && (
                <div className="px-4 pb-4 border-t border-slate-100">
                  <div className="pt-4 space-y-4">
                    {/* Description */}
                    <p className="text-slate-700 leading-relaxed">{stop.description}</p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2">
                      {stop.highlights.map((highlight, i) => (
                        <span 
                          key={i}
                          className={`${colors.light} ${colors.text} px-3 py-1 rounded-full text-sm`}
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>

                    {/* Animals (for La Jolla) */}
                    {stop.animals && stop.animals.length > 0 && (
                      <div className="bg-blue-50 rounded-lg p-3">
                        <div className="flex items-center gap-2 text-blue-700 font-medium mb-1">
                          <span>🦭</span>
                          <span>可看到的动物</span>
                        </div>
                        <ul className="text-sm text-blue-600 space-y-1">
                          {stop.animals.map((animal, i) => (
                            <li key={i}>• {animal}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Must See (for Midway) */}
                    {stop.mustSee && stop.mustSee.length > 0 && (
                      <div className="bg-amber-50 rounded-lg p-3">
                        <div className="flex items-center gap-2 text-amber-700 font-medium mb-1">
                          <Star className="w-4 h-4" />
                          <span>必看亮点</span>
                        </div>
                        <ul className="text-sm text-amber-600 space-y-1">
                          {stop.mustSee.map((item, i) => (
                            <li key={i}>• {item}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* How to Get There */}
                    <div className="flex items-start gap-2 text-sm">
                      <Navigation className={`w-4 h-4 ${colors.text} mt-0.5 shrink-0`} />
                      <div>
                        <span className="font-medium text-slate-700">如何到达：</span>
                        <span className="text-slate-600">{stop.howToGetThere}</span>
                      </div>
                    </div>

                    {/* Tips */}
                    <div className="flex items-start gap-2 text-sm bg-yellow-50 rounded-lg p-3">
                      <Lightbulb className="w-4 h-4 text-yellow-600 mt-0.5 shrink-0" />
                      <div>
                        <span className="font-medium text-yellow-700">小贴士：</span>
                        <span className="text-yellow-600">{stop.tips}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Connection Line */}
              {index < stops.length - 1 && (
                <div className="flex justify-center py-2">
                  <div className={`w-0.5 h-6 ${colors.light}`}></div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Tips Tab */}
      {activeTab === 'tips' && tips && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {tips.map((tip, index) => (
            <div key={index} className="bg-white rounded-xl p-4 border border-slate-200">
              <div className="flex items-start gap-3">
                <span className="text-2xl">{tip.icon}</span>
                <div>
                  <h4 className="font-bold text-slate-800">{tip.title}</h4>
                  <p className="text-sm text-slate-600 mt-1">{tip.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Comparison Tab */}
      {activeTab === 'compare' && comparison && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Item 1 */}
          <div className="bg-white rounded-xl p-4 border-2 border-blue-200">
            <div className="text-center mb-3">
              <h4 className="text-xl font-bold text-blue-700">{comparison.item1.name}</h4>
              <p className="text-sm text-blue-500">{comparison.item1.nameEn}</p>
              <p className="text-xs text-slate-500 mt-1">📍 {comparison.item1.location}</p>
            </div>
            <ul className="space-y-2">
              {comparison.item1.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Item 2 */}
          <div className="bg-white rounded-xl p-4 border-2 border-teal-200">
            <div className="text-center mb-3">
              <h4 className="text-xl font-bold text-teal-700">{comparison.item2.name}</h4>
              <p className="text-sm text-teal-500">{comparison.item2.nameEn}</p>
              <p className="text-xs text-slate-500 mt-1">📍 {comparison.item2.location}</p>
            </div>
            <ul className="space-y-2">
              {comparison.item2.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
                  <span className="w-1.5 h-1.5 bg-teal-500 rounded-full"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
