import React from "react";

const FacchiniPortfolio = () => {
  // Portfolio items - projetos executados pela Facchini Engenharia
  const portfolioItems = [
    {
      title: "Casa Contemporânea • São Paulo",
      image: "/portfolio/projeto-1.jpg",
      alt: "Casa contemporânea com arquitetura moderna integrando madeira e vidro em meio à vegetação tropical"
    },
    {
      title: "Residência com Área Gourmet • São Paulo",
      image: "/portfolio/projeto-2.jpg",
      alt: "Residência de alto padrão com área gourmet integrada, piscina e pergolado em madeira"
    },
    {
      title: "Casa Clássica com Piscina • São Paulo",
      image: "/portfolio/projeto-3.jpg",
      alt: "Casa de estilo clássico com fachada branca, piscina e paisagismo refinado"
    },
    {
      title: "Banheiro Premium • São Paulo",
      image: "/portfolio/projeto-4.jpg",
      alt: "Banheiro de luxo com acabamentos em mármore e detalhes dourados, design sofisticado"
    },
    {
      title: "Residência Moderna • São Paulo",
      image: "/portfolio/projeto-5.jpg",
      alt: "Casa moderna com linhas contemporâneas, piscina e jardim paisagístico tropical"
    },
    {
      title: "Casa com Spa • São Paulo",
      image: "/portfolio/projeto-6.jpg",
      alt: "Residência contemporânea com área de spa, piscina e integração total com o jardim"
    }
  ];

  const handleCTAClick = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleImageClick = (index: number) => {
    // Track portfolio view event
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'view_portfolio_card', {
        page_section: 'portfolio',
        project_index: index
      });
    }
  };

  return (
    <section id="portfolio" className="py-24 bg-black relative">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title mb-6 fadeIn">
            Portfólio selecionado
          </h2>
          <p className="section-subtitle fadeIn stagger-1 mx-auto">
            Uma curadoria dos nossos projetos mais representativos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className={`group cursor-pointer fadeIn stagger-${(index % 3) + 1}`}
              onClick={() => handleImageClick(index)}
            >
              <div className="relative overflow-hidden rounded-2xl bg-gray-800 hover-lift">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-semibold text-lg mb-2">
                    {item.title}
                  </h3>
                  <div className="w-12 h-1 bg-facchini-accent-1 rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center fadeIn stagger-4">
          <button
            onClick={handleCTAClick}
            className="button-primary text-lg px-8 py-4"
          >
            Quero transformar meu projeto
          </button>
        </div>
      </div>
    </section>
  );
};

export default FacchiniPortfolio;