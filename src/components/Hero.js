export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-20 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-blue-900/20"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
      <div className="absolute bottom-40 left-1/2 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      
      {/* Main content - no card design */}
      <div className="relative z-10 max-w-4xl w-full">
        <div className="mb-12">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Hi, I'm Srinivasan V
          </h2>
          <div className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 rounded-full px-6 py-3 mb-8">
            <h3 className="text-xl md:text-2xl text-white font-semibold">
              Full Stack Developer
            </h3>
          </div>
        </div>
        
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
          A passionate Full Stack Developer with expertise in{" "}
          <span className="text-purple-400 font-semibold">PHP, Laravel, Python, Django</span>,{" "}
          <span className="text-pink-400 font-semibold">React JS, and Vue JS</span>. 
          Specialized in building modern, responsive, and scalable web applications with strong database management skills.
        </p>
        
        {/* Tech stack quick preview */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {['PHP', 'Laravel', 'Python', 'React', 'Vue.js', 'MySQL'].map((tech, index) => (
            <span key={index} className="px-4 py-2 bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-full text-sm font-medium border border-purple-400/30">
              {tech}
            </span>
          ))}
        </div>
        
        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
           <a
            href="/SRINIVASAN_V.pdf" download
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-semibold text-white shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
          >
            Download Resume
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-transparent border-2 border-purple-400 rounded-xl font-semibold text-purple-400 hover:bg-purple-400 hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
