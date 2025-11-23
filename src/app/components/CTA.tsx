"use client";
import Link from "next/link";
import { useAuth } from "../plan/PlanContext";

export default function CTA() {
  const { isLoggedIn } = useAuth();

  return (
    <section className="px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-r from-blue-700 to-purple-700 rounded-3xl p-8 md:p-12 text-white shadow-2xl animate-slide-up">

          <div className="flex flex-col md:flex-row items-center justify-between gap-8">

            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to plan your next trip?</h3>
              <p className="text-lg text-blue-100">
                Start with a single prompt and get a full itinerary in seconds.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href={isLoggedIn ? "/chat" : "/login-signup"}>
                <button className="px-6 py-3 bg-white text-gray-900 font-bold rounded-xl shadow-lg hover:bg-gray-100 transition-all">
                  {isLoggedIn ? "Chat with AI" : "Create Account"}
                </button>
              </Link>

              <button
                onClick={() =>
                  window.open("mailto:sales@ai-trawell.com?subject=Contact Sales Inquiry")
                }
                className="px-6 py-3 border-2 border-white/50 text-white font-semibold rounded-xl hover:bg-white/10 transition-all"
              >
                Contact Sales
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
