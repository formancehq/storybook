import React, { FunctionComponent } from 'react';

import { ContentCopy } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';

import { LoadingButton } from '../../Buttons/LoadingButton';
import { copyTokenToClipboard } from '../../utils';

export type ShellViewerProps = {
  data: string;
};

export const ShellViewer: FunctionComponent<ShellViewerProps> = ({ data }) => (
  <Box
    sx={{
      background: (theme) => theme.palette.neutral[900],
      color: (theme) => theme.palette.default.bright,
      padding: '16.5px 14px',
      minHeight: '200px',
      display: 'flex',
      borderRadius: '6px',
      justifyContent: 'space-between',
      gap: '12px',
      alignSelf: 'center',
    }}
  >
    <Typography variant="money">{data}</Typography>
    <LoadingButton
      id="shell-copy"
      variant="dark"
      onClick={() => copyTokenToClipboard(data)}
      startIcon={<ContentCopy />}
    />
  </Box>
);
