import React, { useState, useEffect } from 'react';
import { Terminal, Code, Server, Database } from 'lucide-react';

const LoadingScreen = ({ onLoadComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  const loadingSteps = [
    { icon: Terminal, text: 'Initializing...', color: 'text-purple-400' },
    { icon: Code, text: 'Loading components...', color: 'text-blue-400' },
    { icon: Server, text: 'Setting up backend...', color: 'text-emerald-400' },
    { icon: Database, text: 'Connecting database...', color: 'text-pink-400' },
    { icon: Terminal, text: 'Ready!', color: 'text-green-400' }
  ];

  useEffect(() => {
    const duration = 3000; // 3 seconds total
    const interval = 20; // Update every 20ms
    const increment = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + increment;
        if (newProgress >= 100) {
          clearInterval(timer);
          setTimeout(() => onLoadComplete(), 500);
          return 100;
        }
        return newProgress;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onLoadComplete]);

  useEffect(() => {
    const stepInterval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < loadingSteps.length - 1) {
          return prev + 1;
        }
        clearInterval(stepInterval);
        return prev;
      });
    }, 600);

    return () => clearInterval(stepInterval);
  }, []);

  const CurrentIcon = loadingSteps[currentStep].icon;

  return (
    <div className="fixed inset-0 bg-slate-950 z-[100] flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Floating Code Snippets */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <pre className="absolute top-20 left-10 text-emerald-400/10 text-xs font-mono animate-float">
{`const portfolio = {
  developer: "Shivam"
}`}
        </pre>
        <pre className="absolute bottom-20 right-10 text-purple-400/10 text-xs font-mono animate-float" style={{ animationDelay: '0.5s' }}>
{`app.listen(3000)`}
        </pre>
        <pre className="absolute top-1/2 left-20 text-blue-400/10 text-xs font-mono animate-float" style={{ animationDelay: '1s' }}>
{`export default`}
        </pre>
      </div>

      {/* Main Loading Content */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Logo/Icon */}
        <div className="relative">
          <div className="w-24 h-24 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-purple-500/50 animate-pulse">
            <CurrentIcon className="w-12 h-12 text-white" />
          </div>
          <div className="absolute -inset-2 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl opacity-20 blur-xl animate-pulse"></div>
        </div>

        <div className="text-center">
          <h1 className="font-mono font-stretch-ultra-expanded text-5xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent mb-2 ">
            Shaurya Rajput
          </h1>
          <p className="specialText w-full text-slate-400 text-xl ">Self Taught Developer</p>
        </div>

        {/* Loading Steps */}
        <div className="flex flex-col items-center gap-3 min-h-[60px]">
          <div className="flex items-center gap-3 font-mono text-sm">
            <CurrentIcon className={`w-5 h-5 ${loadingSteps[currentStep].color} animate-pulse`} />
            <span className={`${loadingSteps[currentStep].color} transition-all duration-300`}>
              {loadingSteps[currentStep].text}
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-80 max-w-md">
          <div className="mb-2 flex justify-between items-center font-mono text-xs">
            <span className="text-slate-500">Loading...</span>
            <span className="text-emerald-400">{Math.round(progress)}%</span>
          </div>
          <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden shadow-inner">
            <div 
              className="h-full bg-gradient-to-r from-purple-600 via-blue-600 to-emerald-600 rounded-full transition-all duration-300 ease-out shadow-lg shadow-purple-500/50"
              style={{ width: `${progress}%` }}
            >
              <div className="h-full w-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
            </div>
          </div>
        </div>

        {/* Loading Dots */}
        <div className="flex gap-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.2}s` }}
            ></div>
          ))}
        </div>

        {/* Code Style Loading Text */}
        <div className="font-mono text-xs text-slate-600">
          <span className="text-purple-400">console</span>
          <span className="text-white">.</span>
          <span className="text-blue-400">log</span>
          <span className="text-slate-400">(</span>
          <span className="text-emerald-400">"Initializing portfolio..."</span>
          <span className="text-slate-400">)</span>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
