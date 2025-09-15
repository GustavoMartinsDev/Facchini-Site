import React from "react";
import { Building, Home, Store, Wrench, Briefcase } from "lucide-react";

const FacchiniServices = () => {
  const services = [
    {
      icon: <Home className="w-8 h-8" />,
      title: "Residencial de alto padrão",
      description: "Execução completa com controle técnico e acabamento impecável."
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Reformas premium",
      description: "Modernização com gestão de prazos e mínima interferência na rotina."
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Espaços corporativos",
      description: "Obras rápidas e precisas para operações exigentes."
    },
    {
      icon: <Store className="w-8 h-8" />,
      title: "Lojas e varejo",
      description: "Implantação com padrão de rede e entrega no prazo acordado."
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Apartamentos",
      description: "Obras detalhistas com padrão de luxo do projeto à entrega."
    }
  ];

  const handleCTAClick = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="servicos" className="py-24 bg-gray-900 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title mb-6 fadeIn">
            Especialidades
          </h2>
          <p className="section-subtitle fadeIn stagger-1 mx-auto">
            Soluções completas em construção e reforma para projetos de alto padrão
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className={`feature-card group hover-lift fadeIn stagger-${index + 1}`}
            >
              <div className="text-facchini-accent-1 mb-6 group-hover:text-facchini-accent-2 transition-colors duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-facchini-accent-1 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-facchini-text-muted leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center fadeIn stagger-4">
          <button
            onClick={handleCTAClick}
            className="button-secondary hover:bg-facchini-accent-1 hover:text-black"
          >
            Solicitar proposta
          </button>
        </div>
      </div>
    </section>
  );
};

export default FacchiniServices;