import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Linkedin, Twitter, Github } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-border bg-[color:var(--ink)] text-white overflow-hidden">
      <div className="absolute inset-0 opacity-30 mesh-bg pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
            <div className="inline-flex items-center gap-2 rounded-xl bg-white/95 px-3 py-2">
              <Logo className="h-9 w-auto" />
            </div>
            <p className="mt-5 max-w-md text-sm text-white/70 leading-relaxed">
              Engineering intelligent AI, security & enterprise systems that help
              institutions see faster, decide sooner, and act with confidence.
            </p>
            <div className="mt-5 flex gap-2">
              {[Linkedin, Twitter, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition"
                  aria-label="Social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold text-white">Company</div>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {[
                ["/about", "About"],
                ["/products", "Products"],
                ["/industries", "Industries"],
                ["/technology", "Technology"],
                ["/achievements", "Achievements"],
                ["/roadmap", "Roadmap"],
                ["/contact", "Contact"],
              ].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="hover:text-white transition">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold text-white">Contact</div>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li className="flex gap-3">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-[color:var(--brand-gold)]" />
                <span>Pune, Maharashtra, India</span>
              </li>
              <li className="flex gap-3">
                <Mail className="h-4 w-4 mt-0.5 shrink-0 text-[color:var(--brand-gold)]" />
                <a href="mailto:hello@ehnovate.tech" className="hover:text-white">
                  hello@ehnovate.tech
                </a>
              </li>
              <li className="flex gap-3">
                <Phone className="h-4 w-4 mt-0.5 shrink-0 text-[color:var(--brand-gold)]" />
                <span>+91 000 000 0000</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-white/50">
          <div>© {new Date().getFullYear()} Ehnovate Technologies. All rights reserved.</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
