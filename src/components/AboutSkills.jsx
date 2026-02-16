import React from 'react'
import { Code, Terminal, Database, Globe, Zap, User } from 'lucide-react'

const AboutSkills = () => {
  const skills = [
    { icon: Code, name: 'HTML/CSS', level: 90 },
    { icon: Terminal, name: 'JavaScript', level: 85 },
    { icon: Globe, name: 'Tailwind CSS', level: 80 },
    { icon: Zap, name: 'API Integration', level: 75 },
    { icon: User, name: 'UI/UX Design', level: 70 }
  ]

  return (
    <section className="bg-slate-950 text-white min-h-screen py-20 px-6 relative overflow-hidden" id='about'>
      
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <pre className="absolute top-20 left-10 text-purple-400/30 text-xs font-mono select-none hidden lg:block">
{`const developer = {
  name: "Shaurya Rajput",
  role: "Frontend Developer",
  skills: ["HTML", "CSS", "JavaScript", "Tailwind"]
};`}
        </pre>
        <pre className="absolute bottom-32 right-10 text-blue-400/30 text-xs font-mono select-none hidden lg:block">
{`function createExperience() {
  return responsive + interactive + userFriendly;
}`}
        </pre>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-4 font-mono text-sm text-slate-500">
            <span className="text-purple-400">const</span>
            <span className="text-white">about</span>
            <span className="text-slate-400">=</span>
            <span className="text-blue-400">{`{}`}</span>
          </div>
          
          <div className="flex items-center gap-4 mb-4">
            <div className="w-1 h-12 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"></div>
            <h1 className="specialText text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              About Me
            </h1>
          </div>
          
          <p className="text-gray-400 font-mono text-sm">
            <span className="text-slate-600">// </span>
            Frontend Developer & UI Enthusiast
          </p>
        </div>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          
          {/* About Text */}
          <div className="space-y-6">
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-slate-700 transition-all duration-300">
              <h2 className="text-2xl font-bold text-white mb-4 font-mono">
                <span className="text-purple-400">Hi,</span> I'm <span className="text-blue-400">Shaurya Rajput</span>
              </h2>
              
              <p className="text-slate-300 leading-relaxed mb-4">
                a <span className="text-purple-400 font-semibold">Frontend Developer</span> focused on building 
                <span className="text-blue-400 font-semibold"> responsive</span> and 
                <span className="text-emerald-400 font-semibold"> interactive web experiences</span>.
              </p>
              
              <p className="text-slate-300 leading-relaxed mb-4">
                I work primarily with <span className="text-purple-400 font-mono">HTML</span>, 
                <span className="text-blue-400 font-mono"> CSS</span>, 
                <span className="text-emerald-400 font-mono"> JavaScript</span>, and 
                <span className="text-yellow-400 font-mono"> Tailwind CSS</span>, creating 
                <span className="text-purple-400"> clean interfaces</span> and 
                <span className="text-blue-400"> smooth user interactions</span>.
              </p>
              
              <p className="text-slate-300 leading-relaxed mb-4">
                I enjoy <span className="text-emerald-400 font-semibold">turning ideas into functional</span>, 
                <span className="text-blue-400 font-semibold"> user-friendly websites</span> while continuously 
                improving my <span className="text-purple-400 font-semibold">frontend</span> and 
                <span className="text-yellow-400 font-semibold"> problem-solving skills</span>.
              </p>
              
              <p className="text-slate-300 leading-relaxed">
                Recently built projects include <span className="text-purple-400">real-time applications</span>, 
                <span className="text-blue-400"> API-driven interfaces</span>, and 
                <span className="text-emerald-400"> interactive UI experiences</span>.
              </p>
            </div>
          </div>

          {/* Skills Section */}
          <div className="space-y-6">
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-slate-700 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-6 font-mono flex items-center gap-2">
                <Code className="w-5 h-5 text-purple-400" />
                Technical Skills
              </h3>
              
              <div className="space-y-4">
                {skills.map((skill, index) => {
                  const IconComponent = skill.icon;
                  return (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <IconComponent className="w-4 h-4 text-purple-400" />
                          <span className="text-slate-300 font-mono text-sm">{skill.name}</span>
                        </div>
                        <span className="text-slate-500 font-mono text-xs">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-800 rounded-full h-2">
                        <div 
                          className="h-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-1000"
                          style={{width: `${skill.level}%`}}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-all duration-300">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                  <div className="text-2xl font-bold text-purple-400 font-mono">10+</div>
                  <div className="text-xs text-slate-400 font-mono">Projects Built</div>
                </div>
                <div className="text-center p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                  <div className="text-2xl font-bold text-blue-400 font-mono">100%</div>
                  <div className="text-xs text-slate-400 font-mono">Responsive</div>
                </div>
                <div className="text-center p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                  <div className="text-2xl font-bold text-emerald-400 font-mono">5+</div>
                  <div className="text-xs text-slate-400 font-mono">Technologies</div>
                </div>
                <div className="text-center p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                  <div className="text-2xl font-bold text-yellow-400 font-mono">24/7</div>
                  <div className="text-xs text-slate-400 font-mono">Learning</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Closing bracket */}
      <div className="max-w-7xl mx-auto mt-8 font-mono text-sm text-slate-500 relative z-10">
        <span className="text-blue-400">{`}`}</span>
        <span className="text-slate-400">;</span>
      </div>
    </section>
  )
}

export default AboutSkills
