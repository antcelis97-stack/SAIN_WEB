import React from 'react';
import { Link } from 'react-router-dom';
import { Shovel as Shrimp, Globe, LogOut } from 'lucide-react';

const Navbar = ({ onLogout }) => {
  return (
    <nav className="bg-slate-900/80 backdrop-blur-md border-b border-slate-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo y Nombre */}
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer">
            <Shrimp className="text-blue-500" size={28} />
            <span className="font-black text-xl tracking-tighter text-white">SAIN</span>
          </Link>

          {/* Navegación Derecha */}
          <div className="flex items-center gap-6">
            <Link 
              to="/" 
              className="text-slate-400 hover:text-white transition-colors text-sm font-medium"
            >
              Inicio
            </Link>
            
            {/* Botón Principal: Ir al sitio web */}
            <Link 
              to="/services" 
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white px-5 py-2 rounded-xl transition-all shadow-lg shadow-blue-900/20 text-sm font-bold active:scale-95"
            >
              <Globe size={18} /> 
              Ir al sitio web
            </Link>

            {/* Separador visual */}
            <div className="h-6 w-[1px] bg-slate-800 mx-2" />

            {/* Botón de Cerrar Sesión */}
            <button 
              onClick={onLogout}
              className="flex items-center gap-2 text-slate-500 hover:text-red-400 transition-colors p-2 rounded-lg group"
              title="Cerrar Sesión"
            >
              <LogOut size={20} className="group-hover:translate-x-1 transition-transform" />
              <span className="text-xs font-bold uppercase tracking-widest hidden md:block">Salir</span>
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;