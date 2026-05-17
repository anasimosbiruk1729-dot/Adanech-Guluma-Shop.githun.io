import { useEffect, useRef, useState } from 'react';
import { ChevronDown, Phone } from 'lucide-react';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden blueprint-overlay"
      style={{ background: 'linear-gradient(135deg, #0D2563 0%, #1A3A8F 50%, #0D2563 100%)' }}>
      
      {/* Background image overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url('https://media.base44.com/images/public/6a0866d6db07a60e91962414/1da84b944_prp.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }} />
      

      {/* Pipe/Blueprint grid pattern */}
      <div className="absolute inset-0 opacity-5"
      style={{
        backgroundImage: `
            linear-gradient(rgba(245,197,24,0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(245,197,24,0.8) 1px, transparent 1px)
          `,
        backgroundSize: '80px 80px'
      }} />
      

      {/* Diagonal accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5"
      style={{ background: 'linear-gradient(135deg, transparent 0%, #F5C518 100%)' }} />
      

      {/* Gold vertical accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-gold to-transparent opacity-60" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 py-32 w-full">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Left content — 8 cols */}
          <div className="lg:col-span-8">
            {/* Since badge */}
            <div
              className={`inline-flex items-center gap-2 mb-8 transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: '0.2s' }}>
              
              <div className="h-px w-8 bg-gold" />
              <span className="font-montserrat text-gold text-xs font-bold tracking-[0.25em] uppercase">
                Est. 2009 · Addis Ababa, Ethiopia
              </span>
            </div>

            {/* Main headline */}
            <h1
              className={`font-montserrat font-black text-white leading-none mb-6 transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{
                fontSize: 'clamp(2.8rem, 6vw, 5.5rem)',
                letterSpacing: '-0.03em',
                transitionDelay: '0.3s'
              }}>
              
              THE BACKBONE<br />
              <span className="text-gold">OF ETHIOPIA'S</span><br />
              FLOW.
            </h1>

            {/* Tagline */}
            <p
              className={`font-opensans text-white/70 text-lg lg:text-xl max-w-xl mb-10 leading-relaxed transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: '0.5s' }}>
              
              Your Trusted Source for Quality Building Materials — Ceramic, Porcelain, Sanitary Ware & Full Plumbing Systems.
            </p>

            {/* CTAs */}
            <div
              className={`flex flex-wrap gap-4 transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: '0.7s' }}>
              
              <button
                onClick={scrollToContact}
                className="magnetic-btn bg-gold text-abyss font-montserrat font-bold text-sm tracking-widest px-10 py-5 uppercase flex items-center gap-3 group">
                
                <Phone size={16} />
                Contact Us
              </button>
              <button
                onClick={scrollToAbout}
                className="group border border-white/30 text-white font-montserrat font-semibold text-sm tracking-widest px-10 py-5 uppercase hover:border-gold hover:text-gold transition-all duration-300">
                
                Our Story
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>

            {/* Stats strip */}
            <div
              className={`mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-white/10 pt-10 transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: '0.9s' }}>
              
              {[
              { val: '15+', label: 'Years Experience' },
              { val: '2', label: 'Branch Locations' },
              { val: 'ISO', label: 'Standard Products' },
              { val: '100s', label: 'Products in Stock' }].
              map((s) =>
              <div key={s.val} className="text-center lg:text-left">
                  <div className="stat-number hidden">{s.val}</div>
                  <div className="font-opensans text-white/50 text-sm mt-1">{s.label}</div>
                </div>
              )}
            </div>
          </div>

          {/* Right — Logo monument */}
          <div
            className={`lg:col-span-4 flex justify-center lg:justify-end transition-all duration-1000 ${loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
            style={{ transitionDelay: '0.4s' }}>
            
            <div className="relative">
              {/* Outer ring */}
              <div className="w-56 h-56 lg:w-72 lg:h-72 rounded-full border-2 border-gold/30 flex items-center justify-center relative">
                {/* Ring glow */}
                <div className="absolute inset-0 rounded-full border border-gold/10" style={{ transform: 'scale(1.1)' }} />
                <div className="absolute inset-0 rounded-full border border-gold/5" style={{ transform: 'scale(1.2)' }} />

                {/* Logo image */}
                <img
                  src="https://media.base44.com/images/public/6a0866d6db07a60e91962414/3c2374dcf_logo.jpg"
                  alt="Adanech Gulema Logo"
                  className="w-40 h-40 lg:w-52 lg:h-52 rounded-full object-cover border-2 border-gold/20" />
                
              </div>

              {/* Faucet icon decoration */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-gold/10 border border-gold/30 px-4 py-2 text-gold font-montserrat text-xs font-bold tracking-widest whitespace-nowrap">
                PLUMBING · SANITARY · TILES
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40 hover:text-gold transition-colors flex flex-col items-center gap-2 group">
        
        <span className="font-montserrat text-xs tracking-widest text-white/30 group-hover:text-gold/60 transition-colors">SCROLL</span>
        <ChevronDown size={20} className="animate-bounce" />
      </button>
    </section>);

}