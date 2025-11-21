import React from 'react';
import { motion } from 'motion/react';

export function ReliabilityMechanismHero() {
  return (
    <div 
      className="absolute inset-0 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #264A96 0%, #1a3570 100%)' }}
    >
      {/* Large Diagonal Energy Flow */}
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="diagonalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: 'rgba(249, 198, 66, 0)' }} />
            <stop offset="30%" style={{ stopColor: 'rgba(249, 198, 66, 0.15)' }} />
            <stop offset="70%" style={{ stopColor: 'rgba(249, 198, 66, 0.15)' }} />
            <stop offset="100%" style={{ stopColor: 'rgba(249, 198, 66, 0)' }} />
          </linearGradient>
        </defs>
        
        {/* Wide diagonal bands */}
        {[0, 1, 2].map((i) => (
          <motion.rect
            key={`band-${i}`}
            x="-10%"
            y={`${i * 35 - 10}%`}
            width="120%"
            height="25%"
            fill="url(#diagonalGradient)"
            transform="rotate(-15)"
            style={{ transformOrigin: 'center' }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              delay: i * 1.3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </svg>

      {/* Large Concentric Circles from Bottom Right */}
      <motion.div
        className="absolute -right-64 -bottom-64"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 120,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <svg width="1200" height="1200" viewBox="0 0 1200 1200">
          {[600, 500, 400, 300, 200].map((r, i) => (
            <motion.circle
              key={`circle-br-${i}`}
              cx="600"
              cy="600"
              r={r}
              fill="none"
              stroke="rgba(249, 198, 66, 0.2)"
              strokeWidth={i % 2 === 0 ? "2" : "1"}
              strokeDasharray={i % 2 === 0 ? "20 30" : "none"}
              animate={{
                r: [r, r + 20, r],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 5,
                delay: i * 0.3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}
        </svg>
      </motion.div>

      {/* Large Concentric Circles from Top Left */}
      <motion.div
        className="absolute -left-48 -top-48"
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 100,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <svg width="900" height="900" viewBox="0 0 900 900">
          {[450, 370, 290, 210, 130].map((r, i) => (
            <motion.circle
              key={`circle-tl-${i}`}
              cx="450"
              cy="450"
              r={r}
              fill="none"
              stroke="rgba(249, 198, 66, 0.2)"
              strokeWidth={i % 2 === 0 ? "2" : "1"}
              strokeDasharray={i % 2 === 0 ? "15 25" : "none"}
              animate={{
                r: [r, r + 15, r],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 4.5,
                delay: i * 0.4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}
        </svg>
      </motion.div>

      {/* Central Connection Network */}
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: 'rgba(249, 198, 66, 0)' }} />
            <stop offset="50%" style={{ stopColor: 'rgba(249, 198, 66, 0.8)' }} />
            <stop offset="100%" style={{ stopColor: 'rgba(249, 198, 66, 0)' }} />
          </linearGradient>
        </defs>

        {/* Horizontal energy lines */}
        {[20, 35, 50, 65, 80].map((y, i) => (
          <motion.line
            key={`h-${i}`}
            x1="0%"
            y1={`${y}%`}
            x2="100%"
            y2={`${y}%`}
            stroke="url(#lineGrad)"
            strokeWidth="2"
            filter="url(#glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 5,
              delay: i * 0.8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}

        {/* Vertical energy lines */}
        {[15, 35, 50, 65, 85].map((x, i) => (
          <motion.line
            key={`v-${i}`}
            x1={`${x}%`}
            y1="0%"
            x2={`${x}%`}
            y2="100%"
            stroke="rgba(249, 198, 66, 0.15)"
            strokeWidth="1"
            strokeDasharray="8 15"
            animate={{
              strokeDashoffset: [0, -100],
              opacity: [0.15, 0.4, 0.15],
            }}
            transition={{
              duration: 6,
              delay: i * 0.6,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}

        {/* Grid intersection nodes */}
        {[20, 35, 50, 65, 80].flatMap((y) =>
          [15, 35, 50, 65, 85].map((x) => `${x},${y}`)
        ).map((pos, i) => {
          const [x, y] = pos.split(',');
          return (
            <motion.circle
              key={`node-${i}`}
              cx={`${x}%`}
              cy={`${y}%`}
              r="3"
              fill="#F9C642"
              filter="url(#glow)"
              animate={{
                r: [2, 5, 2],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 3,
                delay: (i % 5) * 0.3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          );
        })}
      </svg>

      {/* Large Central Rotating Ring */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <svg width="700" height="700" viewBox="0 0 700 700">
          <motion.circle
            cx="350"
            cy="350"
            r="300"
            fill="none"
            stroke="rgba(249, 198, 66, 0.3)"
            strokeWidth="3"
            strokeDasharray="30 40"
            animate={{
              strokeDashoffset: [0, -280],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
          <motion.circle
            cx="350"
            cy="350"
            r="250"
            fill="none"
            stroke="rgba(249, 198, 66, 0.25)"
            strokeWidth="2"
            strokeDasharray="20 30"
            animate={{
              strokeDashoffset: [0, 200],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </svg>
      </motion.div>

      {/* Energy Particles - Strategic Placement */}
      {Array.from({ length: 40 }, (_, i) => ({
        id: i,
        x: (i % 5) * 20 + 10,
        y: Math.floor(i / 5) * 12.5 + 6,
        size: Math.random() * 2 + 1.5,
        duration: Math.random() * 4 + 3,
        delay: Math.random() * 5,
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
            boxShadow: '0 0 12px rgba(249, 198, 66, 0.6)',
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0.5, 1.5, 0.5],
            y: [0, -30, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Corner Accent - Top Right */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96"
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <svg width="100%" height="100%" viewBox="0 0 400 400">
          <path
            d="M 400 0 L 400 150 L 350 150 L 350 50 L 250 50 L 250 0 Z"
            fill="rgba(249, 198, 66, 0.15)"
          />
          <motion.path
            d="M 400 0 L 400 200 L 300 200 L 300 100 L 200 100 L 200 0 Z"
            fill="none"
            stroke="rgba(249, 198, 66, 0.4)"
            strokeWidth="2"
            strokeDasharray="10 10"
            animate={{
              strokeDashoffset: [0, -80],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </svg>
      </motion.div>

      {/* Corner Accent - Bottom Left */}
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96"
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 5,
          delay: 1,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <svg width="100%" height="100%" viewBox="0 0 400 400">
          <path
            d="M 0 400 L 0 250 L 50 250 L 50 350 L 150 350 L 150 400 Z"
            fill="rgba(249, 198, 66, 0.15)"
          />
          <motion.path
            d="M 0 400 L 0 200 L 100 200 L 100 300 L 200 300 L 200 400 Z"
            fill="none"
            stroke="rgba(249, 198, 66, 0.4)"
            strokeWidth="2"
            strokeDasharray="10 10"
            animate={{
              strokeDashoffset: [0, 80],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </svg>
      </motion.div>

      {/* Expanding Pulse Waves from Center */}
      {[0, 1, 2, 3].map((i) => (
        <motion.div
          key={`pulse-${i}`}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: [0.5, 3],
            opacity: [0.6, 0],
          }}
          transition={{
            duration: 6,
            delay: i * 1.5,
            repeat: Infinity,
            ease: 'easeOut',
          }}
        >
          <div 
            className="w-64 h-64 rounded-full border-2"
            style={{ borderColor: '#F9C642' }}
          />
        </motion.div>
      ))}

      {/* Subtle gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 30%, rgba(26, 53, 112, 0.3) 100%)',
        }}
      />
    </div>
  );
}