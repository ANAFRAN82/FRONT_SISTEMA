import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './Carousel.css'; 

export default function Carousel({ categories, onCategoryClick }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % categories.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [categories.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + categories.length) % categories.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % categories.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  if (!categories || categories.length === 0) {
    return <div className="carousel-empty-state">No hay categorías para mostrar.</div>;
  }

  return (
    <div className="carousel-wrapper">
      {categories.map((category, index) => (
        <div
          key={category.id}
          className={`carousel-slide ${
            index === currentIndex ? 'opacity-active' : 'opacity-inactive'
          }`}
        >
          <img
            src={category.imageUrl}
            alt={category.name}
            className="slide-image"
          />
          <div className="slide-overlay">
            <div className="slide-content">
              <h2 className="slide-title" style={{fontFamily:'"Oswald", sans-serif'}}>{category.name}</h2>
              <p className="slide-description" style={{fontFamily:'"Lato", sans-serif'}}>{category.description}</p>
              <button
                onClick={() => onCategoryClick(category.slug)}
                className="slide-button"
              >
                Ver Productos
              </button>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={goToPrevious}
        className="nav-button nav-button-left"
      >
        <ChevronLeft className="nav-icon" />
      </button>

      <button
        onClick={goToNext}
        className="nav-button nav-button-right"
      >
        <ChevronRight className="nav-icon" />
      </button>

      <div className="indicator-container">
        {categories.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`indicator-dot ${
              index === currentIndex ? 'indicator-active' : 'indicator-inactive'
            }`}
          />
        ))}
      </div>
    </div>
  );
}