import React from 'react';
import { SectionWrapper } from './index';
import { Box } from '@mui/material';
import { EmptyState } from '../EmptyState';

export default {
  title: 'Design System/Sections/Wrapper',
  component: SectionWrapper,
};

export const DefaultSectionWrapper = () => (
  <Box>
    <SectionWrapper title="Title A">
      <EmptyState title="A" description="Aa" />
    </SectionWrapper>
    <SectionWrapper title="Title B">
      <EmptyState title="B" description="Bb" />
    </SectionWrapper>
  </Box>
);

DefaultSectionWrapper.storyName = 'Default';
