import React from "react";
import { Github, Linkedin, Mail, Heart, Code, Terminal, Database } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for fixed header height
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };
  
  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      url: "https://github.com/shauryarajput930",
      color: "hover:text-gray-400"
    },
    {
      icon: Linkedin,
      label: "LinkedIn", 
      url: "https://www.linkedin.com/in/shaurya-rajput-dev",
      color: "hover:text-blue-400"
    },
    {
      icon: Mail,
      label: "Email",
      url: "mailto:shauryarajput930@gmail.com",
      color: "hover:text-purple-400"
    }
  ];

  const techStack = [
    { icon: Code, name: "HTML/CSS" },
    { icon: Terminal, name: "JavaScript" },
    { icon: Database, name: "Tailwind CSS" }
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-800 relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <pre className="absolute top-10 left-10 text-purple-400/30 text-xs font-mono select-none hidden lg:block">
{`// Footer Component
const footer = {
  builtWith: "React & Tailwind",
  year: ${currentYear}
};`}
        </pre>
        <pre className="absolute bottom-10 right-10 text-blue-400/30 text-xs font-mono select-none hidden lg:block">
{`export default function Footer() {
  return <Passion />;
}`}
        </pre>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">
        
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold font-mono">dev.shaurya</h3>
                <p className="text-slate-500 text-xs font-mono">const developer = "Frontend"</p>
              </div>
            </div>
            
            <p className="text-slate-400 text-sm leading-relaxed">
              Building <span className="text-purple-400">responsive</span> and 
              <span className="text-blue-400"> interactive</span> web experiences with 
              <span className="text-emerald-400"> modern technologies</span>.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-bold font-mono mb-4">Quick Links</h4>
            <div className="space-y-2">
              {[
                { name: "Home", href: "#home" },
                { name: "About", href: "#about" },
                { name: "Projects", href: "#project" },
                { name: "Contact", href: "#contact" }
              ].map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href.substring(1))}
                  className="block text-slate-400 hover:text-white transition-colors duration-300 font-mono text-sm"
                >
                  <span className="text-slate-600">{'// '}</span>
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="space-y-4">
            <h4 className="text-white font-bold font-mono mb-4">Tech Stack</h4>
            <div className="flex flex-wrap gap-2 mb-4">
              {techStack.map((tech, index) => {
                const IconComponent = tech.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-slate-800/30 border border-slate-700 px-3 py-1.5 rounded-lg text-xs font-mono"
                  >
                    <IconComponent className="w-4 h-4 text-green-400" />
                    <span className="text-slate-400">{tech.name}</span>
                  </div>
                );
              })}
            </div>
            
            <p className="text-slate-500 text-xs font-mono">
              <span className="text-slate-600">/* </span>
              Built with passion and coffee
            </p>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                const isEmail = social.url.startsWith('mailto:');
                return (
                  <a
                    key={index}
                    href={social.url}
                    target={isEmail ? "_self" : "_blank"}
                    rel={isEmail ? "" : "noopener noreferrer"}
                    onClick={isEmail ? undefined : (e) => e.preventDefault()}
                    className={`p-2 bg-slate-800/50 border border-slate-700 text-slate-400 rounded-lg transition-all duration-300 hover:-translate-y-1 ${social.color}`}
                    title={social.label}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-slate-500 text-sm font-mono">
                <span className="text-slate-600">{'</'}script{'>'}</span>
                Built with <Heart className="w-4 h-4 inline text-red-400 mx-1" /> by Shaurya
              </p>
              <p className="text-slate-600 text-xs font-mono mt-1">
                © {currentYear} All rights reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
