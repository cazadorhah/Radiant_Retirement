import { CircleOff, Clock, Sparkles } from 'lucide-react';
import React from 'react';

interface LoadingAnimationProps {
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary' | 'subtle';
  text?: string;
  showText?: boolean;
}

const LoadingAnimation: React.FC<LoadingAnimationProps> = ({
  size = 'medium',
  variant = 'primary',
  text = 'Loading...',
  showText = true,
}) => {
  // Size classes
  const sizeClasses = {
    small: {
      container: 'max-w-[150px]',
      icon: 'h-8 w-8',
      text: 'text-sm',
    },
    medium: {
      container: 'max-w-[200px]',
      icon: 'h-12 w-12',
      text: 'text-base',
    },
    large: {
      container: 'max-w-[250px]',
      icon: 'h-16 w-16',
      text: 'text-lg',
    },
  };

  // Variant classes
  const variantClasses = {
    primary: {
      icon: 'text-blue-600',
      text: 'text-blue-700',
    },
    secondary: {
      icon: 'text-teal-600',
      text: 'text-teal-700',
    },
    subtle: {
      icon: 'text-gray-600',
      text: 'text-gray-700',
    },
  };

  return (
    <div className={`${sizeClasses[size].container} text-center mx-auto`}>
      <div className="relative">
        {/* Center circle */}
        <div className="flex justify-center items-center mb-4">
          <div className={`rounded-full bg-gray-100 p-3 inline-block relative`}>
            <Clock 
              className={`${sizeClasses[size].icon} ${variantClasses[variant].icon} animate-pulse`} 
            />
            
            {/* Orbiting element */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div 
                className="absolute rounded-full bg-blue-100 p-1.5 animate-orbit"
                style={{ 
                  width: size === 'small' ? '20px' : size === 'medium' ? '24px' : '30px',
                  height: size === 'small' ? '20px' : size === 'medium' ? '24px' : '30px',
                }}
              >
                <Sparkles 
                  className={`w-full h-full ${variantClasses[variant].icon}`} 
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Text */}
        {showText && (
          <p className={`${sizeClasses[size].text} ${variantClasses[variant].text} font-medium mt-2`}>
            {text}
          </p>
        )}
      </div>
    </div>
  );
};

export default LoadingAnimation;