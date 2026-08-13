import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark'; // 'light' for light backgrounds (default), 'dark' for dark backgrounds
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ className = '', variant = 'light', size = 'md' }) => {
  const heightMap = {
    sm: 'h-9',
    md: 'h-12',
    lg: 'h-16',
  };

  const isDark = variant === 'dark';
  const navyColor = isDark ? '#60A5FA' : '#1E3A8A';
  const redColor = '#DC2626';
  const textColor = isDark ? '#FFFFFF' : '#1E3A8A';

  return (
    <div className={`inline-flex items-center select-none ${heightMap[size]} ${className}`}>
      <svg
        viewBox="0 0 460 200"
        className="h-full w-auto overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Top-Left Red Curved Swoosh */}
        <path
          d="M 285,42 C 200,18 90,20 40,65 C 20,85 22,115 35,130 C 31,105 45,75 80,55 C 135,28 225,28 285,42 Z"
          fill={redColor}
        />

        {/* Bottom-Right Navy Curved Swoosh */}
        <path
          d="M 175,158 C 260,182 370,180 420,135 C 440,115 438,85 425,70 C 429,95 415,125 380,145 C 325,172 235,172 175,158 Z"
          fill={navyColor}
        />

        {/* Text: MAPS TOURS */}
        <text
          x="75"
          y="108"
          fontFamily="Inter, Arial, sans-serif"
          fontWeight="900"
          fontSize="48"
          letterSpacing="1.5"
          fill={textColor}
        >
          MAPS T
        </text>

        {/* 'O' in TOURS with Union Jack Emblem */}
        <g transform="translate(262, 90)">
          {/* Outer circle ring */}
          <circle cx="0" cy="0" r="19" fill={navyColor} stroke="#FFFFFF" strokeWidth="2" />
          {/* Inner circle mask */}
          <circle cx="0" cy="0" r="17" fill="#1E3A8A" />
          
          {/* Union Jack diagonal white background bars */}
          <path d="M-12,-12 L12,12 M-12,12 L12,-12" stroke="#FFFFFF" strokeWidth="4.5" />
          {/* Union Jack diagonal red bars */}
          <path d="M-12,-12 L12,12 M-12,12 L12,-12" stroke="#DC2626" strokeWidth="2.2" />
          
          {/* Union Jack central white cross */}
          <path d="M-17,0 L17,0 M0,-17 L0,17" stroke="#FFFFFF" strokeWidth="6.5" />
          {/* Union Jack central red cross */}
          <path d="M-17,0 L17,0 M0,-17 L0,17" stroke="#DC2626" strokeWidth="3.5" />
          
          {/* Emblem Border */}
          <circle cx="0" cy="0" r="17" fill="none" stroke="#FFFFFF" strokeWidth="1.5" />
        </g>

        <text
          x="287"
          y="108"
          fontFamily="Inter, Arial, sans-serif"
          fontWeight="900"
          fontSize="48"
          letterSpacing="1.5"
          fill={textColor}
        >
          URS
        </text>

        {/* Text: AND RENTAL */}
        <text
          x="122"
          y="138"
          fontFamily="Inter, Arial, sans-serif"
          fontWeight="700"
          fontSize="24"
          letterSpacing="7"
          fill={redColor}
        >
          AND RENTAL
        </text>
      </svg>
    </div>
  );
};
