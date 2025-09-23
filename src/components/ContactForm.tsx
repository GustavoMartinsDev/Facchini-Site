import React, { useState } from "react";
import { MessageCircle, Shield } from "lucide-react";

interface ContactFormProps {
  namePlaceholder?: string;
  phonePlaceholder?: string;
  emailPlaceholder?: string;
  messagePlaceholder?: string;
  submitButtonText?: string;
  successTitle?: string;
  successMessage?: string;
  whatsappButtonText?: string;
  showArchitectCheckbox?: boolean;
  architectLabel?: string;
  className?: string;
  pageName: string;
}

const ContactForm = ({
  namePlaceholder = "Nome *",
  phonePlaceholder = "Telefone/WhatsApp *",
  emailPlaceholder = "E-mail",
  messagePlaceholder = "Descreva seu projeto ou necessidade",
  submitButtonText = "Enviar e receber contato",
  successTitle = "Recebemos seus dados!",
  successMessage = "Em breve falaremos com você. Se preferir o atendimento imediato, clique abaixo.",
  whatsappButtonText = "Falar agora no WhatsApp",
  showArchitectCheckbox = true,
  architectLabel = "Sou arquiteto(a) - prioridade no atendimento",
  className = "space-y-6",
  pageName,
}: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    isArchitect: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus("idle");
    if (!formData.name.trim() || !formData.phone.trim()) {
      setSubmitStatus("error");
      setIsSubmitting(false);
      return;
    }
    setIsSubmitting(true);

    // Track form submission
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "generate_lead_form_submit", {
        page_section: pageName,
        lead_type: formData.isArchitect ? "architect" : "client",
      });
    }

    try {
      const response = await fetch(
        "https://facchini-api.vercel.app/api/send-contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": process.env.CONTACT_API_KEY || "",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) throw new Error("Erro ao enviar");
      setSubmitStatus("success");
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
        isArchitect: false,
      });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppClick = () => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "click_whatsapp_contact", {
        page_section: pageName,
      });
    }
    window.open("https://wa.me/5511999999999", "_blank");
  };

  return (
    <>
      {submitStatus === "success" ? (
        <div className="text-center p-6">
          <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <div className="text-green-400 text-2xl">✓</div>
          </div>
          <h3 className="text-xl font-semibold text-white mb-4">
            {successTitle}
          </h3>
          <p className="text-facchini-text-muted mb-6">{successMessage}</p>
          <button
            onClick={handleWhatsAppClick}
            className="button-primary w-full flex items-center justify-center"
          >
            <MessageCircle className="mr-2 w-5 h-5" />
            {whatsappButtonText}
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className={className}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder={namePlaceholder}
              value={formData.name}
              onChange={handleInputChange}
              required
              className="form-input"
            />

            <input
              type="tel"
              name="phone"
              placeholder={phonePlaceholder}
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="form-input"
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder={emailPlaceholder}
            value={formData.email}
            onChange={handleInputChange}
            className="form-input"
          />

          <textarea
            name="message"
            placeholder={messagePlaceholder}
            value={formData.message}
            onChange={handleInputChange}
            className="form-textarea"
          />

          {showArchitectCheckbox && (
            <div className="flex items-center">
              <input
                type="checkbox"
                name="isArchitect"
                id="isArchitect"
                checked={formData.isArchitect}
                onChange={handleInputChange}
                className="mr-3 w-4 h-4 text-facchini-accent-1 bg-transparent border-facchini-divider rounded focus:ring-facchini-accent-1"
              />
              <label
                htmlFor="isArchitect"
                className="text-facchini-text-muted text-sm"
              >
                {architectLabel}
              </label>
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="button-primary w-full"
          >
            {isSubmitting ? "Enviando..." : submitButtonText}
          </button>

          <div className="flex items-center justify-center pt-4">
            <Shield className="w-4 h-4 text-facchini-accent-1 mr-2" />
            <p className="text-xs text-facchini-text-muted">
              Nunca compartilhamos seus dados com terceiros.
            </p>
          </div>
        </form>
      )}

      {submitStatus === "error" && (
        <div className="text-red-400 text-sm text-center mt-4 p-4 bg-red-500/10 rounded-lg">
          Não foi possível enviar. Revise os campos obrigatórios e tente
          novamente.
        </div>
      )}
    </>
  );
};

export default ContactForm;
