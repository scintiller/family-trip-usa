// California Sunshine Design - Ticket Tracker Component
// 门票管理：已买/未买状态、紧急程度、购买建议

import { motion } from 'framer-motion';
import { Ticket, CheckCircle2, Clock, AlertTriangle, ExternalLink, Calendar, MapPin, ChevronDown, ChevronUp, Info } from 'lucide-react';
import { useState } from 'react';

type Urgency = 'high' | 'medium' | 'low';

interface TicketItem {
  id: string;
  name: string;
  location: string;
  day: number;
  date: string;
  price: string;
  url?: string;
  status: 'done' | 'pending';
  urgency: Urgency;
  urgencyNote: string;
  buyTip: string;
  people: string;
}

const allTickets: TicketItem[] = [
  // === 已买/已预约 ===
  {
    id: 'un-tour',
    name: '联合国导览团',
    location: '联合国总部',
    day: 12,
    date: '2/9 周一',
    price: '已预约 4:30 PM',
    url: 'https://visit.un.org',
    status: 'done',
    urgency: 'low',
    urgencyNote: '已完成预约',
    buyTip: '确认号已保存，无需操作',
    people: '全家4人'
  },
  {
    id: 'capitol-tour',
    name: '国会大厦 Tour',
    location: '国会大厦',
    day: 16,
    date: '2/13 周五',
    price: '免费（已改约2:00PM）',
    url: 'https://www.visitthecapitol.gov',
    status: 'done',
    urgency: 'low',
    urgencyNote: '已完成改约，确认号：202601310244466',
    buyTip: '已改约为2:00 PM，4张票，无需操作',
    people: '4张票'
  },
  // === 需要提前买 ===
  {
    id: 'disney',
    name: '迪士尼双园票 (Park Hopper)',
    location: '迪士尼乐园',
    day: 6,
    date: '2/3 周二',
    price: '~$179/人',
    url: 'https://disneyland.disney.go.com/tickets/',
    status: 'done',
    urgency: 'low',
    urgencyNote: '已购买完成',
    buyTip: '已购买，Park Hopper可两个园区自由切换',
    people: '2人（你+妹妹）'
  },
  {
    id: 'sd-zoo',
    name: '圣地亚哥动物园门票',
    location: '圣地亚哥动物园',
    day: 8,
    date: '2/5 周四',
    price: '$67/人',
    url: 'https://zoo.sandiegozoo.org/tickets',
    status: 'done',
    urgency: 'low',
    urgencyNote: '已购买完成',
    buyTip: '已购买，无需操作',
    people: '全家4人'
  },
  {
    id: 'midway',
    name: '中途岛号航空母舰门票',
    location: '中途岛号航母博物馆',
    day: 8,
    date: '2/5 周四',
    price: '$26/人',
    url: 'https://www.midway.org/tickets/',
    status: 'done',
    urgency: 'low',
    urgencyNote: '已购买完成',
    buyTip: '已购买，无需操作',
    people: '全家4人'
  },
  {
    id: 'eiffel-vegas',
    name: '巴黎酒店埃菲尔铁塔观景台',
    location: '巴黎酒店（拉斯维加斯）',
    day: 9,
    date: '2/6 周五',
    price: '$25/人',
    url: 'https://www.caesars.com/paris-las-vegas/things-to-do/eiffel-tower',
    status: 'done',
    urgency: 'low',
    urgencyNote: '已购买完成',
    buyTip: '已购买，无需操作',
    people: '全家4人（可选）'
  },
  {
    id: 'high-roller',
    name: 'High Roller 摩天轮门票',
    location: 'LINQ Promenade（拉斯维加斯）',
    day: 10,
    date: '2/7 周六',
    price: '$25起/人',
    url: 'https://www.caesars.com/linq/high-roller',
    status: 'done',
    urgency: 'low',
    urgencyNote: '已购买完成',
    buyTip: '已购买，无需操作',
    people: '全家4人'
  },
  {
    id: 'amnh',
    name: '美国自然历史博物馆门票',
    location: '自然历史博物馆（纽约）',
    day: 12,
    date: '2/9 周一',
    price: '成人$28，学生$22',
    url: 'https://www.amnh.org/plan-your-visit/tickets',
    status: 'pending',
    urgency: 'low',
    urgencyNote: '不着急，2月非旺季',
    buyTip: '2月是淡季，前一天或当天网上买都行。网上买可以选时段，到了直接进，比现场排队快。',
    people: '全家4人'
  },
  {
    id: 'met',
    name: '大都会博物馆门票',
    location: '大都会艺术博物馆',
    day: 13,
    date: '2/10 周二',
    price: '成人$30，12岁以下免费',
    url: 'https://www.metmuseum.org/visit/plan-your-visit',
    status: 'pending',
    urgency: 'low',
    urgencyNote: '不着急，不需要预约',
    buyTip: '不需要提前预约！可以网上买也可以现场买。网上买到了直接扫码进，省排队时间。12岁以下儿童免费。',
    people: '全家4人'
  },
  {
    id: 'totr',
    name: 'Top of the Rock 观景台门票',
    location: 'Top of the Rock',
    day: 13,
    date: '2/10 周二',
    price: '成人$43 / Sun&Stars $65',
    url: 'https://www.topoftherocknyc.com/buy-tickets',
    status: 'pending',
    urgency: 'medium',
    urgencyNote: '日落时段可能售罄，建议提前2天',
    buyTip: '如果想看日落，建议提前2天买Sun & Stars Ticket（$65），日落时段热门会卖完。普通时段不着急。2月日落约5:30PM，选4:30-5:00PM入场最佳。',
    people: '全家4人'
  },
  {
    id: 'air-space',
    name: '国家航空航天博物馆（免费预约）',
    location: '航空航天博物馆（华盛顿DC）',
    day: 15,
    date: '2/12 周四',
    price: '免费（需预约时段）',
    url: 'https://airandspace.si.edu/visit',
    status: 'pending',
    urgency: 'medium',
    urgencyNote: '免费但需预约时段，热门时段可能满',
    buyTip: 'Smithsonian免费但需要预约timed entry。提前30天放票，建议提前2-3天预约。如果忘了，当天早上8:15也会放same-day票。',
    people: '全家4人'
  },
  {
    id: 'natural-history-dc',
    name: '国家自然历史博物馆（免费预约）',
    location: '自然历史博物馆（华盛顿DC）',
    day: 15,
    date: '2/12 周四',
    price: '免费（需预约时段）',
    url: 'https://naturalhistory.si.edu/visit',
    status: 'pending',
    urgency: 'medium',
    urgencyNote: '免费但需预约时段，热门时段可能满',
    buyTip: '同上，Smithsonian系统统一预约。建议航空航天博物馆和自然历史博物馆一起预约，选连续时段。',
    people: '全家4人'
  },
  // === 现场买即可 ===
  {
    id: 'angels-flight',
    name: '天使铁路车票',
    location: '天使铁路（洛杉矶）',
    day: 5,
    date: '2/2 周一',
    price: '$1/次',
    url: 'https://www.angelsflight.org/',
    status: 'done',
    urgency: 'low',
    urgencyNote: '已购买完成',
    buyTip: '已购买，无需操作',
    people: '全家4人'
  }
];

const urgencyConfig = {
  high: {
    label: '尽快处理',
    color: '#DC2626',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200',
    badgeBg: 'bg-red-100 text-red-700',
    icon: AlertTriangle
  },
  medium: {
    label: '提前2-3天',
    color: '#D97706',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-200',
    badgeBg: 'bg-amber-100 text-amber-700',
    icon: Clock
  },
  low: {
    label: '前一天即可',
    color: '#059669',
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-200',
    badgeBg: 'bg-emerald-100 text-emerald-700',
    icon: CheckCircle2
  }
};

function TicketCard({ ticket }: { ticket: TicketItem }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const config = urgencyConfig[ticket.urgency];
  const UrgencyIcon = config.icon;
  const isDone = ticket.status === 'done';

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`rounded-xl border transition-all ${
        isDone
          ? 'bg-green-50/50 border-green-200'
          : `${config.bgColor} ${config.borderColor}`
      } ${isExpanded ? 'shadow-md' : 'hover:shadow-md'}`}
    >
      <div
        className="p-4 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-start gap-3">
          {/* Status Icon */}
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
            isDone ? 'bg-green-100' : ''
          }`}
            style={!isDone ? { backgroundColor: `${config.color}15` } : {}}
          >
            {isDone ? (
              <CheckCircle2 className="w-5 h-5 text-green-600" />
            ) : (
              <UrgencyIcon className="w-5 h-5" style={{ color: config.color }} />
            )}
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2">
              <div>
                <h4 className={`font-semibold text-sm ${isDone ? 'text-green-800' : 'text-[#403D39]'}`}>
                  {ticket.name}
                </h4>
                <div className="flex items-center gap-2 mt-1 flex-wrap">
                  <span className="flex items-center gap-1 text-xs text-[#6B7280]">
                    <MapPin className="w-3 h-3" />
                    {ticket.location}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-[#6B7280]">
                    <Calendar className="w-3 h-3" />
                    Day {ticket.day} · {ticket.date}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                  isDone ? 'bg-green-100 text-green-700' : config.badgeBg
                }`}>
                  {isDone ? '✅ 已完成' : config.label}
                </span>
                {isExpanded ? (
                  <ChevronUp className="w-4 h-4 text-[#9CA3AF]" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-[#9CA3AF]" />
                )}
              </div>
            </div>

            {/* Price & People */}
            <div className="flex items-center gap-3 mt-2">
              <span className={`font-bold text-sm ${isDone ? 'text-green-700' : 'text-[#403D39]'}`}>
                {ticket.price}
              </span>
              <span className="text-xs text-[#9CA3AF]">·</span>
              <span className="text-xs text-[#6B7280]">{ticket.people}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Expanded Details */}
      {isExpanded && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="px-4 pb-4 border-t border-dashed border-gray-200 pt-3"
        >
          {/* Urgency Note */}
          <div className={`flex items-start gap-2 p-3 rounded-lg mb-3 ${
            isDone ? 'bg-green-100/50' : `${config.bgColor}`
          }`}>
            <Info className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: isDone ? '#059669' : config.color }} />
            <p className="text-xs leading-relaxed" style={{ color: isDone ? '#065F46' : config.color }}>
              {ticket.urgencyNote}
            </p>
          </div>

          {/* Buy Tip */}
          <div className="bg-white/80 p-3 rounded-lg mb-3">
            <p className="text-xs text-[#403D39] leading-relaxed">
              💡 <strong>购买建议：</strong>{ticket.buyTip}
            </p>
          </div>

          {/* Action Button */}
          {ticket.url && !isDone && (
            <a
              href={ticket.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFB800] hover:bg-[#E85D04] text-white text-xs font-medium rounded-lg transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              前往购票
            </a>
          )}
        </motion.div>
      )}
    </motion.div>
  );
}

export default function TicketTracker() {
  const doneTickets = allTickets.filter(t => t.status === 'done');
  const highUrgency = allTickets.filter(t => t.status !== 'done' && t.urgency === 'high');
  const mediumUrgency = allTickets.filter(t => t.status !== 'done' && t.urgency === 'medium');
  const lowUrgency = allTickets.filter(t => t.status !== 'done' && t.urgency === 'low');

  const totalPending = allTickets.filter(t => t.status !== 'done').length;
  const totalDone = doneTickets.length;

  return (
    <section id="tickets" className="py-16 bg-gradient-to-b from-white to-[#FFFCF2]">
      <div className="container max-w-4xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 bg-[#FFB800]/10 px-4 py-2 rounded-full mb-4">
            <Ticket className="w-5 h-5 text-[#FFB800]" />
            <span className="text-[#E85D04] font-medium">票务管理</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#403D39] mb-3">
            门票 & 预约状态
          </h2>
          <p className="text-[#6B7280] max-w-xl mx-auto">
            所有需要购买或预约的门票一览，标注紧急程度和购买建议
          </p>
        </motion.div>

        {/* Summary Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10"
        >
          <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center">
            <CheckCircle2 className="w-6 h-6 text-green-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-green-700">{totalDone}</p>
            <p className="text-xs text-green-600">已完成</p>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-center">
            <AlertTriangle className="w-6 h-6 text-red-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-red-700">{highUrgency.length}</p>
            <p className="text-xs text-red-600">尽快处理</p>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
            <Clock className="w-6 h-6 text-amber-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-amber-700">{mediumUrgency.length}</p>
            <p className="text-xs text-amber-600">提前2-3天</p>
          </div>
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-center">
            <CheckCircle2 className="w-6 h-6 text-emerald-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-emerald-700">{lowUrgency.length}</p>
            <p className="text-xs text-emerald-600">前一天即可</p>
          </div>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-[#6B7280]">完成进度</span>
            <span className="text-sm font-medium text-[#403D39]">{totalDone}/{totalDone + totalPending}</span>
          </div>
          <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${(totalDone / (totalDone + totalPending)) * 100}%` }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="h-full bg-gradient-to-r from-green-400 to-green-500 rounded-full"
            />
          </div>
        </motion.div>

        {/* Urgent Section */}
        {highUrgency.length > 0 && (
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="w-5 h-5 text-red-500" />
              <h3 className="text-lg font-bold text-[#403D39]">🔥 尽快处理</h3>
              <span className="text-xs text-red-500 bg-red-50 px-2 py-0.5 rounded-full">{highUrgency.length}项</span>
            </div>
            <div className="space-y-3">
              {highUrgency.map(ticket => (
                <TicketCard key={ticket.id} ticket={ticket} />
              ))}
            </div>
          </div>
        )}

        {/* Medium Section */}
        {mediumUrgency.length > 0 && (
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Clock className="w-5 h-5 text-amber-500" />
              <h3 className="text-lg font-bold text-[#403D39]">⏰ 提前2-3天购买</h3>
              <span className="text-xs text-amber-500 bg-amber-50 px-2 py-0.5 rounded-full">{mediumUrgency.length}项</span>
            </div>
            <div className="space-y-3">
              {mediumUrgency.map(ticket => (
                <TicketCard key={ticket.id} ticket={ticket} />
              ))}
            </div>
          </div>
        )}

        {/* Low Urgency Section */}
        {lowUrgency.length > 0 && (
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
              <h3 className="text-lg font-bold text-[#403D39]">😌 前一天买就行</h3>
              <span className="text-xs text-emerald-500 bg-emerald-50 px-2 py-0.5 rounded-full">{lowUrgency.length}项</span>
            </div>
            <div className="space-y-3">
              {lowUrgency.map(ticket => (
                <TicketCard key={ticket.id} ticket={ticket} />
              ))}
            </div>
          </div>
        )}

        {/* Done Section */}
        {doneTickets.length > 0 && (
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <h3 className="text-lg font-bold text-[#403D39]">✅ 已完成</h3>
              <span className="text-xs text-green-500 bg-green-50 px-2 py-0.5 rounded-full">{doneTickets.length}项</span>
            </div>
            <div className="space-y-3">
              {doneTickets.map(ticket => (
                <TicketCard key={ticket.id} ticket={ticket} />
              ))}
            </div>
          </div>
        )}

        {/* Tip Box */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-blue-50 border border-blue-200 rounded-xl p-5 mt-6"
        >
          <h4 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
            <Info className="w-4 h-4" />
            免费景点（无需门票）
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-1 text-xs text-blue-700">
            <p>• 盖蒂中心、UCLA、格里菲斯天文台</p>
            <p>• Staten Island Ferry（免费看自由女神）</p>
            <p>• 华尔街铜牛、布鲁克林大桥、DUMBO</p>
            <p>• 纽约公共图书馆、Grand Central Terminal</p>
            <p>• 时代广场、中央公园、第五大道</p>
            <p>• 圣巴特里克教堂</p>
            <p>• 白宫外观、华盛顿纪念碑、林肯纪念堂</p>
            <p>• 二战纪念碑、杰弗逊纪念堂、MLK纪念碑</p>
            <p>• 最高法院、国会图书馆、国会大厦外观</p>
            <p>• 国家美术馆（西馆+东馆）</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
