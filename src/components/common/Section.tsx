import React from 'react';
import { motion } from 'motion/react';

interface SectionProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  background?: 'white' | 'gray';
  className?: string;
}

export function Section({ 
  title, 
  subtitle, 
  children, 
  background = 'white',
  className = ''
}: SectionProps) {
  const sectionBg = background === 'gray' ? 'bg-gray-50' : 'bg-white';
  
  return (
    <section className={`py-20 ${sectionBg} ${className}`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-energy-blue">
              {title}
            </h2>
          </motion.div>
          {subtitle && (
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {subtitle}
            </motion.p>
          )}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}