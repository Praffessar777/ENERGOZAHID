import React from 'react';
import { motion } from 'motion/react';

export function EnergyBackground() {
  return (
    <div className="absolute inset-0">
      {/* Energy Flow Lines */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-0.5 w-32 opacity-30"
          style={{ 
            backgroundColor: 'var(--energy-yellow)',
            top: `${20 + i * 15}%`,
            left: '-8rem'
          }}
          animate={{
            x: ['0vw', '100vw'],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 4,
            delay: i * 0.5,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
      ))}
      
      {/* Pulse Points */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`pulse-${i}`}
          className="absolute w-2 h-2 rounded-full opacity-40"
          style={{ 
            backgroundColor: 'var(--energy-yellow)',
            top: `${30 + i * 20}%`,
            right: `${10 + i * 15}%`
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{
            duration: 2,
            delay: i * 0.3,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      ))}
    </div>
  );
}