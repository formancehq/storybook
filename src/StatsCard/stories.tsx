import React from 'react';
import { StatsCard } from './index';
import { Topic } from '@mui/icons-material';

export default {
  title: 'Design System/Stats/Card',
  component: StatsCard,
};

export const GreenStatsCard = () => (
  <StatsCard
    icon={<Topic />}
    title="Transaction volume"
    mainValue="69,453.12 $"
    chipValue="+24%"
  />
);
GreenStatsCard.storyName = 'Green';

export const BrownStatsCard = () => (
  <StatsCard
    icon={<Topic />}
    variant="brown"
    title="Transaction volume"
    mainValue="69,453.12 $"
    chipValue="+24%"
  />
);
BrownStatsCard.storyName = 'Brown';

export const BlueStatsCard = () => (
  <StatsCard
    icon={<Topic />}
    variant="blue"
    title="Transaction volume"
    mainValue="69,453.12 $"
    chipValue="+24%"
  />
);
BlueStatsCard.storyName = 'Blue';

export const VioletStatsCard = () => (
  <StatsCard
    icon={<Topic />}
    variant="violet"
    title="Transaction volume"
    mainValue="69,453.12 $"
    chipValue="+24%"
  />
);
VioletStatsCard.storyName = 'Violet';

export const StatsCardWithoutChip = () => (
  <StatsCard
    icon={<Topic />}
    variant="violet"
    title="Transaction volume"
    mainValue="69,453.12 $"
  />
);
StatsCardWithoutChip.storyName = 'Without chip';
