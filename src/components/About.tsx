import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Linkedin, Mail, Code, Database, BrainCircuit } from 'lucide-react';

interface AboutProps {
  onOpenResume: () => void;
}

export function About({ onOpenResume }: AboutProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="relative min-h-screen py-24 bg-[#190F2E]">
      
      <div className="container mx-auto px-6 lg:px-24 max-w-6xl z-10 relative">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-[10vw] sm:text-[8vw] md:text-7xl lg:text-8xl font-black text-[#2A1B4A] opacity-50 uppercase tracking-tighter leading-none select-none absolute left-1/2 -translate-x-1/2 -top-10 w-full pointer-events-none">
            ABOUT ME
          </h2>
          <h2 className="text-4xl md:text-5xl font-bold text-white relative z-10 inline-block bg-[#190F2E] px-4">
            About Me
          </h2>
          <div className="mt-6 flex items-center justify-center gap-4">
            <div className="w-12 h-[1px] bg-[#3B2563]" />
            <span className="text-xs font-bold tracking-widest text-[#8651C9] uppercase">More About Me</span>
            <div className="w-12 h-[1px] bg-[#3B2563]" />
          </div>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col md:flex-row items-center md:items-start gap-16 lg:gap-24"
        >
          
          {/* Left Column - Avatar & Badges */}
          <div className="md:w-5/12 flex justify-center relative mt-10 md:mt-0">
            {/* Glow / Ring */}
            <div className="absolute inset-0 bg-[#8651C9] opacity-20 blur-[100px] rounded-full" />
            
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border border-[#3B2563] bg-gradient-to-b from-[#2A1B4A] to-[#190F2E] flex items-end justify-center shadow-[0_0_50px_rgba(134,81,201,0.2)] overflow-hidden">
              <img 
                src="./Profile_nobg.png" 
                alt="Yakash Profile" 
                className="w-[85%] h-[85%] object-contain object-bottom drop-shadow-2xl"
              />
            </div>

            {/* Floating Badges */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 right-0 md:-right-6 bg-gradient-to-r from-[#8651C9] to-[#b078f7] text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg"
            >
              AI Engineer
            </motion.div>
            <motion.div 
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 left-0 md:-left-4 bg-[#2A1B4A] border border-[#3B2563] text-gray-300 text-xs font-bold px-4 py-2 rounded-full shadow-lg"
            >
              Data Scientist
            </motion.div>
          </div>

          {/* Right Column - Info */}
          <div className="md:w-7/12 flex flex-col gap-8">
            
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Hey! I'm <span className="text-[#8651C9] border-b-2 border-[#8651C9] pb-1">YAKASH</span>
              </h3>
            </div>

            <div className="text-gray-400 text-sm md:text-base leading-relaxed space-y-4">
              <p>
                I'm an Artificial Intelligence and Data Science student passionate about building intelligent systems. I specialize in Machine Learning, Deep Learning, Generative AI, RAG Systems, and LLM Applications.
              </p>
              <p>
                I'm always leveling up my skills and currently diving deeper into advanced solution architectures and scalable AI deployments. Whether it's enterprise solutions or innovative AI tools, I'm open to exciting opportunities to build amazing stuff.
              </p>
            </div>

            {/* What I Do */}
            <div>
              <h4 className="text-white font-bold mb-4">What I Do</h4>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 bg-[#2A1B4A] border border-[#3B2563] px-4 py-2 rounded-full text-xs font-bold text-gray-300">
                  <BrainCircuit className="w-4 h-4 text-[#8651C9]" /> Machine Learning
                </div>
                <div className="flex items-center gap-2 bg-[#2A1B4A] border border-[#3B2563] px-4 py-2 rounded-full text-xs font-bold text-gray-300">
                  <Database className="w-4 h-4 text-[#8651C9]" /> Data Science
                </div>
                <div className="flex items-center gap-2 bg-[#2A1B4A] border border-[#3B2563] px-4 py-2 rounded-full text-xs font-bold text-gray-300">
                  <Code className="w-4 h-4 text-[#8651C9]" /> GenAI & LLMs
                </div>
              </div>
            </div>

            {/* Connect & Resume */}
            <div className="pt-4 flex flex-col gap-6">
              <div>
                <h4 className="text-white font-bold mb-4">Connect With Me</h4>
                <div className="flex gap-4">
                  <a href="https://github.com/yakash4658r" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-[#2A1B4A] border border-[#3B2563] flex items-center justify-center text-gray-400 hover:text-white hover:border-[#8651C9] transition-colors">
                    <Github className="w-4 h-4" />
                  </a>
                  <a href="https://www.linkedin.com/in/yakash4658r/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-[#2A1B4A] border border-[#3B2563] flex items-center justify-center text-gray-400 hover:text-white hover:border-[#8651C9] transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href="mailto:yakashelavarasan@gmail.com" className="w-10 h-10 rounded-full bg-[#2A1B4A] border border-[#3B2563] flex items-center justify-center text-gray-400 hover:text-white hover:border-[#8651C9] transition-colors">
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div>
                <button 
                  onClick={onOpenResume}
                  className="bg-gradient-to-r from-[#8651C9] to-[#b078f7] text-white font-bold py-3 px-8 rounded-full hover:opacity-90 transition-opacity shadow-[0_0_20px_rgba(134,81,201,0.4)]"
                >
                  View Resume
                </button>
              </div>
            </div>

          </div>

        </motion.div>
      </div>
    </section>
  );
}
