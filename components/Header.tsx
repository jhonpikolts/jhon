import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-nexos-dark sticky top-0 z-50 shadow-lg border-b border-slate-700">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo Representation */}
        <div className="flex items-center space-x-3">
          {/* Logo Image - Certifique-se que logo.png está na pasta correta */}
          <img 
            src="https://i.postimg.cc/fTfGsh82/IMG-20260131-195236-862.jpg" 
            alt="Nexos Logo" 
            className="w-12 h-12 rounded-full border border-nexos-cyan shadow-[0_0_15px_rgba(34,211,238,0.5)] object-cover bg-slate-800"
          />
          <div className="flex flex-col">
            <span className="text-2xl font-extrabold text-white tracking-wider leading-none">
              NEXOS
            </span>
            <span className="text-xs text-nexos-cyan tracking-[0.2em] uppercase font-semibold mt-0.5">
              Refrigeração
            </span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <a href="#home" className="text-gray-300 hover:text-nexos-cyan transition-colors font-medium">Início</a>
          <a href="#services" className="text-gray-300 hover:text-nexos-cyan transition-colors font-medium">Serviços</a>
          <a href="#trust" className="text-gray-300 hover:text-nexos-cyan transition-colors font-medium">Sobre</a>
          <a href={`tel:+${CONTACT_INFO.whatsappNumber}`} className="bg-nexos-cyan text-nexos-dark px-4 py-2 rounded-md font-bold hover:bg-white transition-all shadow-lg flex items-center gap-2">
            <Phone size={18} />
            Ligar Agora
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-700">
          <div className="flex flex-col p-4 space-y-4">
            <a href="#home" onClick={() => setIsOpen(false)} className="text-white text-lg">Início</a>
            <a href="#services" onClick={() => setIsOpen(false)} className="text-white text-lg">Serviços</a>
            <a href="#trust" onClick={() => setIsOpen(false)} className="text-white text-lg">Sobre</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="text-nexos-cyan font-bold text-lg">Contato</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;