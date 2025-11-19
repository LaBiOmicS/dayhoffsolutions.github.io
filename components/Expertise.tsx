import React from 'react';
import { useI18n } from '../i18n';

// Custom SVG Icons for each domain
const MetagenomicsIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        <path d="M12 14l-4-2"></path><path d="M12 14l4-2"></path>
        <path d="M12 14V9"></path><path d="M12 9L8 7"></path>
        <path d="M12 9l4-2"></path>
    </svg>
);
const GenomicsIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 12a8 8 0 0 1 8-8 8 8 0 0 1 8 8M4 12a8 8 0 0 0 8 8 8 8 0 0 0 8-8"></path>
        <path d="M12 4v16"></path><path d="M8 8s4 4 4 4 4-4 4-4"></path>
        <path d="M8 16s4-4 4-4 4 4 4 4"></path>
    </svg>
);
const TranscriptomicsIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 21c-2.5-1.5-4-4.5-4-8.5 0-5.523 4.477-10 10-10s10 4.477 10 10c0 4-1.5 7-4 8.5"></path>
        <path d="M12 14v-4"></path><path d="M10 12h4"></path>
        <path d="M12 4s-4.5 4-4.5 6"></path><path d="M12 4s4.5 4 4.5 6"></path>
    </svg>
);
const ProteomicsIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3.8 3.8A2 2 0 0 1 5 3h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V5a2 2 0 0 1 2-2h2a2 2 0 0 1 1.2 3.2L16 12l4.8 5.8A2 2 0 0 1 19 21h-2a2 2 0 0 1-2-2v-2a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v2a2 2 0 0 1-2 2H5a2 2 0 0 1-1.2-3.2L8 12 3.8 6.2A2 2 0 0 1 3.8 3.8z" />
    </svg>
);
const MetabolomicsIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.88 3.12l-6 10.39a1.94 1.94 0 0 0 1.73 2.99h12a1.94 1.94 0 0 0 1.73-3l-6-10.39a1.94 1.94 0 0 0-3.46 0z"></path>
        <circle cx="12" cy="12" r="1.5"></circle>
        <circle cx="6" cy="18" r="2"></circle>
        <path d="M7.5 16.5l3-3"></path>
        <circle cx="18" cy="18" r="2"></circle>
        <path d="M16.5 16.5l-3-3"></path>
    </svg>
);
const MitogenomicsIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <circle cx="12" cy="12" r="3"></circle>
        <path d="M12 9v-2.5"></path>
        <path d="M12 15v2.5"></path>
        <path d="M15 12h2.5"></path>
        <path d="M9 12h-2.5"></path>
    </svg>
);


const Expertise: React.FC = () => {
    const { t } = useI18n();

    const expertises = [
        { icon: GenomicsIcon, title: t('expertise.geno_title'), desc: t('expertise.geno_desc') },
        { icon: TranscriptomicsIcon, title: t('expertise.trans_title'), desc: t('expertise.trans_desc') },
        { icon: ProteomicsIcon, title: t('expertise.proteo_title'), desc: t('expertise.proteo_desc') },
        { icon: MetabolomicsIcon, title: t('expertise.metabo_title'), desc: t('expertise.metabo_desc') },
        { icon: MetagenomicsIcon, title: t('expertise.meta_title'), desc: t('expertise.meta_desc') },
        { icon: MitogenomicsIcon, title: t('expertise.mito_title'), desc: t('expertise.mito_desc') },
    ];

    return (
        <section className="py-20 sm:py-24 bg-transparent">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="font-mono text-brand-primary text-xs tracking-[0.2em] uppercase block mb-3">
                        {t('expertise.preTitle')}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" dangerouslySetInnerHTML={{ __html: t('expertise.title') }}>
                    </h2>
                    <p className="text-slate-400 text-lg leading-relaxed">
                        {t('expertise.subtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {expertises.map((item, index) => (
                        <ExpertiseCard key={index} icon={item.icon} title={item.title} desc={item.desc} />
                    ))}
                </div>
            </div>
        </section>
    );
};

interface CardProps {
    icon: React.FC<{ className?: string }>;
    title: string;
    desc: string;
}

const ExpertiseCard: React.FC<CardProps> = ({ icon: Icon, title, desc }) => {
    return (
        <div className="group relative bg-slate-800/20 backdrop-blur-sm p-8 transition-all duration-300 hover:bg-slate-800/50 border border-slate-700/50 rounded-lg hover:border-brand-primary/30 transform hover:-translate-y-1">
            <div className="mb-5">
                <Icon className="w-10 h-10 text-brand-primary group-hover:text-brand-glow transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
        </div>
    );
};


export default Expertise;