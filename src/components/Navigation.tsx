import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAVIGATION_ITEMS } from '../utils/constants';
import { useScrollSpy } from '../hooks/useScrollSpy';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useScrollSpy(NAVIGATION_ITEMS.map(item => item.id), 100);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  if (!isScrolled) {
    return null;
  }

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md shadow-lg border-b border-neutral-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center py-4 relative">
          {/* Mobile Avatar - Only visible on mobile */}
          <div className="md:hidden absolute left-0 flex items-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <div className="w-5 h-5 rounded-full bg-gradient-to-r from-accent via-secondary to-accent p-0.5">
                <img
                  src="https://scontent-itm1-1.xx.fbcdn.net/v/t39.30808-1/476236527_2080991302361970_842907912591835949_n.jpg?stp=c130.0.1666.1667a_dst-jpg_s480x480_tt6&_nc_cat=111&ccb=1-7&_nc_sid=1d2534&_nc_ohc=WYKjE2KQ99MQ7kNvwG_X6aj&_nc_oc=AdnMjlfGyfZ0zOeFWxvzu_bxNIi9M2pDpTv8RgWznwrfz19FVg7AiFD96G3SImmN1vU&_nc_zt=24&_nc_ht=scontent-itm1-1.xx&_nc_gid=VKF7yfMy-VCSXca7Vrbc4g&oh=00_AfP9z0AvUGiWOphWt-lQ_42gba3N3S6PdC2OqEgraREKTQ&oe=684C8FAE"
                  alt="MT"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </motion.div>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center space-x-8">
            {NAVIGATION_ITEMS.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ y: -2 }}
                onClick={() => scrollToSection(item.id)}
                className={`font-inter font-medium transition-colors duration-200 relative ${
                  activeSection === item.id
                    ? 'text-accent'
                    : 'text-neutral-300 hover:text-accent'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-accent to-secondary rounded-full"
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button - Positioned absolute right */}
          <div className="md:hidden absolute right-0">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-neutral-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-md border-t border-neutral-800"
          >
            <div className="px-4 py-4 space-y-4 text-center">
              {NAVIGATION_ITEMS.map((item) => (
                <motion.button
                  key={item.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-center font-inter font-medium py-3 px-4 rounded-lg transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-accent bg-accent/10 border border-accent/20'
                      : 'text-neutral-300 hover:text-accent hover:bg-accent/5'
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;