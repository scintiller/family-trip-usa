// California Sunshine Design - Expense Tracker Component
import { motion } from 'framer-motion';
import { Plane, Building2, Ticket, Car, UtensilsCrossed, MoreHorizontal, DollarSign, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { expenses, calculateExpenseSummary, type ExpenseItem } from '../data/tripData';

const categoryConfig = {
  flight: {
    icon: Plane,
    label: '机票',
    color: '#0077B6',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200'
  },
  hotel: {
    icon: Building2,
    label: '住宿',
    color: '#E85D04',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200'
  },
  ticket: {
    icon: Ticket,
    label: '门票',
    color: '#059669',
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-200'
  },
  car: {
    icon: Car,
    label: '租车/交通',
    color: '#7C3AED',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200'
  },
  food: {
    icon: UtensilsCrossed,
    label: '餐饮',
    color: '#DC2626',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200'
  },
  other: {
    icon: MoreHorizontal,
    label: '其他',
    color: '#6B7280',
    bgColor: 'bg-gray-50',
    borderColor: 'border-gray-200'
  }
};

function ExpenseCard({ expense }: { expense: ExpenseItem }) {
  const config = categoryConfig[expense.category];
  const Icon = config.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`${config.bgColor} ${config.borderColor} border rounded-xl p-4 hover:shadow-md transition-shadow`}
    >
      <div className="flex items-start gap-3">
        <div 
          className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: `${config.color}20` }}
        >
          <Icon className="w-5 h-5" style={{ color: config.color }} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div>
              <h4 className="font-semibold text-[#403D39] text-sm">{expense.name}</h4>
              <p className="text-xs text-[#6B7280] mt-0.5">{expense.description}</p>
            </div>
            <div className="text-right flex-shrink-0">
              {expense.amount > 0 ? (
                <span className="font-bold text-[#403D39]">${expense.amount.toFixed(2)}</span>
              ) : (
                <span className="text-xs text-[#9CA3AF] bg-gray-100 px-2 py-1 rounded">待添加</span>
              )}
            </div>
          </div>
          
          {/* 详细信息 */}
          <div className="mt-2 flex flex-wrap gap-2 text-xs">
            <span className="text-[#6B7280]">{expense.date}</span>
            {expense.confirmationCode && (
              <span className="bg-white px-2 py-0.5 rounded border border-gray-200">
                确认号: {expense.confirmationCode}
              </span>
            )}
            {expense.passengers && expense.passengers.length > 0 && (
              <span className="text-[#6B7280]">
                {expense.passengers.join(', ')}
              </span>
            )}
          </div>
          
          {expense.note && (
            <p className="text-xs text-[#9CA3AF] mt-1 italic">{expense.note}</p>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function CategorySection({ 
  category, 
  items 
}: { 
  category: keyof typeof categoryConfig;
  items: ExpenseItem[];
}) {
  const [isExpanded, setIsExpanded] = useState(true);
  const config = categoryConfig[category];
  const Icon = config.icon;
  const total = items.reduce((sum, item) => sum + item.amount, 0);
  
  return (
    <div className="mb-6">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow mb-3"
      >
        <div className="flex items-center gap-3">
          <div 
            className="w-10 h-10 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: `${config.color}20` }}
          >
            <Icon className="w-5 h-5" style={{ color: config.color }} />
          </div>
          <div className="text-left">
            <h3 className="font-bold text-[#403D39]">{config.label}</h3>
            <p className="text-xs text-[#6B7280]">{items.length} 项</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="font-bold text-lg" style={{ color: config.color }}>
            {total > 0 ? `$${total.toFixed(2)}` : '待统计'}
          </span>
          {isExpanded ? (
            <ChevronUp className="w-5 h-5 text-[#9CA3AF]" />
          ) : (
            <ChevronDown className="w-5 h-5 text-[#9CA3AF]" />
          )}
        </div>
      </button>
      
      {isExpanded && (
        <div className="space-y-3 pl-2">
          {items.map(item => (
            <ExpenseCard key={item.id} expense={item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function ExpenseTracker() {
  const summary = calculateExpenseSummary();
  
  // 按类别分组
  const groupedExpenses = expenses.reduce((acc, expense) => {
    if (!acc[expense.category]) {
      acc[expense.category] = [];
    }
    acc[expense.category].push(expense);
    return acc;
  }, {} as Record<string, ExpenseItem[]>);
  
  // 类别顺序
  const categoryOrder: (keyof typeof categoryConfig)[] = ['flight', 'hotel', 'ticket', 'car', 'food', 'other'];
  
  return (
    <section id="expenses" className="py-16 bg-gradient-to-b from-[#FFFCF2] to-white">
      <div className="container max-w-4xl">
        {/* 标题 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 bg-[#FFB800]/10 px-4 py-2 rounded-full mb-4">
            <DollarSign className="w-5 h-5 text-[#FFB800]" />
            <span className="text-[#E85D04] font-medium">费用统计</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#403D39] mb-3">
            旅行费用明细
          </h2>
          <p className="text-[#6B7280] max-w-xl mx-auto">
            分类记录所有旅行开支，包括机票、住宿、门票等费用
          </p>
        </motion.div>
        
        {/* 费用汇总卡片 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#FFB800] to-[#E85D04] rounded-2xl p-6 mb-10 text-white shadow-lg"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold opacity-90">总费用</h3>
            <span className="text-3xl font-bold">
              {summary.total > 0 ? `$${summary.total.toFixed(2)}` : '统计中...'}
            </span>
          </div>
          
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
            {categoryOrder.map(cat => {
              const config = categoryConfig[cat];
              const Icon = config.icon;
              const amount = summary[cat];
              
              return (
                <div key={cat} className="bg-white/20 rounded-lg p-3 text-center backdrop-blur-sm">
                  <Icon className="w-5 h-5 mx-auto mb-1 opacity-90" />
                  <p className="text-xs opacity-80">{config.label}</p>
                  <p className="font-semibold text-sm">
                    {amount > 0 ? `$${amount.toFixed(0)}` : '-'}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>
        
        {/* 分类详情 */}
        <div>
          {categoryOrder.map(category => {
            const items = groupedExpenses[category];
            if (!items || items.length === 0) return null;
            
            return (
              <CategorySection 
                key={category} 
                category={category} 
                items={items} 
              />
            );
          })}
        </div>
        
        {/* 提示信息 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-xl text-center"
        >
          <p className="text-sm text-blue-700">
            💡 部分费用待添加，请提供相关账单信息以便更新
          </p>
        </motion.div>
      </div>
    </section>
  );
}
