export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-slate-900 via-gray-900 to-slate-900 text-white py-12 px-6 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='m0 40 40-40v40z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              PM Tepi Me
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Transforming ideas into powerful digital experiences with cutting-edge technology and innovative design.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-cyan-400 transition-colors duration-300 cursor-pointer">Solution Architecture</li>
              <li className="hover:text-cyan-400 transition-colors duration-300 cursor-pointer">Mobile Development</li>
              <li className="hover:text-cyan-400 transition-colors duration-300 cursor-pointer">Cloud Solutions</li>
              <li className="hover:text-cyan-400 transition-colors duration-300 cursor-pointer">IT Consultation</li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Connect</h4>
            <div className="flex space-x-4 mb-4">
              {[
                { icon: "💼", label: "LinkedIn" },
                { icon: "🐙", label: "GitHub" },
                { icon: "📧", label: "Email" },
                { icon: "📱", label: "WhatsApp" }
              ].map((social, index) => (
                <div
                  key={index}
                  className="w-10 h-10 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg flex items-center justify-center hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 cursor-pointer transform hover:scale-110"
                >
                  <span className="text-sm">{social.icon}</span>
                </div>
              ))}
            </div>
            <div className="text-gray-400 text-sm">
              <p>📧 tfqnet@gmail.com</p>
              <p>🌐 pmtepi.me</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; 2025 PM Tepi Me. All rights reserved.
          </div>
          <div className="flex items-center space-x-4 text-sm text-gray-400">
            <span className="flex items-center">
              Built with <span className="text-red-400 mx-1">❤️</span> using
            </span>
            <div className="flex items-center space-x-2">
              <span className="px-2 py-1 bg-blue-600 rounded text-white text-xs">Next.js</span>
              <span className="px-2 py-1 bg-cyan-600 rounded text-white text-xs">Tailwind</span>
              <span className="px-2 py-1 bg-blue-500 rounded text-white text-xs">TypeScript</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
