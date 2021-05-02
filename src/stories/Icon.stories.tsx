import React from 'react';
import { Icon } from '../';
import { IconName, IconColor } from '../Icon/IconType';
import { withKnobs, boolean, number, select, color } from '@storybook/addon-knobs';
import IconNames from './assets/IconNames';

export default {
  title: 'Icon',
  decorators: [withKnobs]
}

const colors: IconColor[] = [
  'primary',
  'secondary',
  'disabled'
]

const iconName = select<IconName>('iconName', IconNames, 'Home');
const iconNameLoading = select<IconName>('iconName', IconNames, 'Loading');
const flipVertical = boolean('flipVertical', false);
const flipHorizontal = boolean('flipVertical', false);
const spinBoolean = boolean('spin', false);
const spinNumber = number('spin', 2);
const colorSelect = select<IconColor>('color', colors, 'primary');
const colorString = color('color', '#1DA1F2');

export const RegularUse = () => {
  <Icon 
    iconName={iconName} 
    flipVertical={flipVertical} 
    flipHorizontal={flipHorizontal} 
    spin={spinBoolean} 
    color={colorSelect}
  ></Icon>
}

export const SpinAsNumber = () => {
  <Icon 
    iconName={iconNameLoading} 
    flipVertical={flipVertical} 
    flipHorizontal={flipHorizontal} 
    spin={spinNumber} 
    color={colorSelect}
  ></Icon>
}

export const ColorAsString = () => {
  <Icon 
    iconName={iconName} 
    flipVertical={flipVertical} 
    flipHorizontal={flipHorizontal} 
    spin={spinBoolean} 
    color={colorString}
  ></Icon>
}