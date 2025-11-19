import React from 'react';
import { useI18n } from '../i18n';

// Icons
const AtomIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M12 12v.01" />
        <path d="M19.071 4.929c-1.562 -1.562 -6.19 -1.562 -7.752 0" />
        <path d="M4.929 19.071c-1.562 -1.562 .536 -8.288 2.1 -9.85" />
        <path d="M4.929 4.929c1.562 -1.562 8.288 .536 9.85 2.1" />
        <path d="M19.071 19.071c1.562 -1.562 - .536 -8.288 -2.1 -9.85" />
    </svg>
);
const NeuralNetworkIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M9 5a3 3 0 0 0 -3 3v4a3 3 0 0 0 3 3" />
        <path d="M15 5a3 3 0 0 1 3 3v4a3 3 0 0 1 -3 3" />
        <path d="M3 8h6" />
        <path d="M21 8h-6" />
        <path d="M12 5v14" />
        <path d="M6 12h12" />
    </svg>
);
const GearDnaIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M12 21a9 9 0 0 0 9 -9" />
        <path d="M14.28 13.26a3 3 0 0 0 -2.56 2.49" />
        <path d="M10.16 14.83a3 3 0 0 0 -2.44 2.58" />
        <path d="M3 12a9 9 0 0 0 9 9" />
        <path d="M9.72 10.74a3 3 0 0 0 2.56 -2.49" />
        <path d="M13.84 9.17a3 3 0 0 0 2.44 -2.58" />
        <path d="M21 12a9 9 0 0 0 -9 -9" />
        <path d="M12 3a9 9 0 0 0 -9 9" />
    </svg>
);

// "Technical" Corner markers
const CornerMarkers = () => (
    <>
        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-slate-500 opacity-50 transition-all group-hover:w-4 group-hover:h-4 group-hover:border-brand-primary"></div>
        <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-slate-500 opacity-50 transition-all group-hover:w-4 group-hover:h-4 group-hover:border-brand-primary"></div>
        <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-slate-500 opacity-50 transition-all group-hover:w-4 group-hover:h-4 group-hover:border-brand-primary"></div>
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-slate-500 opacity-50 transition-all group-hover:w-4 group-hover:h-4 group-hover:border-brand-primary"></div>
    </>
);

const Services: React.FC = () => {
    const { t } = useI18n();
    
    const pillars = [
        {
            id: "01",
            icon: AtomIcon,
            title: t('services.pillar1_title'),
            subtitle: t('services.pillar1_subtitle'),
            description: t('services.pillar1_desc')
        },
        {
            id: "02",
            icon: NeuralNetworkIcon,
            title: t('services.pillar2_title'),
            subtitle: t('services.pillar2_subtitle'),
            description: t('services.pillar2_desc')
        },
        {
            id: "03",
            icon: GearDnaIcon,
            title: t('services.pillar3_title'),
            subtitle: t('services.pillar3_subtitle'),
            description: t('services.pillar3_desc')
        },
    ];

    return (
        <section className="py-20 sm:py-24 bg-slate-900/0 border-y border-slate-800/50 relative">
             {/* Background Tech Element */}
             <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-5xl h-full border-x border-slate-800/30 pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
                    <div>
                        <span className="font-mono text-brand-primary text-xs tracking-[0.2em] uppercase mb-3 block">
                            {t('services.preTitle')}
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white" dangerouslySetInnerHTML={{ __html: t('services.title') }}>
                        </h2>
                    </div>
                    <p className="text-slate-400 text-lg leading-relaxed">
                        {t('services.subtitle')}
                    </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {pillars.map((pillar, index) => (
                        <div key={index} className="group relative bg-slate-800/30 backdrop-blur-sm p-8 transition-all duration-500 hover:bg-slate-800/60">
                           {/* Technical Borders/Markers */}
                           <CornerMarkers />
                           
                           <div className="absolute top-4 right-4 font-mono text-xs text-slate-600 group-hover:text-brand-primary transition-colors">
                               {pillar.id}
                           </div>

                           <div className="flex justify-start mb-6">
                               <div className="p-3 rounded-none border border-slate-700 bg-slate-900/50 group-hover:border-brand-primary/50 transition-colors">
                                   <pillar.icon className="w-8 h-8 text-brand-glow" />
                               </div>
                           </div>
                           
                            <h3 className="text-xl font-bold text-white mb-1 font-sans">{pillar.title}</h3>
                            <div className="text-xs font-mono text-brand-primary mb-4 tracking-wider opacity-70">{pillar.subtitle}</div>
                            <p className="text-slate-400 text-sm leading-relaxed border-t border-slate-700/50 pt-4 group-hover:border-slate-600 transition-colors">{pillar.description}</p>
                            
                            {/* Decorative bottom numbers */}
                            <div className="mt-6 flex justify-between items-end">
                                <div className="h-0.5 w-8 bg-slate-700 group-hover:bg-brand-glow transition-all duration-700 group-hover:w-16"></div>
                                <span className="text-[10px] text-slate-600 font-mono">{t('services.status')}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;