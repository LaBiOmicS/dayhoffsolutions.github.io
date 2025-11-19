import React, { useState, useEffect } from 'react';

const ArrowUpIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
    </svg>
);

const BackToTop: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className={`fixed bottom-8 right-8 z-40 p-3 rounded-full shadow-lg border border-brand-primary/30 backdrop-blur-sm transition-all duration-500 transform focus:outline-none group
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}
                bg-slate-900/80 hover:bg-brand-primary hover:border-brand-primary text-brand-primary hover:text-white hover:shadow-brand-glow/50`}
        >
            <ArrowUpIcon className="w-6 h-6 transition-transform duration-300 group-hover:-translate-y-1" />
        </button>
    );
};

export default BackToTop;