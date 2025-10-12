import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; // make sure this works after installing lucide-react

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  // Apply dark/light mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/30 backdrop-blur-lg text-white px-6 md:px-8 py-4 flex justify-between items-center border-b border-white/10 z-50 transition-all duration-300">
      {/* Left: Logo */}
      <div className="flex items-center space-x-3">
        <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-sm">SV</span>
        </div>
        <h1 className="text-lg md:text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Srinivasan V
        </h1>
      </div>

      {/* Desktop Nav */}
      <ul className="hidden md:flex gap-1 font-medium bg-white/5 backdrop-blur-lg px-6 py-2 rounded-full border border-white/10 text-sm">
        {["Home", "About", "Experience", "Skills", "Projects", "Education", "Contact"].map(
          (item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="px-4 py-2 rounded-full hover:bg-purple-500/20 hover:text-purple-400 transition-all duration-300"
              >
                {item}
              </a>
            </li>
          )
        )}
      </ul>

      {/* Right side buttons */}
      <div className="flex items-center gap-3">
        {/* Dark mode toggle */}
        {/* <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
        >
          <span className="text-white text-sm">{darkMode ? "🌙" : "☀️"}</span>
        </button> */}

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 text-white"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile side drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-gray-900 to-black text-white transform ${
          menuOpen ? "translate-x-0 bg-linear-to-bl from-violet-500 to-fuchsia-500" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-40 border-r border-white/10`}
      >
        <div className="flex justify-between items-center p-5 border-b border-white/10">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button onClick={() => setMenuOpen(false)}>
            <X className="w-5 h-5" />
          </button>
        </div>

        <ul className="flex flex-col mt-2 space-y-2 px-5 gradient-bg">
          {["Home", "About", "Experience", "Skills", "Projects", "Education", "Contact"].map(
            (item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="block px-3 py-2 rounded-lg hover:bg-purple-500/20 hover:text-purple-400 transition-all duration-300"
                >
                  {item}
                </a>
              </li>
            )
          )}
        </ul>
      </div>

      {/* Overlay when menu open */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 transition-opacity duration-300"
        ></div>
      )}
    </nav>
  );
}
