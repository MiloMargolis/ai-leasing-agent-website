export default function Home() {
  return (
    <div
      className="h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: "url('/hero.jpg')" }}
    >
      {/* Top Nav */}
      <div className="absolute top-0 left-0 right-0 flex justify-between items-center px-8 py-6 z-10 text-white">
        <div className="flex items-center space-x-3">
          <img src="/Logo.svg" alt="HouseFly logo" className="h-8" />
          <span className="text-xl font-bold">HouseFly</span>
        </div>
        <div className="space-x-8 hidden md:flex">
          <a href="#" className="hover:underline">
            Browse
          </a>
          <a href="#" className="hover:underline">
            My Tours
          </a>
          <a href="#" className="hover:underline">
            My Apartments
          </a>
          <a href="#" className="hover:underline">
            Resources
          </a>
          <a href="#" className="hover:underline">
            Contact
          </a>
          <a href="#" className="text-xl">
            👤
          </a>
        </div>
      </div>

      {/* Centered Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-white text-10xl md:text-7xl font-bold max-w-5xl leading-tight">
          AI Powered Leasing Agent
        </h1>
        <p className="text-white text-3xl md:text-3xl font-large font-bold mt-6 max-w-4xl">
          Qualify leads, automate conversations, and handle follow-ups — so
          agents can focus on closing.
        </p>
        <button className="mt-12 px-12 py-4 rounded-full bg-[#6C63FF] text-white text-2xl font-semibold hover:bg-indigo-600 shadow-lg">
          Book a Demo
        </button>
      </div>
    </div>
  );
}
