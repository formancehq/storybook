import React from 'react';

import { Typography } from '@mui/material';

import { LoadingButton } from '../../Buttons/LoadingButton';
import { storyDocsParameters } from '../../utils';

import { CopyPasteTooltip } from './index';

export default {
  title: 'Design System/Sections/CopyPasteTooltip',
  component: CopyPasteTooltip,
};

export const DefaultCopyPasteTooltip = () => (
  <CopyPasteTooltip value="FOO" tooltipMessage="Copied!">
    <Typography>Copy me !</Typography>
  </CopyPasteTooltip>
);
DefaultCopyPasteTooltip.storyName = 'Default';
DefaultCopyPasteTooltip.parameters = storyDocsParameters;

export const ButtonCopyPasteTooltip = () => (
  <CopyPasteTooltip value="FOO" tooltipMessage="Copied!">
    <LoadingButton content="Copy me" />
  </CopyPasteTooltip>
);
ButtonCopyPasteTooltip.storyName = 'Button';
ButtonCopyPasteTooltip.parameters = storyDocsParameters;
