import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { 
  Brain, 
  ShieldCheck, 
  Activity, 
  Cloud, 
  Eye, 
  Server,
  Wifi
} from "lucide-react";

const modules = [
  { id: 1, title: "AI Models Online", icon: Brain, x: "20%", y: "25%", delay: 0, stats: { stat1: "14", label1: "Active", stat2: "12ms", label2: "Latency" } },
  { id: 2, title: "Enterprise Security", icon: ShieldCheck, x: "75%", y: "20%", delay: 0.2, stats: { stat1: "Level 4", label1: "Defcon", stat2: "Active", label2: "Tracking" } },
  { id: 3, title: "Live Analytics", icon: Activity, x: "80%", y: "65%", delay: 0.4, stats: { stat1: "1.2M", label1: "Events/s", stat2: "0.1%", label2: "Drop" } },
  { id: 4, title: "Cloud Native", icon: Cloud, x: "50%", y: "85%", delay: 0.6, stats: { stat1: "AWS", label1: "Primary", stat2: "Synced", label2: "Status" } },
  { id: 5, title: "Vision AI", icon: Eye, x: "20%", y: "70%", delay: 0.8, stats: { stat1: "99.9%", label1: "Accuracy", stat2: "850/s", label2: "Objects" } },
  { id: 6, title: "99.98% Uptime", icon: Server, x: "10%", y: "45%", delay: 1.0, stats: { stat1: "Global", label1: "Cluster", stat2: "Nominal", label2: "Health" } },
];

export function AIVisualization() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 100, mass: 2 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current || isMobile) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full aspect-[4/3] sm:aspect-square md:aspect-[4/3] rounded-[24px] overflow-hidden bg-[#020817] shadow-2xl border border-white/10 group [perspective:1200px]"
    >
      {/* Background Gradients & Grid */}
      <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--brand-blue)]/20 via-[#020817] to-cyan-900/20 mix-blend-screen pointer-events-none" />
      
      {/* Multiple soft radial halos (Breathing Glow) */}
      <motion.div 
        animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" 
      />
      <motion.div 
        animate={{ opacity: [0.1, 0.4, 0.1], scale: [0.9, 1.2, 0.9] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-[color:var(--brand-blue)]/10 blur-[80px] rounded-full pointer-events-none" 
      />
      
      {/* High-tech Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          backgroundPosition: 'center center'
        }}
      />
      
      {/* Moving grid highlights */}
      <motion.div 
        animate={{ x: ["-100%", "100%"], opacity: [0, 0.2, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent pointer-events-none mix-blend-screen" 
      />

      {/* Rotating Circular Rings */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 w-[60%] h-[60%] -translate-x-1/2 -translate-y-1/2 border border-dashed border-cyan-500/20 rounded-full pointer-events-none"
      />
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 w-[80%] h-[80%] -translate-x-1/2 -translate-y-1/2 border border-dotted border-[color:var(--brand-blue)]/30 rounded-full pointer-events-none"
      />

      {/* Sweeping Radar Animation */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        className="absolute top-1/2 left-1/2 w-[150%] h-[150%] -translate-x-1/2 -translate-y-1/2 origin-top-left pointer-events-none mix-blend-screen"
        style={{
          background: `conic-gradient(from 0deg, transparent 70%, rgba(6,182,212,0.05) 95%, rgba(6,182,212,0.3) 100%)`,
        }}
      />

      {/* Animated Scanning Line */}
      <motion.div 
        animate={{ y: ["-10%", "110%"] }}
        transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
        className="absolute top-0 left-0 right-0 h-1 bg-cyan-400/20 shadow-[0_0_20px_rgba(6,182,212,0.5)] pointer-events-none z-0"
      >
        <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-t from-transparent to-cyan-400/10 pointer-events-none" />
      </motion.div>

      {/* 3D Transform Layer */}
      <motion.div 
        style={{ rotateX: isMobile ? 0 : rotateX, rotateY: isMobile ? 0 : rotateY, transformStyle: "preserve-3d" }}
        className="absolute inset-0 w-full h-full"
      >
        {/* Data connecting SVG lines (Background Z) */}
        <svg className="absolute inset-0 w-full h-full [transform:translateZ(-30px)] pointer-events-none">
          {modules.map((mod, i) => (
            <React.Fragment key={`conn-${i}`}>
              <line
                x1={mod.x}
                y1={mod.y}
                x2="50%"
                y2="50%"
                stroke="rgba(6,182,212,0.1)"
                strokeWidth="2"
                strokeDasharray="4 4"
              />
              {/* High-speed data packet line */}
              <motion.line
                x1={mod.x}
                y1={mod.y}
                x2="50%"
                y2="50%"
                stroke="rgba(6,182,212,0.8)"
                strokeWidth="2"
                strokeDasharray="15 60"
                animate={{ strokeDashoffset: [75, 0] }}
                transition={{ repeat: Infinity, duration: 1.2, ease: "linear", delay: mod.delay }}
                style={{ filter: "drop-shadow(0 0 6px rgba(6,182,212,0.8))" }}
              />
            </React.Fragment>
          ))}
        </svg>

        {/* Central Core Node (Mid Z) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 [transform:translateZ(40px)]">
          {/* Outer Ripple */}
          <motion.div 
            animate={{ scale: [1, 2.5], opacity: [0.5, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeOut" }}
            className="absolute inset-0 rounded-full border-2 border-[color:var(--brand-blue)]/30 pointer-events-none"
          />
          {/* Core Body */}
          <motion.div 
            animate={{ 
              boxShadow: ["0px 0px 20px rgba(6,182,212,0.3)", "0px 0px 80px rgba(6,182,212,0.7)", "0px 0px 20px rgba(6,182,212,0.3)"] 
            }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="w-28 h-28 rounded-full border border-cyan-400/60 bg-slate-900/90 backdrop-blur-xl flex flex-col items-center justify-center relative z-10 shadow-[inset_0_0_30px_rgba(6,182,212,0.2)]"
          >
            <Brain className="h-10 w-10 text-cyan-400 mb-1 drop-shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
            <div className="text-[9px] font-bold text-cyan-400 tracking-widest uppercase">
              OWL-AI Core
            </div>
            {/* Spinning ring inside core */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
              className="absolute inset-2 border border-dashed border-cyan-400/40 rounded-full pointer-events-none"
            />
          </motion.div>
        </div>

        {/* Floating UI Modules (High Z) */}
        {modules.map((mod) => (
          <motion.div
            key={mod.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: mod.delay, duration: 0.8 }}
            className="absolute group/card cursor-default"
            // Center the card on its coordinates and push out in Z
            style={{ 
              top: mod.y, left: mod.x, 
              transform: "translate(-50%, -50%) translateZ(70px)",
              transition: "transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
            }}
            onMouseEnter={(e) => {
              if (isMobile) return;
              e.currentTarget.style.transform = "translate(-50%, -50%) translateZ(120px)";
            }}
            onMouseLeave={(e) => {
              if (isMobile) return;
              e.currentTarget.style.transform = "translate(-50%, -50%) translateZ(70px)";
            }}
          >
            <motion.div 
              animate={{ y: [-4, 4, -4] }}
              transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", delay: mod.delay }}
              className="relative p-2.5 sm:p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-[color:var(--brand-blue)]/60 hover:bg-[color:var(--brand-blue)]/10 hover:shadow-[0_0_30px_rgba(37,99,235,0.3)] transition-all duration-300 w-32 sm:w-48 overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="h-6 w-6 sm:h-8 sm:w-8 rounded-lg bg-[color:var(--brand-blue)]/15 border border-[color:var(--brand-blue)]/30 flex items-center justify-center shrink-0 group-hover/card:bg-[color:var(--brand-blue)]/30 group-hover/card:scale-110 transition-all duration-300 shadow-[0_0_10px_rgba(37,99,235,0.2)]">
                  <mod.icon className="h-3 w-3 sm:h-4 sm:w-4 text-cyan-400" />
                </div>
                <div className="overflow-hidden">
                  <div className="text-[9px] sm:text-[11px] font-bold text-white uppercase tracking-wider truncate group-hover/card:text-cyan-300 transition-colors">{mod.title}</div>
                  <div className="text-[7.5px] sm:text-[9px] text-cyan-400/80 font-mono flex items-center gap-1.5 mt-0.5">
                    <span className="relative flex h-1 w-1 sm:h-1.5 sm:w-1.5">
                      <span className="absolute inset-0 animate-ping rounded-full bg-cyan-400 opacity-75"></span>
                      <span className="relative inline-flex h-1 w-1 sm:h-1.5 sm:w-1.5 rounded-full bg-cyan-500"></span>
                    </span>
                    Syncing...
                  </div>
                </div>
              </div>

              {/* Expandable Live Stats on Hover */}
              <div className="mt-0 h-0 opacity-0 group-hover/card:mt-2.5 sm:group-hover/card:mt-3 group-hover/card:h-auto group-hover/card:opacity-100 transition-all duration-300 ease-in-out flex justify-between border-t border-white/10 pt-2 sm:pt-3">
                <div>
                  <div className="text-white font-mono text-[9px] sm:text-[10px] font-bold">{mod.stats.stat1}</div>
                  <div className="text-cyan-400/60 text-[7px] sm:text-[8px] uppercase tracking-widest">{mod.stats.label1}</div>
                </div>
                <div className="text-right">
                  <div className="text-white font-mono text-[9px] sm:text-[10px] font-bold">{mod.stats.stat2}</div>
                  <div className="text-cyan-400/60 text-[7px] sm:text-[8px] uppercase tracking-widest">{mod.stats.label2}</div>
                </div>
              </div>
              
              <div className="absolute -inset-0.5 rounded-xl border border-cyan-400/0 group-hover/card:border-cyan-400/50 transition-colors duration-500 pointer-events-none" />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Foreground UI overlays */}
      <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[24px] pointer-events-none" />
      
      {/* Top Left System Info */}
      <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex flex-col gap-1 pointer-events-none">
        <div className="text-[8px] sm:text-[10px] font-mono text-cyan-400/50 flex items-center gap-1.5 sm:gap-2">
          <Wifi className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
          SYS_ID: OWL-009A
        </div>
        <div className="text-[8px] sm:text-[10px] font-mono text-cyan-400/50 pl-4 sm:pl-5">UPTIME: 99.98%</div>
      </div>

      {/* Top Right Data Activity Bars */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 flex gap-0.5 sm:gap-1 opacity-50 pointer-events-none items-end h-4 sm:h-6">
        <div className="w-1 sm:w-1.5 bg-cyan-400 animate-[pulse_1s_ease-in-out_infinite]" style={{ height: '40%', animationDelay: '0ms' }} />
        <div className="w-1 sm:w-1.5 bg-cyan-400 animate-[pulse_1.2s_ease-in-out_infinite]" style={{ height: '80%', animationDelay: '150ms' }} />
        <div className="w-1 sm:w-1.5 bg-cyan-400 animate-[pulse_0.8s_ease-in-out_infinite]" style={{ height: '30%', animationDelay: '300ms' }} />
        <div className="w-1 sm:w-1.5 bg-cyan-400 animate-[pulse_1.5s_ease-in-out_infinite]" style={{ height: '100%', animationDelay: '450ms' }} />
        <div className="w-1 sm:w-1.5 bg-cyan-400 animate-[pulse_1.1s_ease-in-out_infinite]" style={{ height: '60%', animationDelay: '600ms' }} />
      </div>

      {/* Bottom Status Bar */}
      <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-3 pointer-events-none">
        <div className="inline-flex items-center gap-2 sm:gap-2.5 bg-slate-950/90 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-[color:var(--brand-blue)]/30 shadow-[0_0_20px_rgba(37,99,235,0.2)]">
          <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
            <span className="absolute inset-0 animate-ping rounded-full bg-[color:var(--brand-blue)] opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-[color:var(--brand-blue)] shadow-[0_0_8px_rgba(37,99,235,1)]" />
          </span>
          <span className="text-[8px] sm:text-[10px] font-bold uppercase tracking-widest text-cyan-400">
            Enterprise Active
          </span>
        </div>
        
        <div className="flex flex-col items-end sm:items-end bg-slate-950/60 backdrop-blur-sm px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg border border-white/5 ml-auto sm:ml-0">
          <div className="text-[10px] sm:text-xs font-bold text-white mb-0.5">1.2M / sec</div>
          <div className="text-[7.5px] sm:text-[9px] font-mono text-cyan-400/60 uppercase">Data Throughput</div>
        </div>
      </div>
    </div>
  );
}
