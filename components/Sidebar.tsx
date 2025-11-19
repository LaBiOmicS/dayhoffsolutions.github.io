import React from 'react';
import { useI18n } from '../i18n';

const FolderIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block mr-2 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
    </svg>
);

const FileIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block mr-2 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
);


const Sidebar: React.FC = () => {
    const { t } = useI18n();

    return (
        <aside className="hidden md:flex w-64 flex-shrink-0 bg-slate-900/40 border-r border-slate-700 p-4 font-mono text-sm text-slate-400 flex-col">
            <h3 className="text-white font-bold mb-4 tracking-widest uppercase">{t('sidebar.projectFiles')}</h3>
            <nav className="flex flex-col space-y-1">
                <div><FolderIcon /> raw_data/</div>
                <div className="pl-6"><FileIcon /> sequences.qza</div>
                <div className="pl-6"><FileIcon /> metadata.tsv</div>
                <div><FolderIcon /> results/</div>
                <div className="pl-6"><FileIcon /> asv_table.qza</div>
                <div className="pl-6"><FileIcon /> taxonomy.qza</div>
                <div className="pl-6"><FileIcon /> diversity.qzv</div>
                <div className="mt-2"><FileIcon /> microbiome_pipeline.sh</div>
            </nav>
            
            <div className="mt-auto pt-4 border-t border-slate-700">
                <h3 className="text-white font-bold mb-2 tracking-widest uppercase">{t('sidebar.mission')}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                    {t('sidebar.missionText')}
                </p>
            </div>
        </aside>
    );
};

export default Sidebar;