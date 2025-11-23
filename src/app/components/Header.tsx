"use client";
import Link from "next/link";
import { useAuth } from "../plan/PlanContext";

export default function Header() {
  const { isLoggedIn } = useAuth();

  return (
    <header className="absolute top-0 left-0 right-0 z-10 p-6 backdrop-blur-sm bg-white/50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-extrabold tracking-tight text-gray-900">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            AI-TraWell
          </span>
        </div>

        <nav className="flex items-center space-x-4">
          <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors font-medium hidden sm:inline">
            Features
          </a>

          <Link href={isLoggedIn ? "/plan" : "/login-signup"}>
            <button className="px-4 py-2 text-sm font-semibold rounded-full bg-blue-600 text-white shadow-md hover:bg-blue-700 transition-colors">
              {isLoggedIn ? "Dashboard" : "Sign Up"}
            </button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
