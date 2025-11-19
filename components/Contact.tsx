import React from 'react';
import ContactForm from './ContactForm';
import { useI18n } from '../i18n/index.tsx';

const Contact: React.FC = () => {
    const { t } = useI18n();
    return (
        <section className="py-20 sm:py-24 border-t border-slate-800 bg-slate-900/50">
            <div className="container mx-auto px-6 text-center">
                <div className="max-w-3xl mx-auto mb-12">
                    <span className="font-mono text-brand-primary text-xs tracking-[0.2em] uppercase mb-2 block">
                        {t('contact.preTitle')}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" dangerouslySetInnerHTML={{ __html: t('contact.title') }}>
                    </h2>
                    <p className="text-slate-400 text-lg leading-relaxed">
                        {t('contact.p1')}
                    </p>
                    <p className="text-slate-500 mt-4 text-sm" dangerouslySetInnerHTML={{ __html: t('contact.p2') }}>
                    </p>
                </div>

                <div className="max-w-lg mx-auto bg-slate-800/40 backdrop-blur-md border border-slate-700 p-8 rounded-xl shadow-lg hover:border-brand-primary/30 transition-colors duration-300">
                    <ContactForm />
                </div>
            </div>
        </section>
    );
};

export default Contact;