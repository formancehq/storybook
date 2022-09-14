import React from 'react';

import { theme } from '../../muiTheme';
import { storyDocsParameters } from '../../utils';

import { DividerWithSpace } from './index';

export default {
  title: 'Design System/Sections/Divider',
  component: DividerWithSpace,
};

export const DividerWithColorAndSpaces = () => (
  <DividerWithSpace
    borderColor={theme.palette.violet.darker}
    pt="40px"
    mb="40px"
  />
);

DividerWithColorAndSpaces.storyName = 'With color and spaces';
DividerWithColorAndSpaces.parameters = storyDocsParameters;
