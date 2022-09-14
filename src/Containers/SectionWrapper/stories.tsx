import React from 'react';

import { Box } from '@mui/material';

import { DefaultTable, EmptyTable } from '../../Table/stories';
import { storyDocsParameters } from '../../utils';

import { SectionWrapper } from './index';

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
