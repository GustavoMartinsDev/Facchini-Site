export type Language = "pt" | "en" | "es" | "fr" | "it" | "ja";

export interface Translations {
  [key: string]: string;
}

export const translations: Record<Language, Translations> = {
  pt: {
    // Hero Section
    heroTitle: "CONSTRUÇÃO DE ALTO PADRÃO",
    heroSubtitle: "Mais de três décadas transformando projetos em realidade.",
    heroButton1: "Solicitar orçamento agora",
    heroButton2: "Ver portfólio",
    heroFormTitle: "Solicite seu orçamento",
    heroSpecialtiesLabel: "Especialidades",
    heroSpecialtiesText: "Residencial • Corporativo • Lojas premium",
    heroServiceLabel: "Atendimento",
    heroServiceText: "Personalizado do projeto à entrega",
    heroManagementLabel: "Gestão",
    heroManagementText: "Controle total de custos e prazos",

    // Navbar
    navTopbar:
      "anos de obras entregues com excelência • +170 mil m² executados",
    navAbout: "SOBRE",
    navServices: "SERVIÇOS",
    navPortfolio: "PORTFÓLIO",
    navTestimonials: "DEPOIMENTOS",
    navContact: "CONTATO",
    navWhatsApp: "FALAR NO WHATSAPP",

    // About Section
    aboutTitle: "30 anos transformando projetos únicos em realidade",
    aboutDescription:
      "Com décadas de experiência e mais de 170 mil m² entregues, somos referência em construção de alto padrão. Nossa expertise abrange desde residências de luxo até complexos comerciais sofisticados.",
    aboutFeature1: "Excelência em acabamentos premium",
    aboutFeature2: "Gestão de projetos com transparência total",
    aboutFeature3: "Cumprimento rigoroso de prazos",
    aboutButton: "Conheça nossa história",

    // Sobre Section (new structure)
    sobreTitle: "Por que escolher a Facchini",
    sobreExperienceLabel: "anos de atuação",
    sobreM2Label: "m² entregues",
    sobreCitiesLabel: "cidades atendidas",
    sobreStoresLabel: "obras de varejo",
    sobreArchitectsLabel: "arquitetos atendidos",

    // Sobre Features
    sobreFeature1Title: "anos", // This will be dynamic with {counters.years}
    sobreFeature1Description: "de atuação em obras de alto padrão.",
    sobreFeature2Title: "+170 mil m²",
    sobreFeature2Description: "entregues no prazo.",
    sobreFeature3Title: "Gestão de custos",
    sobreFeature3Description: "com transparência e previsibilidade.",
    sobreFeature4Title: "Acabamento premium",
    sobreFeature4Description: "e rigor técnico do início ao fim.",
    sobreFeature5Title: "Atendimento personalizado",
    sobreFeature5Description: "para clientes e arquitetos.",
    sobreFeature6Title: "Excelência técnica",
    sobreFeature6Description:
      "e previsibilidade para quem exige padrão de luxo.",

    // Services Section
    servicesTitle: "Especialidades",
    servicesSubtitle:
      "Soluções completas em construção e reforma para projetos de alto padrão",
    servicesButton: "Solicitar proposta",
    service1Title: "Residencial de alto padrão",
    service1Description:
      "Execução completa com controle técnico e acabamento impecável.",
    service2Title: "Reformas premium",
    service2Description:
      "Modernização com gestão de prazos e mínima interferência na rotina.",
    service3Title: "Compromisso com cliente",
    service3Description: "Precisão, eficiência e excelência absoluta.",
    service4Title: "Empreendimentos de Luxo",
    service4Description:
      "Execução de empreendimentos exclusivos com rigor técnico e sofisticação em cada detalhe.",
    service5Title: "Projetos especiais",
    service5Description:
      "Obras personalizadas sob medida para clientes que buscam exclusividade em cada detalhe.",
    service6Title: "Apartamentos",
    service6Description:
      "Obras detalhistas com padrão de luxo do projeto à entrega.",

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
    portfolio5Title: "Sala de Estar Premium com Home Theater • São Paulo",
    portfolio5Alt:
      "Sala de estar luxuosa com painel de TV integrado, móveis planejados em madeira e iluminação ambiente sofisticada",
    portfolio6Title: "Quarto Infantil Planejado • São Paulo",
    portfolio6Alt:
      "Dormitório infantil com móveis planejados em tons neutros, área de estudos e brincadeiras com design funcional e acolhedor",

    // Testimonials Section
    testimonialsLabel: "DEPOIMENTOS",
    testimonialsTitle: "O que nossos clientes e parceiros dizem",
    testimonialsSubtitle:
      "Resultados consistentes em obras residenciais de alto padrão, espaços corporativos e lojas premium.",
    testimonialsButton: "Seja nosso próximo cliente satisfeito",

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
    testimonial5Text:
      "Em varejo, prazo é tudo. A loja foi entregue no dia combinado, com acabamento superior e checklist impecável.",
    testimonial5Name: "Thiago Lopes",
    testimonial5Role: "Head de Expansão — Varejo",
    testimonial6Text:
      "A compatibilização com nossos fornecedores foi exemplar. A sensação foi de parceria estratégica, não apenas execução.",
    testimonial6Name: "Camila Ferraz",
    testimonial6Role: "Diretora Administrativa",

    // Contact Section
    contactTitle: "Fale com a Facchini",
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
    heroSubtitle: "More than three decades turning projects into reality.",
    heroButton1: "Request quote now",
    heroButton2: "View portfolio",
    heroFormTitle: "Request your quote",
    heroSpecialtiesLabel: "Specialties",
    heroSpecialtiesText: "Residential • Corporate • Premium stores",
    heroServiceLabel: "Service",
    heroServiceText: "Personalized from project to delivery",
    heroManagementLabel: "Management",
    heroManagementText: "Total control of costs and deadlines",

    // Navbar
    navTopbar: "years of excellence delivered works • +170k m² executed",
    navAbout: "ABOUT",
    navServices: "SERVICES",
    navPortfolio: "PORTFOLIO",
    navTestimonials: "TESTIMONIALS",
    navContact: "CONTACT",
    navWhatsApp: "WHATSAPP CHAT",

    // About Section
    aboutTitle: "30 years turning unique projects into reality",
    aboutDescription:
      "With decades of experience and over 170,000 m² delivered, we are a reference in high-standard construction. Our expertise ranges from luxury residences to sophisticated commercial complexes.",
    aboutFeature1: "Excellence in premium finishes",
    aboutFeature2: "Project management with total transparency",
    aboutFeature3: "Rigorous deadline compliance",
    aboutButton: "Know our story",

    // Sobre Section (new structure)
    sobreTitle: "Why choose Facchini",
    sobreExperienceLabel: "years of operation",
    sobreM2Label: "m² delivered",
    sobreCitiesLabel: "cities served",
    sobreStoresLabel: "retail works",
    sobreArchitectsLabel: "architects served",

    // Sobre Features
    sobreFeature1Title: "years", // This will be dynamic with {counters.years}
    sobreFeature1Description: "operating in high-standard works.",
    sobreFeature2Title: "+170 thousand m²",
    sobreFeature2Description: "delivered on time.",
    sobreFeature3Title: "Cost management",
    sobreFeature3Description: "with transparency and predictability.",
    sobreFeature4Title: "Premium finishing",
    sobreFeature4Description: "and technical rigor from start to finish.",
    sobreFeature5Title: "Personalized service",
    sobreFeature5Description: "for clients and architects.",
    sobreFeature6Title: "Technical excellence",
    sobreFeature6Description:
      "and predictability for those who demand luxury standards.",

    // Services Section
    servicesTitle: "Specialties",
    servicesSubtitle:
      "Complete solutions in construction and renovation for high-standard projects",
    servicesButton: "Request proposal",
    service1Title: "High-standard Residential",
    service1Description:
      "Complete execution with technical control and impeccable finishing.",
    service2Title: "Premium Renovations",
    service2Description:
      "Modernization with schedule management and minimal routine interference.",
    service3Title: "Client Commitment",
    service3Description: "Precision, efficiency and absolute excellence.",
    service4Title: "Luxury Developments",
    service4Description:
      "Execution of exclusive developments with technical rigor and sophistication in every detail.",
    service5Title: "Special Projects",
    service5Description:
      "Custom-made works for clients seeking exclusivity in every detail.",
    service6Title: "Apartments",
    service6Description:
      "Detailed works with luxury standards from project to delivery.",

    // Portfolio Section
    portfolioTitle: "Selected Portfolio",
    portfolioSubtitle: "A curation of our most representative projects",
    portfolioButton: "I want to transform my project",

    // Individual Portfolio Items
    portfolio1Title: "Luxurious Residence with Pool • São Paulo",
    portfolio1Alt:
      "High-end residence with illuminated pool at sunset, modern architecture with wide openings and garden integration",
    portfolio2Title: "Contemporary House with Leisure Area • São Paulo",
    portfolio2Alt:
      "Modern house with pool and integrated leisure area, exposed concrete walls and contemporary landscaping",
    portfolio3Title: "Nature-Integrated Residence • São Paulo",
    portfolio3Alt:
      "Modern house with multi-level structure integrated with native vegetation, with large trees preserved in the project",
    portfolio4Title: "Contemporary Living Room • São Paulo",
    portfolio4Alt:
      "Sophisticated interior environment with designer furniture, exposed brick wall and integration with outdoor area",
    portfolio5Title: "Premium Living Room with Home Theater • São Paulo",
    portfolio5Alt:
      "Luxurious living room with integrated TV panel, planned wooden furniture and sophisticated ambient lighting",
    portfolio6Title: "Planned Children's Room • São Paulo",
    portfolio6Alt:
      "Children's bedroom with planned furniture in neutral tones, study and play area with functional and welcoming design",

    // Testimonials Section
    testimonialsLabel: "TESTIMONIALS",
    testimonialsTitle: "What our clients and partners say",
    testimonialsSubtitle:
      "Consistent results in high-standard residential works, corporate spaces and premium stores.",
    testimonialsButton: "Be our next satisfied client",

    // Individual Testimonials
    testimonial1Text:
      "Facchini conducted our 1,200 m² construction with surgical precision. Deadlines respected, transparent communication and impeccable finishing.",
    testimonial1Name: "Eduardo Martins",
    testimonial1Role: "CEO — Financial Sector",
    testimonial2Text:
      "As an architect, I'm demanding with execution. Facchini's team respected every detail of the project, from laser level to carpentry alignment.",
    testimonial2Name: "Marina Assis",
    testimonial2Role: "Independent Architect",
    testimonial3Text:
      "Cost control and schedule were followed with discipline. Predictability reduced our risk and accelerated occupancy.",
    testimonial3Name: "Ricardo Vilar",
    testimonial3Role: "Operations Director",
    testimonial4Text:
      "We renovated the rooftop. Facchini delivered luxury standard without disruptions. Organization and construction site cleanliness caught attention.",
    testimonial4Name: "Patrícia Nogueira",
    testimonial4Role: "Residential Client",
    testimonial5Text:
      "In retail, timing is everything. The store was delivered on the agreed date, with superior finishing and impeccable checklist.",
    testimonial5Name: "Thiago Lopes",
    testimonial5Role: "Expansion Head — Retail",
    testimonial6Text:
      "The compatibility with our suppliers was exemplary. The feeling was of strategic partnership, not just execution.",
    testimonial6Name: "Camila Ferraz",
    testimonial6Role: "Administrative Director",

    // Contact Section
    contactTitle: "Contact Facchini",
    contactSubtitle:
      "Fill in the data below and our team will contact you by the next business day.",
    contactOtherChannels: "Other contact channels",
    contactWhatsApp: "WhatsApp",
    contactWhatsAppDesc: "Fast and direct service",
    contactPhone: "Phone",
    contactPhoneDesc: "Business hours",
    contactEmail: "Email",
    contactEmailDesc: "Response within 24h",
    contactAddress: "Address",
    contactAddressInfo: "São Paulo, SP\nWe serve the entire Greater São Paulo",
    contactHours: "Business hours",
    contactHoursInfo: "Monday to Friday: 8am to 5pm",

    // CTA Section
    ctaTitle:
      "Your project, executed with excellence — on time and without surprises.",
    ctaSubtitlePart1:
      "Turn your vision into reality with the experience of those who deliver results for",
    ctaSubtitlePart2: "years.",
    ctaWhatsAppButton: "Chat on WhatsApp now",
    ctaFormButton: "Request quote",
    ctaYearsLabel: "of tradition and experience",
    ctaM2Label: "delivered on time",
    ctaTransparencyLabel: "transparency and control",

    // Footer
    footerTagline: "High-Standard Engineering",
    footerPrivacy: "Privacy Policy",
    footerTerms: "Terms of Use",
    footerContact: "Contact",
    footerCopyright: "© 2025 Facchini Engineering. All rights reserved.",

    // WhatsApp messages
    whatsappMessage:
      "Hello! I would like to know more about Facchini Engineering services.",
    whatsappPortfolioMessage:
      "Hello! I saw Facchini's portfolio on the website and would like to talk about a similar project.",
    whatsappContactMessage:
      "Hello! I would like to request a quote for my construction/renovation project. Can you help me?",

    // Contact Form
    formNamePlaceholder: "Name *",
    formPhonePlaceholder: "Phone/WhatsApp *",
    formEmailPlaceholder: "E-mail",
    formMessagePlaceholder: "Describe your project or need",
    formArchitectLabel: "I'm an architect - priority service",
    formSubmitButton: "Send and receive contact",
    formSubmittingText: "Sending...",
    formSuccessTitle: "We received your information!",
    formSuccessMessage:
      "We'll contact you soon. If you prefer immediate assistance, click below.",
    formWhatsAppButton: "Chat now on WhatsApp",
    formPrivacyText: "We never share your data with third parties.",
    formErrorMessage:
      "Could not send. Review the required fields and try again.",
  },
  es: {
    // Hero Section
    heroTitle: "CONSTRUCCIÓN DE ALTO ESTÁNDAR",
    heroSubtitle: "Más de tres décadas transformando proyectos en realidad.",
    heroButton1: "Solicitar presupuesto ahora",
    heroButton2: "Ver portafolio",
    heroFormTitle: "Solicita tu presupuesto",
    heroSpecialtiesLabel: "Especialidades",
    heroSpecialtiesText: "Residencial • Corporativo • Tiendas premium",
    heroServiceLabel: "Atención",
    heroServiceText: "Personalizada del proyecto a la entrega",
    heroManagementLabel: "Gestión",
    heroManagementText: "Control total de costos y plazos",

    // Navbar
    navTopbar:
      "años de obras entregadas con excelencia • +170 mil m² ejecutados",
    navAbout: "ACERCA",
    navServices: "SERVICIOS",
    navPortfolio: "PORTAFOLIO",
    navTestimonials: "TESTIMONIOS",
    navContact: "CONTACTO",
    navWhatsApp: "CHAT WHATSAPP",

    // About Section
    aboutTitle: "30 años convirtiendo proyectos únicos en realidad",
    aboutDescription:
      "Con décadas de experiencia y más de 170 mil m² entregados, somos referencia en construcción de alto estándar. Nuestra experiencia abarca desde residencias de lujo hasta complejos comerciales sofisticados.",
    aboutFeature1: "Excelencia en acabados premium",
    aboutFeature2: "Gestión de proyectos con transparencia total",
    aboutFeature3: "Cumplimiento riguroso de plazos",
    aboutButton: "Conoce nuestra historia",

    // Sobre Section (new structure)
    sobreTitle: "Por qué elegir Facchini",
    sobreExperienceLabel: "años de operación",
    sobreM2Label: "m² entregados",
    sobreCitiesLabel: "ciudades atendidas",
    sobreStoresLabel: "obras comerciales",
    sobreArchitectsLabel: "arquitectos atendidos",

    // Sobre Features
    sobreFeature1Title: "años", // This will be dynamic with {counters.years}
    sobreFeature1Description: "operando en obras de alto estándar.",
    sobreFeature2Title: "+170 mil m²",
    sobreFeature2Description: "entregados a tiempo.",
    sobreFeature3Title: "Gestión de costos",
    sobreFeature3Description: "con transparencia y previsibilidad.",
    sobreFeature4Title: "Acabado premium",
    sobreFeature4Description: "y rigor técnico de principio a fin.",
    sobreFeature5Title: "Atención personalizada",
    sobreFeature5Description: "para clientes y arquitectos.",
    sobreFeature6Title: "Excelencia técnica",
    sobreFeature6Description:
      "y previsibilidad para quienes exigen estándares de lujo.",

    // Services Section
    servicesTitle: "Especialidades",
    servicesSubtitle:
      "Soluciones completas en construcción y reforma para proyectos de alto estándar",
    servicesButton: "Solicitar propuesta",
    service1Title: "Residencial de alto estándar",
    service1Description:
      "Ejecución completa con control técnico y acabado impecable.",
    service2Title: "Reformas premium",
    service2Description:
      "Modernización con gestión de plazos y mínima interferencia en la rutina.",
    service3Title: "Compromiso con el cliente",
    service3Description: "Precisión, eficiencia y excelencia absoluta.",
    service4Title: "Desarrollos de Lujo",
    service4Description:
      "Ejecución de desarrollos exclusivos con rigor técnico y sofisticación en cada detalle.",
    service5Title: "Proyectos especiales",
    service5Description:
      "Obras personalizadas a medida para clientes que buscan exclusividad en cada detalle.",
    service6Title: "Apartamentos",
    service6Description:
      "Obras detallistas con estándar de lujo del proyecto a la entrega.",

    // Portfolio Section
    portfolioTitle: "Nuestros Proyectos",
    portfolioSubtitle: "Descubre algunos de nuestros trabajos más destacados",
    portfolioButton: "Ver proyecto completo",

    // Individual Portfolio Items
    portfolio1Title: "Residencia Lujosa con Piscina • São Paulo",
    portfolio1Alt:
      "Residencia de alto estándar con piscina iluminada al atardecer, arquitectura moderna con amplias aberturas e integración con jardín",
    portfolio2Title: "Casa Contemporánea con Área de Ocio • São Paulo",
    portfolio2Alt:
      "Casa moderna con piscina y área de ocio integrada, muros de concreto aparente y paisajismo contemporáneo",
    portfolio3Title: "Residencia Integrada a la Naturaleza • São Paulo",
    portfolio3Alt:
      "Casa moderna con estructura en múltiples niveles integrada a la vegetación nativa, con grandes árboles preservados en el proyecto",
    portfolio4Title: "Sala de Estar Contemporánea • São Paulo",
    portfolio4Alt:
      "Ambiente interno sofisticado con muebles de diseño, pared de ladrillo aparente e integración con área externa",
    portfolio5Title: "Sala de Estar Premium con Home Theater • São Paulo",
    portfolio5Alt:
      "Sala de estar lujosa con panel de TV integrado, muebles planificados en madera e iluminación ambiente sofisticada",
    portfolio6Title: "Habitación Infantil Planificada • São Paulo",
    portfolio6Alt:
      "Dormitorio infantil con muebles planificados en tonos neutros, área de estudios y juegos con diseño funcional y acogedor",

    // Testimonials Section
    testimonialsLabel: "TESTIMONIOS",
    testimonialsTitle: "Lo que dicen nuestros clientes y socios",
    testimonialsSubtitle:
      "Resultados consistentes en obras residenciales de alto estándar, espacios corporativos y tiendas premium.",
    testimonialsButton: "Sé nuestro próximo cliente satisfecho",

    // Individual Testimonials
    testimonial1Text:
      "Facchini condujo nuestra construcción de 1.200 m² con precisión quirúrgica. Plazos respetados, comunicación transparente y acabado impecable.",
    testimonial1Name: "Eduardo Martins",
    testimonial1Role: "CEO — Sector Financiero",
    testimonial2Text:
      "Como arquitecta, soy exigente con la ejecución. El equipo de Facchini respetó cada detalle del proyecto, desde el nivel láser hasta la alineación de la carpintería.",
    testimonial2Name: "Marina Assis",
    testimonial2Role: "Arquitecta Independiente",
    testimonial3Text:
      "El control de costos y el cronograma fueron seguidos con disciplina. La previsibilidad redujo nuestro riesgo y aceleró la ocupación.",
    testimonial3Name: "Ricardo Vilar",
    testimonial3Role: "Director Operacional",
    testimonial4Text:
      "Renovamos la azotea. Facchini entregó estándar de lujo sin trastornos. La organización y limpieza de obra llamaron la atención.",
    testimonial4Name: "Patrícia Nogueira",
    testimonial4Role: "Cliente Residencial",
    testimonial5Text:
      "En retail, el tiempo es todo. La tienda fue entregada en la fecha acordada, con acabado superior y checklist impecable.",
    testimonial5Name: "Thiago Lopes",
    testimonial5Role: "Jefe de Expansión — Retail",
    testimonial6Text:
      "La compatibilización con nuestros proveedores fue ejemplar. La sensación fue de asociación estratégica, no solo ejecución.",
    testimonial6Name: "Camila Ferraz",
    testimonial6Role: "Directora Administrativa",

    // Contact Section
    contactTitle: "Contacta con Facchini",
    contactSubtitle:
      "Completa los datos a continuación y nuestro equipo se pondrá en contacto contigo hasta el próximo día hábil.",
    contactOtherChannels: "Otros canales de contacto",
    contactWhatsApp: "WhatsApp",
    contactWhatsAppDesc: "Atención rápida y directa",
    contactPhone: "Teléfono",
    contactPhoneDesc: "Horario comercial",
    contactEmail: "Correo electrónico",
    contactEmailDesc: "Respuesta en hasta 24h",
    contactAddress: "Dirección",
    contactAddressInfo: "São Paulo, SP\nAtendemos toda la Gran São Paulo",
    contactHours: "Horario de atención",
    contactHoursInfo: "Lunes a viernes: 8h a 17h",

    // CTA Section
    ctaTitle:
      "Tu proyecto, ejecutado con excelencia — a tiempo y sin sorpresas.",
    ctaSubtitlePart1:
      "Transforma tu visión en realidad con la experiencia de quien entrega resultados desde hace",
    ctaSubtitlePart2: "años.",
    ctaWhatsAppButton: "Hablar en WhatsApp ahora",
    ctaFormButton: "Solicitar cotización",
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
      "¡Hola! Vi el portafolio de Facchini en el sitio web y me gustaría hablar sobre un proyecto similar.",
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
    heroButton1: "Demander un devis maintenant",
    heroButton2: "Voir le portfolio",
    heroFormTitle: "Demandez votre devis",
    heroSpecialtiesLabel: "Spécialités",
    heroSpecialtiesText: "Résidentiel • Corporate • Magasins premium",
    heroServiceLabel: "Service",
    heroServiceText: "Personnalisé du projet à la livraison",
    heroManagementLabel: "Gestion",
    heroManagementText: "Contrôle total des coûts et délais",

    // Navbar
    navTopbar:
      "années d'ouvrages livrés avec excellence • +170 mille m² exécutés",
    navAbout: "À PROPOS",
    navServices: "SERVICES",
    navPortfolio: "PORTFOLIO",
    navTestimonials: "TÉMOIGNAGES",
    navContact: "CONTACT",
    navWhatsApp: "CHAT WHATSAPP",

    // About Section
    aboutTitle: "30 ans à transformer des projets uniques en réalité",
    aboutDescription:
      "Avec des décennies d'expérience et plus de 170 000 m² livrés, nous sommes une référence en construction haut de gamme. Notre expertise s'étend des résidences de luxe aux complexes commerciaux sophistiqués.",
    aboutFeature1: "Excellence en finitions premium",
    aboutFeature2: "Gestion de projets avec transparence totale",
    aboutFeature3: "Respect rigoureux des délais",
    aboutButton: "Connaître notre histoire",

    // Sobre Section (new structure)
    sobreTitle: "Pourquoi choisir Facchini",
    sobreExperienceLabel: "années d'activité",
    sobreM2Label: "m² livrés",
    sobreCitiesLabel: "villes desservies",
    sobreStoresLabel: "travaux commerciaux",
    sobreArchitectsLabel: "architectes servis",

    // Sobre Features
    sobreFeature1Title: "années", // This will be dynamic with {counters.years}
    sobreFeature1Description: "d'activité dans les travaux haut de gamme.",
    sobreFeature2Title: "+170 mille m²",
    sobreFeature2Description: "livrés dans les délais.",
    sobreFeature3Title: "Gestion des coûts",
    sobreFeature3Description: "avec transparence et prévisibilité.",
    sobreFeature4Title: "Finition premium",
    sobreFeature4Description: "et rigueur technique du début à la fin.",
    sobreFeature5Title: "Service personnalisé",
    sobreFeature5Description: "pour clients et architectes.",
    sobreFeature6Title: "Excellence technique",
    sobreFeature6Description:
      "et prévisibilité pour ceux qui exigent des standards de luxe.",

    // Services Section
    servicesTitle: "Spécialités",
    servicesSubtitle:
      "Solutions complètes en construction et rénovation pour projets haut de gamme",
    servicesButton: "Demander une proposition",
    service1Title: "Résidentiel haut de gamme",
    service1Description:
      "Exécution complète avec contrôle technique et finition impeccable.",
    service2Title: "Rénovations premium",
    service2Description:
      "Modernisation avec gestion des délais et interférence minimale dans la routine.",
    service3Title: "Engagement client",
    service3Description: "Précision, efficacité et excellence absolue.",
    service4Title: "Développements de Luxe",
    service4Description:
      "Exécution de développements exclusifs avec rigueur technique et sophistication dans chaque détail.",
    service5Title: "Projets spéciaux",
    service5Description:
      "Travaux personnalisés sur mesure pour clients recherchant l'exclusivité dans chaque détail.",
    service6Title: "Appartements",
    service6Description:
      "Travaux détaillés avec standard de luxe du projet à la livraison.",

    // Portfolio Section
    portfolioTitle: "Nos Projets",
    portfolioSubtitle:
      "Découvrez quelques-uns de nos travaux les plus remarquables",
    portfolioButton: "Voir le projet complet",

    // Individual Portfolio Items
    portfolio1Title: "Résidence Luxueuse avec Piscine • São Paulo",
    portfolio1Alt:
      "Résidence haut de gamme avec piscine éclairée au coucher du soleil, architecture moderne avec larges ouvertures et intégration avec jardin",
    portfolio2Title: "Maison Contemporaine avec Espace de Loisirs • São Paulo",
    portfolio2Alt:
      "Maison moderne avec piscine et espace de loisirs intégré, murs en béton apparent et aménagement paysager contemporain",
    portfolio3Title: "Résidence Intégrée à la Nature • São Paulo",
    portfolio3Alt:
      "Maison moderne avec structure à plusieurs niveaux intégrée à la végétation native, avec de grands arbres préservés dans le projet",
    portfolio4Title: "Salon Contemporain • São Paulo",
    portfolio4Alt:
      "Environnement intérieur sophistiqué avec mobilier design, mur de briques apparentes et intégration avec espace extérieur",
    portfolio5Title: "Salon Premium avec Home Cinéma • São Paulo",
    portfolio5Alt:
      "Salon luxueux avec panneau TV intégré, mobilier planifié en bois et éclairage d'ambiance sophistiqué",
    portfolio6Title: "Chambre d'Enfant Planifiée • São Paulo",
    portfolio6Alt:
      "Chambre d'enfant avec mobilier planifié en tons neutres, espace d'études et de jeux avec design fonctionnel et accueillant",

    // Testimonials Section
    testimonialsLabel: "TÉMOIGNAGES",
    testimonialsTitle: "Ce que disent nos clients et partenaires",
    testimonialsSubtitle:
      "Résultats cohérents dans les constructions résidentielles haut de gamme, espaces d'entreprise et magasins premium.",
    testimonialsButton: "Soyez notre prochain client satisfait",

    // Individual Testimonials
    testimonial1Text:
      "Facchini a mené notre construction de 1 200 m² avec une précision chirurgicale. Délais respectés, communication transparente et finition impeccable.",
    testimonial1Name: "Eduardo Martins",
    testimonial1Role: "PDG — Secteur Financier",
    testimonial2Text:
      "En tant qu'architecte, je suis exigeante sur l'exécution. L'équipe Facchini a respecté chaque détail du projet, du niveau laser à l'alignement de la menuiserie.",
    testimonial2Name: "Marina Assis",
    testimonial2Role: "Architecte Indépendante",
    testimonial3Text:
      "Le contrôle des coûts et le calendrier ont été suivis avec discipline. La prévisibilité a réduit notre risque et accéléré l'occupation.",
    testimonial3Name: "Ricardo Vilar",
    testimonial3Role: "Directeur des Opérations",
    testimonial4Text:
      "Nous avons rénové la toiture. Facchini a livré un standard de luxe sans perturbations. L'organisation et la propreté du chantier ont marqué.",
    testimonial4Name: "Patrícia Nogueira",
    testimonial4Role: "Cliente Résidentielle",
    testimonial5Text:
      "Dans le retail, le timing est tout. Le magasin a été livré à la date convenue, avec une finition supérieure et une checklist impeccable.",
    testimonial5Name: "Thiago Lopes",
    testimonial5Role: "Responsable Expansion — Retail",
    testimonial6Text:
      "La compatibilisation avec nos fournisseurs a été exemplaire. La sensation était celle d'un partenariat stratégique, pas seulement d'exécution.",
    testimonial6Name: "Camila Ferraz",
    testimonial6Role: "Directrice Administrative",

    // Contact Section
    contactTitle: "Contactez Facchini",
    contactSubtitle:
      "Remplissez les données ci-dessous et notre équipe vous contactera d'ici le prochain jour ouvrable.",
    contactOtherChannels: "Autres canaux de contact",
    contactWhatsApp: "WhatsApp",
    contactWhatsAppDesc: "Service rapide et direct",
    contactPhone: "Téléphone",
    contactPhoneDesc: "Horaires d'ouverture",
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
    footerPrivacy: "Politique de Confidentialité",
    footerTerms: "Conditions d'Utilisation",
    footerContact: "Contact",
    footerCopyright: "© 2025 Facchini Ingénierie. Tous droits réservés.",

    // WhatsApp messages
    whatsappMessage:
      "Bonjour ! J'aimerais en savoir plus sur les services de Facchini Ingénierie.",
    whatsappPortfolioMessage:
      "Bonjour ! J'ai vu le portfolio de Facchini sur le site web et j'aimerais parler d'un projet similaire.",
    whatsappContactMessage:
      "Bonjour ! J'aimerais demander un devis pour mon projet de construction/rénovation. Pouvez-vous m'aider ?",

    // Contact Form
    formNamePlaceholder: "Nom *",
    formPhonePlaceholder: "Téléphone/WhatsApp *",
    formEmailPlaceholder: "Email",
    formMessagePlaceholder: "Décrivez votre projet ou besoin",
    formArchitectLabel: "Je suis architecte - service prioritaire",
    formSubmitButton: "Envoyer et recevoir un contact",
    formSubmittingText: "Envoi en cours...",
    formSuccessTitle: "Nous avons reçu vos données !",
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
    heroButton1: "Richiedi preventivo ora",
    heroButton2: "Vedi portfolio",
    heroFormTitle: "Richiedi il tuo preventivo",
    heroSpecialtiesLabel: "Specialità",
    heroSpecialtiesText: "Residenziale • Aziendale • Negozi premium",
    heroServiceLabel: "Servizio",
    heroServiceText: "Personalizzato dal progetto alla consegna",
    heroManagementLabel: "Gestione",
    heroManagementText: "Controllo totale di costi e tempistiche",

    // Navbar
    navTopbar:
      "anni di opere consegnate con eccellenza • +170 mila m² eseguiti",
    navAbout: "CHI SIAMO",
    navServices: "SERVIZI",
    navPortfolio: "PORTFOLIO",
    navTestimonials: "TESTIMONIANZE",
    navContact: "CONTATTO",
    navWhatsApp: "CHAT WHATSAPP",

    // About Section
    aboutTitle: "30 anni trasformando progetti unici in realtà",
    aboutDescription:
      "Con decenni di esperienza e oltre 170.000 m² consegnati, siamo un riferimento nella costruzione di alto livello. La nostra esperienza spazia da residenze di lusso a complessi commerciali sofisticati.",
    aboutFeature1: "Eccellenza nelle finiture premium",
    aboutFeature2: "Gestione progetti con totale trasparenza",
    aboutFeature3: "Rispetto rigoroso delle scadenze",
    aboutButton: "Conosci la nostra storia",

    // Sobre Section (new structure)
    sobreTitle: "Perché scegliere Facchini",
    sobreExperienceLabel: "anni di attività",
    sobreM2Label: "m² consegnati",
    sobreCitiesLabel: "città servite",
    sobreStoresLabel: "opere commerciali",
    sobreArchitectsLabel: "architetti serviti",

    // Sobre Features
    sobreFeature1Title: "anni", // This will be dynamic with {counters.years}
    sobreFeature1Description: "di attività in opere di alto livello.",
    sobreFeature2Title: "+170 mila m²",
    sobreFeature2Description: "consegnati in tempo.",
    sobreFeature3Title: "Gestione costi",
    sobreFeature3Description: "con trasparenza e prevedibilità.",
    sobreFeature4Title: "Finiture premium",
    sobreFeature4Description: "e rigore tecnico dall'inizio alla fine.",
    sobreFeature5Title: "Servizio personalizzato",
    sobreFeature5Description: "per clienti e architetti.",
    sobreFeature6Title: "Eccellenza tecnica",
    sobreFeature6Description:
      "e prevedibilità per chi esige standard di lusso.",

    // Services Section
    servicesTitle: "Specialità",
    servicesSubtitle:
      "Soluzioni complete in costruzione e ristrutturazione per progetti di alto livello",
    servicesButton: "Richiedi proposta",
    service1Title: "Residenziale di alto livello",
    service1Description:
      "Esecuzione completa con controllo tecnico e finitura impeccabile.",
    service2Title: "Ristrutturazioni premium",
    service2Description:
      "Modernizzazione con gestione dei tempi e minima interferenza nella routine.",
    service3Title: "Impegno con il cliente",
    service3Description: "Precisione, efficienza ed eccellenza assoluta.",
    service4Title: "Sviluppi di Lusso",
    service4Description:
      "Esecuzione di sviluppi esclusivi con rigore tecnico e sofisticazione in ogni dettaglio.",
    service5Title: "Progetti speciali",
    service5Description:
      "Opere personalizzate su misura per clienti che cercano esclusività in ogni dettaglio.",
    service6Title: "Appartamenti",
    service6Description:
      "Opere dettagliate con standard di lusso dal progetto alla consegna.",

    // Portfolio Section
    portfolioTitle: "I Nostri Progetti",
    portfolioSubtitle: "Scopri alcuni dei nostri lavori più notevoli",
    portfolioButton: "Vedi progetto completo",

    // Individual Portfolio Items
    portfolio1Title: "Residenza Lussuosa con Piscina • São Paulo",
    portfolio1Alt:
      "Residenza di alto livello con piscina illuminata al tramonto, architettura moderna con ampie aperture e integrazione con giardino",
    portfolio2Title: "Casa Contemporanea con Area Relax • São Paulo",
    portfolio2Alt:
      "Casa moderna con piscina e area relax integrata, muri in cemento a vista e paesaggistica contemporanea",
    portfolio3Title: "Residenza Integrata alla Natura • São Paulo",
    portfolio3Alt:
      "Casa moderna con struttura a più livelli integrata alla vegetazione nativa, con grandi alberi preservati nel progetto",
    portfolio4Title: "Soggiorno Contemporaneo • São Paulo",
    portfolio4Alt:
      "Ambiente interno sofisticato con mobili di design, parete in mattoni a vista e integrazione con area esterna",
    portfolio5Title: "Soggiorno Premium con Home Theater • São Paulo",
    portfolio5Alt:
      "Soggiorno lussuoso con pannello TV integrato, mobili pianificati in legno e illuminazione ambientale sofisticata",
    portfolio6Title: "Camera per Bambini Pianificata • São Paulo",
    portfolio6Alt:
      "Camera per bambini con mobili pianificati in toni neutri, area studio e giochi con design funzionale e accogliente",

    // Testimonials Section
    testimonialsLabel: "TESTIMONIANZE",
    testimonialsTitle: "Cosa dicono i nostri clienti e partner",
    testimonialsSubtitle:
      "Risultati coerenti in costruzioni residenziali di alto livello, spazi aziendali e negozi premium.",
    testimonialsButton: "Sii il nostro prossimo cliente soddisfatto",

    // Individual Testimonials
    testimonial1Text:
      "Facchini ha condotto la nostra costruzione di 1.200 m² con precisione chirurgica. Scadenze rispettate, comunicazione trasparente e finitura impeccabile.",
    testimonial1Name: "Eduardo Martins",
    testimonial1Role: "CEO — Settore Finanziario",
    testimonial2Text:
      "Come architetta, sono esigente nell'esecuzione. Il team Facchini ha rispettato ogni dettaglio del progetto, dal livello laser all'allineamento della carpenteria.",
    testimonial2Name: "Marina Assis",
    testimonial2Role: "Architetta Indipendente",
    testimonial3Text:
      "Il controllo dei costi e il cronoprogramma sono stati seguiti con disciplina. La prevedibilità ha ridotto il nostro rischio e accelerato l'occupazione.",
    testimonial3Name: "Ricardo Vilar",
    testimonial3Role: "Direttore Operativo",
    testimonial4Text:
      "Abbiamo rinnovato la copertura. Facchini ha consegnato standard di lusso senza problemi. L'organizzazione e la pulizia del cantiere hanno colpito.",
    testimonial4Name: "Patrícia Nogueira",
    testimonial4Role: "Cliente Residenziale",
    testimonial5Text:
      "Nel retail, il tempo è tutto. Il negozio è stato consegnato nella data concordata, con finitura superiore e checklist impeccabile.",
    testimonial5Name: "Thiago Lopes",
    testimonial5Role: "Responsabile Espansione — Retail",
    testimonial6Text:
      "La compatibilizzazione con i nostri fornitori è stata esemplare. La sensazione è stata di partnership strategica, non solo esecuzione.",
    testimonial6Name: "Camila Ferraz",
    testimonial6Role: "Direttrice Amministrativa",

    // Contact Section
    contactTitle: "Contatta Facchini",
    contactSubtitle:
      "Compila i dati qui sotto e il nostro team ti contatterà entro il prossimo giorno lavorativo.",
    contactOtherChannels: "Altri canali di contatto",
    contactWhatsApp: "WhatsApp",
    contactWhatsAppDesc: "Assistenza rapida e diretta",
    contactPhone: "Telefono",
    contactPhoneDesc: "Orario d'ufficio",
    contactEmail: "E-mail",
    contactEmailDesc: "Risposta entro 24h",
    contactAddress: "Indirizzo",
    contactAddressInfo: "San Paolo, SP\nServiamo tutta la Grande San Paolo",
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
    footerPrivacy: "Informativa sulla Privacy",
    footerTerms: "Termini di Utilizzo",
    footerContact: "Contatto",
    footerCopyright: "© 2025 Facchini Ingegneria. Tutti i diritti riservati.",

    // WhatsApp messages
    whatsappMessage:
      "Ciao! Vorrei sapere di più sui servizi di Facchini Ingegneria.",
    whatsappPortfolioMessage:
      "Ciao! Ho visto il portfolio di Facchini sul sito web e vorrei parlare di un progetto simile.",
    whatsappContactMessage:
      "Ciao! Vorrei richiedere un preventivo per il mio progetto di costruzione/ristrutturazione. Potete aiutarmi?",

    // Contact Form
    formNamePlaceholder: "Nome *",
    formPhonePlaceholder: "Telefono/WhatsApp *",
    formEmailPlaceholder: "Email",
    formMessagePlaceholder: "Descrivi il tuo progetto o necessità",
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
    heroTitle: "高水準建設",
    heroSubtitle: "30年以上にわたりプロジェクトを現実に変えています。",
    heroButton1: "今すぐ見積もり依頼",
    heroButton2: "ポートフォリオを見る",
    heroFormTitle: "見積もりをご依頼ください",
    heroSpecialtiesLabel: "専門分野",
    heroSpecialtiesText: "住宅 • 法人 • プレミアム店舗",
    heroServiceLabel: "サービス",
    heroServiceText: "プロジェクトから引き渡しまで個別対応",
    heroManagementLabel: "管理",
    heroManagementText: "コストとスケジュールの完全管理",

    // Navbar
    navTopbar: "年の卓越した工事実績 • +17万平方メートル実行",
    navAbout: "会社概要",
    navServices: "サービス",
    navPortfolio: "ポートフォリオ",
    navTestimonials: "お客様の声",
    navContact: "お問い合わせ",
    navWhatsApp: "WHATSAPP チャット",

    // About Section
    aboutTitle: "30年間、ユニークなプロジェクトを現実に変えています",
    aboutDescription:
      "数十年の経験と17万平方メートル以上の実績で、高水準建設のリーダーです。豪華な住宅から洗練された商業複合施設まで、私たちの専門知識は幅広く対応します。",
    aboutFeature1: "プレミアム仕上げの卓越性",
    aboutFeature2: "完全な透明性のあるプロジェクト管理",
    aboutFeature3: "厳格な納期遵守",
    aboutButton: "私たちの歴史を知る",

    // Sobre Section (new structure)
    sobreTitle: "なぜファッキーニを選ぶのか",
    sobreExperienceLabel: "年の運営",
    sobreM2Label: "平方メートル納品",
    sobreCitiesLabel: "サービス都市",
    sobreStoresLabel: "商業工事",
    sobreArchitectsLabel: "サービス建築家",

    // Sobre Features
    sobreFeature1Title: "年", // This will be dynamic with {counters.years}
    sobreFeature1Description: "高水準工事での運営。",
    sobreFeature2Title: "+17万平方メートル",
    sobreFeature2Description: "予定通りに納品。",
    sobreFeature3Title: "コスト管理",
    sobreFeature3Description: "透明性と予測可能性を持って。",
    sobreFeature4Title: "プレミアム仕上げ",
    sobreFeature4Description: "最初から最後まで技術的厳密さ。",
    sobreFeature5Title: "個別サービス",
    sobreFeature5Description: "クライアントと建築家向け。",
    sobreFeature6Title: "技術的卓越性",
    sobreFeature6Description: "贅沢基準を要求する方への予測可能性。",

    // Services Section
    servicesTitle: "専門分野",
    servicesSubtitle:
      "高水準プロジェクトのための建設・改装における完全ソリューション",
    servicesButton: "提案を依頼",
    service1Title: "高水準住宅建設",
    service1Description: "技術管理と完璧な仕上がりによる完全施工。",
    service2Title: "プレミアム改装",
    service2Description: "スケジュール管理と日常への最小限の干渉による近代化。",
    service3Title: "クライアントへのコミットメント",
    service3Description: "精度、効率性、絶対的な卓越性。",
    service4Title: "高級開発事業",
    service4Description:
      "技術的厳格さと各詳細の洗練性を持った排他的開発の実行。",
    service5Title: "特別プロジェクト",
    service5Description:
      "各詳細に排他性を求める顧客のためのオーダーメイド個別工事。",
    service6Title: "アパートメント",
    service6Description: "プロジェクトから引き渡しまで高級水準の詳細工事。",

    // Portfolio Section
    portfolioTitle: "私たちのプロジェクト",
    portfolioSubtitle: "私たちの最も注目すべき作品をご覧ください",
    portfolioButton: "完全なプロジェクトを見る",

    // Individual Portfolio Items
    portfolio1Title: "プール付き高級住宅 • サンパウロ",
    portfolio1Alt:
      "夕暮れ時に照明されたプール付き高級住宅、広い開口部とガーデン統合を持つモダン建築",
    portfolio2Title: "レジャーエリア付きコンテンポラリーハウス • サンパウロ",
    portfolio2Alt:
      "プールと統合されたレジャーエリア付きモダンハウス、露出コンクリート壁とコンテンポラリー造園",
    portfolio3Title: "自然と統合された住宅 • サンパウロ",
    portfolio3Alt:
      "原生植生と統合されたマルチレベル構造のモダンハウス、プロジェクト内に保存された大きな木々",
    portfolio4Title: "コンテンポラリーリビングルーム • サンパウロ",
    portfolio4Alt:
      "デザイナー家具、露出レンガ壁、外部エリアとの統合を持つ洗練された内部環境",
    portfolio5Title: "ホームシアター付きプレミアムリビングルーム • サンパウロ",
    portfolio5Alt:
      "統合TVパネル、計画された木製家具、洗練された環境照明を持つ豪華なリビングルーム",
    portfolio6Title: "計画された子供部屋 • サンパウロ",
    portfolio6Alt:
      "ニュートラルトーンの計画された家具、機能的で居心地の良いデザインの学習・遊戯エリア付き子供寝室",

    // Testimonials Section
    testimonialsLabel: "お客様の声",
    testimonialsTitle: "お客様とパートナーからの評価",
    testimonialsSubtitle:
      "高水準住宅建設、企業スペース、プレミアム店舗での一貫した成果。",
    testimonialsButton: "私たちの次の満足したクライアントになる",

    // Individual Testimonials
    testimonial1Text:
      "ファッキーニは1,200m²の建設を外科的精度で行いました。納期を守り、透明性のあるコミュニケーションと完璧な仕上がりでした。",
    testimonial1Name: "Eduardo Martins",
    testimonial1Role: "CEO — 金融セクター",
    testimonial2Text:
      "建築家として、実行に厳しい要求があります。ファッキーニのチームは、レーザーレベルから大工仕事の配列まで、プロジェクトのすべての詳細を尊重しました。",
    testimonial2Name: "Marina Assis",
    testimonial2Role: "独立建築家",
    testimonial3Text:
      "コスト管理とスケジュールは規律をもって守られました。予測可能性により、リスクが軽減され、入居が早まりました。",
    testimonial3Name: "Ricardo Vilar",
    testimonial3Role: "オペレーション・ディレクター",
    testimonial4Text:
      "屋根を改修しました。ファッキーニは問題なく高級基準を提供しました。組織と建設現場の清潔さが印象的でした。",
    testimonial4Name: "Patrícia Nogueira",
    testimonial4Role: "住宅クライアント",
    testimonial5Text:
      "小売業では、タイミングがすべてです。店舗は合意された日に配送され、優れた仕上がりと完璧なチェックリストでした。",
    testimonial5Name: "Thiago Lopes",
    testimonial5Role: "拡張責任者 — 小売",
    testimonial6Text:
      "サプライヤーとの調整は模範的でした。単なる実行ではなく、戦略的パートナーシップの感覚でした。",
    testimonial6Name: "Camila Ferraz",
    testimonial6Role: "管理ディレクター",

    // Contact Section
    contactTitle: "ファッキーニにご連絡ください",
    contactSubtitle:
      "以下のフォームにご記入いただければ、翌営業日までにご連絡いたします。",
    contactOtherChannels: "その他の連絡先",
    contactWhatsApp: "WhatsApp",
    contactWhatsAppDesc: "迅速で直接的な対応",
    contactPhone: "電話",
    contactPhoneDesc: "営業時間内",
    contactEmail: "メール",
    contactEmailDesc: "24時間以内に回答",
    contactAddress: "住所",
    contactAddressInfo: "サンパウロ、SP\n大サンパウロ圏全域にサービス提供",
    contactHours: "営業時間",
    contactHoursInfo: "月曜日から金曜日：8時から17時",

    // CTA Section
    ctaTitle: "あなたのプロジェクト、優れた実行力で — 期限内で驚きなし。",
    ctaSubtitlePart1: "結果を出している",
    ctaSubtitlePart2: "年間の経験でビジョンを現実に変えてください。",
    ctaWhatsAppButton: "今すぐWhatsAppでチャット",
    ctaFormButton: "見積もりを依頼",
    ctaYearsLabel: "伝統と経験の",
    ctaM2Label: "期限内に配達",
    ctaTransparencyLabel: "透明性と管理",
    ctaYearsValue: " 年",

    // Footer
    footerTagline: "高水準エンジニアリング",
    footerPrivacy: "プライバシーポリシー",
    footerTerms: "利用規約",
    footerContact: "お問い合わせ",
    footerCopyright: "© 2025 ファッキーニエンジニアリング。全権利保有。",

    // WhatsApp messages
    whatsappMessage:
      "こんにちは！ファッキーニエンジニアリングのサービスについて詳しく知りたいと思います。",
    whatsappPortfolioMessage:
      "こんにちは！ウェブサイトでファッキーニのポートフォリオを見て、似たようなプロジェクトについて話したいと思います。",
    whatsappContactMessage:
      "こんにちは！建設・改装プロジェクトの見積もりをお願いしたいと思います。お手伝いいただけますか？",

    // Contact Form
    formNamePlaceholder: "お名前 *",
    formPhonePlaceholder: "電話/WhatsApp *",
    formEmailPlaceholder: "メール",
    formMessagePlaceholder: "プロジェクトやニーズについて説明してください",
    formArchitectLabel: "建築家です - 優先サービス",
    formSubmitButton: "送信して連絡を受ける",
    formSubmittingText: "送信中...",
    formSuccessTitle: "データを受信しました！",
    formSuccessMessage:
      "まもなくご連絡いたします。即座のサポートをお望みの場合は、以下をクリックしてください。",
    formWhatsAppButton: "今すぐWhatsAppで話す",
    formPrivacyText: "お客様のデータを第三者と共有することはありません。",
    formErrorMessage:
      "送信できませんでした。必須フィールドを確認してもう一度お試しください。",
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
