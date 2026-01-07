"use client";
import { motion } from "framer-motion";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import CTA from "./components/CTA";
import Animations from "./components/Animations";

export default function HomePage() {
  return (
    <div className="min-h-screen w-full font-sans bg-gray-50 overflow-hidden">
      <Header />
      
      {/* Fade in the hero immediately */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Hero />
      </motion.div>

      {/* Slide in features as they enter the viewport */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Features />
      </motion.div>

      <CTA />
      <Animations />
    </div>
  );
}