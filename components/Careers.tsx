import React from 'react';
import { useI18n } from '../i18n/index.tsx';

interface CareersProps {
    openContactModal: () => void;
}

const ArrowRightIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
);

const Careers: React.FC<CareersProps> = ({ openContactModal }) => {
    const { t } = useI18n();

    const jobOpenings = [
        {
            title: t('careers.job1_title'),
            location: t('careers.job1_location'),
            description: t('careers.job1_desc'),
        },
        {
            title: t('careers.job2_title'),
            location: t('careers.job2_location'),
            description: t('careers.job2_desc'),
        },
        {
            title: t('careers.job3_title'),
            location: t('careers.job3_location'),
            description: t('careers.job3_desc'),
        }
    ];

    return (
        <section className="py-20 sm:py-24 bg-transparent border-t border-slate-800/50">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="font-mono text-brand-primary text-xs tracking-[0.2em] uppercase mb-3 block">
                        {t('careers.preTitle')}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" dangerouslySetInnerHTML={{ __html: t('careers.title') }} />
                    <p className="text-slate-400 text-lg leading-relaxed">
                        {t('careers.subtitle')}
                    </p>
                </div>

                <div className="max-w-4xl mx-auto space-y-6">
                    {jobOpenings.map((job, index) => (
                        <div key={index} className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-6 group transition-all duration-300 hover:border-brand-primary/40 hover:bg-slate-800/50">
                            <div className="flex flex-col sm:flex-row justify-between sm:items-center">
                                <div>
                                    <h3 className="text-xl font-bold text-white group-hover:text-brand-glow transition-colors">{job.title}</h3>
                                    <p className="font-mono text-sm text-slate-400 mt-1">{job.location}</p>
                                </div>
                                <button
                                    onClick={openContactModal}
                                    className="mt-4 sm:mt-0 flex items-center text-sm font-bold text-brand-primary group-hover:text-white transition-colors"
                                >
                                    {t('careers.applyButton')}
                                    <ArrowRightIcon className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                                </button>
                            </div>
                            <p className="text-slate-400 text-sm mt-4 pt-4 border-t border-slate-700/50 leading-relaxed">
                                {job.description}
                            </p>
                        </div>
                    ))}
                </div>
                 <div className="text-center mt-12">
                    <p className="text-slate-500">{t('careers.noFit')}</p>
                    <button onClick={openContactModal} className="text-brand-primary hover:text-brand-glow font-bold transition-colors mt-1">
                       {t('careers.contactUs')}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Careers;