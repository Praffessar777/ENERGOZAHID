import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import logoImage from 'figma:asset/0d36c3a2beff1d06ace89f279d263c8394c415ca.png';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  className?: string;
  textColor?: 'blue' | 'white';
}

export function Logo({ size = 'md', showText = false, className = '' }: LogoProps) {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-12',
    lg: 'h-16',
    xl: 'h-24'
  };

  return (
    <div className={`flex items-center ${className}`}>
      <ImageWithFallback
        src={logoImage}
        alt="Логотип ЕНЕРГОЗАХІД"
        className={`${sizeClasses[size]} w-auto object-contain`}
      />
    </div>
  );
}
