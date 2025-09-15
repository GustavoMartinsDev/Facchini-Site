import React, { useEffect, useRef, useState } from "react";

const FacchiniAbout = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [counters, setCounters] = useState({
    years: 0,
    area: 0,
    cities: 0,
    stores: 0,
    architects: 0
  });
  const [hasAnimated, setHasAnimated] = useState(false);

  const targetValues = {
    years: 31,
    area: 170,
    cities: 15,
    stores: 250,
    architects: 50
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounters();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    const duration = 2000; // 2 seconds
    const steps = 60; // 60 FPS
    const stepDuration = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      setCounters({
        years: Math.round(targetValues.years * easeOutQuart),
        area: Math.round(targetValues.area * easeOutQuart),
        cities: Math.round(targetValues.cities * easeOutQuart),
        stores: Math.round(targetValues.stores * easeOutQuart),
        architects: Math.round(targetValues.architects * easeOutQuart)
      });

      if (currentStep >= steps) {
        clearInterval(interval);
        setCounters(targetValues);
      }
    }, stepDuration);
  };

  return (
    <section id="sobre" className="py-24 bg-black relative" ref={sectionRef}>
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title mb-6 fadeIn">
            Por que escolher a Facchini
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
          <div className="text-center fadeIn stagger-1">
            <div className="count-up text-4xl md:text-5xl font-bold mb-2">
              {counters.years}
            </div>
            <div className="text-facchini-text-muted text-sm">
              anos de atuação
            </div>
          </div>
          
          <div className="text-center fadeIn stagger-2">
            <div className="count-up text-4xl md:text-5xl font-bold mb-2">
              +{counters.area}k
            </div>
            <div className="text-facchini-text-muted text-sm">
              m² entregues
            </div>
          </div>
          
          <div className="text-center fadeIn stagger-3">
            <div className="count-up text-4xl md:text-5xl font-bold mb-2">
              +{counters.cities}
            </div>
            <div className="text-facchini-text-muted text-sm">
              cidades atendidas
            </div>
          </div>
          
          <div className="text-center fadeIn stagger-4">
            <div className="count-up text-4xl md:text-5xl font-bold mb-2">
              +{counters.stores}
            </div>
            <div className="text-facchini-text-muted text-sm">
              obras de varejo
            </div>
          </div>
          
          <div className="text-center fadeIn stagger-4">
            <div className="count-up text-4xl md:text-5xl font-bold mb-2">
              +{counters.architects}
            </div>
            <div className="text-facchini-text-muted text-sm">
              arquitetos atendidos
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="feature-card text-center fadeIn stagger-1">
            <div className="w-12 h-12 bg-facchini-accent-1 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-black font-bold">31</span>
            </div>
            <h3 className="text-lg font-semibold mb-3 text-white">31 anos</h3>
            <p className="text-facchini-text-muted">
              de atuação em obras de alto padrão.
            </p>
          </div>

          <div className="feature-card text-center fadeIn stagger-2">
            <div className="w-12 h-12 bg-facchini-accent-1 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-black font-bold">✓</span>
            </div>
            <h3 className="text-lg font-semibold mb-3 text-white">+170 mil m²</h3>
            <p className="text-facchini-text-muted">
              entregues <strong>no prazo</strong>.
            </p>
          </div>

          <div className="feature-card text-center fadeIn stagger-3">
            <div className="w-12 h-12 bg-facchini-accent-1 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-black font-bold">$</span>
            </div>
            <h3 className="text-lg font-semibold mb-3 text-white">Gestão de custos</h3>
            <p className="text-facchini-text-muted">
              com transparência e previsibilidade.
            </p>
          </div>

          <div className="feature-card text-center fadeIn stagger-4">
            <div className="w-12 h-12 bg-facchini-accent-1 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-black font-bold">★</span>
            </div>
            <h3 className="text-lg font-semibold mb-3 text-white">Acabamento premium</h3>
            <p className="text-facchini-text-muted">
              e rigor técnico do início ao fim.
            </p>
          </div>

          <div className="feature-card text-center fadeIn stagger-4">
            <div className="w-12 h-12 bg-facchini-accent-1 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-black font-bold">♦</span>
            </div>
            <h3 className="text-lg font-semibold mb-3 text-white">Atendimento personalizado</h3>
            <p className="text-facchini-text-muted">
              para clientes e arquitetos.
            </p>
          </div>

          <div className="feature-card text-center fadeIn stagger-4">
            <div className="w-12 h-12 bg-facchini-accent-2 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-black font-bold">∞</span>
            </div>
            <h3 className="text-lg font-semibold mb-3 text-white">Excelência técnica</h3>
            <p className="text-facchini-text-muted">
              e previsibilidade para quem exige padrão de luxo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacchiniAbout;