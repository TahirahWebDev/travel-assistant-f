"use client";
import { usePlan } from "../PlanContext";
import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { 
  MapPin, Calendar, Users, Star, 
  Download, MessageSquare, Edit3, 
  ArrowLeft, Loader2, CheckCircle2, 
  Clock, ShieldCheck, CreditCard, Trees
} from "lucide-react";
import Header from "@/app/components/Header";

export default function PlanResultPage() {
  const { plan } = usePlan();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isDownloading, setIsDownloading] = useState(false);
  const pdfRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const downloadPDF = async () => {
    if (!pdfRef.current) return;
    setIsDownloading(true);
    
    // Tiny delay to ensure UI is stable before capture
    setTimeout(async () => {
      try {
        const canvas = await html2canvas(pdfRef.current!, {
          scale: 2,
          useCORS: true,
          backgroundColor: "#F9FBFA",
        });
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4");
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
        
        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
        pdf.save(`${plan?.destination || "my"}-itinerary.pdf`);
      } catch (e) {
        console.error("PDF Fail:", e);
      } finally {
        setIsDownloading(false);
      }
    }, 100);
  };

  if (!plan) return <NoPlanState />;
  if (isLoading) return <LoadingState />;

  const duration = Math.ceil(
    (new Date(plan.endDate).getTime() - new Date(plan.startDate).getTime()) / (1000 * 60 * 60 * 24)
  );

  return (
    <div className="min-h-screen bg-[#F9FBFA] text-slate-900 pb-20 selection:bg-emerald-100">
      <Header />
      <nav className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-emerald-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <button onClick={() => router.back()} className="flex items-center gap-2 text-sm font-semibold text-emerald-800 hover:text-emerald-600 transition-colors">
            <ArrowLeft className="size-4" /> Back
          </button>
          <div className="flex items-center gap-3">
            <button 
              onClick={downloadPDF}
              disabled={isDownloading}
              className="hidden md:flex items-center gap-2 px-5 py-2.5 text-sm font-bold border border-emerald-200 rounded-xl hover:bg-emerald-50 transition-all text-emerald-800 disabled:opacity-50"
            >
              {isDownloading ? <Loader2 className="size-4 animate-spin" /> : <Download className="size-4" />}
              {isDownloading ? "Exporting..." : "Download PDF"}
            </button>
            <Link href="/chat">
              <button className="flex items-center gap-2 px-5 py-2.5 text-sm font-bold bg-emerald-800 text-white rounded-xl hover:bg-emerald-900 shadow-lg transition-all">
                <MessageSquare className="size-4" /> AI Chat
              </button>
            </Link>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 pt-12" ref={pdfRef}>
        <header className="mb-12">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-2 text-emerald-700 font-bold text-xs tracking-widest uppercase mb-4">
              <CheckCircle2 className="size-4" /> Expedition Confirmed
            </div>
            {/* FIXED: Removed background-clip for PDF compatibility */}
            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4 capitalize text-slate-900">
              {plan.destination} <span className="text-emerald-700">Explorer</span>
            </h1>
            <p className="text-slate-500 text-lg max-w-2xl font-medium leading-relaxed">
              Curated for your <span className="text-emerald-700 font-bold">{plan.preferences || 'Standard'}</span> journey.
            </p>
          </motion.div>
        </header>

        {/* 2-COLUMN GRID TO FIX VERTICAL LOOK */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Sidebar (4 columns) - Made sticky on large screens */}
          <aside className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
            <div className="bg-white border border-emerald-50 rounded-[40px] p-8 md:p-10 shadow-sm">
              <h3 className="font-bold text-xl mb-8 text-slate-800 border-b border-slate-50 pb-4">Overview</h3>
              <div className="space-y-8">
                <DetailRow icon={MapPin} label="Destination" value={plan.destination} color="emerald" />
                <DetailRow icon={Calendar} label="Dates" value={`${duration} Days`} value2={`${plan.startDate} to ${plan.endDate}`} color="teal" />
                <DetailRow icon={Users} label="Explorers" value={`${plan.travelers} Solo`} color="mint" />
                <DetailRow icon={Star} label="Atmosphere" value={plan.preferences} color="emerald" />
              </div>
              <div className="mt-12 pt-6 border-t border-slate-50">
                <Link href="/plan">
                  <button className="w-full py-4 px-2 text-sm font-bold text-emerald-800 bg-emerald-50 rounded-2xl hover:bg-emerald-100 transition-all flex items-center justify-center gap-2">
                    <Edit3 className="size-4 flex-shrink-0" /> Modify Search
                  </button>
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <BadgeCard icon={ShieldCheck} title="Verified Safety" desc="Nordic Standards" color="emerald" />
              <BadgeCard icon={CreditCard} title="Eco-Budget" desc="Optimized spend" color="teal" />
            </div>
          </aside>

          {/* Main Content (8 columns) */}
          <div className="lg:col-span-8">
            <div className="bg-white border border-slate-100 rounded-[40px] p-8 md:p-12 shadow-sm">
              <h2 className="text-2xl font-bold mb-10 flex items-center gap-3 text-slate-800">
                <Clock className="size-6 text-emerald-600" /> Daily Itinerary
              </h2>
              <div className="relative space-y-16">
                <div className="absolute left-[23px] top-2 bottom-2 w-px bg-emerald-100" />
                {MOCK_ITINERARY.map((item, idx) => (
                  <div key={idx} className="relative pl-16 group">
                    <div className="absolute left-0 top-0 size-12 bg-emerald-50 border border-emerald-100 rounded-full flex items-center justify-center z-10 group-hover:bg-emerald-700 transition-all duration-300">
                      <span className="text-sm font-bold text-emerald-800 group-hover:text-white">{idx + 1}</span>
                    </div>
                    <h4 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">{item.title}</h4>
                    <p className="text-slate-500 text-lg leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// Sub-components (DetailRow, BadgeCard, etc. same as before)
// MOCK_ITINERARY same as before

// Sub-components... (Same as previous version)
function DetailRow({ icon: Icon, label, value, value2, color }: any) {
  const themes = {
    emerald: "bg-emerald-50 text-emerald-700",
    teal: "bg-teal-50 text-teal-600",
    mint: "bg-[#ECFDF5] text-emerald-600",
  };
  return (
    <div className="flex items-center gap-5">
      <div className={`p-4 rounded-2xl ${themes[color as keyof typeof themes]}`}>
        <Icon className="size-5" />
      </div>
      <div>
        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">{label}</p>
        <p className="font-bold text-slate-900 leading-tight">{value}</p>
        {value2 && <p className="text-xs text-slate-400 mt-1">{value2}</p>}
      </div>
    </div>
  );
}

function BadgeCard({ icon: Icon, title, desc, color }: any) {
  return (
    <div className="flex items-center gap-4 p-5 bg-white border border-slate-100 rounded-[24px]">
      <div className={`p-3 rounded-xl ${color === 'emerald' ? 'bg-emerald-50 text-emerald-700' : 'bg-teal-50 text-teal-600'}`}>
        <Icon className="size-5" />
      </div>
      <div>
        <h5 className="text-sm font-bold text-slate-900">{title}</h5>
        <p className="text-xs text-slate-400">{desc}</p>
      </div>
    </div>
  );
}

function LoadingState() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-center">
      <Loader2 className="size-12 text-emerald-700 animate-spin mb-4" />
      <h2 className="text-2xl font-bold text-slate-900">Mapping your forest route...</h2>
    </div>
  );
}

function NoPlanState() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Link href="/plan" className="bg-emerald-800 text-white px-8 py-4 rounded-2xl font-bold">Start Planning</Link>
    </div>
  );
}

const MOCK_ITINERARY = [
  { day: 1, title: "Natural Landmark Exploration", description: "Discover the region's most iconic forest and water features. The day includes a guided walk through protected wetlands." },
  { day: 2, title: "Local Craft & Culture", description: "Explore mountain-side villages known for sustainable wood-crafting and organic local cuisine." },
  { day: 3, title: "Remote Sanctuary Visit", description: "Venture deep into the northern valley to experience silent retreats and untouched scenery." },
];