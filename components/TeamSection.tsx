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
            <div className="mb-2 text-lg font-bold text-gray-800 font-heading">
              {person.school} — {person.major}
            </div>
            <div className="bg-white/80 text-gray-900 text-sm font-bold px-4 py-2 rounded-lg leading-relaxed text-center shadow-inner">
              {person.blurb}
            </div>
            <a
              href={person.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 text-indigo-600 hover:text-purple-600 hover:underline text-sm font-semibold"
            >
              View LinkedIn
            </a>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default TeamSection; 