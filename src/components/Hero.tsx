import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      
      <div className="container mx-auto px-6 lg:px-24 max-w-7xl relative z-10 flex items-center h-full">
        
        {/* Massive Text Overlapping */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute z-30 left-6 lg:left-24 top-32 md:top-1/2 md:-translate-y-1/2 pointer-events-none"
        >
          <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[8rem] font-black tracking-tight text-[#8651C9] leading-[1]">
            Yakash
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-[5rem] font-bold tracking-tight text-[#8651C9] leading-[1.1] mt-2 md:mt-4">
            AI Engineer &<br />
            Data Scientist
          </h2>
        </motion.div>

        {/* Right Side Image Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="ml-auto relative w-full md:w-[65%] lg:w-[50%] h-[65vh] md:h-[80vh] z-20 mt-40 sm:mt-32 md:mt-0 self-end md:self-auto"
        >
          <motion.div
            animate={{ y: [-15, 15, -15] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-full relative grayscale transition-all duration-700 hover:grayscale-0"
          >
            {/* User Profile Image */}
            <img 
              src="./Profile_nobg.png" 
              alt="Yakash Profile"
              className="w-full h-full object-contain object-bottom drop-shadow-[0_0_40px_rgba(134,81,201,0.15)]"
            />
            
            {/* Giant "00" overlay inside the container */}
            <div className="absolute bottom-10 right-4 md:right-8 z-30 pointer-events-none">
              <span className="text-[8rem] md:text-[12rem] font-black italic text-[#8651C9] opacity-80 leading-none tracking-tighter drop-shadow-2xl">
                00
              </span>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
