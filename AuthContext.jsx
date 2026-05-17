import { useEffect, useState } from 'react';

export default function ConduitLine() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(pct);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed left-0 top-0 bottom-0 z-40 flex flex-col items-center pointer-events-none hidden lg:flex">
      {/* Background track */}
      <div className="absolute left-7 top-20 bottom-20 w-px bg-white/5" />
      {/* Progress fill */}
      <div
        className="absolute left-7 top-20 w-px bg-gradient-to-b from-gold/80 to-gold/20 transition-all duration-150"
        style={{ height: `calc((100% - 160px) * ${progress / 100})` }}
      />
      {/* Dot */}
      <div
        className="absolute left-5 w-5 h-5 border-2 border-gold bg-abyss rounded-full transition-all duration-150 shadow-lg"
        style={{ top: `calc(80px + (100% - 160px) * ${progress / 100} - 10px)` }}
      >
        <div className="absolute inset-1 rounded-full bg-gold" />
      </div>
    </div>
  );
}