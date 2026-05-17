import { useEffect, useRef, useState } from 'react';
import { Camera } from 'lucide-react';

const galleryItems = [
  {
    label: 'Main Showroom',
    sublabel: 'Jackross Branch',
    image: 'https://media.base44.com/images/public/6a0866d6db07a60e91962414/2339b4451_photo_2026-05-16_15-34-23.jpg',
  },
  {
    label: 'Store Front',
    sublabel: 'Jackross Location',
    image: 'https://media.base44.com/images/public/6a0866d6db07a60e91962414/e75712074_photo_2026-05-16_15-34-29.jpg',
  },
  {
    label: 'Sanitary Ware Display',
    sublabel: 'Full Accessories',
    image: 'https://media.base44.com/images/public/6a0866d6db07a60e91962414/c821580c3_photo_2026-05-16_15-34-34.jpg',
  },
  {
    label: 'Toilet & Basin Collection',
    sublabel: 'Premium Sanitary Ware',
    image: 'https://media.base44.com/images/public/6a0866d6db07a60e91962414/4e0a02934_photo_2026-05-16_15-34-37.jpg',
  },
  {
    label: 'Vanity & Mirror Display',
    sublabel: 'Bathroom Furniture',
    image: 'https://media.base44.com/images/public/6a0866d6db07a60e91962414/bb897f9fd_photo_2026-05-16_15-34-39.jpg',
  },
  {
    label: 'Pipe & Fittings Stock',
    sublabel: 'PVC, PPR, HDPE Range',
    image: 'https://media.base44.com/images/public/6a0866d6db07a60e91962414/4f01388f5_photo_2026-05-16_15-34-42.jpg',
  },
  {
    label: 'Accessories & Fittings',
    sublabel: 'Extensive Stock',
    image: 'https://media.base44.com/images/public/6a0866d6db07a60e91962414/89692ee10_photo_2026-05-16_15-34-44.jpg',
  },
  {
    label: 'Basin & Toilet Sets',
    sublabel: 'Complete Packages',
    image: 'https://media.base44.com/images/public/6a0866d6db07a60e91962414/253cc4ae3_photo_2026-05-16_15-34-46.jpg',
  },
  {
    label: 'Showroom Interior',
    sublabel: 'Wide Product Range',
    image: 'https://media.base44.com/images/public/6a0866d6db07a60e91962414/83c7770ba_photo_2026-05-16_15-34-48.jpg',
  },
];

export default function Gallery() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="gallery" ref={sectionRef}
      style={{ background: 'linear-gradient(180deg, #0D2563 0%, #0a1d4e 100%)' }}
      className="blueprint-overlay">

      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-24 lg:py-32">
        {/* Header */}
        <div className={`mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="font-montserrat text-gold text-xs font-bold tracking-[0.2em]">04. OUR SHOWROOM</span>
          <div className="gold-divider" />
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <h2 className="font-montserrat font-black text-white leading-tight"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', letterSpacing: '-0.02em' }}>
              Industrial Gallery.<br /><span className="text-gold">Premium Showcase.</span>
            </h2>
            <p className="font-opensans text-white/50 text-sm max-w-xs lg:text-right">
              Visit our showroom to explore our full range in person
            </p>
          </div>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-1">
          {galleryItems.map((item, i) => (
            <div
              key={i}
              className={`relative overflow-hidden group cursor-pointer transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{
                height: '280px',
                transitionDelay: `${i * 0.08}s`,
              }}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              {/* Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${item.image}')` }}
              />

              {/* Overlay */}
              <div className={`absolute inset-0 transition-opacity duration-300 ${hoveredIdx === i ? 'opacity-80' : 'opacity-50'}`}
                style={{ background: 'linear-gradient(to top, #0D2563 0%, transparent 60%)' }} />

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                <div className="font-montserrat font-bold text-white text-sm leading-tight">{item.label}</div>
                <div className="font-opensans text-gold text-xs mt-0.5">{item.sublabel}</div>
              </div>

              {/* Camera icon on hover */}
              <div className={`absolute top-4 right-4 transition-all duration-300 ${hoveredIdx === i ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
                <div className="w-8 h-8 bg-gold flex items-center justify-center">
                  <Camera size={14} className="text-abyss" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`mt-10 text-center transition-all duration-700 delay-700 ${visible ? 'opacity-100' : 'opacity-0'}`}>
          <p className="font-opensans text-white/40 text-sm mb-4">
            Visit our showrooms to experience the full collection in person
          </p>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="magnetic-btn inline-flex items-center gap-3 border border-gold/40 text-gold font-montserrat font-bold text-xs tracking-widest px-8 py-4 hover:bg-gold hover:text-abyss transition-all duration-300"
          >
            GET DIRECTIONS →
          </button>
        </div>
      </div>
    </section>
  );
}