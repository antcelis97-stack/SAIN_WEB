import React from 'react';
import { Newspaper, Box, MessageSquare, ShoppingCart, HelpCircle } from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { icon: <Newspaper size={20} />, label: 'News', active: true },
    { icon: <Box size={20} />, label: 'Prototypes', active: false },
    { icon: <ShoppingCart size={20} />, label: 'Shop Services', active: false },
    { icon: <MessageSquare size={20} />, label: 'Feedback', active: false },
  ];

  return (
    <aside className="w-64 bg-slate-900/50 border-r border-slate-800 p-6 flex flex-col gap-8 hidden md:flex">
      <div className="space-y-2">
        <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold px-4 mb-4">
          Corporate Menu
        </p>
        <nav className="space-y-1">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                item.active 
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/20' 
                : 'text-slate-400 hover:bg-slate-800 hover:text-slate-100'
              }`}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="mt-auto p-4 bg-blue-500/5 border border-blue-500/10 rounded-2xl">
        <div className="flex items-center gap-2 text-blue-400 mb-2">
          <HelpCircle size={16} />
          <span className="text-xs font-bold uppercase">Support</span>
        </div>
        <p className="text-[10px] text-slate-500 leading-relaxed">
          Need help with SAIN implementation? Contact our Nayarit team.
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;