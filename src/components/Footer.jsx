import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import '../components/Footer.css';


export default function Footer({ onNavigate }) {
  return (
    <footer className="footer-wrapper">
      <div className="footer-container">
        <div className="footer-grid">
      
          <div className="footer-section">
            <div className="footer-brand">
              <img src="/assets/logo1.png" alt="Logo Química Anfa" className="logo-image" />
              <span className="footer-brand-name"> QUÍMICA ANFA</span>
            </div>
            <div className="footer-social">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon facebook-bg">
                <Facebook className="social-icon-svg" />
              </a>
              <a href="https://www.instagram.com/anfaquimica/" target="_blank" rel="noopener noreferrer" className="social-icon instagram-bg">
                <Instagram className="social-icon-svg" />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-section-title">Enlaces Rápidos</h3>
            <ul className="footer-links">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="footer-link"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('products')}
                  className="footer-link"
                >
                  Productos
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('company')}
                  className="footer-link"
                >
                  Empresa
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="footer-link"
                >
                  Contáctenos
                </button>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-section-title">Contacto</h3>
            <ul className="footer-contact">
              <li className="footer-contact-item">
                <Mail className="contact-icon mail-color" />
                <p className="contact-info">sistemaweb71@gmail.com</p>
              
              </li>
              <li className="footer-contact-item">
                <Phone className="contact-icon phone-color" />
                <div>
                  <p className="contact-info"></p>
                </div>
              </li>
              <li className="footer-contact-item location-item">
                <MapPin className="contact-icon location-color" />
                <p className="contact-address">
                  Carretera Jilotepec-Soyaniquilpan KM. 13.5 Manzana 2 Lote 1,
                  Col. Parque Industrial, C.P.54253, Jilotepec, Méx.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
    </footer>
  );
}