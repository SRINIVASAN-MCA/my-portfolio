export default function Projects() {
  const projects = [
    {
      title: "Blood Bank Maintenance System",
      description: "A comprehensive web-based application for managing blood bank operations with dedicated modules for donors, patients, and administrators. The system streamlines blood bank management processes and ensures efficient tracking of blood inventory.",
      technologies: ["Python", "Django"],
      features: [
        "Donor management system",
        "Patient records management",
        "Admin dashboard",
        "Blood inventory tracking",
        "User authentication and authorization"
      ],
      gradient: "from-red-500 to-pink-500",
      icon: "🏥",
      status: "Production"
    },
    {
      title: "Billing Software",
      description: "A modern billing software solution with advanced features for product categorization and comprehensive shopping bill management. Built with React.js for optimal user experience and performance.",
      technologies: ["React JS", "JavaScript", "Tailwind CSS"],
      features: [
        "Product categorization",
        "Shopping bill management",
        "Responsive design",
        "Real-time calculations",
        "User-friendly interface"
      ],
      gradient: "from-blue-500 to-purple-500",
      icon: "💰",
      status: "Completed"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-16 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-4"></div>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Showcasing some of my recent work and technical achievements
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative bg-white/5 backdrop-blur-lg rounded-3xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/25"
            >
              {/* Project header */}
              <div className={`relative h-48 bg-gradient-to-br ${project.gradient} p-8 flex items-center justify-center`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10 text-center">
                  <div className="text-6xl mb-4 animate-bounce">{project.icon}</div>
                  <div className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                    {project.status}
                  </div>
                </div>
                {/* Floating orbs */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/10 rounded-full animate-pulse"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 bg-white/20 rounded-full animate-pulse animation-delay-1000"></div>
              </div>
              
              {/* Project content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                  {project.description}
                </p>
                
                {/* Features section */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-purple-400 mb-4 flex items-center">
                    <span className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded mr-3 flex items-center justify-center text-xs">
                      ✨
                    </span>
                    Key Features
                  </h4>
                  <div className="grid grid-cols-1 gap-3">
                    {project.features.map((feature, i) => (
                      <div key={i} className="flex items-center text-gray-300 hover:text-white transition-colors duration-300">
                        <div className={`w-2 h-2 bg-gradient-to-r ${project.gradient} rounded-full mr-3 flex-shrink-0`}></div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Technologies */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-pink-400 mb-4 flex items-center">
                    <span className="w-6 h-6 bg-gradient-to-r from-pink-500 to-purple-500 rounded mr-3 flex items-center justify-center text-xs">
                      ⚡
                    </span>
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, i) => (
                      <span 
                        key={i} 
                        className={`px-4 py-2 bg-gradient-to-r ${project.gradient} rounded-full text-white text-sm font-medium shadow-lg transform hover:scale-110 transition-transform duration-300`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Action buttons */}
                <div className="flex gap-4">
                  <button className={`flex-1 py-3 px-6 bg-gradient-to-r ${project.gradient} rounded-xl text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300`}>
                    View Details
                  </button>
                  <button className="px-6 py-3 border-2 border-purple-400 rounded-xl text-purple-400 hover:bg-purple-400 hover:text-white transition-all duration-300 font-semibold">
                    Demo
                  </button>
                </div>
              </div>
              
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 to-pink-600/0 group-hover:from-purple-600/5 group-hover:to-pink-600/5 transition-all duration-500 pointer-events-none rounded-3xl"></div>
            </div>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">
              Interested in working together?
            </h3>
            <p className="text-gray-300 mb-6">
              I'm always open to discussing new opportunities and exciting projects.
            </p>
            <a 
              href="#contact" 
              className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
