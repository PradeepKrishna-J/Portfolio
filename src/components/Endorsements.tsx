import { useEffect, useRef, useState } from 'react';
import { Quote } from 'lucide-react';

export default function Endorsements() {
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
  const endorsements = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      title: 'Professor, Department of AI & Data Science',
      organization: 'SVCE',
      content: 'Pradeep demonstrates exceptional aptitude in machine learning and artificial intelligence. His research work on narcissistic behavior detection showcases innovative thinking and strong technical execution.',
      image: null,
    },
    {
      id: 2,
      name: 'Michael Chen',
      title: 'Senior AI Engineer',
      organization: 'Baysoft Systems Inc.',
      content: 'Working with Pradeep during his internship was a pleasure. He quickly grasped complex concepts and delivered production-quality code. His chatbot implementation exceeded our expectations in both performance and user experience.',
      image: null,
    },
    {
      id: 3,
      name: 'Rajesh Kumar',
      title: 'Data Science Lead',
      organization: 'AICTE-Skillible',
      content: 'Pradeep brings a unique combination of theoretical knowledge and practical skills. His ability to translate business requirements into effective machine learning solutions is impressive for someone at his career stage.',
      image: null,
    },
  ];

  return (
    <section id="endorsements" className="min-h-screen py-24 px-6 lg:px-12 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div ref={sentinelRef} aria-hidden className="h-px w-full" />
        <div className="sticky top-3 z-40 md:static -mx-6 lg:-mx-12 md:mx-0 mb-4 md:mb-0">
          <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 dark:text-white backdrop-blur-xl bg-gray-50/40 dark:bg-gray-800/70 py-4 md:py-0 px-6 md:px-0 mx-3 md:mx-0 rounded-2xl md:rounded-none md:bg-transparent md:backdrop-blur-none text-center transition-shadow ${isMobile && isStuck ? 'shadow-lg' : 'shadow-none'}`}>
            Endorsements
          </h2>
        </div>
        <div className="mb-16 space-y-4 text-center">
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mt-4">
            Testimonials from mentors, colleagues, and industry professionals I've had
            the privilege to work with.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {endorsements.map((endorsement) => (
            <div
              key={endorsement.id}
              className="bg-white dark:bg-gray-700 rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-600 space-y-6"
            >
              <Quote size={32} className="text-gray-300 dark:text-gray-500" />

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{endorsement.content}</p>

              <div className="pt-6 border-t border-gray-200 dark:border-gray-600 space-y-2">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-200 dark:bg-gray-600 rounded-full flex items-center justify-center">
                    <span className="text-lg font-semibold text-gray-600 dark:text-gray-300">
                      {endorsement.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{endorsement.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{endorsement.title}</p>
                  </div>
                </div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 pl-16">{endorsement.organization}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
