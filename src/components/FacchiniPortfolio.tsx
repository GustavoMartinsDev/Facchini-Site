import React from "react";

const FacchiniPortfolio = () => {
  // Portfolio items - projetos executados pela Facchini Engenharia
  const portfolioItems = [
    {
      title: "Residência Luxuosa com Piscina • São Paulo",
      image: "/portfolio/projeto-1.jpeg",
      alt: "Residência de alto padrão com piscina iluminada ao entardecer, arquitetura moderna com amplas aberturas e integração com jardim",
    },
    {
      title: "Casa Contemporânea com Área de Lazer • São Paulo",
      image: "/portfolio/projeto-2.jpeg",
      alt: "Casa moderna com piscina e área de lazer integrada, muros de concreto aparente e paisagismo contemporâneo",
    },
    {
      title: "Residência Integrada à Natureza • São Paulo",
      image: "/portfolio/projeto-3.jpeg",
      alt: "Casa moderna com estrutura em múltiplos níveis integrada à vegetação nativa, com grandes árvores preservadas no projeto",
    },
    {
      title: "Sala de Estar Contemporânea • São Paulo",
      image: "/portfolio/projeto-4.jpeg",
      alt: "Ambiente interno sofisticado com móveis de design, parede de tijolo aparente e integração com área externa",
    },
    {
      title: "Sala de Estar Premium com Home Theater • São Paulo",
      image: "/portfolio/projeto-5.jpeg",
      alt: "Sala de estar luxuosa com painel de TV integrado, móveis planejados em madeira e iluminação ambiente sofisticada",
    },
    {
      title: "Quarto Infantil Planejado • São Paulo",
      image: "/portfolio/projeto-6.jpeg",
      alt: "Dormitório infantil com móveis planejados em tons neutros, área de estudos e brincadeiras com design funcional e acolhedor",
    },
  ];

  const handleCTAClick = () => {
    const element = document.getElementById("contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleImageClick = (index: number) => {
    // Track portfolio view event
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "view_portfolio_card", {
        page_section: "portfolio",
        project_index: index,
      });
    }
  };

  return (
    <section id="portfolio" className="py-24 bg-black relative">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title mb-6 fadeIn">Portfólio selecionado</h2>
          <p className="section-subtitle fadeIn stagger-1 mx-auto">
            Uma curadoria dos nossos projetos mais representativos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className={`group cursor-pointer fadeIn stagger-${
                (index % 3) + 1
              }`}
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
