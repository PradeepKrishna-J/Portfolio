import { Download, Github, Linkedin, Mail, Sparkles } from 'lucide-react';

interface HeroProps {
  onNavigate: (section: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const skills = [
    { name: 'React', icon: '⚛️' },
    { name: 'Python', icon: '🐍' },
    { name: 'TensorFlow', icon: '🧠' },
    { name: 'PyTorch', icon: '🔥' },
    { name: 'Hugging Face', icon: '🤗' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'MongoDB', icon: '🍃' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-16 px-6 lg:px-12 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Available Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full shadow-sm">
              <Sparkles size={16} className="text-yellow-500" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Available for Work</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
                Hello, I'm
                <br />
                <span className="text-gray-800 dark:text-gray-100">
                  Pradeep Krishna
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-light">
                AI/ML Engineer crafting intelligent solutions with <span className="font-semibold text-gray-900 dark:text-white">2+ years</span> of expertise
              </p>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl">
              Specializing in deep learning, reinforcement learning, and end-to-end AI solutions that drive innovation and solve complex real-world problems.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="/resume.pdf"
                download
                className="group px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 font-medium shadow-lg"
              >
                <Download size={20} />
                Download Resume
              </a>
              <button
                onClick={() => onNavigate('projects')}
                className="px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 font-medium"
              >
                View My Work
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://github.com/PradeepKrishna-J"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:border-gray-900 dark:hover:border-white transition-all duration-300"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:border-gray-900 dark:hover:border-white transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:pradeep@example.com"
                className="p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:border-gray-900 dark:hover:border-white transition-all duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Right Column - Image & Stats */}
          <div className="flex flex-col items-center space-y-12">
            {/* Profile Image with Badge */}
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-8 border-white dark:border-gray-800 shadow-2xl">
                <img 
                  src="https://ik.imagekit.io/pradeepkrishna07/Gemini_Generated_Image_tgn185tgn185tgn1.png" 
                  alt="Pradeep Krishna"
                  className="w-full h-full object-cover object-top"
                  style={{ objectPosition: '50% 20%' }}
                />
              </div>
              <div className="absolute bottom-4 right-4 flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full shadow-lg">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Available for hire</span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 md:gap-8 w-full max-w-lg">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">20+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">2+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Years Exp</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">100%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Dedication</div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Stack Section */}
        <div className="mt-24 space-y-8">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Technology Stack</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2">Tools and frameworks I work with</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center"
              >
                <div className="text-3xl mb-3">{skill.icon}</div>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex flex-col items-center mt-16 animate-bounce">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Scroll to explore</p>
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
