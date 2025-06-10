import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, Github, Linkedin, Mail, ExternalLink, Facebook } from 'lucide-react';
import { SOCIAL_LINKS } from '../utils/constants';
import { AnimatedText } from './ui/animated-underline-text-one';
import AnimatedShaderBackground from './ui/animated-shader-background';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = () => {
    // In a real implementation, this would trigger a PDF download
    window.open('/resume-le-minh-thanh.pdf', '_blank');
  };

  return (
    <section id="home" className="min-h-screen mt-5 flex items-center justify-center relative overflow-hidden">
      {/* Animated Shader Background */}
      <AnimatedShaderBackground />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-r from-accent via-secondary to-accent p-1 animate-glow">
                <img
                  src="https://scontent-itm1-1.xx.fbcdn.net/v/t39.30808-1/476236527_2080991302361970_842907912591835949_n.jpg?stp=c130.0.1666.1667a_dst-jpg_s480x480_tt6&_nc_cat=111&ccb=1-7&_nc_sid=1d2534&_nc_ohc=WYKjE2KQ99MQ7kNvwG_X6aj&_nc_oc=AdnMjlfGyfZ0zOeFWxvzu_bxNIi9M2pDpTv8RgWznwrfz19FVg7AiFD96G3SImmN1vU&_nc_zt=24&_nc_ht=scontent-itm1-1.xx&_nc_gid=VKF7yfMy-VCSXca7Vrbc4g&oh=00_AfP9z0AvUGiWOphWt-lQ_42gba3N3S6PdC2OqEgraREKTQ&oe=684C8FAE"
                  alt="Minh Thành"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent/20 to-secondary/20 animate-pulse"></div>
            </div>
          </motion.div>

          {/* Animated Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mb-24 sm:mb-16 md:mb-8 lg:mb-4"
          >
            <AnimatedText 
              text="Minh Thành"
              textClassName="font-poppins font-bold text-4xl md:text-6xl lg:text-7xl text-white bg-gradient-to-r from-white via-neutral-200 to-white bg-clip-text text-transparent"
              underlineClassName="text-accent"
              underlinePath="M 0,10 Q 100,0 200,10 Q 300,20 400,10"
              underlineHoverPath="M 0,10 Q 100,25 200,10 Q 300,0 400,10"
              underlineDuration={2}
            />
          </motion.div>
            
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="font-inter text-xl md:text-2xl text-neutral-300 mb-6"
          >
            <span className="text-accent font-semibold">Full Stack Developer</span>
            <span className="mx-3 text-neutral-600">|</span>
            <span className="text-secondary font-semibold">AI Specialist</span>
            <span className="mx-3 text-neutral-600">|</span>
            <span className="text-accent font-semibold">Community Leader</span>
          </motion.div>

          {/* Location */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="font-inter text-lg text-neutral-400"
          >
            Ho Chi Minh City, Vietnam – Available for Remote Work
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="font-inter text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed"
          >
            Full Stack Developer and AI Specialist with over 3 years of experience building scalable 
            web applications and AI-driven solutions. Skilled in optimizing performance, enhancing UX, 
            and deploying LLM-driven applications on cloud platforms.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={downloadResume}
              className="group flex items-center gap-3 bg-gradient-to-r from-accent to-secondary hover:from-secondary hover:to-accent text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-accent/20 hover:shadow-2xl"
            >
              <Download size={20} />
              Download Resume
              <motion.div
                className="w-0 group-hover:w-2 h-0.5 bg-black transition-all duration-300"
              />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToAbout}
              className="flex items-center gap-3 border-2 border-accent text-accent hover:bg-accent hover:text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-accent/20"
            >
              Learn More
              <ChevronDown size={20} />
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="flex justify-center space-x-6"
          >
            <motion.a
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-neutral-900/50 border border-neutral-800/50 rounded-full shadow-lg hover:shadow-xl text-neutral-300 hover:text-accent hover:border-accent/50 transition-all duration-300 backdrop-blur-sm"
            >
              <Github size={24} />
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-neutral-900/50 border border-neutral-800/50 rounded-full shadow-lg hover:shadow-xl text-neutral-300 hover:text-secondary hover:border-secondary/50 transition-all duration-300 backdrop-blur-sm"
            >
              <Linkedin size={24} />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
              href={SOCIAL_LINKS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-neutral-900/50 border border-neutral-800/50 rounded-full shadow-lg hover:shadow-xl text-neutral-300 hover:text-blue-500 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm"
            >
              <Facebook size={24} />
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
              href={`mailto:${SOCIAL_LINKS.email}`}
              className="p-3 bg-neutral-900/50 border border-neutral-800/50 rounded-full shadow-lg hover:shadow-xl text-neutral-300 hover:text-accent hover:border-accent/50 transition-all duration-300 backdrop-blur-sm"
            >
              <Mail size={24} />
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
              href={SOCIAL_LINKS.website}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-neutral-900/50 border border-neutral-800/50 rounded-full shadow-lg hover:shadow-xl text-neutral-300 hover:text-secondary hover:border-secondary/50 transition-all duration-300 backdrop-blur-sm"
            >
              <ExternalLink size={24} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;