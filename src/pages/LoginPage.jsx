import React from 'react';
import { Link } from 'react-router-dom';
import { User, LogIn, UserPlus, ShieldAlert } from 'lucide-react';

const LoginPage = ({onLogin}) => {
  return (
    <div className="min-h-[90vh] flex items-center justify-center p-6 bg-slate-950">
      {/* Tarjeta Principal de Acceso */}
      <div className="max-w-md w-full bg-slate-900/50 backdrop-blur-xl border border-slate-800 p-10 rounded-3xl shadow-2xl relative overflow-hidden">
        
        {/* Decoración Neón de fondo */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-600/20 blur-[80px] rounded-full" />
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-cyan-600/10 blur-[80px] rounded-full" />

        <div className="relative z-10 text-center">
          <h2 className="text-3xl font-black text-white mb-2 tracking-tighter">Acceso a <span className="text-blue-500">SAIN</span></h2>
          <p className="text-slate-400 text-sm mb-8">Plataforma de Monitoreo Acuícola Inteligente</p>

          <div className="space-y-4">
            {/* Opción 1: Iniciar Sesión */}
            <button className="w-full flex items-center justify-between px-6 py-4 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-2xl transition-all group">
              <div className="flex items-center gap-4">
                <LogIn className="text-blue-400 group-hover:scale-110 transition-transform" size={22} />
                <span className="font-bold text-slate-200">Iniciar Sesión</span>
              </div>
              <div className="text-xs text-slate-500 uppercase tracking-widest">Admin</div>
            </button>

            {/* Opción 2: Registrarse */}
            <button className="w-full flex items-center justify-between px-6 py-4 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-2xl transition-all group">
              <div className="flex items-center gap-4">
                <UserPlus className="text-cyan-400 group-hover:scale-110 transition-transform" size={22} />
                <span className="font-bold text-slate-200">Registrar Granja</span>
              </div>
              <div className="text-xs text-slate-500 uppercase tracking-widest">Nuevo</div>
            </button>

            <div className="py-2 flex items-center gap-4">
              <div className="h-[1px] bg-slate-800 flex-1" />
              <span className="text-xs text-slate-600 font-bold uppercase tracking-widest">o continúa como</span>
              <div className="h-[1px] bg-slate-800 flex-1" />
            </div>

            {/* Opción 3: Invitado */}
            <button 
      onClick={onLogin} // <--- Al dar clic, activa el acceso
      className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold rounded-2xl transition-all shadow-lg shadow-blue-900/20 active:scale-95"
    >
      <User size={20} />
      Acceso Invitado
    </button>
          </div>

          {/* Aviso de Seguridad */}
          <div className="mt-8 flex items-center justify-center gap-2 text-[10px] text-slate-500 uppercase tracking-widest font-bold">
            <ShieldAlert size={12} className="text-slate-600" />
            Conexión Encriptada Nayarit-IXC
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;