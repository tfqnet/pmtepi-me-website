"use client";

import { useState, useEffect } from "react";

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
      
      const sections = ["about", "services", "contact"];
      const scrollPos = scrollPosition + 150;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPos >= element.offsetTop) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'backdrop-blur-lg bg-white/10 shadow-lg border-b border-white/10' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-center">
          <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
            {["about", "services", "contact"].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className={`relative px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeSection === section
                    ? "text-white bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg"
                    : "text-gray-300 hover:text-white hover:bg-white/10"
                }`}
                style={{ scrollBehavior: 'smooth' }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
                {activeSection === section && (
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-50 blur-sm"></div>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
