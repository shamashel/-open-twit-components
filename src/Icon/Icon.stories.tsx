import React from 'react';
import { Icon } from '..';
import { IconName, IconColor } from './IconType';
import { withKnobs, select, color } from '@storybook/addon-knobs';

const IconNames: IconName[] = ['bookmark', 'document', 'hashtag', 'home', 'mail', 'more', 'more_outline', 'notification', 'person', 'search'];

export default {
  title: 'Icon',
  decorators: [withKnobs]
}

const colors: IconColor[] = [
  'primary',
  'secondary',
  'disabled'
]

const iconName = select<IconName>('iconName', IconNames, 'home');
const colorSelect = select<IconColor>('color', colors, 'primary');
const colorString = color('color', '#1DA1F2');

export const RegularUse: React.FC = () => (
  <Icon
    iconName={iconName}
    color={colorSelect}
  />
);

export const ColorAsString: React.FC = () => (
  <Icon
    iconName={iconName}
    color={colorString}
  />
);
