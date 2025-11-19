import React from 'react';
import { useI18n } from '../i18n/index.tsx';

const Company: React.FC = () => {
  const { t } = useI18n();
  return (
    <section className="py-20 relative border-t border-slate-800/50 bg-slate-900/30">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
            
            {/* Text Content */}
            <div className="flex-1 space-y-6 text-left">
                <div>
                    <span className="font-mono text-brand-primary text-xs tracking-[0.2em] uppercase mb-3 block">
                        {t('company.preTitle')}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white" dangerouslySetInnerHTML={{ __html: t('company.title') }} />
                </div>
                <p className="text-slate-300 text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: t('company.p1') }}>
                </p>
                <p className="text-slate-400 leading-relaxed" dangerouslySetInnerHTML={{ __html: t('company.p2') }}>
                </p>
                
                <div className="pt-4 flex items-center space-x-6 font-mono text-xs text-slate-500">
                    <div className="flex items-center">
                        <div className="w-2 h-2 bg-brand-primary rounded-full mr-2 animate-pulse"></div>
                        {t('company.tag1')}
                    </div>
                    <div className="flex items-center">
                        <div className="w-2 h-2 bg-brand-glow rounded-full mr-2 animate-pulse"></div>
                        {t('company.tag2')}
                    </div>
                </div>
            </div>

            {/* Visual Element / Abstract representation */}
            <div className="flex-1 w-full flex justify-center md:justify-end">
                <div className="relative w-full max-w-md aspect-video md:aspect-square bg-slate-800/50 rounded-lg border border-slate-700 overflow-hidden p-6 group hover:border-brand-primary/30 transition-colors duration-500">
                    {/* Abstract Grid Visualization */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                    
                    <div className="relative h-full flex flex-col justify-between">
                        <div className="flex justify-between text-xs font-mono text-slate-600">
                            <span>SEQ_ALIGN_V2.1</span>
                            <span>CPU_LOAD: 12%</span>
                        </div>

                        <div className="space-y-2 font-mono text-xs opacity-70">
                            <div className="flex items-center">
                                <span className="text-brand-primary mr-2">user@dayhoff:~$</span>
                                <span className="text-slate-300 typing-effect">init_protocol --mode=discovery</span>
                            </div>
                            <div className="text-slate-500 pl-4">
                                {'>'} Loading proteomic database... [OK]<br/>
                                {'>'} Calibrating evolutionary models... [OK]<br/>
                                {'>'} Synthesizing results...
                            </div>
                        </div>

                        {/* Decorative graphic elements */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-brand-primary/10 rounded-full blur-2xl group-hover:bg-brand-primary/20 transition-all duration-700"></div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Company;