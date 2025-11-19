import React from 'react';
import { useI18n } from '../i18n/index.tsx';

const About: React.FC = () => {
  const { t } = useI18n();
  return (
    <section className="py-20 sm:py-24 bg-transparent border-t border-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row-reverse items-center gap-12 max-w-6xl mx-auto">
          
          {/* Text Content */}
          <div className="flex-1 space-y-6 text-left">
            <div>
                <span className="font-mono text-brand-primary text-xs tracking-[0.2em] uppercase mb-3 block">
                  {t('about.preTitle')}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white" dangerouslySetInnerHTML={{ __html: t('about.title') }}>
                </h2>
            </div>
            <p className="text-slate-300 text-lg leading-relaxed">
              {t('about.p1')}
            </p>
            <p className="text-slate-400 text-lg leading-relaxed border-l-2 border-brand-primary/50 pl-4 italic">
              {t('about.p2')}
            </p>
             <div className="pt-4 flex items-center space-x-6 font-mono text-xs text-slate-500">
                 <div className="flex items-center">
                    <span className="text-brand-glow mr-2">➜</span>
                    {t('about.tag1')}
                </div>
                 <div className="flex items-center">
                    <span className="text-brand-glow mr-2">➜</span>
                    {t('about.tag2')}
                </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="flex-1 w-full flex justify-center md:justify-start">
            <div className="relative w-full max-w-md aspect-video md:aspect-square bg-slate-800/30 rounded-lg border border-slate-700/50 overflow-hidden p-6 group hover:border-brand-glow/30 transition-colors duration-500">
               {/* Visual Content - Abstract Node Graph */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-transparent opacity-80"></div>
                
                {/* Decorative SVG */}
                <svg className="absolute inset-0 w-full h-full text-slate-700 group-hover:text-brand-primary/20 transition-all duration-700" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="1" className="animate-pulse-slow opacity-50" />
                    <circle cx="100" cy="100" r="70" stroke="currentColor" strokeWidth="0.5" className="opacity-30" strokeDasharray="4 4" />
                    <path d="M100 60 L100 140 M60 100 L140 100" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
                    {/* Nodes */}
                    <circle cx="100" cy="60" r="3" className="fill-brand-primary animate-pulse" />
                    <circle cx="140" cy="100" r="3" className="fill-brand-secondary" />
                    <circle cx="60" cy="100" r="3" className="fill-brand-secondary" />
                    <circle cx="100" cy="140" r="3" className="fill-brand-secondary" />
                </svg>
                
                <div className="relative z-10 h-full flex flex-col justify-end">
                     <div className="font-mono text-xs text-brand-glow/80 mb-1">
                        {t('about.target')}
                    </div>
                    <div className="w-full bg-slate-700/50 h-1 rounded-full overflow-hidden">
                        <div className="bg-brand-glow h-full w-2/3 animate-pulse"></div>
                    </div>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;