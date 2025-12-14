import { X, Github, ExternalLink } from 'lucide-react';
import { getProjectById } from '../data/projects';
import { useEffect } from 'react';

interface ProjectDetailProps {
  projectId: string;
  onClose: () => void;
}

export default function ProjectDetail({ projectId, onClose }: ProjectDetailProps) {
  const project = getProjectById(projectId);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div className="min-h-screen px-6 py-12 flex items-start justify-center">
        <div 
          className="bg-white rounded-xl max-w-4xl w-full shadow-2xl relative animate-fadeIn"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-lg transition-colors z-10"
          >
            <X size={24} className="text-gray-700" />
          </button>

          <div className="p-8 md:p-12 space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 pr-12">
                {project.title}
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="h-64 md:h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl relative overflow-hidden">
              {project.image ? (
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/10 to-gray-900/20" />
              )}
            </div>

            <div className="prose prose-lg max-w-none">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Overview</h3>
              <div 
                className="text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ 
                  __html: project.fullDescription
                    .replace(/\*\*\[(.*?)\]\((.*?)\)\*\*/g, '<strong><a href="$2" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 hover:underline transition-colors">$1</a></strong>')
                    .replace(/\n\n/g, '<br/>')
                    .replace(/• /g, '<br/>• ')
                }}
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Technical Details</h3>
              <p className="text-gray-700 leading-relaxed">
                This project leverages cutting-edge technologies and methodologies to deliver
                robust, scalable solutions. The implementation follows industry best practices
                and incorporates modern software engineering principles.
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Key Features</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Advanced algorithm implementation with optimized performance</li>
                <li>Intuitive user interface with responsive design</li>
                <li>Comprehensive testing and quality assurance</li>
                <li>Detailed documentation and code comments</li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-4 pt-6">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all duration-300 flex items-center gap-2 font-medium"
                >
                  <Github size={20} />
                  View on GitHub
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-300 flex items-center gap-2 font-medium"
                >
                  <ExternalLink size={20} />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
