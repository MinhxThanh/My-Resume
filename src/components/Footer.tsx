import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail, ArrowUp, ExternalLink, Facebook } from 'lucide-react';
import { SOCIAL_LINKS } from '../utils/constants';

const Footer: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isScrolled) {
    return null;
  }

  return (
    <footer className="bg-black text-white py-12 relative border-t border-neutral-800 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-accent/10 via-transparent to-secondary/10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <div className="font-poppins font-bold text-2xl mb-4">
              MT<span className="text-accent">.</span>
            </div>
            <p className="font-inter text-neutral-400 leading-relaxed">
              Building innovative AI-integrated solutions with passion and precision.
              Let's create something amazing together.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center"
          >
            <h3 className="font-poppins font-semibold text-lg mb-4 text-accent">Quick Links</h3>
            <div className="space-y-2 flex flex-col items-center">
              {['About', 'Experience', 'Skills', 'Projects', 'Contact'].map((link) => (
                <motion.button
                  key={link}
                  whileHover={{ x: 5 }}
                  onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                  className="block font-inter text-neutral-400 hover:text-accent transition-colors cursor-pointer"
                >
                  {link}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center md:text-right"
          >
            <h3 className="font-poppins font-semibold text-lg mb-4 text-secondary">Get In Touch</h3>
            <div className="space-y-2">
              <a
                href={`mailto:${SOCIAL_LINKS.email}`}
                className="block font-inter text-neutral-400 hover:text-accent transition-colors"
              >
                {SOCIAL_LINKS.email}
              </a>
              <a
                href={`tel:${SOCIAL_LINKS.phone}`}
                className="block font-inter text-neutral-400 hover:text-accent transition-colors"
              >
                {SOCIAL_LINKS.phone}
              </a>
              <p className="font-inter text-neutral-400">
                Ho Chi Minh City, Vietnam
              </p>
            </div>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center space-x-6 mb-8"
        >
          <motion.a
            whileHover={{ scale: 1.2, y: -2 }}
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-neutral-900 border border-neutral-800 rounded-full hover:bg-accent hover:text-black hover:border-accent transition-all duration-300 shadow-lg hover:shadow-accent/20"
          >
            <Github size={20} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2, y: -2 }}
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-neutral-900 border border-neutral-800 rounded-full hover:bg-secondary hover:text-black hover:border-secondary transition-all duration-300 shadow-lg hover:shadow-secondary/20"
          >
            <Linkedin size={20} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2, y: -2 }}
            href={SOCIAL_LINKS.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-neutral-900 border border-neutral-800 rounded-full hover:bg-blue-500 hover:text-black hover:border-blue-500 transition-all duration-300 shadow-lg hover:shadow-blue-500/20"
          >
            <Facebook size={20} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2, y: -2 }}
            href={`mailto:${SOCIAL_LINKS.email}`}
            className="p-3 bg-neutral-900 border border-neutral-800 rounded-full hover:bg-accent hover:text-black hover:border-accent transition-all duration-300 shadow-lg hover:shadow-accent/20"
          >
            <Mail size={20} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2, y: -2 }}
            href={SOCIAL_LINKS.website}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-neutral-900 border border-neutral-800 rounded-full hover:bg-secondary hover:text-black hover:border-secondary transition-all duration-300 shadow-lg hover:shadow-secondary/20"
          >
            <ExternalLink size={20} />
          </motion.a>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center pt-8 border-t border-neutral-800"
        >
          <p className="font-inter text-neutral-400 flex items-center justify-center gap-2">
            © 2024 Lê Minh Thành. Made with
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            and lots of coffee ☕
          </p>
        </motion.div>

        {/* Scroll to Top Button */}
        {
          isScrolled && (
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-accent to-secondary hover:from-secondary hover:to-accent text-black rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40"
            >
              <ArrowUp size={20} />
            </motion.button>
          )
        }

      </div>
    </footer>
  );
};

export default Footer;