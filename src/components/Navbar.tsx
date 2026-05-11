import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Classes', href: '#classes' },
    { name: 'Trainers', href: '#trainers' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0D0D0D]/90 backdrop-blur-md border-b border-white/10 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.8)]' : 'bg-transparent py-6 border-b border-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <a href="#home" className="text-2xl font-black tracking-tighter text-primary">
              BLACKBOX
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8 text-[11px] uppercase tracking-widest font-bold">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#pricing"
                className="bg-primary text-black px-6 py-2.5 text-[11px] font-black uppercase tracking-tighter hover:bg-white transition-all shadow-[0_0_15px_rgba(198,255,0,0.3)]"
              >
                Join Now
              </a>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#0D0D0D]/95 backdrop-blur-md border-b border-white/10">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 text-[11px] uppercase tracking-widest font-bold text-gray-300 hover:text-primary hover:bg-white/5"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#pricing"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center mt-4 bg-primary text-black px-6 py-3 text-[11px] font-black uppercase tracking-tighter hover:bg-white transition-all shadow-[0_0_15px_rgba(198,255,0,0.3)]"
            >
              Join Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
