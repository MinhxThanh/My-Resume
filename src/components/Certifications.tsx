import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Calendar, Building } from 'lucide-react';
import { CERTIFICATIONS } from '../utils/constants';

const Certifications: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="certifications" className="py-20 bg-black relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="h-full w-full" 
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 217, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 217, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
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
            <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-secondary mx-auto mb-8 rounded-full"></div>
          <p className="font-inter text-lg text-neutral-400 max-w-2xl mx-auto">
            Professional certifications that validate my expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {CERTIFICATIONS.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group bg-neutral-900 border border-neutral-800 p-8 rounded-xl hover:shadow-xl hover:shadow-accent/10 transition-all duration-300 hover:border-accent/30 backdrop-blur-sm"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-accent/20 to-secondary/20 rounded-lg group-hover:from-accent/30 group-hover:to-secondary/30 transition-all duration-300">
                    <Award className="w-8 h-8 text-accent group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="font-poppins font-semibold text-xl text-white mb-3 group-hover:text-accent transition-colors duration-300">
                    {cert.name}
                  </h3>
                  
                  <div className="space-y-2">
                    <div className="flex items-center text-neutral-400 group-hover:text-neutral-300 transition-colors duration-300">
                      <Building className="w-4 h-4 mr-2 text-secondary" />
                      <span className="font-inter text-sm">{cert.issuer}</span>
                    </div>
                    
                    <div className="flex items-center text-neutral-400 group-hover:text-neutral-300 transition-colors duration-300">
                      <Calendar className="w-4 h-4 mr-2 text-secondary" />
                      <span className="font-inter text-sm">{cert.year}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications; 