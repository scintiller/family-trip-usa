// California Sunshine Design - Expense Visualization Component
// 旅行总支出可视化：饼图 + 柱状图 + 爸妈栏目 + 汇总
import { motion } from 'framer-motion';
import { 
  PieChart, BarChart3, Plane, Building2, Ticket, Car, 
  UtensilsCrossed, MoreHorizontal, TrendingUp, Users, Heart
} from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { 
  expenses, parentsExpenses, 
  calculateExpenseSummary, calculateParentsExpenseSummary, calculateTotalTripCost,
  type ExpenseItem 
} from '../data/tripData';

// ===== 类别配置 =====
const categoryConfig: Record<string, { 
  icon: typeof Plane; label: string; color: string; lightColor: string 
}> = {
  flight: { icon: Plane, label: '机票', color: '#0077B6', lightColor: '#E0F2FE' },
  hotel: { icon: Building2, label: '住宿', color: '#E85D04', lightColor: '#FFF3E0' },
  ticket: { icon: Ticket, label: '门票', color: '#059669', lightColor: '#ECFDF5' },
  car: { icon: Car, label: '租车/交通', color: '#7C3AED', lightColor: '#F3E8FF' },
  food: { icon: UtensilsCrossed, label: '餐饮', color: '#DC2626', lightColor: '#FEF2F2' },
  other: { icon: MoreHorizontal, label: '其他', color: '#6B7280', lightColor: '#F3F4F6' }
};

const categoryOrder = ['flight', 'hotel', 'car', 'ticket', 'food', 'other'] as const;

// ===== SVG 饼图组件 =====
function DonutChart({ data, size = 240 }: { 
  data: { category: string; amount: number }[]; 
  size?: number 
}) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const total = data.reduce((sum, d) => sum + d.amount, 0);
  const radius = size / 2 - 20;
  const innerRadius = radius * 0.55;
  const cx = size / 2;
  const cy = size / 2;

  let currentAngle = -Math.PI / 2;
  const slices = data.filter(d => d.amount > 0).map((d, i) => {
    const percentage = d.amount / total;
    const angle = percentage * 2 * Math.PI;
    const startAngle = currentAngle;
    const endAngle = currentAngle + angle;
    currentAngle = endAngle;

    const midAngle = startAngle + angle / 2;
    const isHovered = hoveredIndex === i;
    const expandOffset = isHovered ? 6 : 0;
    const offsetX = Math.cos(midAngle) * expandOffset;
    const offsetY = Math.sin(midAngle) * expandOffset;

    const outerX1 = cx + radius * Math.cos(startAngle) + offsetX;
    const outerY1 = cy + radius * Math.sin(startAngle) + offsetY;
    const outerX2 = cx + radius * Math.cos(endAngle) + offsetX;
    const outerY2 = cy + radius * Math.sin(endAngle) + offsetY;
    const innerX1 = cx + innerRadius * Math.cos(endAngle) + offsetX;
    const innerY1 = cy + innerRadius * Math.sin(endAngle) + offsetY;
    const innerX2 = cx + innerRadius * Math.cos(startAngle) + offsetX;
    const innerY2 = cy + innerRadius * Math.sin(startAngle) + offsetY;

    const largeArc = angle > Math.PI ? 1 : 0;
    const path = [
      `M ${outerX1} ${outerY1}`,
      `A ${radius} ${radius} 0 ${largeArc} 1 ${outerX2} ${outerY2}`,
      `L ${innerX1} ${innerY1}`,
      `A ${innerRadius} ${innerRadius} 0 ${largeArc} 0 ${innerX2} ${innerY2}`,
      'Z'
    ].join(' ');

    return {
      path,
      color: categoryConfig[d.category]?.color || '#6B7280',
      label: categoryConfig[d.category]?.label || d.category,
      amount: d.amount,
      percentage,
      index: i
    };
  });

  return (
    <div className="relative flex items-center justify-center">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {slices.map((slice) => (
          <path
            key={slice.index}
            d={slice.path}
            fill={slice.color}
            opacity={hoveredIndex === null || hoveredIndex === slice.index ? 1 : 0.4}
            onMouseEnter={() => setHoveredIndex(slice.index)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{ 
              transition: 'all 0.2s ease',
              cursor: 'pointer',
              filter: hoveredIndex === slice.index ? 'drop-shadow(0 4px 8px rgba(0,0,0,0.15))' : 'none'
            }}
          />
        ))}
        {/* 中心文字 */}
        <text x={cx} y={cy - 8} textAnchor="middle" className="fill-[#403D39] text-xs font-medium">
          {hoveredIndex !== null ? slices[hoveredIndex]?.label : '总计'}
        </text>
        <text x={cx} y={cy + 16} textAnchor="middle" className="fill-[#403D39] text-lg font-bold">
          ${hoveredIndex !== null 
            ? slices[hoveredIndex]?.amount.toLocaleString() 
            : total.toLocaleString()}
        </text>
        {hoveredIndex !== null && (
          <text x={cx} y={cy + 34} textAnchor="middle" className="fill-[#9CA3AF] text-xs">
            {(slices[hoveredIndex]?.percentage * 100).toFixed(1)}%
          </text>
        )}
      </svg>
    </div>
  );
}

// ===== 水平条形图组件 =====
function HorizontalBarChart({ data }: { data: { category: string; amount: number }[] }) {
  const maxAmount = Math.max(...data.map(d => d.amount));
  const total = data.reduce((sum, d) => sum + d.amount, 0);

  return (
    <div className="space-y-3">
      {data.filter(d => d.amount > 0).map((d) => {
        const config = categoryConfig[d.category];
        const Icon = config?.icon || MoreHorizontal;
        const percentage = (d.amount / total * 100).toFixed(1);
        const barWidth = (d.amount / maxAmount) * 100;

        return (
          <div key={d.category} className="group">
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                <div 
                  className="w-7 h-7 rounded-md flex items-center justify-center"
                  style={{ backgroundColor: `${config?.color}18` }}
                >
                  <Icon className="w-3.5 h-3.5" style={{ color: config?.color }} />
                </div>
                <span className="text-sm font-medium text-[#403D39]">{config?.label}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-[#9CA3AF]">{percentage}%</span>
                <span className="text-sm font-bold text-[#403D39]">${d.amount.toLocaleString()}</span>
              </div>
            </div>
            <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${barWidth}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="h-full rounded-full"
                style={{ backgroundColor: config?.color }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ===== 爸妈费用卡片 =====
function ParentsExpenseSection() {
  const parentsSummary = calculateParentsExpenseSummary();
  
  // 按类别分组
  const grouped: Record<string, ExpenseItem[]> = {};
  parentsExpenses.forEach(e => {
    if (!grouped[e.category]) grouped[e.category] = [];
    grouped[e.category].push(e);
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-rose-50 to-orange-50 rounded-2xl p-6 border border-rose-100"
    >
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 bg-rose-100 rounded-xl flex items-center justify-center">
          <Heart className="w-5 h-5 text-rose-500" />
        </div>
        <div>
          <h3 className="font-bold text-[#403D39] text-lg">爸妈自付费用</h3>
          <p className="text-xs text-[#9CA3AF]">纽约+华盛顿段，含估计值</p>
        </div>
        <div className="ml-auto text-right">
          <p className="text-2xl font-bold text-rose-500">${parentsSummary.total.toLocaleString()}</p>
          <p className="text-xs text-[#9CA3AF]">预估</p>
        </div>
      </div>

      <div className="space-y-3">
        {parentsExpenses.map(item => {
          const config = categoryConfig[item.category];
          const Icon = config?.icon || MoreHorizontal;
          return (
            <div key={item.id} className="flex items-center gap-3 bg-white/70 rounded-xl p-3">
              <div 
                className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: `${config?.color}15` }}
              >
                <Icon className="w-4 h-4" style={{ color: config?.color }} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-[#403D39]">{item.name}</p>
                <p className="text-xs text-[#9CA3AF]">{item.description}</p>
              </div>
              <span className="font-semibold text-[#403D39]">${item.amount}</span>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

// ===== 总计汇总卡片 =====
function GrandTotalCard() {
  const { ours, parents, grandTotal } = calculateTotalTripCost();
  const perPersonPerDay = Math.round(grandTotal / 4 / 17); // 4人17天

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-gradient-to-r from-[#1a1a1a] to-[#2d2d2d] rounded-2xl p-6 text-white shadow-xl"
    >
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp className="w-5 h-5 text-[#FFB800]" />
        <h3 className="font-bold text-lg">旅行总开销</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
        <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
          <p className="text-xs text-white/60 mb-1">我们的费用</p>
          <p className="text-2xl font-bold text-[#FFB800]">${ours.total.toLocaleString()}</p>
        </div>
        <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
          <p className="text-xs text-white/60 mb-1">爸妈自付（预估）</p>
          <p className="text-2xl font-bold text-rose-400">${parents.total.toLocaleString()}</p>
        </div>
        <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-[#FFB800]/30">
          <p className="text-xs text-white/60 mb-1">旅行总计</p>
          <p className="text-3xl font-bold text-white">${grandTotal.toLocaleString()}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <div className="bg-white/5 rounded-lg px-4 py-2">
          <p className="text-xs text-white/50">人均/天</p>
          <p className="font-semibold text-white/90">~${perPersonPerDay}</p>
        </div>
        <div className="bg-white/5 rounded-lg px-4 py-2">
          <p className="text-xs text-white/50">总天数</p>
          <p className="font-semibold text-white/90">17天</p>
        </div>
        <div className="bg-white/5 rounded-lg px-4 py-2">
          <p className="text-xs text-white/50">总人数</p>
          <p className="font-semibold text-white/90">4人</p>
        </div>
        <div className="bg-white/5 rounded-lg px-4 py-2">
          <p className="text-xs text-white/50">城市</p>
          <p className="font-semibold text-white/90">5个城市</p>
        </div>
      </div>
    </motion.div>
  );
}

// ===== 主组件 =====
export default function ExpenseVisualization() {
  const [activeTab, setActiveTab] = useState<'overview' | 'parents'>('overview');
  const ourSummary = calculateExpenseSummary();

  // 按类别汇总数据
  const chartData = categoryOrder.map(cat => ({
    category: cat,
    amount: ourSummary[cat]
  })).filter(d => d.amount > 0);

  return (
    <section id="expense-viz" className="py-16 bg-gradient-to-b from-white to-[#FFFCF2]">
      <div className="container max-w-5xl">
        {/* 标题 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 bg-[#FFB800]/10 px-4 py-2 rounded-full mb-4">
            <BarChart3 className="w-5 h-5 text-[#FFB800]" />
            <span className="text-[#E85D04] font-medium">支出可视化</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#403D39] mb-3">
            旅行总支出一览
          </h2>
          <p className="text-[#6B7280] max-w-xl mx-auto">
            17天5城，全家4人的旅行花费分布
          </p>
        </motion.div>

        {/* Tab 切换 */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-100 rounded-full p-1 flex gap-1">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === 'overview'
                  ? 'bg-white text-[#403D39] shadow-sm'
                  : 'text-[#9CA3AF] hover:text-[#6B7280]'
              }`}
            >
              <span className="flex items-center gap-2">
                <PieChart className="w-4 h-4" />
                费用总览
              </span>
            </button>
            <button
              onClick={() => setActiveTab('parents')}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === 'parents'
                  ? 'bg-white text-[#403D39] shadow-sm'
                  : 'text-[#9CA3AF] hover:text-[#6B7280]'
              }`}
            >
              <span className="flex items-center gap-2">
                <Heart className="w-4 h-4" />
                爸妈费用
              </span>
            </button>
          </div>
        </div>

        {activeTab === 'overview' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {/* 饼图 + 条形图 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* 饼图 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
              >
                <h3 className="font-bold text-[#403D39] mb-4 flex items-center gap-2">
                  <PieChart className="w-5 h-5 text-[#FFB800]" />
                  费用占比
                </h3>
                <DonutChart data={chartData} size={260} />
                {/* 图例 */}
                <div className="grid grid-cols-3 gap-2 mt-4">
                  {chartData.map(d => {
                    const config = categoryConfig[d.category];
                    return (
                      <div key={d.category} className="flex items-center gap-1.5">
                        <div 
                          className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                          style={{ backgroundColor: config?.color }}
                        />
                        <span className="text-xs text-[#6B7280] truncate">{config?.label}</span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>

              {/* 条形图 */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
              >
                <h3 className="font-bold text-[#403D39] mb-4 flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-[#FFB800]" />
                  分类明细
                </h3>
                <HorizontalBarChart data={chartData} />
              </motion.div>
            </div>

            {/* 各类别快速统计卡片 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-8"
            >
              {categoryOrder.map(cat => {
                const config = categoryConfig[cat];
                const Icon = config.icon;
                const amount = ourSummary[cat];
                if (amount === 0) return null;
                const percentage = ((amount / ourSummary.total) * 100).toFixed(0);

                return (
                  <div 
                    key={cat} 
                    className="rounded-xl p-4 text-center border transition-shadow hover:shadow-md"
                    style={{ 
                      backgroundColor: config.lightColor,
                      borderColor: `${config.color}20`
                    }}
                  >
                    <Icon className="w-6 h-6 mx-auto mb-2" style={{ color: config.color }} />
                    <p className="text-xs text-[#6B7280] mb-1">{config.label}</p>
                    <p className="font-bold text-[#403D39]">${amount.toLocaleString()}</p>
                    <p className="text-xs mt-1" style={{ color: config.color }}>{percentage}%</p>
                  </div>
                );
              })}
            </motion.div>
          </motion.div>
        )}

        {activeTab === 'parents' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="mb-8"
          >
            <ParentsExpenseSection />
          </motion.div>
        )}

        {/* 总计卡片（始终显示） */}
        <GrandTotalCard />
      </div>
    </section>
  );
}
