import { useEffect, useRef, useState } from 'react';
import { Award, MapPin, Package, Clock } from 'lucide-react';

const stats = [
  { icon: Clock, val: '15+', label: 'Years of Experience', sub: 'Since 2009' },
  { icon: MapPin, val: '1', label: 'Branch Location', sub: 'Jackross, Addis Ababa' },
  { icon: Award, val: 'ISO', label: 'Standard Products', sub: 'Certified Quality' },
  { icon: Package, val: '100s', label: 'Products in Stock', sub: 'Wide Range' },
];

export default function About() {
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
    <section id="about" ref={sectionRef} className="relative overflow-hidden"
      style={{ background: '#F8F9FA' }}>

      {/* Top edge accent */}
      <div className="h-1 w-full bg-gradient-to-r from-abyss via-gold to-cerulean" />

      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-24 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-16 items-start">

          {/* LEFT — Since 2009 sticky badge */}
          <div className={`lg:col-span-4 transition-all duration-1000 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="lg:sticky lg:top-32">
              {/* Heritage badge */}
              <div className="relative inline-block mb-8">
                <div className="w-52 h-52 rounded-full border-4 border-abyss flex flex-col items-center justify-center bg-abyss text-center shadow-2xl">
                  <span className="font-montserrat font-black text-gold" style={{ fontSize: '3rem', lineHeight: 1 }}>2009</span>
                  <div className="w-12 h-0.5 bg-gold my-2" />
                  <span className="font-montserrat font-bold text-white text-xs tracking-widest">FOUNDED</span>
                  <span className="font-opensans text-white/50 text-xs mt-1">ADDIS ABABA</span>
                </div>
                {/* Orbit ring */}
                <div className="absolute -inset-4 rounded-full border border-gold/20 pointer-events-none" />
                <div className="absolute -inset-8 rounded-full border border-gold/10 pointer-events-none" />
              </div>

              {/* Quote pull */}
              <blockquote className="border-l-4 border-gold pl-6 mt-8">
                <p className="font-opensans text-abyss/70 text-base italic leading-relaxed">
                  "Built on trust, grown through quality — serving Addis Ababa since 2009."
                </p>
              </blockquote>
            </div>
          </div>

          {/* RIGHT — Company story */}
          <div className={`lg:col-span-8 transition-all duration-1000 delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="mb-6">
              <span className="font-montserrat text-gold text-xs font-bold tracking-[0.2em]">01. ABOUT US</span>
              <div className="gold-divider" />
              <h2 className="font-montserrat font-black text-abyss leading-tight"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', letterSpacing: '-0.02em' }}>
                Industrial Retailer.<br />
                <span className="text-cerulean">Built for Ethiopia.</span>
              </h2>
            </div>

            <div className="space-y-5 font-opensans text-abyss/75 text-base leading-relaxed mb-12">
              <p>
                <strong className="text-abyss font-semibold">Adanech Gulema Building Material Shop</strong> was established in <strong className="text-cerulean">2001 E.C / 2009 G.C</strong> as an industrial retailer. The company is located in Addis Ababa, with its main location around the Jackross area.
              </p>
              <p>
                We import and distribute <strong className="text-abyss font-semibold">ISO standard construction materials</strong> such as ceramic tiles, porcelain, bathroom accessories, faucets, toilet sinks with full accessories, sanitary wares, and plumbing materials.
              </p>
              <p>
                Our plumbing range includes pipes and fittings of <strong className="text-cerulean font-semibold">PVC, PPR, UPVC, HDPE, and GS</strong> in different sizes and brands — sourced from international markets to meet the highest quality standards.
              </p>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map(({ icon: Icon, val, label, sub }, i) => (
                <div
                  key={val}
                  className={`group border border-abyss/10 bg-white p-5 hover:bg-abyss transition-all duration-400 cursor-default shadow-sm hover:shadow-xl transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${0.4 + i * 0.1}s` }}
                >
                  <Icon size={20} className="text-gold mb-3 group-hover:scale-110 transition-transform" />
                  <div className="font-montserrat font-black text-abyss group-hover:text-gold text-2xl leading-none transition-colors">{val}</div>
                  <div className="font-montserrat font-bold text-abyss group-hover:text-white text-xs mt-1 transition-colors">{label}</div>
                  <div className="font-opensans text-abyss/50 group-hover:text-white/50 text-xs mt-0.5 transition-colors">{sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}