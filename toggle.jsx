import { useEffect, useRef, useState } from 'react';

const products = [
  {
    id: 1,
    title: 'Ceramic Tiles & Porcelain',
    specs: ['Floor & Wall Tiles', 'Imported Porcelain', 'Various Sizes', 'UAE Origin'],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    accent: '#1A3A8F',
  },
  {
    id: 2,
    title: 'Sanitary Ware',
    specs: ['Toilets & Bidets', 'Sinks & Basins', 'Urinals', 'Full Accessories'],
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=80',
    accent: '#0D2563',
  },
  {
    id: 3,
    title: 'Faucets & Mixers',
    specs: ['Chrome Faucets', 'Basin Mixers', 'Shower Systems', 'Kitchen Taps'],
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&q=80',
    accent: '#1A3A8F',
  },
  {
    id: 4,
    title: 'Pipes & Fittings',
    specs: ['PVC · PPR · UPVC', 'HDPE · GS Pipes', 'Multiple Sizes', 'Top Brands'],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80',
    accent: '#0D2563',
  },
  {
    id: 5,
    title: 'Bathroom Vanities',
    specs: ['Mirror Cabinets', 'Vanity Units', 'Towel Rails', 'Accessories'],
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=80',
    accent: '#1A3A8F',
  },
  {
    id: 6,
    title: 'Made in UAE Products',
    specs: ['Premium Import', 'ISO Certified', 'Full Range', 'Guaranteed Quality'],
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80',
    accent: '#0D2563',
  },
];

function ProductTile({ product, idx, visible }) {
  return (
    <div
      className={`product-tile relative h-80 lg:h-96 overflow-hidden cursor-pointer group transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      style={{ transitionDelay: `${idx * 0.1}s` }}
    >
      {/* Background image */}
      <div
        className="tile-bg absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${product.image}')` }}
      />
      {/* Base overlay */}
      <div className="absolute inset-0 bg-abyss/60" />

      {/* Default label */}
      <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
        <h3 className="font-montserrat font-black text-white text-xl leading-tight group-hover:opacity-0 transition-opacity duration-300">
          {product.title}
        </h3>
        <div className="w-8 h-0.5 bg-gold mt-2 group-hover:opacity-0 transition-opacity duration-300" />
      </div>

      {/* Hover overlay — slides up */}
      <div className="tile-overlay absolute inset-0 bg-gradient-to-t from-abyss via-abyss/95 to-cerulean/90 p-6 flex flex-col justify-end z-20">
        <h3 className="font-montserrat font-black text-white text-xl leading-tight mb-4">{product.title}</h3>
        <div className="w-8 h-0.5 bg-gold mb-4" />
        <ul className="space-y-1.5">
          {product.specs.map((spec) => (
            <li key={spec} className="flex items-center gap-2 font-opensans text-white/80 text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
              {spec}
            </li>
          ))}
        </ul>
        <div className="mt-5 text-gold font-montserrat font-bold text-xs tracking-widest flex items-center gap-2">
          INQUIRE NOW <span>→</span>
        </div>
      </div>
    </div>
  );
}

export default function Products() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="products" ref={sectionRef}
      style={{ background: 'linear-gradient(180deg, #0D2563 0%, #1A3A8F 100%)' }}
      className="blueprint-overlay">

      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-24 lg:py-32">
        <div className={`mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="font-montserrat text-gold text-xs font-bold tracking-[0.2em]">02. PRODUCTS & SERVICES</span>
          <div className="gold-divider" />
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <h2 className="font-montserrat font-black text-white leading-tight"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', letterSpacing: '-0.02em' }}>
              The Inventory<br /><span className="text-gold">Monolith.</span>
            </h2>
            <p className="font-opensans text-white/50 text-base max-w-xs lg:text-right">
              Industrial-grade materials. ISO certified. Built for Ethiopia's growth.
            </p>
          </div>
        </div>

        {/* Product grid — 3 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0.5 bg-white/5">
          {products.map((p, i) => (
            <ProductTile key={p.id} product={p} idx={i} visible={visible} />
          ))}
        </div>

        {/* Bottom note */}
        <div className={`mt-8 text-center transition-all duration-700 delay-700 ${visible ? 'opacity-100' : 'opacity-0'}`}>
          <p className="font-opensans text-white/40 text-sm">
            All products are ISO standard · Import-grade quality · Available at both branches
          </p>
        </div>
      </div>
    </section>
  );
}