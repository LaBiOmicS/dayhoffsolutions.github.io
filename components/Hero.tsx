import React, { useState, useEffect, useRef } from 'react';
import Sidebar from './Sidebar';
import { useI18n } from '../i18n/index.tsx';

// Define the structure for a line in our terminal
interface TerminalLine {
  text: string;
  type: 'command' | 'output' | 'success' | 'progress';
  progress?: number; // for progress bars
  duration?: number; // for progress animation
}

// Define the script for our microbiome analysis simulation
const script: TerminalLine[] = [
  { type: 'command', text: 'qiime demux emp-paired --i-seqs raw_sequences.qza --o-per-sample-sequences demux.qza' },
  { type: 'output', text: 'Demultiplexing sequences for 2 samples...' },
  { type: 'progress', duration: 1500, text: '' },
  { type: 'success', text: 'Demultiplexing complete. Output: demux.qza' },
  { type: 'command', text: 'qiime dada2 denoise-paired --i-demultiplexed-seqs demux.qza --p-trunc-len-f 240 --p-trunc-len-r 200 --o-table table.qza --o-representative-sequences rep-seqs.qza' },
  { type: 'output', text: 'Running DADA2 pipeline...\nFiltering, dereplicating, and merging reads.' },
  { type: 'progress', duration: 4000, text: '' },
  { type: 'success', text: 'DADA2 complete. Identified 1,287 ASVs. Outputs: table.qza, rep-seqs.qza' },
  { type: 'command', text: 'qiime feature-classifier classify-sklearn --i-classifier silva-138-99-nb-classifier.qza --i-reads rep-seqs.qza --o-classification taxonomy.qza' },
  { type: 'output', text: 'Assigning taxonomy using pre-trained SILVA classifier...' },
  { type: 'progress', duration: 3000, text: '' },
  { type: 'success', text: 'Taxonomy assignment complete. Output: taxonomy.qza' },
  { type: 'output', text: '\nMicrobiome analysis pipeline finished successfully.' },
];

const Terminal: React.FC = () => {
  const [lines, setLines] = useState<TerminalLine[]>([]);
  const [scriptIndex, setScriptIndex] = useState(0);
  const terminalViewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (terminalViewRef.current) {
        // This is kept in case the component is ever used in a scrolling context again
        terminalViewRef.current.scrollTop = terminalViewRef.current.scrollHeight;
    }
  }, [lines]);


  useEffect(() => {
    if (scriptIndex >= script.length) return;

    const currentStep = script[scriptIndex];
    const advanceScript = () => setScriptIndex(prev => prev + 1);

    switch (currentStep.type) {
      case 'command': {
        const commandText = currentStep.text;
        setLines(prev => [...prev, { text: '', type: 'command' }]);
        let i = 0;
        const typingInterval = setInterval(() => {
          setLines(prev => {
            const newLines = [...prev];
            newLines[newLines.length - 1].text = commandText.substring(0, i + 1);
            return newLines;
          });
          i++;
          if (i > commandText.length) {
            clearInterval(typingInterval);
            setTimeout(advanceScript, 300);
          }
        }, 30);
        return () => clearInterval(typingInterval);
      }
      case 'output':
      case 'success': {
        const delay = currentStep.text.includes('\n') ? 500 : 250;
        const timeout = setTimeout(() => {
          setLines(prev => [...prev, currentStep]);
          advanceScript();
        }, delay);
        return () => clearTimeout(timeout);
      }
      case 'progress': {
        const duration = currentStep.duration || 2000;
        const updates = 20;
        const intervalTime = duration / updates;
        const lineIndex = lines.length;
        setLines(prev => [...prev, { text: '', type: 'progress', progress: 0 }]);
        let progress = 0;
        const progressInterval = setInterval(() => {
          progress++;
          const progressPercentage = Math.round((progress / updates) * 100);
          setLines(prev => {
            const newLines = [...prev];
            if (newLines[lineIndex]) {
              newLines[lineIndex].progress = progressPercentage;
            }
            return newLines;
          });
          if (progress >= updates) {
            clearInterval(progressInterval);
            setTimeout(advanceScript, 300);
          }
        }, intervalTime);
        return () => clearInterval(progressInterval);
      }
    }
  }, [scriptIndex]);

  const renderLine = (line: TerminalLine, index: number) => {
    const key = `${index}-${line.type}`;
    switch (line.type) {
      case 'command':
        return (
          <div key={key} className="break-words">
            <span className="text-green-400">dayhoff@solutions</span>
            <span className="text-slate-300">:</span>
            <span className="text-blue-400">~</span>
            <span className="text-slate-300">$ </span>
            <span className="text-white">{line.text}</span>
            {index === lines.length - 1 && script[scriptIndex]?.type === 'command' && (
              <span className="bg-slate-300 w-2 h-5 inline-block ml-1 align-middle animate-pulse" aria-hidden="true"></span>
            )}
          </div>
        );
      case 'output':
        return <div key={key} className="text-slate-400 whitespace-pre-wrap break-words">{line.text}</div>;
      case 'success':
        return <div key={key} className="text-green-400 break-words">✓ {line.text}</div>;
      case 'progress':
        const filledCount = Math.floor((line.progress || 0) / 5);
        const emptyCount = 20 - filledCount;
        // Responsive bar: show smaller bar on mobile if needed, though mono font helps
        const bar = `[${'#'.repeat(filledCount)}${'-'.repeat(emptyCount)}]`;
        return (
            <div key={key} className="text-cyan-400 break-all whitespace-pre-wrap">
                <span className="hidden sm:inline">{bar} </span>
                {line.progress}% Complete
            </div>
        );
      default:
        return null;
    }
  };

  return (
    <div ref={terminalViewRef} className="flex-grow p-3 sm:p-4 font-mono text-[10px] xs:text-xs sm:text-sm leading-relaxed">
      <div className="flex flex-col space-y-2">
        {lines.map(renderLine)}
      </div>
    </div>
  );
};


const TerminalHeader: React.FC = () => {
    const { t } = useI18n();
    return (
        <header className="bg-slate-800 p-3 flex items-center border-b border-slate-700 flex-shrink-0">
          <div className="flex items-center mr-2 sm:mr-0">
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500 mr-1.5 sm:mr-2"></div>
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500 mr-1.5 sm:mr-2"></div>
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="flex-grow text-center text-xs sm:text-sm text-slate-400 font-mono truncate px-2">
            {t('hero.terminalHeader')}
          </div>
          <div className="w-8 sm:w-16 h-3 hidden sm:block"></div>
        </header>
    );
}

const Hero: React.FC = () => {
  const { t } = useI18n();
  return (
    <section className="relative container mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center">
        <h1 
          className="text-4xl md:text-6xl font-extrabold text-white mb-4 animate-fade-in-down"
          dangerouslySetInnerHTML={{ __html: t('hero.title') }}
        />
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-300 mb-12 animate-fade-in-up">
            {t('hero.subtitle')}
        </p>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row bg-slate-900/70 backdrop-blur-md rounded-lg shadow-2xl border border-slate-700 overflow-hidden animate-fade-in-up text-left" style={{animationDelay: '0.3s'}}>
          <Sidebar />
          <div className="flex-grow flex flex-col w-full">
            <TerminalHeader />
            <Terminal />
          </div>
        </div>
    </section>
  );
};

export default Hero;