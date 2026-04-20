import React from 'react';
import Sidebar from '../components/Sidebar';
import '../styles/services.css';

const ServiciosPage = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar /> {/* Componente para noticias, productos, etc */}
      
      <main className="flex-1 p-8">
        <header className="mb-10">
          <h1 className="text-4xl font-black italic">Panel de <span className="text-cyan-400">Servicios</span></h1>
          <p className="text-slate-400">Explora prototipos, noticias y adquiere soluciones inteligentes.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card de Prototipo */}
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl hover:border-blue-500 transition-all">
            <div className="w-12 h-12 bg-blue-500/20 rounded-full mb-4 flex items-center justify-center text-blue-400">
              <span className="font-bold">IoT</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Sensor SAIN-V1</h3>
            <p className="text-sm text-slate-400 mb-4">Monitoreo de pH y Oxígeno para estanques de camarón.</p>
            <button className="w-full py-2 bg-blue-600 rounded-xl font-bold hover:bg-blue-500">Ver Detalles</button>
          </div>

          {/* Sección de Feedback */}
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl">
            <h3 className="text-xl font-bold mb-2 text-cyan-400">Buzón de Feedback</h3>
            <textarea 
              className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm text-slate-300 focus:border-cyan-500 outline-none mb-4"
              placeholder="¿Cómo podemos mejorar para tu granja?"
            ></textarea>
            <button className="w-full py-2 bg-slate-800 border border-slate-700 rounded-xl font-bold">Enviar Comentarios</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ServiciosPage;