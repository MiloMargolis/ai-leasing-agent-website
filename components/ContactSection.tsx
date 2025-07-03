import React from "react";

interface ContactSectionProps {
  contactRef: React.RefObject<HTMLElement | null>;
  contactInView: boolean;
}

const ContactSection: React.FC<ContactSectionProps> = ({ contactRef, contactInView }) => (
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
);

export default ContactSection; 