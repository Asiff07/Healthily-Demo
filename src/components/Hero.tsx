import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-sky-800 to-indigo-800">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KPGcgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIwLjAzIj4KPGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPgo8L2c+CjwvZz4KPC9zdmc+')] opacity-30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Affordable Multi-Vital Tracking for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">
              Remote Patient Care
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Revolutionary wearable technology that monitors vital signs continuously, 
            making healthcare accessible and affordable for everyone.
          </p>
          
          <motion.button
            onClick={() => scrollToSection('prototype')}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-semibold rounded-full shadow-lg hover:from-sky-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            See Prototype
            <ChevronDown className="ml-2 h-5 w-5" />
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-white/60"
        >
          <span className="text-sm mb-2">Scroll to explore</span>
          <ChevronDown className="h-6 w-6" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;