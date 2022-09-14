import React from 'react';

import { theme } from '../../muiTheme';
import { storyDocsParameters } from '../../utils';

import { Date } from './index';

export default {
  title: 'Design System/Sections/Date',
  component: Date,
};

export const DateWithMessageAndVariant = () => (
  <div>
    <Date timestamp="123456789" message="Created on" variant="h1" />
  </div>
);
DateWithMessageAndVariant.storyName = 'With message and variant';
DateWithMessageAndVariant.parameters = storyDocsParameters;

export const DefaultDateSection = () => (
  <div>
    <Date timestamp="123456789" />
  </div>
);
DefaultDateSection.storyName = 'Default';
DefaultDateSection.parameters = storyDocsParameters;

export const DateWithColorAndFormat = () => (
  <div>
    <Date
      timestamp="123456789"
      format="DD/MM/YYYY"
      color={theme.palette.violet.bright}
    />
  </div>
);
DateWithColorAndFormat.storyName = 'With color and format';
DateWithColorAndFormat.parameters = storyDocsParameters;
