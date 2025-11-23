"use client";
import Link from "next/link";
import NavbarClient from "./NavbarClient";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-lg z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image src="/logo.png" width={100} height={100} alt="AI-TraWell Logo" className="h-12 w-auto" />
              <span className="ml-2 text-xl font-bold text-gray-900">AI-TraWell</span>
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              About
            </Link>
            <Link href="/plan" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              Plan Trip
            </Link>
            <Link href="/chat" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              AI Chat
            </Link>
          </div>

          <NavbarClient />
        </div>
      </div>
    </nav>
  );
}
