import React from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import ContactForm from "./ContactForm";
import { languageManager } from "../lib/translations";

const FacchiniContact = () => {
  const handlePhoneClick = () => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "click_phone", {
        page_section: "contact",
      });
    }
  };

  const handleWhatsAppClick = () => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "click_whatsapp_contact", {
        page_section: "contact",
      });
    }
    const message = languageManager.getWhatsAppMessage("contact");
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5511917110573?text=${encodedMessage}`, "_blank");
  };

  return (
    <section id="contato" className="py-24 bg-black relative">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2
            className="section-title mb-6 fadeIn"
            data-translate="contactTitle"
          >
            Fale com a Facchini Engenharia
          </h2>
          <p
            className="section-subtitle fadeIn stagger-1 mx-auto"
            data-translate="contactSubtitle"
          >
            Preencha os dados abaixo e nossa equipe entrará em contato até o
            próximo dia útil.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="fadeIn stagger-2">
            <div className="glass-card p-8">
              <ContactForm
                pageName="contact"
                messagePlaceholder="Descreva seu projeto ou necessidade"
                submitButtonText="Enviar e receber contato"
              />
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 fadeIn stagger-3">
            <div>
              <h3
                className="text-2xl font-semibold text-white mb-8"
                data-translate="contactOtherChannels"
              >
                Outros canais de contato
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-facchini-accent-1/20 rounded-full flex items-center justify-center mr-4 mt-1">
                    <MessageCircle className="w-6 h-6 text-facchini-accent-1" />
                  </div>
                  <div>
                    <h4
                      className="font-semibold text-white mb-2"
                      data-translate="contactWhatsApp"
                    >
                      WhatsApp
                    </h4>
                    <button
                      onClick={handleWhatsAppClick}
                      className="text-facchini-accent-1 hover:text-facchini-accent-2 transition-colors"
                    >
                      (11) 91711-0573
                    </button>
                    <p
                      className="text-facchini-text-muted text-sm mt-1"
                      data-translate="contactWhatsAppDesc"
                    >
                      Atendimento rápido e direto
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-facchini-accent-1/20 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Phone className="w-6 h-6 text-facchini-accent-1" />
                  </div>
                  <div>
                    <h4
                      className="font-semibold text-white mb-2"
                      data-translate="contactPhone"
                    >
                      Telefone
                    </h4>
                    <a
                      href="tel:+551150413599"
                      onClick={handlePhoneClick}
                      className="text-facchini-accent-1 hover:text-facchini-accent-2 transition-colors"
                    >
                      (11) 5041-3599
                    </a>
                    <p
                      className="text-facchini-text-muted text-sm mt-1"
                      data-translate="contactPhoneDesc"
                    >
                      Horário comercial
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-facchini-accent-1/20 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Mail className="w-6 h-6 text-facchini-accent-1" />
                  </div>
                  <div>
                    <h4
                      className="font-semibold text-white mb-2"
                      data-translate="contactEmail"
                    >
                      E-mail
                    </h4>
                    <a
                      href="mailto:contato@facchiniengenharia.com.br"
                      className="text-facchini-accent-1 hover:text-facchini-accent-2 transition-colors break-all"
                    >
                      contato@facchiniengenharia.com.br
                    </a>
                    <p
                      className="text-facchini-text-muted text-sm mt-1"
                      data-translate="contactEmailDesc"
                    >
                      Resposta em até 24h
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-facchini-accent-1/20 rounded-full flex items-center justify-center mr-4 mt-1">
                    <MapPin className="w-6 h-6 text-facchini-accent-1" />
                  </div>
                  <div>
                    <h4
                      className="font-semibold text-white mb-2"
                      data-translate="contactAddress"
                    >
                      Endereço
                    </h4>
                    <p
                      className="text-facchini-text-muted"
                      data-translate="contactAddressInfo"
                    >
                      São Paulo, SP Atendemos toda a Grande São Paulo
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-facchini-accent-1/20 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Clock className="w-6 h-6 text-facchini-accent-1" />
                  </div>
                  <div>
                    <h4
                      className="font-semibold text-white mb-2"
                      data-translate="contactHours"
                    >
                      Horário de atendimento
                    </h4>
                    <p
                      className="text-facchini-text-muted"
                      data-translate="contactHoursInfo"
                    >
                      Segunda a sexta: 8h às 17h
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacchiniContact;
