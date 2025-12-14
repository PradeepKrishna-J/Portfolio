import { Mail, Github, Linkedin, Send } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="min-h-screen py-24 pb-32 md:pb-24 px-6 lg:px-12 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <StickyTitle title="Get In Touch" bgLight="bg-white/40" bgDark="dark:bg-gray-900/70" />
        <div className="mb-16 space-y-4 text-center">
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Interested in collaboration or have a project in mind? Feel free to reach out.
          </p>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Contact Information</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities
                to be part of your vision. Let's connect and explore how we can work together.
              </p>
            </div>

            <div className="space-y-6">
              <a
                href="mailto:pradeep@example.com"
                className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700"
              >
                <div className="w-12 h-12 bg-white dark:bg-gray-700 rounded-lg flex items-center justify-center border border-gray-300 dark:border-gray-600">
                  <Mail size={24} className="text-gray-700 dark:text-gray-300" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Email</p>
                  <p className="text-gray-900 dark:text-white font-medium">pradeep@example.com</p>
                </div>
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700"
              >
                <div className="w-12 h-12 bg-white dark:bg-gray-700 rounded-lg flex items-center justify-center border border-gray-300 dark:border-gray-600">
                  <Github size={24} className="text-gray-700 dark:text-gray-300" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">GitHub</p>
                  <p className="text-gray-900 dark:text-white font-medium">github.com/jpradeepkrishna</p>
                </div>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700"
              >
                <div className="w-12 h-12 bg-white dark:bg-gray-700 rounded-lg flex items-center justify-center border border-gray-300 dark:border-gray-600">
                  <Linkedin size={24} className="text-gray-700 dark:text-gray-300" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">LinkedIn</p>
                  <p className="text-gray-900 dark:text-white font-medium">linkedin.com/in/jpradeepkrishna</p>
                </div>
              </a>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-400 focus:border-transparent outline-none transition-all"
                  placeholder="Your name"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-400 focus:border-transparent outline-none transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-400 focus:border-transparent outline-none transition-all"
                  placeholder="What's this about?"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-400 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2 font-medium"
              >
                Send Message
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// Reusable sticky title piece mirroring Projects/Experience/Endorsements behavior
function StickyTitle({ title, bgLight, bgDark }: { title: string; bgLight: string; bgDark: string }) {
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const [isStuck, setIsStuck] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const mql = window.matchMedia('(min-width: 768px)');
    const setFromMql = (mq: MediaQueryList) => setIsMobile(!mq.matches);
    setFromMql(mql);
    const listener = (e: MediaQueryListEvent) => setIsMobile(!e.matches);
    mql.addEventListener('change', listener);
    return () => mql.removeEventListener('change', listener);
  }, []);

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
    <div>
      <div ref={sentinelRef} aria-hidden className="h-px w-full" />
  <div className="sticky top-3 z-40 md:static -mx-6 lg:-mx-12 md:mx-0 mb-4 md:mb-0">
        <h2
          className={`text-4xl md:text-5xl font-bold text-gray-900 dark:text-white backdrop-blur-xl ${bgLight} ${bgDark} py-4 md:py-0 px-6 md:px-0 mx-3 md:mx-0 rounded-2xl md:rounded-none md:bg-transparent md:backdrop-blur-none text-center transition-shadow ${
            isMobile && isStuck ? 'shadow-lg' : 'shadow-none'
          }`}
        >
          {title}
        </h2>
      </div>
    </div>
  );
}
