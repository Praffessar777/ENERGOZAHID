import React from 'react';
import { motion } from 'motion/react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  children?: React.ReactNode;
}

export function HeroSection({ title, subtitle, children }: HeroSectionProps) {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {title}
          </h1>
          <p className="text-xl md:text-2xl opacity-90">
            {subtitle}
          </p>
          {children}
        </motion.div>
      </div>
    </section>
  );
}