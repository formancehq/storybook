import React from 'react';
import { SourceDestination } from './index';

export default {
  title: 'Design System/Sections/SourceDestination',
  component: SourceDestination,
};

export const SourceDestinationSection = () => (
  <div>
    <SourceDestination label="world" />
  </div>
);

SourceDestinationSection.storyName = 'Default';
