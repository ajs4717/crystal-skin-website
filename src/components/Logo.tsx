import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  showSubtext?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'dark',
  size = 'md',
  showSubtext = true,
  className = ''
}) => {
  const isLight = variant === 'light';

  // Size configurations
  const dimensions = {
    sm: { height: 36, textDr: 'text-xs', textMain: 'text-lg', textSub: 'text-[9px]' },
    md: { height: 46, textDr: 'text-xs md:text-sm', textMain: 'text-xl md:text-2xl', textSub: 'text-[10px] md:text-xs' },
    lg: { height: 60, textDr: 'text-sm md:text-base', textMain: 'text-2xl md:text-3xl', textSub: 'text-xs md:text-sm' },
  }[size];

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Brand Aesthetic Icon */}
      <div className="relative flex-shrink-0 flex items-center justify-center">
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-auto"
          style={{ height: dimensions.height }}
        >
          {/* Aesthetic Face Profile and Crystal Leaf Crest */}
          {/* Leaf 1 - Deep Navy */}
          <path
            d="M58 8C58 8 68 22 66 38C64 54 50 64 50 64C50 64 62 50 60 34C58 18 58 8 58 8Z"
            fill={isLight ? "#38bdf8" : "#0d5c91"}
          />
          {/* Leaf 2 - Vibrant Teal */}
          <path
            d="M48 16C48 16 56 28 54 44C52 60 38 72 38 72C38 72 48 58 46 42C44 26 48 16 48 16Z"
            fill="#0ea5e9"
          />
          {/* Leaf 3 - Accent Leaf */}
          <path
            d="M70 24C70 24 82 34 78 50C74 66 60 74 60 74C60 74 72 62 70 46C68 30 70 24 70 24Z"
            fill={isLight ? "#2dd4bf" : "#0891b2"}
          />
          {/* Female Profile Silhouette */}
          <path
            d="M38 32C37 36 34 40 31 43C29 45 30 48 32 49C28 52 27 54 28 56C30 58 32 58 32 60C30 62 26 66 28 70C30 74 36 78 44 80C46 80 48 83 48 88H32C24 84 18 76 16 66C14 56 18 46 24 38C28 34 33 32 38 32Z"
            fill={isLight ? "#ffffff" : "#0c3b69"}
          />
          {/* Elegant Arc Flow */}
          <path
            d="M40 76C46 75 52 70 56 62C60 54 62 42 60 30"
            stroke={isLight ? "#38bdf8" : "#0ea5e9"}
            strokeWidth="3.5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Typography Stack matching the exact brand */}
      <div className="flex flex-col justify-center text-left leading-tight">
        <span
          className={`font-semibold tracking-wider uppercase ${
            isLight ? 'text-teal-300' : 'text-teal-600'
          } ${dimensions.textDr}`}
        >
          DR. MISHA’S
        </span>
        <span
          className={`font-extrabold tracking-tight ${
            isLight ? 'text-white' : 'text-[#0e3b68]'
          } ${dimensions.textMain}`}
          style={{ fontFamily: "'Outfit', sans-serif" }}
        >
          CRYSTAL SKIN
        </span>
        {showSubtext && (
          <span
            className={`font-medium tracking-widest uppercase mt-0.5 ${
              isLight ? 'text-slate-300' : 'text-teal-700'
            } ${dimensions.textSub}`}
          >
            SKIN | HAIR | LASER CLINIC
          </span>
        )}
      </div>
    </div>
  );
};
