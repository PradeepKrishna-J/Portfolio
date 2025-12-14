import { useState, useEffect } from 'react';
import { Home, Briefcase, Award, Mail, FolderOpen } from 'lucide-react';

interface NavbarProps {
  currentSection: string;
  onNavigate: (section: string) => void;
}

export default function Navbar({ currentSection, onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'endorsements', label: 'Endorsements', icon: Award },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
  };

  // Different highlight color variations - uncomment one to use
  // Option 1: Blue highlight (modern tech)
  // const activeColor = 'text-blue-600';
  // const underlineColor = 'bg-blue-600';
  
  // Option 2: Purple highlight (creative/premium)
  // const activeColor = 'text-purple-600';
  // const underlineColor = 'bg-purple-600';
  
  // Option 3: Emerald/Green highlight (fresh/eco)
  // const activeColor = 'text-emerald-600';
  // const underlineColor = 'bg-emerald-600';
  
  // Option 4: Orange highlight (energetic)
  // const activeColor = 'text-orange-600';
  // const underlineColor = 'bg-orange-600';
  
  // Option 5: Rose/Pink highlight (elegant)
  // const activeColor = 'text-rose-600';
  // const underlineColor = 'bg-rose-600';
  
  // Option 6: Indigo highlight (professional)
  const activeColor = 'text-indigo-600';
  const underlineColor = 'bg-indigo-600';
  
  // Option 7: Teal highlight (modern/tech)
  // const activeColor = 'text-teal-600';
  // const underlineColor = 'bg-teal-600';
  
  // Option 8: Default black (current)
  // const activeColor = 'text-gray-900';
  // const underlineColor = 'bg-gray-900';

  return (
    <>
      {/* Desktop Top Navigation */}
      <nav
        className={`hidden md:block fixed top-4 left-1/2 transform -translate-x-1/2 z-50 max-w-fit rounded-2xl transition-all duration-300 shadow-lg ${
          isScrolled
            ? 'backdrop-blur-md bg-white/80 dark:bg-gray-800/80 shadow-xl border border-gray-200/50 dark:border-gray-700/50'
            : 'backdrop-blur-md bg-white/40 dark:bg-gray-800/40 shadow-lg'
        }`}
      >
        <div className="mx-auto px-8">
          <div className="flex items-center justify-center h-16">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-base font-medium transition-colors relative group py-2 ${
                    currentSection === item.id
                      ? activeColor + ' dark:text-indigo-400'
                      : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 ${underlineColor} dark:bg-indigo-400 transition-all duration-300 ${
                      currentSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation - Apple Style */}
      <nav className="md:hidden fixed bottom-6 left-3 right-3 z-50">
        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-3xl border border-gray-200/50 dark:border-gray-700/50 shadow-2xl px-2 py-2">
          <div className="flex items-center justify-between relative gap-0.5">
            {/* Animated background indicator */}
            <div
              className="absolute h-9 bg-indigo-100 dark:bg-indigo-500/30 rounded-xl transition-all duration-500 ease-out pointer-events-none"
              style={{
                width: currentSection === 'home' ? 'calc(15% - 2px)' : 
                       currentSection === 'projects' ? 'calc(18% - 2px)' : 
                       currentSection === 'experience' ? 'calc(22% - 2px)' : 
                       currentSection === 'endorsements' ? 'calc(25% - 2px)' : 'calc(17% - 2px)',
                left: currentSection === 'home' ? '2px' : 
                      currentSection === 'projects' ? 'calc(15% + 3px)' : 
                      currentSection === 'experience' ? 'calc(33% + 5px)' : 
                      currentSection === 'endorsements' ? 'calc(55% + 7px)' : 'calc(80% + 9px)',
              }}
            />
            
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentSection === item.id;
              // Dynamic width based on label length
              const itemWidth = item.label === 'Home' ? 'w-[15%]' :
                               item.label === 'Projects' ? 'w-[18%]' :
                               item.label === 'Experience' ? 'w-[22%]' :
                               item.label === 'Endorsements' ? 'w-[25%]' : 'w-[17%]';
              
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative flex flex-col items-center justify-center gap-0.5 h-9 rounded-xl transition-all duration-300 z-10 ${itemWidth} ${
                    isActive
                      ? 'text-indigo-600 dark:text-indigo-400'
                      : 'text-gray-500 dark:text-gray-400'
                  }`}
                >
                  <Icon 
                    size={18} 
                    className={`transition-all duration-300 ${
                      isActive ? 'scale-110' : 'scale-100'
                    }`}
                    strokeWidth={isActive ? 2 : 2}
                  />
                  <span className={`text-[8px] font-medium transition-all duration-300 leading-none whitespace-nowrap ${
                    isActive ? 'opacity-100' : 'opacity-70'
                  }`}>
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
}
