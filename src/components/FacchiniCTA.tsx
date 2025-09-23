import React from "react";
import { ArrowRight, MessageCircle } from "lucide-react";

const FacchiniCTA = () => {
  const handleWhatsAppClick = () => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "click_whatsapp_cta", {
        page_section: "cta_banner",
      });
    }
    window.open("https://wa.me/5511999999999", "_blank");
  };

  const handleFormClick = () => {
    const element = document.getElementById("contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-facchini-accent-1/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-facchini-accent-2/5 rounded-full blur-3xl"></div>

      <div className="section-container relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-8 leading-tight fadeIn">
            Seu projeto, executado com excelência —<br />
            <span className="text-facchini-accent-1">
              no prazo e sem surpresas.
            </span>
          </h2>

          <p className="text-xl text-facchini-text-muted mb-12 fadeIn stagger-1">
            Transforme sua visão em realidade com a experiência de quem entrega
            resultados há 31 anos.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center fadeIn stagger-2">
            <button
              onClick={handleWhatsAppClick}
              className="button-primary text-lg px-8 py-4 flex items-center group"
            >
              <MessageCircle className="mr-3 w-5 h-5" />
              Falar no WhatsApp agora
              <ArrowRight className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={handleFormClick}
              className="button-secondary text-lg px-8 py-4"
            >
              Solicitar orçamento
            </button>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-facchini-divider fadeIn stagger-3">
            <div className="text-center">
              <div className="text-2xl font-bold text-facchini-accent-1 mb-2">
                31 anos
              </div>
              <div className="text-facchini-text-muted">
                de tradição e experiência
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-facchini-accent-1 mb-2">
                +170k m²
              </div>

              <div className="text-facchini-text-muted">entregues no prazo</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-facchini-accent-1 mb-2">
                100%
              </div>
              <div className="text-facchini-text-muted">
                transparência e controle
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacchiniCTA;
