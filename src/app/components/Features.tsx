"use client";
import Link from "next/link";
import { useAuth } from "../plan/PlanContext";

export default function Features() {
  const { isLoggedIn } = useAuth();

  return (
    <section id="features" className="px-6 py-20 bg-white">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4 animate-fade-in">
          Key Features
        </h2>

        <p className="text-lg text-center text-gray-500 mb-12 max-w-xl mx-auto animate-fade-in animation-delay-200">
          Your personal travel assistant handles everything from inspiration to booking.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Feature 1 */}
          <div className="bg-white rounded-2xl p-6 shadow-2xl border border-gray-100 hover:shadow-blue-500/30 hover:scale-[1.02] animate-slide-up">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 shadow-md">
              <svg className="w-6 h-6 text-white" stroke="currentColor" fill="none" strokeWidth={2}>
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">AI Chat Assistant</h4>
            <p className="text-gray-600 mb-4">
              Ask the assistant for live suggestions, safety tips, or instant itinerary tweaks.
            </p>
            <Link href={isLoggedIn ? "/chat" : "/login-signup"} className="text-blue-600 font-semibold">
              {isLoggedIn ? "Open Chat →" : "Login to Chat →"}
            </Link>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-2xl p-6 shadow-2xl border border-gray-100 hover:shadow-green-500/30 hover:scale-[1.02] animate-slide-up animation-delay-200">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center mb-4 shadow-md">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2}>
                <rect x="3" y="4" width="18" height="18" rx="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Tailored Itineraries</h4>
            <p className="text-gray-600 mb-4">
              Auto-generated, optimized day-by-day plans tailored precisely to your budget and pace.
            </p>
            <Link href={isLoggedIn ? "/plan" : "/login-signup"} className="text-green-600 font-semibold">
              {isLoggedIn ? "Create Plan →" : "Login to Plan →"}
            </Link>
          </div>

          {/* Feature 3 */}
          <div className="bg-white rounded-2xl p-6 shadow-2xl border border-gray-100 hover:shadow-purple-500/30 hover:scale-[1.02] animate-slide-up animation-delay-400">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4 shadow-md">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Local Discovery</h4>
            <p className="text-gray-600 mb-4">
              Find the best hidden gems, restaurants, and local attractions near you.
            </p>
            <span className="text-purple-600 font-semibold">Coming Soon</span>
          </div>

        </div>
      </div>
    </section>
  );
}
