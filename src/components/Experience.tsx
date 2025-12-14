import { useEffect, useRef, useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { experiences } from '../data/experience';

interface ExperienceProps {
  onViewMore: () => void;
}

export default function Experience({ onViewMore }: ExperienceProps) {
  // Mobile-only sticky shadow logic for title
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const [isStuck, setIsStuck] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  // Track viewport size to restrict behavior to mobile (< md)
  useEffect(() => {
    const mql = window.matchMedia('(min-width: 768px)');
    const setFromMql = (mq: MediaQueryList) => setIsMobile(!mq.matches);
    setFromMql(mql);
    const listener = (e: MediaQueryListEvent) => setIsMobile(!e.matches);
    mql.addEventListener('change', listener);
    return () => mql.removeEventListener('change', listener);
  }, []);

  // Observe when the header becomes stuck
  useEffect(() => {
    if (!sentinelRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsStuck(!entry.isIntersecting),
      { root: null, threshold: 0, rootMargin: '-12px 0px 0px 0px' }
    );
    observer.observe(sentinelRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="min-h-screen py-24 px-6 lg:px-12 bg-white dark:bg-gray-900 transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div ref={sentinelRef} aria-hidden className="h-px w-full" />
        <div className="sticky top-3 z-40 md:static -mx-6 lg:-mx-12 md:mx-0 mb-4 md:mb-0">
          <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 dark:text-white backdrop-blur-xl bg-white/40 dark:bg-gray-900/70 py-4 md:py-0 px-6 md:px-0 mx-3 md:mx-0 rounded-2xl md:rounded-none md:bg-transparent md:backdrop-blur-none text-center transition-shadow ${isMobile && isStuck ? 'shadow-lg' : 'shadow-none'}`}>
            Experience
          </h2>
        </div>
        <div className="mb-16 space-y-4 text-center">
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mt-4">
            Professional journey spanning internships, research projects, and academic initiatives
            in artificial intelligence and data science.
          </p>
        </div>

        {/* Timeline container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line - desktop only */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-400 dark:bg-gray-600 transform -translate-x-1/2 hidden md:block" />

          <ul className="list-none space-y-12 md:space-y-0">
            {experiences.map((exp, index) => (
              <li
                key={exp.id}
                className={`group relative p-6 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl mb-12 md:mb-12 md:w-1/2 
                  ${index % 2 === 0 
                    ? 'md:float-left md:clear-right md:-translate-x-8 md:rounded-tl-none' 
                    : 'md:float-right md:clear-left md:translate-x-8 md:rounded-tr-none'
                  }
                  border-2 border-transparent
                  hover:border-gradient hover:shadow-2xl hover:scale-[1.02] hover:bg-white dark:hover:bg-gray-700
                  transition-all duration-300 ease-out
                  before:content-[''] before:absolute before:h-5 before:w-5 before:rounded-full before:bg-gray-400 dark:before:bg-gray-500 before:top-0 before:z-10
                  before:transition-all before:duration-300
                  ${index % 2 === 0
                    ? 'before:md:right-[-42px] before:md:-translate-y-1/2 before:hidden md:before:block'
                    : 'before:md:left-[-42px] before:md:-translate-y-1/2 before:hidden md:before:block'
                  }
                  hover:before:bg-gradient-to-br hover:before:from-cyan-400 hover:before:to-blue-500 hover:before:scale-125 hover:before:shadow-lg hover:before:shadow-cyan-400/50
                `}
              >
                <div className="timeline-content">
                  {/* Date */}
                  <h3 className={`text-xs font-light tracking-wider mb-2 text-gray-500 dark:text-gray-400 uppercase
                    ${index % 2 === 0 ? 'md:absolute md:-top-8 md:left-0' : 'md:absolute md:-top-8 md:right-0'}
                    group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors duration-300
                  `}>
                    {exp.period}
                  </h3>
                  
                  {/* Title */}
                  <h1 className="font-medium text-2xl leading-8 mb-3 text-gray-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
                    {exp.title}
                  </h1>
                  
                  {/* Company & Location */}
                  <p className="text-base leading-7 font-light text-gray-700 dark:text-gray-300 mb-2">
                    <strong className="font-semibold group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300">{exp.company}</strong> - {exp.location}
                  </p>
                  
                  {/* Description */}
                  <p className="text-base leading-7 font-light text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                    {exp.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          
          {/* Clear floats */}
          <div className="clear-both" />
        </div>

        <div className="mt-16 text-center">
          <button
            onClick={onViewMore}
            className="px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 font-medium inline-flex items-center gap-2"
          >
            View Detailed Experience
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
