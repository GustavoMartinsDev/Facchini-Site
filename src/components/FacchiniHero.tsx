import React from "react";
import { ArrowRight } from "lucide-react";
import ContactForm from "./ContactForm";

const FacchiniHero = () => {
  const handleWhatsAppClick = () => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "click_whatsapp_hero", {
        page_section: "hero",
      });
    }
    window.open("https://wa.me/5511999999999", "_blank");
  };

  const scrollToPortfolio = () => {
    const element = document.getElementById("portfolio");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center bg-black relative overflow-hidden pt-20">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-gray-900"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-facchini-accent-1/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-facchini-accent-2/10 rounded-full blur-3xl"></div>

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="section-title fadeIn stagger-2">
              CONSTRUÇÃO DE ALTO PADRÃO
            </h1>

            <p className="section-subtitle fadeIn stagger-3">
              Mais de três décadas transformando projetos em realidade.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 fadeIn stagger-4">
              <button
                onClick={() =>
                  document
                    .getElementById("contato")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="button-primary flex items-center justify-center group"
              >
                Solicitar orçamento agora
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button onClick={scrollToPortfolio} className="button-secondary">
                Ver portfólio
              </button>
            </div>

            {/* Trust indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 fadeIn stagger-4">
              <div className="text-center sm:text-left">
                <div className="text-sm text-facchini-text-muted">
                  Especialidades
                </div>
                <div className="font-medium">
                  Residencial • Corporativo • Lojas premium
                </div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-sm text-facchini-text-muted">
                  Atendimento
                </div>
                <div className="font-medium">
                  Personalizado do projeto à entrega
                </div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-sm text-facchini-text-muted">Gestão</div>
                <div className="font-medium">
                  Controle total de custos e prazos
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="fadeIn stagger-4">
            <div className="glass-card p-8">
              <h3 className="text-xl font-semibold mb-6 text-center text-white">
                Solicite seu orçamento
              </h3>

              <ContactForm
                pageName="hero"
                namePlaceholder="Nome *"
                phonePlaceholder="Telefone/WhatsApp *"
                emailPlaceholder="E-mail"
                messagePlaceholder="Conte em 1-2 linhas o objetivo do seu projeto (ex.: reforma residencial 600 m²)"
                submitButtonText="Quero falar com um especialista"
                showArchitectCheckbox={true}
                architectLabel="Sou arquiteto(a) - prioridade no atendimento"
                className="space-y-4 grid-cols-1"
                successTitle="Recebemos seus dados!"
                successMessage="Nossa equipe entrará em contato até o próximo dia útil."
                whatsappButtonText="Falar agora no WhatsApp"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacchiniHero;
