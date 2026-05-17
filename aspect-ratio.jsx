import { useEffect, useRef, useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';

const branches = [
  {
    name: 'Jackross Branch (Main)',
    address: 'Jackross EBM Building, Ground Floor, Addis Ababa',
    phones: ['0911 36 32 60', '0930 00 03 06', '0979 23 23 23'],
    badge: 'MAIN',
  },
];

export default function Contact() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', phone: '', message: '' });
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="contact" ref={sectionRef}
      style={{ background: 'linear-gradient(160deg, #0a1d4e 0%, #0D2563 50%, #1A3A8F 100%)' }}
      className="blueprint-overlay">

      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-24 lg:py-32">
        {/* Header */}
        <div className={`mb-16 text-center transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="font-montserrat text-gold text-xs font-bold tracking-[0.2em]">05. CONTACT US</span>
          <div className="gold-divider mx-auto" />
          <h2 className="font-montserrat font-black text-white leading-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', letterSpacing: '-0.02em' }}>
            Secure Your <span className="text-gold">Materials.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* LEFT — Contact info */}
          <div className={`transition-all duration-1000 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <h3 className="font-montserrat font-bold text-white text-xl mb-8">Find Us</h3>

            {/* Branches */}
            <div className="space-y-8">
              {branches.map((branch) => (
                <div key={branch.name} className="border border-white/10 p-6 hover:border-gold/30 transition-colors group">
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="font-montserrat font-bold text-white text-sm">{branch.name}</h4>
                    <span className="font-montserrat font-bold text-abyss bg-gold text-xs px-2 py-0.5">{branch.badge}</span>
                  </div>

                  <div className="flex items-start gap-3 mb-4">
                    <MapPin size={14} className="text-gold mt-1 flex-shrink-0" />
                    <span className="font-opensans text-white/60 text-sm">{branch.address}</span>
                  </div>

                  <div className="space-y-2">
                    {branch.phones.map((p) => (
                      <a key={p} href={`tel:${p.replace(/\s/g, '')}`}
                        className="flex items-center gap-3 group/phone">
                        <Phone size={14} className="text-gold flex-shrink-0" />
                        <span className="font-montserrat font-semibold text-white/80 group-hover/phone:text-gold transition-colors text-sm tracking-wide">
                          {p}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Email */}
            <div className="mt-6 border border-white/10 p-6 hover:border-gold/30 transition-colors">
              <div className="flex items-center gap-3">
                <Mail size={14} className="text-gold flex-shrink-0" />
                <a href="mailto:adiye2005@Yahoo.com"
                  className="font-opensans text-white/70 hover:text-gold transition-colors text-sm">
                  adiye2005@Yahoo.com
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT — Requisition form */}
          <div className={`transition-all duration-1000 delay-300 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="border border-white/10 p-8 lg:p-10 relative">
              {/* Form header */}
              <div className="mb-8">
                <div className="font-montserrat text-gold text-xs font-bold tracking-[0.2em] mb-2">MATERIAL REQUISITION ORDER</div>
                <p className="font-opensans text-white/50 text-sm">Fill in your details below and our team will respond within 24 hours.</p>
              </div>

              {sent ? (
                <div className="flex flex-col items-center justify-center py-16 gap-4">
                  <CheckCircle size={48} className="text-gold" />
                  <div className="font-montserrat font-bold text-white text-lg">Message Received</div>
                  <p className="font-opensans text-white/50 text-sm text-center">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Name */}
                  <div>
                    <label className="font-montserrat font-bold text-white/50 text-xs tracking-widest block mb-2">FULL NAME *</label>
                    <input
                      className="requisition-input"
                      placeholder="Enter your name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="font-montserrat font-bold text-white/50 text-xs tracking-widest block mb-2">PHONE NUMBER *</label>
                    <input
                      className="requisition-input"
                      placeholder="09XX XXX XXX"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      required
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="font-montserrat font-bold text-white/50 text-xs tracking-widest block mb-2">YOUR MESSAGE *</label>
                    <textarea
                      className="requisition-input resize-none"
                      rows={4}
                      placeholder="Describe the materials you need..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      required
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="magnetic-btn w-full bg-gold text-abyss font-montserrat font-black text-sm tracking-widest py-5 flex items-center justify-center gap-3 hover:shadow-2xl group"
                  >
                    <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                    SECURE YOUR MATERIALS
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}