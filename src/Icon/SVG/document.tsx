import React from 'react';
import { BaseIconProps } from '../IconType';

export const DocumentIcon: React.FC<BaseIconProps> = ({ color, size }) => {
  const baseWidth = 24;
  const baseHeight = 24;
  return (
    <svg width={baseWidth * size} height={baseHeight * size} fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M8 7H16M8 12H16M8 17H16M5.5 22H18.5C19.6046 22 20.5 21.1046 20.5 20V4C20.5 2.89543 19.6046 2 18.5 2H5.5C4.39543 2 3.5 2.89543 3.5 4V20C3.5 21.1046 4.39543 22 5.5 22Z'
        stroke={color || '#0F1518'}
        strokeWidth='3'
        strokeLinecap='round'
        strokeLinejoin='round'
        fill='none'
      />
    </svg>
  );
}
