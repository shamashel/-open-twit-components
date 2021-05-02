import React from 'react';
import type { IconName, IconColor, BaseIconProps } from './IconType';
import * as svg from './SVG';
import { palette } from '../styles';
import { getTheme } from '../index';
const theme = getTheme();

export const Icon: React.FunctionComponent<IconProps> = ({
  iconName,
  color
}) => {
  const colorVal = color ? palette[theme][color] || palette[theme].primary : palette[theme].primary;
  const Icon: React.FC<BaseIconProps> = svg[iconName];
  return (<Icon color={colorVal} size={1} />);
}

export interface IconProps {
  iconName: IconName;
  color?: IconColor;
}
