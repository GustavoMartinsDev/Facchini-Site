export type Language = "pt" | "en" | "es" | "fr" | "it" | "ja";

export interface Translations {
  [key: string]: string;
}

export const translations: Record<Language, Translations> = {
  pt: {
    // Hero Section
    heroTitle: "CONSTRUÇÃO E REFORMA RESIDENCIAL",
    heroSubtitle: "Mais de três décadas transformando projetos em realidade.",
    heroButton1: "Solicitar orçamento",
    heroButton2: "Ver portfólio",
    heroFormTitle: "Solicite seu orçamento",
    heroSpecialtiesLabel: "Especialidades",
    heroSpecialtiesText: "Residencial",
    heroServiceLabel: "Atendimento",
    heroServiceText: "Personalizado do projeto à entrega",
    heroManagementLabel: "Gestão",
    heroManagementText: "Controle total de custos e prazos",

    // Navbar
    navTopbar:
      "anos de obras entregues com excelência • +100 mil m² executados",
    navAbout: "SOBRE",
    navServices: "SERVIÇOS",
    navPortfolio: "PORTFÓLIO",
    navTestimonials: "DEPOIMENTOS",
    navContact: "CONTATO",
    navWhatsApp: "FALAR NO WHATSAPP",

    // About Section
    aboutTitle: "30 anos transformando projetos únicos em realidade",
    aboutDescription:
      "Com décadas de experiência e mais de 100 mil m² entregues, somos referência em construção de alto padrão. Nossa expertise abrange desde residências de luxo até complexos comerciais sofisticados.",
    aboutFeature1: "Excelência em acabamentos premium",
    aboutFeature2: "Gestão de projetos com transparência total",
    aboutFeature3: "Cumprimento rigoroso de prazos",
    aboutButton: "Conheça nossa história",

    // Sobre Section (new structure)
    sobreTitle: "Por que escolher a Facchini Engenharia",
    sobreExperienceLabel: "anos de atuação",
    sobreM2Label: "m² entregues",
    sobreCitiesLabel: "cidades atendidas",
    sobreStoresLabel: "obras de varejo",
    sobreArchitectsLabel: "arquitetos atendidos",

    // Sobre Features
    sobreFeature1Title: "anos", // This will be dynamic with {counters.years}
    sobreFeature1Description: "de atuação em obras de alto padrão.",
    sobreFeature2Title: "+100 mil m²",
    sobreFeature2Description: "entregues no prazo.",
    sobreFeature3Title: "Gestão de custos",
    sobreFeature3Description: "com transparência e previsibilidade.",
    sobreFeature4Title: "Acabamento refinado",
    sobreFeature4Description: "e rigor técnico do início ao fim.",
    sobreFeature5Title: "Atendimento personalizado",
    sobreFeature5Description: "para clientes e arquitetos.",
    sobreFeature6Title: "Técnica de alta qualidade",
    sobreFeature6Description:
      "e previsibilidade para quem exige técnica de alta qualidade",

    // Services Section
    servicesTitle: "Especialidades",
    servicesSubtitle:
      "Soluções completas em construção e reforma para projetos de alto padrão",
    servicesButton: "Solicitar proposta",
    service1Title: "Residencial",
    service1Description:
      "Execução completa com controle técnico e acabamento impecável.",
    service2Title: "Reforma de apartamento",
    service2Description:
      "Modernização com gestão de prazos e mínima interferência na rotina.",
    service3Title: "Compromisso com cliente",
    service3Description: "Precisão, eficiência e excelência absoluta.",
    service4Title: "Empreendimentos coondominiais",
    service4Description:
      "Execução de empreendimentos exclusivos com rigor técnico e sofisticação em cada detalhe.",
    service5Title: "Projetos especiais",
    service5Description:
      "Obras personalizadas sob medida para clientes que buscam exclusividade em cada detalhe.",
    service6Title: "Entrega no prazo",
    service6Description: "Obras detalhistas com padrão do projeto à entrega.",

    // Portfolio Section
    portfolioTitle: "Portfólio selecionado",
    portfolioSubtitle: "Uma curadoria dos nossos projetos mais representativos",
    portfolioButton: "Quero transformar meu projeto",

    // Individual Portfolio Items
    portfolio1Title: "Residência Luxuosa com Piscina • São Paulo",
    portfolio1Alt:
      "Residência de alto padrão com piscina iluminada ao entardecer, arquitetura moderna com amplas aberturas e integração com jardim",
    portfolio2Title: "Casa Contemporânea com Área de Lazer • São Paulo",
    portfolio2Alt:
      "Casa moderna com piscina e área de lazer integrada, muros de concreto aparente e paisagismo contemporâneo",
    portfolio3Title: "Residência Integrada à Natureza • São Paulo",
    portfolio3Alt:
      "Casa moderna com estrutura em múltiplos níveis integrada à vegetação nativa, com grandes árvores preservadas no projeto",
    portfolio4Title: "Sala de Estar Contemporânea • São Paulo",
    portfolio4Alt:
      "Ambiente interno sofisticado com móveis de design, parede de tijolo aparente e integração com área externa",
    portfolio5Title: "Construção em Progresso • São Paulo",
    portfolio5Alt:
      "Sala de estar luxuosa com painel de TV integrado, móveis planejados em madeira e iluminação ambiente sofisticada",
    portfolio6Title: "Execução e Organização Precisa • São Paulo",
    portfolio6Alt:
      "Dormitório infantil com móveis planejados em tons neutros, área de estudos e brincadeiras com design funcional e acolhedor",

    // Testimonials Section
    testimonialsLabel: "DEPOIMENTOS",
    testimonialsTitle: "O que nossos clientes e parceiros dizem",
    testimonialsSubtitle: "Resultados consistentes em obras residenciais.",
    testimonialsButton: "Seja nosso próximo cliente",

    // Individual Testimonials
    testimonial1Text:
      "A Facchini conduziu nossa obra de 1.200 m² com precisão cirúrgica. Prazos respeitados, comunicação transparente e acabamento impecável.",
    testimonial1Name: "Eduardo Martins",
    testimonial1Role: "CEO — Setor Financeiro",
    testimonial2Text:
      "Como arquiteta, sou exigente com execução. A equipe da Facchini respeitou cada detalhe do projeto, do nível a laser ao alinhamento da marcenaria.",
    testimonial2Name: "Marina Assis",
    testimonial2Role: "Arquiteta Autônoma",
    testimonial3Text:
      "O controle de custos e o cronograma foram seguidos com disciplina. A previsibilidade reduziu nosso risco e acelerou a ocupação.",
    testimonial3Name: "Ricardo Vilar",
    testimonial3Role: "Diretor Operacional",
    testimonial4Text:
      "Reformamos a cobertura. A Facchini entregou padrão de luxo sem transtornos. Organização e limpeza de obra chamaram atenção.",
    testimonial4Name: "Patrícia Nogueira",
    testimonial4Role: "Cliente Residencial",
    testimonial6Text:
      "A compatibilização com nossos fornecedores foi exemplar. A sensação foi de parceria estratégica, não apenas execução.",
    testimonial6Name: "Camila Ferraz",
    testimonial6Role: "Diretora Administrativa",

    // Contact Section
    contactTitle: "Fale com a Facchini Engenharia",
    contactSubtitle:
      "Preencha os dados abaixo e nossa equipe entrará em contato até o próximo dia útil.",
    contactOtherChannels: "Outros canais de contato",
    contactWhatsApp: "WhatsApp",
    contactWhatsAppDesc: "Atendimento rápido e direto",
    contactPhone: "Telefone",
    contactPhoneDesc: "Horário comercial",
    contactEmail: "E-mail",
    contactEmailDesc: "Resposta em até 24h",
    contactAddress: "Endereço",
    contactAddressInfo: "São Paulo, SP\nAtendemos toda a Grande São Paulo",
    contactHours: "Horário de atendimento",
    contactHoursInfo: "Segunda a sexta: 8h às 17h",

    // CTA Section
    ctaTitle:
      "Seu projeto, executado com excelência — no prazo e sem surpresas.",
    ctaSubtitlePart1:
      "Transforme sua visão em realidade com a experiência de quem entrega resultados há",
    ctaSubtitlePart2: "anos.",
    ctaWhatsAppButton: "Falar no WhatsApp agora",
    ctaFormButton: "Solicitar orçamento",
    ctaYearsLabel: "de tradição e experiência",
    ctaM2Label: "entregues no prazo",
    ctaTransparencyLabel: "transparência e controle",
    ctaYearsValue: " anos",

    // Footer
    footerTagline: "Engenharia de Alto Padrão",
    footerPrivacy: "Política de Privacidade",
    footerTerms: "Termos de Uso",
    footerContact: "Contato",
    footerCopyright:
      "© 2025 Facchini Engenharia. Todos os direitos reservados.",

    // WhatsApp messages
    whatsappMessage:
      "Olá! Gostaria de saber mais sobre os serviços da Facchini Engenharia.",
    whatsappPortfolioMessage:
      "Olá! Vi o portfólio da Facchini no site e gostaria de conversar sobre um projeto similar.",
    whatsappContactMessage:
      "Olá! Gostaria de solicitar um orçamento para meu projeto de construção/reforma. Podem me ajudar?",

    // Contact Form
    formNamePlaceholder: "Nome *",
    formPhonePlaceholder: "Telefone/WhatsApp *",
    formEmailPlaceholder: "E-mail",
    formMessagePlaceholder: "Descreva seu projeto ou necessidade",
    formArchitectLabel: "Sou arquiteto(a) - prioridade no atendimento",
    formSubmitButton: "Enviar e receber contato",
    formSubmittingText: "Enviando...",
    formSuccessTitle: "Recebemos seus dados!",
    formSuccessMessage:
      "Em breve falaremos com você. Se preferir o atendimento imediato, clique abaixo.",
    formWhatsAppButton: "Falar agora no WhatsApp",
    formPrivacyText: "Nunca compartilhamos seus dados com terceiros.",
    formErrorMessage:
      "Não foi possível enviar. Revise os campos obrigatórios e tente novamente.",
  },
  en: {
    // Hero Section
    heroTitle: "HIGH-STANDARD CONSTRUCTION",
    heroSubtitle: "More than three decades transforming projects into reality.",
    heroButton1: "Request a quote",
    heroButton2: "View portfolio",
    heroFormTitle: "Request your quote",
    heroSpecialtiesLabel: "Specialties",
    heroSpecialtiesText: "Residential",
    heroServiceLabel: "Service",
    heroServiceText: "Personalized from design to delivery",
    heroManagementLabel: "Management",
    heroManagementText: "Full control of costs and schedules",

    // Navbar
    navTopbar:
      "years of projects delivered with excellence • +100k m² executed",
    navAbout: "ABOUT",
    navServices: "SERVICES",
    navPortfolio: "PORTFOLIO",
    navTestimonials: "TESTIMONIALS",
    navContact: "CONTACT",
    navWhatsApp: "TALK ON WHATSAPP",

    // About Section
    aboutTitle: "30 years turning unique projects into reality",
    aboutDescription:
      "With decades of experience and over 100,000 m² delivered, we are a reference in high-standard construction. Our expertise ranges from luxury homes to sophisticated commercial complexes.",
    aboutFeature1: "Excellence in premium finishes",
    aboutFeature2: "Project management with full transparency",
    aboutFeature3: "Strict adherence to deadlines",
    aboutButton: "Learn our story",

    // Sobre Section (new structure)
    sobreTitle: "Why choose Facchini Engineering",
    sobreExperienceLabel: "years in operation",
    sobreM2Label: "m² delivered",
    sobreCitiesLabel: "cities served",
    sobreStoresLabel: "retail projects",
    sobreArchitectsLabel: "architects served",

    // Sobre Features
    sobreFeature1Title: "years", // This will be dynamic with {counters.years}
    sobreFeature1Description: "of operation in high-standard projects.",
    sobreFeature2Title: "+100k m²",
    sobreFeature2Description: "delivered on time.",
    sobreFeature3Title: "Cost management",
    sobreFeature3Description: "with transparency and predictability.",
    sobreFeature4Title: "Refined finishing",
    sobreFeature4Description: "and technical rigor from start to finish.",
    sobreFeature5Title: "Personalized service",
    sobreFeature5Description: "for clients and architects.",
    sobreFeature6Title: "High technical quality",
    sobreFeature6Description:
      "and predictability for those who demand high technical standards.",

    // Services Section
    servicesTitle: "Specialties",
    servicesSubtitle:
      "Complete solutions in construction and renovation for high-standard projects",
    servicesButton: "Request a proposal",
    service1Title: "Residential",
    service1Description:
      "Full execution with technical control and impeccable finishing.",
    service2Title: "Apartment renovation",
    service2Description:
      "Modernization with schedule management and minimal disruption to routine.",
    service3Title: "Client commitment",
    service3Description: "Precision, efficiency and absolute excellence.",
    service4Title: "Condominium developments",
    service4Description:
      "Execution of exclusive developments with technical rigor and sophistication in every detail.",
    service5Title: "Special projects",
    service5Description:
      "Tailor-made works for clients seeking exclusivity in every detail.",
    service6Title: "On-time delivery",
    service6Description:
      "Detail-oriented projects with standards from design to delivery.",

    // Portfolio Section
    portfolioTitle: "Selected portfolio",
    portfolioSubtitle: "A curation of our most representative projects",
    portfolioButton: "I want to transform my project",

    // Individual Portfolio Items
    portfolio1Title: "Luxurious residence with pool • São Paulo",
    portfolio1Alt:
      "High-end residence with illuminated pool at dusk, modern architecture with generous openings and garden integration",
    portfolio2Title: "Contemporary house with leisure area • São Paulo",
    portfolio2Alt:
      "Modern house with pool and integrated leisure area, exposed concrete walls and contemporary landscaping",
    portfolio3Title: "Residence integrated with nature • São Paulo",
    portfolio3Alt:
      "Modern home with multi-level structure integrated into native vegetation, preserving large trees within the project",
    portfolio4Title: "Contemporary living room • São Paulo",
    portfolio4Alt:
      "Sophisticated interior with designer furniture, exposed brick wall and integration with outdoor area",
    portfolio5Title: "Construction in progress • São Paulo",
    portfolio5Alt:
      "Luxurious living room with integrated TV panel, custom wooden furniture and sophisticated ambient lighting",
    portfolio6Title: "Precise execution and organization • São Paulo",
    portfolio6Alt:
      "Children's bedroom with custom furniture in neutral tones, study and play area with functional and welcoming design",

    // Testimonials Section
    testimonialsLabel: "TESTIMONIALS",
    testimonialsTitle: "What our clients and partners say",
    testimonialsSubtitle: "Consistent results in residential projects.",
    testimonialsButton: "Be our next client",

    // Individual Testimonials
    testimonial1Text:
      "Facchini managed our 1,200 m² project with surgical precision. Deadlines were met, communication was transparent and the finishing was impeccable.",
    testimonial1Name: "Eduardo Martins",
    testimonial1Role: "CEO — Financial Sector",
    testimonial2Text:
      "As an architect, I am demanding with execution. Facchini's team respected every detail of the project, from laser leveling to carpentry alignment.",
    testimonial2Name: "Marina Assis",
    testimonial2Role: "Independent Architect",
    testimonial3Text:
      "Cost control and the schedule were followed with discipline. Predictability reduced our risk and sped up occupancy.",
    testimonial3Name: "Ricardo Vilar",
    testimonial3Role: "Operations Director",
    testimonial4Text:
      "We renovated the penthouse. Facchini delivered a luxury standard without disruptions. Organization and site cleanliness stood out.",
    testimonial4Name: "Patrícia Nogueira",
    testimonial4Role: "Residential Client",
    testimonial5Text:
      "In retail, timing is everything. The store was delivered on the agreed date, with superior finishing and an impeccable checklist.",
    testimonial5Name: "Thiago Lopes",
    testimonial5Role: "Head of Expansion — Retail",
    testimonial6Text:
      "The coordination with our suppliers was exemplary. It felt like a strategic partnership, not just execution.",
    testimonial6Name: "Camila Ferraz",
    testimonial6Role: "Administrative Director",

    // Contact Section
    contactTitle: "Contact Facchini Engineering",
    contactSubtitle:
      "Fill in the details below and our team will get back to you by the next business day.",
    contactOtherChannels: "Other contact channels",
    contactWhatsApp: "WhatsApp",
    contactWhatsAppDesc: "Fast and direct service",
    contactPhone: "Phone",
    contactPhoneDesc: "Business hours",
    contactEmail: "E-mail",
    contactEmailDesc: "Response within 24h",
    contactAddress: "Address",
    contactAddressInfo: "São Paulo, SP\nWe serve the entire Greater São Paulo",
    contactHours: "Business hours",
    contactHoursInfo: "Monday to Friday: 8am to 5pm",

    // CTA Section
    ctaTitle:
      "Your project, executed with excellence — on time and without surprises.",
    ctaSubtitlePart1:
      "Turn your vision into reality with the experience of those who have been delivering results for",
    ctaSubtitlePart2: "years.",
    ctaWhatsAppButton: "Talk on WhatsApp now",
    ctaFormButton: "Request quote",
    ctaYearsLabel: "of tradition and experience",
    ctaM2Label: "delivered on time",
    ctaTransparencyLabel: "transparency and control",
    ctaYearsValue: " years",

    // Footer
    footerTagline: "High-Standard Engineering",
    footerPrivacy: "Privacy Policy",
    footerTerms: "Terms of Use",
    footerContact: "Contact",
    footerCopyright: "© 2025 Facchini Engineering. All rights reserved.",

    // WhatsApp messages
    whatsappMessage:
      "Hello! I'd like to know more about Facchini Engineering's services.",
    whatsappPortfolioMessage:
      "Hello! I saw Facchini's portfolio on the website and would like to talk about a similar project.",
    whatsappContactMessage:
      "Hello! I'd like to request a quote for my construction/renovation project. Can you help me?",

    // Contact Form
    formNamePlaceholder: "Name *",
    formPhonePlaceholder: "Phone/WhatsApp *",
    formEmailPlaceholder: "E-mail",
    formMessagePlaceholder: "Describe your project or need",
    formArchitectLabel: "I'm an architect - priority in service",
    formSubmitButton: "Send and receive contact",
    formSubmittingText: "Sending...",
    formSuccessTitle: "We've received your details!",
    formSuccessMessage:
      "We'll contact you soon. If you prefer immediate assistance, click below.",
    formWhatsAppButton: "Chat now on WhatsApp",
    formPrivacyText: "We never share your data with third parties.",
    formErrorMessage:
      "Could not send. Please check the required fields and try again.",
  },
  es: {
    // Hero Section
    heroTitle: "CONSTRUCCIÓN DE ALTO ESTÁNDAR",
    heroSubtitle: "Más de tres décadas transformando proyectos en realidad.",
    heroButton1: "Solicitar presupuesto",
    heroButton2: "Ver portafolio",
    heroFormTitle: "Solicita tu presupuesto",
    heroSpecialtiesLabel: "Especialidades",
    heroSpecialtiesText: "Residencial",
    heroServiceLabel: "Atención",
    heroServiceText: "Personalizado del diseño a la entrega",
    heroManagementLabel: "Gestión",
    heroManagementText: "Control total de costos y plazos",

    // Navbar
    navTopbar:
      "años de proyectos entregados con excelencia • +100k m² ejecutados",
    navAbout: "SOBRE",
    navServices: "SERVICIOS",
    navPortfolio: "PORTAFOLIO",
    navTestimonials: "TESTIMONIOS",
    navContact: "CONTACTO",
    navWhatsApp: "HABLAR EN WHATSAPP",

    // About Section
    aboutTitle: "30 años convirtiendo proyectos únicos en realidad",
    aboutDescription:
      "Con décadas de experiencia y más de 100.000 m² entregados, somos referencia en construcción de alto estándar. Nuestra experiencia abarca desde residencias de lujo hasta complejos comerciales sofisticados.",
    aboutFeature1: "Excelencia en acabados premium",
    aboutFeature2: "Gestión de proyectos con total transparencia",
    aboutFeature3: "Cumplimiento riguroso de plazos",
    aboutButton: "Conoce nuestra historia",

    // Sobre Section (new structure)
    sobreTitle: "Por qué elegir Facchini Ingeniería",
    sobreExperienceLabel: "años de actividad",
    sobreM2Label: "m² entregados",
    sobreCitiesLabel: "ciudades atendidas",
    sobreStoresLabel: "proyectos comerciales",
    sobreArchitectsLabel: "arquitectos atendidos",

    // Sobre Features
    sobreFeature1Title: "años", // This will be dynamic with {counters.years}
    sobreFeature1Description: "de actividad en proyectos de alto estándar.",
    sobreFeature2Title: "+100k m²",
    sobreFeature2Description: "entregados a tiempo.",
    sobreFeature3Title: "Gestión de costos",
    sobreFeature3Description: "con transparencia y previsibilidad.",
    sobreFeature4Title: "Acabado refinado",
    sobreFeature4Description: "y rigor técnico de principio a fin.",
    sobreFeature5Title: "Atención personalizada",
    sobreFeature5Description: "para clientes y arquitectos.",
    sobreFeature6Title: "Técnica de alta calidad",
    sobreFeature6Description:
      "y previsibilidad para quienes exigen altos estándares técnicos.",

    // Services Section
    servicesTitle: "Especialidades",
    servicesSubtitle:
      "Soluciones completas en construcción y reforma para proyectos de alto estándar",
    servicesButton: "Solicitar propuesta",
    service1Title: "Residencial",
    service1Description:
      "Ejecución completa con control técnico y acabado impecable.",
    service2Title: "Reforma de apartamento",
    service2Description:
      "Modernización con gestión de plazos y mínima interferencia en la rutina.",
    service3Title: "Compromiso con el cliente",
    service3Description: "Precisión, eficiencia y excelencia absoluta.",
    service4Title: "Desarrollos condominales",
    service4Description:
      "Ejecución de desarrollos exclusivos con rigor técnico y sofisticación en cada detalle.",
    service5Title: "Proyectos especiales",
    service5Description:
      "Obras a medida para clientes que buscan exclusividad en cada detalle.",
    service6Title: "Entrega a tiempo",
    service6Description:
      "Proyectos detallistas con estándares desde el diseño hasta la entrega.",

    // Portfolio Section
    portfolioTitle: "Portafolio seleccionado",
    portfolioSubtitle:
      "Una curaduría de nuestros proyectos más representativos",
    portfolioButton: "Quiero transformar mi proyecto",

    // Individual Portfolio Items
    portfolio1Title: "Residencia lujosa con piscina • São Paulo",
    portfolio1Alt:
      "Residencia de alto nivel con piscina iluminada al atardecer, arquitectura moderna con amplias aberturas e integración con jardín",
    portfolio2Title: "Casa contemporánea con área de ocio • São Paulo",
    portfolio2Alt:
      "Casa moderna con piscina y área de ocio integrada, muros de hormigón visto y paisajismo contemporáneo",
    portfolio3Title: "Residencia integrada a la naturaleza • São Paulo",
    portfolio3Alt:
      "Casa moderna con estructura multinivel integrada a la vegetación nativa, preservando árboles grandes en el proyecto",
    portfolio4Title: "Sala de estar contemporánea • São Paulo",
    portfolio4Alt:
      "Ambiente interior sofisticado con mobiliario de diseño, pared de ladrillo visto e integración con el exterior",
    portfolio5Title: "Construcción en progreso • São Paulo",
    portfolio5Alt:
      "Sala de estar lujosa con panel de TV integrado, mobiliario de madera a medida e iluminación ambiental sofisticada",
    portfolio6Title: "Ejecución y organización precisa • São Paulo",
    portfolio6Alt:
      "Dormitorio infantil con mobiliario a medida en tonos neutros, zona de estudio y juego con diseño funcional y acogedor",

    // Testimonials Section
    testimonialsLabel: "TESTIMONIOS",
    testimonialsTitle: "Lo que dicen nuestros clientes y socios",
    testimonialsSubtitle: "Resultados consistentes en obras residenciales.",
    testimonialsButton: "Sé nuestro próximo cliente",

    // Individual Testimonials
    testimonial1Text:
      "Facchini gestionó nuestra obra de 1.200 m² con precisión quirúrgica. Plazos cumplidos, comunicación transparente y acabado impecable.",
    testimonial1Name: "Eduardo Martins",
    testimonial1Role: "CEO — Sector Financiero",
    testimonial2Text:
      "Como arquitecta, soy exigente con la ejecución. El equipo de Facchini respetó cada detalle del proyecto, desde el nivel láser hasta la alineación de la carpintería.",
    testimonial2Name: "Marina Assis",
    testimonial2Role: "Arquitecta independiente",
    testimonial3Text:
      "El control de costos y el cronograma se siguieron con disciplina. La previsibilidad redujo nuestro riesgo y aceleró la ocupación.",
    testimonial3Name: "Ricardo Vilar",
    testimonial3Role: "Director de Operaciones",
    testimonial4Text:
      "Renovamos la cubierta. Facchini entregó un estándar de lujo sin contratiempos. La organización y limpieza en obra llamaron la atención.",
    testimonial4Name: "Patrícia Nogueira",
    testimonial4Role: "Cliente residencial",
    testimonial5Text:
      "En retail, el tiempo lo es todo. La tienda se entregó en la fecha acordada, con acabado superior y checklist impecable.",
    testimonial5Name: "Thiago Lopes",
    testimonial5Role: "Jefe de Expansión — Retail",
    testimonial6Text:
      "La coordinación con nuestros proveedores fue ejemplar. Fue una asociación estratégica, no solo ejecución.",
    testimonial6Name: "Camila Ferraz",
    testimonial6Role: "Directora Administrativa",

    // Contact Section
    contactTitle: "Contacta con Facchini",
    contactSubtitle:
      "Rellena los datos a continuación y nuestro equipo se pondrá en contacto contigo en el siguiente día hábil.",
    contactOtherChannels: "Otros canales de contacto",
    contactWhatsApp: "WhatsApp",
    contactWhatsAppDesc: "Atención rápida y directa",
    contactPhone: "Teléfono",
    contactPhoneDesc: "Horario comercial",
    contactEmail: "Correo electrónico",
    contactEmailDesc: "Respuesta en 24h",
    contactAddress: "Dirección",
    contactAddressInfo: "São Paulo, SP\nAtendemos toda el Gran São Paulo",
    contactHours: "Horario de atención",
    contactHoursInfo: "Lunes a viernes: 8h a 17h",

    // CTA Section
    ctaTitle:
      "Tu proyecto, ejecutado con excelencia — a tiempo y sin sorpresas.",
    ctaSubtitlePart1:
      "Transforma tu visión en realidad con la experiencia de quienes entregan resultados desde hace",
    ctaSubtitlePart2: "años.",
    ctaWhatsAppButton: "Hablar en WhatsApp ahora",
    ctaFormButton: "Solicitar presupuesto",
    ctaYearsLabel: "de tradición y experiencia",
    ctaM2Label: "entregados a tiempo",
    ctaTransparencyLabel: "transparencia y control",
    ctaYearsValue: " años",

    // Footer
    footerTagline: "Ingeniería de Alto Estándar",
    footerPrivacy: "Política de Privacidad",
    footerTerms: "Términos de Uso",
    footerContact: "Contacto",
    footerCopyright:
      "© 2025 Facchini Ingeniería. Todos los derechos reservados.",

    // WhatsApp messages
    whatsappMessage:
      "¡Hola! Me gustaría saber más sobre los servicios de Facchini Ingeniería.",
    whatsappPortfolioMessage:
      "¡Hola! Vi el portafolio de Facchini en la web y me gustaría hablar sobre un proyecto similar.",
    whatsappContactMessage:
      "¡Hola! Me gustaría solicitar un presupuesto para mi proyecto de construcción/reforma. ¿Pueden ayudarme?",

    // Contact Form
    formNamePlaceholder: "Nombre *",
    formPhonePlaceholder: "Teléfono/WhatsApp *",
    formEmailPlaceholder: "Correo electrónico",
    formMessagePlaceholder: "Describe tu proyecto o necesidad",
    formArchitectLabel: "Soy arquitecto(a) - servicio prioritario",
    formSubmitButton: "Enviar y recibir contacto",
    formSubmittingText: "Enviando...",
    formSuccessTitle: "¡Recibimos tus datos!",
    formSuccessMessage:
      "Pronto nos pondremos en contacto contigo. Si prefieres atención inmediata, haz clic abajo.",
    formWhatsAppButton: "Hablar ahora en WhatsApp",
    formPrivacyText: "Nunca compartimos tus datos con terceros.",
    formErrorMessage:
      "No fue posible enviar. Revisa los campos obligatorios e intenta de nuevo.",
  },
  fr: {
    // Hero Section
    heroTitle: "CONSTRUCTION HAUT DE GAMME",
    heroSubtitle:
      "Plus de trois décennies à transformer les projets en réalité.",
    heroButton1: "Demander un devis",
    heroButton2: "Voir le portfolio",
    heroFormTitle: "Demandez votre devis",
    heroSpecialtiesLabel: "Spécialités",
    heroSpecialtiesText: "Résidentiel",
    heroServiceLabel: "Service",
    heroServiceText: "Personnalisé de la conception à la livraison",
    heroManagementLabel: "Gestion",
    heroManagementText: "Contrôle total des coûts et délais",

    // Navbar
    navTopbar: "années de projets livrés avec excellence • +100k m² exécutés",
    navAbout: "À PROPOS",
    navServices: "SERVICES",
    navPortfolio: "PORTFOLIO",
    navTestimonials: "TÉMOIGNAGES",
    navContact: "CONTACT",
    navWhatsApp: "PARLER SUR WHATSAPP",

    // About Section
    aboutTitle: "30 ans à transformer des projets uniques en réalité",
    aboutDescription:
      "Avec des décennies d'expérience et plus de 100 000 m² livrés, nous sommes une référence en construction haut de gamme. Notre expertise couvre des résidences de luxe aux complexes commerciaux sophistiqués.",
    aboutFeature1: "Excellence des finitions premium",
    aboutFeature2: "Gestion de projet avec transparence totale",
    aboutFeature3: "Respect strict des délais",
    aboutButton: "Découvrez notre histoire",

    // Sobre Section (new structure)
    sobreTitle: "Pourquoi choisir Facchini Engineering",
    sobreExperienceLabel: "années d'activité",
    sobreM2Label: "m² livrés",
    sobreCitiesLabel: "villes desservies",
    sobreStoresLabel: "projets commerciaux",
    sobreArchitectsLabel: "architectes servis",

    // Sobre Features
    sobreFeature1Title: "années", // This will be dynamic with {counters.years}
    sobreFeature1Description: "d'activité dans des projets haut de gamme.",
    sobreFeature2Title: "+100k m²",
    sobreFeature2Description: "livrés dans les délais.",
    sobreFeature3Title: "Gestion des coûts",
    sobreFeature3Description: "avec transparence et prévisibilité.",
    sobreFeature4Title: "Finition soignée",
    sobreFeature4Description: "et rigueur technique du début à la fin.",
    sobreFeature5Title: "Service personnalisé",
    sobreFeature5Description: "pour clients et architectes.",
    sobreFeature6Title: "Haute qualité technique",
    sobreFeature6Description:
      "et prévisibilité pour ceux qui exigent des standards techniques élevés.",

    // Services Section
    servicesTitle: "Spécialités",
    servicesSubtitle:
      "Solutions complètes en construction et rénovation pour projets haut de gamme",
    servicesButton: "Demander une proposition",
    service1Title: "Résidentiel",
    service1Description:
      "Exécution complète avec contrôle technique et finition impeccable.",
    service2Title: "Rénovation d'appartement",
    service2Description:
      "Modernisation avec gestion des délais et intervention minimale sur la routine.",
    service3Title: "Engagement client",
    service3Description: "Précision, efficacité et excellence absolue.",
    service4Title: "Développements en copropriété",
    service4Description:
      "Exécution de projets exclusifs avec rigueur technique et sophistication dans chaque détail.",
    service5Title: "Projets spéciaux",
    service5Description:
      "Travaux sur mesure pour des clients recherchant l'exclusivité dans chaque détail.",
    service6Title: "Livraison dans les délais",
    service6Description:
      "Projets détaillés avec standards du design à la livraison.",

    // Portfolio Section
    portfolioTitle: "Nos projets sélectionnés",
    portfolioSubtitle: "Une sélection de nos projets les plus représentatifs",
    portfolioButton: "Je veux transformer mon projet",

    // Individual Portfolio Items
    portfolio1Title: "Résidence luxueuse avec piscine • São Paulo",
    portfolio1Alt:
      "Résidence haut de gamme avec piscine éclairée au coucher du soleil, architecture moderne avec larges ouvertures et intégration jardin",
    portfolio2Title: "Maison contemporaine avec espace de loisirs • São Paulo",
    portfolio2Alt:
      "Maison moderne avec piscine et espace de loisirs intégré, murs en béton apparent et aménagement paysager contemporain",
    portfolio3Title: "Résidence intégrée à la nature • São Paulo",
    portfolio3Alt:
      "Maison moderne à plusieurs niveaux intégrée à la végétation locale, avec de grands arbres préservés dans le projet",
    portfolio4Title: "Salon contemporain • São Paulo",
    portfolio4Alt:
      "Intérieur sophistiqué avec mobilier design, mur en briques apparentes et intégration avec l'extérieur",
    portfolio5Title: "Construction en cours • São Paulo",
    portfolio5Alt:
      "Salon luxueux avec panneau TV intégré, mobilier en bois sur mesure et éclairage d'ambiance sophistiqué",
    portfolio6Title: "Exécution et organisation précises • São Paulo",
    portfolio6Alt:
      "Chambre d'enfant avec mobilier sur mesure en tons neutres, espace d'étude et de jeu fonctionnel et accueillant",

    // Testimonials Section
    testimonialsLabel: "TÉMOIGNAGES",
    testimonialsTitle: "Ce que disent nos clients et partenaires",
    testimonialsSubtitle: "Résultats constants dans les projets résidentiels.",
    testimonialsButton: "Soyez notre prochain client",

    // Individual Testimonials
    testimonial1Text:
      "Facchini a mené notre projet de 1 200 m² avec une précision chirurgicale. Les délais ont été respectés, la communication transparente et les finitions impeccables.",
    testimonial1Name: "Eduardo Martins",
    testimonial1Role: "PDG — Secteur financier",
    testimonial2Text:
      "En tant qu'architecte, je suis exigeante sur l'exécution. L'équipe Facchini a respecté chaque détail du projet, du niveau laser à l'alignement de la menuiserie.",
    testimonial2Name: "Marina Assis",
    testimonial2Role: "Architecte indépendante",
    testimonial3Text:
      "Le contrôle des coûts et le calendrier ont été suivis avec discipline. La prévisibilité a réduit notre risque et accéléré l'occupation.",
    testimonial3Name: "Ricardo Vilar",
    testimonial3Role: "Directeur des opérations",
    testimonial4Text:
      "Nous avons rénové la toiture. Facchini a livré un standard de luxe sans perturbations. L'organisation et la propreté du chantier ont marqué.",
    testimonial4Name: "Patrícia Nogueira",
    testimonial4Role: "Cliente résidentielle",
    testimonial5Text:
      "Dans le retail, le timing est primordial. Le magasin a été livré à la date convenue, avec des finitions supérieures et une checklist impeccable.",
    testimonial5Name: "Thiago Lopes",
    testimonial5Role: "Responsable expansion — Retail",
    testimonial6Text:
      "La coordination avec nos fournisseurs a été exemplaire. Cela ressemblait à un partenariat stratégique, pas seulement à une exécution.",
    testimonial6Name: "Camila Ferraz",
    testimonial6Role: "Directrice administrative",

    // Contact Section
    contactTitle: "Contactez Facchini Engineering",
    contactSubtitle:
      "Remplissez les informations ci-dessous et notre équipe vous contactera d'ici le prochain jour ouvrable.",
    contactOtherChannels: "Autres canaux de contact",
    contactWhatsApp: "WhatsApp",
    contactWhatsAppDesc: "Service rapide et direct",
    contactPhone: "Téléphone",
    contactPhoneDesc: "Heures d'ouverture",
    contactEmail: "E-mail",
    contactEmailDesc: "Réponse sous 24h",
    contactAddress: "Adresse",
    contactAddressInfo:
      "São Paulo, SP\nNous desservons tout le Grand São Paulo",
    contactHours: "Heures de service",
    contactHoursInfo: "Lundi à vendredi : 8h à 17h",

    // CTA Section
    ctaTitle:
      "Votre projet, exécuté avec excellence — à temps et sans surprises.",
    ctaSubtitlePart1:
      "Transformez votre vision en réalité avec l'expérience de ceux qui livrent des résultats depuis",
    ctaSubtitlePart2: "ans.",
    ctaWhatsAppButton: "Parler sur WhatsApp maintenant",
    ctaFormButton: "Demander un devis",
    ctaYearsLabel: "de tradition et d'expérience",
    ctaM2Label: "livrés à temps",
    ctaTransparencyLabel: "transparence et contrôle",
    ctaYearsValue: " ans",

    // Footer
    footerTagline: "Ingénierie Haut de Gamme",
    footerPrivacy: "Politique de confidentialité",
    footerTerms: "Conditions d'utilisation",
    footerContact: "Contact",
    footerCopyright: "© 2025 Facchini Ingénierie. Tous droits réservés.",

    // WhatsApp messages
    whatsappMessage:
      "Bonjour ! J'aimerais en savoir plus sur les services de Facchini Engineering.",
    whatsappPortfolioMessage:
      "Bonjour ! J'ai vu le portfolio de Facchini sur le site et j'aimerais discuter d'un projet similaire.",
    whatsappContactMessage:
      "Bonjour ! J'aimerais demander un devis pour mon projet de construction/rénovation. Pouvez-vous m'aider ?",

    // Contact Form
    formNamePlaceholder: "Nom *",
    formPhonePlaceholder: "Téléphone/WhatsApp *",
    formEmailPlaceholder: "E-mail",
    formMessagePlaceholder: "Décrivez votre projet ou besoin",
    formArchitectLabel: "Je suis architecte - service prioritaire",
    formSubmitButton: "Envoyer et recevoir un contact",
    formSubmittingText: "Envoi en cours...",
    formSuccessTitle: "Nous avons reçu vos informations !",
    formSuccessMessage:
      "Nous vous contacterons bientôt. Si vous préférez une assistance immédiate, cliquez ci-dessous.",
    formWhatsAppButton: "Parler maintenant sur WhatsApp",
    formPrivacyText: "Nous ne partageons jamais vos données avec des tiers.",
    formErrorMessage:
      "Impossible d'envoyer. Vérifiez les champs obligatoires et réessayez.",
  },
  it: {
    // Hero Section
    heroTitle: "COSTRUZIONE DI ALTO LIVELLO",
    heroSubtitle: "Più di tre decenni trasformando progetti in realtà.",
    heroButton1: "Richiedi un preventivo",
    heroButton2: "Vedi portfolio",
    heroFormTitle: "Richiedi il tuo preventivo",
    heroSpecialtiesLabel: "Specialità",
    heroSpecialtiesText: "Residenziale",
    heroServiceLabel: "Servizio",
    heroServiceText: "Personalizzato dalla progettazione alla consegna",
    heroManagementLabel: "Gestione",
    heroManagementText: "Controllo completo di costi e tempistiche",

    // Navbar
    navTopbar: "anni di progetti consegnati con eccellenza • +100k m² eseguiti",
    navAbout: "CHI SIAMO",
    navServices: "SERVIZI",
    navPortfolio: "PORTFOLIO",
    navTestimonials: "TESTIMONIANZE",
    navContact: "CONTATTO",
    navWhatsApp: "PARLA SU WHATSAPP",

    // About Section
    aboutTitle: "30 anni trasformando progetti unici in realtà",
    aboutDescription:
      "Con decenni di esperienza e oltre 100.000 m² consegnati, siamo un punto di riferimento nella costruzione di alto livello. La nostra esperienza spazia da residenze di lusso a complessi commerciali sofisticati.",
    aboutFeature1: "Eccellenza nelle finiture premium",
    aboutFeature2: "Gestione dei progetti con piena trasparenza",
    aboutFeature3: "Rispetto rigoroso delle scadenze",
    aboutButton: "Conosci la nostra storia",

    // Sobre Section (new structure)
    sobreTitle: "Perché scegliere Facchini Engineering",
    sobreExperienceLabel: "anni di attività",
    sobreM2Label: "m² consegnati",
    sobreCitiesLabel: "città servite",
    sobreStoresLabel: "progetti commerciali",
    sobreArchitectsLabel: "architetti serviti",

    // Sobre Features
    sobreFeature1Title: "anni", // This will be dynamic with {counters.years}
    sobreFeature1Description: "di attività in progetti di alto livello.",
    sobreFeature2Title: "+100k m²",
    sobreFeature2Description: "consegnati in tempo.",
    sobreFeature3Title: "Gestione dei costi",
    sobreFeature3Description: "con trasparenza e prevedibilità.",
    sobreFeature4Title: "Finiture raffinate",
    sobreFeature4Description: "e rigore tecnico dall'inizio alla fine.",
    sobreFeature5Title: "Servizio personalizzato",
    sobreFeature5Description: "per clienti e architetti.",
    sobreFeature6Title: "Alta qualità tecnica",
    sobreFeature6Description:
      "e prevedibilità per chi richiede standard tecnici elevati.",

    // Services Section
    servicesTitle: "Specialità",
    servicesSubtitle:
      "Soluzioni complete in costruzione e ristrutturazione per progetti di alto livello",
    servicesButton: "Richiedi una proposta",
    service1Title: "Residenziale",
    service1Description:
      "Esecuzione completa con controllo tecnico e finitura impeccabile.",
    service2Title: "Ristrutturazione di appartamenti",
    service2Description:
      "Modernizzazione con gestione dei tempi e minima interferenza nella routine.",
    service3Title: "Impegno verso il cliente",
    service3Description: "Precisione, efficienza e assoluta eccellenza.",
    service4Title: "Sviluppi condominiali",
    service4Description:
      "Esecuzione di progetti esclusivi con rigore tecnico e sofisticazione in ogni dettaglio.",
    service5Title: "Progetti speciali",
    service5Description:
      "Opere su misura per clienti che cercano esclusività in ogni dettaglio.",
    service6Title: "Consegna puntuale",
    service6Description:
      "Progetti curati nei dettagli con standard dal progetto alla consegna.",

    // Portfolio Section
    portfolioTitle: "I nostri progetti selezionati",
    portfolioSubtitle: "Una selezione dei nostri progetti più rappresentativi",
    portfolioButton: "Voglio trasformare il mio progetto",

    // Individual Portfolio Items
    portfolio1Title: "Residenza lussuosa con piscina • São Paulo",
    portfolio1Alt:
      "Residenza di alto livello con piscina illuminata al tramonto, architettura moderna con ampie aperture e integrazione con il giardino",
    portfolio2Title: "Casa contemporanea con area relax • São Paulo",
    portfolio2Alt:
      "Casa moderna con piscina e area relax integrata, muri in cemento a vista e paesaggistica contemporanea",
    portfolio3Title: "Residenza integrata nella natura • São Paulo",
    portfolio3Alt:
      "Casa moderna su più livelli integrata nella vegetazione autoctona, con grandi alberi preservati nel progetto",
    portfolio4Title: "Soggiorno contemporaneo • São Paulo",
    portfolio4Alt:
      "Interno sofisticato con mobili di design, parete in mattoni a vista e integrazione con l'area esterna",
    portfolio5Title: "Costruzione in corso • São Paulo",
    portfolio5Alt:
      "Soggiorno lussuoso con pannello TV integrato, arredi in legno su misura e illuminazione d'ambiente sofisticata",
    portfolio6Title: "Esecuzione e organizzazione precise • São Paulo",
    portfolio6Alt:
      "Camera per bambini con mobili su misura in toni neutri, area studio e gioco con design funzionale e accogliente",

    // Testimonials Section
    testimonialsLabel: "TESTIMONIANZE",
    testimonialsTitle: "Cosa dicono i nostri clienti e partner",
    testimonialsSubtitle: "Risultati coerenti nei progetti residenziali.",
    testimonialsButton: "Sii il nostro prossimo cliente",

    // Individual Testimonials
    testimonial1Text:
      "Facchini ha gestito la nostra opera di 1.200 m² con precisione chirurgica. Scadenze rispettate, comunicazione trasparente e finiture impeccabili.",
    testimonial1Name: "Eduardo Martins",
    testimonial1Role: "CEO — Settore finanziario",
    testimonial2Text:
      "Come architetto, sono esigente sull'esecuzione. Il team Facchini ha rispettato ogni dettaglio del progetto, dal livello laser all'allineamento della carpenteria.",
    testimonial2Name: "Marina Assis",
    testimonial2Role: "Architetto indipendente",
    testimonial3Text:
      "Il controllo dei costi e il cronoprogramma sono stati seguiti con disciplina. La prevedibilità ha ridotto il nostro rischio e accelerato l'occupazione.",
    testimonial3Name: "Ricardo Vilar",
    testimonial3Role: "Direttore operativo",
    testimonial4Text:
      "Abbiamo rinnovato la copertura. Facchini ha consegnato uno standard di lusso senza perturbazioni. L'organizzazione e la pulizia del cantiere hanno colpito.",
    testimonial4Name: "Patrícia Nogueira",
    testimonial4Role: "Cliente residenziale",
    testimonial5Text:
      "Nel retail, i tempi sono tutto. Il negozio è stato consegnato nella data concordata, con finiture superiori e checklist impeccabile.",
    testimonial5Name: "Thiago Lopes",
    testimonial5Role: "Responsabile espansione — Retail",
    testimonial6Text:
      "Il coordinamento con i nostri fornitori è stato esemplare. È stata una partnership strategica, non solo esecuzione.",
    testimonial6Name: "Camila Ferraz",
    testimonial6Role: "Direttrice amministrativa",

    // Contact Section
    contactTitle: "Contatta Facchini",
    contactSubtitle:
      "Compila i dati qui sotto e il nostro team ti contatterà entro il prossimo giorno lavorativo.",
    contactOtherChannels: "Altri canali di contatto",
    contactWhatsApp: "WhatsApp",
    contactWhatsAppDesc: "Assistenza rapida e diretta",
    contactPhone: "Telefono",
    contactPhoneDesc: "Orario di ufficio",
    contactEmail: "E-mail",
    contactEmailDesc: "Risposta entro 24h",
    contactAddress: "Indirizzo",
    contactAddressInfo: "São Paulo, SP\nServiamo tutta la Grande São Paulo",
    contactHours: "Orari di servizio",
    contactHoursInfo: "Lunedì a venerdì: 8h alle 17h",

    // CTA Section
    ctaTitle:
      "Il tuo progetto, eseguito con eccellenza — nei tempi e senza sorprese.",
    ctaSubtitlePart1:
      "Trasforma la tua visione in realtà con l'esperienza di chi consegna risultati da",
    ctaSubtitlePart2: "anni.",
    ctaWhatsAppButton: "Parla su WhatsApp ora",
    ctaFormButton: "Richiedi preventivo",
    ctaYearsLabel: "di tradizione ed esperienza",
    ctaM2Label: "consegnati nei tempi",
    ctaTransparencyLabel: "trasparenza e controllo",
    ctaYearsValue: " anni",

    // Footer
    footerTagline: "Ingegneria di Alto Livello",
    footerPrivacy: "Informativa sulla privacy",
    footerTerms: "Termini di utilizzo",
    footerContact: "Contatto",
    footerCopyright: "© 2025 Facchini Ingegneria. Tutti i diritti riservati.",

    // WhatsApp messages
    whatsappMessage:
      "Ciao! Vorrei saperne di più sui servizi di Facchini Engineering.",
    whatsappPortfolioMessage:
      "Ciao! Ho visto il portfolio di Facchini sul sito e vorrei parlare di un progetto simile.",
    whatsappContactMessage:
      "Ciao! Vorrei richiedere un preventivo per il mio progetto di costruzione/ristrutturazione. Potete aiutarmi?",

    // Contact Form
    formNamePlaceholder: "Nome *",
    formPhonePlaceholder: "Telefono/WhatsApp *",
    formEmailPlaceholder: "E-mail",
    formMessagePlaceholder: "Descrivi il tuo progetto o esigenza",
    formArchitectLabel: "Sono un architetto - servizio prioritario",
    formSubmitButton: "Invia e ricevi contatto",
    formSubmittingText: "Invio in corso...",
    formSuccessTitle: "Abbiamo ricevuto i tuoi dati!",
    formSuccessMessage:
      "Ti contatteremo presto. Se preferisci assistenza immediata, clicca qui sotto.",
    formWhatsAppButton: "Parla ora su WhatsApp",
    formPrivacyText: "Non condividiamo mai i tuoi dati con terze parti.",
    formErrorMessage:
      "Impossibile inviare. Controlla i campi obbligatori e riprova.",
  },
  ja: {
    // Hero Section
    heroTitle: "高水準の建設",
    heroSubtitle: "30年以上にわたりプロジェクトを現実に変えています。",
    heroButton1: "見積もりを依頼する",
    heroButton2: "ポートフォリオを見る",
    heroFormTitle: "見積もりをご依頼ください",
    heroSpecialtiesLabel: "専門分野",
    heroSpecialtiesText: "住宅",
    heroServiceLabel: "サービス",
    heroServiceText: "設計から引き渡しまでの個別対応",
    heroManagementLabel: "管理",
    heroManagementText: "コストとスケジュールの完全な管理",

    // Navbar
    navTopbar: "長年にわたり優れた実績のある工事 • +100k m² 実績",
    navAbout: "会社案内",
    navServices: "サービス",
    navPortfolio: "ポートフォリオ",
    navTestimonials: "お客様の声",
    navContact: "お問い合わせ",
    navWhatsApp: "WHATSAPPで話す",

    // About Section
    aboutTitle: "30年間、ユニークなプロジェクトを現実にしてきました",
    aboutDescription:
      "数十年の経験と100,000 m²以上の実績を持ち、高水準の建設分野で信頼されています。高級住宅から洗練された商業施設まで幅広く対応します。",
    aboutFeature1: "プレミアム仕上げの卓越性",
    aboutFeature2: "完全な透明性を備えたプロジェクト管理",
    aboutFeature3: "厳格な納期順守",
    aboutButton: "私たちの歴史を知る",

    // Sobre Section (new structure)
    sobreTitle: "なぜFacchiniを選ぶのか",
    sobreExperienceLabel: "稼働年数",
    sobreM2Label: "納品済みm²",
    sobreCitiesLabel: "対応都市",
    sobreStoresLabel: "商業プロジェクト",
    sobreArchitectsLabel: "対応建築家",

    // Sobre Features
    sobreFeature1Title: "年", // This will be dynamic with {counters.years}
    sobreFeature1Description: "高水準のプロジェクトでの稼働年数です。",
    sobreFeature2Title: "+100k m²",
    sobreFeature2Description: "予定どおりに納品。",
    sobreFeature3Title: "コスト管理",
    sobreFeature3Description: "透明性と予測可能性を提供します。",
    sobreFeature4Title: "洗練された仕上げ",
    sobreFeature4Description: "始めから終わりまでの技術的厳密さ。",
    sobreFeature5Title: "個別対応",
    sobreFeature5Description: "クライアントと建築家向けの対応。",
    sobreFeature6Title: "高い技術品質",
    sobreFeature6Description:
      "高い技術水準を求める方への予測可能性を提供します。",

    // Services Section
    servicesTitle: "専門分野",
    servicesSubtitle:
      "高水準プロジェクトのための建設と改修の完全なソリューション",
    servicesButton: "提案を依頼",
    service1Title: "住宅（高水準）",
    service1Description: "技術管理と完璧な仕上げによるフル施工。",
    service2Title: "アパートの改装",
    service2Description: "スケジュール管理と日常への最低限の干渉での近代化。",
    service3Title: "顧客へのコミットメント",
    service3Description: "精度、効率、絶対的な卓越性。",
    service4Title: "マンション開発",
    service4Description:
      "技術的厳格さと細部への洗練をもった排他的な開発の遂行。",
    service5Title: "特別プロジェクト",
    service5Description:
      "各ディテールに独自性を求めるクライアント向けのオーダーメイド工事。",
    service6Title: "期日通りの納品",
    service6Description:
      "設計から引き渡しまで高水準のディテールを追求した施工。",

    // Portfolio Section
    portfolioTitle: "私たちのプロジェクト",
    portfolioSubtitle: "最も代表的な作品をぜひご覧ください",
    portfolioButton: "プロジェクト全体を見る",

    // Individual Portfolio Items
    portfolio1Title: "プール付き高級住宅 • サンパウロ",
    portfolio1Alt:
      "夕暮れにライトアップされたプールを持つ高級住宅、広い開口部と庭との一体感があるモダンな建築",
    portfolio2Title: "レジャーエリアのある現代住宅 • サンパウロ",
    portfolio2Alt:
      "プールと一体化したレジャーエリアを備えたモダンな住宅、打ち放しコンクリートの壁と現代的な造園",
    portfolio3Title: "自然と調和した住宅 • サンパウロ",
    portfolio3Alt:
      "大きな樹木を残したまま計画された、在来植生と調和する多層構造のモダンハウス",
    portfolio4Title: "コンテンポラリーなリビング • サンパウロ",
    portfolio4Alt:
      "デザイナーズ家具と露出レンガの壁を組み合わせた洗練された内部空間、外部との統合あり",
    portfolio5Title: "建設中の現場 • サンパウロ",
    portfolio5Alt:
      "TVパネルを組み込んだ豪華なリビング、木製のオーダー家具と洗練された間接照明",
    portfolio6Title: "綿密な実行と整理 • サンパウロ",
    portfolio6Alt:
      "ニュートラルトーンのオーダー家具を備えた子供部屋、学習と遊びの機能を兼ね備えた居心地の良いデザイン",

    // Testimonials Section
    testimonialsLabel: "お客様の声",
    testimonialsTitle: "お客様とパートナーからの評価",
    testimonialsSubtitle: "住宅プロジェクトでの一貫した成果。",
    testimonialsButton: "私たちの次のお客様になりませんか",

    // Individual Testimonials
    testimonial1Text:
      "Facchiniは1,200m²のプロジェクトを外科的精度で管理しました。納期は守られ、コミュニケーションは透明で、仕上がりは完璧でした。",
    testimonial1Name: "Eduardo Martins",
    testimonial1Role: "CEO — 金融セクター",
    testimonial2Text:
      "建築家として、私は実行に厳しいです。Facchiniのチームはレーザーレベルから大工仕事の整列に至るまで、プロジェクトの全ての詳細を尊重しました。",
    testimonial2Name: "Marina Assis",
    testimonial2Role: "独立建築家",
    testimonial3Text:
      "コスト管理とスケジュールは規律をもって実行されました。予測可能性によりリスクが低減し、入居が早まりました。",
    testimonial3Name: "Ricardo Vilar",
    testimonial3Role: "オペレーションディレクター",
    testimonial4Text:
      "ペントハウスを改修しました。Facchiniは混乱なくラグジュアリースタンダードを提供しました。現場の整理と清潔さが際立ちました。",
    testimonial4Name: "Patrícia Nogueira",
    testimonial4Role: "住宅クライアント",
    testimonial5Text:
      "小売では時間がすべてです。店舗は合意した日付に引き渡され、高品質な仕上げと完璧なチェックリストがありました。",
    testimonial5Name: "Thiago Lopes",
    testimonial5Role: "拡張責任者 — 小売",
    testimonial6Text:
      "サプライヤーとの調整は模範的でした。単なる実行ではなく戦略的パートナーシップの感覚がありました。",
    testimonial6Name: "Camila Ferraz",
    testimonial6Role: "管理ディレクター",

    // Contact Section
    contactTitle: "Facchiniにお問い合わせください",
    contactSubtitle:
      "以下の情報をご入力いただければ、翌営業日までに担当者よりご連絡いたします。",
    contactOtherChannels: "その他の連絡方法",
    contactWhatsApp: "WhatsApp",
    contactWhatsAppDesc: "迅速で直接的な対応",
    contactPhone: "電話",
    contactPhoneDesc: "営業時間内",
    contactEmail: "メール",
    contactEmailDesc: "24時間以内に返信",
    contactAddress: "住所",
    contactAddressInfo: "サンパウロ、SP\n大サンパウロ圏全域にサービスを提供",
    contactHours: "営業時間",
    contactHoursInfo: "月〜金：8時〜17時",

    // CTA Section
    ctaTitle: "あなたのプロジェクトを、期限内に驚きなく高品質で実行します。",
    ctaSubtitlePart1:
      "長年にわたり成果を出してきた経験で、あなたのビジョンを現実に変えます",
    ctaSubtitlePart2: "年。",
    ctaWhatsAppButton: "今すぐWhatsAppで相談",
    ctaFormButton: "見積もりを依頼",
    ctaYearsLabel: "伝統と経験",
    ctaM2Label: "期限内に納品",
    ctaTransparencyLabel: "透明性と管理",
    ctaYearsValue: " 年",

    // Footer
    footerTagline: "高水準エンジニアリング",
    footerPrivacy: "プライバシーポリシー",
    footerTerms: "利用規約",
    footerContact: "お問い合わせ",
    footerCopyright: "© 2025 Facchini Engineering。All rights reserved.",

    // WhatsApp messages
    whatsappMessage:
      "こんにちは！Facchini Engineeringのサービスについて詳しく知りたいです。",
    whatsappPortfolioMessage:
      "こんにちは！ウェブサイトでFacchiniのポートフォリオを拝見し、同様のプロジェクトについて相談したいです。",
    whatsappContactMessage:
      "こんにちは！建設・改修プロジェクトの見積もりをお願いしたいです。サポートいただけますか？",

    // Contact Form
    formNamePlaceholder: "お名前 *",
    formPhonePlaceholder: "電話/WhatsApp *",
    formEmailPlaceholder: "メール",
    formMessagePlaceholder: "プロジェクトやご要望についてご記入ください",
    formArchitectLabel: "建築家です - 優先対応",
    formSubmitButton: "送信して連絡を受ける",
    formSubmittingText: "送信中...",
    formSuccessTitle: "ご情報を受け取りました！",
    formSuccessMessage:
      "後ほど担当よりご連絡いたします。すぐの対応を希望される場合は下のボタンをご利用ください。",
    formWhatsAppButton: "今すぐWhatsAppで話す",
    formPrivacyText: "お客様の情報を第三者と共有することはありません。",
    formErrorMessage:
      "送信できませんでした。必須項目をご確認のうえ、再度お試しください。",
  },
};

class LanguageManager {
  private currentLanguage: Language = "pt";
  private changeListeners: ((language: Language) => void)[] = [];

  constructor() {
    // Load saved language from localStorage
    const savedLanguage = localStorage.getItem("facchini-language") as Language;
    if (savedLanguage && savedLanguage in translations) {
      this.currentLanguage = savedLanguage;
    }
  }

  getCurrentLanguage(): Language {
    return this.currentLanguage;
  }

  changeLanguage(language: Language): void {
    // Prevent unnecessary updates
    if (this.currentLanguage === language) {
      return;
    }

    this.currentLanguage = language;
    localStorage.setItem("facchini-language", language);

    // Use requestAnimationFrame to prevent blocking
    requestAnimationFrame(() => {
      this.applyTranslations();
      this.notifyListeners(language);
    });
  }

  // Method to clear stored original text and reapply translations
  refreshTranslations(): void {
    const elements = document.querySelectorAll("[data-translate]");
    elements.forEach((element) => {
      element.removeAttribute("data-original-text");
    });
    // Force a small delay to ensure DOM is updated
    setTimeout(() => {
      this.applyTranslations();
    }, 50);
  }

  onLanguageChange(callback: (language: Language) => void): () => void {
    this.changeListeners.push(callback);
    return () => {
      this.changeListeners = this.changeListeners.filter(
        (cb) => cb !== callback
      );
    };
  }

  private notifyListeners(language: Language): void {
    this.changeListeners.forEach((callback) => callback(language));
  }

  applyTranslations(): void {
    try {
      const currentTranslations = translations[this.currentLanguage];

      // Apply translations to elements with data-translate attributes
      const elements = document.querySelectorAll("[data-translate]");

      elements.forEach((element) => {
        try {
          const key = element.getAttribute("data-translate");
          if (!key || !currentTranslations[key]) return;

          // Store original Portuguese text if not already stored
          // Always use Portuguese translation as the "original"
          if (!element.getAttribute("data-original-text")) {
            const portugueseTranslations = translations["pt"];
            let originalText = "";

            // Get the original Portuguese text from translations
            if (portugueseTranslations[key]) {
              originalText = portugueseTranslations[key];
            } else {
              // Fallback to current element content if no Portuguese translation found
              if (
                element.tagName === "INPUT" &&
                element.getAttribute("type") !== "submit"
              ) {
                originalText = (element as HTMLInputElement).placeholder || "";
              } else if (element.tagName === "TEXTAREA") {
                originalText =
                  (element as HTMLTextAreaElement).placeholder || "";
              } else {
                originalText = element.textContent || "";
              }
            }
            element.setAttribute("data-original-text", originalText);
          }

          if (this.currentLanguage === "pt") {
            // For Portuguese, use the Portuguese translation or stored original
            const textToUse =
              currentTranslations[key] ||
              element.getAttribute("data-original-text");
            if (textToUse) {
              if (
                element.tagName === "INPUT" &&
                element.getAttribute("type") !== "submit"
              ) {
                (element as HTMLInputElement).placeholder = textToUse;
              } else if (element.tagName === "TEXTAREA") {
                (element as HTMLTextAreaElement).placeholder = textToUse;
              } else {
                element.textContent = textToUse;
              }
            }
            return;
          }

          let translatedText = currentTranslations[key];

          // Handle dynamic counter replacement for navTopbar
          if (key === "navTopbar") {
            const originalText =
              element.getAttribute("data-original-text") || "";
            const counterMatch = originalText.match(/(\d+)/);
            if (counterMatch) {
              const counterValue = counterMatch[1];
              translatedText = translatedText.replace(
                "{counter}",
                counterValue
              );
            }
          }

          if (
            element.tagName === "INPUT" &&
            element.getAttribute("type") !== "submit"
          ) {
            (element as HTMLInputElement).placeholder = translatedText;
          } else if (element.tagName === "TEXTAREA") {
            (element as HTMLTextAreaElement).placeholder = translatedText;
          } else {
            element.textContent = translatedText;
          }
        } catch (error) {
          console.warn("Error applying translation to element:", error);
        }
      });
    } catch (error) {
      console.error("Error in applyTranslations:", error);
    }
  }

  getTranslation(key: string): string {
    return translations[this.currentLanguage][key] || key;
  }

  // Method to get WhatsApp message with proper translation
  getWhatsAppMessage(
    messageType: "default" | "portfolio" | "contact" = "default"
  ): string {
    let key = "whatsappMessage";
    if (messageType === "portfolio") {
      key = "whatsappPortfolioMessage";
    } else if (messageType === "contact") {
      key = "whatsappContactMessage";
    }
    return this.getTranslation(key);
  }
}

export const languageManager = new LanguageManager();

// Auto-apply translations when page loads
document.addEventListener("DOMContentLoaded", () => {
  languageManager.applyTranslations();
});
