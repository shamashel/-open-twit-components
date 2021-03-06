import React from 'react';
import { BaseIconProps } from '../IconType';

export const PersonIcon: React.FC<BaseIconProps> = ({ size }) => {
  const baseWidth = 24;
  const baseHeight = 24;
  return (
    <svg width={baseWidth * size} height={baseHeight * size} fill='none' xmlns='http://www.w3.org/2000/svg'>
      <circle cx='12' cy='6.5' r='4.5' stroke='black' strokeWidth='3'/>
      <path d='M21.2151 21.4359C21.237 21.5138 21.2315 21.5631 21.2226 21.5969C21.2124 21.6356 21.1878 21.6892 21.132 21.75C21.0133 21.8794 20.7868 22 20.5 22H12L3.5 22C3.21323 22 2.98671 21.8794 2.86799 21.75C2.81221 21.6892 2.78757 21.6356 2.77742 21.5969C2.76855 21.5631 2.76304 21.5138 2.78486 21.4359C2.89332 21.0489 3.03258 20.6676 3.20231 20.2951C3.66777 19.2735 4.35446 18.3355 5.23083 17.5388C6.10749 16.7419 7.15579 16.103 8.31908 15.665C9.48247 15.2269 10.7336 15 12 15C13.2664 15 14.5175 15.2269 15.6809 15.665C16.8442 16.103 17.8925 16.7419 18.7692 17.5388C19.6455 18.3355 20.3322 19.2735 20.7977 20.2951C20.9674 20.6676 21.1067 21.0489 21.2151 21.4359Z' stroke='black' strokeWidth='3' strokeLinecap='round' strokeLinejoin='round'/>
    </svg>
  );
}
