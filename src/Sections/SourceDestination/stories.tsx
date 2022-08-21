import React from 'react';
import { SourceDestination } from './index';
import { storyDocsParameters } from '../../utils';

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
  <SourceDestination label="world" color="blue" />
);

SourceDestinationSectionBlue.storyName = 'Blue';
SourceDestinationSectionBlue.parameters = storyDocsParameters;
