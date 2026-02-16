import { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/AboutSkills';
import LoadingScreen from './components/LoadingScreen';
import GitHubStats from './components/GithubStats';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading ? (
        <LoadingScreen onLoadComplete={handleLoadComplete} />
      ) : (
        <div className="bg-slate-950">
          <Header />
          <Home />
          <About />
          <Project />
          <GitHubStats/>
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;