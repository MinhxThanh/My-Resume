import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Calendar } from 'lucide-react';
import { EXPERIENCES } from '../utils/constants';

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="py-20 bg-black relative overflow-hidden">
      {/* Background Grid Pattern */}
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
            Work <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-secondary mx-auto mb-8 rounded-full"></div>
          <p className="font-inter text-lg text-neutral-400 max-w-2xl mx-auto">
            My professional journey building innovative solutions and leading development teams
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-accent via-secondary to-accent rounded-full opacity-30"></div>

          {EXPERIENCES.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-accent to-secondary rounded-full border-4 border-black z-10 shadow-lg shadow-accent/20"></div>

              {/* Content Card */}
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className={`bg-neutral-950 border border-neutral-800 rounded-xl shadow-lg hover:shadow-xl hover:shadow-accent/10 transition-all duration-300 p-8 ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                } md:w-5/12 hover:border-accent/30 backdrop-blur-sm`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                  <h3 className="font-poppins font-bold text-xl text-white">
                    {experience.position}
                  </h3>
                  <div className="flex items-center gap-2 text-accent font-semibold text-sm mt-2 sm:mt-0 bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
                    <Calendar size={16} />
                    {experience.duration}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-neutral-200 mb-2">
                  <span className="font-semibold text-secondary">{experience.company}</span>
                </div>

                <div className="flex items-center gap-2 text-neutral-500 mb-6">
                  <MapPin size={16} />
                  {experience.location}
                </div>

                <ul className="space-y-3 mb-6">
                  {experience.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-neutral-300">
                      <div className="w-2 h-2 bg-gradient-to-r from-accent to-secondary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="font-inter leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gradient-to-r from-accent/10 to-secondary/10 border border-accent/20 text-accent rounded-full text-sm font-medium hover:from-accent/20 hover:to-secondary/20 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;