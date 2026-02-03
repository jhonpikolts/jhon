import React from 'react';
import { Snowflake, Shirt, Wind, ArrowRight } from 'lucide-react';
import { CONTACT_INFO, IMAGES } from '../constants';

const Services: React.FC = () => {
  const services = [
    {
      id: 1,
      title: 'Refrigeração',
      subtitle: 'Geladeiras e Freezers',
      description: 'Especialistas em Frost Free, Placa Fria, Side by Side e Freezers comerciais e residenciais.',
      icon: <Snowflake className="w-12 h-12 text-nexos-cyan" />,
      image: IMAGES.services.refrigeracao,
    },
    {
      id: 2,
      title: 'Lavanderia',
      subtitle: 'Lavadoras e Lava e Seca',
      description: 'Manutenção especializada em Brastemp, Samsung, LG, Electrolux e Consul. Troca de rolamentos e placas.',
      icon: <Shirt className="w-12 h-12 text-nexos-cyan" />,
      image: IMAGES.services.lavanderia,
    },
    {
      id: 3,
      title: 'Climatização',
      subtitle: 'Ar de Janela (ACJ)',
      description: 'Limpeza química profunda, troca de capacitores, termostatos e carga de gás (7.500 a 18.000 BTUs).',
      icon: <Wind className="w-12 h-12 text-nexos-cyan" />,
      image: IMAGES.services.climatizacao,
    },
  ];

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            O que nós <span className="text-nexos-blue">consertamos?</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Soluções completas para os eletrodomésticos essenciais da sua casa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              data-aos="fade-up"
              data-aos-delay={index * 150} // Delay escalonado (0, 150, 300)
              className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border-t-4 border-nexos-cyan flex flex-col h-full"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/20 transition-all z-10"></div>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  width="600"
                  height="400"
                  loading="lazy"
                />
                <div className="absolute bottom-4 left-4 z-20 bg-white p-2 rounded-full shadow-lg">
                  {service.icon}
                </div>
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <span className="text-sm font-bold text-nexos-blue uppercase tracking-wider mb-2">{service.title}</span>
                <h3 className="text-2xl font-bold text-slate-800 mb-3">{service.subtitle}</h3>
                <p className="text-slate-600 mb-6 flex-grow leading-relaxed">
                  {service.description}
                </p>
                <a 
                  href={`https://wa.me/${CONTACT_INFO.whatsappNumber}`} 
                  className="inline-flex items-center text-nexos-accent font-bold hover:text-nexos-cyan transition-colors mt-auto"
                >
                  Solicitar Orçamento <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;