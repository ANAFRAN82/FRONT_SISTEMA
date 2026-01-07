import React from 'react';
import { ArrowRight } from 'lucide-react';
import './ProductsPage.css'; 

export const categories = [
  {
    id: '1',
    name: 'DETERGENTES LÍQUIDOS',
    slug: 'detergente-liquido',
    description: 'Para ropa de color y obscura',
    imageUrl: '/assets/detergente.jpg',
    orderPosition: 1
  },
  {
    id: '2',
    name: 'SUAVIZANTES DE TELAS',
    slug: 'suavizante-telas',
    description: 'Aroma Primavera / Aroma Fresco Amanecer / Bebé / Libre Enguaje',
    imageUrl: '/assets/suavisante.jpg',
    orderPosition: 2
  },
  {
    id: '3',
    name: 'LIMPIADORES MULTIUSOS',
    slug: 'limpiador-multiusos',
    description: 'Pino / Lavanda / Frutal / Limón / Tropical',
    imageUrl: '/assets/limpiador.jpg',
    orderPosition: 3
  },
  {
    id: '4',
    name: 'LÍNEA INDUSTRIAL',
    slug: 'linea-industrial',
    description: 'Desengrasante / Germinicida / Cera para pisos / Pasta para Pulir Mármol',
    imageUrl: '/assets/industrial.jpg',
    orderPosition: 4
  },
  {
    id: '5',
    name: 'LÍNEA AUTOMOTRIZ',
    slug: 'linea-automotriz',
    description: 'Shampoo para carrocerias / Cera Automotriz / AntiCongelante / Limpia vidrios',
    imageUrl: '/assets/automotriz.jpg',
    orderPosition: 5
  },
  {
    id: '6',
    name: 'PRODUCTOS DE JARCERÍA',
    slug: 'jarceria',
    description: 'Instrumentos para la limpieza empresarial',
    imageUrl: '/assets/jarceria.jpg',
    orderPosition: 6
  },
  {
    id: '7',
    name: 'SEGURIDAD ALIMENTARIA',
    slug: 'seguridad-alimentaria',
    description: 'Limpieza y desinfeccion de alimentos y utencilios de cocina',
    imageUrl: '/assets/segindustrial.jpg',
    orderPosition: 7
  }
];

export default function ProductsPage({ onCategoryClick }) {
  const availableCategories = categories;

  return (
    <div className="page-wrapper">
      <div className="container">
        <div className="header-text-container">
          <h1 className="main-title"
          style={{ fontFamily: '"Oswald", sans-serif'}}>
            NUESTROS PRODUCTOS
          </h1>
        </div>

        <div className="category-grid">
          {availableCategories.map((category, index) => {
            return (
              <div
                key={category.id}
                className="category-card">
                <div className="image-wrapper">
                  <img
                    src={category.imageUrl}
                    alt={category.name}
                    className="card-image"
                  />
                  <div className="image-overlay"></div>
                  <div className="card-title-container">
                    <h3 className="card-title" style={{ fontFamily: '"Oswald", sans-serif' }}>
                      {category.name}
                    </h3>
                  </div>
                </div>
                <div className="card-content">
                  <p className="card-description" style={{ fontFamily: '"Josefin Sans", sans-serif' }}>
                    {category.description}
                  </p>
                  <button
                    onClick={() => onCategoryClick(category.slug)}
                    className="product-button"
                  >
                    <span style={{ fontFamily: '"Josefin Sans", sans-serif' }}>Ver Productos</span>
                    <ArrowRight className="h-5 w-5 button-icon" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}