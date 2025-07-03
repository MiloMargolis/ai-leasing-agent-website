import React from "react";

interface HeroSectionProps {
  heroRef: React.RefObject<HTMLDivElement | null>;
  heroInView: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({ heroRef, heroInView }) => (
  <div
    ref={heroRef}
    className={`h-screen w-full bg-cover bg-center relative pb-0 transition-all duration-700 ease-out ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    style={{ backgroundImage: "url('/hero.jpg')" }}
  >
    {/* Top Nav */}
    <div className="absolute top-0 left-0 right-0 flex justify-between items-center px-8 py-6 z-50 text-white pointer-events-auto">
      <div className="flex items-center space-x-3">
        <img src="/Logo.svg" alt="HouseFly logo" className="h-8" />
        <span className="text-xl font-bold">HouseFly</span>
      </div>
      <div className="space-x-8 hidden text-lg md:flex">
        <a href="#" className="hover:text-purple-600 hover:underline transition-colors">
          Home
        </a>
        <a href="#partners" className="hover:text-purple-600 hover:underline transition-colors">
          Our partners
        </a>
        <a href="#services" className="hover:text-purple-600 hover:underline transition-colors">
          Services
        </a>
        <a href="#team" className="hover:text-purple-600 hover:underline transition-colors">
          Our team
        </a>
        <a href="#contact" className="hover:text-purple-600 hover:underline transition-colors">
          Contact
        </a>
      </div>
    </div>
    {/* Centered Content */}
    <div className="relative z-0 h-full flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-white text-5xl sm:text-6xl md:text-7xl font-bold max-w-5xl leading-tight font-heading">
        AI Powered Leasing Agent
      </h1>
      <p className="text-white text-3xl md:text-3xl font-large font-bold mt-6 max-w-4xl drop-shadow-2xl">
        Qualify leads, automate conversations, and handle follow-ups, so
        human agents can focus on closing.
      </p>
      <a
        href="https://calendly.com/milomargolis4/30min?month=2025-06"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button
          className="
            mt-10 px-8 py-3 rounded-full
            bg-gradient-to-r from-[#6C63FF] via-indigo-500 to-blue-500 animate-gradient-x
            text-white text-xl font-bold tracking-tight
            shadow-xl shadow-indigo-300/40
            flex items-center gap-3
            border-2 border-white/30 backdrop-blur-md bg-opacity-80
            ring-2 ring-blue-300/30
            transition-all duration-200
            hover:scale-105 hover:shadow-[0_8px_32px_0_rgba(76,110,245,0.25)] hover:ring-4 hover:ring-blue-400/40
            active:scale-97
            focus:outline-none focus:ring-4 focus:ring-indigo-300
            relative overflow-hidden
            before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-400/30 before:via-purple-400/20 before:to-indigo-400/30 before:blur-lg before:opacity-60 before:transition-opacity before:duration-300 before:pointer-events-none
            group
          "
          aria-label="Book a Demo"
        >
          <span className="z-10">Book a Demo</span>
          <svg className="w-5 h-5 ml-2 transition-transform duration-200 group-hover:translate-x-1 group-hover:scale-110 group-active:scale-95" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </a>
    </div>
  </div>
);

export default HeroSection; 