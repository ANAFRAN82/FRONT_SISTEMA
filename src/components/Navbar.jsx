import React, { useState } from 'react';
import './Navbar.css';

export default function Navbar({ onNavigate, currentPage }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'INICIO' },
    { id: 'company', label: 'EMPRESA' },
    { id: 'products', label: 'PRODUCTOS' },
    { id: 'contact', label: 'CONTÁCTENOS' },
  ];

  const handleLocationClick = () => {
    const mapUrl = "https://maps.app.goo.gl/W36ci4wkxUadZmw57";
    window.open(mapUrl, "_blank");
    setMenuOpen(false);
  };

  const handleNavigate = (id) => {
    onNavigate(id);
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-header">
          <div className="logo-box">
            <img
              src="/assets/logo1.png"
              className="logo-image"
              alt="Logo izquierdo"
            />
          </div>

          <div className="navbar-title">
            <h1 className="company-name">QUÍMICA ANFA S.A DE C.V</h1>
          </div>

          <div className="logo-box-secondary">
            <img
              src="/assets/logo2.png"
              className="logo-image"
              alt="Logo derecho"
            />
          </div>
        </div>

        {/* ===== MENU ===== */}
        <div className="navbar-menu">

          {/* BOTÓN HAMBURGUESA */}
          <button
            className={`menu-toggle ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menú"
          >
            ☰
          </button>

          <div className={`nav-items ${menuOpen ? 'active' : ''}`}>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`nav-item ${currentPage === item.id ? 'active' : ''}`}
              >
                {item.label}
              </button>
            ))}

            <button
              onClick={handleLocationClick}
              className="nav-item location-btn"
              title="Abrir ubicación en Google Maps"
            >
              UBICACIÓN
            </button>
          </div>
        </div>

      </div>
    </nav>
  );
}
