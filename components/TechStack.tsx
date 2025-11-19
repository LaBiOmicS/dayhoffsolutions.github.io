import React from 'react';
import { useI18n } from '../i18n';

const TechStack: React.FC = () => {
  const { t } = useI18n();

  const categories = [
    {
      id: "01",
      name: t('techStack.cat1'),
      tools: ["Python", "R", "Java", "Node.js", "Bash"]
    },
    {
      id: "02",
      name: t('techStack.cat2'),
      tools: ["Nextflow", "Snakemake", "Docker", "Singularity", "Kubernetes"]
    },
    {
      id: "03",
      name: t('techStack.cat3'),
      tools: ["PyTorch", "TensorFlow", "Scikit-learn", "Biopython", "HuggingFace"]
    },
    {
      id: "04",
      name: t('techStack.cat4'),
      tools: ["PostgreSQL", "MySQL", "MongoDB", "AWS HealthOmics", "Google Life Sciences"]
    }
  ];

  return (
    <section className="py-16 bg-slate-900/80 border-y border-slate-800 relative overflow-hidden">
      
      {/* Background decorative lines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="h-px w-full top-1/4 absolute bg-brand-primary"></div>
        <div className="h-px w-full bottom-1/4 absolute bg-brand-primary"></div>
        <div className="w-px h-full left-1/4 absolute bg-brand-primary"></div>
        <div className="w-px h-full right-1/4 absolute bg-brand-primary"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="font-mono text-brand-primary text-xs tracking-[0.2em] uppercase block mb-3">
                {t('techStack.preTitle')}
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4" dangerouslySetInnerHTML={{ __html: t('techStack.title') }}>
            </h2>
             <p className="text-slate-400 text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: t('techStack.subtitle') }}>
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div key={cat.id} className="bg-slate-800/40 border border-slate-700/60 p-5 rounded-sm hover:border-brand-primary/40 transition-all duration-300 group">
              <div className="flex justify-between items-center mb-4 border-b border-dashed border-slate-700 pb-2">
                <h3 className="font-mono text-sm font-bold text-slate-300 tracking-wider">
                  {cat.name}
                </h3>
                <span className="text-[10px] text-slate-600 group-hover:text-brand-primary transition-colors">
                    SEC_{cat.id}
                </span>
              </div>
              
              <ul className="space-y-2">
                {cat.tools.map((tool, idx) => (
                  <li key={idx} className="flex items-center text-slate-400 text-sm font-mono group-hover:text-slate-200 transition-colors">
                    <span className="text-brand-primary mr-2 opacity-50 group-hover:opacity-100">›</span>
                    {tool}
                  </li>
                ))}
              </ul>

              {/* Decorative corner */}
              <div className="mt-4 flex justify-end">
                  <div className="w-2 h-2 border-b border-r border-slate-600 group-hover:border-brand-glow transition-colors"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;