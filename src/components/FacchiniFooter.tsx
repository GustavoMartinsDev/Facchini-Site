import React from "react";
import { Instagram, Facebook, Linkedin } from "lucide-react";

const FacchiniFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-facchini-divider py-12">
      <div className="section-container">
        <div className="text-center">
          {/* Logo */}
          <div className="mb-8">
            <div className="text-3xl font-bold text-facchini-accent-2 mb-2">
              FACCHINI
            </div>
            <div className="text-facchini-text-muted text-sm">
              Engenharia de Alto Padrão
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://www.instagram.com/facchiniengenharia/"
              className="w-10 h-10 bg-facchini-accent-1/20 rounded-full flex items-center justify-center hover:bg-facchini-accent-1 hover:text-black transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.facebook.com/facchiniengenharia/"
              className="w-10 h-10 bg-facchini-accent-1/20 rounded-full flex items-center justify-center hover:bg-facchini-accent-1 hover:text-black transition-all duration-300"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/company/facchini-engenharia-ltda/?originalSubdomain=br"
              className="w-10 h-10 bg-facchini-accent-1/20 rounded-full flex items-center justify-center hover:bg-facchini-accent-1 hover:text-black transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-8 mb-8 text-sm">
            <a href="#" className="text-facchini-text-muted hover:text-facchini-accent-1 transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-facchini-text-muted hover:text-facchini-accent-1 transition-colors">
              Termos de Uso
            </a>
            <a href="#contato" className="text-facchini-text-muted hover:text-facchini-accent-1 transition-colors">
              Contato
            </a>
          </div>

          {/* Copyright */}
          <div className="text-facchini-text-muted text-sm">
            © {currentYear} Facchini Engenharia. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FacchiniFooter;