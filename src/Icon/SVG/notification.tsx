import React from 'react';
import { BaseIconProps } from '../IconType';

export const NotificationIcon: React.FC<BaseIconProps> = ({ color, size }) => {
  const baseWidth = 24;
  const baseHeight = 24;
  return (
    <svg width={baseWidth * size} height={baseHeight * size} fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M7.83327 16.7394L2 16.7394C4.22223 14.8527 4.03699 11.6297 4.22217 10.2541C4.22217 8.06495 5.04162 5.96548 6.50024 4.41755C7.95886 2.86961 9.93715 2 11.9999 2C14.0627 2 16.0411 2.86962 17.4997 4.41755C18.9583 5.96548 19.7777 8.06495 19.7777 10.2541C19.9629 11.6297 19.7777 14.8527 21.9999 16.7394L16.1666 16.7394M7.83327 16.7394C7.83327 20.5929 9.91658 21 11.9999 21C14.5344 21 16.1666 20.5929 16.1666 16.7394M7.83327 16.7394L16.1666 16.7394' stroke={color || '#0F1518'} strokeWidth='3' strokeLinecap='round' strokeLinejoin='round'/>
    </svg>
  );
}
