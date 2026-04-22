import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Send, Bot, User, HelpCircle } from 'lucide-react';
import Sidebar from '../components/Sidebar';

// Base de conocimiento (preguntas y respuestas)
const knowledgeBase = [
  {
    keywords: ['precio', 'costo', 'cuánto cuesta', 'valor', '$', 'mxn'],
    answer: 'Nuestros productos: Modelo SAIN-01 (económico) cuesta $2,499 MXN. Modelo SAIN-02 (profesional) cuesta $6,999 MXN. El software SAIN Cloud tiene un costo de $990 MXN por año. ¿Necesitas una cotización formal? Escríbenos a ventas@sain.mx'
  },
  {
    keywords: ['garantía', 'garantia', 'cobertura', 'falla'],
    answer: 'Todos nuestros equipos tienen garantía de 12 meses contra defectos de fabricación. La garantía cubre reparación o reemplazo del producto. No cubre daños por mal uso o instalación incorrecta. Para solicitar garantía, contacta a soporte@sain.mx'
  },
  {
    keywords: ['enviar', 'envío', 'envios', 'entrega', 'llegada'],
    answer: 'Realizamos envíos a todo México. El costo de envío varía según la ubicación (aproximadamente $200-$500 MXN). El tiempo de entrega es de 3 a 7 días hábiles. Para pedidos grandes, contáctanos para cotizar envío especial.'
  },
  {
    keywords: ['instalar', 'instalación', 'configurar', 'montar'],
    answer: 'Cada equipo incluye un manual de instalación paso a paso. También ofrecemos asistencia remota por videollamada. Si necesitas instalación presencial, tenemos técnicos en Nayarit con costo adicional. Escríbenos a instalaciones@sain.mx'
  },
  {
    keywords: ['camara', 'cámara', 'subacuática', 'vision nocturna'],
    answer: 'El Modelo SAIN-02 incluye cámara submarina 1080p con visión nocturna. Puedes ver en tiempo real la actividad de tus camarones desde la app. La cámara es resistente al agua salada y tiene cable de 10 metros.'
  },
  {
    keywords: ['software', 'app', 'aplicación', 'dashboard', 'cloud'],
    answer: 'SAIN Cloud es nuestra plataforma de análisis. Puedes ver históricos de pH, oxígeno y temperatura, recibir alertas y generar reportes. Funciona en navegador web y app móvil. La suscripción anual cuesta $990 MXN.'
  },
  {
    keywords: ['soporte', 'ayuda', 'problema', 'error', 'fallo'],
    answer: '¿Tienes algún problema técnico? Contáctanos a soporte@sain.mx o llama al +52 311 258 7943 (horario: lunes a viernes 9am-6pm). Nuestro equipo te ayudará a resolverlo lo antes posible.'
  },
  {
    keywords: ['pagar', 'pago', 'tarjeta', 'transferencia', 'depósito'],
    answer: 'Aceptamos pagos mediante transferencia bancaria, depósito en OXXO, tarjeta de crédito/débito (vía link de pago) y PayPal. Una vez confirmado el pago, procesamos tu pedido en 24 horas.'
  }
];

// Respuesta por defecto cuando no encuentra coincidencia
const DEFAULT_ANSWER = "Lo siento, no puedo ayudarte con esa pregunta en este momento. 😓 Por favor, comunícate con nuestro soporte técnico a soporte@sain.mx o llámanos al +52 311 258 7943. ¡Estaremos encantados de atenderte personalmente!";

// Función para buscar respuesta basada en el texto del usuario
const getAnswer = (question) => {
  const lowerQuestion = question.toLowerCase();
  for (const item of knowledgeBase) {
    for (const keyword of item.keywords) {
      if (lowerQuestion.includes(keyword.toLowerCase())) {
        return item.answer;
      }
    }
  }
  return DEFAULT_ANSWER;
};

const FeedbackPage = () => {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: '¡Hola! Soy el asistente de SAIN. ¿Tienes alguna duda sobre nuestros productos, precios, garantía o instalación? Puedes preguntarme y haré mi mejor esfuerzo por ayudarte. Si no puedo, te daré el contacto de soporte.' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Sugerencias rápidas (preguntas precargadas)
  const quickQuestions = [
    '¿Cuánto cuesta el SAIN-01?',
    '¿Tienen garantía?',
    '¿Cómo puedo comprar?',
    '¿El SAIN-02 tiene cámara?',
    'Problemas con mi equipo',
    '¿Cómo instalo el sensor?'
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = (text) => {
    const userText = text || input.trim();
    if (!userText || isLoading) return;

    const userMessage = { role: 'user', content: userText };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Simular tiempo de respuesta (para dar sensación de procesamiento)
    setTimeout(() => {
      const answer = getAnswer(userText);
      setMessages(prev => [...prev, { role: 'assistant', content: answer }]);
      setIsLoading(false);
    }, 500);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-8 flex flex-col">
        {/* Botón Volver a Servicios */}
        <Link
          to="/news"
          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 mb-6 transition-colors self-start"
        >
          <ArrowLeft size={20} /> Volver a Servicios
        </Link>

        <header className="mb-6">
          <h1 className="text-4xl font-black italic">
            Centro de <span className="text-cyan-400">Soporte</span>
          </h1>
          <p className="text-slate-400">
            ¿Tienes dudas, sugerencias o comentarios? Pregúntanos o elige una opción rápida.
          </p>
        </header>

        {/* Contenedor del chat */}
        <div className="flex-1 bg-slate-900/50 border border-slate-800 rounded-3xl flex flex-col overflow-hidden">
          {/* Mensajes */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.role === 'assistant' && (
                  <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                    <Bot size={16} className="text-cyan-400" />
                  </div>
                )}
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                    msg.role === 'user'
                      ? 'bg-blue-600 text-white rounded-br-none'
                      : 'bg-slate-800 text-slate-200 rounded-bl-none'
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                </div>
                {msg.role === 'user' && (
                  <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center flex-shrink-0">
                    <User size={16} className="text-slate-300" />
                  </div>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-3 justify-start">
                <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center">
                  <div className="w-3 h-3 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
                </div>
                <div className="bg-slate-800 rounded-2xl rounded-bl-none px-4 py-3">
                  <p className="text-sm text-slate-400">Escribiendo...</p>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Preguntas rápidas */}
          <div className="border-t border-slate-800 p-4 bg-slate-900/30">
            <div className="flex items-center gap-2 mb-3 text-xs text-slate-400">
              <HelpCircle size={14} />
              <span>Preguntas frecuentes:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {quickQuestions.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => sendMessage(q)}
                  className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 px-3 py-1.5 rounded-full transition-colors"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          {/* Input del chat */}
          <div className="border-t border-slate-800 p-4">
            <div className="flex gap-3">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Escribe tu pregunta aquí..."
                className="flex-1 bg-slate-950 border border-slate-700 rounded-xl p-3 text-sm text-slate-200 focus:border-cyan-500 outline-none resize-none"
                rows="2"
              />
              <button
                onClick={() => sendMessage()}
                disabled={isLoading || !input.trim()}
                className="bg-cyan-600 hover:bg-cyan-500 disabled:bg-slate-700 disabled:cursor-not-allowed rounded-xl px-5 flex items-center justify-center transition-colors"
              >
                <Send size={18} />
              </button>
            </div>
            <p className="text-xs text-slate-500 mt-2">
              Respuestas automáticas basadas en información de SAIN. Para temas no cubiertos, te contactaremos con soporte humano.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FeedbackPage;