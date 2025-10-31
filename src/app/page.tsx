"use client"

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "./components/footer/page";
import Header from "./components/header/page";
import Home from "./home/page";
import Loader from "./components/loader/page";

export default function Main() {
  const [isLoading, setIsLoading] = useState(true);
  const [componentsLoaded, setComponentsLoaded] = useState({
    header: false,
    home: false,
    footer: false,
  });

  // Simulate component loading and minimum loading time
  useEffect(() => {
    const minLoadTime = 2000; // Minimum 2 seconds loading
    const startTime = Date.now();

    // Simulate component loading
    const loadComponents = async () => {
      // Simulate header loading
      await new Promise(resolve => setTimeout(resolve, 300));
      setComponentsLoaded(prev => ({ ...prev, header: true }));

      // Simulate home loading
      await new Promise(resolve => setTimeout(resolve, 500));
      setComponentsLoaded(prev => ({ ...prev, home: true }));

      // Simulate footer loading
      await new Promise(resolve => setTimeout(resolve, 200));
      setComponentsLoaded(prev => ({ ...prev, footer: true }));
    };

    const finishLoading = () => {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, minLoadTime - elapsedTime);
      
      setTimeout(() => {
        setIsLoading(false);
      }, remainingTime);
    };

    loadComponents().then(() => {
      // Check if all components are loaded
      const allLoaded = Object.values(componentsLoaded).every(loaded => loaded);
      if (allLoaded) {
        finishLoading();
      }
    });
  }, []);

  // Check when all components are loaded
  useEffect(() => {
    const allLoaded = Object.values(componentsLoaded).every(loaded => loaded);
    if (allLoaded && isLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 500); // Small delay to ensure smooth transition
      
      return () => clearTimeout(timer);
    }
  }, [componentsLoaded, isLoading]);

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ 
              opacity: 0,
              scale: 0.95,
              transition: { 
                duration: 0.5,
                ease: "easeInOut"
              }
            }}
            className="fixed inset-0 z-50 bg-white"
          >
            <Loader />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ 
              opacity: 0,
              y: 20,
            }}
            animate={{ 
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              ease: "easeOut"
            }}
          >
            <Header />
            <Home />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
