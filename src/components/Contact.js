export default function Contact() {
  const contactMethods = [
    {
      icon: "📧",
      label: "Email",
      value: "vijaysrini1313@gmail.com",
      link: "mailto:vijaysrini1313@gmail.com",
      gradient: "from-purple-500 to-pink-500",
      description: "Send me an email"
    },
    {
      icon: "📱",
      label: "Phone",
      value: "+91 8883464042",
      link: "tel:+918883464042",
      gradient: "from-pink-500 to-rose-500",
      description: "Give me a call"
    },
    {
      icon: "📍",
      label: "Location",
      value: "Chennai, India",
      link: "https://maps.google.com/?q=Chennai,India",
      gradient: "from-blue-500 to-cyan-500",
      description: "Find me here"
    }
  ];

  const socialLinks = [
    { icon: "💼", name: "LinkedIn", url: "https://www.linkedin.com/in/srinivasan-v-a5b694341/", color: "from-blue-500 to-blue-600" },
    { icon: "🐙", name: "GitHub", url: "https://github.com/SRINIVASAN-MCA", color: "from-gray-700 to-gray-800" },
    { icon: "🐦", name: "Twitter", url: "#", color: "from-sky-400 to-sky-500" },
    { icon: "📘", name: "Portfolio", url: "https://srinivasan-mca.github.io/my-portfolio/", color: "from-purple-500 to-pink-500" }
  ];

  return (
    <section id="contact" className="py-20 relative">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-4"></div>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Ready to bring your ideas to life? Let's discuss your next project!
          </p>
        </div>
        
        {/* Contact methods grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.link}
              target={method.link.startsWith('http') ? '_blank' : '_self'}
              rel={method.link.startsWith('http') ? 'noopener noreferrer' : ''}
              className="group block"
            >
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
                {/* Icon */}
                <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-br ${method.gradient} rounded-2xl flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform duration-300`}>
                  <span className="text-2xl">{method.icon}</span>
                </div>
                
                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                    {method.label}
                  </h3>
                  <p className="text-gray-400 text-sm mb-3">{method.description}</p>
                  <p className="text-lg font-medium bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {method.value}
                  </p>
                </div>
                
                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 to-pink-600/0 group-hover:from-purple-600/5 group-hover:to-pink-600/5 transition-all duration-500 pointer-events-none rounded-2xl"></div>
              </div>
            </a>
          ))}
        </div>
        
        {/* Contact form and social links */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Send a Message
            </h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors duration-300 backdrop-blur-sm"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors duration-300 backdrop-blur-sm"
                  />
                </div>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors duration-300 backdrop-blur-sm"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={6}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors duration-300 backdrop-blur-sm resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Send Message ✨
              </button>
            </form>
          </div>
          
          {/* Social links and additional info */}
          <div className="space-y-8">
            {/* Social links */}
            <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Connect with Me
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="group flex items-center justify-center p-4 bg-white/5 rounded-xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105"
                  >
                    <span className="text-2xl mr-3">{social.icon}</span>
                    <span className="text-white group-hover:text-purple-400 transition-colors duration-300">
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
            
            {/* Quick info */}
            <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Quick Info
              </h3>
              <div className="space-y-4">
                <div className="flex items-center text-gray-300">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-4 animate-pulse"></div>
                  <span>Available for freelance projects</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-4"></div>
                  <span>Response within 24 hours</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-4"></div>
                  <span>Open to new opportunities</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <div className="w-3 h-3 bg-pink-500 rounded-full mr-4"></div>
                  <span>Remote work available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer message */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            <p className="text-gray-300 text-lg mb-4">
              "Great things in business are never done by one person. They're done by a team of people."
            </p>
            <p className="text-purple-400 font-medium">- Steve Jobs</p>
          </div>
        </div>
      </div>
    </section>
  );
}
