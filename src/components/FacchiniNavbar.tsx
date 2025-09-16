import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const FacchiniNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const handleWhatsAppClick = () => {
    // Track event
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'click_whatsapp_header', {
        page_section: 'header'
      });
    }
    window.open('https://wa.me/5511999999999', '_blank');
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      {/* Optional topbar */}
      <div className="hidden lg:block bg-facchini-accent-1 text-black text-center py-2 text-sm">
        31 anos de obras entregues com excelência • +170 mil m² executados
      </div>
      
      <div className="section-container">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-facchini-accent-2">
              Facchini
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('sobre')} className="nav-link">Sobre</button>
            <button onClick={() => scrollToSection('servicos')} className="nav-link">Serviços</button>
            <button onClick={() => scrollToSection('portfolio')} className="nav-link">Portfólio</button>
            <button onClick={() => scrollToSection('depoimentos')} className="nav-link">Depoimentos</button>
            <button onClick={() => scrollToSection('contato')} className="nav-link">Contato</button>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={handleWhatsAppClick}
              className="button-secondary text-sm"
            >
              Falar no WhatsApp
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md rounded-lg mt-2 p-4">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('sobre')} className="nav-link text-left">Sobre</button>
              <button onClick={() => scrollToSection('servicos')} className="nav-link text-left">Serviços</button>
              <button onClick={() => scrollToSection('portfolio')} className="nav-link text-left">Portfólio</button>
              <button onClick={() => scrollToSection('depoimentos')} className="nav-link text-left">Depoimentos</button>
              <button onClick={() => scrollToSection('contato')} className="nav-link text-left">Contato</button>
              <button
                onClick={handleWhatsAppClick}
                className="button-secondary text-sm mt-4"
              >
                Falar no WhatsApp
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default FacchiniNavbar;