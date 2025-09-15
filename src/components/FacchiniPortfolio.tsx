import React from "react";

const FacchiniPortfolio = () => {
  // Portfolio items - replace with actual project images
  const portfolioItems = [
    {
      title: "Residencial • São Paulo",
      image: "/lovable-uploads/22d31f51-c174-40a7-bd95-00e4ad00eaf3.png",
      alt: "Ambiente residencial de alto padrão com marcenaria e iluminação técnica executados pela Facchini Engenharia"
    },
    {
      title: "Corporativo • São Paulo",
      image: "/lovable-uploads/af412c03-21e4-4856-82ff-d1a975dc84a9.png",
      alt: "Espaço corporativo moderno com acabamentos premium executado pela Facchini Engenharia"
    },
    {
      title: "Lojas premium • São Paulo",
      image: "/lovable-uploads/c3d5522b-6886-4b75-8ffc-d020016bb9c2.png",
      alt: "Loja de varejo premium com design contemporâneo executada pela Facchini Engenharia"
    },
    {
      title: "Residencial • São Paulo",
      image: "/lovable-uploads/dc13e94f-beeb-4671-8a22-0968498cdb4c.png",
      alt: "Área residencial de luxo com materiais nobres executada pela Facchini Engenharia"
    },
    {
      title: "Apartamento • São Paulo",
      image: "/lovable-uploads/5663820f-6c97-4492-9210-9eaa1a8dc415.png",
      alt: "Apartamento de alto padrão com acabamentos exclusivos executado pela Facchini Engenharia"
    },
    {
      title: "Corporativo • São Paulo",
      image: "/background-section1.png",
      alt: "Ambiente corporativo sofisticado com design moderno executado pela Facchini Engenharia"
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