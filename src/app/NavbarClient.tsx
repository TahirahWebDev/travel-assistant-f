"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "./plan/PlanContext";

export default function NavbarClient() {
  const { isLoggedIn, user, logout } = useAuth();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  // Helper to get initials
  const getInitials = (name: string) => {
    if (!name) return "?";
    return name.trim().charAt(0).toUpperCase();
  };

  // Helper to close menu and navigate
  const handleMenuClick = (callback?: () => void) => {
    setMenuOpen(false);
    if (callback) callback();
  };

  // Handle logout and redirect to home
  const handleLogout = () => {
    logout();
    router.push("/");
  };

  return (
    <div className="relative">
      {/* Mobile hamburger menu */}
      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen((open) => !open)}
          className="focus:outline-none p-2"
          aria-label="Menu"
        >
          {/* Hamburger menu icon */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>

      {/* Desktop user menu */}
      <div className="hidden md:block">
        <button
          onClick={() => setMenuOpen((open) => !open)}
          className="focus:outline-none p-2"
          aria-label="User menu"
        >
          {/* User SVG icon */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 7.5a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.5 19.5a7.5 7.5 0 0 1 15 0v.75A2.25 2.25 0 0 1 17.25 22.5h-10.5A2.25 2.25 0 0 1 4.5 20.25v-.75Z" />
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-50 border border-gray-200">
          {/* Navigation Links for Mobile */}
          <div className="md:hidden">
            <Link href="/" className="block px-4 py-3 hover:bg-gray-50 text-gray-700 border-b border-gray-100" onClick={() => handleMenuClick()}>
              🏠 Home
            </Link>
            <Link href="/plan" className="block px-4 py-3 hover:bg-gray-50 text-gray-700 border-b border-gray-100" onClick={() => handleMenuClick()}>
              ✈️ Plan Trip
            </Link>
            <Link href="/chat" className="block px-4 py-3 hover:bg-gray-50 text-gray-700 border-b border-gray-100" onClick={() => handleMenuClick()}>
              💬 AI Chat
            </Link>
          </div>

          {/* User Menu */}
          <div className="pt-2">
            {isLoggedIn ? (
              <>
                <button onClick={() => handleMenuClick(handleLogout)} className="block w-full text-left px-4 py-3 hover:bg-gray-50 text-gray-700">
                  🚪 Logout
                </button>
              </>
            ) : (
              <>
                <Link href="/login-signup" className="block px-4 py-3 hover:bg-gray-50 text-gray-700 border-b border-gray-100" onClick={() => handleMenuClick()}>
                  🔐 Login
                </Link>
                <Link href="/login-signup" className="block px-4 py-3 hover:bg-gray-50 text-gray-700" onClick={() => handleMenuClick()}>
                  📝 Signup
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}