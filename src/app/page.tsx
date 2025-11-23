import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import CTA from "./components/CTA";
import Animations from "./components/Animations";

export default function HomePage() {
  return (
    <div className="min-h-screen w-full font-sans bg-gray-50 overflow-hidden">
      <Header />
      <Hero />
      <Features />
      <CTA />
      <Animations />
    </div>
  );
}
