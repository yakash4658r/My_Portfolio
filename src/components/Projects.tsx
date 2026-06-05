import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const projects = [
  {
    title: "Critic Tech RAG Chatbot",
    description: "RAG chatbot built for Critic Tech company to handle complex queries using document retrieval.",
    link: "https://chatbot.critictech.com",
    image: "./projects/critic-tech.jpg",
    tags: ["RAG", "Chatbot", "AI"],
  },
  {
    title: "Internroll",
    description: "Recent LMS platform featuring a fully integrated RAG chatbot for student assistance.",
    link: "https://internroll.com",
    image: "./projects/internroll.jpg",
    tags: ["LMS", "RAG", "Web App"],
  },
  {
    title: "AIRA – CampusFest",
    description: "Complete college event management website built for CampusFest.",
    link: "https://campusfest.in/",
    image: "./projects/campusfest.jpg",
    tags: ["Event", "Platform"],
  },
  {
    title: "S2J Ortho Health Services",
    description: "Professional website built for an orthopedic hospital.",
    link: "https://s2jorthohealthservices.com/",
    image: "./projects/s2j.jpg",
    tags: ["Healthcare", "Hospital"],
  },
  {
    title: "Dr. Aravind Mano",
    description: "Website designed for a Gastro Surgery Specialist hospital.",
    link: "https://draravindmano.com/",
    image: "./projects/dr-aravind.jpg",
    tags: ["Healthcare", "Surgery"],
  },
  {
    title: "Learn Mythos",
    description: "Fully functional e-commerce web application.",
    link: "https://learnmythos.app/",
    image: "./projects/learn-mythos.jpg",
    tags: ["E-commerce", "Web App"],
  },
  {
    title: "Chitra Enterprises",
    description: "Corporate website for an electrical control panel board company.",
    link: "https://chitraenterprises.in/",
    image: "./projects/chitra.jpg",
    tags: ["Corporate", "Business"],
  },
  {
    title: "DCC Chennai",
    description: "Professional website for a construction consultation company.",
    link: "https://dccchennai.com/",
    image: "./projects/dcc.jpg",
    tags: ["Construction", "Consulting"],
  },
  {
    title: "Thanmathi Exports",
    description: "Business website for an export company specializing in coconut shells.",
    link: "https://thanmathiexports.com/",
    image: "./projects/thanmathi.jpg",
    tags: ["Export", "Business"],
  },
  {
    title: "Thanmathi Digital Card",
    description: "Digital visiting card application developed for Thanmathi Exports.",
    link: "https://card.thanmathiexports.com/",
    image: "./projects/thanmathi-card.jpg",
    tags: ["Digital Card", "Web"],
  },
  {
    title: "Lakshya Fashion Boutique",
    description: "Elegant e-commerce/boutique site for a fashion brand.",
    link: "https://lakshyafashionboutique.com/",
    image: "./projects/lakshya.jpg",
    tags: ["Fashion", "Boutique"],
  },
  {
    title: "Vamsi's Woodside",
    description: "Beautifully crafted website for a resort and hospitality business.",
    link: "https://vamsiswoodside.com/",
    image: "./projects/vamsis.jpg",
    tags: ["Hospitality", "Resort"],
  },
];

export function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-24 overflow-hidden relative">
      <div className="container mx-auto px-6 lg:px-24 max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-2">PROJECTS I HAVE WORKED ON</h1>
            <h2 className="text-lg md:text-xl text-gray-500 font-medium tracking-widest uppercase">WEBSITES, WEB APPLICATIONS, AI TOOLS</h2>
          </div>

          <div className="flex flex-col border-t border-[#3B2563]">
            {projects.map((project, idx) => {
              const formattedIndex = (idx + 1).toString().padStart(2, '0');
              const tagsString = project.tags.join(' / ').toUpperCase();
              
              return (
                <motion.a
                  href={project.link !== "#" ? project.link : undefined}
                  target="_blank"
                  rel="noreferrer"
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="group relative flex flex-col md:flex-row items-start md:items-center justify-between py-10 border-b border-[#3B2563] hover:bg-[#2A1B4A] transition-colors px-4 -mx-4"
                >
                  <div className="flex items-center gap-8 md:gap-16 relative z-10 w-full md:w-auto">
                    <span className="text-gray-600 font-mono text-lg md:text-xl shrink-0">{formattedIndex}</span>
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-300 group-hover:text-white transition-colors">{project.title}</h2>
                  </div>
                  
                  <div className="relative z-10 mt-4 md:mt-0 pl-16 md:pl-0">
                    <p className="text-xs md:text-sm text-gray-500 font-bold tracking-widest group-hover:text-[#8651C9] transition-colors">{tagsString}</p>
                  </div>

                  {/* Hover Image Reveal */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[220px] pointer-events-none opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-500 z-20 hidden md:block rounded-xl overflow-hidden shadow-2xl border border-[#3B2563]">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                        (e.target as HTMLImageElement).parentElement!.innerHTML = '<div class="w-full h-full bg-[#111] flex items-center justify-center text-gray-600 font-mono text-sm border border-gray-800">No Image Preview</div>';
                      }}
                    />
                  </div>
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
