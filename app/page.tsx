import Link from "next/link";
export default function Home() {
  return (
    <div
      className="h-screen w-full bg-cover bg-center relative pb-0"
      style={{ backgroundImage: "url('/hero.jpg')" }}
    >
      {/* Top Nav */}
      <div className="absolute top-0 left-0 right-0 flex justify-between items-center px-8 py-6 z-10 text-white">
        <div className="flex items-center space-x-3">
          <img src="/Logo.svg" alt="HouseFly logo" className="h-8" />
          <span className="text-xl font-bold">HouseFly</span>
        </div>
        <div className="space-x-8 hidden text-lg md:flex">
          <a href="#" className="hover:underline">
            Home
          </a>
          <a href="#" className="hover:underline">
            Services
          </a>
          <Link href="/about">
            <span className="hover:underline">Our team</span>
          </Link>

          <a href="#" className="hover:underline">
            Contact
          </a>
          <a href="#" className="text-xl">
            <img src="/login_head.svg"></img>
          </a>
        </div>
      </div>

      {/* Centered Content */}
      {/* <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4"> */}
      <div className="relative z-0 h-full flex flex-col items-center justify-center text-center px-4 pointer-events-none">
        <h1 className="text-white text-5xl sm:text-6xl md:text-7xl font-bold max-w-5xl leading-tight">
          AI Powered Leasing Agent
        </h1>
        {/* <p className="text-white text-3xl md:text-3xl font-large font-bold mt-6 max-w-4xl"> */}
        <p className="text-white text-3xl md:text-3xl font-large font-bold mt-6 max-w-4xl drop-shadow-2xl">
          Qualify leads, automate conversations, and handle follow-ups — so
          human agents can focus on closing.
        </p>
        <a
          href="https://calendly.com/milomargolis4/30min?month=2025-06"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="mt-12 px-12 py-4 rounded-full bg-[#6C63FF] text-white text-2xl font-semibold hover:bg-indigo-600 shadow-lg">
            Book a Demo
          </button>
        </a>
      </div>

      {/* Partner Logos Section */}
      <section className="w-full bg-gradient-to-r from-[#eceff4] via-[#e7ebf0] to-[#f2f4f7] py-20 px-6 md:px-12">
        <h2 className="text-center text-4xl font-semibold text-gray-800 mb-12">
          Trusted by Boston Leasing Teams
        </h2>

        <div className="partner-scrollbar flex flex-wrap justify-center items-center gap-x-30 gap-y-20 max-w-6xl mx-auto">
          <img
            src="Cornerstone.svg"
            alt="Cornerstone Real Estate"
            className="h-20 w-auto opacity-90 hover:opacity-100 transition duration-300"
          />
          <img
            src="Fisher.svg"
            alt="Fisher Realty LLC"
            className="h-20 w-auto opacity-90 hover:opacity-100 transition duration-300"
          />
          <img
            src="Encore.svg"
            alt="Encore Realty"
            className="h-20 max-w-[170px] w-auto opacity-90 hover:opacity-100 transition duration-300"
          />
          <img
            src="Roos.svg"
            alt="Mark Roos Realty"
            className="h-20 w-auto opacity-90 hover:opacity-100 transition duration-300"
          />
        </div>
      </section>
    </div>
  );
}
