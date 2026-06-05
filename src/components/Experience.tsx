import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-24 max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-2">EXPERIENCE</h1>
            <h2 className="text-lg md:text-xl text-gray-500 font-medium tracking-widest uppercase">PROFESSIONAL JOURNEY</h2>
          </div>

          <div className="border-t border-[#3B2563] pt-10">
            <div className="flex flex-col md:flex-row gap-8 md:gap-16">
              
              <div className="md:w-1/3 shrink-0">
                <span className="text-gray-500 font-mono text-sm tracking-widest uppercase block mb-2">Present</span>
                <h3 className="text-2xl font-bold text-white">Critic Tech</h3>
                <p className="text-[#8651C9] font-medium mt-1">Chennai, India</p>
              </div>
              
              <div className="md:w-2/3">
                <h4 className="text-xl md:text-2xl font-bold text-gray-300 mb-6">Technical Head — R&D</h4>
                <ul className="space-y-4 text-gray-400 font-medium leading-relaxed">
                  <li className="flex items-start gap-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8651C9] mt-2.5 shrink-0" />
                    <span>Leading AI Product Development and architectural decisions for enterprise solutions.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8651C9] mt-2.5 shrink-0" />
                    <span>Conducting research and innovation in Generative AI and advanced machine learning models.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8651C9] mt-2.5 shrink-0" />
                    <span>Designing scalable Solution Architectures for robust LLM and RAG applications.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8651C9] mt-2.5 shrink-0" />
                    <span>Fostering team collaboration, code quality, and technical excellence across engineering teams.</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
