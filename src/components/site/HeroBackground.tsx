import React, { useRef } from "react";
import { motion, useTransform, useMotionValue, useSpring } from "framer-motion";

export function HeroBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 50, stiffness: 100, mass: 1 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x * 10);
    mouseY.set(y * 10);
  };

  // Very subtle mouse parallax (max 10px)
  const parallaxFrontX = useTransform(smoothMouseX, [-50, 50], [10, -10]);
  const parallaxFrontY = useTransform(smoothMouseY, [-50, 50], [10, -10]);
  
  const parallaxMidX = useTransform(smoothMouseX, [-50, 50], [6, -6]);
  const parallaxMidY = useTransform(smoothMouseY, [-50, 50], [6, -6]);
  
  const parallaxBackX = useTransform(smoothMouseX, [-50, 50], [3, -3]);
  const parallaxBackY = useTransform(smoothMouseY, [-50, 50], [3, -3]);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{
        background: 'radial-gradient(circle at 50% 50%, #FFFFFF 0%, #F7FAFF 50%, #EEF5FF 100%)'
      }}
    >
      {/* --- UNDER-DASHBOARD GLOW --- */}
      <motion.div style={{ x: parallaxBackX, y: parallaxBackY }} className="absolute inset-0">
        <div className="absolute top-[40%] right-[10%] w-[600px] h-[600px] bg-cyan-400/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-[30%] right-[5%] w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      </motion.div>

      {/* --- LEFT SIDE: Huge Wireframe Sphere (35% width, 6-8% opacity, 20s rotation) --- */}
      <motion.div 
        style={{ x: parallaxBackX, y: parallaxBackY }}
        className="absolute -top-[10%] -left-[10%] w-[45vw] h-[45vw] min-w-[600px] min-h-[600px] opacity-[0.15] pointer-events-none mix-blend-multiply flex items-center justify-center"
      >
        <motion.svg 
          viewBox="0 0 100 100" 
          className="w-full h-full text-blue-800"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
           {/* Detailed wireframe globe simulation */}
           {Array.from({ length: 24 }).map((_, i) => (
             <ellipse key={`v-${i}`} cx="50" cy="50" rx={50 - i * 2} ry="50" fill="none" stroke="currentColor" strokeWidth="0.1" strokeDasharray="0.5 1" />
           ))}
           {Array.from({ length: 24 }).map((_, i) => (
             <ellipse key={`h-${i}`} cx="50" cy="50" rx="50" ry={50 - i * 2} fill="none" stroke="currentColor" strokeWidth="0.1" strokeDasharray="0.5 1" />
           ))}
        </motion.svg>
      </motion.div>

      {/* --- NEURAL NETWORK (Connecting OWL-AI to Globe) --- */}
      <motion.div style={{ x: parallaxBackX, y: parallaxBackY }} className="absolute inset-0 opacity-[0.2]">
        <svg className="w-full h-full text-blue-600" xmlns="http://www.w3.org/2000/svg">
          {/* Sweeping connection curves from right (OWL-AI) to left (Globe) */}
          <path d="M85% 60% Q 50% 80% 15% 40%" fill="none" stroke="url(#netGradient)" strokeWidth="1" />
          <path d="M85% 40% Q 55% 10% 10% 45%" fill="none" stroke="url(#netGradient)" strokeWidth="0.5" />
          <path d="M80% 50% Q 40% 50% 15% 55%" fill="none" stroke="url(#netGradient)" strokeWidth="1.5" />
          <path d="M90% 70% Q 60% 90% 25% 60%" fill="none" stroke="url(#netGradient)" strokeWidth="0.5" />
          
          {/* Intersection nodes on the paths */}
          <circle cx="50%" cy="65%" r="3" fill="currentColor" className="animate-pulse" />
          <circle cx="65%" cy="33%" r="2" fill="currentColor" className="animate-pulse" />
          <circle cx="40%" cy="50%" r="4" fill="currentColor" className="animate-pulse" />
          <circle cx="25%" cy="60%" r="3" fill="currentColor" className="animate-pulse" />
          
          <defs>
            {/* Gradient that fades from solid blue at the OWL-AI end to transparent at the globe end */}
            <linearGradient id="netGradient" x1="100%" y1="0%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="currentColor" stopOpacity="0.8" />
              <stop offset="100%" stopColor="currentColor" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* --- BOTTOM: FLOWING AI WAVES --- */}
      <motion.div style={{ x: parallaxBackX, y: parallaxBackY }} className="absolute bottom-0 left-0 right-0 h-[40%] opacity-[0.1] pointer-events-none">
        <svg viewBox="0 0 1440 320" className="absolute bottom-0 w-full h-full" preserveAspectRatio="none">
          <motion.path 
            fill="#1D4ED8" 
            fillOpacity="1" 
            d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            animate={{ d: [
              "M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
              "M0,160L48,181.3C96,203,192,245,288,234.7C384,224,480,160,576,149.3C672,139,768,181,864,197.3C960,213,1056,203,1152,181.3C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
              "M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ]}}
            transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
          />
        </svg>
        <svg viewBox="0 0 1440 320" className="absolute bottom-0 w-full h-full opacity-50" preserveAspectRatio="none">
          <motion.path 
            fill="#06B6D4" 
            fillOpacity="1" 
            d="M0,256L48,229.3C96,203,192,149,288,154.7C384,160,480,224,576,218.7C672,213,768,139,864,128C960,117,1056,171,1152,197.3C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            animate={{ d: [
              "M0,256L48,229.3C96,203,192,149,288,154.7C384,160,480,224,576,218.7C672,213,768,139,864,128C960,117,1056,171,1152,197.3C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
              "M0,224L48,213.3C96,203,192,181,288,197.3C384,213,480,267,576,261.3C672,256,768,192,864,176C960,160,1056,192,1152,192C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
              "M0,256L48,229.3C96,203,192,149,288,154.7C384,160,480,224,576,218.7C672,213,768,139,864,128C960,117,1056,171,1152,197.3C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ]}}
            transition={{ repeat: Infinity, duration: 25, ease: "easeInOut", delay: 2 }}
          />
        </svg>
      </motion.div>

      {/* --- TECH GRID / BACKGROUND ACCENTS --- */}
      <motion.div style={{ x: parallaxBackX, y: parallaxBackY }} className="absolute inset-0 opacity-[0.5]">
        {/* Faint circles on right */}
        <div className="absolute top-[5%] right-[2%] w-[800px] h-[800px] border border-blue-200/40 rounded-full" />
        <div className="absolute top-[10%] right-[5%] w-[700px] h-[700px] border border-blue-200/30 rounded-full" />
        <div className="absolute top-[15%] right-[10%] w-[600px] h-[600px] border border-dashed border-blue-300/40 rounded-full animate-[spin_120s_linear_infinite]" />
        
        {/* Abstract AI Data Hexagons behind OWL-AI section on the right */}
        <div className="absolute top-[30%] right-[8%] opacity-30 flex gap-4">
           {Array.from({ length: 5 }).map((_, i) => (
             <motion.div 
               key={`hex-${i}`}
               animate={{ y: [0, -10, 0], opacity: [0.3, 0.7, 0.3] }}
               transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
               className="w-12 h-14 border border-blue-400/50 flex items-center justify-center"
               style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
             >
               <div className="w-1 h-1 bg-blue-500 rounded-full" />
             </motion.div>
           ))}
        </div>
        
        {/* Subtle vertical data processing bars on the right */}
        <div className="absolute bottom-[20%] right-[12%] opacity-40 flex items-end gap-2 h-[100px]">
           {Array.from({ length: 8 }).map((_, i) => (
             <motion.div 
               key={`bar-${i}`}
               animate={{ height: ["20%", "100%", "20%"] }}
               transition={{ duration: 2 + i * 0.5, repeat: Infinity, ease: "easeInOut", times: [0, 0.5, 1] }}
               className="w-[2px] bg-blue-400/50"
             />
           ))}
        </div>
        
        {/* Targeting Brackets */}
        <div className="absolute top-[18%] right-[5%] w-8 h-8 border-t-2 border-r-2 border-blue-400/40" />
        <div className="absolute top-[18%] right-[5%] w-8 h-8 border-b-2 border-l-2 border-blue-400/40 translate-x-12 translate-y-12" />
        <div className="absolute bottom-[10%] left-[45%] w-6 h-6 border-t-2 border-l-2 border-blue-400/40" />
        <div className="absolute bottom-[10%] left-[45%] w-6 h-6 border-b-2 border-r-2 border-blue-400/40 translate-x-8 translate-y-8" />
        
        {/* Connecting Lines */}
        <div className="absolute top-[15%] left-[50%] w-[20%] h-[1px] bg-gradient-to-r from-blue-300/50 to-transparent" />
        <div className="absolute top-[15%] right-[15%] w-[15%] h-[1px] bg-gradient-to-l from-blue-300/50 to-transparent" />
        <div className="absolute bottom-[8%] left-[25%] w-[10%] h-[1px] bg-gradient-to-l from-blue-300/50 to-transparent" />
        <div className="absolute top-[20%] left-[30%] w-[1px] h-[40%] bg-gradient-to-b from-transparent via-blue-300/30 to-transparent" />

        {/* Scattered Geometrics */}
        <div className="absolute top-[30%] left-[25%] text-blue-400/60 font-mono text-sm">+</div>
        <div className="absolute top-[15%] right-[20%] text-blue-400/60 font-mono text-sm">+</div>
        <div className="absolute bottom-[20%] right-[30%] text-blue-400/60 font-mono text-sm">+</div>
        <div className="absolute top-[40%] right-[5%] w-2 h-2 border border-blue-400/60" />
        <div className="absolute bottom-[35%] left-[20%] w-2 h-2 border border-blue-400/60" />
        <div className="absolute top-[25%] left-[45%] w-1.5 h-1.5 bg-blue-400/60" />
        <div className="absolute bottom-[10%] right-[45%] w-1.5 h-1.5 bg-blue-400/60 rounded-full" />
      </motion.div>

      {/* --- DECORATIONS (Opacity < 15%) --- */}
      <motion.div style={{ x: parallaxMidX, y: parallaxMidY }} className="absolute inset-0 opacity-[0.12]">
        {/* Radar Rings */}
        <div className="absolute top-[10%] right-[10%] w-[300px] h-[300px] border border-blue-500 rounded-full" />
        <div className="absolute top-[10%] right-[10%] w-[400px] h-[400px] border border-blue-500 rounded-full" />
        
        {/* Tiny outlined circles */}
        <div className="absolute top-[20%] left-[40%] w-3 h-3 border border-blue-600 rounded-full" />
        <div className="absolute bottom-[30%] right-[40%] w-4 h-4 border border-blue-600 rounded-full" />
        
        {/* Small blue squares */}
        <div className="absolute top-[15%] left-[50%] w-2 h-2 bg-blue-600" />
        <div className="absolute bottom-[10%] left-[20%] w-2 h-2 bg-blue-600" />
        
        {/* Small yellow squares */}
        <div className="absolute top-[25%] right-[25%] w-2 h-2 bg-yellow-400" />
        <div className="absolute bottom-[40%] left-[5%] w-2 h-2 bg-yellow-400" />
        
        {/* Corner brackets */}
        <div className="absolute top-[5%] right-[5%] w-6 h-6 border-t border-r border-blue-600" />
        <div className="absolute bottom-[5%] left-[5%] w-6 h-6 border-b border-l border-blue-600" />
        
        {/* Dotted matrix blocks */}
        <div className="absolute top-[35%] left-[3%] text-[6px] text-blue-600 font-mono tracking-[0.3em] leading-tight">
          . . . . .<br/>
          . . . . .<br/>
          . . . . .
        </div>
        <div className="absolute bottom-[20%] right-[3%] text-[6px] text-blue-600 font-mono tracking-[0.3em] leading-tight">
          . . . . .<br/>
          . . . . .<br/>
          . . . . .
        </div>

        {/* Tiny glowing particles drifting */}
        <motion.div 
          animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[40%] right-[20%] w-1 h-1 bg-white rounded-full shadow-[0_0_5px_rgba(255,255,255,1)]"
        />
        <motion.div 
          animate={{ x: [0, -30, 0], y: [0, 15, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[30%] left-[40%] w-1 h-1 bg-white rounded-full shadow-[0_0_5px_rgba(255,255,255,1)]"
        />
      </motion.div>

      {/* --- FLOATING GLASS CARDS --- */}
      <motion.div style={{ x: parallaxFrontX, y: parallaxFrontY }} className="absolute inset-0 pointer-events-none">
        
      </motion.div>

      {/* --- REALISTIC PROTOTYPE ROBOT (Bottom Right, pointing at OWL-AI) --- */}
      <motion.div 
        style={{ x: parallaxFrontX, y: parallaxFrontY }} 
        className="absolute bottom-[-10%] right-[-5%] w-[450px] lg:w-[550px] h-auto pointer-events-none mix-blend-multiply opacity-100 z-[50]"
      >
        <motion.img 
          src="/assets/images/robot.png" 
          alt="AI Robot Prototype"
          className="w-auto h-full object-contain origin-bottom-right"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Invisible interactive area for mouse tracking to bubble up safely */}
      <div 
        className="absolute inset-0 w-full h-full pointer-events-auto" 
        onMouseMove={handleMouseMove}
        onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
        style={{ zIndex: -1 }}
      />
    </div>
  );
}

