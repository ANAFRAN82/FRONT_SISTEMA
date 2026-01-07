import React from 'react';
import { Award, Users, TrendingUp, Factory, Beaker, ShieldCheck } from 'lucide-react';
import Carousel from './Carousel';
import '../components/HomePage.css';
export default function HomePage({ categories, onCategoryClick, onNavigate }) {

  const services = [
    {
      icon: Factory,
      title: 'Maquila de Productos',
      description: 'Contamos con amplia experiencia, personal altamente calificado y equipo de alta tecnología que nos permite ofrecerte los servicios de maquila de productos. Todos nuestros procesos de fabricación son realizados bajo los más rigurosos estándares de calidad, garantizamos la confidencialidad de tu fórmula',
      color: '#AA4B92',
      bgGradient: 'from-[#AA4B92] to-[#A85D9A]',
      cssClass: 'service-maquila'
    },
    {
      icon: ShieldCheck,
      title: 'Seguridad Alimentaria',
      description: 'Apoyamos a cocinas de restaurantes y comedores industriales de todo el territorio nacional a la limpieza y desinfección de alimentos y utensilios de trabajo para ayudar a los clientes a evitar enfermedades alimentarias, con nuestra línea de productos',
      color: '#0C8E34',
      bgGradient: 'from-[#0C8E34] to-[#70A927]',
      cssClass: 'service-seguridad'
    },
    {
      icon: Beaker,
      title: 'Desarrollo de Productos',
      description: `¿Tiene usted la idea de fabricar un nuevo producto de limpieza? 
      En Química Anfa contamos con nuestro departamento de Desarrollo de Nuevos Productos. Podemos fabricar su producto de limpieza cubriendo las necesidades que usted demanda, con propuestas económicas y calidad prémium, utilizando la mejor materia prima del mercado.

      Líneas disponibles:
      • Hogar
      • Cuidado Personal
      • Automotriz
      • Industrial

      Además, contamos con el equipo técnico y profesional para desarrollar la imagen gráfica de su producto y lograr su éxito en el mercado.`,
      color: '#EB8D23',
      bgGradient: 'from-[#EB8D23] to-[#E6CE18]',
      cssClass: 'service-desarrollo'
    }
  ];


  const achievements = [
    {
      icon: Award,
      title: '42',
      description: 'AÑOS DE EXPERIENCIA',
      color: '#3E9FD7',
      cssClass: 'achievement-award'
    },
    {
      icon: Users,
      title: 'PRODUCCIÓN DIARIA',
      description: '120,000 L',
      color: '#0C8E34',
      cssClass: 'achievement-users'
    },
    {
      icon: TrendingUp,
      title: '100% ',
      description: 'ACTITUD DE SERVICIO',
      color: '#AA4B92',
      cssClass: 'achievement-trending'
    }
  ];

  return (
    <div className="home-page-wrapper">
      <div className="page-container">
        <Carousel categories={categories} onCategoryClick={onCategoryClick} />

        <div className="content-section">
          <div className="services-grid">

            {services.map((service, index) => (
              <div
                key={index}
                className={`service-card ${service.cssClass} ${index === 2 ? 'service-card-full-width' : ''}`}
              >

                <div className="service-content">
                  <div className="service-icon-wrapper">
                    <service.icon className="service-icon" />
                  </div>
                  <h3 className="service-title"
                    style={{ fontFamily: '"Oswald", sans-serif' }}>
                    {service.title}
                  </h3>
                  <p className="service-description"
                    style={{
                      textAlign: "justify",
                      fontFamily: '"Lato", sans-serif'
                    }}
                  >
                    {service.description}
                  </p>
                </div>
                <div className="service-button-container">
                  <button
                    onClick={() => onNavigate("contact")}
                    className='contact-button'>
                    CONTÁCTENOS
                  </button>
                </div>

              </div>
            ))}
          </div>

          <h2 className="achievements-title"
            style={{ fontFamily: '"Oswald", sans-serif' }}>
            NUESTROS LOGROS
          </h2>

          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="achievement-card"
              >
                <div
                  className={`achievement-icon-wrapper ${achievement.cssClass}`}  >
                  <achievement.icon
                    className="achievement-icon"
                  />
                </div>
                <h3 className="achievement-count"
                  style={{ fontFamily: '"Oswald", sans-serif' }}>
                  {achievement.title}
                </h3>
                <p className="achievement-description"
                  style={{ fontFamily: '"Oswald", sans-serif' }}
                >{achievement.description}</p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}