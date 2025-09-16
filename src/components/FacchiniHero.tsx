import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

const FacchiniHero = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Track form submission
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'generate_lead_form_submit', {
        page_section: 'hero',
        lead_type: 'form_hero'
      });
    }

    try {
      // Simulate form submission - replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({ name: '', phone: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppClick = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'click_whatsapp_hero', {
        page_section: 'hero'
      });
    }
    window.open('https://wa.me/5511999999999', '_blank');
  };

  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
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
            <div className="facchini-chip fadeIn stagger-1">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-facchini-accent-1 text-black mr-2 font-semibold">01</span>
              Purpose
            </div>
            
            <h1 className="section-title fadeIn stagger-2">
              CONSTRUÇÃO DE ALTO PADRÃO
            </h1>
            
            <p className="section-subtitle fadeIn stagger-3">
              31 anos de engenharia e +170 mil m² entregues com excelência.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 fadeIn stagger-4">
              <button
                onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                className="button-primary flex items-center justify-center group"
              >
                Solicitar orçamento agora
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              
              <button
                onClick={scrollToPortfolio}
                className="button-secondary"
              >
                Ver portfólio
              </button>
            </div>

            {/* Trust indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 fadeIn stagger-4">
              <div className="text-center sm:text-left">
                <div className="text-sm text-facchini-text-muted">Especialidades</div>
                <div className="font-medium">Residencial • Corporativo • Lojas premium</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-sm text-facchini-text-muted">Atendimento</div>
                <div className="font-medium">Personalizado do projeto à entrega</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-sm text-facchini-text-muted">Gestão</div>
                <div className="font-medium">Controle total de custos e prazos</div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="fadeIn stagger-4">
            <div className="glass-card p-8">
              <h3 className="text-xl font-semibold mb-6 text-center text-white">
                Solicite seu orçamento
              </h3>
              
              {submitStatus === 'success' ? (
                <div className="text-center p-6">
                  <div className="text-green-400 mb-4">✓ Recebemos seus dados!</div>
                  <p className="text-facchini-text-muted mb-4">
                    Nossa equipe entrará em contato até o próximo dia útil.
                  </p>
                  <button
                    onClick={handleWhatsAppClick}
                    className="button-primary w-full"
                  >
                    Falar agora no WhatsApp
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
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
                    placeholder="Conte em 1-2 linhas o objetivo do seu projeto (ex.: reforma residencial 600 m²)"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="form-textarea"
                  />
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="button-primary w-full flex items-center justify-center"
                  >
                    {isSubmitting ? 'Enviando...' : 'Quero falar com um especialista'}
                  </button>
                  
                  <p className="text-xs text-facchini-text-muted text-center">
                    Responderemos em até 1 dia útil. Seus dados estão seguros.
                  </p>
                </form>
              )}

              {submitStatus === 'error' && (
                <div className="text-red-400 text-sm text-center mt-4">
                  Não foi possível enviar. Confira os campos obrigatórios ou tente novamente em instantes.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacchiniHero;