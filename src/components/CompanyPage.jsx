import { Target, Eye, Heart, CheckCircle, Briefcase } from 'lucide-react';
import './CompanyPage.css';

const companyInfo = {
  companyDescription: `La empresa Química Anfa S.A de C.V, anteriormente conocida como Maquiladora Miniara S.A de C.V nació en Mayo de 1979, formada por 2 empresarios, los cuales decidieron crear una Empresa Especializada
  en la elaboración de Productos de Limpieza para el Hogar, Cuidado personal, Industria y Automotriz, así como la comercialización de todo tipo de artículos de Jarciería. Desde el inicio de operaciones, la empresa ha tenido
  un desarrollo ascendente en un mercado muy competitivo con productos de primera calidad. Hoy en día contamos con una infraestructura necesaria y tecnología de vanguardia para desarrollar Productos de Limpieza enfocados a cuidar el
  medio ambiente. Actualmente nuestros productos se distribuyen en toda la República Mexicana, bajo los más altos estándares de calidad e innovación constante en el desarrollo de nuevos productos amigables con el medio ambiente desde hace 41 años.
`,

  policy: `En Quimica Anfa S.A. de C.V., fabricamos productos de limpieza de alta calidad con la convicción y el compromiso de satisfacer los requerimientos y expectativas de nuestros Clientes, a través de la mejora continua de nuestro Sistema de Gestión de Calidad (SGC) y de nuestros procesos.`,

  vision: `Ser una empresa líder en el mercado nacional en la fabricación y venta de productos de limpieza.`,

  mission: `Proveer productos de limpieza de la más alta Calidad, mediante procesos controlados y eficientes, brindando un servicio de excelencia a nuestros Clientes y creando un ambiente laboral adecuado para el desarrollo de nuestros colaboradores.`,

  objectives: `• Satisfacer los requerimientos y expectativas de nuestros Clientes.
  • Mejorar el tiempo de respuesta a solicitudes de los Clientes, cumpliendo con el programa de producción.
  • Mejorar de manera continua la eficacia del Sistema de Gestión de Calidad (SGC).`,

  values: `El crecimiento de Quimica Anfa S.A de C.V antes llamada Maquiladora Miniara S.A de C.V se cimienta en los valores con los que se creo la empresa que son:

  • Eficiencia
  • Actitud de servicio
  • Comportamiento ético
  • Compromiso con la calidad
  • Tolerancia, compañerismo y respeto mutuo
  • Respeto y conservación del medio ambiente`,
};
export default function CompanyPage() {
  return (
    <div className="company-page">
      <div className="company-container">

        <h1 className="company-title">NUESTRA EMPRESA</h1>

        <div className="company-section">
          <div className="company-flex">
            <p className="company-description"
            >
              {companyInfo.companyDescription}
            </p>

            <img
              src="/assets/ISO-9001.png"
              className="company-logo"
            />
          </div>
        </div>

        <div className="card-grid">

          <div className="card card-quality">
            <div className="card-header">
              <div className="card-icon-box">
                <Target className="h-8 w-8" />
              </div>
              <h2 className="card-title">POLÍTICA DE CALIDAD</h2>
            </div>
            <p className="card-text">{companyInfo.policy}</p>
          </div>

          <div className="card card-vision">
            <div className="card-header">
              <div className="card-icon-box">
                <Eye className="h-8 w-8" />
              </div>
              <h2 className="card-title">VISIÓN</h2>
            </div>
            <p className="card-text">{companyInfo.vision}</p>
          </div>
        </div>

        <div className="card-grid">

          <div className="card card-mission">
            <div className="card-header">
              <div className="card-icon-box">
                <Target className="h-8 w-8" />
              </div>
              <h2 className="card-title">MISIÓN</h2>
            </div>
            <p className="card-text">{companyInfo.mission}</p>
          </div>

          <div className="card card-objectives">
            <div className="card-header">
              <div className="card-icon-box">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h2 className="card-title">NUESTROS OBJETIVOS</h2>
            </div>
            <p className="card-text">{companyInfo.objectives}</p>
          </div>
        </div>

        <div className="card card-values" style={{ maxWidth: "40rem", margin: "0 auto" }}>
          <div className="card-header">
            <div className="card-icon-box">
              <Heart className="h-8 w-8" />
            </div>
            <h2 className="card-title">NUESTROS VALORES</h2>
          </div>
          <p className="card-text">{companyInfo.values}</p>
        </div>

      
        <div className="card card-clients">
          <div className="card-header" style={{ justifyContent: "center" }}>
            <div className="card-icon-box">
              <Briefcase className="h-8 w-8" />
            </div>
            <h2 className="card-title">CLIENTES PRINCIPALES</h2>
          </div>

          <img 
            src="/assets/CLIENTES.png"
            className="clients-img"
          />
        </div>

      </div>
    </div>
  );
}
