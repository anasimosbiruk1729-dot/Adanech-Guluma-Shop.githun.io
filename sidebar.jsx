import { useEffect, useRef, useState } from 'react';
import { ShieldCheck, Star, Layers, MapPin } from 'lucide-react';

const reasons = [
  {
    icon: ShieldCheck,
    number: '01',
    title: 'ISO Standard Products',
    desc: 'Every product we import and distribute meets ISO international quality certifications. Your building deserves nothing less.',
  },
  {
    icon: Star,
    number: '02',
    title: '15+ Years Experience',
    desc: 'Established in 2009, we have over 15 years of trusted expertise in building materials supply across Addis Ababa.',
  },
  {
    icon: Layers,
    number: '03',
    title: 'Wide Product Range',
    desc: 'From ceramic tiles to HDPE pipes — hundreds of products under one roof. PVC, PPR, UPVC, GS and more, in all sizes and brands.',
  },
  {
    icon: MapPin,
    number: '04',
    title: 'Two Convenient Locations',
    desc: 'Visit us at our Jackross main branch or our Urael branch. Both fully stocked and staffed with experienced product specialists.',
  },
];

export default function WhyUs() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="why-us" ref={sectionRef}
      className="relative overflow-hidden"
      style={{ background: '#F8F9FA' }}>

      {/* Top accent */}
      <div className="h-1 w-full bg-gradient-to-r from-gold via-cerulean to-abyss" />

      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-24 lg:py-32">
        {/* Header */}
        <div className={`mb-16 text-center transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="font-montserrat text-gold text-xs font-bold tracking-[0.2em]">03. WHY CHOOSE US</span>
          <div className="gold-divider mx-auto" />
          <h2 className="font-montserrat font-black text-abyss leading-tight mx-auto"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', letterSpacing: '-0.02em', maxWidth: '600px' }}>
            The Legacy <span className="text-cerulean">2009</span> Advantage
          </h2>
        </div>

        {/* Reasons grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-abyss/10">
          {reasons.map(({ icon: Icon, number, title, desc }, i) => (
            <div
              key={number}
              className={`group relative p-8 lg:p-10 border-b sm:border-b-0 border-r border-abyss/10 last:border-r-0 bg-white hover:bg-abyss transition-all duration-500 cursor-default transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${0.1 + i * 0.15}s` }}
            >
              {/* Blueprint number */}
              <div className="font-montserrat font-black text-abyss/5 group-hover:text-white/5 transition-colors absolute top-4 right-6"
                style={{ fontSize: '5rem', lineHeight: 1, letterSpacing: '-0.04em' }}>
                {number}
              </div>

              {/* Icon */}
              <div className="relative mb-6">
                <div className="w-14 h-14 bg-abyss group-hover:bg-gold transition-colors duration-500 flex items-center justify-center">
                  <Icon size={24} className="text-gold group-hover:text-abyss transition-colors duration-500" />
                </div>
              </div>

              {/* Content */}
              <h3 className="font-montserrat font-black text-abyss group-hover:text-white text-lg mb-3 transition-colors leading-tight">
                {title}
              </h3>
              <p className="font-opensans text-abyss/60 group-hover:text-white/70 text-sm leading-relaxed transition-colors">
                {desc}
              </p>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}