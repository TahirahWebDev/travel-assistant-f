"use client";
import Link from "next/link";
import { useAuth } from "../plan/PlanContext";
import { motion } from "framer-motion";
import { Compass, Trees, ArrowRight } from "lucide-react";

export default function Hero() {
  const { isLoggedIn } = useAuth();

  return (
    /* Changed from bright gradients to a soft Nordic Off-White bg-[#F9FBFA] */
    <section className="min-h-[90vh] flex items-center justify-center px-6 pt-20 pb-16 bg-[#F9FBFA] relative overflow-hidden">
      
      {/* Subtle Background Elements to add depth without clutter */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        <Trees className="absolute -left-20 top-20 size-[500px] text-emerald-900" />
        <Trees className="absolute -right-20 bottom-0 size-[400px] text-emerald-900" />
      </div>

      <div className="text-center max-w-5xl mx-auto relative z-10">
        
        {/* Badge - Consistent with Features/About sections */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-50 text-emerald-800 rounded-lg text-[10px] font-black uppercase tracking-[0.2em] mb-8 border border-emerald-100"
        >
          <Compass className="size-3" /> Now Charting: 2026 Expeditions
        </motion.div>

        {/* Normalized Heading: Bold but balanced proportions */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 mb-8 tracking-tighter leading-[0.95]"
        >
          Plan your next <br />
          <span className="text-emerald-700 italic underline decoration-emerald-100 underline-offset-8">
            Expedition
          </span>
          {" "}with AI.
        </motion.h1>

        {/* Normalized Body Text: text-lg/xl for professional readability */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-slate-500 mb-12 max-w-2xl mx-auto font-medium leading-relaxed"
        >
          A high-intelligence travel companion designed to strip away the noise of planning and reveal the heart of the journey.
        </motion.p>

        {/* Action Button: Normalized scale with high-contrast evergreen theme */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href={isLoggedIn ? "/plan" : "/login-signup"}>
            <button className="bg-emerald-800 text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest shadow-2xl shadow-emerald-200 hover:bg-emerald-900 hover:scale-[1.02] transition-all duration-300 active:scale-95 flex items-center gap-3">
              {isLoggedIn ? "Enter Expedition Vault" : "Start Your Journey"}
              <ArrowRight className="size-4" />
            </button>
          </Link>
          
          <Link href="/about">
            <button className="px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest text-slate-400 hover:text-emerald-800 transition-colors">
              The Philosophy
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
