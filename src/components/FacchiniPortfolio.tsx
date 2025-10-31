import React from "react";

const FacchiniPortfolio = () => {
  // Portfolio items - projetos executados pela Facchini Engenharia
  const portfolioItems = [
    {
      titleKey: "portfolio1Title",
      image: "/portfolio/projeto-1.jpeg",
      altKey: "portfolio1Alt",
    },
    {
      titleKey: "portfolio2Title",
      image: "/portfolio/projeto-2.jpeg",
      altKey: "portfolio2Alt",
    },
    {
      titleKey: "portfolio3Title",
      image: "/portfolio/projeto-3.jpeg",
      altKey: "portfolio3Alt",
    },
    {
      titleKey: "portfolio4Title",
      image: "/portfolio/projeto-4.jpeg",
      altKey: "portfolio4Alt",
    },
    {
      titleKey: "portfolio5Title",
      image: "/portfolio/projeto-5.jpeg",
      altKey: "portfolio5Alt",
    },
    {
      titleKey: "portfolio6Title",
      image: "/portfolio/projeto-6.jpeg",
      altKey: "portfolio6Alt",
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
    <section
      id="portfolio"
      className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative"
    >
      <div className="section-container">
        <div className="text-center mb-16">
          <h2
            className="section-title mb-6 fadeIn"
            data-translate="portfolioTitle"
          >
            Portfólio selecionado
          </h2>
          <p
            className="section-subtitle fadeIn stagger-1 mx-auto"
            data-translate="portfolioSubtitle"
          >
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
                  alt=""
                  data-translate={item.altKey}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3
                    className="text-white font-semibold text-lg mb-2"
                    data-translate={item.titleKey}
                  >
                    Título do Projeto
                  </h3>
                  <div className="w-12 h-1 bg-facchini-accent-1 rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className="text-center fadeIn stagger-4"
          style={{ display: "none" }}
        >
          <button
            onClick={handleCTAClick}
            className="button-primary text-lg px-8 py-4"
            data-translate="portfolioButton"
          >
            Quero transformar meu projeto
          </button>
        </div>
      </div>
    </section>
  );
};

export default FacchiniPortfolio;
