export default function Education() {
  const education = [
    {
      degree: "MCA",
      fullDegree: "Master of Computer Applications",
      university: "Thiruvalluvar University",
      duration: "2022 - 2024",
      cgpa: "7.86",
      description: "Advanced studies in computer applications, software development, and information technology.",
      gradient: "from-purple-500 to-indigo-500",
      icon: "🎓",
      subjects: ["Software Engineering", "Database Systems", "Web Development", "Data Structures", "System Analysis"]
    },
    {
      degree: "BCA",
      fullDegree: "Bachelor of Computer Applications",
      university: "Periyar University",
      duration: "2018 - 2021",
      cgpa: "8.74",
      description: "Comprehensive foundation in computer science, programming, and application development.",
      gradient: "from-pink-500 to-rose-500",
      icon: "📚",
      subjects: ["Programming Fundamentals", "Computer Networks", "Operating Systems", "Mathematics", "Database Management"]
    }
  ];

  const languages = [
    { name: "Tamil", level: "Native", flag: "🇮🇳" },
    { name: "English", level: "Professional", flag: "🇺🇸" },
    { name: "Telugu", level: "Conversational", flag: "🇮🇳" }
  ];

  return (
    <section id="education" className="py-20 relative">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-24 left-12 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-24 right-12 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Education & Languages
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-4"></div>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            My academic journey and language proficiency
          </p>
        </div>
        
        {/* Education Cards */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {education.map((edu, index) => (
            <div 
              key={index}
              className="group relative bg-white/5 backdrop-blur-lg rounded-3xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/25"
            >
              {/* Education header */}
              <div className={`relative h-32 bg-gradient-to-br ${edu.gradient} p-6 flex items-center justify-between`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10 flex items-center space-x-4">
                  <div className="text-4xl">{edu.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{edu.degree}</h3>
                    <p className="text-white/80 text-sm">{edu.fullDegree}</p>
                  </div>
                </div>
                <div className="relative z-10">
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2 text-center">
                    <div className="text-white text-lg font-bold">{edu.cgpa}</div>
                    <div className="text-white/80 text-xs">CGPA</div>
                  </div>
                </div>
                {/* Floating elements */}
                <div className="absolute top-2 right-2 w-8 h-8 bg-white/10 rounded-full animate-pulse"></div>
                <div className="absolute bottom-2 left-2 w-6 h-6 bg-white/20 rounded-full animate-pulse animation-delay-1000"></div>
              </div>
              
              {/* Education content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="text-lg font-semibold text-purple-400">{edu.university}</h4>
                    <p className="text-gray-400 text-sm">{edu.duration}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {edu.description}
                </p>
                
                {/* Key subjects */}
                <div className="mb-6">
                  <h5 className="text-sm font-semibold text-pink-400 mb-3 flex items-center">
                    <span className={`w-4 h-4 bg-gradient-to-r ${edu.gradient} rounded mr-2`}></span>
                    Key Subjects
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {edu.subjects.map((subject, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300 border border-white/20 backdrop-blur-sm hover:border-purple-400/50 transition-colors duration-300"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Achievement badge */}
                <div className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${edu.gradient} rounded-full text-white text-sm font-medium shadow-lg`}>
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                  Graduated with Honor
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Languages Section */}
        <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              Language Proficiency
            </h3>
            <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {languages.map((language, index) => (
              <div 
                key={index}
                className="group text-center bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {language.flag}
                </div>
                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                  {language.name}
                </h4>
                <div className="inline-block px-4 py-1 bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-full text-sm text-purple-300 border border-purple-500/30">
                  {language.level}
                </div>
                
                {/* Proficiency indicators */}
                <div className="flex justify-center mt-4 space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <div 
                      key={i}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        i < (language.level === 'Native' ? 5 : language.level === 'Professional' ? 4 : 3)
                          ? 'bg-gradient-to-r from-purple-500 to-pink-500' 
                          : 'bg-gray-600'
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
