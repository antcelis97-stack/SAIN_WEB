import React from 'react';
import { Link } from 'react-router-dom';
import { Shovel as Shrimp, Layout } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-slate-900/80 backdrop-blur-md border-b border-slate-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Shrimp className="text-blue-500" size={28} />
            <span className="font-black text-xl tracking-tighter text-white">SAIN</span>
          </div>
          <div className="flex gap-6">
            <Link to="/" className="text-slate-300 hover:text-cyan-400 transition-colors font-medium">Inicio</Link>
            <Link to="/triptico" className="flex items-center gap-1 bg-blue-600 hover:bg-blue-500 text-white px-4 py-1.5 rounded-lg transition-all text-sm font-bold">
              <Layout size={16} /> Ver Tríptico
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;