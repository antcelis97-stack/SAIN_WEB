import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import TripticoPage from './pages/TripticoPage';
import LoginPage from './pages/LoginPage';
import ServicesPage from './pages/ServicesPage'; // La nueva página de la empresa
import Navbar from './components/Navbar';

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
          {/* LOGIN: Si ya está logueado, lo manda al Home (/) */}
          <Route 
            path="/login" 
            element={!isAuthenticated ? <LoginPage onLogin={login} /> : <Navigate to="/" />} 
          />
          {/* HOME: Tu entrada principal (la de la imagen que me mostraste) */}
          <Route 
            path="/" 
            element={isAuthenticated ? <Home /> : <Navigate to="/login" />} 
          />
          {/* TRÍPTICO: La divulgación digital */}
          <Route 
            path="/triptico" 
            element={isAuthenticated ? <TripticoPage /> : <Navigate to="/login" />} 
          />
          {/* SERVICIOS: La nueva sección de prototipos, noticias y feedback */}
          <Route 
            path="/services" 
            element={isAuthenticated ? <ServicesPage /> : <Navigate to="/login" />} 
          />
          {/* REDIRECCIÓN: Si el usuario escribe cualquier otra cosa, al Home */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;