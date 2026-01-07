"use client";
import { useState } from "react";
import { useAuth } from "../plan/PlanContext";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Lock, User, ArrowRight, Trees, Loader2, ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function LoginSignupPage() {
  const { login } = useAuth();
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(r => setTimeout(r, 800));

    if (isLogin) {
      login({ name: form.name || "User", email: form.email });
      router.push("/");
    } else {
      setIsLogin(true);
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex bg-white font-sans selection:bg-emerald-100 relative">
      
      <header className="absolute top-0 left-0 right-0 z-50 p-6 md:p-10 flex justify-between items-center pointer-events-none">
        <Link href="/" className="flex items-center gap-3 group pointer-events-auto">
          <div className="size-10 bg-emerald-800 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
            <Trees className="size-6 text-emerald-300" />
          </div>
          {/* text-slate-900 (Black/Dark) on mobile, lg:text-white on desktop screens */}
          <span className="text-2xl font-black tracking-tighter text-slate-900 lg:text-white transition-colors italic">
            Al-TraWell
          </span>
        </Link>
        
        <Link 
          href="/" 
          className="pointer-events-auto flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-slate-400 hover:text-emerald-700 transition-colors bg-white/80 backdrop-blur-md px-4 py-2 rounded-lg border border-emerald-50 shadow-sm"
        >
          <ChevronLeft className="size-4" /> Back to Home
        </Link>
      </header>

      {/* LEFT SIDE: Brand Visual (Fills horizontal space on desktop) */}
      <div className="hidden lg:flex w-1/2 bg-emerald-900 relative items-center justify-center p-12 overflow-hidden">
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-30" 
          aria-hidden="true"
        />
        <div className="relative z-10 text-center text-white">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Trees className="size-24 mx-auto mb-8 text-emerald-300" />
          </motion.div>
          <h2 className="text-6xl font-black mb-4 tracking-tighter italic">Explore the Deep</h2>
          <p className="text-emerald-100 text-xl font-medium max-w-sm mx-auto leading-relaxed">
            "In every walk with nature, one receives far more than he seeks."
          </p>
        </div>
        <div className="absolute -bottom-20 -left-20 size-80 bg-emerald-500/20 rounded-full blur-[100px]" />
      </div>

      {/* RIGHT SIDE: High-Contrast Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-[#F9FBFA] pt-32 lg:pt-8">
        <motion.div 
          initial={{ opacity: 0, x: 20 }} 
          animate={{ opacity: 1, x: 0 }} 
          className="w-full max-w-md"
        >
          

          <form onSubmit={handleSubmit} className="space-y-6">
            <AnimatePresence mode="popLayout">
              {!isLogin && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-2"
                >
                  <label className="text-[11px] font-black uppercase tracking-widest text-emerald-800 ml-1">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-700 size-4" />
                    <input 
                      type="text" 
                      name="name"
                      required 
                      placeholder="John Doe" 
                      value={form.name}
                      onChange={handleChange}
                      className="w-full pl-11 pr-4 py-4 bg-white border border-emerald-100 rounded-2xl focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 outline-none transition-all text-slate-900 placeholder:text-slate-400 font-bold" 
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="space-y-2">
              <label className="text-[11px] font-black uppercase tracking-widest text-emerald-800 ml-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-700 size-4" />
                <input 
                  type="email" 
                  name="email"
                  required 
                  placeholder="explorer@nordic.com" 
                  value={form.email}
                  onChange={handleChange}
                  className="w-full pl-11 pr-4 py-4 bg-white border border-emerald-100 rounded-2xl focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 outline-none transition-all text-slate-900 placeholder:text-slate-400 font-bold" 
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <label className="text-[11px] font-black uppercase tracking-widest text-emerald-800">Password</label>
                {isLogin && <button type="button" className="text-xs font-bold text-emerald-700 hover:underline">Forgot Key?</button>}
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-700 size-4" />
                <input 
                  type="password" 
                  name="password"
                  required 
                  placeholder="••••••••" 
                  value={form.password}
                  onChange={handleChange}
                  className="w-full pl-11 pr-4 py-4 bg-white border border-emerald-100 rounded-2xl focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 outline-none transition-all text-slate-900 placeholder:text-slate-400 font-bold" 
                />
              </div>
            </div>

            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={isSubmitting}
              className="w-full bg-emerald-800 text-white py-5 rounded-2xl font-black text-lg shadow-xl shadow-emerald-100 hover:bg-emerald-900 transition-all flex items-center justify-center gap-2 disabled:opacity-70"
            >
              {isSubmitting ? (
                <Loader2 className="animate-spin size-6" />
              ) : (
                <>
                  <span>{isLogin ? "Enter Vault" : "Create Passport"}</span>
                  <ArrowRight className="size-5" />
                </>
              )}
            </motion.button>
          </form>

          <footer className="mt-10 text-center">
            <button onClick={() => setIsLogin(!isLogin)} className="text-sm text-slate-500 font-bold">
              {isLogin ? "New explorer? " : "Already tracking? "}
              <span className="text-emerald-700 underline underline-offset-4 decoration-2">
                {isLogin ? "Join now" : "Sign in"}
              </span>
            </button>
          </footer>
        </motion.div>
      </div>
    </div>
  );
}