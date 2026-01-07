"use client";
import { useState } from "react";
import Link from "next/link";
import { useAuth } from "../plan/PlanContext"; 
import { Trees, User, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const { isLoggedIn } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/plan", label: "Plan Trip" },
    { href: "/chat", label: "AI Chat" },
  ];

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-emerald-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        
        {/* Brand Section */}
        <Link href="/" className="flex items-center gap-3 group z-50">
          <div className="size-10 bg-emerald-800 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-100 group-hover:scale-110 transition-transform">
            <Trees className="size-6 text-emerald-300" />
          </div>
          <div className="text-2xl font-black tracking-tighter text-slate-900 italic">
            Al-TraWell
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="flex items-center gap-8">
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink key={link.href} href={link.href} label={link.label} />
            ))}
          </div>

          <div className="h-6 w-px bg-emerald-100 hidden lg:block" />

          {/* Action Button: Updated to "Sign In" */}
          <div className="hidden sm:block">
            <Link href={isLoggedIn ? "/plan" : "/login-signup"}>
              <button className="flex items-center gap-2 px-6 py-2.5 text-sm font-black uppercase tracking-widest rounded-xl bg-emerald-800 text-white shadow-xl shadow-emerald-100 hover:bg-emerald-900 transition-all active:scale-95">
                {isLoggedIn ? <><User className="size-4" /> Dashboard</> : "Sign In"}
              </button>
            </Link>
          </div>

          {/* Mobile Toggle Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden z-50 p-2 text-slate-900 hover:text-emerald-700 transition-colors"
          >
            {isOpen ? <X className="size-7" /> : <Menu className="size-7" />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-0 left-0 w-full bg-white border-b border-emerald-50 shadow-2xl lg:hidden pt-24 pb-10 px-6 z-40"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-black uppercase tracking-[0.2em] text-slate-400 hover:text-emerald-700 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <hr className="border-emerald-50" />
              <Link href={isLoggedIn ? "/plan" : "/login-signup"} onClick={() => setIsOpen(false)}>
                <button className="w-full flex items-center justify-center gap-2 px-6 py-4 text-sm font-black uppercase tracking-widest rounded-xl bg-emerald-800 text-white shadow-lg">
                  {isLoggedIn ? "Dashboard" : "Sign In"}
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      /* Increased from text-[11px] to text-sm for better readability */
      className="text-sm font-black uppercase tracking-widest text-slate-400 hover:text-emerald-700 transition-colors"
    >
      {label}
    </Link>
  );
}