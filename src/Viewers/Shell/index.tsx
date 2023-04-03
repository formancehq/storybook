import React, { FunctionComponent, ReactElement } from 'react';

import { ContentCopy } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';

import { LoadingButton } from '../../Buttons/LoadingButton';
import { copyTokenToClipboard } from '../../utils';

export type ShellViewerProps = {
  data?: string;
  copy?: boolean;
  children?: ReactElement;
};

export const ShellViewer: FunctionComponent<ShellViewerProps> = ({
  data,
  copy = true,
  children,
}) => (
  <Box
    sx={{
      background: (theme) => theme.palette.neutral[900],
      color: (theme) => theme.palette.default.bright,
      padding: '16.5px 14px',
      minHeight: '200px',
      borderRadius: '6px',
    }}
  >
    <>
      {data && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: '12px',
            alignSelf: 'center',
          }}
        >
          <Typography variant="money">{data}</Typography>
          {copy && (
            <LoadingButton
              id="shell-copy"
              variant="dark"
              onClick={() => copyTokenToClipboard(data)}
              startIcon={<ContentCopy />}
            />
          )}
        </Box>
      )}
      {children && children}
    </>
  </Box>
);
