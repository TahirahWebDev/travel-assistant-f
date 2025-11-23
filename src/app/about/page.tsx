"use client";

import Link from "next/link";
import { useEffect } from "react";
import Image from "next/image";
import { Plus, Sun, Zap, MessageCircle } from "lucide-react";

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const features = [
    {
      icon: <Plus className="w-6 h-6 text-white" />,
      title: "24/7 AI Support",
      desc: "Ask anytime, anywhere. Our AI never sleeps.",
    },
    {
      icon: <Zap className="w-6 h-6 text-white" />,
      title: "Smart & Fast",
      desc: "Real-time answers using Google Gemini AI.",
    },
    {
      icon: <Sun className="w-6 h-6 text-white" />,
      title: "Personalized",
      desc: "Tailored suggestions based on your preferences.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-xl animate-pulse">
              <Sun className="w-10 h-10 text-white" />
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              AI Travel Assistant
            </span>
          </h1>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your personal travel companion, powered by cutting-edge AI, designed to make trip planning effortless and fun.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-12 animate-slide-up">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We believe travel should be{" "}
                <span className="font-semibold text-blue-600">accessible, personalized, and joyful</span>. Whether you&apos;re a solo adventurer, a family planner, or a business traveler, our AI assistant helps you discover hidden gems, plan smart itineraries, and travel with confidence.
              </p>
              <p className="text-gray-600 leading-relaxed font-semibold">
                No more endless tabs, confusing reviews, or stressful planning. Just ask and let AI do the rest.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 shadow-inner">
                <Image
                  src="/logo.png"
                  alt="Mission Illustration"
                  width={300}
                  height={300}
                  className="animate-float"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, i) => (
            <div
              key={i}
              className="bg-white/60 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 shadow">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mb-20 animate-fade-in-up">
          <h3 className="text-3xl font-extrabold text-gray-900 mb-5">
            Ready to Plan Your Next Adventure?
          </h3>
          <Link href="/chat">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center gap-2 mx-auto">
              <MessageCircle className="w-6 h-6" />
              Start Chatting
            </button>
          </Link>
        </div>

        </div>
    </div>

  );
}
