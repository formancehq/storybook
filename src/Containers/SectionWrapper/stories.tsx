import React from 'react';

import { Add } from '@mui/icons-material';
import { Box } from '@mui/material';

import { DefaultTable, EmptyTable } from '../../Table/stories';
import { storyDocsParameters } from '../../utils';

import { SectionWrapper } from './index';

export default {
  title: 'Design System/Containers/SectionWrapper',
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

export const SectionWrapperWithActionAndTitle = () => (
  <Box>
    <SectionWrapper
      title="Title A"
      button={{ content: 'Action', startIcon: <Add />, variant: 'dark' }}
    >
      <EmptyTable />
    </SectionWrapper>
  </Box>
);

SectionWrapperWithActionAndTitle.storyName = 'With action and title';
SectionWrapperWithActionAndTitle.parameters = storyDocsParameters;

export const SectionWrapperNoTitleNoAction = () => (
  <Box>
    <SectionWrapper>
      <EmptyTable />
    </SectionWrapper>
  </Box>
);

SectionWrapperNoTitleNoAction.storyName = 'Without action and title';
SectionWrapperNoTitleNoAction.parameters = storyDocsParameters;

export const SectionWrapperWithOnlyAction = () => (
  <Box>
    <SectionWrapper
      button={{ content: 'Action', startIcon: <Add />, variant: 'dark' }}
    >
      <EmptyTable />
    </SectionWrapper>
  </Box>
);

SectionWrapperWithOnlyAction.storyName = 'With action without title';
SectionWrapperWithOnlyAction.parameters = storyDocsParameters;
