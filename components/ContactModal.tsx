import React, { useState, useEffect } from 'react';
import ContactForm from './ContactForm';
import { useI18n } from '../i18n';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const XIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const { t } = useI18n();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300); // Wait for animation
      document.body.style.overflow = 'unset';
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isVisible && !isOpen) return null;

  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'} transition-opacity duration-300`}>
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      ></div>

      {/* Modal Card */}
      <div 
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
        className={`relative w-full max-w-lg bg-slate-800 border border-slate-700 rounded-xl shadow-2xl overflow-hidden transform transition-all duration-300 ${isOpen ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'}`}>
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors z-10"
        >
          <XIcon className="w-6 h-6" />
        </button>

        <div className="p-8">
            <h2 id="contact-modal-title" className="text-2xl font-bold text-white mb-2">{t('contactModal.title')}</h2>
            <p className="text-slate-400 mb-6 text-sm" dangerouslySetInnerHTML={{ __html: t('contactModal.subtitle') }}>
            </p>

            {/* Using the shared form component */}
            <ContactForm onSuccess={() => {
                 // Optional: Add logic here if needed before closing, 
                 // but the form handles its own success UI.
                 // The form calls this after a delay.
                 onClose();
            }} />
        </div>
        
        {/* Decorative bottom bar */}
        <div className="h-1 w-full bg-gradient-to-r from-brand-primary to-brand-glow"></div>
      </div>
    </div>
  );
};

export default ContactModal;