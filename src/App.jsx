import { useState } from 'react';

import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import ProductsPage, { categories as allCategories } from './components/ProductsPage';
import CategoryPage from './components/CategoryPage';
import CompanyPage from './components/CompanyPage';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
import Chatbot from './components/chatbot';
import companyInfo from './components/CompanyPage';

import { MessageCircle } from 'lucide-react';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showChatbot, setShowChatbot] = useState(false);
  const handleNavigate = (page) => {
    setCurrentPage(page);
    setSelectedCategory(null);
  };

  const handleCategoryClick = (slug) => {
    if (slug === 'all') {
      setCurrentPage('products');
      setSelectedCategory(null);
    } else {
      setCurrentPage('category');
      setSelectedCategory(slug);
    }
  };

  const handleBackToProducts = () => {
    setCurrentPage('products');
    setSelectedCategory(null);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomePage
            categories={allCategories}
            onCategoryClick={handleCategoryClick}
            onNavigate={handleNavigate}
          />
        );

      case 'products':
        return (
          <ProductsPage
            categories={allCategories}
            onCategoryClick={handleCategoryClick}
          />
        );

      case 'category':
        return (
          <CategoryPage
            categorySlug={selectedCategory}
            onBack={handleBackToProducts}
          />
        );

      case 'company':
        return <CompanyPage companyInfo={companyInfo} />;

      case 'contact':
        return <ContactPage />;

      default:
        return null;
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fff'
      }}
    >
      <Navbar onNavigate={handleNavigate} currentPage={currentPage} />

      <main style={{ flexGrow: 1 }}>
        {renderPage()}
      </main>

      <Footer onNavigate={handleNavigate} />

      <button
        onClick={() => setShowChatbot(true)}
        aria-label="Abrir chatbot"
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          backgroundColor: '#21478B',
          border: 'none',
          color: '#fff',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 999
        }}
      >
        <MessageCircle size={28} />
      </button>
      {showChatbot && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.45)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000
          }}
        >
          <div
            style={{
              width: '360px',
              height: '500px',
              background: '#fff',
              borderRadius: '12px',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <header
              style={{
                background: '#21478B',
                color: '#fff',
                padding: '10px 15px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <span>Asistente Virtual</span>
              <button
                onClick={() => setShowChatbot(false)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#fff',
                  fontSize: '18px',
                  cursor: 'pointer'
                }}
              >
                ✕
              </button>
            </header>

            <Chatbot />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
