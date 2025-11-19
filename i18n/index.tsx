import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

type Language = 'en' | 'pt' | 'es';
// Usando `any` para traduções, já que estamos buscando e não temos um tipo estático.
type Translations = any;

interface I18nContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string, options?: { [key: string]: string | number }) => string;
    translations: Translations;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

// Função auxiliar para obter valores aninhados de um objeto usando uma string separada por pontos
const getNestedValue = (obj: any, key: string): string | undefined => {
    if (!obj) return undefined;
    return key.split('.').reduce((acc, part) => acc && acc[part], obj);
};

export const I18nProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState<Language>('en'); // Default to English
    const [translations, setTranslations] = useState<Translations>({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadTranslations = async () => {
            setIsLoading(true);
            try {
                // Busca a partir da raiz do servidor
                const response = await fetch(`/i18n/locales/${language}.json`);
                if (!response.ok) {
                    throw new Error(`Não foi possível carregar as traduções para ${language}`);
                }
                const data = await response.json();
                setTranslations(data);
            } catch (error) {
                console.error('Falha ao carregar traduções:', error);
                setTranslations({}); // Define como vazio para evitar que o aplicativo quebre
            } finally {
                setIsLoading(false);
            }
        };

        loadTranslations();
    }, [language]);

    const t = (key: string, options?: { [key: string]: string | number }): string => {
        // Retorna um placeholder ou string vazia durante o carregamento para evitar erros
        if (isLoading) return '...'; 
        
        let translation = getNestedValue(translations, key) || key;
        if (options) {
            Object.keys(options).forEach(optionKey => {
                translation = translation.replace(`{{${optionKey}}}`, String(options[optionKey]));
            });
        }
        return translation;
    };

    // Podemos renderizar os filhos durante o carregamento. Eles apenas receberão '...' como texto.
    // Isso evita uma tela em branco.
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