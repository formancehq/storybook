import React from 'react';

import { Typography } from '@mui/material';

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
