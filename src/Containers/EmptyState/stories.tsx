import React from 'react';

import { Box } from '@mui/material';
import { noop } from 'lodash';

import { LoadingButton } from '../../Buttons/LoadingButton';
import { storyDocsParameters } from '../../utils';

import { EmptyState } from './index';

export default {
  title: 'Design System/Containers/EmptyState',
  component: EmptyState,
};

export const LightEmptyState = () => (
  <EmptyState
    title="Choose a ledger to get started"
    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  />
);
LightEmptyState.storyName = 'Light';
LightEmptyState.parameters = storyDocsParameters;

export const LightWithBorderEmptyState = () => (
  <EmptyState
    border
    title="Choose a ledger to get started"
    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  />
);
LightWithBorderEmptyState.storyName = 'Light with border';
LightWithBorderEmptyState.parameters = storyDocsParameters;

export const DarkEmptyState = () => (
  <EmptyState
    variant="dark"
    title="Choose a ledger to get started"
    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  />
);
DarkEmptyState.storyName = 'Dark';
DarkEmptyState.parameters = storyDocsParameters;

export const DarkWithChildrenEmptyState = () => (
  <EmptyState
    variant="dark"
    title="There is nothing here, yet."
    description="Connect your tools, set up tasks and start right away. As a guide you can see the set-up section above."
  >
    <Box mt={3}>
      <LoadingButton
        content="Choose my ledger"
        variant="primary"
        onClick={() => noop()}
      />
    </Box>
  </EmptyState>
);
DarkWithChildrenEmptyState.storyName = 'Dark with children';
DarkWithChildrenEmptyState.parameters = storyDocsParameters;
