import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "@/hooks/use-translation";
import { Language } from "@/lib/translations";

interface LanguageOption {
  code: Language;
  name: string;
  flag: string;
}

const languages: LanguageOption[] = [
  { code: "pt", name: "Português", flag: "/flags/br.png" },
  { code: "en", name: "English", flag: "/flags/us.png" },
  { code: "es", name: "Español", flag: "/flags/es.png" },
  // { code: "fr", name: "Français", flag: "/flags/fr.png" },
  // { code: "it", name: "Italiano", flag: "/flags/it.png" },
  // { code: "ja", name: "日本語", flag: "/flags/jp.png" },
];

export const LanguageSelector: React.FC = () => {
  const { currentLanguage, changeLanguage, isLoading } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLang =
    languages.find((lang) => lang.code === currentLanguage) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLanguageSelect = async (language: Language) => {
    // Prevent unnecessary updates if same language is selected
    if (language === currentLanguage || isLoading) {
      setIsOpen(false);
      return;
    }

    // Close dropdown first to prevent UI issues
    setIsOpen(false);

    // Change language using context
    await changeLanguage(language);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        disabled={isLoading}
        className={`flex items-center gap-2 px-3 py-2 text-sm font-medium text-white bg-black border border-gray-600 rounded-md hover:bg-gray-900 hover:border-facchini-accent-1 focus:outline-none focus:ring-2 focus:ring-facchini-accent-1 transition-colors ${
          isLoading ? "opacity-50 cursor-not-allowed" : ""
        }`}
        aria-label="Select language"
      >
        <img
          src={currentLang.flag}
          alt={currentLang.name}
          className="w-6 h-4 object-cover rounded-sm"
        />
        {isLoading ? (
          <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        ) : (
          <svg
            className={`w-4 h-4 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 z-50 mt-2 w-48 bg-black border border-gray-600 rounded-md shadow-lg">
          <div className="py-1">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageSelect(language.code)}
                className={`flex items-center w-full gap-3 px-4 py-2 text-sm text-left hover:bg-gray-900 hover:text-facchini-accent-1 transition-colors ${
                  currentLanguage === language.code
                    ? "bg-gray-800 text-facchini-accent-1 border-l-2 border-facchini-accent-1"
                    : "text-white"
                }`}
              >
                <img
                  src={language.flag}
                  alt={language.name}
                  className="w-6 h-4 object-cover rounded-sm"
                />
                <span>{language.name}</span>
                {currentLanguage === language.code && (
                  <svg
                    className="w-4 h-4 ml-auto text-facchini-accent-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
