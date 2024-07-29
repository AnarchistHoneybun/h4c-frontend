import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BlurInTitle } from "@/components/BlurInTitle";

const companies = ['Google', 'Amazon', 'Microsoft'];

export default function HeroText() {
  const [currentCompany, setCurrentCompany] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCompany((prev) => (prev + 1) % companies.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-left">
      <BlurInTitle />
      <div className="h-20 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentCompany}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold italic text-foreground"
          >
            {companies[currentCompany]}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}