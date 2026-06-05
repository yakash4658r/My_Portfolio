import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="w-full min-h-screen bg-[#190F2E] text-white font-sans selection:bg-[#8651C9] selection:text-white">
      <Navbar />
      <main className="pb-24 space-y-32">
        <Hero />
        <About onOpenResume={() => setIsResumeOpen(true)} />
        <Projects />
        <Skills />
        <Experience />
      </main>
      <Footer />
      
      <ResumeModal 
        isOpen={isResumeOpen} 
        onClose={() => setIsResumeOpen(false)} 
      />
    </div>
  );
}

export default App;
