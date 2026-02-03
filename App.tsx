import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import TrustSection from './components/TrustSection';
import FAQFooter from './components/FAQFooter';
import FloatingWhatsApp from './components/FloatingWhatsApp';

const App: React.FC = () => {
  useEffect(() => {
    // Inicializa a biblioteca de animação AOS se estiver disponível no window
    const initAOS = () => {
      if ((window as any).AOS) {
        (window as any).AOS.init({
          duration: 800, // Duração da animação em ms
          once: true, // Anima apenas uma vez ao descer a página
          offset: 100, // Começa a animar 100px antes do elemento aparecer
          easing: 'ease-out-cubic',
        });
      } else {
        // Tenta novamente em breve caso o script ainda não tenha carregado
        setTimeout(initAOS, 100);
      }
    };
    initAOS();
  }, []);

  return (
    <div className="bg-slate-50 text-slate-800 font-sans antialiased overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Services />
        <TrustSection />
        <FAQFooter />
      </main>
      <FloatingWhatsApp />
    </div>
  );
};

export default App;