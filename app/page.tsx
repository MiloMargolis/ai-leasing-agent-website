import React from "react";

export default function Home() {
  const team = [
    {
      name: "Milo Margolis",
      role: "Founder",
      image: "/person1.jpg",
      school: "Northeastern University",
      major: "Computer Science + AI",
      blurb: "Data Engineering @ Loper, Product @ Cranium AI",
    },
    {
      name: "Rowan Frew",
      role: "Business Development",
      image: "/person2.jpg",
      school: "Northeastern University",
      major: "Business Administration",
      blurb: "Financial Analyst @ UBS, Piraeus Bank",
    },
    {
      name: "David Rooney",
      role: "Business Development",
      image: "/person3.jpg",
      school: "Northeastern University",
      major: "Industrial Engineering",
      blurb: "R&D @ MATT Energy and Bourdal",
    },

    {
      name: "Josh Segal",
      role: "Engineering",
      image: "/person4.jpg",
      school: "Northeastern University",
      major: "Computer Science + AI",
      blurb: "Software engineering @ Harvard and NEXT",
    },
    {
      name: "Lubaina Malvi",
      role: "Engineering",
      image: "/person5.jpg",
      school: "Northeastern University",
      major: "Business Administration",
      blurb: "Software Engineering @ KKR and Flexcarr",
    },
    {
      name: "Willem Shak",
      role: "Engineering",
      image: "/person6.jpg",
      school: "Northeastern University",
      major: "Business Administration",
      blurb: "Software engineering @ Chourus",
    },
    {
      name: "Jesse Goldberg",
      role: "Business Development",
      image: "/person7.jpg",
      school: "Northeastern University",
      major: "Business Administration and Psychology",
      blurb: "Business Operations and Strategy @ EazyDone",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div
        className="h-screen w-full bg-cover bg-center relative pb-0"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      >
        {/* Top Nav */}
        <div className="absolute top-0 left-0 right-0 flex justify-between items-center px-8 py-6 z-50 text-white pointer-events-auto">
          <div className="flex items-center space-x-3">
            <img src="/Logo.svg" alt="HouseFly logo" className="h-8" />
            <span className="text-xl font-bold">HouseFly</span>
          </div>
          <div className="space-x-8 hidden text-lg md:flex">
            <a href="#" className="hover:underline">
              Home
            </a>
            <a href="#services" className="hover:underline">
              Services
            </a>
            <a href="#partners" className="hover:underline">
              Our partners
            </a>

            <a href="#team" className="hover:underline">
              Our team
            </a>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
          </div>
        </div>

        {/* Centered Content */}
        <div className="relative z-0 h-full flex flex-col items-center justify-center text-center px-4 pointer-events-none">
          <h1 className="text-white text-5xl sm:text-6xl md:text-7xl font-bold max-w-5xl leading-tight">
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
            <button className="mt-12 px-12 py-4 rounded-full bg-[#6C63FF] text-white text-2xl font-semibold hover:bg-indigo-600 shadow-lg pointer-events-auto">
              Book a Demo
            </button>
          </a>
        </div>
      </div>

      {/* Partner Logos Section */}
      <section
        id="partners"
        className="w-full bg-gradient-to-r from-[#eceff4] via-[#e7ebf0] to-[#f2f4f7] py-20 px-6 md:px-12"
      >
        <h2 className="text-center text-4xl font-semibold text-gray-800 mb-12">
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
      </section>

      {/* Services Section */}

      <section id="services" className="bg-gradient-to-br from-gray-50 via-white to-gray-50 py-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Convert more with less
            </h2>
            <p className="text-xl text-gray-600 max-w-5xl mx-auto">
              AI-powered tools that handle the heavy lifting, so your team can focus on what matters most.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* 24/7 Response */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-300 hover:-translate-y-2">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-t-2xl"></div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900">24/7 Response</h3>
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-4">
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
            <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-300 hover:-translate-y-2">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-400 rounded-t-2xl"></div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-400 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900">Follow-up Automation</h3>
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-4">
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
            <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-300 hover:-translate-y-2">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-indigo-400 rounded-t-2xl"></div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-400 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900">Human Escalation</h3>
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-4">
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
            <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-300 hover:-translate-y-2">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-t-2xl"></div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900">Calendar Integration</h3>
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-4">
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
            <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-300 hover:-translate-y-2">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-400 to-blue-500 rounded-t-2xl"></div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900">Data Sync</h3>
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-4">
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
            <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-300 hover:-translate-y-2">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-blue-400 rounded-t-2xl"></div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-blue-400 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900">Performance Tracking</h3>
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-4">
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
      <section id="team" className="bg-white pt-10 pb-24 px-6 md:px-12">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Meet the Team
        </h2>
        <p className="text-center text-gray-600 max-w-6xl mx-auto mb-16 text-lg">
          HouseFly was created by a small team of Northeastern students who saw
          a problem in the Boston real estate market. Most leads never convert,
          and those that do often require dozens of back and forth messages and
          coordination. That's why we created a platform that automates
          communication, qualifies leads, and optimizes listings, so the human
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
              <h3 className="text-xl font-semibold text-gray-800">
                {person.name}
              </h3>
              <p className="text-gray-500">{person.role}</p>

              {/* Hover Popup */}
              <div className="absolute z-20 -top-4 left-1/2 -translate-x-1/2 bg-white shadow-2xl border border-gray-100 rounded-2xl p-6 w-72 opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-300 ease-out pointer-events-none group-hover:pointer-events-auto transform-gpu">
                
                {/* Profile Image */}
                <div className="flex justify-center mb-4">
                  <div className="relative">
                    <img
                      src={person.image}
                      alt={person.name}
                      className="w-34 h-34 rounded-full object-cover shadow-lg ring-4 ring-white"
                    />
                  </div>
                </div>
                
                {/* Content */}
                <div className="text-center space-y-3">
                  <div>
                    <h4 className="text-xl font-extrabold text-gray-900 mb-1">
                      {person.name}
                    </h4>
                    <p className="text-base font-semibold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full inline-block">
                      {person.role}
                    </p>
                  </div>
                  
                  <div className="border-t border-gray-100 pt-3">
                    <p className="text-base font-bold text-gray-800 mb-1">
                      {person.school}
                    </p>
                    <p className="text-sm text-gray-600 font-semibold mb-3">
                      {person.major}
                    </p>
                    <p className="text-sm text-gray-700 leading-relaxed bg-gray-50 px-3 py-2 rounded-lg font-medium">
                      {person.blurb}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="bg-[#f9fafb] py-12 px-6 md:px-12 border-t border-gray-200"
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
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
              className="text-indigo-600 hover:underline"
            >
              houseflyoutreach@gmail.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a
              href="tel:+1 (617)-752-2174"
              className="text-indigo-600 hover:underline"
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
            <button className="px-8 py-2.5 rounded-full bg-[#6C63FF] text-white text-base font-semibold hover:bg-indigo-600 shadow-md">
              Book a Demo
            </button>
          </a>
        </div>
      </section>
    </div>
  );
}
