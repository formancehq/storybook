import React from 'react';

import { storyDocsParameters } from '../../utils';

import { TitleWithBar } from './index';

export default {
  title: 'Design System/Sections/TitleWithBar',
  component: TitleWithBar,
};

export const SimpleUsage = () => (
  <TitleWithBar title="Title With Bar" borderColor="272822" />
);
SimpleUsage.storyName = 'SimpleUsage';
SimpleUsage.parameters = storyDocsParameters;
