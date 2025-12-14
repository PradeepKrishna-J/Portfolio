import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12 px-6 lg:px-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">J Pradeep Krishna</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              AI & Data Science student passionate about building intelligent systems
              that solve real-world problems.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wide">Quick Links</h4>
            <div className="space-y-2">
              <a href="#home" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Home
              </a>
              <a href="#projects" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Projects
              </a>
              <a href="#experience" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Experience
              </a>
              <a href="#contact" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Contact
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wide">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:pradeep@example.com"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            {currentYear} J Pradeep Krishna. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
