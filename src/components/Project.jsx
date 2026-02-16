import React from "react";
import { Calendar, ExternalLink, Github, Terminal, Code2, Database } from "lucide-react";
import weatherProImage from "../assets/weather pro.png";
import chatterImage from "../assets/chatter.png";
import certificatesImage from "../assets/certificates.png";
import birthdayWishImage from "../assets/birthday wish.png";

const Project = () => {
  const projects = [
     {
      id: 1,
      title: "Weather Pro – Advanced Weather Website",
  description:
    "A responsive weather website built using HTML, CSS, and JavaScript with real-time API integration. Features city-based search, dynamic weather updates, and a clean modern UI.",
  image: weatherProImage, // use your own screenshot
  technologies: ["HTML", "CSS", "JavaScript", "REST API", "Responsive Design"],
  githubUrl: "https://github.com/shauryarajput930/weather-pro",
  liveUrl: "https://shauryarajput930.github.io/weather-pro/",
  date: "Jan 2026",
  status: "completed",
  featured: false,
  category: "Frontend"
    },

     {
  id: 2,
  title: "Chatter – Real-Time Chat Website",
  description:
    "A real-time chat website built using HTML, CSS, and JavaScript with backend-as-a-service integration for authentication and live messaging. Focused on implementing interactive UI, dynamic message updates, and responsive design.",
  image: chatterImage, 
  technologies: ["HTML", "CSS", "JavaScript", "Real-Time Database", "Responsive Design"],
  githubUrl: "https://github.com/shauryarajput930/chatter",
  liveUrl: "https://chatter-vert-mu.vercel.app/",
  date: "Jan 2026",
  status: "completed",
  featured: true,
  category: "Frontend"
},

    {
  id: 3,
  title: "Certificates – Personal Achievement Showcase",
  description:
    "A responsive certificates showcase website built using HTML, CSS, and JavaScript to organize and display academic and technical achievements in a clean layout.",
  image: certificatesImage, 
  technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
  githubUrl: "https://github.com/shauryarajput930/certificate",
  liveUrl: "https://shauryarajput930.github.io/certificate/",
  date: "Sep 2025",
  status: "completed",
  featured: true,
  category: "Frontend"
},
    {
  id: 4,
  title: "Birthday Vibes – Interactive Birthday Experience",
  description:
    "An interactive birthday website built using HTML, CSS, JavaScript, and basic Tailwind CSS. Features animated transitions, background music, a photo gallery, and a guided user flow designed as a complete interactive experience.",
  image: birthdayWishImage,
  technologies: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "Responsive Design"],
  githubUrl: "https://github.com/shauryarajput930/birthday",
  liveUrl: "https://birthday-vibes.netlify.app/",
  date: "Feb 2026",
  status: "completed",
  featured: false,
  category: "Frontend"
},

  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "text-green-400";
      case "in-progress":
        return "text-yellow-400";
      default:
        return "text-gray-400";
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case "Full Stack":
        return "text-purple-400";
      case "AI/ML":
        return "text-blue-400";
      case "Frontend":
        return "text-pink-400";
      default:
        return "text-emerald-400";
    }
  };

  return (
    <section className="bg-slate-950 text-white px-6 py-20 min-h-screen relative overflow-hidden" id="project">
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <pre className="absolute top-20 left-200 text-emerald-400/30 text-xs font-mono select-none hidden lg:block">
{`router.get('/projects', async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
});`}
        </pre>
        
        <pre className="absolute top-40 right-10 text-purple-400/30 text-xs font-mono select-none hidden lg:block">
{`const schema = new Schema({
  title: String,
  tech: [String],
  status: String
});`}
        </pre>

        <pre className="absolute bottom-32 left-10 text-blue-400/30 text-xs font-mono select-none hidden lg:block">
{`app.use('/api', projectRouter);
app.listen(PORT);`}
        </pre>
      </div>

      
      <div className="max-w-7xl mx-auto mb-16 relative z-10">
        <div className="flex items-center gap-2 mb-4 font-mono text-sm text-slate-500">
          <span className="text-purple-400">const</span>
          <span className="text-white">projects</span>
          <span className="text-slate-400">=</span>
          <span className="text-blue-400">[</span>
        </div>
        <div className="flex items-center gap-4 ">
        <div className="w-1 h-12 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"></div>
        <h1 className="specialText w-full  text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Featured Projects
        </h1>
        </div>
        <p className="text-gray-400 text-lg max-w-2xl font-mono ">
          <span className="text-slate-600">// </span>
          Showcasing full-stack applications with backend expertise
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 max-w-7xl mx-auto relative z-10">
        {projects.map((proj) => (
          <div
            key={proj.id}
            className={`group relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition-all duration-300 hover:-translate-y-1 ${proj.featured ? 'md:col-span-2 lg:col-span-2' : ''}`}
          >
           
            {proj.featured && (
              <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1.5 rounded-lg text-xs font-mono font-bold shadow-lg">
                featured: true
              </div>
            )}

  
            <div className="relative overflow-hidden h-48">
              <img 
                src={proj.image} 
                alt={proj.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
              
           
              <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-slate-700 font-mono text-xs">
                <span className="text-slate-400">category:</span>
                <span className={`ml-2 ${getCategoryColor(proj.category)}`}>"{proj.category}"</span>
              </div>
            </div>

        
            <div className="p-6 space-y-4">
              <div className="flex items-start gap-2 font-mono">
                <Terminal className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                    {proj.title}
                  </h3>
                  <div className="text-xs text-slate-500 mt-1">
                    <span className="text-slate-600">// </span>
                    <span className={getStatusColor(proj.status)}>
                      {proj.status === "in-progress" ? "in-progress" : "completed"}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-gray-400 leading-relaxed text-sm">
                {proj.description}
              </p>
 
              <div className="font-mono text-xs">
                <span className="text-slate-500">tech: [</span>
                <div className="flex flex-wrap gap-2 mt-2 mb-2">
                  {proj.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-slate-800/50 text-gray-400 rounded border border-slate-700 hover:border-purple-500/50 hover:text-purple-400 transition-all duration-200"
                    >
                      "{tech}"
                    </span>
                  ))}
                  {/* {proj.technologies.length > 6 && (
                    <span className="px-2 py-1 text-emerald-400">
                      +{proj.technologies.length - 6}
                    </span>
                  )} */}
                </div>
                <span className="text-slate-500">]</span>
              </div>

             
              <div className="flex justify-between items-center pt-4 border-t border-slate-800 font-mono text-xs">
                <div className="flex items-center text-slate-500">
                  <Calendar size={14} className="mr-2" />
                  {proj.date}
                </div>
                
                <div className="flex gap-2">
                  <button
                    onClick={() => window.open(`${proj.githubUrl}`, "_blank")}
                    className="p-2 bg-slate-800/50 border border-slate-700 text-gray-400 rounded-lg hover:bg-slate-800 hover:text-white hover:border-slate-600 transition-all duration-300"
                    title="View Code"
                  >
                    <Github size={16} />
                  </button>
                  <button
                    onClick={() => window.open(`${proj.liveUrl}`, "_blank")}
                    className="p-2 bg-purple-600/20 border border-purple-500/30 text-purple-400 rounded-lg hover:bg-purple-600 hover:text-white hover:border-purple-500 transition-all duration-300"
                    title="Live Demo"
                  >
                    <ExternalLink size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

 
      <div className="max-w-7xl mx-auto mt-8 font-mono text-sm text-slate-500 relative z-10">
        <span className="text-blue-400">]</span>
        <span className="text-slate-400">;</span>
      </div>

      
      <div className="text-center mt-16 relative z-10">
        <div className="inline-flex flex-col items-center gap-3 px-6 py-4 bg-slate-900/50 border border-slate-800 rounded-2xl hover:border-slate-700 transition-all duration-300 font-mono text-sm">
          <div className="text-slate-500">
            <span className="text-purple-400">console</span>
            <span className="text-white">.</span>
            <span className="text-blue-400">log</span>
            <span className="text-slate-400">(</span>
            <span className="text-emerald-400">"View more on GitHub"</span>
            <span className="text-slate-400">)</span>
          </div>
          <a 
            href="https://github.com/shauryarajput930" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-purple-400 hover:text-white transition-colors"
          >
            <Github className="w-5 h-5" />
            <span className="font-semibold">@shauryarajput</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Project;