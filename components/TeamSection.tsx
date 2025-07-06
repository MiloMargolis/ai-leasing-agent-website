import React from "react";

interface TeamSectionProps {
  teamRef: React.RefObject<HTMLElement | null>;
  teamInView: boolean;
  team: any[];
}

const TeamSection: React.FC<TeamSectionProps> = ({ teamRef, teamInView, team }) => (
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
);

export default TeamSection; 