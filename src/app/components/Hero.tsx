"use client";
import Link from "next/link";
import { useAuth } from "../plan/PlanContext";

export default function Hero() {
  const { isLoggedIn } = useAuth();

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-24 pb-16 bg-gradient-to-br from-indigo-50/50 via-white to-blue-50/50">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 text-gray-900 animate-fade-in-up">
          Plan Your Dream Trip
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Instantly with AI
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
          Create personalized travel plans, chat with a virtual assistant, and explore the world effortlessly.
        </p>

        <div className="animate-fade-in-up animation-delay-400">
          <Link href={isLoggedIn ? "/plan" : "/login-signup"}>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-full font-bold text-xl shadow-2xl hover:shadow-lg hover:scale-[1.02] transition-all duration-300 active:scale-95 ring-4 ring-blue-100/50">
              {isLoggedIn ? "Start Planning Now" : "Get Started — It's Free"}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
