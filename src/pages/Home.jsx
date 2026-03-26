import React from 'react';
import { ArrowRight, Cpu, Waves, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center px-4 py-20">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-600 rounded-full blur-[120px]" />
      </div>

      <main className="relative z-10 text-center max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
          Sistemas Acuícola <br/>
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Inteligentes de Nayarit
          </span>
        </h1>
        <p className="text-xl text-slate-400 mb-10 leading-relaxed">
          Automatización IoT para la producción de camarón y tilapia. 
          Monitoreo en tiempo real, análisis predictivo y eficiencia energética.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-left">
          {[
            { icon: <Cpu className="text-blue-400"/>, title: "Hardware IoT", desc: "Sensores industriales de alta precisión." },
            { icon: <Waves className="text-cyan-400"/>, title: "Control Hídrico", desc: "Gestión automática de aireadores y pH." },
            { icon: <Activity className="text-emerald-400"/>, title: "Data Analytics", desc: "Dashboard con IA para reducir mortandad." }
          ].map((item, i) => (
            <div key={i} className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm">
              <div className="mb-3">{item.icon}</div>
              <h3 className="font-bold text-white mb-1">{item.title}</h3>
              <p className="text-sm text-slate-500">{item.desc}</p>
            </div>
          ))}
        </div>

        <Link to="/triptico" className="inline-flex items-center gap-2 bg-white text-slate-950 px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.2)]">
          Explorar Proyecto <ArrowRight size={20} />
        </Link>
      </main>
    </div>
  );
};

export default Home;