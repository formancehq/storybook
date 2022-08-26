import React from 'react';
import { SectionWrapper } from './index';
import { Box } from '@mui/material';
import { storyDocsParameters } from '../../utils';
import { DefaultTable, EmptyTable } from '../../Table/stories';

export default {
  title: 'Design System/Containers/Wrapper',
  component: SectionWrapper,
};

export const DefaultSectionWrapper = () => (
  <Box>
    <SectionWrapper title="Title A">
      <EmptyTable />
    </SectionWrapper>
    <SectionWrapper title="Title B">
      <DefaultTable />
    </SectionWrapper>
  </Box>
);

DefaultSectionWrapper.storyName = 'Default';
DefaultSectionWrapper.parameters = storyDocsParameters;
