import React, { useEffect, useState } from "react";
import { Github, Linkedin, ArrowDown, Server, Database, Terminal } from "lucide-react";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState("");
  const roles = ["Frontend Developer", "API Architect", "Problem Solver"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= currentRole.length) {
        setTypedText(currentRole.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [currentRoleIndex]);

  const handleScrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      url: "https://github.com/shauryarajput930",
      color: "hover:border-gray-400 hover:text-gray-300",
      bgHover: "hover:bg-gray-400/10"
    },
    {
      icon: Linkedin,
      label: "LinkedIn", 
      url: "https://www.linkedin.com/in/shaurya-rajput-dev",
      color: "hover:border-blue-400 hover:text-blue-300",
      bgHover: "hover:bg-blue-400/10"
    }
  ];

  const techStack = [
    { icon: Server, name: "Node.js", color: "text-green-400" },
    { icon: Database, name: "MongoDB", color: "text-emerald-400" },
    { icon: Terminal, name: "Express.js", color: "text-purple-400" }
  ];

  return (
    <>
  
      <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4 pt-20 sm:pt-24 md:pt-28" id="home">
    
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          
          {/* Badge */}
          <div className={`inline-flex items-center gap-2 bg-slate-800/50 border border-slate-700 rounded-full px-4 py-2 mb-8 backdrop-blur-sm transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm text-slate-300">Available for opportunities</span>
          </div>

          {/* Main Heading */}
          <div className={`mb-6 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                Shaurya Rajput
              </span>
            </h1>
          </div>

          {/* Typed Role */}
          <div className={`mb-6 transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold bg-gradient-to-r from-purple-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent h-10 md:h-12">
              {typedText}
              <span className="animate-pulse">|</span>
            </h2>
          </div>

          {/* Description */}
          <div className={`mb-10 transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Building <span className="text-purple-400 font-semibold">responsive and interactive web interfaces</span> with a focus on 
              <span className="text-blue-400 font-semibold"> clean UI</span>, 
              <span className="text-emerald-400 font-semibold"> smooth user experiences</span>, and 
              <span className="text-purple-400 font-semibold"> practical frontend development</span>.
            </p>
          </div>

          {/* Social Links */}
          <div className={`flex flex-wrap justify-center gap-4 mb-10 transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <button
                  key={index}
                  className={`group flex items-center gap-2 bg-slate-800/50 border border-slate-700 text-slate-300 px-5 py-2.5 rounded-xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 ${social.color} ${social.bgHover}`}
                  onClick={() => window.open(social.url, "_blank")}
                >
                  <IconComponent className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span className="font-medium text-sm">{social.label}</span>
                </button>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className={`flex justify-center mb-12 transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <button
              className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-10 py-4 rounded-xl shadow-lg shadow-purple-500/25 transition-all duration-300 hover:-translate-y-1 hover:scale-105"
              onClick={() => handleScrollToSection('project')}
            >
              <span className="relative z-10 flex items-center gap-2">
                <Server className="w-5 h-5" />
                Explore My Work
              </span>
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className={`transform transition-all duration-1000 delay-1200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex flex-col items-center gap-2 animate-bounce">
              <span className="specialText text-slate-500 text-md font-medium">Scroll to explore</span>
              <ArrowDown className="w-5 h-5 text-slate-400" />
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
        `}</style>
      </section>
    </>
  );
};

export default Home;
