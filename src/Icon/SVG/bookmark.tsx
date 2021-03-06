import React from 'react';
import type { BaseIconProps } from '../IconType';

export const BookmarkIcon: React.FC<BaseIconProps> = ({ color, size }) => {
  const baseWidth = 20;
  const baseHeight = 24;
  return (
    <svg width={baseWidth * size} height={baseHeight * size} fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M2.5 2.25H17.5C17.7761 2.25 18 2.47386 18 2.75V12.25V21.345C18 21.7842 17.4744 22.01 17.1558 21.7077L12.4092 17.2036C11.0587 15.922 8.94132 15.922 7.59082 17.2036L2.84417 21.7077C2.5256 22.01 2 21.7842 2 21.345V2.75C2 2.47386 2.22386 2.25 2.5 2.25Z'
        stroke={color || '#0F1518'}
        strokeWidth='3'
        strokeLinejoin='round'
        fill='none'
      />
    </svg>
  );
}
