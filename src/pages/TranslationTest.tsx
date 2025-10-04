import React from "react";
import { LanguageSelector } from "../components/LanguageSelector";

const TranslationTest = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Translation System Test</h1>
          <LanguageSelector />
        </div>

        <div className="space-y-8">
          {/* Hero Section Test */}
          <section className="border border-gray-700 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Hero Section</h2>
            <div className="space-y-2">
              <h3 className="text-lg" data-translate="heroTitle">
                Engenharia de alto padrão para projetos únicos
              </h3>
              <p className="text-gray-300" data-translate="heroSubtitle">
                Há 30 anos transformando sonhos em realidade com excelência
                técnica e acabamento premium
              </p>
              <button
                className="bg-blue-600 px-4 py-2 rounded"
                data-translate="heroButton"
              >
                Fale conosco
              </button>
            </div>
          </section>

          {/* About Section Test */}
          <section className="border border-gray-700 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">About Section</h2>
            <div className="space-y-2">
              <h3 className="text-lg" data-translate="sobreTitle">
                Por que escolher a Facchini
              </h3>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold">30+</div>
                  <div
                    className="text-sm"
                    data-translate="sobreExperienceLabel"
                  >
                    anos de atuação
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">170k+</div>
                  <div className="text-sm" data-translate="sobreM2Label">
                    m² entregues
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Services Section Test */}
          <section className="border border-gray-700 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Services Section</h2>
            <div className="space-y-2">
              <h3 className="text-lg" data-translate="servicesTitle">
                Especialidades
              </h3>
              <p className="text-gray-300" data-translate="servicesSubtitle">
                Soluções completas em construção e reforma para projetos de alto
                padrão
              </p>
              <div className="mt-4 space-y-2">
                <div className="p-3 bg-gray-800 rounded">
                  <h4 className="font-semibold" data-translate="service1Title">
                    Residencial de alto padrão
                  </h4>
                  <p
                    className="text-sm text-gray-300"
                    data-translate="service1Description"
                  >
                    Execução completa com controle técnico e acabamento
                    impecável.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section Test */}
          <section className="border border-gray-700 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Contact Section</h2>
            <div className="space-y-2">
              <h3 className="text-lg" data-translate="contactTitle">
                Fale com a Facchini
              </h3>
              <p className="text-gray-300" data-translate="contactSubtitle">
                Preencha os dados abaixo e nossa equipe entrará em contato até o
                próximo dia útil.
              </p>
              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="font-semibold" data-translate="contactPhone">
                    Telefone
                  </span>
                  <span
                    className="text-gray-300"
                    data-translate="contactPhoneDesc"
                  >
                    Horário comercial
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold" data-translate="contactEmail">
                    E-mail
                  </span>
                  <span
                    className="text-gray-300"
                    data-translate="contactEmailDesc"
                  >
                    Resposta em até 24h
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* WhatsApp Test */}
          <section className="border border-gray-700 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">
              WhatsApp Messages Test
            </h2>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">Default Message (Portuguese):</h4>
                <p className="text-gray-300 text-sm bg-gray-800 p-2 rounded mt-1">
                  Olá! Gostaria de saber mais sobre os serviços da Facchini
                  Engenharia.
                </p>
              </div>
              <div>
                <h4 className="font-semibold">
                  Portfolio Message (Portuguese):
                </h4>
                <p className="text-gray-300 text-sm bg-gray-800 p-2 rounded mt-1">
                  Olá! Vi o portfólio da Facchini no site e gostaria de
                  conversar sobre um projeto similar.
                </p>
              </div>
            </div>
          </section>

          {/* Instructions */}
          <section className="border border-green-600 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 text-green-400">
              Test Instructions
            </h2>
            <div className="space-y-2 text-gray-300">
              <p>
                1. Use the language selector above to switch between languages
              </p>
              <p>
                2. All text elements with data-translate should change language
              </p>
              <p>3. Portuguese should remain as original text</p>
              <p>4. Other languages should display translated versions</p>
              <p>5. Language preference is saved in localStorage</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TranslationTest;
