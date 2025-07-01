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

      <section id="services" className="bg-[#f3f4f6] py-24 px-6 md:px-16">
        {/* <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
          Book more with less
        </h2> */}
        <h2 className="text-4xl font-bold text-left text-gray-800 mb-16 pl-7">
          Convert more with less
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
            <h3 className="text-sm text-indigo-500 font-semibold mb-2">
              24/7 Response
            </h3>
            <p className="text-xl font-semibold text-gray-800">
              AI handles leads instantly
            </p>
            <p className="text-sm text-gray-600 mt-3">
              Auto-replies and tour booking with no lag, no missed messages.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
            <h3 className="text-sm text-indigo-500 font-semibold mb-2">
              Follow-up Automation
            </h3>
            <p className="text-xl font-semibold text-gray-800">
              Never lose a warm lead
            </p>
            <p className="text-sm text-gray-600 mt-3">
              We track, remind, and re-engage across SMS + email.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
            <h3 className="text-sm text-indigo-500 font-semibold mb-2">
              Human Escalation
            </h3>
            <p className="text-xl font-semibold text-gray-800">
              Loop in your team when needed
            </p>
            <p className="text-sm text-gray-600 mt-3">
              Only real agents step in when the AI needs a hand.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
            <h3 className="text-sm text-indigo-500 font-semibold mb-2">
              Calendar Integration
            </h3>
            <p className="text-xl font-semibold text-gray-800">
              Book right into your system
            </p>
            <p className="text-sm text-gray-600 mt-3">
              We connect to your team’s calendar or showings tool.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
            <h3 className="text-sm text-indigo-500 font-semibold mb-2">
              Data Sync
            </h3>
            <p className="text-xl font-semibold text-gray-800">
              Push to your CRM
            </p>
            <p className="text-sm text-gray-600 mt-3">
              Every lead gets logged and enriched with insights.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
            <h3 className="text-sm text-indigo-500 font-semibold mb-2">
              Performance Tracking
            </h3>
            <p className="text-xl font-semibold text-gray-800">
              See what’s working
            </p>
            <p className="text-sm text-gray-600 mt-3">
              Track booked tours, lead response time, and conversion lift.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="bg-white py-24 px-6 md:px-12">
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
        className="bg-[#f9fafb] py-20 px-6 md:px-12 border-t border-gray-200"
      >
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Contact Us
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8 text-lg">
          Reach out anytime. We’re happy to chat.
        </p>

        <div className="text-center text-gray-700 mb-8 space-y-2">
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
            <button className="px-10 py-3 rounded-full bg-[#6C63FF] text-white text-lg font-semibold hover:bg-indigo-600 shadow-md">
              Book a Demo
            </button>
          </a>
        </div>
      </section>
    </div>
  );
}
