import React from 'react';

import { Topic } from '@mui/icons-material';

import { storyDocsParameters } from '../../utils';

import { StatsCard } from './index';

export default {
  title: 'Design System/Dataviz/Card',
  component: StatsCard,
};

export const GreenStatsCard = () => (
  <StatsCard
    icon={<Topic />}
    title1="Transaction volume"
    value1="69,453.12 $"
    title2="Account volume"
    value2="69,453.12 $"
    chipValue="main-production"
  />
);
GreenStatsCard.storyName = 'Green';
GreenStatsCard.parameters = storyDocsParameters;

export const BrownStatsCard = () => (
  <StatsCard
    variant="brown"
    icon={<Topic />}
    title1="Transaction volume"
    value1="69,453.12 $"
    title2="Account volume"
    value2="69,453.12 $"
    chipValue="+24%"
  />
);
BrownStatsCard.storyName = 'Brown';
BrownStatsCard.parameters = storyDocsParameters;

export const BlueStatsCard = () => (
  <StatsCard
    icon={<Topic />}
    variant="blue"
    title1="Transaction volume"
    value1="69,453.12 $"
    title2="Account volume"
    value2="69,453.12 $"
    chipValue="main-production"
  />
);
BlueStatsCard.storyName = 'Blue';
BlueStatsCard.parameters = storyDocsParameters;

export const VioletStatsCard = () => (
  <StatsCard
    icon={<Topic />}
    variant="violet"
    title1="Transaction volume"
    value1="69,453.12 $"
    title2="Account volume"
    value2="69,453.12 $"
    chipValue="+24%"
  />
);
VioletStatsCard.storyName = 'Violet';
VioletStatsCard.parameters = storyDocsParameters;

export const StatsCardWithoutChip = () => (
  <StatsCard
    icon={<Topic />}
    variant="violet"
    title1="Transaction volume"
    value1="69,453.12 $"
    title2="Account volume"
    value2="69,453.12 $"
  />
);
StatsCardWithoutChip.storyName = 'Without chip';
StatsCardWithoutChip.parameters = storyDocsParameters;
