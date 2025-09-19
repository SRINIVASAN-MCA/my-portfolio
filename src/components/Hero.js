export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-r from-gray-900 to-gray-800"
    >
      <h2 className="text-4xl md:text-6xl font-bold mb-4">
        Hi, I'm <span className="text-blue-400">Srinivasan V</span>
      </h2>
      <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
        A passionate Web Developer specialized in building modern, responsive, and scalable web applications using React, Tailwind CSS, and Laravel.
      </p>
      <div className="mt-6 flex gap-4">
        <a
          href="#projects"
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium shadow-md"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="border border-blue-400 hover:bg-blue-500 hover:text-white text-blue-400 px-6 py-3 rounded-lg font-medium shadow-md"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}
