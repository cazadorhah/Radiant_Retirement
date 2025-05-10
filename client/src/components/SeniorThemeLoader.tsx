import React from 'react';
import { Home, Flower2, Users } from 'lucide-react';

interface SeniorThemeLoaderProps {
  theme?: 'home' | 'nature' | 'community';
  size?: 'small' | 'medium' | 'large';
  text?: string;
}

const SeniorThemeLoader: React.FC<SeniorThemeLoaderProps> = ({
  theme = 'home',
  size = 'medium',
  text = 'Loading...'
}) => {
  // Size configurations
  const sizeConfig = {
    small: {
      container: 'max-w-[180px]',
      orbit: 'w-16 h-16', 
      centerIcon: 'w-6 h-6',
      orbitingIcon: 'w-4 h-4',
      text: 'text-sm'
    },
    medium: {
      container: 'max-w-[240px]',
      orbit: 'w-24 h-24',
      centerIcon: 'w-10 h-10',
      orbitingIcon: 'w-6 h-6',
      text: 'text-base'
    },
    large: {
      container: 'max-w-[300px]',
      orbit: 'w-32 h-32',
      centerIcon: 'w-14 h-14',
      orbitingIcon: 'w-8 h-8',
      text: 'text-lg'
    }
  };

  // Theme configurations
  const themeConfig = {
    home: {
      mainIcon: Home,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
      orbitColor: 'bg-blue-200'
    },
    nature: {
      mainIcon: Flower2,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
      orbitColor: 'bg-green-200'
    },
    community: {
      mainIcon: Users,
      color: 'text-amber-600',
      bgColor: 'bg-amber-100',
      orbitColor: 'bg-amber-200'
    }
  };

  const ThemeIcon = themeConfig[theme].mainIcon;

  return (
    <div className={`${sizeConfig[size].container} mx-auto text-center`}>
      <div className="relative flex flex-col items-center">
        {/* Main orbit circle */}
        <div className={`relative ${sizeConfig[size].orbit} rounded-full ${themeConfig[theme].orbitColor} flex items-center justify-center`}>
          {/* Center icon */}
          <div className={`${themeConfig[theme].bgColor} p-3 rounded-full z-10`}>
            <ThemeIcon className={`${sizeConfig[size].centerIcon} ${themeConfig[theme].color}`} />
          </div>
          
          {/* Orbiting elements */}
          {[...Array(3)].map((_, index) => (
            <div 
              key={index}
              className={`absolute rounded-full ${themeConfig[theme].bgColor} p-2 animate-orbit`}
              style={{ 
                animationDelay: `${index * -1.5}s`,
                width: size === 'small' ? '24px' : size === 'medium' ? '32px' : '40px',
                height: size === 'small' ? '24px' : size === 'medium' ? '32px' : '40px',
              }}
            >
              <ThemeIcon className={`${sizeConfig[size].orbitingIcon} ${themeConfig[theme].color}`} />
            </div>
          ))}
        </div>
        
        {/* Loading text */}
        <p className={`${sizeConfig[size].text} mt-4 font-medium ${themeConfig[theme].color}`}>
          {text}
        </p>

        {/* Visual loading dots */}
        <div className="flex space-x-1 mt-2">
          {[...Array(3)].map((_, i) => (
            <div 
              key={i}
              className={`w-2 h-2 rounded-full ${themeConfig[theme].bgColor} animate-pulse`}
              style={{animationDelay: `${i * 0.3}s`}}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SeniorThemeLoader;