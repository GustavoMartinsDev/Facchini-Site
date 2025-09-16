import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface Testimonial {
  text: string;
  name: string;
  role: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    text: "A Facchini conduziu nossa obra de 1.200 m² com precisão cirúrgica. Prazos respeitados, comunicação transparente e acabamento impecável.",
    name: "Eduardo Martins",
    role: "CEO — Setor Financeiro",
    image: "/lovable-uploads/22d31f51-c174-40a7-bd95-00e4ad00eaf3.png"
  },
  {
    text: "Como arquiteta, sou exigente com execução. A equipe da Facchini respeitou cada detalhe do projeto, do nível a laser ao alinhamento da marcenaria.",
    name: "Marina Assis", 
    role: "Arquiteta Autônoma",
    image: "/lovable-uploads/5663820f-6c97-4492-9210-9eaa1a8dc415.png"
  },
  {
    text: "O controle de custos e o cronograma foram seguidos com disciplina. A previsibilidade reduziu nosso risco e acelerou a ocupação.",
    name: "Ricardo Vilar",
    role: "Diretor Operacional",
    image: "/lovable-uploads/af412c03-21e4-4856-82ff-d1a975dc84a9.png"
  },
  {
    text: "Reformamos a cobertura. A Facchini entregou padrão de luxo sem transtornos. Organização e limpeza de obra chamaram atenção.",
    name: "Patrícia Nogueira",
    role: "Cliente Residencial",
    image: "/lovable-uploads/c3d5522b-6886-4b75-8ffc-d020016bb9c2.png"
  },
  {
    text: "Em varejo, prazo é tudo. A loja foi entregue no dia combinado, com acabamento superior e checklist impecável.",
    name: "Thiago Lopes",
    role: "Head de Expansão — Varejo",
    image: "/lovable-uploads/dc13e94f-beeb-4671-8a22-0968498cdb4c.png"
  },
  {
    text: "A compatibilização com nossos fornecedores foi exemplar. A sensação foi de parceria estratégica, não apenas execução.",
    name: "Camila Ferraz",
    role: "Diretora Administrativa",
    image: "/lovable-uploads/22d31f51-c174-40a7-bd95-00e4ad00eaf3.png"
  }
];

const TestimonialCard = ({ testimonial, delay }: { testimonial: Testimonial; delay: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="bg-gray-900 border border-facchini-divider rounded-2xl p-8 hover:border-facchini-accent-1/30 transition-colors duration-300"
    >
      <div className="mb-6">
        <Quote className="w-8 h-8 text-facchini-accent-1 mb-4" />
        <p className="text-facchini-text leading-relaxed text-lg">
          "{testimonial.text}"
        </p>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-800">
          <img 
            src={testimonial.image} 
            alt={`Foto de ${testimonial.name}`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div>
          <h4 className="font-semibold text-facchini-text">{testimonial.name}</h4>
          <p className="text-facchini-text-muted text-sm">{testimonial.role}</p>
        </div>
      </div>
    </motion.div>
  );
};

const FacchiniTestimonials = () => {
  return (
    <section id="depoimentos" className="py-24 bg-black relative">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 border border-facchini-divider py-2 px-4 rounded-full mb-6">
            <Quote className="h-4 w-4 text-facchini-accent-1" />
            <span className="text-sm text-facchini-text-muted tracking-wide">DEPOIMENTOS</span>
          </div>
          
          <h2 className="section-title mb-6">
            O que nossos clientes e parceiros dizem
          </h2>
          <p className="section-subtitle mx-auto max-w-2xl">
            Resultados consistentes em obras residenciais de alto padrão, espaços corporativos e lojas premium.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              testimonial={testimonial}
              delay={index * 0.1}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button
            onClick={() => {
              const element = document.getElementById('contato');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="button-secondary hover:bg-facchini-accent-1 hover:text-black"
          >
            Seja nosso próximo cliente satisfeito
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FacchiniTestimonials;