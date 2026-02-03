import React from 'react';
import { MessageCircle, CheckCircle2 } from 'lucide-react';
import { CONTACT_INFO, IMAGES } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative w-full min-h-[85vh] flex items-center justify-center bg-slate-900 overflow-hidden">
      {/* IMAGEM DE FUNDO via Constants */}
      <div className="absolute inset-0 z-0">
        <img 
          src={IMAGES.heroBackground}
          alt="Técnico consertando geladeira" 
          className="w-full h-full object-cover opacity-70"
          width="1600"
          height="900"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/60"></div>
      </div>

      <div className="container mx-auto px-4 z-10 relative mt-8 md:mt-0">
        <div className="max-w-3xl">
          {/* Badge */}
          <div 
            data-aos="fade-down" 
            className="inline-flex items-center gap-2 bg-nexos-blue/20 border border-nexos-blue/50 rounded-full px-4 py-1 mb-6 backdrop-blur-sm"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-nexos-cyan text-sm font-semibold uppercase tracking-wide">Atendimento Hoje no RJ</span>
          </div>

          {/* H1 */}
          <h1 
            data-aos="fade-up" 
            data-aos-delay="100"
            className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6"
          >
            Conserto de Geladeira e <br className="hidden md:block"/>
            <span className="text-gradient">Máquina de Lavar</span>
          </h1>

          {/* H2 */}
          <h2 
            data-aos="fade-up" 
            data-aos-delay="200"
            className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed border-l-4 border-nexos-cyan pl-4"
          >
            Não deixe seus alimentos estragarem ou as roupas acumularem. 
            Técnicos certificados com <span className="text-white font-bold">garantia de 90 dias</span> em todas as peças e serviços.
          </h2>

          {/* CTA Group */}
          <div 
            data-aos="fade-up" 
            data-aos-delay="300"
            className="flex flex-col sm:flex-row gap-4"
          >
            <a 
              href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=Olá,%20preciso%20de%20uma%20visita%20técnica%20hoje!`}
              target="_blank" 
              rel="noreferrer"
              className="group bg-whatsapp hover:bg-green-500 text-white text-lg font-bold py-4 px-8 rounded-lg shadow-[0_0_20px_rgba(37,211,102,0.4)] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3"
            >
              <MessageCircle className="w-6 h-6 fill-current" />
              AGENDAR VISITA AGORA
            </a>
          </div>
          
          <p 
            data-aos="fade-in" 
            data-aos-delay="500"
            className="mt-4 text-slate-400 text-sm flex items-center gap-2"
          >
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            Atendimento imediato via WhatsApp e Ligação
          </p>

          {/* Mini Features */}
          <div 
            data-aos="fade-up" 
            data-aos-delay="400"
            className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4 text-slate-300 text-sm font-medium"
          >
             <div className="flex items-center gap-2">
                <CheckCircle2 className="text-nexos-cyan w-5 h-5" />
                <span>Peças Originais</span>
             </div>
             <div className="flex items-center gap-2">
                <CheckCircle2 className="text-nexos-cyan w-5 h-5" />
                <span>Técnicos Certificados</span>
             </div>
             <div className="flex items-center gap-2">
                <CheckCircle2 className="text-nexos-cyan w-5 h-5" />
                <span>Pagamento Facilitado</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
