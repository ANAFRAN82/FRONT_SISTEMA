import React from 'react';
import { Mail, Phone, MapPin, Instagram } from 'lucide-react';
import '../components/Footer.css';

export default function Footer({ onNavigate }) {
  const handleNavigate = (section) => {
    if (onNavigate) onNavigate(section);
  };

  return (
    <footer className="footer-wrapper">
      <div className="footer-container">
        <div className="footer-grid">

          {/* Marca */}
          <div className="footer-section">
            <div className="footer-brand">
              <img
                src="/assets/logo1.png"
                alt="Logo Química Anfa"
                className="logo-image"
              />
              <span className="footer-brand-name">QUÍMICA ANFA</span>
            </div>

            <div className="footer-social">
              <a
                href="https://www.instagram.com/anfaquimica/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Química Anfa"
                className="social-icon instagram-bg"
              >
                <Instagram className="social-icon-svg" />
              </a>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div className="footer-section">
            <h3 className="footer-section-title">Enlaces Rápidos</h3>
            <ul className="footer-links">
              <li>
                <button onClick={() => handleNavigate('home')} className="footer-link">
                  Inicio
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('products')} className="footer-link">
                  Productos
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('company')} className="footer-link">
                  Empresa
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('contact')} className="footer-link">
                  Contáctenos
                </button>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div className="footer-section">
            <h3 className="footer-section-title">Contacto</h3>

            <ul className="footer-contact">
              <li className="footer-contact-item">
                <Mail className="contact-icon mail-color" />
                <div className="contact-text">
                  <p>sistemaweb71@gmail.com</p>
                </div>
              </li>

             

              <li className="footer-contact-item">
                <MapPin className="contact-icon location-color" />
                <div className="contact-text">
                  <p>Carretera Jilotepec-Soyaniquilpan KM. 13.5 Manzana 2 Lote 1, Col. Parque Industrial,  C.P. 54253, Jilotepec, Méx.</p>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
}
