"use client";
import { useState, useRef, useEffect } from "react";
import { useAuth } from "../plan/PlanContext";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Header from "../components/Header";
import {
  MessageSquare, Send, Trees, Compass,
  Map, Sparkles, Loader2, ArrowLeft, ShieldCheck
} from "lucide-react";
import MessageBubble from "../components/MessageBubble";
import MessageInput from "../components/MessageInput";

interface Message {
  id: string;
  from: "user" | "assistant";
  text: string;
  timestamp: Date;
}

const API_URL = "http://localhost:8000/api/chat";

export default function ChatPage() {
  const { isLoggedIn, user } = useAuth();
  const router = useRouter();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      from: "assistant",
      text: "Welcome to the Expedition Vault. I'm your Nordic AI guide. How can I assist your journey today?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isLoggedIn) router.push("/login-signup");
  }, [isLoggedIn, router]);

  // Scroll to bottom whenever messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      from: "user",
      text: input.trim(),
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-user-name": user?.name || "Traveler",
        },
        body: JSON.stringify({ message: userMessage.text }),
      });

      const data = await res.json();
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        from: "assistant",
        text: data.reply || "My signals are weak in this part of the forest. Could you repeat that?",
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (err) {
      setMessages(prev => [...prev, {
        id: "error", from: "assistant", text: "Connection lost. Re-routing...", timestamp: new Date()
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  if (!isLoggedIn) return null;

  return (
    <div className="min-h-screen bg-[#F9FBFA] text-slate-900 flex flex-col">
      <Header />
      {/* Main Content Area: Fixed height to prevent footer overlap */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-8 overflow-hidden">
        <div className="grid lg:grid-cols-12 gap-8 h-full">

          {/* LEFT SIDEBAR: Context Info */}
          <aside className="hidden lg:flex lg:col-span-4 flex-col gap-6 overflow-y-auto">
            <div className="bg-emerald-800 rounded-[32px] p-8 text-white relative overflow-hidden shadow-xl shadow-emerald-100 flex-shrink-0">
              <Sparkles className="size-10 mb-6 text-emerald-300" />
              <h3 className="text-2xl font-bold mb-4">Expedition Vault</h3>
              <p className="text-emerald-100/80 leading-relaxed text-sm">
                Ask about specific coordinates, local weather patterns, or hidden trails.
              </p>
              <div className="absolute -right-10 -bottom-10 size-40 bg-white/10 rounded-full blur-3xl" />
            </div>

            <div className="bg-white border border-emerald-50 rounded-[32px] p-6 space-y-4 shadow-sm">
              <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 px-2">Quick Actions</h4>
              <QuickAction icon={Map} label="Nearby Attractions" />
              <QuickAction icon={ShieldCheck} label="Safety Protocols" />
              <QuickAction icon={Compass} label="Suggest New Route" />
            </div>
          </aside>

          {/* RIGHT SIDE: Chat Container */}
          <div className="lg:col-span-8 flex flex-col bg-white border border-slate-100 rounded-[40px] shadow-sm overflow-hidden h-full">

            {/* Scrollable Message History */}
            <div className="flex-1 overflow-y-auto p-6 md:p-10 space-y-6 scrollbar-thin scrollbar-thumb-emerald-100">
              <AnimatePresence initial={false}>
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <MessageBubble {...msg} />
                  </motion.div>
                ))}
              </AnimatePresence>

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-emerald-50 px-5 py-3 rounded-2xl flex items-center gap-2 border border-emerald-100">
                    <Loader2 className="size-4 text-emerald-600 animate-spin" />
                    <span className="text-xs font-bold text-emerald-700">AI is exploring...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Bar: Always pinned at bottom of container */}
            <div className="p-6 bg-slate-50/50 border-t border-slate-100">
              <MessageInput
                input={input}
                setInput={setInput}
                onSend={sendMessage}
                isTyping={isTyping}
                suggestions={["Best hiking in Norway?", "What to pack?", "Top cafes in Oslo"]}
                onSuggestionClick={(text) => setInput(text)}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function QuickAction({ icon: Icon, label }: any) {
  return (
    <button className="w-full flex items-center gap-3 p-4 bg-emerald-50/50 hover:bg-emerald-100 text-emerald-900 rounded-2xl transition-all font-bold text-sm">
      <Icon className="size-4 text-emerald-700" /> {label}
    </button>
  );
}

