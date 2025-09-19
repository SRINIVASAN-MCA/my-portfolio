import { useState, useEffect } from "react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(true);

  // Apply dark/light mode to <html>
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/10 backdrop-blur-lg text-white px-8 py-4 flex justify-between items-center border-b border-white/10 z-50 transition-all duration-300">
      {/* Left side logo */}
      <div className="flex items-center space-x-3">
        <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-sm">SV</span>
        </div>
        <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Srinivasan V
        </h1>
      </div>

      {/* Right side nav links */}
      <ul className="hidden md:flex gap-1 font-medium bg-white/5 backdrop-blur-lg px-6 py-2 rounded-full border border-white/10 text-sm">
        <li>
          <a href="#home" className="px-4 py-2 rounded-full hover:bg-purple-500/20 hover:text-purple-400 transition-all duration-300">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="px-4 py-2 rounded-full hover:bg-purple-500/20 hover:text-purple-400 transition-all duration-300">
            About
          </a>
        </li>
        <li>
          <a href="#experience" className="px-4 py-2 rounded-full hover:bg-purple-500/20 hover:text-purple-400 transition-all duration-300">
            Experience
          </a>
        </li>
        <li>
          <a href="#skills" className="px-4 py-2 rounded-full hover:bg-purple-500/20 hover:text-purple-400 transition-all duration-300">
            Skills
          </a>
        </li>
        <li>
          <a href="#projects" className="px-4 py-2 rounded-full hover:bg-purple-500/20 hover:text-purple-400 transition-all duration-300">
            Projects
          </a>
        </li>
        <li>
          <a href="#education" className="px-4 py-2 rounded-full hover:bg-purple-500/20 hover:text-purple-400 transition-all duration-300">
            Education
          </a>
        </li>
        <li>
          <a href="#contact" className="px-4 py-2 rounded-full hover:bg-purple-500/20 hover:text-purple-400 transition-all duration-300">
            Contact
          </a>
        </li>
      </ul>

      {/* Theme toggle button */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="ml-4 p-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
      >
        <span className="text-white text-sm">{darkMode ? "🌙" : "☀️"}</span>
      </button>
    </nav>
  );
}
