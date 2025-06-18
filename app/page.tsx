export default function Home() {
  return (
    <div
      className="h-screen w-full bg-cover bg-center relative"
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
          <a href="#" className="hover:underline">
            About Us
          </a>
          <a href="#" className="hover:underline">
            Contact
          </a>
          <a href="#" className="text-xl">
            <img src="/login_head.svg"></img>
          </a>
        </div>
      </div>

      {/* Centered Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-white text-10xl md:text-7xl font-bold max-w-5xl leading-tight">
          AI Powered Leasing Agent
        </h1>
        {/* <p className="text-white text-3xl md:text-3xl font-large font-bold mt-6 max-w-4xl"> */}
        <p className="text-white text-3xl md:text-3xl font-large font-bold mt-6 max-w-4xl drop-shadow-2xl">
          Qualify leads, automate conversations, and handle follow-ups — so
          agents can focus on closing.
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
      <section className="w-full bg-gradient-to-b from-gray-100 to-white py-24 px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
          Trusted by Boston Leasing Teams
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-12 px-4">
          <img
            src="file.svg"
            alt="Partner 1"
            className="h-16 grayscale hover:grayscale-0 transition"
          />
          <img
            src="file.svg"
            alt="Partner 2"
            className="h-16 grayscale hover:grayscale-0 transition"
          />
          <img
            src="file.svg"
            alt="Partner 3"
            className="h-16 grayscale hover:grayscale-0 transition"
          />
          <img
            src="file.svg"
            alt="Partner 4"
            className="h-16 grayscale hover:grayscale-0 transition"
          />
          {/* Add more logos as needed */}
        </div>
      </section>
    </div>
  );
}
