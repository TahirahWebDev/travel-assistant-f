"use client";
import Link from "next/link";
import { useAuth } from "../plan/PlanContext";
import { motion } from "framer-motion";
import { MessageSquare, ArrowRight, ShieldCheck, Trees } from "lucide-react";

export default function CTA() {
  const { isLoggedIn } = useAuth();

  return (
    <section className="px-6 py-20 bg-[#F9FBFA]">
      <div className="max-w-7xl mx-auto">
        {/* Changed from bright gradients to deep, high-contrast Emerald-900 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-emerald-900 rounded-[48px] p-10 md:p-16 text-white relative overflow-hidden shadow-2xl shadow-emerald-100"
        >
          {/* Subtle Nordic Background Pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute -right-10 -bottom-10 size-80 bg-emerald-500 rounded-full blur-[100px]" />
            <Trees className="absolute left-10 top-10 size-40 text-emerald-300 opacity-20" />
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">

            {/* Content Section */}
            <div className="max-w-2xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-800 text-emerald-300 rounded-full text-[10px] font-black uppercase tracking-widest border border-emerald-700 mb-6">
                <ShieldCheck className="size-3" /> Ready for the trail?
              </div>
              <h3 className="text-4xl md:text-5xl font-black mb-6 tracking-tight leading-[1.1]">
                Plan your next <br className="hidden md:block" />
                <span className="text-emerald-400">Expedition</span> today.
              </h3>
              <p className="text-lg text-emerald-100/70 font-medium">
                Start with a single prompt and let our intelligence map out your forest-standard itinerary in seconds.
              </p>
            </div>

            {/* Actions Section - Refined button sizing */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Link href={isLoggedIn ? "/chat" : "/login-signup"} className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-8 py-4 bg-white text-emerald-900 font-black rounded-2xl shadow-xl hover:bg-emerald-50 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2">
                  {isLoggedIn ? (
                    <>
                      <MessageSquare className="size-5" /> Chat with AI
                    </>
                  ) : (
                    <>
                      Begin Journey <ArrowRight className="size-5" />
                    </>
                  )}
                </button>
              </Link>

              <button
                onClick={() =>
                  window.open("mailto:sales@ai-trawell.com?subject=Contact Sales Inquiry")
                }
                className="w-full sm:w-auto px-8 py-4 border-2 border-emerald-700 text-emerald-100 font-bold rounded-2xl hover:bg-emerald-800 transition-all text-sm uppercase tracking-widest"
              >
                Contact Sales
              </button>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
