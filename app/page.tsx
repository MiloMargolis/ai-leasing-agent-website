"use client";
import React, { useRef, useEffect, useState } from "react";

// Simple in-view hook for fade/slide-in
function useInView<T extends HTMLElement = HTMLElement>(threshold = 0.15): [React.RefObject<T | null>, boolean] {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, inView];
}

export default function Home() {
  const team = [
    {
      name: "Milo Margolis",
      role: "Founder & CEO",
      image: "/person1.jpg",
      school: "Northeastern University",
      major: "Computer Science + AI",
      blurb: "Solutions Engineering @ Cranium AI, Data Engineering @ Loper",
      linkedin: "https://www.linkedin.com/in/milo-margolis/"
    },
    {
      name: "Rowan Frew",
      role: "Business Development",
      image: "/person2.jpg",
      school: "Northeastern University",
      major: "Business Administration",
      blurb: "Financial Analyst @ UBS, Investment Banking @ Piraeus Bank",
      linkedin: "https://www.linkedin.com/in/rowan-frew-b50806237/"
    },
    {
      name: "David Rooney",
      role: "Business Development",
      image: "/person3.jpg",
      school: "Northeastern University",
      major: "Industrial Engineering",
      blurb: "R&D @ MATT Energy, Marketing & Growth @ Bourdal",
      linkedin: "https://www.linkedin.com/in/david-rooney-work876/"
    },

    {
      name: "Josh Segal",
      role: "Engineering",
      image: "/person4.jpg",
      school: "Northeastern University",
      major: "Computer Science + AI",
      blurb: "Software Engineering @ Harvard, Software Consulting @ NEXT",
      linkedin: "https://www.linkedin.com/in/joshua-francis-segal/"
    },
    {
      name: "Lubaina Malvi",
      role: "Engineering",
      image: "/person5.jpg",
      school: "Northeastern University",
      major: "Computer Science + AI",
      blurb: "Software Engineering @ KKR & Flexcar",
      linkedin: "https://www.linkedin.com/in/lubainamalvi/"
    },
    {
      name: "Willem Shak",
      role: "Engineering",
      image: "/person6.jpg",
      school: "Northeastern University",
      major: "Computer Science + AI",
      blurb: "Software Engineering @ Chourus",
      linkedin: "https://www.linkedin.com/in/willem-shak/"
    },
    {
      name: "Jesse Goldberg",
      role: "Business Development",
      image: "/person7.jpg",
      school: "Northeastern University",
      major: "Business Administration and Psychology",
      blurb: "Business Operations & Strategy @ EazyDone",
      linkedin: "https://www.linkedin.com/in/jesse-goldberg-175b76293/"
    },
  ];

  const [heroRef, heroInView] = useInView<HTMLDivElement>();
  const [partnersRef, partnersInView] = useInView<HTMLElement>();
  const [servicesRef, servicesInView] = useInView<HTMLElement>();
  const [teamRef, teamInView] = useInView<HTMLElement>();
  const [contactRef, contactInView] = useInView<HTMLElement>();

  return (
    <div className="w-full">
      {/* Hero Section */}
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
            Qualify leads, automate conversations, and handle follow-ups — so
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

      {/* Partner Logos Section */}
      <section
        ref={partnersRef}
        id="partners"
        className={`w-full bg-gradient-to-b from-gray-50 via-white to-gray-100 py-20 px-6 md:px-12 relative overflow-hidden transition-all duration-700 ease-out ${partnersInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-50/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-100 to-transparent"></div>
        <div className="relative z-10">
          <h2 className="text-center text-4xl font-semibold text-gray-800 mb-12 font-heading">
            Trusted by Boston Leasing Teams
          </h2>
          <div className="logo-container">
            <div className="logo-scroll">
              <div className="logo-scroll__wrapper">
                <div className="logo-item">
                  <img
                    src="/Cornerstone.svg"
                    alt="Cornerstone Real Estate"
                    className="h-20 w-auto inline-block"
                  />
                </div>
                <div className="logo-item">
                  <img
                    src="/Fisher.svg"
                    alt="Fisher Realty LLC"
                    className="h-20 w-auto inline-block"
                  />
                </div>
                <div className="logo-item">
                  <img
                    src="/Encore.svg"
                    alt="Encore Realty"
                    className="h-20 w-auto scale-65 inline-block"
                  />
                </div>
                <div className="logo-item">
                  <img
                    src="/Roos.svg"
                    alt="Mark Roos Realty"
                    className="h-20 w-auto inline-block"
                  />
                </div>
                <div className="logo-item">
                  <img
                    src="/nextgen.svg"
                    alt="Nextgen Realty"
                    className="h-24 w-auto scale-75 inline-block"
                  />
                </div>
              </div>

              {/* Duplicate logo set for seamless looping */}
              <div className="logo-scroll__wrapper">
                <div className="logo-item">
                  <img
                    src="/Cornerstone.svg"
                    alt="Cornerstone Real Estate"
                    className="h-20 w-auto inline-block"
                  />
                </div>
                <div className="logo-item">
                  <img
                    src="/Fisher.svg"
                    alt="Fisher Realty LLC"
                    className="h-20 w-auto inline-block"
                  />
                </div>
                <div className="logo-item">
                  <img
                    src="/Encore.svg"
                    alt="Encore Realty"
                    className="h-20 w-auto scale-65 inline-block"
                  />
                </div>
                <div className="logo-item">
                  <img
                    src="/Roos.svg"
                    alt="Mark Roos Realty"
                    className="h-20 w-auto inline-block"
                  />
                </div>
                <div className="logo-item">
                  <img
                    src="/nextgen.svg"
                    alt="Nextgen Realty"
                    className="h-20 w-auto inline-block"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        ref={servicesRef}
        id="services"
        className={`bg-gradient-to-br from-gray-50 via-white to-gray-100 py-24 px-6 md:px-16 relative transition-all duration-700 ease-out ${servicesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-gray-100 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-100 to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-left mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6 font-heading">
              Convert more with less
            </h2>
            <p className="text-xl text-gray-600 max-w-xl">
              AI-powered tools that handle the heavy lifting, so your team can focus on what matters most.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* 24/7 Response */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:border-indigo-200">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-t-2xl"></div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 font-heading">24/7 Response</h3>
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-4 font-heading">
                AI handles leads instantly
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Auto-replies and tour booking with no lag, no missed messages. Never lose a lead again.
              </p>
              <div className="mt-6 flex items-center text-purple-600 font-semibold">
                <span>Always available</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            {/* Follow-up Automation */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:border-indigo-200">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-400 rounded-t-2xl"></div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-400 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 font-heading">Follow-up Automation</h3>
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-4 font-heading">
                Never lose a warm lead
              </h4>
              <p className="text-gray-600 leading-relaxed">
                We track, remind, and re-engage across SMS + email with intelligent timing.
              </p>
              <div className="mt-6 flex items-center text-indigo-500 font-semibold">
                <span>Smart nurturing</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            {/* Human Escalation */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:border-indigo-200">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-indigo-400 rounded-t-2xl"></div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-400 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 font-heading">Human Escalation</h3>
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-4 font-heading">
                Loop in your team when needed
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Only real agents step in when the AI needs a hand. Seamless handoffs.
              </p>
              <div className="mt-6 flex items-center text-blue-600 font-semibold">
                <span>Smart handoffs</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            {/* Calendar Integration */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:border-indigo-200">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-t-2xl"></div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 font-heading">Calendar Integration</h3>
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-4 font-heading">
                Book right into your system
              </h4>
              <p className="text-gray-600 leading-relaxed">
                We connect to your team's calendar or showings tool automatically.
              </p>
              <div className="mt-6 flex items-center text-purple-500 font-semibold">
                <span>Seamless sync</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            {/* Data Sync */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:border-indigo-200">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-400 to-blue-500 rounded-t-2xl"></div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 font-heading">Data Sync</h3>
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-4 font-heading">
                Push to your CRM
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Every lead gets logged and enriched with insights automatically.
              </p>
              <div className="mt-6 flex items-center text-indigo-400 font-semibold">
                <span>Auto-enrichment</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform text-indigo-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            {/* Performance Tracking */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:border-indigo-200">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-blue-400 rounded-t-2xl"></div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-blue-400 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 font-heading">Performance Tracking</h3>
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-4 font-heading">
                See what's working
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Track booked tours, lead response time, and conversion lift with detailed analytics.
              </p>
              <div className="mt-6 flex items-center text-purple-400 font-semibold">
                <span>Real-time insights</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform text-purple-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section
        ref={teamRef}
        id="team"
        className={`bg-white pt-10 pb-24 px-6 md:px-12 relative transition-all duration-700 ease-out ${teamInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-gray-100 to-transparent"></div>
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6 font-heading">
          Meet the Team
        </h2>
        <p className="text-center text-gray-600 max-w-6xl mx-auto mb-16 text-lg">
          HouseFly was created by a small team of Northeastern students who saw
          a problem in the Boston real estate market. Most leads never convert,
          and those that do often require dozens of back and forth messages and
          coordination. That's why we created a platform that automates
          comms, qualifies leads, and optimizes listings, so the human
          agents can focus on closing deals, not managing inboxes.
        </p>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
          {team.map((person, i) => (
            <div
              key={i}
              className="relative group flex flex-col items-center text-center"
            >
              <img
                src={person.image}
                alt={person.name}
                className="w-32 h-32 rounded-full object-cover shadow-md mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 font-heading">
                {person.name}
              </h3>
              <p className="text-gray-500">{person.role}</p>

              {/* Hover Popup */}
              <div className="absolute z-[999] -top-8 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-xl border border-white/30 shadow-2xl rounded-3xl p-7 w-80 opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-105 transition-all duration-300 ease-out pointer-events-none group-hover:pointer-events-auto">
                <div className="flex flex-col items-center">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-32 h-32 rounded-full object-cover shadow-lg ring-2 ring-gray-200 -mt-12 mb-3"
                  />
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="text-2xl font-heading font-extrabold text-gray-900 tracking-tight">{person.name}</h4>
                    <a
                      href={person.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                      title="View LinkedIn"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  </div>
                  <div className="text-gray-800 font-bold text-base mb-2">{person.role}</div>
                  <div className="w-10 h-1 bg-gray-200 rounded-full mb-2"></div>
                  <div className="text-gray-900 text-sm font-semibold mb-1">{person.school}</div>
                  <div className="text-gray-700 text-xs font-semibold mb-3">{person.major}</div>
                  <div className="bg-white/80 text-gray-900 text-sm font-bold px-4 py-2 rounded-lg leading-relaxed text-center shadow-inner">
                    {person.blurb}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section
        ref={contactRef}
        id="contact"
        className={`bg-gradient-to-br from-gray-50 via-white to-gray-100 py-12 px-6 md:px-12 relative transition-all duration-700 ease-out ${contactInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white to-transparent"></div>
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4 font-heading">
          Contact Us
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-6 text-base">
          Reach out anytime. We're happy to chat.
        </p>
        <div className="text-center text-gray-700 mb-6 space-y-1">
          <p>
            Email:{" "}
            <a
              href="houseflyoutreach@gmail.com"
              className="text-indigo-600 hover:text-purple-600 hover:underline transition-colors"
            >
              houseflyoutreach@gmail.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a
              href="tel:+1 (617)-752-2174"
              className="text-indigo-600 hover:text-purple-600 hover:underline transition-colors"
            >
              (617) 752 2174
            </a>
          </p>
        </div>
        <div className="text-center">
          <a
            href="https://calendly.com/milomargolis4/30min?month=2025-06"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-12 py-3 rounded-full bg-gradient-to-r from-[#6C63FF] via-indigo-500 to-blue-500 animate-gradient-x text-white text-lg font-bold shadow-xl border-2 border-white/30 backdrop-blur-md bg-opacity-80 ring-2 ring-blue-300/30 transition-all duration-200 hover:scale-105 hover:shadow-2xl hover:ring-4 hover:ring-blue-400/40 active:scale-97 focus:outline-none focus:ring-4 focus:ring-indigo-300 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-400/30 before:via-purple-400/20 before:to-indigo-400/30 before:blur-lg before:opacity-60 before:transition-opacity before:duration-300 before:pointer-events-none group flex items-center gap-2">
              <span className="z-10">Book a Demo</span>
              <svg className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1 group-hover:scale-110 group-active:scale-95" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 text-gray-500 text-sm py-8 px-6 md:px-12 mt-0 text-center">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div>&copy; {new Date().getFullYear()} HouseFly. All rights reserved.</div>
          <div className="flex gap-4 justify-center md:justify-end">
            <a href="#" className="hover:text-indigo-600 transition-colors">Home</a>
            <a href="#partners" className="hover:text-indigo-600 transition-colors">Partners</a>
            <a href="#services" className="hover:text-indigo-600 transition-colors">Services</a>
            <a href="#team" className="hover:text-indigo-600 transition-colors">Team</a>
            <a href="#contact" className="hover:text-indigo-600 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}