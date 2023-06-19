import React from 'react';

import { Typography } from '@mui/material';

import { Popover } from '.';

import { LoadingButton } from '../Buttons/LoadingButton';
import { storyDocsParameters } from '../utils';

export default {
  title: 'Design System/Popover',
  component: Popover,
};

export const DefaultPopover = () => (
  <Popover trigger={<LoadingButton content="Open Popover" />}>
    <Typography>Popover content</Typography>
  </Popover>
);

DefaultPopover.storyName = 'Default';
DefaultPopover.parameters = storyDocsParameters;
