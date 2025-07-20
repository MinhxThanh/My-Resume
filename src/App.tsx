import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Languages from './components/Languages';
import Interests from './components/Interests';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import { useScrollPerformance } from './hooks/useScrollPerformance';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  
  // Apply scroll performance optimizations
  // useScrollPerformance({
  //   reducedMotion: false,
  //   targetFPS: 60
  // });

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="font-inter">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" />
        ) : (
          <div key="main" className="gpu-accelerated">
            <Navigation />
            <main>
              <Hero />
              <About />
              <Experience />
              <Skills />
              <Projects />
              <Certifications />
              <Languages />
              <Interests />
              <Contact />
            </main>
            <Footer />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;