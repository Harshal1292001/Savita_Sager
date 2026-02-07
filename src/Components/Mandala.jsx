import React from 'react';

export const Mandala = ({ className = '', style }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}           // e.g. "w-100 h-auto" or Bootstrap classes
      style={style}
      fill="none"
      stroke="currentColor"
      strokeWidth="0.6"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer faint rings */}
      <circle cx="50" cy="50" r="48" strokeOpacity="0.25" />
      <circle cx="50" cy="50" r="42" strokeOpacity="0.45" />
      <circle cx="50" cy="50" r="34" strokeOpacity="0.35" />

      {/* Outer petal-like loops – 24-fold symmetry */}
      <g opacity="0.75">
        {[...Array(24)].map((_, i) => (
          <g key={i} transform={`rotate(${i * 15} 50 50)`}>
            <path
              d="M 50 8 Q 56 2 62 8 T 50 22 Q 44 28 50 22"
              strokeLinecap="round"
            />
            <circle cx="50" cy="14" r="1.2" fill="currentColor" />
          </g>
        ))}
      </g>

      {/* Mid-layer petal shapes – 12-fold symmetry */}
      <g opacity="0.65" strokeWidth="0.8">
        {[...Array(12)].map((_, i) => (
          <path
            key={i}
            d="M 50 24 Q 68 38 50 52 Q 32 38 50 24 Z"
            transform={`rotate(${i * 30} 50 50)`}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ))}
      </g>

      {/* Inner decorative ring */}
      <circle cx="50" cy="50" r="18" strokeOpacity="0.7" strokeWidth="1" />
      <circle cx="50" cy="50" r="12" strokeOpacity="0.9" strokeWidth="1.1" />

      {/* Center core */}
      <circle cx="50" cy="50" r="6" fill="currentColor" opacity="0.9" />
      <circle cx="50" cy="50" r="2.5" fill="white" /> {/* small highlight */}
    </svg>
  );
};