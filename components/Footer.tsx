import React from 'react';
import { useI18n } from '../i18n';

const Footer: React.FC = () => {
    const { t } = useI18n();
    return (
        <footer className="bg-transparent border-t border-slate-800">
            <div className="container mx-auto px-6 py-8 text-center text-slate-400">
                <p className="mb-2 text-sm">
                    {t('footer.copyright')}
                </p>
                <a href="mailto:contato@dayhoff.solutions" className="text-sm hover:text-brand-glow transition-colors duration-300">
                    contato@dayhoff.solutions
                </a>
            </div>
        </footer>
    );
};

export default Footer;