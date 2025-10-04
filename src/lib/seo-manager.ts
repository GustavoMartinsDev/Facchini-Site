import { languageManager } from "./translations";

const FACCHINI_FOUNDING_DATE = "1993-08-24";

export class SEOManager {
  private calculateYearsOfExperience(): number {
    const dateNow = new Date();
    const foundingDate = new Date(FACCHINI_FOUNDING_DATE);
    return dateNow.getFullYear() - foundingDate.getFullYear();
  }

  private getYearsText(): string {
    const years = this.calculateYearsOfExperience();
    const currentLang = languageManager.getCurrentLanguage();

    if (currentLang === "ja") {
      return `${years}年以上の`;
    } else if (currentLang === "en") {
      return `${years}+ years of`;
    } else if (currentLang === "es") {
      return `${years} años de`;
    } else if (currentLang === "fr") {
      return `${years} ans d'`;
    } else if (currentLang === "it") {
      return `${years} anni di`;
    } else {
      return `${years} anos de`; // PT-BR default
    }
  }

  updatePageTitle(): void {
    const titles = {
      "pt-br":
        "Facchini Engenharia | Construção e Reformas de Alto Padrão em SP",
      en: "Facchini Engineering | High-Standard Construction and Renovations in SP",
      es: "Facchini Ingeniería | Construcción y Reformas de Alto Estándar en SP",
      fr: "Facchini Ingénierie | Construction et Rénovations Haut de Gamme à SP",
      it: "Facchini Ingegneria | Costruzione e Ristrutturazioni di Alto Livello a SP",
      ja: "ファッキーニエンジニアリング | サンパウロの高水準建設・改装",
    };

    const currentLang = languageManager.getCurrentLanguage();
    const title = titles[currentLang as keyof typeof titles] || titles["pt-br"];
    document.title = title;
  }

  updateMetaDescription(): void {
    const yearsText = this.getYearsText();

    const descriptions = {
      "pt-br": `${yearsText} obras premium com prazos cumpridos e acabamento impecável. Residencial, corporativo e lojas. Solicite seu orçamento.`,
      en: `${yearsText} premium constructions with met deadlines and impeccable finishing. Residential, corporate and stores. Request your quote.`,
      es: `${yearsText} obras premium con plazos cumplidos y acabado impecable. Residencial, corporativo y tiendas. Solicita tu presupuesto.`,
      fr: `${yearsText} constructions premium avec délais respectés et finition impeccable. Résidentiel, corporate et magasins. Demandez votre devis.`,
      it: `${yearsText} costruzioni premium con scadenze rispettate e finitura impeccabile. Residenziale, corporate e negozi. Richiedi il tuo preventivo.`,
      ja: `${yearsText}高品質工事、納期厳守、完璧な仕上がり。住宅、法人、店舗。見積もりをご依頼ください。`,
    };

    const currentLang = languageManager.getCurrentLanguage();
    const description =
      descriptions[currentLang as keyof typeof descriptions] ||
      descriptions["pt-br"];

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    }
  }

  updateOpenGraphMeta(): void {
    const yearsText = this.getYearsText();

    const ogTitles = {
      "pt-br": "Facchini Engenharia — Obras de Alto Padrão",
      en: "Facchini Engineering — High-Standard Construction",
      es: "Facchini Ingeniería — Obras de Alto Estándar",
      fr: "Facchini Ingénierie — Construction Haut de Gamme",
      it: "Facchini Ingegneria — Costruzioni di Alto Livello",
      ja: "ファッキーニエンジニアリング — 高水準建設",
    };

    const ogDescriptions = {
      "pt-br": `${yearsText} excelência técnica, prazos cumpridos e acabamento impecável.`,
      en: `${yearsText} technical excellence, met deadlines and impeccable finishing.`,
      es: `${yearsText} excelencia técnica, plazos cumplidos y acabado impecable.`,
      fr: `${yearsText} excellence technique, délais respectés et finition impeccable.`,
      it: `${yearsText} eccellenza tecnica, scadenze rispettate e finitura impeccabile.`,
      ja: `${yearsText}技術的卓越性、納期厳守、完璧な仕上がり。`,
    };

    const currentLang =
      languageManager.getCurrentLanguage() as keyof typeof ogTitles;

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute(
        "content",
        ogTitles[currentLang] || ogTitles["pt-br"]
      );
    }

    const ogDescription = document.querySelector(
      'meta[property="og:description"]'
    );
    if (ogDescription) {
      ogDescription.setAttribute(
        "content",
        ogDescriptions[currentLang] || ogDescriptions["pt-br"]
      );
    }
  }

  updateLanguageAttribute(): void {
    const htmlLangCodes = {
      "pt-br": "pt-BR",
      en: "en-US",
      es: "es-ES",
      fr: "fr-FR",
      it: "it-IT",
      ja: "ja-JP",
    };

    const currentLang = languageManager.getCurrentLanguage();
    const langCode =
      htmlLangCodes[currentLang as keyof typeof htmlLangCodes] || "pt-BR";
    document.documentElement.lang = langCode;
  }

  updateAllSEOElements(): void {
    this.updatePageTitle();
    this.updateMetaDescription();
    this.updateOpenGraphMeta();
    this.updateLanguageAttribute();
  }
}

export const seoManager = new SEOManager();
