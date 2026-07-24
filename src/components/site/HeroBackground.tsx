import React, { useRef, useEffect, useState } from "react";
import { motion, useTransform, useMotionValue, useSpring } from "framer-motion";

export function HeroBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Use a state to determine if we're on mobile to disable heavy effects
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 50, stiffness: 400, mass: 1 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current || isMobile) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x * 10);
    mouseY.set(y * 10);
  };

  // Parallax Layering (Layer 9: Mouse Interaction)
  const layerBackX = useTransform(smoothMouseX, [-50, 50], [5, -5]);
  const layerBackY = useTransform(smoothMouseY, [-50, 50], [5, -5]);
  
  const layerMidX = useTransform(smoothMouseX, [-50, 50], [15, -15]);
  const layerMidY = useTransform(smoothMouseY, [-50, 50], [15, -15]);
  
  const layerFrontX = useTransform(smoothMouseX, [-50, 50], [25, -25]);
  const layerFrontY = useTransform(smoothMouseY, [-50, 50], [25, -25]);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 overflow-hidden pointer-events-none bg-slate-50"
    >
      {/* SVG Filters & Definitions */}
      <svg className="absolute w-0 h-0">
        <defs>
          <filter id="hero-noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/>
            <feColorMatrix type="matrix" values="1 0 0 0 0, 0 1 0 0 0, 0 0 1 0 0, 0 0 0 0.05 0" />
          </filter>
          <pattern id="hex-pattern" x="0" y="0" width="100" height="173.2" patternUnits="userSpaceOnUse">
            <path d="M50 0 L100 28.8 L100 86.6 L50 115.4 L0 86.6 L0 28.8 Z" fill="none" stroke="var(--brand-blue)" strokeWidth="1"/>
          </pattern>
        </defs>
      </svg>

      {/* --- LAYER 1: PREMIUM BACKGROUND --- */}
      <motion.div style={{ x: layerBackX, y: layerBackY }} className="absolute inset-0">
        {/* Abstract Base */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ filter: 'url(#hero-noise)' }} />
        <div className="absolute inset-0 mesh-bg opacity-30 mix-blend-multiply" />
        
        {/* Blurred Blobs */}
        <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-[color:var(--brand-blue)]/10 rounded-full blur-[120px]" />
        <div className="absolute top-[20%] left-[-10%] w-[1000px] h-[1000px] bg-cyan-400/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-20%] right-[10%] w-[1200px] h-[1200px] bg-[color:var(--brand-gold)]/5 rounded-full blur-[150px]" />
        
        {/* Blueprint Grid */}
        <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: 'linear-gradient(rgba(37,99,235,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.2) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(rgba(37,99,235,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.5) 1px, transparent 1px)', backgroundSize: '300px 300px' }} />
      </motion.div>

      {/* --- LAYER 3: LARGE BLUEPRINT GRAPHICS --- */}
      <motion.div style={{ x: layerBackX, y: layerBackY }} className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
        {/* Hex Grid Background */}
        <svg viewBox="0 0 1000 1000" className="absolute w-[150%] h-[150%] -rotate-12">
          <rect x="0" y="0" width="1000" height="1000" fill="url(#hex-pattern)" />
        </svg>
      </motion.div>

      {/* --- LAYER 2: AI ARCHITECTURE --- */}
      {/* Positioned on the right side behind dashboard */}
      <motion.div 
        style={{ x: layerBackX, y: layerBackY }}
        className="absolute top-[10%] right-[-10%] w-[1200px] h-[1200px] opacity-[0.08] pointer-events-none flex items-center justify-center mix-blend-multiply"
      >
        <motion.svg viewBox="0 0 1000 1000" className="w-full h-full" animate={{ rotate: 360 }} transition={{ duration: 180, repeat: Infinity, ease: "linear" }}>
          {/* Concentric Tech Rings */}
          <circle cx="500" cy="500" r="400" fill="none" stroke="var(--brand-blue)" strokeWidth="2" strokeDasharray="10 30" />
          <circle cx="500" cy="500" r="300" fill="none" stroke="cyan" strokeWidth="1" strokeDasharray="5 15" />
          <circle cx="500" cy="500" r="450" fill="none" stroke="var(--brand-blue)" strokeWidth="0.5" />
          {/* Engineering Lines & Nodes */}
          {Array.from({length: 12}).map((_, i) => (
             <g key={`arch-node-${i}`} transform={`rotate(${i*30} 500 500)`}>
               <line x1="500" y1="100" x2="500" y2="50" stroke="var(--brand-blue)" strokeWidth="1" />
               <circle cx="500" cy="50" r="4" fill="var(--brand-blue)" />
             </g>
          ))}
        </motion.svg>
        {/* Counter Rotating Ring */}
        <motion.svg viewBox="0 0 1000 1000" className="absolute inset-0 w-full h-full" animate={{ rotate: -360 }} transition={{ duration: 240, repeat: Infinity, ease: "linear" }}>
           <circle cx="500" cy="500" r="350" fill="none" stroke="cyan" strokeWidth="1" strokeDasharray="1 10" />
           <circle cx="500" cy="500" r="380" fill="none" stroke="var(--brand-blue)" strokeWidth="4" strokeDasharray="100 200" />
        </motion.svg>
      </motion.div>

      {/* --- LAYER 4: DYNAMIC LIGHT --- */}
      <motion.div style={{ x: layerMidX, y: layerMidY }} className="absolute inset-0 mix-blend-screen pointer-events-none">
        {/* Soft Diagonal Light Beams */}
        <div className="absolute top-0 right-[20%] w-[800px] h-[200%] bg-gradient-to-b from-cyan-400/5 to-transparent rotate-[-45deg] origin-top opacity-50" />
        <div className="absolute top-0 right-[40%] w-[400px] h-[200%] bg-gradient-to-b from-[color:var(--brand-blue)]/5 to-transparent rotate-[-45deg] origin-top opacity-30" />
        
        {/* Radial Glows specific to layout */}
        <div className="absolute top-[20%] left-[10%] w-[600px] h-[600px] bg-cyan-400/10 rounded-full blur-[100px]" />
        <div className="absolute top-[30%] right-[10%] w-[800px] h-[800px] bg-[color:var(--brand-blue)]/10 rounded-full blur-[150px]" />
      </motion.div>

      {/* --- LEFT SIDE: ENHANCED DIGITAL GLOBE --- */}
      <motion.div 
        style={{ x: layerBackX, y: layerBackY }}
        className="absolute -top-[5%] -left-[10%] w-[45vw] h-[45vw] min-w-[600px] min-h-[600px] opacity-40 mix-blend-multiply flex items-center justify-center pointer-events-none"
      >
        {/* Soft Outer Glow */}
        <div className="absolute inset-0 bg-cyan-400/5 rounded-full blur-[80px]" />
        
        {/* Core SVG Sphere */}
        <motion.svg 
          viewBox="0 0 100 100" 
          className="absolute inset-0 w-full h-full text-[color:var(--brand-blue)]"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
           {/* Latitude Lines */}
           {Array.from({ length: 12 }).map((_, i) => (
             <ellipse key={`v-${i}`} cx="50" cy="50" rx={48 - i * 4} ry="48" fill="none" stroke="currentColor" strokeWidth="0.1" strokeDasharray="1 3" opacity={0.6} />
           ))}
           {/* Longitude Lines */}
           {Array.from({ length: 12 }).map((_, i) => (
             <ellipse key={`h-${i}`} cx="50" cy="50" rx="48" ry={48 - i * 4} fill="none" stroke="currentColor" strokeWidth="0.1" strokeDasharray="1 3" opacity={0.6} />
           ))}
           
           {/* Travelling Light Pulses */}
           <motion.circle 
             cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.2" 
             strokeDasharray="20 200"
             animate={{ strokeDashoffset: [220, 0] }}
             transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
           />
           <motion.ellipse 
             cx="50" cy="50" rx="24" ry="48" fill="none" stroke="currentColor" strokeWidth="0.2" 
             strokeDasharray="15 150"
             animate={{ strokeDashoffset: [165, 0] }}
             transition={{ duration: 6, repeat: Infinity, ease: "linear", delay: 1 }}
           />
        </motion.svg>
        
        {/* Orbiting Network Nodes */}
        <motion.div 
          className="absolute inset-0"
          animate={{ rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <div 
              key={`node-${i}`} 
              className="absolute w-1.5 h-1.5 bg-cyan-500 rounded-full shadow-[0_0_8px_2px_rgba(6,182,212,0.5)]"
              style={{
                top: `${50 + 48 * Math.sin((i * 60 * Math.PI) / 180)}%`,
                left: `${50 + 48 * Math.cos((i * 60 * Math.PI) / 180)}%`,
                transform: 'translate(-50%, -50%)'
              }}
            >
              <div className="absolute inset-0 rounded-full animate-ping bg-cyan-400 opacity-50" style={{ animationDuration: `${2 + i * 0.5}s` }} />
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* --- LAYER 5: AMBIENT PARTICLES --- */}
      <motion.div style={{ x: layerMidX, y: layerMidY }} className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className={`absolute ${i % 3 === 0 ? 'w-1 h-1 bg-cyan-400 rounded-full' : i % 3 === 1 ? 'text-[8px] font-mono text-[color:var(--brand-blue)]/40' : 'w-1.5 h-1.5 border border-[color:var(--brand-blue)]/30'}`}
            style={{ 
              top: `${Math.random() * 100}%`, 
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.1
            }}
            animate={{ 
              y: [0, Math.random() * -100 - 50],
              x: [0, (Math.random() - 0.5) * 50],
              opacity: [0, 0.8, 0]
            }}
            transition={{ 
              duration: 10 + Math.random() * 15, 
              repeat: Infinity, 
              ease: "linear", 
              delay: Math.random() * 10 
            }}
          >
            {i % 3 === 1 ? (Math.random() > 0.5 ? '0' : '1') : ''}
          </motion.div>
        ))}
      </motion.div>

      {/* --- LAYER 6: DATA FLOW --- */}
      <motion.div style={{ x: layerMidX, y: layerMidY }} className="absolute inset-0 opacity-[0.8] pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <defs>
            <linearGradient id="flowGlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--brand-blue)" stopOpacity="0" />
              <stop offset="50%" stopColor="cyan" stopOpacity="0.8" />
              <stop offset="100%" stopColor="var(--brand-blue)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path id="curve1" d="M -10% 80% Q 40% 90% 70% 30% T 110% 50%" fill="none" stroke="url(#flowGlow)" strokeWidth="1" strokeDasharray="4 12" opacity="0.4" />
          <motion.circle r="2" fill="cyan" style={{ filter: "drop-shadow(0 0 5px cyan)" }}>
            <animateMotion dur="15s" repeatCount="indefinite" path="M -10% 80% Q 40% 90% 70% 30% T 110% 50%" />
          </motion.circle>
          
          <path id="curve2" d="M 10% 20% C 40% 10%, 60% 60%, 90% 80%" fill="none" stroke="url(#flowGlow)" strokeWidth="1" strokeDasharray="2 8" opacity="0.3" />
          <motion.circle r="1.5" fill="var(--brand-blue)" style={{ filter: "drop-shadow(0 0 5px var(--brand-blue))" }}>
            <animateMotion dur="12s" repeatCount="indefinite" path="M 10% 20% C 40% 10%, 60% 60%, 90% 80%" />
          </motion.circle>
        </svg>
      </motion.div>

      {/* --- LAYER 7: DECORATIVE CORNER ELEMENTS --- */}
      <div className="absolute inset-8 pointer-events-none opacity-40">
        {/* Top Left */}
        <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[color:var(--brand-blue)]" />
        <div className="absolute top-2 left-2 text-[8px] font-mono text-cyan-500 tracking-widest">SYS.01.A</div>
        <div className="absolute top-6 left-0 w-2 h-[1px] bg-cyan-500" />
        <div className="absolute top-8 left-0 w-4 h-[1px] bg-cyan-500" />
        
        {/* Top Right */}
        <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[color:var(--brand-blue)]" />
        <div className="absolute top-2 right-2 text-[8px] font-mono text-cyan-500 tracking-widest">NODE.88</div>
        <div className="absolute top-6 right-0 w-2 h-[1px] bg-cyan-500" />
        <div className="absolute top-8 right-0 w-4 h-[1px] bg-cyan-500" />
        
        {/* Bottom Left */}
        <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-[color:var(--brand-blue)]" />
        <div className="absolute bottom-2 left-2 text-[8px] font-mono text-cyan-500 tracking-widest">SEC.99.X</div>
        
        {/* Bottom Right */}
        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[color:var(--brand-blue)]" />
        <div className="absolute bottom-2 right-2 text-[8px] font-mono text-cyan-500 tracking-widest">NET.00.1</div>
      </div>

      {/* --- LAYER 8: FLOATING DEPTH OBJECTS --- */}
      <motion.div style={{ x: layerFrontX, y: layerFrontY }} className="absolute inset-0 pointer-events-none opacity-[0.15]">
        {/* Huge Glass Circle */}
        <motion.div 
          className="absolute top-[20%] left-[10%] w-[300px] h-[300px] rounded-full border-[0.5px] border-cyan-400/30 backdrop-blur-sm"
          animate={{ y: [0, -30, 0], rotate: [0, 45, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Floating Hexagon Outline */}
        <motion.svg 
          viewBox="0 0 100 100" 
          className="absolute bottom-[20%] right-[20%] w-[200px] h-[200px]"
          animate={{ y: [0, 40, 0], rotate: [0, -45, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >
          <path d="M50 0 L100 25 L100 75 L50 100 L0 75 L0 25 Z" fill="none" stroke="var(--brand-blue)" strokeWidth="0.5"/>
        </motion.svg>
        {/* Wireframe Cube */}
        <motion.svg 
          viewBox="0 0 100 100" 
          className="absolute top-[60%] left-[30%] w-[150px] h-[150px]"
          animate={{ y: [0, -50, 0], x: [0, 30, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        >
          <rect x="25" y="25" width="50" height="50" fill="none" stroke="cyan" strokeWidth="0.5" />
          <rect x="40" y="10" width="50" height="50" fill="none" stroke="cyan" strokeWidth="0.5" />
          <line x1="25" y1="25" x2="40" y2="10" stroke="cyan" strokeWidth="0.5" />
          <line x1="75" y1="25" x2="90" y2="10" stroke="cyan" strokeWidth="0.5" />
          <line x1="25" y1="75" x2="40" y2="60" stroke="cyan" strokeWidth="0.5" />
          <line x1="75" y1="75" x2="90" y2="60" stroke="cyan" strokeWidth="0.5" />
        </motion.svg>
      </motion.div>

      {/* LAYER 9: Mouse Interaction Capture */}
      <div 
        className="absolute inset-0 w-full h-full pointer-events-auto" 
        onMouseMove={handleMouseMove}
        onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
        style={{ zIndex: -1 }}
      />
    </div>
  );
}

