import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { PlanProvider } from "./plan/PlanContext";
import { AuthProvider } from "./plan/PlanContext";
import NavbarClient from "./NavbarClient";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI-TraWell - Travel Assistant",
  description: "AI-powered travel planning and assistance",
  icons: {
    icon: '/favicon.ico',
  },
};

// SVG icons 
const icons = [
  { href: "#", label: "Location", svg: <svg height="27px" width="27px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 255.856 255.856" >
<g>
	<path className="fill:#000002;" d="M127.928,38.8c-30.75,0-55.768,25.017-55.768,55.767s25.018,55.767,55.768,55.767
		s55.768-25.017,55.768-55.767S158.678,38.8,127.928,38.8z M127.928,135.333c-22.479,0-40.768-18.288-40.768-40.767
		S105.449,53.8,127.928,53.8s40.768,18.288,40.768,40.767S150.408,135.333,127.928,135.333z"/>
	<path className="fill:#000002;" d="M127.928,0C75.784,0,33.362,42.422,33.362,94.566c0,30.072,25.22,74.875,40.253,98.904
		c9.891,15.809,20.52,30.855,29.928,42.365c15.101,18.474,20.506,20.02,24.386,20.02c3.938,0,9.041-1.547,24.095-20.031
		c9.429-11.579,20.063-26.616,29.944-42.342c15.136-24.088,40.527-68.971,40.527-98.917C222.495,42.422,180.073,0,127.928,0z
		 M171.569,181.803c-19.396,31.483-37.203,52.757-43.73,58.188c-6.561-5.264-24.079-26.032-43.746-58.089
		c-22.707-37.015-35.73-68.848-35.73-87.336C48.362,50.693,84.055,15,127.928,15c43.873,0,79.566,35.693,79.566,79.566
		C207.495,112.948,194.4,144.744,171.569,181.803z"/>
</g>
</svg>},
  { href: "#", label: "Itinerary", svg: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 7.5h18M4.5 21h15a1.5 1.5 0 0 0 1.5-1.5V7.5a1.5 1.5 0 0 0-1.5-1.5h-15A1.5 1.5 0 0 0 3 7.5v12A1.5 1.5 0 0 0 4.5 21Z" /></svg> },
  { href: "#", label: "User", svg: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 7.5a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.5 19.5a7.5 7.5 0 0 1 15 0v.75A2.25 2.25 0 0 1 17.25 22.5h-10.5A2.25 2.25 0 0 1 4.5 20.25v-.75Z" /></svg> },
  // { href: "#", label: "Search", svg: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11.25 18a6.75 6.75 0 1 1 0-13.5 6.75 6.75 0 0 1 0 13.5Z" /></svg> },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}>
        <AuthProvider>
          <PlanProvider>
            <nav className="fixed top-0 left-0 w-full bg-white shadow-lg z-50 border-b border-gray-200">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                  {/* Logo */}
                  <div className="flex items-center">
                    <Link href="/" className="flex items-center">
                      <img src="/download.png" alt="AI-TraWell Logo" className="h-12 w-auto" />
                      <span className="ml-2 text-xl font-bold text-gray-900">AI-TraWell</span>
                    </Link>
                  </div>

                  {/* Navigation Links */}
                  <div className="hidden md:flex items-center space-x-8">
                    <Link href="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200">
                      Home
                    </Link>
                    <Link href="/plan" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200">
                      Plan Trip
                    </Link>
                    <Link href="/chat" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200">
                      AI Chat
                    </Link>
                    <NavbarClient />
                  </div>

                  {/* Mobile menu button */}
                  <div className="md:hidden">
                    <NavbarClient />
                  </div>
                </div>
              </div>
            </nav>

            {/* Add padding to account for fixed navbar */}
            <div className="pt-16">
              {children}
            </div>
          </PlanProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
