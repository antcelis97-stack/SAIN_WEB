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

const App = () => {
  const [view, setView] = useState('exterior'); // 'exterior' o 'interior'

  const neonShadow = "drop-shadow(0 0 12px rgba(255, 50, 50, 0.8))";
  const cyanGlow = "shadow-[0_0_20px_rgba(34,211,238,0.3)]";

  // Simulación de los paneles del tríptico
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
          
          {/* Fondo de Peces y Camarones */}
          <img 
            src="image_65b46d.jpg" 
            alt="Fondo de peces y camarones neón" 
            className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 min-h-[600px] relative z-10">
            {view === 'exterior' ? (
              <>
                {/* PANEL 1: CONTACTO Y CIERRE (Izquierda de la hoja extendida) */}
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
                  <div className="mt-12 p-6 rounded-2xl border border-blue-500/20 bg-blue-500/5">
                    <p className="text-xs uppercase tracking-widest text-blue-400 font-bold mb-2">Compromiso Futuro</p>
                    <p className="text-sm italic text-slate-400">
                      "En SAIN no solo vendemos equipos, ofrecemos una ruta de mejora continua con suscripciones de mantenimiento y actualizaciones tecnológicas anuales."
                    </p>
                  </div>
                </div>

                {/* PANEL 2: NOSOTROS / TECNOLOGÍA (Centro de la hoja extendida - Contraportada) */}
                <div className="p-8 border-r border-slate-800/50 bg-gradient-to-b from-slate-900/40 to-transparent">
                  <h3 className="text-xl font-bold text-cyan-400 mb-6 flex items-center gap-2">
                    <Award size={20} /> ¿Por qué SAIN?
                  </h3>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="shrink-0 text-blue-400"><Cpu /></div>
                      <div>
                        <h4 className="font-bold">Hardware Propio</h4>
                        <p className="text-sm text-slate-400">Sensores de alta precisión diseñados para el entorno acuícola de Nayarit.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="shrink-0 text-blue-400"><Settings /></div>
                      <div>
                        <h4 className="font-bold">Software Inteligente</h4>
                        <p className="text-sm text-slate-400">Monitoreo en tiempo real desde cualquier dispositivo.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="shrink-0 text-blue-400"><Zap /></div>
                      <div>
                        <h4 className="font-bold">Suscripción de Mejora</h4>
                        <p className="text-sm text-slate-400">Mantente a la vanguardia con actualizaciones constantes y mantenimiento proactivo.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* PANEL 3: PORTADA (Derecha de la hoja extendida) */}
                <div className="p-8 flex flex-col items-center justify-center text-center bg-gradient-to-br from-blue-900/20 to-slate-950">
                  <div className="mb-8 relative group">
                    <div className="absolute inset-0 bg-red-500/20 blur-3xl group-hover:bg-red-500/30 transition-all rounded-full" />
                    <img 
                      src="https://raw.githubusercontent.com/lucide-react/lucide/main/icons/shrimp.svg" 
                      alt="Logo SAIN Placeholder" 
                      className="w-48 h-48 relative z-10 brightness-110 contrast-125"
                      style={{ filter: `invert(24%) sepia(87%) saturate(4645%) hue-rotate(351deg) brightness(94%) contrast(97%) ${neonShadow}` }}
                    />
                    {/* Nota: En un entorno real aquí iría el logo.png subido con el efecto de filtro aplicado */}
                  </div>
                  <h2 className="text-4xl font-black tracking-tighter mb-2">SAIN</h2>
                  <p className="text-blue-400 font-bold tracking-widest uppercase text-xs mb-6">Nayarit • México</p>
                  <div className="h-1 w-20 bg-gradient-to-r from-transparent via-red-500 to-transparent mb-6" />
                  <p className="text-lg font-medium leading-tight text-slate-200">
                    Sistemas Acuícola Inteligentes: <br/>
                    <span className="text-cyan-400 italic">El futuro de la producción.</span>
                  </p>
                </div>
              </>
            ) : (
              <>
                {/* CARA INTERIOR - PANEL 1: EL PROBLEMA/SOLUCIÓN */}
                <div className="p-8 border-r border-slate-800/50 bg-slate-900/30">
                  <h3 className="text-2xl font-bold text-white mb-6">Eficiencia <span className="text-cyan-400">Acuícola</span></h3>
                  <p className="text-slate-400 text-sm mb-6">
                    La producción tradicional de <span className="text-white font-bold text-blue-300">Camarón y Tilapia</span> enfrenta desafíos críticos que nuestro sistema resuelve mediante inteligencia de datos.
                  </p>
                  <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 mb-4">
                    <h4 className="text-red-400 font-bold flex items-center gap-2 mb-2">
                      <ShieldCheck size={18}/> Menor Mortandad
                    </h4>
                    <p className="text-xs text-slate-300">Reducción drástica de pérdida de biomasa mediante alertas tempranas de parámetros críticos (pH, O₂, Temperatura).</p>
                  </div>
                  <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20">
                    <h4 className="text-green-400 font-bold flex items-center gap-2 mb-2">
                      <TrendingUp size={18}/> Mayor Crecimiento
                    </h4>
                    <p className="text-xs text-slate-300">Aceleración del ciclo de cosecha optimizando los recursos alimenticios.</p>
                  </div>
                </div>

                {/* CARA INTERIOR - PANEL 2: NATURALEZA NOCTURNA (CENTRO) */}
                <div className="p-8 border-r border-slate-800/50 bg-blue-900/10 flex flex-col justify-center items-center text-center">
                  <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(59,130,246,0.5)]">
                    <Moon size={40} className="text-blue-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Aprovecha la <span className="text-blue-400">Noche</span></h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    Tanto el camarón como la tilapia poseen una **naturaleza nocturna**. Nuestro sistema inteligente gestiona la alimentación y oxigenación durante las horas críticas de oscuridad.
                  </p>
                  <div className="grid grid-cols-2 gap-4 w-full">
                    <div className="bg-slate-900/60 p-3 rounded-lg border border-slate-700">
                      <span className="text-cyan-400 text-xl font-bold">30%</span>
                      <p className="text-[10px] uppercase text-slate-500 font-bold">Más Ingesta</p>
                    </div>
                    <div className="bg-slate-900/60 p-3 rounded-lg border border-slate-700">
                      <span className="text-cyan-400 text-xl font-bold">24/7</span>
                      <p className="text-[10px] uppercase text-slate-500 font-bold">Monitoreo</p>
                    </div>
                  </div>
                </div>

                {/* CARA INTERIOR - PANEL 3: HARDWARE Y SOFTWARE */}
                <div className="p-8 bg-slate-900/30">
                  <h3 className="text-2xl font-bold text-white mb-6">Solución <span className="text-cyan-400">Integral</span></h3>
                  <div className="space-y-4">
                    <div className="p-4 rounded-xl border border-slate-700 bg-slate-800/40 hover:border-blue-500/50 transition-colors">
                      <h4 className="font-bold flex items-center gap-2 mb-1 uppercase text-xs tracking-wider text-blue-400">
                        <Waves size={16}/> Sensores (HW)
                      </h4>
                      <p className="text-xs text-slate-400">Sondas industriales de grado marino para lectura continua de calidad de agua.</p>
                    </div>
                    <div className="p-4 rounded-xl border border-slate-700 bg-slate-800/40 hover:border-blue-500/50 transition-colors">
                      <h4 className="font-bold flex items-center gap-2 mb-1 uppercase text-xs tracking-wider text-blue-400">
                        <Cpu size={16}/> Plataforma (SW)
                      </h4>
                      <p className="text-xs text-slate-400">Dashboard intuitivo con analítica predictiva y control automático de aireadores.</p>
                    </div>
                    <div className="p-4 rounded-xl border border-slate-700 bg-slate-800/40 hover:border-blue-500/50 transition-colors">
                      <h4 className="font-bold flex items-center gap-2 mb-1 uppercase text-xs tracking-wider text-blue-400">
                        <ArrowRightLeft size={16}/> Licencia SaaS
                      </h4>
                      <p className="text-xs text-slate-400">Acceso a la nube, soporte técnico especializado y garantía extendida.</p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Footer info */}
        <footer className="mt-8 text-center text-slate-500 text-sm">
          <p>© 2024 Sistemas Acuícola Inteligentes de Nayarit. Todos los derechos reservados.</p>
          <p className="mt-2 italic">"Innovación tecnológica para el campo nayarita"</p>
        </footer>
      </div>
    </div>
  );
};

export default App;