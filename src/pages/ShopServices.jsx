import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Camera, Cpu, Wifi, Coffee, Droplets, Shield } from 'lucide-react';
import Sidebar from '../components/Sidebar';

const ShopServices = () => {
  const products = [
    {
      id: 1,
      name: 'Modelo SAIN-01',
      tag: 'Económico',
      price: '$ 7,500 MXN',
      image: 'src/assets/Gemini_Generated_Image_3wj3zb3wj3zb3wj3.png',
      description: 'Sistema básico de monitoreo y alimentación automatizada para granjas pequeñas.',
      features: [
        'Dosificador de alimento programable',
        'Sensor de temperatura del agua',
        'Aplicación móvil básica',
        'Batería de respaldo (4 horas)',
        'Cable de 5m para sonda'
      ]
    },
    {
      id: 2,
      name: 'Modelo SAIN-02',
      tag: 'Profesional',
      price: '$ 16,999 MXN',
      image: 'https://static.wixstatic.com/media/556150_8667fb34eb464c5b819021418407c123~mv2.png/v1/fill/w_842,h_645,al_c,q_90,enc_avif,quality_auto/ILUSTRACI%C3%93N.png',
      description: 'Equipo avanzado con visión submarina y control preciso de nutrientes.',
      features: [
        'Cámara submarina 1080p con visión nocturna',
        'Dosificador de alimento de alta precisión',
        'Sensor multiparamétrico (pH, oxígeno, salinidad)',
        'Conectividad 4G y Wi-Fi',
        'Panel solar integrado',
        'Alertas por SMS y correo'
      ]
    },
    {
      id: 3,
      name: 'Software SAIN',
      tag: 'Suscripción anual',
      price: '$ 6,000 MXN / año',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
      description: 'Plataforma de análisis y control para múltiples estanques.',
      features: [
        'Dashboard en tiempo real',
        'Historial de datos hasta 2 años',
        'Reportes automáticos',
        'API para integraciones',
        'Soporte técnico prioritario',
        'Actualizaciones gratuitas'
      ]
    }
  ];

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-8">
        {/* Botón Volver a Servicios (News) */}
        <Link
          to="/news"
          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 mb-6 transition-colors"
        >
          <ArrowLeft size={20} /> Volver a Servicios
        </Link>

        <header className="mb-8">
          <h1 className="text-4xl font-black italic">
            Tienda de <span className="text-cyan-400">Soluciones</span>
          </h1>
          <p className="text-slate-400">
            Equipos y software diseñados para optimizar tu granja acuícola.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Columna izquierda: Información de contacto / asesoría */}
          <div className="lg:col-span-1 bg-slate-900 border border-slate-800 p-6 rounded-3xl h-fit">
            <h2 className="text-xl font-bold mb-4 text-cyan-400">Asesoría Comercial</h2>
            <p className="text-sm text-slate-400 mb-4">
              ¿Necesitas una cotización personalizada o asesoría técnica?
              Contáctanos para conocer promociones especiales para granjas en Nayarit.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-slate-300">
                <Shield size={16} className="text-cyan-400" />
                <span>Garantía de 12 meses en hardware</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Wifi size={16} className="text-cyan-400" />
                <span>Envíos a todo México</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Coffee size={16} className="text-cyan-400" />
                <span>Capacitación incluida</span>
              </div>
            </div>
            <div className="mt-6 p-3 bg-slate-800/50 rounded-xl">
              <p className="text-xs text-slate-500 text-center">
                Los precios mostrados son informativos y pueden cambiar sin previo aviso.
              </p>
            </div>
          </div>

          {/* Columna derecha: Tarjetas de productos */}
          <div className="lg:col-span-2 space-y-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:border-cyan-500/50 transition-all"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Imagen del producto */}
                  <div className="md:w-1/3 h-48 md:h-auto">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Contenido */}
                  <div className="flex-1 p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-2xl font-bold">{product.name}</h3>
                      <span className="text-xs font-bold px-2 py-1 rounded-full bg-cyan-500/20 text-cyan-400">
                        {product.tag}
                      </span>
                    </div>
                    <p className="text-2xl font-black text-cyan-400 mb-3">{product.price}</p>
                    <p className="text-slate-400 text-sm mb-4">{product.description}</p>
                    <ul className="space-y-2 mb-4">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-slate-300">
                          <span className="text-cyan-400 mt-0.5">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    {/* Nota: sin botón de comprar, solo informativo */}
                    <div className="text-xs text-slate-500 border-t border-slate-800 pt-3 mt-2">
                      Precio sujeto a cambios. Solicita cotización formal.
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ShopServices;