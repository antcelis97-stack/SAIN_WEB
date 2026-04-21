import React, { useState } from 'react';
import { 
  ShieldCheck, 
  TrendingUp, 
  Moon, 
  Cpu, 
  Waves, 
  Settings, 
  Award,
  Zap,
  Mail,
  Phone,
  ArrowRightLeft
} from 'lucide-react';

const Triptico = () => {
  const [view, setView] = useState('exterior'); // 'exterior' o 'interior'

  const neonShadow = "drop-shadow(0 0 12px rgba(255, 50, 50, 0.8))";

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header & Navigation */}
        <header className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              SAIN: Sistemas Acuícola Inteligentes
            </h1>
            <p className="text-slate-400">Diseño de Tríptico Profesional - Nayarit</p>
          </div>
          <div className="flex bg-slate-900 p-1 rounded-xl border border-slate-800">
            <button 
              onClick={() => setView('exterior')}
              className={`px-6 py-2 rounded-lg transition-all ${view === 'exterior' ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
            >
              Cara Exterior
            </button>
            <button 
              onClick={() => setView('interior')}
              className={`px-6 py-2 rounded-lg transition-all ${view === 'interior' ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
            >
              Cara Interior
            </button>
          </div>
        </header>

        {/* Brochure Container */}
        <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-[#000814] min-h-[600px] shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 min-h-[600px] relative z-10">
            {view === 'exterior' ? (
              <>
                <div className="p-8 border-r border-slate-800/50 flex flex-col justify-between bg-slate-900/20">
                  <div>
                    <h3 className="text-xl font-bold text-cyan-400 mb-6 flex items-center gap-2">
                      <Mail size={20} /> Contáctanos
                    </h3>
                    <ul className="space-y-4 text-sm text-slate-300">
                      <li className="flex items-center gap-3">
                        <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400"><Phone size={16}/></div>
                        +52 (311) XXX XX XX
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400"><Mail size={16}/></div>
                        contacto@sain-nayarit.com
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="p-8 border-r border-slate-800/50 bg-gradient-to-b from-slate-900/40 to-transparent">
                  <h3 className="text-xl font-bold text-cyan-400 mb-6 flex items-center gap-2">
                    <Award size={20} /> ¿Por qué SAIN?
                  </h3>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="shrink-0 text-blue-400"><Cpu /></div>
                      <div>
                        <h4 className="font-bold">Hardware Propio</h4>
                        <p className="text-sm text-slate-400">Sensores de alta precisión diseñados para Nayarit.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-8 flex flex-col items-center justify-center text-center bg-gradient-to-br from-blue-900/20 to-slate-950">
                  <div className="mb-8 relative group">
                <div className="absolute inset-0 bg-blue-500/20 blur-3xl group-hover:bg-blue-500/30 transition-all rounded-full" />
                
                {/* AQUÍ ESTÁ TU LOGO REAL */}
                <img 
                  src="/hero.png"  /* Asegúrate que el nombre sea hero.png o logo.png según tengas en public */
                  alt="Logo SAIN" 
                  className="w-48 h-48 relative z-10 brightness-110 contrast-125 object-contain"
                  style={{ filter: `drop-shadow(0 0 15px rgba(34, 211, 238, 0.8))` }}
                />
              </div>
                  <h2 className="text-4xl font-black tracking-tighter mb-2 italic">SAIN</h2>
                  <p className="text-blue-400 font-bold tracking-widest uppercase text-xs mb-6">Nayarit • México</p>
                </div>
              </>
            ) : (
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6 text-center w-full">Eficiencia <span className="text-cyan-400">Acuícola</span></h3>
                {/* Agrega aquí el resto de tu contenido interior si lo necesitas */}
              </div>
            )}
          </div>
        </div>

        <footer className="mt-8 text-center text-slate-500 text-sm">
          <p>© 2026 Sistemas Acuícola Inteligentes de Nayarit.</p>
        </footer>
      </div>
    </div>
  );
};

export default Triptico;