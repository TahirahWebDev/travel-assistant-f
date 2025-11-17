"use client";
import Link from "next/link";
import { useAuth } from "./plan/PlanContext";

export default function Home() {
  const { isLoggedIn } = useAuth();

  return (
    <div className="hero min-h-screen w-full bg-gradient-to-br from-blue-50 via-white to-purple-50">

      {/* Main Content */}
      <main className="relative">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-6 pt-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-extrabold mb-6 text-gray-900 animate-fade-in-up">
              Plan Your Dream Trip
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                with AI
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 animate-fade-in-up animation-delay-200">
              Create personalized travel plans, chat with a virtual assistant, and explore the world effortlessly.
            </p>
            <div className="animate-fade-in-up animation-delay-400">
              <Link href={isLoggedIn ? "/plan" : "/login-signup"}>
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-blue-500/25 hover:scale-105 transition-all duration-300">
                  {isLoggedIn ? "Create Your Plan" : "Get Started"}
                </button>
              </Link>
            </div>
          </div>
        </section>


        {/* Features Section */}
        <section className="px-6 py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12 animate-fade-in">Features</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-slide-up">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">AI Chat</h4>
                <p className="text-gray-600 mb-4">Ask the assistant for suggestions, itineraries, or travel tips.</p>
                <Link href={isLoggedIn ? "/chat" : "/login-signup"} className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-300">
                  {isLoggedIn ? "Open Chat →" : "Login to Chat →"}
                </Link>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-slide-up animation-delay-200">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Personalized Plans</h4>
                <p className="text-gray-600 mb-4">Auto-generated day-by-day plans tailored to your interests.</p>
                <Link href={isLoggedIn ? "/plan" : "/login-signup"} className="text-green-600 hover:text-green-800 font-medium transition-colors duration-300">
                  {isLoggedIn ? "Create Plan →" : "Login to Plan →"}
                </Link>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-slide-up animation-delay-400">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Explore</h4>
                <p className="text-gray-600 mb-4">Discover attractions, restaurants, and nearby experiences.</p>
                <span className="text-purple-600 font-medium">Coming Soon</span>
              </div>
            </div>
          </div>
        </section>

        {/* Get Started Section */}
        <section className="px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl animate-slide-up">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to plan your next trip?</h3>
                  <p className="text-lg text-blue-100">Start with a single prompt and get a full itinerary in seconds.</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href={isLoggedIn ? "/chat" : "/login-signup"}>
                    <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl shadow-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105">
                      {isLoggedIn ? "Chat with AI" : "Login to Chat"}
                    </button>
                  </Link>
                  <button
                    onClick={() => window.open('mailto:sales@ai-trawell.com?subject=Contact Sales Inquiry', '_blank')}
                    className="px-6 py-3 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-105"
                  >
                    Contact Sales
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full px-6 py-12 bg-gray-900 ">
          <div className="w-full max-w-none">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">
              <div className="text-white">
                © <strong className="text-blue-400">AI-TraWell</strong> — Travel Assistant
              </div>
              <div className="flex gap-6">
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Privacy</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Terms</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Support</a>
              </div>
            </div>
          </div>
        </footer>
      </main>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }

        .animate-fade-in {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }
      `}</style>
    </div>
  );
}
