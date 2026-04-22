import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import TripticoPage from './pages/TripticoPage';
import LoginPage from './pages/LoginPage';
import ServicesPage from './pages/ServicesPage';
import PrototypePage from './pages/PrototypePage';
import Navbar from './components/Navbar';
import ShopServices from './pages/ShopServices';
import FeedbackPage from './pages/FeedbackPage';

function App() {
  // Mantenemos tu lógica de localStorage intacta
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('user_access') === 'true'
  );

  const login = () => {
    localStorage.setItem('user_access', 'true');
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem('user_access');
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
        {/* El Navbar ahora sí recibe la función logout correctamente */}
        {isAuthenticated && <Navbar onLogout={logout} />}
        <Routes>
          <Route path="/login" element={!isAuthenticated ? <LoginPage onLogin={login} /> : <Navigate to="/" />} />
          <Route path="/" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />
          <Route path="/triptico" element={isAuthenticated ? <TripticoPage /> : <Navigate to="/login" />} />
          
          {/* Rutas separadas para cada sección del menú */}
          <Route path="/news" element={isAuthenticated ? <ServicesPage /> : <Navigate to="/login" />} />
          <Route path="/prototypes" element={<PrototypePage />} />
          <Route path="/shop" element={isAuthenticated ? <ShopServices /> : <Navigate to="/login" />} />

          
          {/* Redirección de rutas antiguas por compatibilidad */}
          <Route path="/services" element={<Navigate to="/news" />} />
          <Route path="/servicios" element={<Navigate to="/news" />} />
          <Route path="/feedback" element={isAuthenticated ? <FeedbackPage /> : <Navigate to="/login" />} />
          {/*Redirección por si se escribe mal la dirección */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;