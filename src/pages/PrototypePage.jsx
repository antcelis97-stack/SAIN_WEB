import React from 'react';
import Sidebar from '../components/Sidebar';
import '../styles/services.css';

const PrototypePage = () => {
return (
    <div className="flex min-h-screen">
      <Sidebar /> {/* Manteniendo la consistencia con ServiciosPage */}
    
    <main className="flex-1 p-8">
        <header className="mb-10">
        <h1 className="text-4xl font-black italic">Panel de <span className="text-cyan-400">Prototipos</span></h1>
        <p className="text-slate-400">Visualiza y gestiona el desarrollo de nuestras próximas innovaciones tecnológicas.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
          {/* Prototipo 1 */}
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl hover:border-cyan-500 transition-all group">
            {/* Espacio para la imagen */}
            <div className="w-full h-48 bg-slate-800 rounded-2xl mb-4 flex items-center justify-center overflow-hidden border border-slate-700">
              <img 
                src="/assets/prototipo1.png" 
                alt="Prototipo 1"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="w-12 h-12 bg-cyan-500/20 rounded-full mb-4 flex items-center justify-center text-cyan-400">
            <span className="font-bold">01</span>
            </div>
            
            <h3 className="text-xl font-bold mb-2 text-white">Prototipo 1</h3>
            <p className="text-sm text-slate-400 mb-6">
            Descripción: Esta es una breve explicación del prototipo. Aquí se detallarán las funciones principales, 
            los materiales utilizados y el objetivo del diseño actual para la granja.
            </p>
            
            
        </div>

          {/* Prototipo 2 */}
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl hover:border-cyan-500 transition-all group">
            {/* Espacio para la imagen */}
            <div className="w-full h-48 bg-slate-800 rounded-2xl mb-4 flex items-center justify-center overflow-hidden border border-slate-700">
              <img 
                src="/assets/prototipo2.png" 
                alt="Prototipo 2"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="w-12 h-12 bg-cyan-500/20 rounded-full mb-4 flex items-center justify-center text-cyan-400">
            <span className="font-bold">02</span>
            </div>
            
            <h3 className="text-xl font-bold mb-2 text-white">Prototipo 2</h3>
            <p className="text-sm text-slate-400 mb-6">
            Descripción: Esta sección está reservada para el segundo modelo experimental. Incluye mejoras 
            basadas en el feedback del usuario y nuevas capacidades de monitoreo inteligente.
            </p>
            
            
        </div>

          {/* Sección de Feedback (Opcional, manteniendo el estilo de tu captura) */}
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl">
            <h3 className="text-xl font-bold mb-2 text-cyan-400">Notas de Desarrollo</h3>
            <p className="text-sm text-slate-400 mb-4">¿Tienes alguna sugerencia técnica sobre estos modelos?</p>
            <textarea 
            className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm text-slate-300 focus:border-cyan-500 outline-none mb-4"
            placeholder="Escribe tus observaciones aquí..."
            rows="3"
            ></textarea>
            <button className="w-full py-2 bg-slate-800 border border-slate-700 rounded-xl font-bold hover:bg-slate-700 transition-colors">
            Guardar Observación
            </button>
        </div>

        </div>
    </main>
    </div>
    );
};

export default PrototypePage;