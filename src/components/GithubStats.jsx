import React, { useState, useEffect } from 'react';
import { Github, Star, GitFork, Code, TrendingUp, Calendar, Activity } from 'lucide-react';

const GitHubStats = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const username = 'shauryarajput930';

  useEffect(() => {
    fetchGitHubData();
  }, []);

  const fetchGitHubData = async () => {
    try {
      // Fetch user data
      const userResponse = await fetch(`https://api.github.com/users/${username}`);
      const userData = await userResponse.json();

      // Fetch repos data
      const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`);
      const reposData = await reposResponse.json();

      // Calculate stats
      const totalStars = reposData.reduce((acc, repo) => acc + repo.stargazers_count, 0);
      const totalForks = reposData.reduce((acc, repo) => acc + repo.forks_count, 0);
      const languages = {};
      
      reposData.forEach(repo => {
        if (repo.language) {
          languages[repo.language] = (languages[repo.language] || 0) + 1;
        }
      });

      const topLanguages = Object.entries(languages)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5);

      setStats({
        followers: userData.followers,
        following: userData.following,
        publicRepos: userData.public_repos,
        totalStars,
        totalForks,
        topLanguages,
        avatar: userData.avatar_url,
        bio: userData.bio,
        createdAt: new Date(userData.created_at).getFullYear()
      });
      
      setLoading(false);
    } catch (error) {
      console.error('Error fetching GitHub data:', error);
      setLoading(false);
    }
  };

  const getLanguageColor = (language) => {
    const colors = {
      JavaScript: 'bg-yellow-400',
      TypeScript: 'bg-blue-400',
      Python: 'bg-blue-600',
      Java: 'bg-red-400',
      'C++': 'bg-pink-400',
      C: 'bg-purple-400',
      HTML: 'bg-orange-400',
      CSS: 'bg-blue-500',
      React: 'bg-cyan-400',
    };
    return colors[language] || 'bg-gray-400';
  };

  if (loading) {
    return (
      <section className="bg-slate-950 text-white min-h-screen px-6 py-20 flex items-center justify-center" id="github">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-slate-800 border-t-purple-500 mx-auto mb-4"></div>
          <p className="text-slate-400 font-mono text-sm">Loading GitHub stats...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-slate-950 text-white min-h-screen px-6 py-20 relative overflow-hidden" id="github">
       
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <pre className="absolute top-20 right-20 text-emerald-400/30 text-xs font-mono select-none hidden lg:block">
{`git commit -m "Update"
git push origin main`}
        </pre>
        <pre className="absolute bottom-40 left-20 text-purple-400/30 text-xs font-mono select-none hidden lg:block">
{`const commits = await
  fetchGitHubStats();`}
        </pre>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
      
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-4 font-mono text-sm text-slate-500">
            <span className="text-purple-400">const</span>
            <span className="text-white">githubStats</span>
            <span className="text-slate-400">=</span>
            <span className="text-blue-400">await</span>
            <span className="text-emerald-400">fetchData()</span>
            <span className="text-slate-400">;</span>
          </div>
          
          <div className="flex items-center gap-4 mb-4">
            <div className="w-1 h-12 bg-gradient-to-b from-purple-400 to-blue-400 rounded-full"></div>
            <h1 className="specialText w-full text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              GitHub Statistics
            </h1>
          </div>
          
          <p className="text-gray-400 font-mono text-sm">
            <span className="text-slate-600">// </span>
            Live data from GitHub API
          </p>
        </div>

        {/* Main Stats Grid */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          
          {/* Profile Card */}
          <div className="lg:col-span-1 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <img 
                src={stats?.avatar} 
                alt="GitHub Avatar" 
                className="w-20 h-20 rounded-full border-2 border-purple-500/50"
              />
              <div>
                <h3 className="text-xl font-bold text-white">@{username}</h3>
                <p className="text-sm text-slate-400 font-mono">Since {stats?.createdAt}</p>
              </div>
            </div>
            
            <div className="space-y-3 font-mono text-sm">
              <div className="flex justify-between items-center p-3 bg-slate-800/50 rounded-lg border border-slate-700">
                <span className="text-slate-400">Followers:</span>
                <span className="text-blue-400 font-bold">{stats?.followers}</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-800/50 rounded-lg border border-slate-700">
                <span className="text-slate-400">Following:</span>
                <span className="text-purple-400 font-bold">{stats?.following}</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-800/50 rounded-lg border border-slate-700">
                <span className="text-slate-400">Repos:</span>
                <span className="text-emerald-400 font-bold">{stats?.publicRepos}</span>
              </div>
            </div>

            <a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-mono text-sm py-3 px-4 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/20"
            >
              <Github className="w-4 h-4" />
              <span>Visit Profile</span>
            </a>
          </div>

          {/* Stats Cards */}
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-yellow-400/10 flex items-center justify-center">
                  <Star className="w-6 h-6 text-yellow-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-400 font-mono">Total Stars</p>
                  <p className="text-3xl font-bold text-yellow-400">{stats?.totalStars}</p>
                </div>
              </div>
              <p className="text-xs text-slate-500 font-mono">
                <span className="text-slate-600">// </span>Stars across all repos
              </p>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-blue-400/10 flex items-center justify-center">
                  <GitFork className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-400 font-mono">Total Forks</p>
                  <p className="text-3xl font-bold text-blue-400">{stats?.totalForks}</p>
                </div>
              </div>
              <p className="text-xs text-slate-500 font-mono">
                <span className="text-slate-600">// </span>Forks across all repos
              </p>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-emerald-400/10 flex items-center justify-center">
                  <Code className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-400 font-mono">Public Repos</p>
                  <p className="text-3xl font-bold text-emerald-400">{stats?.publicRepos}</p>
                </div>
              </div>
              <p className="text-xs text-slate-500 font-mono">
                <span className="text-slate-600">// </span>Open source projects
              </p>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-purple-400/10 flex items-center justify-center">
                  <Activity className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-400 font-mono">Active Since</p>
                  <p className="text-3xl font-bold text-purple-400">{stats?.createdAt}</p>
                </div>
              </div>
              <p className="text-xs text-slate-500 font-mono">
                <span className="text-slate-600">// </span>Years on GitHub
              </p>
            </div>
          </div>
        </div>

        {/* Language Stats & Contribution Graph */}
        <div className="grid lg:grid-cols-2 gap-6">
          
          {/* Top Languages */}
          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <Code className="w-6 h-6 text-emerald-400" />
              <h3 className="text-xl font-bold text-white font-mono">Top Languages</h3>
            </div>
            
            <div className="space-y-4">
              {stats?.topLanguages.map(([language, count]) => (
                <div key={language}>
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${getLanguageColor(language)}`}></div>
                      <span className="text-sm text-slate-300 font-mono">{language}</span>
                    </div>
                    <span className="text-sm text-slate-400 font-mono">{count} repos</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${getLanguageColor(language)} transition-all duration-1000`}
                      style={{width: `${(count / stats?.publicRepos) * 100}%`}}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* GitHub Contribution Graph */}
          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="w-6 h-6 text-purple-400" />
              <h3 className="text-xl font-bold text-white font-mono">Contribution Graph</h3>
            </div>
            
            <div className="flex items-center justify-center h-full">
              <img 
                src={`https://ghchart.rshah.org/a855f7/${username}`}
                alt="GitHub Contribution Graph"
                className="w-full rounded-lg opacity-90 hover:opacity-100 transition-opacity"
              />
            </div>
            
            <p className="text-xs text-slate-500 font-mono mt-4 text-center">
              <span className="text-slate-600">// </span>
              Last 12 months activity
            </p>
          </div>
        </div>

        {/* GitHub Stats Images */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-all duration-300">
            <img 
              src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=radical&hide_border=true&bg_color=0d1117&title_color=a855f7&icon_color=3b82f6&text_color=e2e8f0`}
              alt="GitHub Stats"
              className="w-full rounded-lg"
            />
          </div>
          
          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-all duration-300">
            <img 
              src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=radical&hide_border=true&background=0d1117&ring=a855f7&fire=3b82f6&currStreakLabel=a855f7`}
              alt="GitHub Streak"
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Closing bracket */}
      <div className="max-w-7xl mx-auto mt-8 font-mono text-sm text-slate-500 relative z-10">
        <span className="text-slate-600">// </span>
        <span className="text-slate-400">Data fetched from GitHub API</span>
      </div>
    </section>
  );
};

export default GitHubStats;