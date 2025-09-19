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
    <nav className="fixed top-0 left-0 w-full bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white px-8 py-4 flex justify-between items-center shadow-md z-50 transition-colors duration-300">
      {/* Left side logo */}
      <h1 className="text-2xl font-bold tracking-wide">My Portfolio</h1>

      {/* Right side nav links */}
      <ul className="hidden md:flex gap-8 font-medium bg-blue-200 dark:bg-blue-600 text-gray-900 dark:text-white px-6 py-2 rounded-lg shadow transition-colors duration-300">
        <li>
          <a href="#home" className="hover:text-blue-600 dark:hover:text-blue-300">Home</a>
        </li>
        <li>
          <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-300">About</a>
        </li>
        <li>
          <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-300">Projects</a>
        </li>
        <li>
          <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-300">Contact</a>
        </li>
      </ul>

      {/* Toggle button */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="ml-4 px-4 py-2 rounded-lg border border-gray-400 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
      >
        {darkMode ? "🌙 Dark" : "☀️ Light"}
      </button>
    </nav>
  );
}
