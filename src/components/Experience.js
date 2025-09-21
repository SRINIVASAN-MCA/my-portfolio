export default function Experience() {
  const experiences = [
    {
      title: "Travels2020",
      company: "Artictern Consulting Service Pvt Ltd",
      location: "Chennai",
      duration: "Jan 2025 - Present",
      description: "Working on PHP, Laravel, MySQL, Bootstrap, JavaScript, HTML",
      website: "https://www.travels2020.com/",
      technologies: ["PHP", "Laravel", "MySQL", "Bootstrap", "JavaScript", "HTML"],
      status: "current"
    },
    {
      title: "Indiansteelcompany",
      company: "Eagleminds Technologies Pvt Ltd",
      location: "Tirupattur",
      duration: "Jun 2024 - Jan 2025",
      description: "Worked on PHP, Laravel, MySQL, Tailwind CSS, Vue JS. Contributed to scalable web applications and integrated REST APIs.",
      website: "https://www.indiansteelcompany.in/",
      technologies: ["PHP", "Laravel", "MySQL", "Tailwind CSS", "Vue JS"],
      status: "previous"
    },
    {
      title: " Billing Software ",
      company: "Eagleminds Technologies Pvt Ltd",
      location: "Tirupattur",
      duration: "Dec 2023 - May 2024",
      description: "Developed responsive websites and optimized front-end performance for billing software.",
      technologies: ["HTML", "React JS", "Tailwind CSS", "Material MUI"],
      status: "project"
    }
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'current':
        return (
          <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
        );
      case 'previous':
        return (
          <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
        );
      case 'project':
        return (
          <div className="w-4 h-4 bg-pink-500 rounded-full"></div>
        );
      default:
        return null;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'current':
        return 'from-green-500 to-emerald-500';
      case 'previous':
        return 'from-purple-500 to-indigo-500';
      case 'project':
        return 'from-pink-500 to-rose-500';
      default:
        return 'from-purple-500 to-pink-500';
    }
  };

  return (
    <section id="experience" className="py-20 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-transparent to-pink-900/10"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-4"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            My professional journey in web development and software engineering
          </p>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="group relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/25"
            >
              {/* Timeline connector */}
              {index < experiences.length - 1 && (
                <div className="absolute left-8 top-full w-0.5 h-8 bg-gradient-to-b from-purple-500 to-transparent"></div>
              )}
              
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                {/* Left content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    {getStatusIcon(exp.status)}
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between w-full">
                      <div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                          {exp.title}
                        </h3>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 mt-1">
                          <p className="text-lg font-medium bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            {exp.company}
                          </p>
                          <span className="text-gray-400 text-sm hidden sm:block">•</span>
                          <p className="text-gray-400 text-sm">{exp.location}</p>
                        </div>
                      </div>
                      <div className="mt-2 lg:mt-0">
                        <span className={`inline-block px-4 py-2 bg-gradient-to-r ${getStatusColor(exp.status)} rounded-full text-white text-sm font-medium shadow-lg`}>
                          {exp.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                    {exp.description}
                  </p>
                  
                  {exp.website && (
                    <div className="mb-6">
                      <a 
                        href={exp.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-purple-400 hover:text-pink-400 transition-colors duration-300 font-medium"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        View Project
                      </a>
                    </div>
                  )}
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-full text-sm font-medium text-purple-300 border border-purple-500/30 backdrop-blur-sm hover:border-purple-400/50 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
