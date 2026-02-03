import React, { useState, useEffect } from 'react';
import { ShieldCheck, Building2, CreditCard, Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const TrustSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Maria C.",
      location: "Copacabana, Rio de Janeiro",
      text: "Obrigado Rodrigo, minha máquina voltou a funcionar na hora. Agora posso lavar minhas roupas sem aquele barulho estranho! Recomendo demais.",
      initial: "M",
      color: "bg-purple-600"
    },
    {
      id: 2,
      name: "Carlos Eduardo",
      location: "Tijuca, Rio de Janeiro",
      text: "Profissionalismo nota 10. A geladeira parou no domingo e segunda de manhã já estavam aqui. Preço justo e peça original, mostraram a embalagem.",
      initial: "C",
      color: "bg-blue-600"
    },
    {
      id: 3,
      name: "Fernanda Lima",
      location: "Barra da Tijuca, Rio de Janeiro",
      text: "Eu já tinha chamado outro técnico que condenou o motor. O pessoal da Nexos veio e era só um sensor. Honestidade rara hoje em dia!",
      initial: "F",
      color: "bg-pink-600"
    },
    {
      id: 4,
      name: "Roberto Mendes",
      location: "Botafogo, Rio de Janeiro",
      text: "Serviço impecável na minha lava e seca Samsung. O técnico explicou tudo o que estava fazendo e deixou o local super limpo depois.",
      initial: "R",
      color: "bg-green-600"
    },
    {
      id: 5,
      name: "Ana Beatriz",
      location: "Leblon, Rio de Janeiro",
      text: "Atendimento muito rápido pelo WhatsApp e pontualidade na visita. Minha geladeira Side by Side ficou nova. Recomendo de olhos fechados.",
      initial: "A",
      color: "bg-orange-500"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial();
    }, 6000); // Muda a cada 6 segundos
    return () => clearInterval(timer);
  }, [currentIndex]);

  const current = testimonials[currentIndex];

  return (
    <section id="trust" className="py-16 bg-gradient-to-b from-white to-slate-100">
      <div className="container mx-auto px-4">
        
        {/* Trust Bar */}
        <div 
          data-aos="zoom-in"
          className="bg-slate-900 rounded-2xl shadow-2xl p-8 mb-20 -mt-24 relative z-20 mx-4 lg:mx-0 border border-slate-700"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-700">
            <div className="px-4 flex flex-col items-center">
              <ShieldCheck className="w-12 h-12 text-green-400 mb-3" />
              <h3 className="text-white text-lg font-bold mb-1">Técnicos Verificados</h3>
              <p className="text-slate-400 text-sm">CPF checado e antecedentes verificados.</p>
            </div>
            <div className="px-4 pt-8 md:pt-0 flex flex-col items-center">
              <Building2 className="w-12 h-12 text-nexos-cyan mb-3" />
              <h3 className="text-white text-lg font-bold mb-1">Empresa Séria</h3>
              <p className="text-slate-400 text-sm">CNPJ Ativo e emissão de Nota Fiscal.</p>
            </div>
            <div className="px-4 pt-8 md:pt-0 flex flex-col items-center">
              <CreditCard className="w-12 h-12 text-yellow-400 mb-3" />
              <h3 className="text-white text-lg font-bold mb-1">Facilidade</h3>
              <p className="text-slate-400 text-sm">Aceitamos PIX e Cartão em até 12x.</p>
            </div>
          </div>
        </div>

        {/* Before / After & Testimonials Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Gallery Side */}
          <div data-aos="fade-right">
            <div className="text-left mb-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Veja a diferença de uma <span className="text-nexos-blue">limpeza profissional</span></h2>
              <div className="h-1 w-20 bg-nexos-cyan rounded-full"></div>
            </div>
            
            <div className="relative group rounded-xl overflow-hidden shadow-2xl border-4 border-white">
              <div className="grid grid-cols-2 h-80">
                {/* Simulated Dirty Image */}
                <div className="relative h-full">
                  <img 
                    src="https://i.postimg.cc/y6QpBX97/6Rg2u3Zqw-TPmr63DBitl1-y-RMRt-Otv.jpg" 
                    alt="Máquina suja" 
                    className="h-full w-full object-cover grayscale brightness-50 contrast-125"
                    loading="lazy"
                    width="800"
                    height="600"
                  />
                  <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded text-sm font-bold shadow-md">ANTES</div>
                </div>
                {/* Simulated Clean Image */}
                <div className="relative h-full">
                  <img 
                    src="https://i.postimg.cc/TY50x8f7/Ww-Duc2ds-IZHpiud-Upag9s-n-Ox7HNVt.jpg" 
                    alt="Máquina limpa" 
                    className="h-full w-full object-cover brightness-110 saturate-125"
                    loading="lazy"
                    width="800"
                    height="600"
                  />
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded text-sm font-bold shadow-md">DEPOIS</div>
                </div>
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-black/60 p-4 text-white text-center text-sm">
                Limpeza técnica profunda de tambor de lavadora
              </div>
            </div>
          </div>

          {/* Testimonial Side with Slider */}
          <div 
            data-aos="fade-left"
            className="flex flex-col justify-center relative"
          >
            <h3 className="text-2xl font-bold text-slate-800 mb-8">
              O que dizem nossos clientes
            </h3>
            
            <div className="relative">
              {/* Left Arrow Button */}
              <button 
                onClick={prevTestimonial} 
                className="absolute top-1/2 -left-3 md:-left-5 transform -translate-y-1/2 z-30 bg-white p-2 rounded-full shadow-lg text-slate-600 hover:text-nexos-cyan hover:scale-110 transition-all border border-slate-100"
                aria-label="Depoimento anterior"
              >
                <ChevronLeft size={24} />
              </button>

              <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 relative min-h-[320px] flex flex-col justify-between transition-all duration-500 z-10">
                <Quote className="absolute top-6 right-6 text-slate-200 w-12 h-12" />
                
                <div>
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <div className="mb-6 relative">
                     <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                        <p className="text-slate-700 italic font-medium leading-relaxed">
                          "{current.text}"
                        </p>
                        <div className="absolute -bottom-2 left-6 w-4 h-4 bg-green-50 border-b border-r border-green-100 transform rotate-45"></div>
                     </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 mt-2">
                  <div className={`w-12 h-12 ${current.color} rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md`}>
                    {current.initial}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">{current.name}</p>
                    <p className="text-sm text-slate-500">{current.location}</p>
                  </div>
                  <div className="ml-auto flex items-center gap-1 text-xs text-slate-400">
                     <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-4 h-4" />
                     Via WhatsApp
                  </div>
                </div>
              </div>

              {/* Right Arrow Button */}
              <button 
                onClick={nextTestimonial} 
                className="absolute top-1/2 -right-3 md:-right-5 transform -translate-y-1/2 z-30 bg-white p-2 rounded-full shadow-lg text-slate-600 hover:text-nexos-cyan hover:scale-110 transition-all border border-slate-100"
                aria-label="Próximo depoimento"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Slider Dots */}
            <div className="flex justify-center mt-6 gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex ? "w-8 bg-nexos-cyan" : "w-2 bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Ir para depoimento ${idx + 1}`}
                />
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default TrustSection;