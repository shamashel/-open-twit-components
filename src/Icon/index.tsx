import React from 'react';
import type { IconName, IconColor } from './IconType';

export const Icon = ({iconName, flipVertical, flipHorizontal, spin, color}: IconProps): React => {
  const path = IconSVG[`mdi${iconName}`];
  const props = {
    path, spin, color,
    vertical: flipVertical,
    horizontal: flipHorizontal
  }
}

export interface IconProps {
  iconName: IconName;
  flipVertical: boolean;
  flipHorizontal: boolean;
  spin: boolean | number;
  color: IconColor;
}