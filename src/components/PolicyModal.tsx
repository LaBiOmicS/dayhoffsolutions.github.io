import React, { useState, useEffect } from 'react';
import { useI18n } from '../i18n';

interface PolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const XIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const PolicyModal: React.FC<PolicyModalProps> = ({ isOpen, onClose }) => {
  const { t } = useI18n();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      document.body.style.overflow = 'hidden';
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300);
      document.body.style.overflow = 'unset';
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isVisible && !isOpen) return null;

  const renderPolicySection = (titleKey: string, textKey: string) => (
    <div className="mb-6">
      <h3 className="text-xl font-bold text-brand-glow mb-3">{t(titleKey)}</h3>
      <div className="space-y-3 text-slate-400 text-sm leading-relaxed">
        {t(textKey).split('\\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );

  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'} transition-opacity duration-300`}>
      <div 
        className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      ></div>

      <div 
        role="dialog"
        aria-modal="true"
        aria-labelledby="policy-modal-title"
        className={`relative w-full max-w-3xl bg-slate-800 border border-slate-700 rounded-xl shadow-2xl flex flex-col transform transition-all duration-300 ${isOpen ? 'scale-100' : 'scale-95'}`}
        style={{ maxHeight: '85vh' }}
      >
        <div className="flex-shrink-0 p-6 border-b border-slate-700 flex justify-between items-center">
            <h2 id="policy-modal-title" className="text-2xl font-bold text-white">{t('policies.title')}</h2>
            <button 
              onClick={onClose}
              aria-label="Close"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <XIcon className="w-6 h-6" />
            </button>
        </div>
        
        <div className="flex-grow p-6 sm:p-8 overflow-y-auto">
            {renderPolicySection('policies.privacyTitle', 'policies.privacyText')}
            {renderPolicySection('policies.cookiesTitle', 'policies.cookiesText')}
        </div>
        
        <div className="flex-shrink-0 h-1 w-full bg-gradient-to-r from-brand-primary to-brand-glow"></div>
      </div>
    </div>
  );
};

export default PolicyModal;