import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Endorsements from './components/Endorsements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetail from './components/ProjectDetail';
import ProjectsLanding from './components/ProjectsLanding';
import ExperienceLanding from './components/ExperienceLanding';

function App() {
  const [currentSection, setCurrentSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [showProjectsLanding, setShowProjectsLanding] = useState(false);
  const [showExperienceLanding, setShowExperienceLanding] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved theme preference, default to light mode
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      // Explicitly set light mode as default
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'experience', 'endorsements', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setCurrentSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleProjectClick = (projectId: string) => {
    setSelectedProject(projectId);
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
  };

  const handleShowProjectsLanding = () => {
    setShowProjectsLanding(true);
  };

  const handleCloseProjectsLanding = () => {
    setShowProjectsLanding(false);
  };

  const handleShowExperienceLanding = () => {
    setShowExperienceLanding(true);
  };

  const handleCloseExperienceLanding = () => {
    setShowExperienceLanding(false);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar currentSection={currentSection} onNavigate={handleNavigate} />
      
      {/* Floating Dark Mode Toggle - Separate from Navbar */}
      <button
        onClick={toggleDarkMode}
        className="fixed bottom-24 md:bottom-8 right-8 z-50 p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
        aria-label="Toggle dark mode"
      >
        {isDarkMode ? (
          <Sun size={24} className="text-yellow-500 group-hover:rotate-90 transition-transform duration-300" />
        ) : (
          <Moon size={24} className="text-gray-700 group-hover:-rotate-12 transition-transform duration-300" />
        )}
      </button>

      <Hero onNavigate={handleNavigate} />
      <Projects onProjectClick={handleProjectClick} onViewMore={handleShowProjectsLanding} />
      <Experience onViewMore={handleShowExperienceLanding} />
      <Endorsements />
      <Contact />
      <Footer />
      {selectedProject && (
        <ProjectDetail projectId={selectedProject} onClose={handleCloseProject} />
      )}
      {showProjectsLanding && (
        <ProjectsLanding onClose={handleCloseProjectsLanding} onProjectClick={handleProjectClick} />
      )}
      {showExperienceLanding && (
        <ExperienceLanding onClose={handleCloseExperienceLanding} />
      )}
    </div>
  );
}

export default App;
