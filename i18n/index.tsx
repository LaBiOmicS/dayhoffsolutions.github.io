import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

type Language = 'en' | 'pt' | 'es';
type Translations = any;

interface I18nContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string, options?: { [key: string]: string | number }) => string;
    translations: Translations;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

// This is a Vite-specific feature that imports all matching files.
// It creates a map where keys are file paths and values are functions that return a promise for the module.
const translationModules = import.meta.glob('./locales/*.json') as Record<string, () => Promise<{ default: Translations }>>;

const getNestedValue = (obj: any, key: string): string | undefined => {
    if (!obj) return undefined;
    return key.split('.').reduce((acc, part) => acc && acc[part], obj);
};

export const I18nProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState<Language>('en');
    const [translations, setTranslations] = useState<Translations>({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadTranslations = async () => {
            setIsLoading(true);
            const path = `./locales/${language}.json`;
            
            // Check if the module exists in our glob import
            if (translationModules[path]) {
                try {
                    // Execute the function to load the module
                    const module = await translationModules[path]();
                    setTranslations(module.default);
                } catch (error) {
                    console.error(`Failed to load translations for ${language}:`, error);
                    setTranslations({});
                } finally {
                    setIsLoading(false);
                }
            } else {
                console.error(`Translation file not found for language: ${language}`);
                setTranslations({});
                setIsLoading(false);
            }
        };

        loadTranslations();
    }, [language]);

    const t = (key: string, options?: { [key: string]: string | number }): string => {
        if (isLoading) return '...'; 
        
        let translation = getNestedValue(translations, key) || key;
        if (options) {
            Object.keys(options).forEach(optionKey => {
                translation = translation.replace(`{{${optionKey}}}`, String(options[optionKey]));
            });
        }
        return translation;
    };

    return (
        <I18nContext.Provider value={{ language, setLanguage, t, translations }}>
            {children}
        </I18nContext.Provider>
    );
};

export const useI18n = (): I18nContextType => {
    const context = useContext(I18nContext);
    if (context === undefined) {
        throw new Error('useI18n must be used within an I18nProvider');
    }
    return context;
};