import React from 'react';
import { BaseIconProps } from '../IconType';

export const HashtagIcon: React.FC<BaseIconProps> = ({ color, size }) => {
  const baseWidth = 24;
  const baseHeight = 24;
  return (
    <svg width={baseWidth * size} height={baseHeight * size} fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M2 17H22' stroke={color || '#0F1518'} strokeWidth='3' strokeLinecap='round' strokeLinejoin='round'/>
      <path d='M2 7H22' stroke={color || '#0F1518'} strokeWidth='3' strokeLinecap='round' strokeLinejoin='round'/>
      <path d='M17 2V22' stroke={color || '#0F1518'} strokeWidth='3' strokeLinecap='round' strokeLinejoin='round'/>
      <path d='M7 2V22' stroke={color || '#0F1518'} strokeWidth='3' strokeLinecap='round' strokeLinejoin='round'/>
    </svg>
  );
}
