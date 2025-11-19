import React from 'react';
import { useI18n } from '../i18n/index.tsx';

interface FooterProps {
    openPolicyModal: () => void;
}

const Footer: React.FC<FooterProps> = ({ openPolicyModal }) => {
    const { t } = useI18n();
    return (
        <footer className="bg-transparent border-t border-slate-800">
            <div className="container mx-auto px-6 py-8 text-center text-slate-400">
                <div className="text-md font-bold text-white tracking-wider mb-4">
                    dayhoff<span className="text-white">.</span><span className="text-gradient">solutions</span>
                </div>
                <p className="mb-4 text-xs text-slate-500">
                    {t('footer.copyright')}
                </p>
                <div className="flex justify-center items-center space-x-4 text-sm">
                    <button onClick={openPolicyModal} className="hover:text-brand-glow transition-colors duration-300">
                        {t('footer.policies')}
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;