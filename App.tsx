import React, { useEffect, useRef, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import QuoteBlock from './components/QuoteBlock';
import Footer from './components/Footer';
import Services from './components/Services';
import TechStack from './components/TechStack';
import About from './components/About';
import Company from './components/Company';
import Contact from './components/Contact';
import BackToTop from './components/BackToTop';
import ContactModal from './components/ContactModal';
import Careers from './components/Careers';
import Expertise from './components/Expertise';
import PolicyModal from './components/PolicyModal';

declare global {
    interface Window {
        tsParticles: any;
    }
}

const App: React.FC = () => {
  const contactRef = useRef<HTMLDivElement>(null);
  const pillarsRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  // const careersRef = useRef<HTMLDivElement>(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isPolicyModalOpen, setIsPolicyModalOpen] = useState(false);

  const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  const openPolicyModal = () => setIsPolicyModalOpen(true);
  const closePolicyModal = () => setIsPolicyModalOpen(false);

    useEffect(() => {
        const initParticles = async () => {
            if (window.tsParticles) {
                await window.tsParticles.load({
                    id: "tsparticles",
                    options: {
                        fpsLimit: 120,
                        background: {
                            // color: "#0f172a" // Removed to show the grid pattern
                        },
                        particles: {
                            number: {
                                value: 60, // Slightly reduced for cleaner look with grid
                                density: {
                                    enable: true,
                                    value_area: 800
                                }
                            },
                            color: {
                                value: "#ffffff"
                            },
                            shape: {
                                type: "circle"
                            },
                            opacity: {
                                value: 0.3,
                                random: false,
                                anim: {
                                    enable: false
                                }
                            },
                            size: {
                                value: 2,
                                random: true,
                                anim: {
                                    enable: false
                                }
                            },
                            line_linked: {
                                enable: true, // Enabled lines for molecular feel
                                distance: 150,
                                color: "#ffffff",
                                opacity: 0.1,
                                width: 1
                            },
                            move: {
                                enable: true,
                                speed: 1,
                                direction: "none",
                                random: false,
                                straight: false,
                                out_mode: "out",
                                attract: {
                                    enable: false
                                }
                            }
                        },
                        interactivity: {
                            detect_on: "canvas",
                            events: {
                                onhover: {
                                    enable: true,
                                    mode: "grab"
                                },
                                onclick: {
                                    enable: true,
                                    mode: "push"
                                },
                                resize: true
                            },
                            modes: {
                                grab: {
                                    distance: 140,
                                    line_opacity: 1
                                },
                                push: {
                                    particles_nb: 4
                                }
                            }
                        },
                        retina_detect: true
                    },
                });
            }
        };
        initParticles();
    }, []);

  return (
    <div className="relative isolate flex flex-col min-h-screen bg-slate-900">
      {/* Tech Grid Background */}
      <div className="fixed inset-0 bg-tech-grid pointer-events-none z-0 opacity-60" />
      {/* Vignette for depth */}
      <div className="fixed inset-0 bg-radial-gradient pointer-events-none z-0" style={{background: 'radial-gradient(circle at center, transparent 0%, #0f172a 100%)'}} />
      
      <div id="tsparticles" className="fixed inset-0 -z-10" />
      
      <Header
        scrollToAbout={() => scrollToRef(aboutRef)}
        scrollToPillars={() => scrollToRef(pillarsRef)}
        scrollToMission={() => scrollToRef(missionRef)}
        // scrollToCareers={() => scrollToRef(careersRef)}
        openContactModal={openContactModal}
      />
      <main className="flex-grow relative z-10 overflow-x-hidden">
        <Hero />
        <div ref={aboutRef}><Company /></div>
        <div ref={missionRef}><About /></div>
        <div ref={pillarsRef}><Services /></div>
        <TechStack />
        <Expertise />
        <QuoteBlock />
        {/* <div ref={careersRef}><Careers openContactModal={openContactModal} /></div> */}
        <div ref={contactRef}><Contact /></div>
      </main>
      <Footer openPolicyModal={openPolicyModal} />
      <BackToTop />
      <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
      <PolicyModal isOpen={isPolicyModalOpen} onClose={closePolicyModal} />
    </div>
  );
};

export default App;