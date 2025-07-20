import React from 'react';
import { motion } from 'framer-motion';
import Loader from './ui/loading';

const LoadingScreen: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 bg-black flex items-center justify-center z-50 overflow-hidden"
    >
      {/* Background Animation */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-accent/20 to-secondary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            opacity: [0.3, 0.1, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-l from-secondary/20 to-accent/20 rounded-full blur-2xl"
        />
      </div>

      <div className="text-center relative z-10">
        <div className="flex justify-center mb-8">
          <Loader />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="font-poppins font-bold text-2xl text-white mb-2"
        >
          MT<span className="text-accent">.</span>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="font-inter text-neutral-400"
        >
          Loading Experience...
        </motion.p>

        {/* Loading Progress Bar */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, delay: 0.5 }}
          className="w-48 h-1 bg-gradient-to-r from-accent to-secondary rounded-full mx-auto mt-6"
        />
      </div>
    </motion.div>
  );
};

export default LoadingScreen;