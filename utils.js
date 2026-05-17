import { Phone, Mail, MapPin } from 'lucide-react';

const quickLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Why Choose Us', href: '#why-us' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer style={{ background: '#050e2b' }} className="border-t border-white/5">
      {/* Gold accent top */}
      <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="https://media.base44.com/images/public/6a0866d6db07a60e91962414/3c2374dcf_logo.jpg"
                alt="Adanech Gulema Logo"
                className="w-12 h-12 rounded-full object-cover border border-gold/30"
              />
              <div>
                <div className="font-montserrat font-black text-white text-sm">ADANECH GULEMA</div>
                <div className="font-opensans text-gold text-xs">BUILDING MATERIALS</div>
              </div>
            </div>
            <p className="font-opensans text-white/40 text-sm leading-relaxed">
              Your Trusted Source for Quality Building Materials. Est. 2001 E.C / 2009 G.C.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 border border-gold/20 px-3 py-1.5">
              <span className="font-montserrat font-bold text-gold text-xs">SINCE 2009</span>
              <span className="w-1 h-1 rounded-full bg-gold/40" />
              <span className="font-opensans text-white/30 text-xs">ISO CERTIFIED</span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-montserrat font-bold text-white text-xs tracking-widest mb-6">QUICK LINKS</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="font-opensans text-white/40 hover:text-gold text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-4 h-px bg-gold transition-all duration-300" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Jackross branch */}
          <div>
            <h4 className="font-montserrat font-bold text-white text-xs tracking-widest mb-6">JACKROSS BRANCH</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin size={14} className="text-gold mt-0.5 flex-shrink-0" />
                <span className="font-opensans text-white/40 text-sm">Jackross EBM Building, Ground Floor, Addis Ababa</span>
              </div>
              {['0911 36 32 60', '0930 00 03 06', '0979 23 23 23'].map((p) => (
                <div key={p} className="flex items-center gap-2">
                  <Phone size={14} className="text-gold flex-shrink-0" />
                  <a href={`tel:${p.replace(/\s/g,'')}`} className="font-opensans text-white/40 hover:text-gold text-sm transition-colors">{p}</a>
                </div>
              ))}
            </div>
          </div>

          {/* Email */}
          <div>
            <h4 className="font-montserrat font-bold text-white text-xs tracking-widest mb-6">CONTACT</h4>
            <div className="flex items-center gap-2">
              <Mail size={14} className="text-gold flex-shrink-0" />
              <a href="mailto:adiye2005@Yahoo.com" className="font-opensans text-white/40 hover:text-gold text-sm transition-colors break-all">
                adiye2005@Yahoo.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-opensans text-white/25 text-xs">
            © 2024 Adanech Gulema Building Material Shop. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gold/40" />
            <span className="font-montserrat text-white/20 text-xs">Addis Ababa, Ethiopia</span>
          </div>
        </div>
      </div>
    </footer>
  );
}