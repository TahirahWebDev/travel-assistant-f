"use client";
import Link from "next/link";
import { useEffect } from "react";
import Image from "next/image";

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-16 animate-fade-in-up">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-xl animate-pulse">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            About <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">AI Travel Assistant</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your personal travel companion, powered by cutting-edge AI, designed to make trip planning effortless and fun.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-12 animate-slide-up">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We believe travel should be <span className="font-semibold text-blue-600">accessible, personalized, and joyful</span>. Whether you're a solo adventurer, a family planner, or a business traveler, our AI assistant helps you discover hidden gems, plan smart itineraries, and travel with confidence.
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: "M12 6v6m0 0v6m0-6h6m-6 0H6",
              title: "24/7 AI Support",
              desc: "Ask anytime, anywhere. Our AI never sleeps."
            },
            {
              icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
              title: "Smart & Fast",
              desc: "Real-time answers using Google Gemini AI."
            },
            {
              icon: "M13 10V3L4 14h7v7l9-11h-7z",
              title: "Personalized",
              desc: "Tailored suggestions based on your preferences."
            }
          ].map((feature, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center animate-fade-in-up animation-delay-600">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Plan Your Next Trip?</h3>
          <Link href="/chat">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center gap-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Start Chatting Now
            </button>
          </Link>
        </div>
        <div className="mt-20 text-center text-sm text-gray-500">
          <p>© 2025 AI Travel Assistant. All rights reserved.</p>
          <p className="mt-1">
            Made with <span className="text-red-500">Heart</span> in Pakistan
          </p>
        </div>
      </div>
    </div>
  );
}