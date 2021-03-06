import React from 'react';
import { BaseIconProps } from '../IconType';

export const MailIcon: React.FC<BaseIconProps> = ({ color, size }) => {
  const baseWidth = 24;
  const baseHeight = 24;
  return (
    <svg width={baseWidth * size} height={baseHeight * size} fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M2 4V19.25C2 20.2165 2.7835 21 3.75 21H20.25C21.2165 21 22 20.2165 22 19.25V4M2 4V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V4M2 4L10.8666 11.5366C11.5201 12.0921 12.4799 12.0921 13.1334 11.5366L22 4' stroke={color || '#0F1518'} strokeWidth='3' strokeLinecap='round' strokeLinejoin='round'/>
    </svg>
  );
}
