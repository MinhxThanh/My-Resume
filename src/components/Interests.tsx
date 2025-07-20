import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, Cpu, BookOpen, Music } from 'lucide-react';
import { INTERESTS } from '../utils/constants';

const Interests: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const getIcon = (interest: string) => {
    if (interest.includes('AI') || interest.includes('LLM')) return Cpu;
    if (interest.includes('software') || interest.includes('architecture')) return BookOpen;
    if (interest.includes('music')) return Music;
    return Heart;
  };

  return (
    <section id="interests" className="py-20 bg-black relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-accent rounded-full animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-poppins font-bold text-4xl md:text-5xl text-white mb-6">
            Interests & <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">Hobbies</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-secondary mx-auto mb-8 rounded-full"></div>
          <p className="font-inter text-lg text-neutral-400 max-w-2xl mx-auto">
            What drives my passion for technology and creativity
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {INTERESTS.map((interest, index) => {
            const IconComponent = getIcon(interest);
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group bg-neutral-900 border border-neutral-800 p-6 rounded-xl hover:shadow-xl hover:shadow-accent/10 transition-all duration-300 hover:border-accent/30 backdrop-blur-sm"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-accent/20 to-secondary/20 rounded-lg group-hover:from-accent/30 group-hover:to-secondary/30 transition-all duration-300">
                      <IconComponent className="w-6 h-6 text-accent group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <p className="font-inter text-neutral-200 leading-relaxed group-hover:text-white transition-colors duration-300">
                      {interest}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Interests; 