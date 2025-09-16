/**
 * SETOR: ESPECIALIDADES — Facchini Engenharia
 * Objetivo: exibir 3 cards na primeira linha e 2 cards centralizados na segunda (em ≥ lg),
 * mantendo responsividade (1 col no mobile, 2 col ≥ sm, 3 col ≥ lg).
 * Estética: minimalista/premium, com tokens Facchini (text-facchini-accent-1/2, text-facchini-text-muted).
 */

import * as React from "react";

/* Ícones inline (sem dependências externas) — pode trocar por lucide-react se preferir */
const IconResidencial = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-7 9 7" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 21V9h6v12" />
  </svg>
);
const IconReforma = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h18M3 12h18M3 17h18" />
  </svg>
);
const IconCorporativo = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 21h16M6 21V7h12v14M9 7V3h6v4" />
  </svg>
);
const IconVarejo = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16l-1 10a2 2 0 01-2 2H7a2 2 0 01-2-2L4 7z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 7V5a3 3 0 016 0v2" />
  </svg>
);
const IconApartamento = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="4" y="3" width="16" height="18" rx="2" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h.01M12 7h.01M16 7h.01M8 11h.01M12 11h.01M16 11h.01M8 15h8" />
  </svg>
);

/** Dados — 5 blocos (títulos e descrições afinados para público A / alto padrão) */
const services = [
  {
    title: "Residencial de alto padrão",
    description:
      "Execução completa com precisão técnica, gestão de obra rigorosa e acabamento impecável, do projeto à entrega.",
    icon: <IconResidencial />,
  },
  {
    title: "Reformas premium",
    description:
      "Modernização com controle de prazos e mínima interferência na rotina, preservando padrões de luxo.",
    icon: <IconReforma />,
  },
  {
    title: "Espaços corporativos",
    description:
      "Implantação ágil e precisa para operações exigentes, garantindo previsibilidade de custo e prazo.",
    icon: <IconCorporativo />,
  },
  {
    title: "Lojas e varejo",
    description:
      "Execução com padrão de rede, checklist rigoroso e entrega no dia combinado — sem surpresas.",
    icon: <IconVarejo />,
  },
  {
    title: "Apartamentos",
    description:
      "Detalhismo milimétrico em paginações, marcenaria e iluminação para um resultado de alto padrão.",
    icon: <IconApartamento />,
  },
] as const;

/**
 * Regras de posicionamento:
 * - Em ≥ lg: 3 colunas fixas.
 * - Se houver 5 itens: o 4º card (index 3) inicia na coluna 2, e o 5º (index 4) na coluna 3.
 *   Isso centraliza a linha de baixo (fica vazio apenas a coluna 1 na segunda linha).
 */
function getGridPosClass(index: number, total: number) {
  if (total === 5 && index === 3) return "lg:col-start-2";
  if (total === 5 && index === 4) return "lg:col-start-3";
  return "";
}

const FacchiniServices = () => {
  const handleCTAClick = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="servicos" className="bg-background py-20">
      <div className="container mx-auto px-4">
        {/* Cabeçalho do setor */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 border py-1 px-4 rounded-lg">
            <span className="text-sm tracking-tight text-white/80">Setor</span>
            <span className="text-sm font-medium tracking-tight text-facchini-accent-1">Especialidades</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-4 text-white">
            Especialidades
          </h2>
          <p className="mt-3 text-facchini-text-muted">
            Soluções completas em construção e reforma para projetos de alto padrão — com prazo, previsibilidade e acabamento premium.
          </p>
        </div>

        {/* Grid 3/2 centralizado */}
        <div className="grid gap-8 mt-10 mb-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className={[
                "feature-card group hover-lift fadeIn",              // classes do seu projeto (se existirem)
                "p-6 rounded-xl border bg-card text-card-foreground", // fallback estilístico
                "shadow transition-transform duration-300 hover:-translate-y-1",
                "text-center",                                        // centraliza títulos e descrições
                getGridPosClass(index, services.length),              // CENTRALIZA 3/2 em ≥ lg
              ].join(" ")}
            >
              <div className="mb-6 flex items-center justify-center">
                <div className="h-12 w-12 rounded-md bg-primary/10 text-facchini-accent-1 group-hover:text-facchini-accent-2 transition-colors duration-300 flex items-center justify-center">
                  {service.icon}
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-facchini-accent-1 transition-colors duration-300">
                {service.title}
              </h3>

              <p className="text-facchini-text-muted leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA opcional do setor (pode remover se a LP já tiver CTA global) */}
        <div className="flex justify-center">
          <button
            onClick={handleCTAClick}
            className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition"
          >
            Solicitar proposta
          </button>
        </div>
      </div>
    </section>
  );
};

export default FacchiniServices;