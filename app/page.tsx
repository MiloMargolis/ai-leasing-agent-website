"use client";
import React, { useRef, useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import PartnersSection from "../components/PartnersSection";
import ServicesSection from "../components/ServicesSection";
import TeamSection from "../components/TeamSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

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
      role: "Founder",
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
      name: "Jesse Goldberg",
      role: "Business Development", 
      image: "/person7.jpg",
      school: "Northeastern University",
      major: "Business Administration and Psychology",
      blurb: "Business Operations & Strategy @ EazyDone",
      linkedin: "https://www.linkedin.com/in/jesse-goldberg-175b76293/"
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
  ];

  const [heroRef, heroInView] = useInView<HTMLDivElement>();
  const [partnersRef, partnersInView] = useInView<HTMLElement>();
  const [servicesRef, servicesInView] = useInView<HTMLElement>();
  const [teamRef, teamInView] = useInView<HTMLElement>();
  const [contactRef, contactInView] = useInView<HTMLElement>();
  const [openService, setOpenService] = useState<null | number>(null);

  const services = [
    {
      icon: (
        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      ),
      cardIcon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      ),
      title: "24/7 Response",
      subtitle: "AI handles leads instantly",
      description: "Our AI handles leads instantly, auto-replies, and books tours with no lag or missed messages. Never lose a lead again.",
      features: [
        "Instant SMS & email replies",
        "Tour scheduling integration",
        "Always available, 24/7",
        "Seamless handoff to human agents"
      ],
      gradient: "from-purple-600 to-blue-500",
      divider: "from-indigo-400 via-blue-400 to-purple-400"
    },
    {
      icon: (
        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
      ),
      cardIcon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
      ),
      title: "Follow-up Automation",
      subtitle: "Never lose a warm lead",
      description: "We track, remind, and re-engage across SMS + email with intelligent timing.",
      features: [
        "Automated reminders",
        "Smart re-engagement",
        "Works across SMS & email",
        "Personalized timing"
      ],
      gradient: "from-indigo-500 to-purple-400",
      divider: "from-indigo-400 via-purple-400 to-indigo-200"
    },
    {
      icon: (
        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
      ),
      cardIcon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
      ),
      title: "Human Escalation",
      subtitle: "Loop in your team when needed",
      description: "Only real agents step in when the AI needs a hand. Seamless handoffs.",
      features: [
        "Automatic escalation",
        "Seamless handoff",
        "Human-in-the-loop",
        "No missed opportunities"
      ],
      gradient: "from-blue-600 to-indigo-400",
      divider: "from-blue-400 via-indigo-400 to-blue-200"
    },
    {
      icon: (
        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
      ),
      cardIcon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
      ),
      title: "Calendar Integration",
      subtitle: "Book right into your system",
      description: "We connect to your team's calendar or showings tool automatically.",
      features: [
        "Google/Outlook calendar sync",
        "Showings tool integration",
        "No manual entry",
        "Real-time updates"
      ],
      gradient: "from-purple-500 to-indigo-500",
      divider: "from-purple-400 via-indigo-400 to-indigo-200"
    },
    {
      icon: (
        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
      ),
      cardIcon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
      ),
      title: "Data Sync",
      subtitle: "Push to your CRM",
      description: "Every lead gets logged and enriched with insights automatically.",
      features: [
        "Automatic CRM logging",
        "Lead enrichment",
        "No manual data entry",
        "Analytics-ready"
      ],
      gradient: "from-indigo-400 to-blue-500",
      divider: "from-indigo-400 via-blue-400 to-blue-200"
    },
    {
      icon: (
        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
      ),
      cardIcon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
      ),
      title: "Performance Tracking",
      subtitle: "See what's working",
      description: "Track booked tours, lead response time, and conversion lift with detailed analytics.",
      features: [
        "Tour & lead analytics",
        "Response time tracking",
        "Conversion lift",
        "Real-time insights"
      ],
      gradient: "from-purple-400 to-blue-400",
      divider: "from-purple-400 via-blue-400 to-blue-200"
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <HeroSection heroRef={heroRef} heroInView={heroInView} />
      {/* Partner Logos Section */}
      <PartnersSection partnersRef={partnersRef} partnersInView={partnersInView} />
      {/* Services Section */}
      <ServicesSection servicesRef={servicesRef} servicesInView={servicesInView} services={services} openService={openService} setOpenService={setOpenService} />
      {/* Pricing Section */}
      <section
        className="relative py-16 px-4 md:px-0 bg-gradient-to-br from-gray-50 via-white to-gray-100"
      >
        <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-gray-100 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-gray-100 to-transparent"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6 font-heading text-center">Pricing</h2>
          <p className="text-base text-gray-600 text-center mb-10 max-w-xl mx-auto font-medium">Simple, transparent pricing. Only pay for results or choose a flexible SaaS plan. No hidden fees or no surprises; just more closed deals.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Commission Split */}
            <div className="relative bg-white border border-gray-200 rounded-2xl shadow-xl p-7 flex flex-col items-start text-left min-h-[180px] transition-transform duration-200 hover:-translate-y-1 hover:shadow-2xl group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center shadow-lg mb-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1 font-heading tracking-tight">Commission Split</h3>
              <div className="text-2xl font-extrabold text-indigo-600 mb-1 tracking-tight">20% fee</div>
              <div className="text-gray-700 mb-2 font-semibold text-sm">of agent's broker fee for any lead we help convert</div>
              <ul className="text-gray-600 text-sm space-y-1 mb-0">
                <li>• No upfront cost</li>
                <li>• Pay only for results</li>
                <li>• Perfect for agents & teams</li>
              </ul>
            </div>
            {/* SaaS Tier */}
            <div className="relative bg-white border border-gray-200 rounded-2xl shadow-xl p-7 flex flex-col items-start text-left min-h-[180px] transition-transform duration-200 hover:-translate-y-1 hover:shadow-2xl group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-500 flex items-center justify-center shadow-lg mb-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1 font-heading tracking-tight">SaaS Tier</h3>
              <div className="text-2xl font-extrabold text-purple-600 mb-1 tracking-tight">Custom</div>
              <div className="text-gray-700 mb-2 font-semibold text-sm">per month for AI follow-up + dashboard</div>
              <ul className="text-gray-600 text-sm space-y-1 mb-0">
                <li>• Tiered by # of listings or agents</li>
                <li>• Includes analytics dashboard</li>
                <li>• Integrates with your CRM</li>
              </ul>
            </div>
            {/* Enterprise Option */}
            <div className="relative bg-white border border-gray-200 rounded-2xl shadow-xl p-7 flex flex-col items-start text-left min-h-[180px] transition-transform duration-200 hover:-translate-y-1 hover:shadow-2xl group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-700 to-indigo-700 flex items-center justify-center shadow-lg mb-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h8M12 8v8" /></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1 font-heading tracking-tight">Enterprise</h3>
              <div className="text-2xl font-extrabold text-blue-600 mb-1 tracking-tight">Custom</div>
              <div className="text-gray-700 mb-2 font-semibold text-sm">For brokerages & large teams</div>
              <ul className="text-gray-600 text-sm space-y-1 mb-0">
                <li>• Dedicated onboarding</li>
                <li>• Custom integrations</li>
                <li>• Priority support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Team Section */}
      <TeamSection teamRef={teamRef} teamInView={teamInView} team={team} />
      {/* Contact Section */}
      <ContactSection contactRef={contactRef} contactInView={contactInView} />
      {/* Footer */}
      <Footer />
      {/* Service Modal */}
      {openService !== null && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40">
          <div className="bg-white/70 backdrop-blur-xl border border-white/30 shadow-2xl rounded-3xl p-12 max-w-xl w-full relative animate-fade-in flex flex-col items-center">
            <button
              className="absolute top-5 right-5 text-gray-400 hover:text-indigo-600 text-3xl font-bold focus:outline-none focus:ring-2 focus:ring-indigo-300 rounded-full transition-colors"
              onClick={() => setOpenService(null)}
              aria-label="Close"
              type="button"
              style={{lineHeight: 1}}
            >
              &times;
            </button>
            <div className="flex flex-col items-center mb-6">
              <div className={`w-24 h-24 bg-gradient-to-br ${services[openService].gradient} rounded-2xl flex items-center justify-center mb-6 shadow-xl`}>
                {services[openService].icon}
              </div>
              <h3 className="text-3xl font-heading font-extrabold mb-2 text-gray-900 text-center">{services[openService].title}</h3>
              <div className="text-lg text-gray-700 font-semibold mb-4 text-center">{services[openService].subtitle}</div>
              <div className={`w-16 h-1 bg-gradient-to-r ${services[openService].divider} rounded-full mb-4`}></div>
            </div>
            <p className="text-gray-800 mb-6 text-center text-lg font-medium max-w-md">{services[openService].description}</p>
            <ul className="grid gap-4 w-full max-w-md mb-2">
              {services[openService].features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3 text-gray-700 text-base font-semibold">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100">
                    <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 17l-4 4m0 0l-4-4m4 4V3" /></svg>
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}