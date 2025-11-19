import React from 'react';
import { useI18n } from '../i18n';

interface FooterProps {
    openPolicyModal: () => void;
}

const Footer: React.FC<FooterProps> = ({ openPolicyModal }) => {
    const { t } = useI18n();
    return (
        <footer className="bg-transparent border-t border-slate-800">
            <div className="container mx-auto px-6 py-8 text-center text-slate-400">
                <p className="mb-4 text-sm">
                    {t('footer.copyright')}
                </p>
                <div className="flex justify-center items-center space-x-4 text-sm">
                    <a href="mailto:contato@dayhoff.solutions" className="hover:text-brand-glow transition-colors duration-300">
                        contato@dayhoff.solutions
                    </a>
                    <span className="text-slate-600">|</span>
                    <button onClick={openPolicyModal} className="hover:text-brand-glow transition-colors duration-300">
                        {t('footer.policies')}
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;