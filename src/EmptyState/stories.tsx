import React from 'react';
import { EmptyState } from './index';

export default {
  title: 'Design System/Containers/EmptyState',
  component: EmptyState,
};

export const DefaultEmptyState = () => (
  <EmptyState
    title="Choose a ledger to get started"
    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  />
);
DefaultEmptyState.storyName = 'Default';
