import React, { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Clock, Shield } from "lucide-react";

const FacchiniContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    isArchitect: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Track form submission
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'generate_lead_form_submit', {
        page_section: 'contact',
        lead_type: formData.isArchitect ? 'architect' : 'client'
      });
    }

    try {
      // Simulate form submission - replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({ name: '', phone: '', email: '', message: '', isArchitect: false });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppClick = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'click_whatsapp_contact', {
        page_section: 'contact'
      });
    }
    window.open('https://wa.me/5511999999999', '_blank');
  };

  const handlePhoneClick = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'click_phone', {
        page_section: 'contact'
      });
    }
  };

  return (
    <section id="contato" className="py-24 bg-black relative">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title mb-6 fadeIn">
            Fale com a Facchini
          </h2>
          <p className="section-subtitle fadeIn stagger-1 mx-auto">
            Preencha os dados abaixo e nossa equipe entrará em contato até o próximo dia útil.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="fadeIn stagger-2">
            <div className="glass-card p-8">
              {submitStatus === 'success' ? (
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <div className="text-green-400 text-2xl">✓</div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Recebemos seus dados!
                  </h3>
                  <p className="text-facchini-text-muted mb-6">
                    Em breve falaremos com você. Se preferir o atendimento imediato, clique abaixo.
                  </p>
                  <button
                    onClick={handleWhatsAppClick}
                    className="button-primary w-full flex items-center justify-center"
                  >
                    <MessageCircle className="mr-2 w-5 h-5" />
                    Falar agora no WhatsApp
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="name"
                      placeholder="Nome *"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                    />
                    
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Telefone/WhatsApp *"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                    />
                  </div>
                  
                  <input
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                  
                  <textarea
                    name="message"
                    placeholder="Descreva seu projeto ou necessidade"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="form-textarea"
                  />
                  
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name="isArchitect"
                      id="isArchitect"
                      checked={formData.isArchitect}
                      onChange={handleInputChange}
                      className="mr-3 w-4 h-4 text-facchini-accent-1 bg-transparent border-facchini-divider rounded focus:ring-facchini-accent-1"
                    />
                    <label htmlFor="isArchitect" className="text-facchini-text-muted text-sm">
                      Sou arquiteto(a) - prioridade no atendimento
                    </label>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="button-primary w-full"
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar e receber contato'}
                  </button>
                  
                  <div className="flex items-center justify-center pt-4">
                    <Shield className="w-4 h-4 text-facchini-accent-1 mr-2" />
                    <p className="text-xs text-facchini-text-muted">
                      Nunca compartilhamos seus dados com terceiros.
                    </p>
                  </div>
                </form>
              )}

              {submitStatus === 'error' && (
                <div className="text-red-400 text-sm text-center mt-4 p-4 bg-red-500/10 rounded-lg">
                  Não foi possível enviar. Revise os campos obrigatórios e tente novamente.
                </div>
              )}
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 fadeIn stagger-3">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-8">
                Outros canais de contato
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-facchini-accent-1/20 rounded-full flex items-center justify-center mr-4 mt-1">
                    <MessageCircle className="w-6 h-6 text-facchini-accent-1" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">WhatsApp</h4>
                    <button
                      onClick={handleWhatsAppClick}
                      className="text-facchini-accent-1 hover:text-facchini-accent-2 transition-colors"
                    >
                      (11) 9 9999-9999
                    </button>
                    <p className="text-facchini-text-muted text-sm mt-1">Atendimento rápido e direto</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-facchini-accent-1/20 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Phone className="w-6 h-6 text-facchini-accent-1" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Telefone</h4>
                    <a
                      href="tel:+551150413599"
                      onClick={handlePhoneClick}
                      className="text-facchini-accent-1 hover:text-facchini-accent-2 transition-colors"
                    >
                      (11) 5041-3599
                    </a>
                    <p className="text-facchini-text-muted text-sm mt-1">Horário comercial</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-facchini-accent-1/20 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Mail className="w-6 h-6 text-facchini-accent-1" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">E-mail</h4>
                    <a
                      href="mailto:contato@facchiniengenharia.com.br"
                      className="text-facchini-accent-1 hover:text-facchini-accent-2 transition-colors break-all"
                    >
                      contato@facchiniengenharia.com.br
                    </a>
                    <p className="text-facchini-text-muted text-sm mt-1">Resposta em até 24h</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-facchini-accent-1/20 rounded-full flex items-center justify-center mr-4 mt-1">
                    <MapPin className="w-6 h-6 text-facchini-accent-1" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Endereço</h4>
                    <p className="text-facchini-text-muted">
                      São Paulo, SP<br />
                      Atendemos toda a Grande São Paulo
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-facchini-accent-1/20 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Clock className="w-6 h-6 text-facchini-accent-1" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Horário de atendimento</h4>
                    <p className="text-facchini-text-muted">
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