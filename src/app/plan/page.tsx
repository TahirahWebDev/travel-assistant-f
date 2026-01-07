"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { usePlan } from "./PlanContext";
import { useAuth } from "../plan/PlanContext";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../components/Header";
import {
  MapPin, Calendar, Users, Sparkles,
  ChevronRight, Compass, ShieldAlert, Loader2, Trees
} from "lucide-react";

export default function PlanPage() {
  const [form, setForm] = useState({
    destination: "", startDate: "", endDate: "", travelers: 1, preferences: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const { setPlan } = usePlan();
  const { isLoggedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) router.push('/login-signup');
  }, [isLoggedIn, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise(r => setTimeout(r, 2000));
    setPlan({ ...form, travelers: Number(form.travelers) });
    router.push("/plan/result");
  };

  if (!isLoggedIn) return <AuthGate />;

  return (
    <div className="min-h-screen bg-[#F9FBFA] text-slate-900 selection:bg-emerald-100">
      <Header />
      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* Header: Centered & Minimal */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-emerald-700 font-bold text-xs tracking-[0.2em] uppercase mb-3 block">
            AI Expedition Engine
          </span>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-6">
            Where to next?
          </h1>
          <p className="text-lg text-slate-500 max-w-xl mx-auto font-medium">
            Answer a few questions and our intelligence will craft your forest-standard itinerary.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: The Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-7 bg-white border border-emerald-50 rounded-[40px] p-8 md:p-12 shadow-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Destination */}
                <div className="md:col-span-2 space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-emerald-800 ml-1">Destination</label>
                  <div className="relative group">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-600/50 size-5 group-focus-within:text-emerald-700 transition-colors" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Oslo, Norway"
                      className="w-full pl-12 pr-4 py-4 bg-emerald-50/30 border border-emerald-100 rounded-2xl focus:bg-white focus:ring-4 focus:ring-emerald-500/5 focus:border-emerald-500 outline-none transition-all"
                      onChange={(e) => setForm({...form, destination: e.target.value})}
                    />
                  </div>
                </div>

                {/* Dates */}
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-emerald-800 ml-1">Arrival</label>
                  <input
                    type="date"
                    required
                    className="w-full px-4 py-4 bg-emerald-50/30 border border-emerald-100 rounded-2xl focus:bg-white focus:ring-4 focus:ring-emerald-500/5 focus:border-emerald-500 outline-none transition-all"
                    onChange={(e) => setForm({...form, startDate: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-emerald-800 ml-1">Departure</label>
                  <input
                    type="date"
                    required
                    className="w-full px-4 py-4 bg-emerald-50/30 border border-emerald-100 rounded-2xl focus:bg-white focus:ring-4 focus:ring-emerald-500/5 focus:border-emerald-500 outline-none transition-all"
                    onChange={(e) => setForm({...form, endDate: e.target.value})}
                  />
                </div>

                {/* Travelers */}
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-emerald-800 ml-1">Group Size</label>
                  <div className="relative">
                    <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-600/50 size-5" />
                    <input
                      type="number"
                      min="1"
                      placeholder="1"
                      className="w-full pl-12 pr-4 py-4 bg-emerald-50/30 border border-emerald-100 rounded-2xl focus:bg-white focus:ring-4 focus:ring-emerald-500/5 focus:border-emerald-500 outline-none transition-all"
                      onChange={(e) => setForm({...form, travelers: Number(e.target.value)})}
                    />
                  </div>
                </div>

                {/* Preference Select */}
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-emerald-800 ml-1">Experience</label>
                  <div className="relative">
                    <select
                      className="w-full px-4 py-4 bg-emerald-50/30 border border-emerald-100 rounded-2xl focus:bg-white focus:ring-4 focus:ring-emerald-500/5 focus:border-emerald-500 outline-none transition-all appearance-none"
                      onChange={(e) => setForm({...form, preferences: e.target.value})}
                    >
                      <option value="">Any Style</option>
                      <option value="Culture">🏛️ Cultural Immersion</option>
                      <option value="Relaxation">🏖️ Natural Wellness</option>
                      <option value="Adventure">🏔️ Wilderness Trek</option>
                    </select>
                    <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 size-4 rotate-90 text-emerald-800 pointer-events-none" />
                  </div>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                disabled={isLoading}
                className="w-full bg-emerald-800 text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-xl shadow-emerald-100 hover:bg-emerald-900 transition-all disabled:opacity-70"
              >
                {isLoading ? (
                  <Loader2 className="animate-spin size-5" />
                ) : (
                  <>
                    <span>Begin Exploration</span>
                    <Sparkles className="size-5 text-emerald-300" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Right Column: Visual Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="bg-emerald-800 rounded-[40px] p-10 text-white relative overflow-hidden group shadow-2xl shadow-emerald-100">
              <div className="relative z-10">
                <Compass className="size-12 mb-6 text-emerald-300" />
                <h3 className="text-2xl font-bold mb-4">Nordic Standards</h3>
                <p className="text-emerald-50 leading-relaxed font-medium">
                  We calculate optimal transit paths, opening windows, and weather variables to ensure your journey is seamless and sustainable.
                </p>
              </div>
              <div className="absolute -right-10 -bottom-10 size-48 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-all duration-700" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-8 bg-white border border-emerald-50 rounded-[32px] shadow-sm">
                <div className="size-10 bg-emerald-50 text-emerald-700 rounded-xl flex items-center justify-center mb-4">
                  <ShieldAlert className="size-5" />
                </div>
                <h4 className="font-bold text-slate-900 text-sm mb-1">Secure</h4>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">Verified local partners only.</p>
              </div>
              <div className="p-8 bg-white border border-emerald-50 rounded-[32px] shadow-sm">
                <div className="size-10 bg-teal-50 text-teal-700 rounded-xl flex items-center justify-center mb-4">
                  <Calendar className="size-5" />
                </div>
                <h4 className="font-bold text-slate-900 text-sm mb-1">Flexible</h4>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">Dynamic offline syncing.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function AuthGate() {
  return (
    <div className="min-h-screen bg-[#F9FBFA] flex items-center justify-center p-6">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="max-w-md w-full bg-white rounded-[48px] p-12 text-center border border-emerald-50 shadow-2xl shadow-emerald-100/20"
      >
        <div className="size-24 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-8">
          <ShieldAlert className="size-12 text-emerald-700" />
        </div>
        <h2 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">Members Only</h2>
        <p className="text-slate-500 mb-8 leading-relaxed font-medium">
          To preserve your expeditions and unlock AI-curated routes, please sign in to your vault.
        </p>
        <button
          onClick={() => window.location.href='/login-signup'}
          className="w-full bg-emerald-800 text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-emerald-900 transition-all shadow-lg shadow-emerald-100"
        >
          Sign In <ChevronRight className="size-4" />
        </button>
      </motion.div>
    </div>
  );
}
