import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

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
    <section id="home" className="min-h-screen flex items-center pt-20 pb-16 px-6 lg:px-12 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
                J Pradeep Krishna
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-light">
                (Pradeep)
              </p>
            </div>

            <div className="space-y-2">
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
                B.Tech AI & Data Science, 4th Year
              </p>
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-400">
                Sri Venkateswara College of Engineering, India
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Passionate about artificial intelligence, machine learning, and building intelligent
                systems that solve real-world problems. Experienced in developing end-to-end AI solutions,
                from research and prototyping to deployment and optimization.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => onNavigate('projects')}
                className="group px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 font-medium"
              >
                View Projects
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => onNavigate('experience')}
                className="px-8 py-4 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white rounded-lg hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-gray-900 transition-all duration-300 font-medium"
              >
                Experience
              </button>
            </div>

            <div className="flex gap-6 pt-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:pradeep@example.com"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Technology Stack</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
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
          </div>
        </div>
      </div>
    </section>
  );
}
