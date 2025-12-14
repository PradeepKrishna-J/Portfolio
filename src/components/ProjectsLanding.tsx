import { useState } from 'react';
import { X, ExternalLink, Github, ChevronRight } from 'lucide-react';
import { projects } from '../data/projects';
import { Project } from '../types';

interface ProjectsLandingProps {
  onClose: () => void;
  onProjectClick: (projectId: string) => void;
}

export default function ProjectsLanding({ onClose, onProjectClick }: ProjectsLandingProps) {
  const [activeCategory, setActiveCategory] = useState<Project['category'] | 'all'>('all');

  const categories = [
    { id: 'all' as const, label: 'All Projects' },
    { id: 'ai-ml' as const, label: 'AI/ML Projects' },
    { id: 'web-dev' as const, label: 'Web Development' },
    { id: 'research' as const, label: 'Research Projects' },
  ];

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-white">
      <div className="min-h-screen">
        <div className="sticky top-0 z-10 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">All Projects</h1>
                <p className="text-gray-600 mt-2">Explore my complete portfolio of work</p>
              </div>
              <button
                onClick={onClose}
                className="p-3 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X size={24} className="text-gray-700" />
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
          <div className="mb-12">
            <div className="grid grid-cols-2 md:flex md:flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 md:px-6 py-3 rounded-lg font-medium transition-all duration-300 text-sm md:text-base ${
                    activeCategory === category.id
                      ? 'bg-gray-900 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pb-12">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-200"
              >
                <div className="h-56 bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-900/10 to-gray-900/20 group-hover:from-gray-900/20 group-hover:to-gray-900/30 transition-all duration-300" />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-medium rounded-full">
                      {project.category === 'ai-ml' && 'AI/ML'}
                      {project.category === 'web-dev' && 'Web Dev'}
                      {project.category === 'research' && 'Research'}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-4">
                    <button
                      onClick={() => {
                        onProjectClick(project.id);
                        onClose();
                      }}
                      className="flex-1 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all duration-300 flex items-center justify-center gap-2 text-sm font-medium"
                    >
                      View Details
                      <ChevronRight size={16} />
                    </button>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 border border-gray-300 rounded-lg hover:border-gray-900 hover:bg-gray-50 transition-all duration-300"
                      >
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
