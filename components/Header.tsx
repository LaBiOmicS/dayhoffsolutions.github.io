import React, { useState } from 'react';
import { useI18n } from '../i18n/index.tsx';

interface HeaderProps {
    scrollToAbout: () => void;
    scrollToPillars: () => void;
    scrollToMission: () => void;
    // scrollToCareers: () => void;
    openContactModal: () => void;
}

const MenuIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const XIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const Header: React.FC<HeaderProps> = ({ scrollToAbout, scrollToPillars, scrollToMission, /* scrollToCareers, */ openContactModal }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, language, setLanguage } = useI18n();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleMobileNav = (action: () => void) => {
    action();
    setIsMenuOpen(false);
  };

  const LanguageSwitcher = () => (
    <div className="flex items-center space-x-2 text-sm text-slate-400">
      <button 
        onClick={() => setLanguage('en')}
        aria-label="Switch to English"
        className={`${language === 'en' ? 'text-white font-bold' : 'hover:text-white'} transition-colors`}
      >
        EN
      </button>
      <span className="text-slate-600">|</span>
      <button 
        onClick={() => setLanguage('pt')}
        aria-label="Mudar para Português"
        className={`${language === 'pt' ? 'text-white font-bold' : 'hover:text-white'} transition-colors`}
      >
        PT
      </button>
      <span className="text-slate-600">|</span>
      <button 
        onClick={() => setLanguage('es')}
        aria-label="Cambiar a Español"
        className={`${language === 'es' ? 'text-white font-bold' : 'hover:text-white'} transition-colors`}
      >
        ES
      </button>
    </div>
  );

  return (
    <header className="sticky top-0 z-50 bg-slate-900/70 backdrop-blur-md border-b border-slate-700/50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-white tracking-wider">
          dayhoff<span className="text-white">.</span><span className="text-gradient">solutions</span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-sm">
          <button onClick={scrollToAbout} className="text-slate-300 hover:text-brand-glow transition-colors duration-300">{t('header.about')}</button>
          <button onClick={scrollToMission} className="text-slate-300 hover:text-brand-glow transition-colors duration-300">{t('header.mission')}</button>
          <button onClick={scrollToPillars} className="text-slate-300 hover:text-brand-glow transition-colors duration-300">{t('header.pillars')}</button>
          {/* <button onClick={scrollToCareers} className="text-slate-300 hover:text-brand-glow transition-colors duration-300">{t('header.careers')}</button> */}
          <button onClick={openContactModal} className="bg-brand-primary/10 border border-brand-primary text-brand-primary px-4 py-2 rounded-md hover:bg-brand-primary/20 transition-colors duration-300">
            {t('header.contact')}
          </button>
          <LanguageSwitcher />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={toggleMenu}
            className="text-slate-300 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <XIcon className="w-6 h-6" />
            ) : (
              <MenuIcon className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800 animate-fade-in-down shadow-xl absolute w-full left-0">
          <div className="flex flex-col px-6 py-4 space-y-4">
            <button 
              onClick={() => handleMobileNav(scrollToAbout)} 
              className="text-left text-slate-300 hover:text-brand-glow transition-colors duration-300 py-2 border-b border-slate-800/50"
            >
              {t('header.about')}
            </button>
            <button 
              onClick={() => handleMobileNav(scrollToMission)} 
              className="text-left text-slate-300 hover:text-brand-glow transition-colors duration-300 py-2 border-b border-slate-800/50"
            >
              {t('header.mission')}
            </button>
             <button 
              onClick={() => handleMobileNav(scrollToPillars)} 
              className="text-left text-slate-300 hover:text-brand-glow transition-colors duration-300 py-2 border-b border-slate-800/50"
            >
              {t('header.pillars')}
            </button>
            {/* <button 
              onClick={() => handleMobileNav(scrollToCareers)} 
              className="text-left text-slate-300 hover:text-brand-glow transition-colors duration-300 py-2 border-b border-slate-800/50"
            >
              {t('header.careers')}
            </button> */}
            <button 
              onClick={() => handleMobileNav(openContactModal)} 
              className="mt-2 text-center bg-brand-primary/10 border border-brand-primary text-brand-primary px-4 py-3 rounded-md hover:bg-brand-primary/20 transition-colors duration-300 w-full"
            >
              {t('header.contact')}
            </button>
            <div className="pt-4 mt-2 border-t border-slate-800 flex justify-center">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;