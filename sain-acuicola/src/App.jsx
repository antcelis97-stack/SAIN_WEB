import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Triptico from './components/Triptico';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-950 selection:bg-cyan-500/30">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/triptico" element={<Triptico />} />
        </Routes>
        <footer className="py-8 text-center text-slate-600 text-xs border-t border-slate-900">
          © 2026 Sistemas Acuícola Inteligentes de Nayarit. <br/>
          Innovación de Antonio Salvador López Celis.
        </footer>
      </div>
    </Router>
  );
}

export default App;