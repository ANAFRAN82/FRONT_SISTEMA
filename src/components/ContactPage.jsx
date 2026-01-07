import { useState } from 'react';
import { Send, MessageSquare, CheckCircle2, MapPin, Clock, AlertTriangle } from 'lucide-react';
import './ContactPage.css'; 

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'sugerencia',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(null);      

  const FORMSPREE_URL = 'https://formspree.io/f/xpqawkoq'; 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); 
    setError(null);  
    setSubmitted(false); 

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          type: 'sugerencia',
          message: ''
        });

        setTimeout(() => {
          setSubmitted(false);
        }, 3000);

      } else {
        const data = await response.json();
        setError(data.error ? data.error : 'Ocurrió un error al enviar el formulario.');
      }

    } catch (err) {
      setError('No se pudo contactar al servidor. Revisa tu conexión a internet.');
      console.error('Error de red al enviar el formulario:', err);

    } finally {
      setLoading(false); 
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="contact-wrapper">
      <div className="contact-container">
        <div className="contact-title-container">
          <h1 className="contact-title">CONTÁCTANOS</h1>
        </div>

        <div className="form-wrapper flex justify-center w-full">
          <div className="form-card">
            <h2 className="form-heading">
              <MessageSquare className="icon" />
              FORMULARIO DE CONTACTO
            </h2>

            {submitted ? (
              <div className="form-success">
                <CheckCircle2 className="form-success-icon" />
                <h3 className="form-success-title">¡Mensaje Enviado!</h3>
                <p className="form-success-text">Gracias por tu mensaje. Te contacteremos pronto.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="form-grid">
                
                {error && (
                  <div className="form-error">
                    <AlertTriangle className="form-error-icon" />
                    <p className="form-error-text">**Error:** {error}</p>
                  </div>
                )}

                <div>
                  <label htmlFor="name" className="form-label">Nombre *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Nombre"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="form-label">Correo Electrónico *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="form-label">Teléfono (Opcional)</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="(123) 456-7890"
                  />
                </div>

                <div>
                  <label htmlFor="type" className="form-label">Tipo de Mensaje *</label>
                  <select
                    id="type"
                    name="type"
                    required
                    value={formData.type}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="sugerencia">Sugerencia</option>
                    <option value="queja">Queja</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="form-label">Mensaje *</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="form-textarea"
                    placeholder="Escribe tu mensaje aquí..."
                  />
                </div>

                <button 
                  type="submit" 
                  className="form-button"
                  disabled={loading} 
                >
                  <Send className="icon" />
                  <span style={{ fontFamily: '"Oswald", sans-serif' }}>
                    {loading ? 'Enviando...' : 'Enviar Mensaje'}
                  </span>
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="location-section">
          <div className="location-header">
            <h2 className="location-title" style={{ fontFamily: '"Oswald", sans-serif' }}>
              <MapPin /> UBICACIÓN
            </h2>
          </div>

          <div className="location-grid">

            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8818.091361323312!2d-99.524717!3d19.9712948!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d237e2530c67bb%3A0x5c0c3fa18680c306!2sQUIMICA%20ANFA%20S.A%20DE%20C.V!5e1!3m2!1ses!2smx!4v1765466573353!5m2!1ses!2smx"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación"
              />
            </div>

            <div className="location-info">
              <h3 className="location-info-title">VISÍTANOS</h3>
              <div className="location-item">
                <span className="icon-wrapper"><MapPin /> </span>
                <div className="location-item-title"> Dirección Completa
                  <p className="location-item-text">
                    Carretera Jilotepec-Soyaniquilpan KM. 13.5
                    Manzana 2 Lote 1, 
                    Colonia Parque Industrial,
                    C.P.54253, Jilotepec de Molina Enríquez, Méx.
                  </p>
                </div>
              </div>

              <div className="location-item">
                <span className="icon-wrapper"><Clock /></span>
                <div className="location-item-title"> Horario
                  <p className="location-item-text">Lunes a Viernes: 7:00 am - 4:36 pm</p>
                  <p className="location-item-text">Sábados y Domingos: Cerrado</p>
                </div>
              </div>
            </div>


          </div>
        </div>

      </div>
    </div>
  );
}