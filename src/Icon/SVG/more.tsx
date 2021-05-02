import React from 'react';
import { BaseIconProps } from '../IconType';

export const MoreIcon: React.FC<BaseIconProps> = ({ color, size }) => {
  const baseWidth = 24;
  const baseHeight = 24;
  return (
    <svg width={baseWidth * size} height={baseHeight * size} fill='none' xmlns='http://www.w3.org/2000/svg'>
      <circle cx='7' cy='12' r='1.5' fill={color || '#0F1518'}/>
      <circle cx='12' cy='12' r='1.5' fill={color || '#0F1518'}/>
      <path d='M18.5 12C18.5 12.8284 17.8284 13.5 17 13.5C16.1716 13.5 15.5 12.8284 15.5 12C15.5 11.1716 16.1716 10.5 17 10.5C17.8284 10.5 18.5 11.1716 18.5 12Z' fill={color || '#0F1518'}/>
    </svg>
  );
}
