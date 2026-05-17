import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { num: '01', label: 'ABOUT', href: '#about' },
  { num: '02', label: 'PRODUCTS', href: '#products' },
  { num: '03', label: 'WHY US', href: '#why-us' },
  { num: '04', label: 'GALLERY', href: '#gallery' },
  { num: '05', label: 'CONTACT', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-abyss/98 backdrop-blur-md shadow-2xl border-b border-gold/10'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-16 flex items-center justify-between h-20">
        {/* Logo */}
        <button onClick={() => scrollTo('#hero')} className="flex items-center gap-3 group">
          <img
            src="https://media.base44.com/images/public/6a0866d6db07a60e91962414/3c2374dcf_logo.jpg"
            alt="Adanech Gulema Logo"
            className="w-12 h-12 rounded-full object-cover border-2 border-gold/30 group-hover:border-gold/70 transition-all duration-300"
          />
          <div className="hidden sm:block">
            <div className="font-montserrat font-black text-white text-sm leading-tight tracking-tight">ADANECH GULEMA</div>
            <div className="font-opensans text-gold text-xs font-light tracking-widest">BUILDING MATERIALS</div>
          </div>
        </button>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.num}
              onClick={() => scrollTo(item.href)}
              className="group flex flex-col items-center relative"
            >
              <span className="nav-number">{item.num}.</span>
              <span className="font-montserrat font-semibold text-xs tracking-widest text-white/70 group-hover:text-white transition-colors duration-200">
                {item.label}
              </span>
              <span className="absolute -bottom-1 left-0 right-0 h-px bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </button>
          ))}
          <button
            onClick={() => scrollTo('#contact')}
            className="magnetic-btn ml-4 bg-gold text-abyss font-montserrat font-bold text-xs tracking-widest px-6 py-3 uppercase"
          >
            Get Quote
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-abyss border-t border-gold/20 px-6 py-8 flex flex-col gap-6">
          {navItems.map((item) => (
            <button
              key={item.num}
              onClick={() => scrollTo(item.href)}
              className="flex items-center gap-4 text-left group"
            >
              <span className="font-montserrat text-gold text-xs font-bold">{item.num}.</span>
              <span className="font-montserrat font-semibold text-sm tracking-widest text-white group-hover:text-gold transition-colors">
                {item.label}
              </span>
            </button>
          ))}
          <button
            onClick={() => scrollTo('#contact')}
            className="mt-4 bg-gold text-abyss font-montserrat font-bold text-sm tracking-widest py-4 uppercase"
          >
            Get a Quote
          </button>
        </div>
      )}
    </header>
  );
}