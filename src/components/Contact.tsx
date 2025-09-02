export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Section header */}
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
            Let&apos;s Work Together
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your ideas into powerful digital solutions? 
            Let&apos;s discuss your project and bring your vision to life.
          </p>
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact info */}
          <div className="space-y-8">
            <div className="backdrop-blur-sm bg-white/5 rounded-3xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
              <div className="space-y-6">
                {[
                  { icon: "📧", title: "Email", desc: "Quick response guaranteed", action: "tfqnet@gmail.com" },
                  { icon: "📞", title: "Phone", desc: "Free consultation call", action: "+1 (555) 123-4567" },
                  { icon: "💬", title: "Chat", desc: "Live support available", action: "Start conversation" },
                ].map((contact, index) => (
                  <div key={index} className="flex items-center space-x-4 group cursor-pointer">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300">
                      {contact.icon}
                    </div>
                    <div className="text-left">
                      <div className="text-white font-semibold group-hover:text-cyan-400 transition-colors duration-300">
                        {contact.title}
                      </div>
                      <div className="text-gray-400 text-sm">{contact.desc}</div>
                      <div className="text-cyan-400 text-sm font-medium">{contact.action}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: "Response Time", value: "< 24h" },
                { label: "Project Success", value: "100%" },
                { label: "Years Experience", value: "10+" }
              ].map((stat, index) => (
                <div key={index} className="backdrop-blur-sm bg-white/5 rounded-2xl p-4 border border-white/10 text-center">
                  <div className="text-2xl font-bold text-cyan-400">{stat.value}</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to action */}
          <div className="space-y-8">
            <div className="backdrop-blur-sm bg-white/5 rounded-3xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Ready to Start?</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Whether you need a complete digital transformation or just want to discuss your ideas, 
                I&apos;m here to help you succeed.
              </p>
              
              <div className="space-y-4">
                <a
                  href="mailto:tfqnet@gmail.com"
                  className="group relative block w-full py-4 px-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl text-white font-semibold text-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    📧 Send Me an Email
                    <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </span>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                </a>
                
                <button className="w-full py-4 px-8 border-2 border-white/30 rounded-xl text-white font-semibold text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                  📅 Schedule a Call
                </button>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "🚀", text: "Fast Delivery" },
                { icon: "🛡️", text: "Secure Solutions" },
                { icon: "💎", text: "Premium Quality" },
                { icon: "🎯", text: "Goal Focused" }
              ].map((feature, index) => (
                <div key={index} className="backdrop-blur-sm bg-white/5 rounded-2xl p-4 border border-white/10 text-center hover:bg-white/10 transition-all duration-300">
                  <div className="text-2xl mb-2">{feature.icon}</div>
                  <div className="text-sm text-gray-300 font-medium">{feature.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
