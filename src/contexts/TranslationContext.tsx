import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { languageManager, Language } from "@/lib/translations";

interface TranslationContextType {
  currentLanguage: Language;
  changeLanguage: (language: Language) => void;
  t: (key: string) => string;
  getWhatsAppMessage: (messageType?: "default" | "portfolio") => string;
  isLoading: boolean;
}

const TranslationContext = createContext<TranslationContextType | undefined>(
  undefined
);

interface TranslationProviderProps {
  children: ReactNode;
}

export const TranslationProvider: React.FC<TranslationProviderProps> = ({
  children,
}) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(() =>
    languageManager.getCurrentLanguage()
  );
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Apply translations when component mounts with a small delay to ensure DOM is ready
    setTimeout(() => {
      languageManager.applyTranslations();
    }, 100);

    // Subscribe to language changes
    const unsubscribe = languageManager.onLanguageChange((language) => {
      setCurrentLanguage(language);
      setIsLoading(false);
    });

    // Re-apply translations when DOM changes (for dynamic content)
    const observer = new MutationObserver(() => {
      // Debounce the application to avoid performance issues
      clearTimeout(observer.timeout);
      observer.timeout = setTimeout(() => {
        languageManager.applyTranslations();
      }, 100);
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["data-translate"],
    });

    return () => {
      unsubscribe();
      observer.disconnect();
      clearTimeout(observer.timeout);
    };
  }, []);

  const changeLanguage = async (language: Language) => {
    if (language === currentLanguage) return;

    setIsLoading(true);

    try {
      // Use a small delay to prevent UI blocking
      await new Promise((resolve) => setTimeout(resolve, 50));

      // Always refresh translations to ensure clean state
      languageManager.refreshTranslations();

      // Change language after refresh
      await new Promise((resolve) => setTimeout(resolve, 100));
      languageManager.changeLanguage(language);
    } catch (error) {
      console.error("Error changing language:", error);
      setIsLoading(false);
    }
  };

  const t = (key: string) => {
    return languageManager.getTranslation(key);
  };

  const getWhatsAppMessage = (messageType?: "default" | "portfolio") => {
    return languageManager.getWhatsAppMessage(messageType);
  };

  const value: TranslationContextType = {
    currentLanguage,
    changeLanguage,
    t,
    getWhatsAppMessage,
    isLoading,
  };

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  );
};

// Export the context for the hook
export { TranslationContext };

// Extend MutationObserver interface to include timeout
declare global {
  interface MutationObserver {
    timeout?: ReturnType<typeof setTimeout>;
  }
}
