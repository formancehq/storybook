import React from 'react';

import { storyDocsParameters } from '../../utils';

import { SourceDestination } from './index';

export default {
  title: 'Design System/Sections/SourceDestination',
  component: SourceDestination,
};

export const SourceDestinationSection = () => (
  <SourceDestination label="world" />
);

SourceDestinationSection.storyName = 'Default';
SourceDestinationSection.parameters = storyDocsParameters;

export const SourceDestinationSectionBlue = () => (
  <SourceDestination label="world" color="blue" onClick={() => null} />
);

SourceDestinationSectionBlue.storyName = 'Blue';
SourceDestinationSectionBlue.parameters = storyDocsParameters;
export const SourceDestinationSectionGreen = () => (
  <SourceDestination label="world" color="green" onClick={() => null} />
);

SourceDestinationSectionGreen.storyName = 'Green';
SourceDestinationSectionGreen.parameters = storyDocsParameters;
