import React from 'react';

export const Ganesha = ({ className = '' }) => {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Head + trunk area */}
      <path d="M100 20 C80 20 60 40 60 70 C60 90 75 105 85 110 L85 130 C70 135 60 150 60 170 L140 170 C140 150 130 135 115 130 L115 110 C125 105 140 90 140 70 C140 40 120 20 100 20 Z" />

      {/* Eyes / face details - small circle (one eye visible in this minimal version) */}
      <circle cx="100" cy="70" r="5" />

      {/* Trunk simplified */}
      <path d="M90 115 L110 115 L105 150 L95 150 Z" />
    </svg>
  );
};