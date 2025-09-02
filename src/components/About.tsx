export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="group p-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                I have over <span className="font-bold text-blue-600">10 years of experience</span> in IT, 
                specializing in solution architecture, mobile & web development, and cloud solutions.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                I&apos;ve worked on <span className="font-bold text-indigo-600">enterprise systems</span>, 
                mobile apps, IoT integrations, and digital transformation projects that have 
                <span className="font-bold text-cyan-600"> transformed businesses</span> worldwide.
              </p>
            </div>

            {/* Skills */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { skill: "Solution Architecture", level: 95 },
                { skill: "Mobile Development", level: 90 },
                { skill: "Cloud Solutions", level: 88 },
                { skill: "Web Development", level: 92 }
              ].map((item, index) => (
                <div key={index} className="p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold text-gray-700">{item.skill}</span>
                    <span className="text-xs font-bold text-blue-600">{item.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="h-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 transition-all duration-1000 ease-out"
                      style={{ width: `${item.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 gap-6">
            {[
              { number: "10+", label: "Years Experience", icon: "🚀", color: "from-blue-500 to-cyan-500" },
              { number: "50+", label: "Projects Completed", icon: "💼", color: "from-indigo-500 to-purple-500" },
              { number: "100%", label: "Client Satisfaction", icon: "⭐", color: "from-green-500 to-emerald-500" },
              { number: "24/7", label: "Support Available", icon: "🔧", color: "from-orange-500 to-red-500" }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="group relative p-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                <div className="relative z-10 text-center">
                  <div className="text-4xl mb-3">{stat.icon}</div>
                  <div className={`text-4xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-r ${stat.color}`}>
                    {stat.number}
                  </div>
                  <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
