import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Activity, Terminal, Droplets, Calendar, Cpu } from 'lucide-react';
import Sidebar from '../components/Sidebar';
import '../styles/services.css';

const ServicesPage = () => {
  // Arreglo de datos para las noticias (Fácil de actualizar después)
  const newsItems = [
    {
      id: 1,
      tag: 'Software',
      title: 'Integración SYS-ACUI y SAIN-WEB completada',
      description: 'El ecosistema digital está listo. Hemos enlazado con éxito la lógica de control desarrollada en Python con nuestra nueva interfaz corporativa en React.',
      date: '22 Abr 2026',
      icon: <Terminal size={20} className="text-cyan-400" />
    },
    {
      id: 2,
      tag: 'Hardware',
      title: 'Pruebas del Sistema Venturi',
      description: 'Implementación exitosa del sistema de riego Venturi acoplado a la bomba Igoto Class F para maximizar la oxigenación del agua en los prototipos.',
      date: '18 Abr 2026',
      icon: <Droplets size={20} className="text-blue-400" />
    },
    {
      id: 3,
      tag: 'Electrónica',
      title: 'Controladores IoT Ensamblados',
      description: 'Se ha completado el diseño del circuito principal utilizando Arduino WiFi R4, relevadores de 5v y válvulas solenoides para la alimentación automatizada.',
      date: '12 Abr 2026',
      icon: <Cpu size={20} className="text-purple-400" />
    }
  ];

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-8 h-screen overflow-y-auto custom-scrollbar">
        <header className="mb-10">
          <h1 className="text-4xl font-black italic">
            Panel de <span className="text-cyan-400">Noticias</span>
          </h1>
          <p className="text-slate-400">
            Explora las últimas actualizaciones de nuestras tecnologías y soluciones acuícolas.
          </p>
        </header>

        {/* Tarjeta Principal Destacada (Prototipos) */}
        <div className="mb-12">
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl hover:border-blue-500/50 transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden shadow-xl">
            {/* Brillo de fondo decorativo */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
            
            <div className="relative z-10 max-w-2xl">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl mb-4 flex items-center justify-center text-blue-400">
                <span className="font-bold">IoT</span>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-white">Prototipos de Investigación SYS-ACUI</h3>
              <p className="text-slate-400 mb-6 text-sm md:text-base">
                Descubre nuestra arquitectura de hardware con Arduino WiFi R4, módulos LM2596 y sistemas de bombeo para el control inteligente de granjas camaroneras.
              </p>
              <Link
                to="/prototypes"
                className="inline-flex items-center gap-2 bg-white text-slate-950 px-6 py-3 rounded-full font-bold text-md hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.2)]"
              >
                Explorar Prototipos <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>

        {/* Sección de Noticias en Grid */}
        <div>
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2 text-white">
            <Activity className="text-cyan-400" /> Últimas Novedades
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsItems.map((news) => (
              <div key={news.id} className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl hover:bg-slate-800/60 hover:border-slate-700 transition-all flex flex-col h-full group">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 bg-slate-950 border border-slate-800 rounded-full text-slate-400 group-hover:text-cyan-400 transition-colors">
                    {news.tag}
                  </span>
                  {news.icon}
                </div>
                <h3 className="text-lg font-bold mb-2 text-slate-100">{news.title}</h3>
                <p className="text-sm text-slate-400 mb-6 flex-grow leading-relaxed">
                  {news.description}
                </p>
                <div className="flex items-center gap-2 text-xs text-slate-500 mt-auto pt-4 border-t border-slate-800/50">
                  <Calendar size={14} />
                  {news.date}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ServicesPage;