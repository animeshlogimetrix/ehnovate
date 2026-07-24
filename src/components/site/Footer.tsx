import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Linkedin, Twitter, Github } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/5 bg-[color:var(--ink)] text-white overflow-hidden">
      {/* Background Layers */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,color-mix(in_oklab,var(--brand-blue)_15%,transparent),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 opacity-20 mesh-bg pointer-events-none" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          <div className="lg:col-span-2">
            <div className="inline-flex items-center gap-2 rounded-xl bg-white/5 p-3 backdrop-blur-md border border-white/10 shadow-[0_0_30px_-10px_var(--brand-blue)]">
              <Logo className="h-10 w-auto" />
            </div>
            <p className="mt-6 max-w-md text-base text-white/60 leading-relaxed font-light">
              Engineering intelligent AI, security & enterprise systems that help
              institutions see faster, decide sooner, and act with confidence.
            </p>
            <div className="mt-8 flex gap-3">
              {[Linkedin, Twitter, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_15px_-3px_var(--brand-blue)] transition-all duration-300 group"
                  aria-label="Social link"
                >
                  <Icon className="h-4 w-4 text-white/70 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold text-white tracking-wider uppercase mb-6 opacity-90">Platform</div>
            <ul className="space-y-3 text-sm text-white/60">
              {[
                ["/about", "About Us"],
                ["/products", "Our Products"],
                ["/industries", "Industries"],
                ["/technology", "Technology Core"],
                ["/achievements", "Deployments"],
                ["/roadmap", "Future Roadmap"],
                ["/contact", "Contact Sales"],
              ].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="relative inline-flex hover:text-white transition-colors duration-300 group">
                    {label}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-[color:var(--brand-blue)] to-transparent group-hover:w-full transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold text-white tracking-wider uppercase mb-6 opacity-90">Global Office</div>
            <ul className="space-y-4 text-sm text-white/60">
              <li className="flex items-start gap-3 group">
                <div className="mt-0.5 p-1.5 rounded-lg bg-white/5 border border-white/10 group-hover:border-[color:var(--brand-gold)]/50 transition-colors">
                  <MapPin className="h-4 w-4 text-[color:var(--brand-gold)]" />
                </div>
                <span className="leading-relaxed">907, New Delhi House, 27, Barakhamba Road, Connaught Place, New Delhi - 110001.</span>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="p-1.5 rounded-lg bg-white/5 border border-white/10 group-hover:border-[color:var(--brand-gold)]/50 transition-colors">
                  <Mail className="h-4 w-4 text-[color:var(--brand-gold)]" />
                </div>
                <a href="mailto:director.bdm@ehnovate.com" className="hover:text-white transition-colors">
                  director.bdm@ehnovate.com
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="p-1.5 rounded-lg bg-white/5 border border-white/10 group-hover:border-[color:var(--brand-gold)]/50 transition-colors">
                  <Phone className="h-4 w-4 text-[color:var(--brand-gold)]" />
                </div>
                <span>+91-7275600003</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <div>© {new Date().getFullYear()} Ehnovate Technologies. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
