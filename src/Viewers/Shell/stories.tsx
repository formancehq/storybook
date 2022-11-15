import React from 'react';

import { storyDocsParameters } from '../../utils';

import { ShellViewer } from './index';

export default {
  title: 'Design System/Viewers/Shell',
  component: ShellViewer,
};

export const Default = () => (
  <ShellViewer data="exception error id unedfined" />
);

Default.storyName = 'Default';
Default.parameters = storyDocsParameters;
