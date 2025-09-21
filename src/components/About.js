import logo from '../img/SRINI.jpg';

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-20 relative"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent"></div>
      
      <div className="relative z-10 max-w-6xl w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto"></div>
        </div>
        
        {/* Main content card */}
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/10 shadow-2xl mb-12">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Profile image placeholder - you can add an actual image later */}
            <div className="md:col-span-1 flex justify-center">
              <div className="w-48 h-48 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-xl">
                <div className="w-44 h-44 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center">
                  {/* <span className="text-6xl font-bold text-white">SV</span> */}
                   <img src={logo} alt="Srini" className="w-44 h-44 rounded-full object-cover" />
                </div>
              </div>
            </div>
            
            {/* About content */}
            <div className="md:col-span-2 space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I am a dedicated and detail-oriented{" "}
                <span className="text-purple-400 font-semibold">Full Stack Developer</span>{" "}
                with comprehensive experience in creating dynamic and user-friendly web applications. 
                Currently working as a{" "}
                <span className="text-pink-400 font-semibold">PHP Laravel Developer</span>{" "}
                at Artictern Consulting Service Pvt Ltd, Chennai.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                With a Master's degree in Computer Applications (MCA) from Thiruvalluvar University and a strong
                foundation in both frontend and backend technologies, I specialize in modern web development practices.
                I enjoy solving complex problems and continuously learning new technologies to deliver scalable solutions.
              </p>
            </div>
          </div>
        </div>
        
        {/* Info cards grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Current Role Card */}
          <div className="group bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-purple-400 mb-2 group-hover:text-pink-400 transition-colors duration-300">
                  Current Role
                </h3>
                <p className="text-gray-300 font-medium">PHP Laravel Developer</p>
                <p className="text-gray-400">Artictern Consulting Service Pvt Ltd</p>
                <div className="mt-2">
                  <span className="inline-block px-3 py-1 bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-full text-xs font-medium text-purple-300 border border-purple-500/30">
                    Jan 2025 - Present
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Education Card */}
          <div className="group bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-pink-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-pink-500/25">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-pink-400 mb-2 group-hover:text-purple-400 transition-colors duration-300">
                  Education
                </h3>
                <p className="text-gray-300 font-medium">Master of Computer Applications</p>
                <p className="text-gray-400">Thiruvalluvar University</p>
                <div className="mt-2">
                  <span className="inline-block px-3 py-1 bg-gradient-to-r from-pink-600/30 to-purple-600/30 rounded-full text-xs font-medium text-pink-300 border border-pink-500/30">
                    CGPA: 7.86
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
