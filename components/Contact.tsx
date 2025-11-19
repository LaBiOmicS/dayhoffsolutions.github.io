import React from 'react';
import ContactForm from './ContactForm';
import { useI18n } from '../i18n/index.tsx';

const Contact: React.FC = () => {
    const { t } = useI18n();
    return (
        <section className="py-20 sm:py-24 border-t border-slate-800 bg-slate-900/50">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
                    
                    {/* Left Column: Text and Form */}
                    <div>
                        <div className="mb-12 text-left">
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

                        <div className="bg-slate-800/40 backdrop-blur-md border border-slate-700 p-8 rounded-xl shadow-lg hover:border-brand-primary/30 transition-colors duration-300">
                            <ContactForm />
                        </div>
                    </div>

                    {/* Right Column: Google Map */}
                    <div className="w-full h-full min-h-[450px] md:min-h-full rounded-xl overflow-hidden border border-slate-700 group hover:border-brand-primary/30 transition-colors duration-300">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58519.5352914691!2d-46.68424716894531!3d-23.5506507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAvenida%20Paulista%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%20Brazil!5e0!3m2!1sen!2sus!4v1678886554321!5m2!1sen!2sus&style=invert_color"
                            width="100%"
                            height="100%"
                            className="grayscale group-hover:grayscale-0 transition-all duration-300"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Company Location in São Paulo, Brazil"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;