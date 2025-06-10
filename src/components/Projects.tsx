import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { PROJECTS } from '../utils/constants';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [filter, setFilter] = useState<'all' | 'featured'>('all');

  const filteredProjects = filter === 'all' ? PROJECTS : PROJECTS.filter(p => p.featured);

  return (
    <section id="projects" className="py-20 bg-black relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(20)].map((_, i) => (
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
            Featured <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-secondary mx-auto mb-8 rounded-full"></div>
          <p className="font-inter text-lg text-neutral-400 max-w-2xl mx-auto">
            A showcase of my recent work and innovative solutions
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center gap-4 mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setFilter('all')}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 border ${
              filter === 'all'
                ? 'bg-gradient-to-r from-accent to-secondary text-black shadow-lg shadow-accent/20 border-transparent'
                : 'bg-neutral-950 border-neutral-700 text-neutral-300 hover:bg-neutral-800 hover:border-accent/30 hover:text-accent'
            }`}
          >
            All Projects
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setFilter('featured')}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 border ${
              filter === 'featured'
                ? 'bg-gradient-to-r from-accent to-secondary text-black shadow-lg shadow-accent/20 border-transparent'
                : 'bg-neutral-950 border-neutral-700 text-neutral-300 hover:bg-neutral-800 hover:border-accent/30 hover:text-accent'
            }`}
          >
            Featured Only
          </motion.button>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group bg-neutral-950 border border-neutral-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 hover:border-accent/30 backdrop-blur-sm"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-4">
                    {project.liveUrl && (
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-gradient-to-r from-accent/90 to-secondary/90 rounded-full text-black hover:from-accent hover:to-secondary transition-all duration-300 shadow-lg"
                      >
                        <ExternalLink size={20} />
                      </motion.a>
                    )}
                    {project.githubUrl && (
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/90 rounded-full text-black hover:bg-white transition-colors shadow-lg"
                      >
                        <Github size={20} />
                      </motion.a>
                    )}
                  </div>
                </div>
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-accent to-secondary px-3 py-1 rounded-full text-black text-sm font-semibold shadow-lg">
                    Featured
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-8">
                <h3 className="font-poppins font-bold text-xl text-white mb-3 group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="font-inter text-neutral-400 mb-6 leading-relaxed group-hover:text-neutral-300 transition-colors duration-300">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gradient-to-r from-accent/10 to-secondary/10 border border-accent/20 text-accent rounded-full text-sm font-medium hover:from-accent/20 hover:to-secondary/20 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  {project.liveUrl && (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gradient-to-r from-accent to-secondary hover:from-secondary hover:to-accent text-black font-semibold px-4 py-2 rounded-lg transition-all duration-300 shadow-lg hover:shadow-accent/20"
                    >
                      <Eye size={16} />
                      Live Demo
                    </motion.a>
                  )}
                  {project.githubUrl && (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 border-2 border-accent text-accent hover:bg-accent hover:text-black font-semibold px-4 py-2 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-accent/20"
                    >
                      <Github size={16} />
                      Code
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;