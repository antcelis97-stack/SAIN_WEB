import React, { useState } from 'react';
import logoSAIN from '../assets/logo.png';
import fondoSAIN from '../assets/fondo_peces.jpg';
import './TripticoStyle.css';
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

const TripticoPage = () => {
  const [view, setView] = useState('exterior');

  return (
    <div className="triptico-container bg-slate-950 text-slate-100">
      <div className="triptico-inner">
        {/* Header & Navigation */}
        <header className="triptico-header">
          <div>
            <h1 className="triptico-title">
              SAIN: Sistemas Acuícola Inteligentes
            </h1>
            <p className="triptico-subtitle">Diseño de Tríptico Profesional - Nayarit</p>
          </div>
          <div className="triptico-nav">
            <button
              onClick={() => setView('exterior')}
              className={`nav-btn ${view === 'exterior' ? 'nav-btn-active' : 'nav-btn-inactive'}`}
            >
              Cara Exterior
            </button>
            <button
              onClick={() => setView('interior')}
              className={`nav-btn ${view === 'interior' ? 'nav-btn-active' : 'nav-btn-inactive'}`}
            >
              Cara Interior
            </button>
          </div>
        </header>

        {/* Brochure Container */}
        <div className="brochure-container">
          {/* Fondo de Peces y Camarones */}
          <img
            src={fondoSAIN}
            alt="Fondo de peces y camarones neón"
            className="brochure-bg"
          />

          <div className="brochure-grid">
            {view === 'exterior' ? (
              <>
                {/* PANEL 1: CONTACTO Y CIERRE */}
                <div className="panel panel-border panel-contact">
                  <div>
                    <h3 className="panel-title">
                      <Mail size={20} /> Contáctanos
                    </h3>
                    <ul className="contact-list">
                      <li className="contact-item">
                        <div className="contact-icon"><Phone size={16}/></div>
                        +52 (311) XXX XX XX
                      </li>
                      <li className="contact-item">
                        <div className="contact-icon"><Mail size={16}/></div>
                        contacto@sain-nayarit.com
                      </li>
                    </ul>
                  </div>
                  <div className="commitment-box">
                    <p className="commitment-label">Compromiso Futuro</p>
                    <p className="commitment-text">
                      "En SAIN no solo vendemos equipos, ofrecemos una ruta de mejora continua con suscripciones de mantenimiento y actualizaciones tecnológicas anuales."
                    </p>
                  </div>
                </div>

                {/* PANEL 2: NOSOTROS / TECNOLOGÍA */}
                <div className="panel panel-border panel-tech">
                  <h3 className="panel-title">
                    <Award size={20} /> ¿Por qué SAIN?
                  </h3>
                  <div className="tech-list">
                    <div className="tech-item">
                      <div className="tech-icon"><Cpu /></div>
                      <div>
                        <h4 className="tech-title">Hardware Propio</h4>
                        <p className="tech-description">Sensores de alta precisión diseñados para el entorno acuícola de Nayarit.</p>
                      </div>
                    </div>
                    <div className="tech-item">
                      <div className="tech-icon"><Settings /></div>
                      <div>
                        <h4 className="tech-title">Software Inteligente</h4>
                        <p className="tech-description">Monitoreo en tiempo real desde cualquier dispositivo.</p>
                      </div>
                    </div>
                    <div className="tech-item">
                      <div className="tech-icon"><Zap /></div>
                      <div>
                        <h4 className="tech-title">Suscripción de Mejora</h4>
                        <p className="tech-description">Mantente a la vanguardia con actualizaciones constantes y mantenimiento proactivo.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* PANEL 3: PORTADA */}
                <div className="panel-cover">
                  <div className="logo-wrapper">
                    <div className="logo-glow" />
                    <img
                      src={logoSAIN}
                      alt="Logo SAIN"
                      className="logo-img"
                    />
                  </div>
                  <h2 className="cover-title">SAIN</h2>
                  <p className="cover-location">Nayarit • México</p>
                  <div className="cover-divider" />
                  <p className="cover-text">
                    Sistemas Acuícola Inteligentes: <br/>
                    <span className="cover-highlight">El futuro de la producción.</span>
                  </p>
                </div>
              </>
            ) : (
              <>
                {/* CARA INTERIOR - PANEL 1: EL PROBLEMA/SOLUCIÓN */}
                <div className="panel panel-border interior-panel">
                  <h3 className="interior-title">Eficiencia <span className="interior-highlight">Acuícola</span></h3>
                  <p className="interior-text">
                    La producción tradicional de <span className="text-white font-bold text-blue-300">Camarón y Tilapia</span> enfrenta desafíos críticos que nuestro sistema resuelve mediante inteligencia de datos.
                  </p>
                  <div className="stat-box-red">
                    <h4 className="stat-title-red">
                      <ShieldCheck size={18}/> Menor Mortandad
                    </h4>
                    <p className="stat-description">Reducción drástica de pérdida de biomasa mediante alertas tempranas de parámetros críticos (pH, O₂, Temperatura).</p>
                  </div>
                  <div className="stat-box-green">
                    <h4 className="stat-title-green">
                      <TrendingUp size={18}/> Mayor Crecimiento
                    </h4>
                    <p className="stat-description">Aceleración del ciclo de cosecha optimizando los recursos alimenticios.</p>
                  </div>
                </div>

                {/* CARA INTERIOR - PANEL 2: NATURALEZA NOCTURNA */}
                <div className="night-panel">
                  <div className="night-icon">
                    <Moon size={40} className="text-blue-300" />
                  </div>
                  <h3 className="night-title">Aprovecha la <span className="night-highlight">Noche</span></h3>
                  <p className="night-text">
                    Tanto el camarón como la tilapia poseen una **naturaleza nocturna**. Nuestro sistema inteligente gestiona la alimentación y oxigenación durante las horas críticas de oscuridad.
                  </p>
                  <div className="stats-grid">
                    <div className="stat-card">
                      <span className="stat-number">30%</span>
                      <p className="stat-label">Más Ingesta</p>
                    </div>
                    <div className="stat-card">
                      <span className="stat-number">24/7</span>
                      <p className="stat-label">Monitoreo</p>
                    </div>
                  </div>
                </div>

                {/* CARA INTERIOR - PANEL 3: HARDWARE Y SOFTWARE */}
                <div className="solution-panel">
                  <h3 className="interior-title">Solución <span className="interior-highlight">Integral</span></h3>
                  <div className="solution-grid">
                    <div className="solution-card">
                      <h4 className="solution-card-title">
                        <Waves size={16}/> Sensores (HW)
                      </h4>
                      <p className="solution-card-text">Sondas industriales de grado marino para lectura continua de calidad de agua.</p>
                    </div>
                    <div className="solution-card">
                      <h4 className="solution-card-title">
                        <Cpu size={16}/> Plataforma (SW)
                      </h4>
                      <p className="solution-card-text">Dashboard intuitivo con analítica predictiva y control automático de aireadores.</p>
                    </div>
                    <div className="solution-card">
                      <h4 className="solution-card-title">
                        <ArrowRightLeft size={16}/> Licencia SaaS
                      </h4>
                      <p className="solution-card-text">Acceso a la nube, soporte técnico especializado y garantía extendida.</p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Footer info */}
        <footer className="triptico-footer">
          <p>© 2024 Sistemas Acuícola Inteligentes de Nayarit. Todos los derechos reservados.</p>
          <p className="footer-quote">"Innovación tecnológica para el campo nayarita"</p>
        </footer>
      </div>
    </div>
  );
};

export default TripticoPage;