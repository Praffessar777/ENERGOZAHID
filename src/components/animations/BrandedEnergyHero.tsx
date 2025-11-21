import React from 'react';
import { motion } from 'motion/react';

export function BrandedEnergyHero() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          {/* Ваше відео з Cloudinary */}
          <source src="https://res.cloudinary.com/dxhcn6yoo/video/upload/v1763491873/optimized_video_znydev.mp4" type="video/mp4" />
          
          {/* Fallback відео про електроенергетику на випадок технічних проблем */}
          <source src="https://cdn.pixabay.com/video/2022/12/08/142588-779054314_large.mp4" type="video/mp4" />
        </video>
        
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#264A96]/70 via-[#264A96]/50 to-[#264A96]/80" />
      </div>

      {/* Subtle animated overlay effects */}
      <div className="absolute inset-0">
        {/* Pulsing light effect */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(249, 198, 66, 0.12) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Floating energy particles */}
        {Array.from({ length: 25 }, (_, i) => ({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 2.5 + 1,
          duration: Math.random() * 7 + 5,
          delay: Math.random() * 6,
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
              boxShadow: '0 0 12px rgba(249, 198, 66, 0.9)',
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0.5, 1.2, 0.5],
              y: [0, -40, 0],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}

        {/* Subtle animated grid overlay */}
        <svg className="absolute inset-0 w-full h-full opacity-5">
          <defs>
            <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#F9C642" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Animated light rays */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={`ray-${i}`}
            className="absolute top-1/2 left-1/2 w-1 h-full origin-top"
            style={{
              background: 'linear-gradient(to bottom, rgba(249, 198, 66, 0.15) 0%, transparent 50%)',
              transform: `translateX(-50%) rotate(${i * 30}deg)`,
            }}
            animate={{
              opacity: [0.2, 0.5, 0.2],
              scaleY: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 6,
              delay: i * 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
    </div>
  );
}