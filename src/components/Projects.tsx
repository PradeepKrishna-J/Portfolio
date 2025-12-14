import { useEffect, useRef, useState } from 'react';
import { Github, ChevronRight } from 'lucide-react';
import { getProjectsByCategory } from '../data/projects';
import { Project } from '../types';

interface ProjectsProps {
  onProjectClick: (projectId: string) => void;
  onViewMore: () => void;
}

export default function Projects({ onProjectClick, onViewMore }: ProjectsProps) {
  const [activeCategory, setActiveCategory] = useState<Project['category']>('ai-ml');

  const categories = [
    { id: 'ai-ml' as const, label: 'AI/ML Projects' },
    { id: 'web-dev' as const, label: 'Web Development' },
    { id: 'research' as const, label: 'Research Projects' },
  ];

  const filteredProjects = getProjectsByCategory(activeCategory);

  // Mobile-only sticky shadow logic for title
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const [isStuck, setIsStuck] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  // Track viewport size to restrict behavior to mobile (< md)
  useEffect(() => {
    const mql = window.matchMedia('(min-width: 768px)');
    const setFromMql = (mq: MediaQueryList) => setIsMobile(!mq.matches);

    // initial
    setFromMql(mql);
    // subscribe
    const listener = (e: MediaQueryListEvent) => setIsMobile(!e.matches);
    mql.addEventListener('change', listener);
    return () => mql.removeEventListener('change', listener);
  }, []);

  // Observe a sentinel placed just before the sticky header to detect when it sticks
  useEffect(() => {
    if (!sentinelRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // If the sentinel is not visible, the header is stuck
        setIsStuck(!entry.isIntersecting);
      },
      {
        // account roughly for top-3 (12px) sticky offset so it toggles when reaching the pin point
        root: null,
        threshold: 0,
        rootMargin: '-12px 0px 0px 0px',
      }
    );

    observer.observe(sentinelRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="min-h-screen py-24 px-6 lg:px-12 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Sentinel used to detect when the sticky title reaches the top (mobile only) */}
        <div ref={sentinelRef} aria-hidden className="h-px w-full" />
        <div className="sticky top-3 z-40 md:static -mx-6 lg:-mx-12 md:mx-0 mb-4 md:mb-0">
          <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 dark:text-white backdrop-blur-xl bg-gray-50/40 dark:bg-gray-800/70 py-4 md:py-0 px-6 md:px-0 mx-3 md:mx-0 rounded-2xl md:rounded-none md:bg-transparent md:backdrop-blur-none text-center transition-shadow ${isMobile && isStuck ? 'shadow-lg' : 'shadow-none'}`}>
            Projects
          </h2>
        </div>
        <div className="mb-16 space-y-6">
          <div className="space-y-4">
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mt-4">
              A collection of my work spanning artificial intelligence, web development,
              and research initiatives.
            </p>
          </div>

          <div className="flex gap-2 md:gap-4 pt-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex-1 px-2 md:px-6 py-2 md:py-3 rounded-lg font-medium transition-all duration-300 whitespace-nowrap text-xs md:text-base ${
                  activeCategory === category.id
                    ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-lg'
                    : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:border-gray-900 dark:hover:border-gray-400'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8 max-w-sm md:max-w-full mx-auto">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onProjectClick(project.id)}
              className="bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-200 dark:border-gray-600 cursor-pointer"
            >
              <div className="h-32 md:h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-600 dark:to-gray-700 relative overflow-hidden">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-900/10 to-gray-900/20 dark:from-gray-900/30 dark:to-gray-900/50 group-hover:from-gray-900/20 group-hover:to-gray-900/30 dark:group-hover:from-gray-900/40 dark:group-hover:to-gray-900/60 transition-all duration-300" />
                )}
              </div>

              <div className="p-3 md:p-6 space-y-2 md:space-y-4">
                <h3 className="text-sm md:text-xl font-bold text-gray-900 dark:text-white group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors line-clamp-2">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 text-xs md:text-sm leading-relaxed line-clamp-2 md:line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1 md:gap-2">
                  {project.techStack.slice(0, 2).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 md:px-3 py-0.5 md:py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-200 text-[10px] md:text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 2 && (
                    <span className="px-2 md:px-3 py-0.5 md:py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-200 text-[10px] md:text-xs font-medium rounded-full">
                      +{project.techStack.length - 2}
                    </span>
                  )}
                </div>

                <div className="flex gap-2 md:gap-3 pt-2 md:pt-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onProjectClick(project.id);
                    }}
                    className="flex-1 px-2 md:px-4 py-1.5 md:py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-1 md:gap-2 text-xs md:text-sm font-medium"
                  >
                    <span className="hidden md:inline">View Details</span>
                    <span className="md:hidden">View</span>
                    <ChevronRight size={14} className="md:w-4 md:h-4" />
                  </button>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-1.5 md:p-2 border border-gray-300 dark:border-gray-500 rounded-lg hover:border-gray-900 dark:hover:border-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 transition-all duration-300"
                    >
                      <Github size={16} className="md:w-5 md:h-5 text-gray-700 dark:text-gray-300" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button
            onClick={onViewMore}
            className="px-8 py-4 bg-white dark:bg-gray-700 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white rounded-lg hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-gray-900 transition-all duration-300 font-medium inline-flex items-center gap-2"
          >
            View All Projects
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
