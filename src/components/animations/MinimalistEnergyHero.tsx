import React from 'react';
import { motion } from 'motion/react';

export function MinimalistEnergyHero() {
  return (
    <div 
      className="absolute inset-0 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #264A96 0%, #1a3570 100%)' }}
    >
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full">
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <motion.path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="rgba(249, 198, 66, 0.5)"
                strokeWidth="0.5"
                animate={{
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Large Concentric Circles - Right Side */}
      <motion.div
        className="absolute -right-32 top-1/4"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.05, 1],
        }}
        transition={{
          rotate: {
            duration: 40,
            repeat: Infinity,
            ease: 'linear',
          },
          scale: {
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }
        }}
      >
        <svg width="600" height="600" viewBox="0 0 600 600">
          {/* Solid circles with pulsing animation */}
          <motion.circle 
            cx="300" 
            cy="300" 
            r="250" 
            fill="none"
            stroke="rgba(249, 198, 66, 0.15)"
            strokeWidth="2"
            animate={{
              r: [250, 255, 250],
              opacity: [0.15, 0.3, 0.15],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.circle 
            cx="300" 
            cy="300" 
            r="200" 
            fill="none"
            stroke="rgba(249, 198, 66, 0.2)"
            strokeWidth="2.5"
            animate={{
              r: [200, 205, 200],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 2.5,
              delay: 0.3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.circle 
            cx="300" 
            cy="300" 
            r="150" 
            fill="none"
            stroke="rgba(249, 198, 66, 0.25)"
            strokeWidth="2"
            animate={{
              r: [150, 155, 150],
              opacity: [0.25, 0.5, 0.25],
            }}
            transition={{
              duration: 2,
              delay: 0.6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          {/* Dashed circles with rotation */}
          <motion.circle 
            cx="300" 
            cy="300" 
            r="225" 
            fill="none"
            stroke="rgba(249, 198, 66, 0.3)"
            strokeWidth="3"
            strokeDasharray="10 15"
            animate={{
              strokeDashoffset: [0, -100],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              strokeDashoffset: {
                duration: 6,
                repeat: Infinity,
                ease: 'linear',
              },
              opacity: {
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }
            }}
          />
          <motion.circle 
            cx="300" 
            cy="300" 
            r="175" 
            fill="none"
            stroke="rgba(249, 198, 66, 0.35)"
            strokeWidth="3"
            strokeDasharray="8 12"
            animate={{
              strokeDashoffset: [0, 80],
              opacity: [0.35, 0.7, 0.35],
            }}
            transition={{
              strokeDashoffset: {
                duration: 5,
                repeat: Infinity,
                ease: 'linear',
              },
              opacity: {
                duration: 2.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }
            }}
          />
          <motion.circle 
            cx="300" 
            cy="300" 
            r="125" 
            fill="none"
            stroke="rgba(249, 198, 66, 0.4)"
            strokeWidth="3"
            strokeDasharray="6 10"
            animate={{
              strokeDashoffset: [0, -60],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              strokeDashoffset: {
                duration: 4,
                repeat: Infinity,
                ease: 'linear',
              },
              opacity: {
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }
            }}
          />
        </svg>
      </motion.div>

      {/* Medium Concentric Circles - Left Side */}
      <motion.div
        className="absolute -left-24 bottom-1/4"
        animate={{
          rotate: [0, -360],
          scale: [1, 1.08, 1],
        }}
        transition={{
          rotate: {
            duration: 35,
            repeat: Infinity,
            ease: 'linear',
          },
          scale: {
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }
        }}
      >
        <svg width="400" height="400" viewBox="0 0 400 400">
          <motion.circle 
            cx="200" 
            cy="200" 
            r="180" 
            fill="none"
            stroke="rgba(249, 198, 66, 0.15)"
            strokeWidth="2"
            animate={{
              r: [180, 185, 180],
              opacity: [0.15, 0.35, 0.15],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.circle 
            cx="200" 
            cy="200" 
            r="140" 
            fill="none"
            stroke="rgba(249, 198, 66, 0.25)"
            strokeWidth="2.5"
            animate={{
              r: [140, 145, 140],
              opacity: [0.25, 0.5, 0.25],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.circle 
            cx="200" 
            cy="200" 
            r="160" 
            fill="none"
            stroke="rgba(249, 198, 66, 0.35)"
            strokeWidth="3"
            strokeDasharray="8 10"
            animate={{
              strokeDashoffset: [0, 72],
              opacity: [0.35, 0.7, 0.35],
            }}
            transition={{
              strokeDashoffset: {
                duration: 5,
                repeat: Infinity,
                ease: 'linear',
              },
              opacity: {
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }
            }}
          />
          <motion.circle 
            cx="200" 
            cy="200" 
            r="120" 
            fill="none"
            stroke="rgba(249, 198, 66, 0.4)"
            strokeWidth="3"
            strokeDasharray="5 8"
            animate={{
              strokeDashoffset: [0, -52],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              strokeDashoffset: {
                duration: 4,
                repeat: Infinity,
                ease: 'linear',
              },
              opacity: {
                duration: 2.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }
            }}
          />
        </svg>
      </motion.div>

      {/* Animated Dashed Circle - Center Accent */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <svg width="800" height="800" viewBox="0 0 800 800">
          <motion.circle 
            cx="400" 
            cy="400" 
            r="350" 
            fill="none"
            stroke="rgba(249, 198, 66, 0.3)"
            strokeWidth="3"
            strokeDasharray="15 20"
            animate={{
              strokeDashoffset: [0, -140],
              r: [350, 360, 350],
            }}
            transition={{
              strokeDashoffset: {
                duration: 6,
                repeat: Infinity,
                ease: 'linear',
              },
              r: {
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }
            }}
          />
        </svg>
      </motion.div>

      {/* Energy Pulse Waves */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={`pulse-${i}`}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: [0, 3],
            opacity: [0.6, 0],
          }}
          transition={{
            duration: 4,
            delay: i * 1.3,
            repeat: Infinity,
            ease: 'easeOut',
          }}
        >
          <div 
            className="w-32 h-32 rounded-full border-2"
            style={{ borderColor: '#F9C642' }}
          />
        </motion.div>
      ))}

      {/* Energy Connection Lines - More Dynamic */}
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: 'transparent', stopOpacity: 0 }} />
            <stop offset="50%" style={{ stopColor: '#F9C642', stopOpacity: 0.8 }} />
            <stop offset="100%" style={{ stopColor: 'transparent', stopOpacity: 0 }} />
          </linearGradient>
          
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Horizontal lines */}
        {[20, 40, 60, 80].map((y, i) => (
          <motion.line
            key={`h-${i}`}
            x1="0%"
            y1={`${y}%`}
            x2="100%"
            y2={`${y}%`}
            stroke="url(#lineGradient)"
            strokeWidth="2"
            filter="url(#glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4,
              delay: i * 0.8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}

        {/* Diagonal connection lines */}
        {[
          { x1: '10%', y1: '20%', x2: '90%', y2: '80%' },
          { x1: '90%', y1: '20%', x2: '10%', y2: '80%' },
          { x1: '30%', y1: '10%', x2: '70%', y2: '90%' },
          { x1: '70%', y1: '10%', x2: '30%', y2: '90%' },
        ].map((line, i) => (
          <motion.line
            key={`d-${i}`}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke="rgba(249, 198, 66, 0.2)"
            strokeWidth="1.5"
            strokeDasharray="8 12"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1, 0],
              opacity: [0, 0.6, 0],
              strokeDashoffset: [0, -100],
            }}
            transition={{
              pathLength: {
                duration: 6,
                delay: i * 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              },
              opacity: {
                duration: 6,
                delay: i * 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              },
              strokeDashoffset: {
                duration: 3,
                repeat: Infinity,
                ease: 'linear',
              }
            }}
          />
        ))}
      </svg>

      {/* Floating Energy Nodes - More Dynamic */}
      {[
        { x: '15%', y: '20%', size: 10, delay: 0 },
        { x: '85%', y: '30%', size: 8, delay: 0.5 },
        { x: '20%', y: '70%', size: 12, delay: 1 },
        { x: '80%', y: '80%', size: 9, delay: 1.5 },
        { x: '50%', y: '15%', size: 11, delay: 0.3 },
        { x: '40%', y: '85%', size: 10, delay: 0.8 },
        { x: '65%', y: '50%', size: 9, delay: 1.2 },
        { x: '25%', y: '45%', size: 8, delay: 0.6 },
      ].map((node, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: node.x,
            top: node.y,
            width: node.size,
            height: node.size,
          }}
          animate={{
            scale: [1, 2, 1],
            opacity: [0.5, 1, 0.5],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 3,
            delay: node.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <div 
            className="w-full h-full rounded-full"
            style={{
              backgroundColor: '#F9C642',
              boxShadow: '0 0 30px rgba(249, 198, 66, 0.8)',
            }}
          />
          {/* Multiple dashed circles around node */}
          <svg 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            width={node.size * 6}
            height={node.size * 6}
          >
            <motion.circle
              cx={node.size * 3}
              cy={node.size * 3}
              r={node.size * 2}
              fill="none"
              stroke="rgba(249, 198, 66, 0.5)"
              strokeWidth="1.5"
              strokeDasharray="4 6"
              animate={{
                rotate: [0, 360],
                r: [node.size * 2, node.size * 2.5, node.size * 2],
              }}
              transition={{
                rotate: {
                  duration: 8,
                  repeat: Infinity,
                  ease: 'linear',
                },
                r: {
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }
              }}
            />
            <motion.circle
              cx={node.size * 3}
              cy={node.size * 3}
              r={node.size * 1.5}
              fill="none"
              stroke="rgba(249, 198, 66, 0.6)"
              strokeWidth="1"
              strokeDasharray="3 4"
              animate={{
                rotate: [360, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          </svg>
        </motion.div>
      ))}

      {/* Dynamic Particles - More Movement */}
      {Array.from({ length: 30 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 4 + 3,
        delay: Math.random() * 2,
      })).map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: '#F9C642',
            boxShadow: '0 0 10px rgba(249, 198, 66, 0.5)',
          }}
          animate={{
            opacity: [0, 1, 0],
            y: [0, -50, -100],
            x: [0, Math.random() * 20 - 10, Math.random() * 30 - 15],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'easeOut',
          }}
        />
      ))}

      {/* Tech Corner Accents - Animated */}
      <div className="absolute top-0 right-0 w-64 h-64">
        <svg width="100%" height="100%" viewBox="0 0 200 200">
          <motion.polyline
            points="0,40 40,40 40,0"
            fill="none"
            stroke="rgba(249, 198, 66, 0.5)"
            strokeWidth="3"
            initial={{ pathLength: 0 }}
            animate={{ 
              pathLength: [0, 1, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.polyline
            points="0,80 80,80 80,0"
            fill="none"
            stroke="rgba(249, 198, 66, 0.3)"
            strokeWidth="2"
            strokeDasharray="5 5"
            initial={{ pathLength: 0 }}
            animate={{ 
              pathLength: [0, 1, 0],
              strokeDashoffset: [0, -50],
            }}
            transition={{
              pathLength: {
                duration: 4,
                delay: 0.3,
                repeat: Infinity,
                ease: 'easeInOut',
              },
              strokeDashoffset: {
                duration: 2,
                repeat: Infinity,
                ease: 'linear',
              }
            }}
          />
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 w-64 h-64">
        <svg width="100%" height="100%" viewBox="0 0 200 200">
          <motion.polyline
            points="200,160 160,160 160,200"
            fill="none"
            stroke="rgba(249, 198, 66, 0.5)"
            strokeWidth="3"
            initial={{ pathLength: 0 }}
            animate={{ 
              pathLength: [0, 1, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.polyline
            points="200,120 120,120 120,200"
            fill="none"
            stroke="rgba(249, 198, 66, 0.3)"
            strokeWidth="2"
            strokeDasharray="5 5"
            initial={{ pathLength: 0 }}
            animate={{ 
              pathLength: [0, 1, 0],
              strokeDashoffset: [0, 50],
            }}
            transition={{
              pathLength: {
                duration: 4,
                delay: 0.3,
                repeat: Infinity,
                ease: 'easeInOut',
              },
              strokeDashoffset: {
                duration: 2,
                repeat: Infinity,
                ease: 'linear',
              }
            }}
          />
        </svg>
      </div>

      {/* Gradient Overlay for depth */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(26, 53, 112, 0.4) 100%)',
        }}
      />
    </div>
  );
}