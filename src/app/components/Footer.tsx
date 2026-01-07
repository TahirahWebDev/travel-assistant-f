"use client";
import Link from "next/link";
import { Trees } from "lucide-react";

export default function Footer() {
  return (
    /* Background remains Deep Timber #052c22 for the theme */
    <footer className="w-full bg-[#052c22] text-emerald-100/80 py-16 border-t border-emerald-900">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Footer Row: Distributed horizontally to use the screen width */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          
          {/* Brand Column (Left) */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <div className="size-10 bg-emerald-800 rounded-xl flex items-center justify-center border border-emerald-700 shadow-lg">
                <Trees className="size-6 text-emerald-300" />
              </div>
              <h2 className="text-2xl font-black text-white tracking-tighter italic">
                Al-TraWell
              </h2>
            </div>
            {/* Normal sized text (text-base) for readability */}
            <p className="text-base text-emerald-100/50 max-w-sm leading-relaxed font-medium">
              Your smart travel companion for the modern expedition. Engineered for precision, discovery, and sustainable exploration.
            </p>
          </div>

          {/* Links Columns (Right) */}
          <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-10">
            <FooterGroup title="Expedition" links={[
              { name: "Home", href: "/" },
              { name: "About", href: "/about" },
              { name: "Plan Trip", href: "/plan" },
              { name: "AI Chat", href: "/chat" }
            ]} />
            
            <FooterGroup title="Support" links={[
              { name: "FAQ", href: "#" },
              { name: "Destinations", href: "#" },
              { name: "Safety", href: "#" },
              { name: "Contact", href: "#" }
            ]} />

            <FooterGroup title="Legal" links={[
              { name: "Privacy Policy", href: "#" },
              { name: "Terms of Service", href: "#" },
              { name: "Cookie Policy", href: "#" }
            ]} />
          </div>
        </div>

        {/* Bottom Bar: Normal spacing and readable contrast */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-16 pt-8 border-t border-emerald-900/50">
          <p className="text-sm font-bold text-emerald-900 uppercase tracking-widest">
            © {new Date().getFullYear()} AI-TraWell Expedition Engine.
          </p>
          <p className="mt-4 md:mt-0 text-sm font-bold text-emerald-800 uppercase tracking-widest flex items-center gap-2">
            Nordic Standard Intelligence <Trees className="size-4" />
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterGroup({ title, links }: { title: string, links: { name: string, href: string }[] }) {
  return (
    <div className="flex flex-col space-y-4">
      {/* Title is bold and clear */}
      <h3 className="text-xs font-black uppercase tracking-[0.2em] text-emerald-500 mb-2">
        {title}
      </h3>
      {links.map((link) => (
        <Link 
          key={link.name} 
          href={link.href} 
          /* Normal sized text (text-sm/base) with high hover contrast */
          className="text-sm font-bold text-emerald-100/60 hover:text-white transition-colors"
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
}