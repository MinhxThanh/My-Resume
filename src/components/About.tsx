import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Brain, Rocket, Users } from 'lucide-react';
import { SUMMARY } from '../utils/constants';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const highlights = [
    {
      icon: Code,
      title: 'Full Stack Expertise',
      description: 'Proficient in React, Angular, Next.js, Node.js, Spring Boot, and modern web technologies'
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Experience with ChatGPT, Claude, Stable Diffusion, and various AI tools for practical applications'
    },
    {
      icon: Rocket,
      title: 'Performance Optimization',
      description: 'Reduced load times by 30% and improved UX scores by 15% through strategic enhancements'
    },
    {
      icon: Users,
      title: 'Community Leadership',
      description: 'Co-founded and manage AI community of 200,000+ members, leading educational initiatives'
    }
  ];

  return (
    <section id="about" className="py-20 bg-neutral-950 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border border-accent rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-secondary rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-accent/50 rounded-full"></div>
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
            About <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-secondary mx-auto mb-8 rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="prose prose-lg max-w-none">
              <p className="font-inter text-lg text-neutral-200 leading-relaxed">
                {SUMMARY}
              </p>
              
              <p className="font-inter text-lg text-neutral-200 leading-relaxed">
                My journey spans from building scalable web applications to leading one of Vietnam's largest AI communities. 
                I've successfully grown w404.net from 5,000 to <span className="text-accent font-semibold">15,000+ monthly visitors</span> 
                while co-founding the "Nghiện AI" community that now serves over 
                <span className="text-secondary font-semibold"> 200,000 members</span>.
              </p>
              
              <p className="font-inter text-lg text-neutral-200 leading-relaxed">
                Currently, I focus on developing AI-driven applications, consulting on AI adoption, and sharing knowledge 
                through workshops and community events. My expertise includes LLM integration, performance optimization, 
                and full-stack development with modern frameworks.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="bg-gradient-to-r from-accent/20 to-secondary/20 border border-accent/30 text-white px-4 py-2 rounded-full font-semibold backdrop-blur-sm">
                3+ Years Experience
              </div>
              <div className="bg-gradient-to-r from-secondary/20 to-accent/20 border border-secondary/30 text-white px-4 py-2 rounded-full font-semibold backdrop-blur-sm">
                200k+ Community Members
              </div>
              <div className="bg-gradient-to-r from-accent/20 to-secondary/20 border border-accent/30 text-white px-4 py-2 rounded-full font-semibold backdrop-blur-sm">
                15k+ Monthly Visitors
              </div>
            </div>
          </motion.div>

          {/* Right Column - Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group bg-neutral-900 border border-neutral-800 p-6 rounded-xl hover:shadow-xl hover:shadow-accent/10 transition-all duration-300 hover:border-accent/30 backdrop-blur-sm"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-accent/20 to-secondary/20 rounded-lg mb-4 group-hover:from-accent/30 group-hover:to-secondary/30 transition-all duration-300">
                  <highlight.icon className="w-6 h-6 text-accent group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-poppins font-semibold text-lg text-white mb-2 group-hover:text-accent transition-colors duration-300">
                  {highlight.title}
                </h3>
                <p className="font-inter text-neutral-400 text-sm leading-relaxed group-hover:text-neutral-300 transition-colors duration-300">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;