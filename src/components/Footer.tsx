import { motion } from 'framer-motion';

export function Footer() {
  return (
    <footer id="contact" className="py-24 border-t border-[#3B2563] bg-[#190F2E] relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-24 max-w-6xl">
        <div className="flex flex-col gap-8 mb-24">
          <span className="text-[#8651C9] font-mono tracking-widest text-sm uppercase">Have a project in mind?</span>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white hover:text-gray-300 transition-colors inline-block w-fit">
            <a href="mailto:yakashelavarasan@gmail.com">Let's Connect<span className="text-[#8651C9]">.</span></a>
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 pt-8 border-t border-[#3B2563]">
          <div className="text-gray-500 text-sm font-medium space-y-2">
            <p>© {new Date().getFullYear()} — Yakash</p>
            <p className="hover:text-white transition-colors cursor-pointer">yakashelavarasan@gmail.com</p>
          </div>
          
          <div className="flex items-center gap-8 text-sm font-bold tracking-widest uppercase text-gray-500">
            <a href="https://github.com/yakash4658r" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/yakash4658r/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
          </div>

          <div className="text-gray-500 text-sm font-medium">
            <p>Chennai, India</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
