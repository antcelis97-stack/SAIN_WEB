import React, { useState } from 'react'; // Importamos useState
import { useLocation, useNavigate } from 'react-router-dom';
import { Newspaper, Box, MessageSquare, ShoppingCart, Send } from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Estado para el texto del feedback rápido
  const [quickFeedback, setQuickFeedback] = useState('');

  const isExactPath = (path) => {
    const currentPath = location.pathname.replace(/\/$/, '');
    return currentPath === path.replace(/\/$/, '');
  };

  const menuItems = [
    { icon: <Newspaper size={20} />, label: 'News', path: '/news' },
    { icon: <Box size={20} />, label: 'Prototypes', path: '/prototypes' },
    { icon: <ShoppingCart size={20} />, label: 'Shop Services', path: '/shop' },
    { icon: <MessageSquare size={20} />, label: 'Support', path: '/feedback' },
  ];

  const handleQuickSend = (e) => {
    e.preventDefault();
    if (!quickFeedback.trim()) return;
    alert(`Feedback enviado: ${quickFeedback}`);
    setQuickFeedback(''); // Limpia el recuadro después de enviar
  };

  return (
    <aside className="w-64 bg-slate-900/50 border-r border-slate-800 p-6 flex flex-col gap-8 hidden md:flex">
      {/* Menu Superior */}
      <div className="space-y-2">
        <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold px-4 mb-4">
          Corporate Menu
        </p>
        <nav className="space-y-1">
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={() => navigate(item.path)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                isExactPath(item.path)
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-slate-400 hover:bg-slate-800 hover:text-slate-100'
              }`}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      {/* FEEDBACK BOX ACTUALIZADO (Ahora con input) */}
      <div className="mt-auto p-4 bg-cyan-500/5 border border-cyan-500/10 rounded-2xl feedback-box-container">
        <div className="flex items-center gap-2 text-cyan-400 mb-2">
          <MessageSquare size={16} />
          <span className="text-xs font-bold uppercase tracking-wider">Feedback Box</span>
        </div>
        
        <form onSubmit={handleQuickSend} className="space-y-2">
          <textarea 
            value={quickFeedback}
            onChange={(e) => setQuickFeedback(e.target.value)}
            placeholder="¿Mejoras para SAIN?"
            className="w-full bg-slate-900/80 border border-slate-800 rounded-lg p-2 text-[10px] text-slate-300 focus:border-cyan-500 outline-none resize-none h-16 custom-scrollbar"
          />
          <button 
            type="submit"
            className="w-full py-2 bg-slate-800 hover:bg-cyan-600 hover:text-white text-cyan-400 text-[10px] font-bold rounded-lg transition-all flex items-center justify-center gap-2 btn-feedback-sidebar active:scale-95"
          >
            <Send size={12} />
            ENVIAR
          </button>
        </form>
      </div>
    </aside>
  );
};

export default Sidebar;