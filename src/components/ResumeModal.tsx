import { motion } from 'framer-motion';
import { X, Download, ExternalLink, FileText } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12">
      {/* Backdrop */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-[#0a0614]/80 backdrop-blur-sm"
      />

      {/* Modal Container */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-7xl h-[90vh] bg-[#140D26] border border-[#3B2563] rounded-3xl overflow-hidden flex flex-col lg:flex-row shadow-2xl"
      >
        {/* Close Button - Mobile Only (Top Right) */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-50 lg:hidden p-2 bg-[#2A1B4A] rounded-full text-gray-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Pane - Info */}
        <div className="w-full lg:w-[400px] xl:w-[450px] shrink-0 p-8 md:p-10 flex flex-col h-auto lg:h-full overflow-y-auto custom-scrollbar border-b lg:border-b-0 lg:border-r border-[#3B2563] bg-[#190F2E]">
          
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tight mb-6">
            Resume of <br/>
            <span className="text-[#8651C9]">Yakash</span>
          </h2>

          <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8">
            AI Engineer & Data Scientist focused on building intelligent systems, scalable machine learning models, and advanced RAG applications with clean backend architectures.
          </p>

          {/* Info Grid */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-[#2A1B4A] border border-[#3B2563] rounded-2xl p-5">
              <span className="block text-xs text-gray-500 mb-1">Role</span>
              <span className="text-sm font-bold text-gray-300">AI Engineer</span>
            </div>
            <div className="bg-[#2A1B4A] border border-[#3B2563] rounded-2xl p-5">
              <span className="block text-xs text-gray-500 mb-1">Location</span>
              <span className="text-sm font-bold text-gray-300">Chennai, India</span>
            </div>
            <div className="bg-[#2A1B4A] border border-[#3B2563] rounded-2xl p-5">
              <span className="block text-xs text-gray-500 mb-1">Stack</span>
              <span className="text-sm font-bold text-gray-300">Python • ML • GenAI</span>
            </div>
            <div className="bg-[#2A1B4A] border border-[#3B2563] rounded-2xl p-5">
              <span className="block text-xs text-gray-500 mb-1">Availability</span>
              <span className="text-sm font-bold text-gray-300">Full-time</span>
            </div>
          </div>

          {/* Download Box */}
          <div className="mt-auto">
            <div className="bg-[#2A1B4A] border border-[#3B2563] rounded-2xl p-5 mb-4">
              <div className="flex items-center gap-4 mb-2">
                <FileText className="w-6 h-6 text-[#8651C9]" />
                <span className="font-bold text-white">Yakash Resume</span>
              </div>
              <p className="text-xs text-gray-500 ml-10">Yakash_resume.pdf • Updated Recently</p>
            </div>

            <div className="flex gap-4">
              <a 
                href="/Yakash_resume.pdf" 
                download
                className="flex-1 bg-gradient-to-r from-[#8651C9] to-[#b078f7] text-white font-bold py-4 px-6 rounded-xl text-center hover:opacity-90 transition-opacity flex items-center justify-center gap-2 text-sm"
              >
                <Download className="w-4 h-4" /> Download Resume
              </a>
              <a 
                href="/Yakash_resume.pdf" 
                target="_blank"
                rel="noreferrer"
                className="flex-1 bg-transparent border border-[#3B2563] text-white font-bold py-4 px-6 rounded-xl text-center hover:bg-[#2A1B4A] transition-colors flex items-center justify-center gap-2 text-sm"
              >
                <ExternalLink className="w-4 h-4" /> Open File
              </a>
            </div>
          </div>

        </div>

        {/* Right Pane - PDF Viewer */}
        <div className="flex-1 bg-[#0a0614] p-4 sm:p-6 lg:p-8 flex flex-col h-[60vh] lg:h-full relative">
          
          {/* Close Button - Desktop (Top Right) */}
          <button 
            onClick={onClose}
            className="absolute top-6 right-8 z-50 hidden lg:flex items-center gap-2 text-gray-500 hover:text-white transition-colors"
          >
            <span className="text-sm font-bold uppercase tracking-widest">Close</span>
            <X className="w-6 h-6" />
          </button>

          {/* macOS Window Frame */}
          <div className="w-full h-full bg-white rounded-xl overflow-hidden flex flex-col shadow-2xl relative">
            
            {/* macOS Titlebar */}
            <div className="h-10 bg-[#f4f5f5] border-b border-gray-200 flex items-center px-4 shrink-0 relative">
              <div className="flex gap-2 z-10">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none text-xs font-semibold text-gray-500">
                Resume Preview
              </div>
            </div>

            {/* Iframe Viewer */}
            <div className="flex-1 bg-gray-100 relative">
              <iframe 
                src="/Yakash_resume.pdf#toolbar=0" 
                className="absolute inset-0 w-full h-full border-0"
                title="Yakash Resume"
              />
            </div>

          </div>
        </div>

      </motion.div>
    </div>
  );
}
