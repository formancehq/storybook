import React from 'react';

import { SouthEast } from '@mui/icons-material';

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

export const DefaultChip = () => <Chip label="label" />;
DefaultChip.storyName = 'Default';
DefaultChip.parameters = storyDocsParameters;

export const UndefinedChip = () => <Chip label={undefined} />;
UndefinedChip.storyName = 'Undefined';
UndefinedChip.parameters = storyDocsParameters;

export const IconChipClickable = () => (
  <Chip
    label="label"
    icon={<SouthEast />}
    color="brown"
    variant="square"
    onClick={() => null}
  />
);
IconChipClickable.storyName = 'Clickable with icon';
IconChipClickable.parameters = storyDocsParameters;
