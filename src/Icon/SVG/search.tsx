import React from 'react';
import { BaseIconProps } from '../IconType';

export const SearchIcon: React.FC<BaseIconProps> = ({ color, size }) => {
  const baseWidth = 24;
  const baseHeight = 24;
  return (
    <svg width={baseWidth * size} height={baseHeight * size} fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M21.1893 23.3107C21.7751 23.8964 22.7249 23.8964 23.3107 23.3107C23.8964 22.7249 23.8964 21.7751 23.3107 21.1893L21.1893 23.3107ZM23.3107 21.1893L17.3107 15.1893L15.1893 17.3107L21.1893 23.3107L23.3107 21.1893Z' fill={color || '#0F1518'}/>
      <circle cx='10.25' cy='10.25' r='8.5' stroke={color || '#0F1518'} strokeWidth='3'/>
    </svg>
  );
}
