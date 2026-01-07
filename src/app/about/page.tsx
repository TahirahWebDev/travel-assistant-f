"use client";

import Link from "next/link";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import { Trees, Zap, Leaf, MessageCircle, Compass, ShieldCheck } from "lucide-react";

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const features = [
    {
      icon: <Trees className="w-6 h-6 text-emerald-700" />,
      title: "Sustainable Planning",
      desc: "Our AI prioritizes eco-conscious routes and local hidden gems to minimize your footprint.",
    },
    {
      icon: <Zap className="w-6 h-6 text-emerald-700" />,
      title: "Instant Intel",
      desc: "Real-time expedition data powered by Nordic-standard AI for lightning-fast itinerary drafts.",
    },
    {
      icon: <Leaf className="w-6 h-6 text-emerald-700" />,
      title: "Personalized Trails",
      desc: "Tailored itineraries that match your unique explorer profile, from solo treks to family stays.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F9FBFA] text-slate-900 pb-20 selection:bg-emerald-100">
      <Header />
      {/* 1. REFINED HEADER AREA (Fixed the 'too big' issue) */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-800 rounded-full text-[10px] font-black uppercase tracking-widest border border-emerald-100">
              <Compass className="size-3" /> Expedition Vault
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight">
              The <span className="text-emerald-700 underline decoration-emerald-100 underline-offset-8">Expedition</span> <br />
              Philosophy
            </h1>

            <p className="text-lg text-slate-500 max-w-lg font-medium leading-relaxed">
              A high-intelligence travel companion designed to reveal the heart of the journey by stripping away planning noise.
            </p>

            <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
              <ShieldCheck className="text-emerald-600 size-6" />
              <p className="text-sm font-bold text-slate-400 uppercase tracking-tighter">
                Nordic Standards of Travel Intelligence
              </p>
            </div>
          </motion.div>

          {/* Right Side: Visual Image Card (Keeps it from looking too vertical) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative hidden lg:block"
          >
            <div className="aspect-[4/3] bg-emerald-800 rounded-[48px] shadow-2xl shadow-emerald-100 overflow-hidden relative group">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80')] bg-cover opacity-20 group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Trees className="size-32 text-white/20 animate-pulse" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. MISSION SECTION (Clean & Balanced) */}
      <section className="bg-white border-y border-emerald-50 py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="bg-emerald-50 rounded-[40px] p-12 border border-emerald-100">
                <Trees className="size-16 text-emerald-800 mb-6" />
                <h2 className="text-3xl font-black text-slate-900 mb-6 tracking-tight">
                  Travel should be an act of discovery, not a logistical burden.
                </h2>
                <p className="text-slate-500 font-medium leading-relaxed italic border-l-4 border-emerald-200 pl-6">
                   "No more endless tabs. Just one intelligent path forward."
                </p>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-6">
            <h3 className="text-xl font-black uppercase tracking-[0.2em] text-emerald-700">Our Mission</h3>
            <p className="text-slate-500 text-lg leading-relaxed">
              We built <span className="text-emerald-800 font-bold italic">Al-TraWell</span> on the principle that modern technology should serve as a quiet guide. Whether you are navigating remote fjords or urban forests, our AI handles the opening hours, transit links, and booking details.
            </p>
          </div>
        </div>
      </section>

      {/* 4. CTA (High Impact) */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="bg-emerald-900 rounded-[48px] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-black text-white mb-8 tracking-tight">
              Ready to chart your course?
            </h3>
            <Link href="/chat">
              <button className="bg-white text-emerald-900 px-10 py-4 rounded-2xl font-black text-lg shadow-xl hover:bg-emerald-50 transition-all flex items-center gap-3 mx-auto">
                <MessageCircle className="w-6 h-6" />
                Open Expedition Chat
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
