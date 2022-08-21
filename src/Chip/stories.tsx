import React from 'react';
import { Chip } from './index';
import { storyDocsParameters } from '../utils';

export default {
  title: 'Design System/Chip',
  component: Chip,
};

export const SquareRedChip = () => (
  <Chip label="label" variant="square" color="red" />
);
SquareRedChip.storyName = 'Square red';
SquareRedChip.parameters = storyDocsParameters;

export const DefaultBlueChip = () => <Chip label="label" color="blue" />;
DefaultBlueChip.storyName = 'Default Blue';
DefaultBlueChip.parameters = storyDocsParameters;

export const Default = () => <Chip label="label" />;
DefaultBlueChip.storyName = 'Default';
DefaultBlueChip.parameters = storyDocsParameters;
