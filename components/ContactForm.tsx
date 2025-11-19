import React, { useState } from 'react';
import { useI18n } from '../i18n/index.tsx';

interface ContactFormProps {
  onSuccess?: () => void;
  className?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSuccess, className = "" }) => {
  const { t } = useI18n();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // IMPORTANTE: Substitua pelo seu ID do Formspree
    const FORM_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID"; 

    try {
        const response = await fetch(FORM_ENDPOINT, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: formData.name,
                email: formData.email,
                message: formData.message,
                _subject: `New contact from dayhoff.solutions: ${formData.name}`,
                _replyto: formData.email
            })
        });

        if (response.ok) {
            // Sucesso na API
            setIsSubmitting(false);
            setIsSuccess(true);
            
            // Se houver uma função de callback para sucesso (ex: fechar modal), chama após delay
            if (onSuccess) {
                setTimeout(() => {
                    onSuccess();
                }, 2500);
            }
        } else {
            throw new Error("API Error");
        }

    } catch (error) {
        // Fallback (Plano B): Mailto
        const mailtoLink = `mailto:contato@dayhoff.solutions?subject=Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}%0D%0A%0D%0AFrom: ${formData.email}`;
        window.location.href = mailtoLink;
        setIsSubmitting(false);
        if (onSuccess) onSuccess();
    }
  };

  if (isSuccess) {
    return (
        <div className="text-center py-10 animate-fade-in-up">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">{t('contactForm.successTitle')}</h3>
            <p className="text-slate-400" dangerouslySetInnerHTML={{ __html: t('contactForm.successText') }}>
            </p>
        </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
        <div>
            <label htmlFor="name" className="block text-left text-sm font-medium text-slate-300 mb-1">{t('contactForm.name')}</label>
            <input 
                type="text" 
                id="name" 
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all placeholder-slate-500"
                placeholder={t('contactForm.namePlaceholder')}
            />
        </div>
        <div>
            <label htmlFor="email" className="block text-left text-sm font-medium text-slate-300 mb-1">{t('contactForm.email')}</label>
            <input 
                type="email" 
                id="email" 
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all placeholder-slate-500"
                placeholder={t('contactForm.emailPlaceholder')}
            />
        </div>
        <div>
            <label htmlFor="message" className="block text-left text-sm font-medium text-slate-300 mb-1">{t('contactForm.message')}</label>
            <textarea 
                id="message" 
                name="message"
                rows={4}
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all resize-none placeholder-slate-500"
                placeholder={t('contactForm.messagePlaceholder')}
            ></textarea>
        </div>

        <button 
            type="submit" 
            disabled={isSubmitting}
            className={`w-full py-3 rounded-lg font-bold text-dark-bg transition-all duration-300 flex items-center justify-center ${
                isSubmitting 
                ? 'bg-slate-600 cursor-not-allowed' 
                : 'bg-brand-glow hover:bg-emerald-400 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]'
            }`}
        >
            {isSubmitting ? (
                <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-slate-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {t('contactForm.submitting')}
                </>
            ) : (
                t('contactForm.submit')
            )}
        </button>
    </form>
  );
};

export default ContactForm;