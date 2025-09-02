const services = [
  {
    title: "Solution Architecture",
    description: "Designing scalable and secure systems for enterprise use.",
    icon: "🏗️",
    features: ["Microservices Design", "Scalable Infrastructure", "Security First", "Performance Optimization"],
    gradient: "from-blue-600 to-cyan-600"
  },
  {
    title: "Mobile & Web Development",
    description: "Building apps with Flutter, React Native, and modern frameworks.",
    icon: "📱",
    features: ["Cross-Platform Apps", "Responsive Design", "Modern Frameworks", "User Experience"],
    gradient: "from-purple-600 to-pink-600"
  },
  {
    title: "Cloud Solutions",
    description: "Microsoft Azure, Firebase, and enterprise integrations.",
    icon: "☁️",
    features: ["Azure Cloud", "Firebase Integration", "DevOps Pipeline", "Auto Scaling"],
    gradient: "from-green-600 to-teal-600"
  },
  {
    title: "IT Consultation",
    description: "Helping businesses adopt the right technologies.",
    icon: "💡",
    features: ["Technology Strategy", "Digital Transformation", "Cost Optimization", "Team Training"],
    gradient: "from-orange-600 to-red-600"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-100 to-pink-100 rounded-full translate-y-1/2 -translate-x-1/2 opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900">
            Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transforming ideas into powerful digital solutions with cutting-edge technology and innovative approaches
          </p>
        </div>

        {/* Services grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon and title */}
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-2xl shadow-lg mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-3">
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center text-sm text-gray-700 group-hover:text-gray-900 transition-colors duration-300"
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient} mr-3 opacity-70 group-hover:opacity-100 transition-opacity duration-300`}></div>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Hover effect arrow */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white text-sm`}>
                    →
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full opacity-20 group-hover:scale-150 transition-transform duration-700"></div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full text-white font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <span className="relative z-10">Discuss Your Project</span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
          </button>
        </div>
      </div>
    </section>
  );
}
