import React from 'react';
import { motion } from 'motion/react';

export function AdvancedEnergyHero() {
  // Generate random electrical particles
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 2,
  }));

  // Generate power lines
  const powerLines = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    startX: Math.random() * 100,
    startY: Math.random() * 100,
    endX: Math.random() * 100,
    endY: Math.random() * 100,
    duration: Math.random() * 4 + 3,
    delay: Math.random() * 2,
  }));

  return (
    <div 
      className="absolute inset-0 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #264A96 0%, #1a3875 50%, #0f2456 100%)' }}
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0">
        <svg className="w-full h-full" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern
              id="energyGrid"
              x="0"
              y="0"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <motion.path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="rgba(249, 198, 66, 0.1)"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'easeInOut',
                }}
              />
            </pattern>
            
            {/* Electric Glow Filter */}
            <filter id="electricGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            
            {/* Lightning Gradient */}
            <linearGradient id="lightningGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#F9C642', stopOpacity: 1 }} />
              <stop offset="50%" style={{ stopColor: '#ffffff', stopOpacity: 0.8 }} />
              <stop offset="100%" style={{ stopColor: '#F9C642', stopOpacity: 0.6 }} />
            </linearGradient>
          </defs>
          
          {/* Grid Pattern */}
          <rect width="100%" height="100%" fill="url(#energyGrid)" />
        </svg>
      </div>

      {/* Energy Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-yellow-300"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            filter: 'blur(0.5px)',
            boxShadow: '0 0 10px rgba(249, 198, 66, 0.8)',
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Power Lines */}
      <svg className="absolute inset-0 w-full h-full">
        {powerLines.map((line) => (
          <motion.line
            key={line.id}
            x1={`${line.startX}%`}
            y1={`${line.startY}%`}
            x2={`${line.endX}%`}
            y2={`${line.endY}%`}
            stroke="url(#lightningGradient)"
            strokeWidth="2"
            filter="url(#electricGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: line.duration,
              delay: line.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </svg>

      {/* Main Lightning Bolts */}
      <svg className="absolute inset-0 w-full h-full">
        <motion.path
          d="M 20 20 L 40 60 L 35 80 L 55 120 L 45 160"
          fill="none"
          stroke="rgba(249, 198, 66, 0.9)"
          strokeWidth="3"
          filter="url(#electricGlow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            delay: 0.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        <motion.path
          d="M 80 30 L 60 70 L 70 100 L 50 140 L 60 180"
          fill="none"
          stroke="rgba(249, 198, 66, 0.7)"
          strokeWidth="2"
          filter="url(#electricGlow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 2.5,
            delay: 1,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </svg>

      {/* Energy Waves */}
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute inset-0 rounded-full border-2 border-yellow-300"
            style={{
              borderColor: 'rgba(249, 198, 66, 0.2)',
            }}
            animate={{
              scale: [0.8, 2, 0.8],
              opacity: [0, 0.4, 0],
            }}
            transition={{
              duration: 4,
              delay: i * 1.3,
              repeat: Infinity,
              ease: 'easeOut',
            }}
          />
        ))}
      </div>

      {/* Circuit Board Pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        <defs>
          <pattern
            id="circuitPattern"
            x="0"
            y="0"
            width="120"
            height="120"
            patternUnits="userSpaceOnUse"
          >
            <motion.rect
              x="10"
              y="10"
              width="20"
              height="20"
              fill="none"
              stroke="rgba(249, 198, 66, 0.5)"
              strokeWidth="1"
              animate={{ opacity: [0.2, 0.8, 0.2] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.circle
              cx="60"
              cy="60"
              r="8"
              fill="rgba(249, 198, 66, 0.3)"
              animate={{
                r: [6, 12, 6],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.line
              x1="30"
              y1="20"
              x2="90"
              y2="20"
              stroke="rgba(249, 198, 66, 0.4)"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: [0, 1, 0] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuitPattern)" />
      </svg>

      {/* Floating Energy Icons */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-yellow-300 text-2xl opacity-30"
            style={{
              left: `${20 + (i * 15)}%`,
              top: `${30 + (i % 2) * 40}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 360, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4 + i,
              delay: i * 0.8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            ⚡
          </motion.div>
        ))}
      </div>

      {/* Central Energy Core */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 360],
        }}
        transition={{
          scale: {
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          },
          rotate: {
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          },
        }}
      >
        <div
          className="w-24 h-24 rounded-full"
          style={{
            background: 'conic-gradient(from 0deg, rgba(249, 198, 66, 0.8), rgba(38, 74, 150, 0.8), rgba(249, 198, 66, 0.8))',
            filter: 'blur(2px)',
            boxShadow: '0 0 40px rgba(249, 198, 66, 0.5)',
          }}
        />
      </motion.div>

      {/* Pulsing Overlay */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(249, 198, 66, 0.1) 0%, transparent 70%)',
        }}
        animate={{
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
}