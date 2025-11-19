import React from 'react';
import { useI18n } from '../i18n';

interface CTAProps {
    openContactModal: () => void;
}

const CTA: React.FC<CTAProps> = ({ openContactModal }) => {
    const { t } = useI18n();
    return (
        <section className="bg-transparent">
            <div className="container mx-auto px-6 py-20 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" dangerouslySetInnerHTML={{ __html: t('contact.title') }}>
                </h2>
                <p className="max-w-3xl mx-auto text-slate-300 text-lg md:text-xl mb-8">
                    {t('contact.p1')}
                </p>
                <button 
                    onClick={openContactModal}
                    className="bg-brand-glow text-dark-bg font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 shadow-lg hover:bg-emerald-400">
                    Start a Conversation
                </button>
            </div>
        </section>
    );
};

export default CTA;