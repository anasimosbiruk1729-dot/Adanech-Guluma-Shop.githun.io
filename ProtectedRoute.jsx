@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;900&family=Open+Sans:wght@300;400;500;600&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222 47% 11%;
    --card: 0 0% 100%;
    --card-foreground: 222 47% 11%;
    --popover: 0 0% 100%;
    --popover-foreground: 222 47% 11%;
    --primary: 224 72% 32%;
    --primary-foreground: 0 0% 98%;
    --secondary: 220 14% 96%;
    --secondary-foreground: 222 47% 11%;
    --muted: 220 14% 96%;
    --muted-foreground: 220 9% 46%;
    --accent: 44 91% 53%;
    --accent-foreground: 222 47% 11%;
    --destructive: 0 84% 60%;
    --destructive-foreground: 0 0% 98%;
    --border: 220 13% 91%;
    --input: 220 13% 91%;
    --ring: 224 72% 32%;
    --radius: 0.5rem;

    /* Brand tokens */
    --abyss: #0D2563;
    --cerulean: #1A3A8F;
    --gold: #F5C518;
    --arch-white: #F8F9FA;
  }
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  html {
    scroll-behavior: smooth;
  }
  body {
    @apply bg-background text-foreground;
    font-family: 'Open Sans', sans-serif;
    font-size: 1.125rem;
    line-height: 1.6;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    letter-spacing: -0.02em;
  }
}

/* Custom scrollbar */
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: #0D2563; }
::-webkit-scrollbar-thumb { background: #F5C518; border-radius: 3px; }

/* Conduit line */
.conduit-line {
  position: fixed;
  left: 28px;
  top: 0;
  width: 2px;
  background: linear-gradient(to bottom, transparent 0%, #F5C518 20%, #F5C518 80%, transparent 100%);
  z-index: 40;
  transition: height 0.1s linear;
  pointer-events: none;
}

/* Blueprint overlay pattern */
.blueprint-overlay {
  background-image: 
    radial-gradient(circle, rgba(245,197,24,0.06) 1px, transparent 1px),
    linear-gradient(rgba(245,197,24,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(245,197,24,0.03) 1px, transparent 1px);
  background-size: 40px 40px, 40px 40px, 40px 40px;
}

/* Hero text reveal */
@keyframes fillUp {
  from { clip-path: inset(100% 0 0 0); opacity: 0; }
  to { clip-path: inset(0% 0 0 0); opacity: 1; }
}

@keyframes fadeSlideUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes waterFill {
  0% { transform: scaleY(0); transform-origin: bottom; }
  100% { transform: scaleY(1); transform-origin: bottom; }
}

@keyframes logoReveal {
  0% { opacity: 0; transform: scale(0.8); }
  60% { opacity: 1; transform: scale(1.05); }
  100% { opacity: 1; transform: scale(1); }
}

.animate-fill-up { animation: fillUp 1.2s cubic-bezier(0.16,1,0.3,1) forwards; }
.animate-fade-slide-up { animation: fadeSlideUp 0.9s cubic-bezier(0.16,1,0.3,1) forwards; }
.animate-water-fill { animation: waterFill 1.5s cubic-bezier(0.16,1,0.3,1) forwards; }
.animate-logo-reveal { animation: logoReveal 1s cubic-bezier(0.16,1,0.3,1) forwards; }

.delay-200 { animation-delay: 0.2s; }
.delay-400 { animation-delay: 0.4s; }
.delay-600 { animation-delay: 0.6s; }
.delay-800 { animation-delay: 0.8s; }
.delay-1000 { animation-delay: 1s; }

/* Product tile hover */
.product-tile { overflow: hidden; position: relative; }
.product-tile .tile-overlay {
  transform: translateY(100%);
  transition: transform 0.5s cubic-bezier(0.16,1,0.3,1);
}
.product-tile:hover .tile-overlay { transform: translateY(0); }
.product-tile .tile-bg {
  transition: transform 0.6s cubic-bezier(0.16,1,0.3,1);
}
.product-tile:hover .tile-bg { transform: scale(1.06); }

/* Magnetic button */
.magnetic-btn {
  transition: transform 0.3s cubic-bezier(0.16,1,0.3,1), box-shadow 0.3s ease;
}
.magnetic-btn:hover {
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 20px 40px rgba(245,197,24,0.35);
}

/* Underline input style */
.requisition-input {
  background: transparent;
  border: none;
  border-bottom: 2px solid rgba(245,197,24,0.4);
  border-radius: 0;
  color: #F8F9FA;
  padding: 12px 4px;
  font-family: 'Open Sans', sans-serif;
  font-size: 1rem;
  width: 100%;
  transition: border-color 0.3s ease;
  outline: none;
}
.requisition-input:focus { border-bottom-color: #F5C518; }
.requisition-input::placeholder { color: rgba(248,249,250,0.4); }

/* Nav blueprint numbering */
.nav-number {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.6rem;
  font-weight: 700;
  color: #F5C518;
  letter-spacing: 0.1em;
  display: block;
  margin-bottom: 2px;
}

/* Section curtain reveal */
.section-reveal {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1);
}
.section-reveal.revealed {
  opacity: 1;
  transform: translateY(0);
}

/* Gold divider */
.gold-divider {
  width: 60px;
  height: 3px;
  background: #F5C518;
  display: block;
  margin: 16px 0;
}

/* Stats counter */
.stat-number {
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(2rem, 4vw, 3.5rem);
  font-weight: 900;
  color: #F5C518;
  line-height: 1;
}