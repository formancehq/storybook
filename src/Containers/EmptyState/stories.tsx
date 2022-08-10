import React from 'react';
import { EmptyState } from './index';
import { LoadingButton } from '../../Buttons/LoadingButton';
import { noop } from '../../utils';
import { Box } from '@mui/material';

export default {
  title: 'Design System/Containers/EmptyState',
  component: EmptyState,
};

export const LighttEmptyState = () => (
  <EmptyState
    title="Choose a ledger to get started"
    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  />
);
LighttEmptyState.storyName = 'Light';

export const DarkEmptyState = () => (
  <EmptyState
    variant="dark"
    title="Choose a ledger to get started"
    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  />
);
DarkEmptyState.storyName = 'Dark';

export const DarkWithChildrenEmptyState = () => (
  <EmptyState
    variant="dark"
    title="Choose a ledger to get started"
    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
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
