export default function Skills() {
  const skillCategories = [
    {
      title: "Languages & Frameworks",
      icon: "⚡",
      gradient: "from-purple-500 to-pink-500",
      skills: ["PHP", "Laravel", "Python", "Django", ".NET", "JavaScript", "React JS", "Vue JS"]
    },
    {
      title: "Frontend Technologies",
      icon: "🎨",
      gradient: "from-pink-500 to-rose-500",
      skills: ["HTML", "CSS", "Tailwind CSS", "Material UI", "Bootstrap", "Blade"]
    },
    {
      title: "Database & Storage",
      icon: "🗄️",
      gradient: "from-blue-500 to-cyan-500",
      skills: ["MySQL", "SQL", "phpMyAdmin", "Adminer"]
    },
    {
      title: "Tools & Integration",
      icon: "🛠️",
      gradient: "from-green-500 to-emerald-500",
      skills: ["Git", "API Integration", "WampServer", "Blade Templates", "REST APIs"]
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-4"></div>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            A comprehensive overview of my technical expertise and tools I work with
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="group relative bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
            >
              {/* Category header */}
              <div className="text-center mb-6">
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${category.gradient} rounded-2xl flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform duration-300`}>
                  <span className="text-2xl">{category.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                  {category.title}
                </h3>
                <div className={`w-12 h-0.5 bg-gradient-to-r ${category.gradient} rounded-full mx-auto mt-2`}></div>
              </div>
              
              {/* Skills grid */}
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="group/skill relative bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/5 hover:border-purple-400/30 transition-all duration-300 transform hover:translate-x-2"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300 font-medium group-hover/skill:text-white transition-colors duration-300">
                        {skill}
                      </span>
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <div 
                            key={i}
                            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                              i < Math.floor(Math.random() * 2) + 4 
                                ? `bg-gradient-to-r ${category.gradient}` 
                                : 'bg-gray-600'
                            }`}
                          ></div>
                        ))}
                      </div>
                    </div>
                    <div className={`absolute left-0 top-0 h-full w-1 bg-gradient-to-b ${category.gradient} rounded-full opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300`}></div>
                  </div>
                ))}
              </div>
              
              {/* Skill count badge */}
              <div className="absolute -top-3 -right-3">
                <div className={`w-8 h-8 bg-gradient-to-br ${category.gradient} rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg`}>
                  {category.skills.length}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Stats section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
              25+
            </div>
            <div className="text-gray-300 text-sm">Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent mb-2">
              3+
            </div>
            <div className="text-gray-300 text-sm">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
              15+
            </div>
            <div className="text-gray-300 text-sm">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">
              100%
            </div>
            <div className="text-gray-300 text-sm">Dedication</div>
          </div>
        </div>
      </div>
    </section>
  );
}
