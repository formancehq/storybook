import React from 'react';
import { SourceDestination } from './index';

export default {
  title: 'Design System/Sections/SourceDestination',
  component: SourceDestination,
};

export const SourceDestinationSection = () => (
  <SourceDestination label="world" />
);

SourceDestinationSection.storyName = 'Default';
