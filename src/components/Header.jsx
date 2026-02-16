import React, { useState, useEffect } from 'react';
import { Terminal, Github, Mail, User, Briefcase, Code, PenTool, Phone } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Smooth scroll function
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80; // Account for fixed header height
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  // Auto-hide on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Update scrolled state
      setIsScrolled(currentScrollY > 50);
      
      // Auto-hide logic
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false); // Scrolling down
      } else {
        setIsVisible(true); // Scrolling up
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Show header on mouse move to top
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (e.clientY < 50) {
        setIsVisible(true);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <header className={`
      fixed top-0 left-0 right-0 z-50 
      transition-all duration-500 ease-in-out
      ${isVisible ? 'translate-y-0' : '-translate-y-full'}
      ${isScrolled 
        ? 'bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50 shadow-2xl shadow-black/20' 
        : 'bg-transparent backdrop-blur-sm'
      }
    `}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo with Glassmorphism */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/30">
              <Terminal className="w-5 h-5 text-white" />
            </div>
            <div className="absolute -inset-1 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg opacity-0 group-hover:opacity-40 blur-lg transition-opacity duration-300"></div>
          </div>
          <div className="font-mono hidden sm:block">
            <span className="text-purple-400 text-xs">const</span>
            <span className="text-white text-base font-bold ml-2">dev</span>
            <span className="text-slate-400 text-xs ml-1">=</span>
            <span className="text-emerald-400 text-xs ml-1">"shaurya"</span>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="hidden md:flex items-center gap-1">
          {[
            { icon: User, label: 'Home', href: '#home' },
            { icon: Code, label: 'About', href: '#about' },
            { icon: Briefcase, label: 'Projects', href: '#project' },
            { icon: Phone, label: 'Contact', href: '#contact' }
          ].map((item, index) => (
            <a
              key={index}
              href={item.href}
              onClick={(e) => handleSmoothScroll(e, item.href)}
              className="group flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-mono text-slate-400 hover:text-white hover:bg-slate-800/50 transition-all duration-300"
            >
              <item.icon className="w-4 h-4 group-hover:text-purple-400 transition-colors" />
              <span className="hidden lg:block">{item.label}</span>
            </a>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/shauryarajput930"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-slate-800/50 border border-slate-700 text-gray-400 rounded-lg hover:bg-slate-800 hover:text-white hover:border-slate-600 transition-all duration-300"
            title="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="mailto:shauryarajput930@example.com"
            className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-mono text-sm hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50"
          >
            <Mail size={16} className="inline mr-2" />
            <span className="hidden sm:inline">Contact</span>
          </a>
        </div>
      </div>

      {/* Gradient Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-slate-900/50">
        <div 
          className="h-full bg-gradient-to-r from-purple-500 via-blue-500 to-emerald-500 transition-all duration-300 shadow-lg shadow-purple-500/50"
          style={{ 
            width: `${Math.min((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100, 100)}%` 
          }}
        />
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </header>
  );
};

export default Header;
