import React, { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { LanguageSelector } from "./LanguageSelector";
import { languageManager } from "../lib/translations";

const FacchiniNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [counter, setCounter] = useState(0);
  const topbarRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  const calculateYearsOfExperience = () => {
    const dateFounded = "1993-08-24";
    const currentDate = new Date();
    const foundingDate = new Date(dateFounded);
    return Math.floor(
      (currentDate.getTime() - foundingDate.getTime()) /
        (1000 * 60 * 60 * 24 * 365.25)
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const yearsOfExperience = calculateYearsOfExperience();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            let startTimestamp: number | null = null;
            const duration = 2000; // 2 seconds

            const animate = (timestamp: number) => {
              if (!startTimestamp) startTimestamp = timestamp;
              const progress = Math.min(
                (timestamp - startTimestamp) / duration,
                1
              );
              const easeOutQuart = 1 - Math.pow(1 - progress, 4);
              setCounter(Math.round(yearsOfExperience * easeOutQuart));

              if (progress < 1) {
                requestAnimationFrame(animate);
              }
            };

            requestAnimationFrame(animate);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (topbarRef.current) {
      observer.observe(topbarRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const handleWhatsAppClick = () => {
    // Track event
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "click_whatsapp_header", {
        page_section: "header",
      });
    }
    const message = languageManager.getWhatsAppMessage("contact");
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5511917110573?text=${encodedMessage}`, "_blank");
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      {/* Optional topbar */}
      <div
        ref={topbarRef}
        className="hidden lg:block bg-facchini-accent-1 text-black text-center py-2 text-sm"
      >
        {counter}{" "}
        <span data-translate="navTopbar">
          anos de obras entregues com excelência • +100 mil m² executados
        </span>
      </div>

      <div className="section-container">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="../Facchini_Logo.png"
              alt="Facchini Engenharia"
              width={180}
              height={10}
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("sobre")}
              className="nav-link"
              data-translate="navAbout"
            >
              SOBRE
            </button>
            <button
              onClick={() => scrollToSection("servicos")}
              className="nav-link"
              data-translate="navServices"
            >
              SERVIÇOS
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="nav-link"
              data-translate="navPortfolio"
            >
              PORTFÓLIO
            </button>
            <button
              onClick={() => scrollToSection("depoimentos")}
              className="nav-link"
              data-translate="navTestimonials"
            >
              DEPOIMENTOS
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="nav-link"
              data-translate="navContact"
            >
              CONTATO
            </button>
          </div>

          {/* Language Selector & CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageSelector />
            <button
              onClick={handleWhatsAppClick}
              className="button-secondary text-sm"
              data-translate="navWhatsApp"
            >
              FALAR NO WHATSAPP
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
              {/* Language Selector for Mobile */}
              <div className="mb-2">
                <LanguageSelector />
              </div>

              <button
                onClick={() => scrollToSection("sobre")}
                className="nav-link text-left"
                data-translate="navAbout"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("servicos")}
                className="nav-link text-left"
                data-translate="navServices"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="nav-link text-left"
                data-translate="navPortfolio"
              >
                Portifólio
              </button>
              <button
                onClick={() => scrollToSection("depoimentos")}
                className="nav-link text-left"
                data-translate="navTestimonials"
              >
                Depoimentos
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="nav-link text-left"
                data-translate="navContact"
              >
                Contato
              </button>
              <button
                onClick={handleWhatsAppClick}
                className="button-secondary text-sm mt-4"
                data-translate="navWhatsApp"
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
