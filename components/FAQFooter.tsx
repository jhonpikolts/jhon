import React from 'react';
import { MapPin, Phone, Instagram, Facebook, HelpCircle } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const FAQFooter: React.FC = () => {
  const faqs = [
    {
      q: "Vocês cobram visita?",
      a: "Temos uma taxa de deslocamento técnica, porém, se o orçamento do serviço for aprovado na hora, a taxa de visita é isenta (sai de graça)!"
    },
    {
      q: "Atendem no meu bairro?",
      a: "Atendemos toda Zona Sul, Zona Norte, Centro e regiões da Barra da Tijuca e Recreio dos Bandeirantes."
    },
    {
      q: "As peças são originais?",
      a: "Sim! Para garantir a durabilidade do conserto e a sua segurança, utilizamos apenas peças originais ou homologadas pelos fabricantes das marcas (Brastemp, Consul, Electrolux, etc)."
    },
    {
      q: "Qual a garantia do serviço?",
      a: "Oferecemos 90 dias de garantia legal sobre qualquer peça trocada e sobre a mão de obra realizada."
    }
  ];

  return (
    <>
      {/* FAQ Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden border-t border-slate-700/50">
        {/* Background Decorative Glows */}
        <div className="absolute inset-0 z-0 pointer-events-none">
           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-nexos-blue/20 via-slate-900/0 to-transparent opacity-40"></div>
           <div className="absolute -top-[100px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-nexos-blue/10 blur-[120px] rounded-full"></div>
           <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-nexos-cyan/5 blur-[100px] rounded-full"></div>
        </div>

        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <div className="text-center mb-16" data-aos="fade-up">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-slate-800 border border-slate-700 mb-6 shadow-lg shadow-nexos-blue/10 transform rotate-3 hover:rotate-6 transition-transform">
              <HelpCircle className="w-8 h-8 text-nexos-cyan" />
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">Perguntas <span className="text-transparent bg-clip-text bg-gradient-to-r from-nexos-cyan to-nexos-blue">Frequentes</span></h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Tire suas dúvidas antes de agendar. Transparência é nosso compromisso com você.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details 
                key={index} 
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="group bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700/50 hover:border-nexos-blue/50 open:border-nexos-cyan/50 open:bg-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <summary className="flex cursor-pointer items-center justify-between p-6 font-semibold text-lg text-slate-100 select-none">
                  {faq.q}
                  <span className="transition-transform duration-300 group-open:rotate-180 bg-slate-700 rounded-full p-1 text-nexos-cyan">
                    <svg fill="none" height="20" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 pt-0 text-slate-300 leading-relaxed border-t border-slate-700/30 mt-0">
                  <div className="pt-4 animate-fadeIn">
                     {faq.a}
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            {/* Brand */}
            <div data-aos="fade-up" data-aos-delay="0">
              {/* Logo added here */}
              <img 
                src="./logo.png" 
                alt="Nexos Logo" 
                className="w-20 h-20 rounded-full border-2 border-nexos-cyan shadow-[0_0_20px_rgba(34,211,238,0.3)] mb-6 object-cover bg-slate-900" 
              />
              
              <h3 className="text-2xl font-bold text-white mb-4 tracking-wider">NEXOS <span className="text-nexos-cyan text-sm block font-normal">REFRIGERAÇÃO</span></h3>
              <p className="mb-6 max-w-xs leading-relaxed text-slate-500">
                Especialistas em trazer vida nova aos seus eletrodomésticos com rapidez, transparência e preço justo no Rio de Janeiro.
              </p>
              
              {/* REDES SOCIAIS via Constants */}
              <div className="flex gap-4">
                <a href={CONTACT_INFO.instagram} target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-900 hover:bg-nexos-cyan hover:text-slate-900 transition-all duration-300">
                  <Instagram size={20} />
                </a>
                <a href={CONTACT_INFO.facebook} target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-900 hover:bg-nexos-blue hover:text-white transition-all duration-300">
                  <Facebook size={20} />
                </a>
              </div>
            </div>

            {/* Areas */}
            <div data-aos="fade-up" data-aos-delay="100">
              <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                <MapPin className="text-nexos-cyan w-5 h-5" /> Áreas de Atendimento
              </h4>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
                <li className="hover:text-nexos-cyan transition-colors cursor-default">Copacabana</li>
                <li className="hover:text-nexos-cyan transition-colors cursor-default">Ipanema</li>
                <li className="hover:text-nexos-cyan transition-colors cursor-default">Botafogo</li>
                <li className="hover:text-nexos-cyan transition-colors cursor-default">Leblon</li>
                <li className="hover:text-nexos-cyan transition-colors cursor-default">Tijuca</li>
                <li className="hover:text-nexos-cyan transition-colors cursor-default">Méier</li>
                <li className="hover:text-nexos-cyan transition-colors cursor-default">Barra da Tijuca</li>
                <li className="hover:text-nexos-cyan transition-colors cursor-default">Recreio</li>
                <li className="hover:text-nexos-cyan transition-colors cursor-default">Centro</li>
                <li className="hover:text-nexos-cyan transition-colors cursor-default">Jacarepaguá</li>
              </ul>
            </div>

            {/* Contact */}
            <div data-aos="fade-up" data-aos-delay="200">
              <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                <Phone className="text-nexos-cyan w-5 h-5" /> Fale Conosco
              </h4>
              <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
                <p className="mb-2 text-sm text-slate-400">Precisa de ajuda agora?</p>
                
                {/* TELEFONE via Constants */}
                <a 
                  href={`https://wa.me/${CONTACT_INFO.whatsappNumber}`} 
                  className="text-2xl font-bold text-white hover:text-green-400 transition-colors block mb-3 tracking-wide"
                >
                  {CONTACT_INFO.phoneDisplay}
                </a>

                <div className="flex items-center gap-2 text-xs text-green-400">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  Online Agora
                </div>
                <p className="text-xs text-slate-500 mt-4 border-t border-slate-800 pt-3">Segunda a Sábado: 08h às 18h</p>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-900 mt-16 pt-8 text-center text-xs text-slate-600">
            <p>&copy; {new Date().getFullYear()} Nexos Refrigeração. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FAQFooter;