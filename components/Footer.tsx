import React from "react";

const Footer: React.FC = () => (
  <footer className="bg-gray-100 text-gray-500 text-sm py-8 px-6 md:px-12 mt-0 text-center">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <div>&copy; {new Date().getFullYear()} HouseFly. All rights reserved.</div>
      <div className="flex gap-4 justify-center md:justify-end">
        <a href="#" className="hover:text-indigo-600 transition-colors">Home</a>
        <a href="#partners" className="hover:text-indigo-600 transition-colors">Partners</a>
        <a href="#services" className="hover:text-indigo-600 transition-colors">Services</a>
        <a href="#team" className="hover:text-indigo-600 transition-colors">Team</a>
        <a href="#contact" className="hover:text-indigo-600 transition-colors">Contact</a>
        <a href="/privacy" className="hover:text-indigo-600 transition-colors">Privacy Policy</a>
      </div>
    </div>
  </footer>
);

export default Footer; 