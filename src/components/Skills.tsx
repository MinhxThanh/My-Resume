import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SKILLS } from '../utils/constants';

type SkillCategory = 'all' | 'frontend' | 'backend' | 'ai' | 'tools';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('all');

  const categories = [
    { id: 'all' as SkillCategory, label: 'All Skills' },
    { id: 'frontend' as SkillCategory, label: 'Frontend' },
    { id: 'backend' as SkillCategory, label: 'Backend' },
    { id: 'ai' as SkillCategory, label: 'AI/ML' },
    { id: 'tools' as SkillCategory, label: 'Tools' },
  ];

  const filteredSkills = activeCategory === 'all' 
    ? SKILLS 
    : SKILLS.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20 bg-neutral-950 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-accent to-secondary rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-gradient-to-tr from-secondary to-accent rounded-full blur-2xl"></div>
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
            Skills & <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">Expertise</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-secondary mx-auto mb-8 rounded-full"></div>
          <p className="font-inter text-lg text-neutral-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 border ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-accent to-secondary text-black shadow-lg shadow-accent/20 border-transparent'
                  : 'bg-neutral-900 border-neutral-700 text-neutral-300 hover:bg-neutral-800 hover:border-accent/30 hover:text-accent'
              }`}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-neutral-900 border border-neutral-800 p-6 rounded-xl hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 hover:border-accent/30 backdrop-blur-sm group"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-poppins font-semibold text-lg text-white group-hover:text-accent transition-colors duration-300">
                  {skill.name}
                </h3>
                <span className="text-accent font-bold text-sm bg-accent/10 px-2 py-1 rounded-full border border-accent/20">
                  {skill.level}%
                </span>
              </div>
              
              <div className="relative">
                <div className="w-full bg-neutral-700 rounded-full h-3 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1.5, delay: index * 0.1 + 0.5 }}
                    className="bg-gradient-to-r from-accent to-secondary h-3 rounded-full relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 animate-pulse"></div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
        >
          <div className="text-center bg-neutral-900 border border-neutral-800 p-6 rounded-xl hover:border-accent/30 transition-all duration-300">
            <div className="font-poppins font-bold text-3xl bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent mb-2">20+</div>
            <div className="font-inter text-neutral-400">Technologies</div>
          </div>
          <div className="text-center bg-neutral-900 border border-neutral-800 p-6 rounded-xl hover:border-secondary/30 transition-all duration-300">
            <div className="font-poppins font-bold text-3xl bg-gradient-to-r from-secondary to-accent bg-clip-text text-white/80 mb-2">3+</div>
            <div className="font-inter text-neutral-400">Years Experience</div>
          </div>
          <div className="text-center bg-neutral-900 border border-neutral-800 p-6 rounded-xl hover:border-accent/30 transition-all duration-300">
            <div className="font-poppins font-bold text-3xl bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent mb-2">160k+</div>
            <div className="font-inter text-neutral-400">Community Members</div>
          </div>
          <div className="text-center bg-neutral-900 border border-neutral-800 p-6 rounded-xl hover:border-secondary/30 transition-all duration-300">
            <div className="font-poppins font-bold text-3xl bg-gradient-to-r from-secondary to-accent bg-clip-text text-white/80 mb-2">10k+</div>
            <div className="font-inter text-neutral-400">Monthly Visitors</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;