"use client";
import Link from "next/link";
import { useAuth } from "../plan/PlanContext";
import { motion } from "framer-motion";
import { MessageSquare, Calendar, MapPin, ArrowRight, ShieldCheck } from "lucide-react";

export default function Features() {
  const { isLoggedIn } = useAuth();

  const featureList = [
    {
      title: "Expedition Guide",
      desc: "Live AI suggestions, safety protocols, and real-time route adjustments as you explore new landscapes.",
      icon: <MessageSquare className="size-6" />,
      link: isLoggedIn ? "/chat" : "/login-signup",
      linkText: isLoggedIn ? "Open Vault" : "Secure Access",
      color: "emerald"
    },
    {
      title: "Smart Itineraries",
      desc: "Auto-generated paths precisely tailored to your desired pace, budget, and environmental focus.",
      icon: <Calendar className="size-6" />,
      link: isLoggedIn ? "/plan" : "/login-signup",
      linkText: isLoggedIn ? "Create Path" : "Join the Trail",
      color: "teal"
    },
    {
      title: "Local Discovery",
      desc: "Uncover hidden sanctuaries, local eateries, and artisan markets that standard guides often overlook.",
      icon: <MapPin className="size-6" />,
      link: "#",
      linkText: "Beta Testing",
      color: "mint"
    }
  ];

  return (
    <section id="features" className="px-6 py-24 bg-[#F9FBFA] selection:bg-emerald-100">
      <div className="max-w-7xl mx-auto">

        {/* HEADER AREA: Stacked & Center Aligned */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-50 text-emerald-700 rounded-lg text-xs font-black uppercase tracking-widest mb-6 border border-emerald-100"
          >
            <ShieldCheck className="size-4" /> Nordic Standards
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6"
          >
            Intelligence for the <br />
            <span className="text-emerald-700">Modern Explorer.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto"
          >
            Our assistant handles the complexity of travel logistics so you can focus entirely on the soul of your journey.
          </motion.p>
        </div>

        {/* FEATURES GRID */}
        <div className="grid md:grid-cols-3 gap-10">
          {featureList.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col h-full bg-white border border-emerald-50 rounded-[32px] p-10 shadow-sm hover:shadow-xl hover:shadow-emerald-100/10 transition-all duration-500 group"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-colors duration-500 ${
                f.color === "emerald" ? "bg-emerald-50 text-emerald-700 group-hover:bg-emerald-800 group-hover:text-white" :
                f.color === "teal" ? "bg-teal-50 text-teal-700 group-hover:bg-teal-800 group-hover:text-white" :
                "bg-emerald-50/50 text-emerald-600 opacity-40"
              }`}>
                {f.icon}
              </div>

              <h4 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">
                {f.title}
              </h4>

              <p className="text-base text-slate-500 leading-relaxed font-medium mb-10 flex-grow">
                {f.desc}
              </p>

              <Link
                href={f.link}
                className={`inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest transition-all ${
                  f.link === "#" ? "text-slate-300 cursor-not-allowed" : "text-emerald-700 hover:gap-4 hover:text-emerald-900"
                }`}
              >
                <span>{f.linkText}</span>
                {f.link !== "#" && <ArrowRight className="size-5" />}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
