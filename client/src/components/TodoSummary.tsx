// California Sunshine Design - Todo Summary Component
// 待办事项汇总组件
import { motion } from 'framer-motion';
import { CheckCircle2, Circle, ExternalLink, Ticket, AlertCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { generateTodoList, TodoItem } from '@/data/tripData';

// 城市颜色映射
const dayToCity: Record<number, string> = {
  0: 'Los Angeles',
  1: 'Los Angeles',
  2: 'Los Angeles',
  3: 'Los Angeles',
  4: 'San Diego',
  5: 'San Diego',
  6: 'San Diego',
  7: 'Las Vegas',
  8: 'Las Vegas',
  9: 'Las Vegas',
  10: 'Las Vegas'
};

const cityColors: Record<string, string> = {
  'Los Angeles': '#FFB800',
  'San Diego': '#0077B6',
  'Las Vegas': '#E85D04'
};

const cityNames: Record<string, string> = {
  'Los Angeles': '洛杉矶',
  'San Diego': '圣地亚哥',
  'Las Vegas': '拉斯维加斯'
};

export default function TodoSummary() {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [filter, setFilter] = useState<'all' | 'pending' | 'done'>('all');

  useEffect(() => {
    // 从localStorage加载状态
    const savedStatus = localStorage.getItem('tripTodoStatus');
    const statusMap: Record<string, 'pending' | 'done'> = savedStatus ? JSON.parse(savedStatus) : {};
    
    const todoList = generateTodoList().map(todo => ({
      ...todo,
      status: statusMap[todo.id] || todo.status
    }));
    setTodos(todoList);
  }, []);

  const toggleTodo = (id: string) => {
    setTodos(prev => {
      const updated = prev.map(todo => 
        todo.id === id 
          ? { ...todo, status: todo.status === 'done' ? 'pending' : 'done' as 'pending' | 'done' }
          : todo
      );
      
      // 保存到localStorage
      const statusMap: Record<string, 'pending' | 'done'> = {};
      updated.forEach(todo => {
        statusMap[todo.id] = todo.status;
      });
      localStorage.setItem('tripTodoStatus', JSON.stringify(statusMap));
      
      return updated;
    });
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'all') return true;
    return todo.status === filter;
  });

  const pendingCount = todos.filter(t => t.status === 'pending').length;
  const doneCount = todos.filter(t => t.status === 'done').length;

  // 按城市分组
  const groupedTodos: Record<string, TodoItem[]> = {};
  filteredTodos.forEach(todo => {
    const city = dayToCity[todo.day] || 'Los Angeles';
    if (!groupedTodos[city]) {
      groupedTodos[city] = [];
    }
    groupedTodos[city].push(todo);
  });

  return (
    <section id="todos" className="py-20 bg-gradient-to-b from-[#FFFCF2] to-white">
      <div className="container max-w-4xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-red-100 px-4 py-2 rounded-full mb-4">
            <Ticket className="w-5 h-5 text-red-500" />
            <span className="text-red-600 font-medium">待办事项</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4">
            购票清单
          </h2>
          <p className="text-lg text-[#666] max-w-2xl mx-auto">
            需要提前购买门票的景点汇总，完成后可打勾标记
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center gap-6 mb-8"
        >
          <div className="flex items-center gap-2 bg-amber-50 px-4 py-2 rounded-xl">
            <AlertCircle className="w-5 h-5 text-amber-500" />
            <span className="text-amber-700 font-medium">{pendingCount} 待完成</span>
          </div>
          <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-xl">
            <CheckCircle2 className="w-5 h-5 text-green-500" />
            <span className="text-green-700 font-medium">{doneCount} 已完成</span>
          </div>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center gap-2 mb-8"
        >
          {[
            { key: 'all', label: '全部' },
            { key: 'pending', label: '待完成' },
            { key: 'done', label: '已完成' }
          ].map(tab => (
            <button
              key={tab.key}
              onClick={() => setFilter(tab.key as 'all' | 'pending' | 'done')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === tab.key
                  ? 'bg-[#1a1a1a] text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Todo List by City */}
        <div className="space-y-8">
          {Object.entries(groupedTodos).map(([city, cityTodos]) => (
            <motion.div
              key={city}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {/* City Header */}
              <div className="flex items-center gap-3 mb-4">
                <div 
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: cityColors[city] }}
                />
                <h3 className="text-xl font-bold text-gray-900">
                  {cityNames[city]}
                </h3>
                <span className="text-sm text-gray-500">
                  ({cityTodos.length}项)
                </span>
              </div>

              {/* Todo Items */}
              <div className="space-y-3">
                {cityTodos.map(todo => (
                  <div
                    key={todo.id}
                    className={`bg-white rounded-xl p-4 shadow-sm border transition-all ${
                      todo.status === 'done' 
                        ? 'border-green-200 bg-green-50/50' 
                        : 'border-gray-100 hover:border-gray-200'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      {/* Checkbox */}
                      <button
                        onClick={() => toggleTodo(todo.id)}
                        className="flex-shrink-0 mt-0.5"
                      >
                        {todo.status === 'done' ? (
                          <CheckCircle2 className="w-6 h-6 text-green-500" />
                        ) : (
                          <Circle className="w-6 h-6 text-gray-300 hover:text-gray-400" />
                        )}
                      </button>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h4 className={`font-semibold ${
                              todo.status === 'done' ? 'text-gray-400 line-through' : 'text-gray-900'
                            }`}>
                              {todo.name}
                            </h4>
                            <p className="text-sm text-gray-500 mt-0.5">
                              Day {todo.day} · {todo.location}
                            </p>
                          </div>
                          {todo.price && (
                            <span className={`flex-shrink-0 text-sm font-medium px-2 py-1 rounded ${
                              todo.status === 'done'
                                ? 'bg-gray-100 text-gray-400'
                                : 'bg-amber-100 text-amber-700'
                            }`}>
                              {todo.price}
                            </span>
                          )}
                        </div>

                        {/* Buy Link */}
                        {todo.url && todo.status === 'pending' && (
                          <a
                            href={todo.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 mt-2 text-sm font-medium text-blue-600 hover:text-blue-700"
                          >
                            <span>前往购票</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {filteredTodos.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            {filter === 'pending' ? '太棒了！所有门票都已购买完成 🎉' : '暂无待办事项'}
          </div>
        )}
      </div>
    </section>
  );
}
