import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
];

const socialItems = [
  { name: 'GitHub', href: 'https://github.com/yakash4658r', icon: Github },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/yakash4658r/', icon: Linkedin },
  { name: 'Email', href: 'mailto:yakashelavarasan@gmail.com', icon: Mail },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Left Nav (Links) */}
      <div className="hidden lg:flex fixed left-8 top-0 bottom-0 z-50 flex-col justify-center items-center">
        <div className="flex flex-col gap-8 items-center">
          <div className="w-[1px] h-24 bg-[#3B2563] mb-4"></div>
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-xs font-bold tracking-widest uppercase text-gray-500 hover:text-white transition-colors [writing-mode:vertical-rl] rotate-180"
            >
              {item.name}
            </a>
          ))}
          <div className="w-[1px] h-24 bg-[#3B2563] mt-4"></div>
        </div>
      </div>

      {/* Desktop Right Nav (Socials) */}
      <div className="hidden lg:flex fixed right-8 top-0 bottom-0 z-50 flex-col justify-center items-center">
        <div className="flex flex-col gap-6 items-center">
          <div className="w-[1px] h-24 bg-[#3B2563] mb-4"></div>
          {socialItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="text-gray-500 hover:text-[#8651C9] transition-colors hover:scale-110"
              >
                <Icon className="w-5 h-5" />
              </a>
            );
          })}
          <div className="w-[1px] h-24 bg-[#3B2563] mt-4"></div>
        </div>
      </div>

      {/* Mobile Top Nav */}
      <header className={`lg:hidden fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-[#190F2E]/90 backdrop-blur-md border-b border-[#3B2563]' : 'bg-transparent'} py-4`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <a href="#home" className="text-xl font-extrabold tracking-tight text-white">
            YAKASH<span className="text-[#8651C9]">.</span>
          </a>
          <button className="text-white p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 w-full bg-[#190F2E] border-b border-[#3B2563] py-6 px-6 flex flex-col gap-6"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-lg font-bold text-gray-300 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="flex gap-4 pt-4 border-t border-[#3B2563]">
              {socialItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a key={item.name} href={item.href} className="text-gray-400 hover:text-white">
                    <Icon className="w-6 h-6" />
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </header>
    </>
  );
}
