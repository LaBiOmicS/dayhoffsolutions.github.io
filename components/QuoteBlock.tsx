import React from 'react';
import { useI18n } from '../i18n/index.tsx';

const QuoteIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M10 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5" />
    <path d="M19 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5" />
  </svg>
);

const QuoteBlock: React.FC = () => {
  const { t } = useI18n();
  return (
    <section className="py-12 bg-slate-900/30 border-y border-slate-800/50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
            <span className="font-mono text-brand-primary text-xs tracking-[0.2em] uppercase mb-4 block">
                {t('quote.preTitle')}
            </span>
            
            <div className="flex justify-center mb-6">
                <QuoteIcon className="w-12 h-12 text-brand-primary/40" />
            </div>
            <blockquote className="text-2xl md:text-3xl font-light text-slate-200 italic leading-relaxed mb-6 font-serif">
                {t('quote.quoteText')}
            </blockquote>
            <div className="flex items-center justify-center space-x-3">
                <div className="h-px w-12 bg-slate-700"></div>
                <cite className="not-italic font-semibold text-brand-glow tracking-wide uppercase text-sm">
                    {t('quote.author')}
                </cite>
                <div className="h-px w-12 bg-slate-700"></div>
            </div>
             <p className="text-slate-500 text-xs mt-2 uppercase tracking-widest">{t('quote.authorTitle')}</p>
        </div>
      </div>
       {/* Decorative background glow */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] bg-brand-primary/5 blur-[100px] rounded-full pointer-events-none"></div>
    </section>
  );
};

export default QuoteBlock;