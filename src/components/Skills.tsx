import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  SiPython, SiMysql, SiPostgresql, SiR, SiCplusplus, SiNeo4J, SiOpenai, SiAnthropic, 
  SiHuggingface, SiDocker, SiFastapi, SiPandas, SiNumpy, SiScikitlearn, SiTensorflow, 
  SiPytorch, SiOpencv, SiJupyter, SiApacheairflow, 
  SiGoogleanalytics, SiApachespark, SiFlask, SiGit 
} from 'react-icons/si';
import { Link, Network, BarChart2, FileSpreadsheet, Code } from 'lucide-react';

const domains = [
  "Machine Learning", "Data Science", "Data Analysis", "Computer Vision",
  "Natural Language Processing (NLP)", "Language Models (LMs)", "Knowledge Graphs", "Semantic Web",
  "Retrieval Augmented Generation (RAG)", "AI Agents", "Entity Resolution", "API Development", "MLOps",
  "Model Context Protocol (MCP)", "SQL", "Data Engineering", "Data Pipelines", "Data Clean Rooms",
  "Data Visualization", "Web Development"
];

const technologies = [
  { name: "Python", icon: SiPython },
  { name: "MySQL", icon: SiMysql },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "R", icon: SiR },
  { name: "C++", icon: SiCplusplus },
  { name: "LangChain", icon: Link },
  { name: "LangGraph", icon: Network },
  { name: "Neo4j", icon: SiNeo4J },
  { name: "OpenAI API", icon: SiOpenai },
  { name: "Anthropic API", icon: SiAnthropic },
  { name: "Hugging Face", icon: SiHuggingface },
  { name: "Docker", icon: SiDocker },
  { name: "FastAPI", icon: SiFastapi },
  { name: "Pandas", icon: SiPandas },
  { name: "NumPy", icon: SiNumpy },
  { name: "Scikit-learn", icon: SiScikitlearn },
  { name: "TensorFlow", icon: SiTensorflow },
  { name: "PyTorch", icon: SiPytorch },
  { name: "OpenCV", icon: SiOpencv },
  { name: "Jupyter", icon: SiJupyter },
  { name: "Apache Airflow", icon: SiApacheairflow },
  { name: "Power BI", icon: BarChart2 },
  { name: "Excel", icon: FileSpreadsheet },
  { name: "Google Analytics", icon: SiGoogleanalytics },
  { name: "PySpark", icon: SiApachespark },
  { name: "Flask", icon: SiFlask },
  { name: "Git", icon: SiGit },
  { name: "VS Code", icon: Code }
];

export function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-24 bg-[#190F2E]">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-6 lg:px-24 max-w-6xl"
      >
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-2">TECHNICAL EXPERTISE</h1>
          <h2 className="text-lg md:text-xl text-gray-500 font-medium tracking-widest uppercase">DOMAINS & TECHNOLOGIES</h2>
        </div>

        {/* Domains & Expertise */}
        <div className="mb-20">
          <div className="flex flex-wrap gap-3">
            {domains.map((domain, idx) => (
              <motion.span
                key={domain}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: idx * 0.02 }}
                className="px-5 py-2.5 bg-[#2A1B4A] text-gray-300 text-sm font-bold rounded-full border border-[#3B2563] hover:text-white hover:border-[#8651C9] transition-colors cursor-default"
              >
                {domain}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Technologies & Tools */}
        <div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4">
            {technologies.map((tech, idx) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: idx * 0.02 }}
                  className="bg-[#2A1B4A] border border-[#3B2563] rounded-2xl p-6 flex flex-col items-center justify-center gap-4 hover:bg-[#34225A] hover:border-[#8651C9] transition-all group"
                >
                  <Icon className="w-10 h-10 text-gray-500 group-hover:text-white transition-colors" />
                  <span className="text-xs font-bold text-gray-500 group-hover:text-gray-300 text-center uppercase tracking-wider">
                    {tech.name}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
