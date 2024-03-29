import React, { FunctionComponent, ReactElement, ReactNode } from 'react';

import { Clear } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import { Theme } from '@mui/material/styles';
import { SxProps } from '@mui/system';

import { LoadingButton } from '../../Buttons/LoadingButton';

export type PageProps = {
  children: ReactElement;
  id: string;
  title?: string | ReactNode;
  subtitle?: string;
  onClick?: () => void;
  actionLabel?: string;
  actionEvent?: string;
  actionId?: string;
  sx?: SxProps<Theme>;
};

export const Page: FunctionComponent<PageProps> = ({
  children,
  id,
  onClick,
  title,
  subtitle,
  actionLabel,
  actionEvent,
  actionId,
  sx = {},
}) => {
  const header = title || onClick;
  const renderTitle = () => {
    if (typeof title === 'string') {
      return (
        <Typography variant="h1" mr={1} sx={{ overflowWrap: 'anywhere' }}>
          {title}
        </Typography>
      );
    }

    return title;
  };

  return (
    <Box id={id} p="0 24px 24px 24px" sx={{ ...sx }}>
      {header && (
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box
            sx={{
              width: '100%',
            }}
          >
            {renderTitle()}
            {subtitle && (
              <Typography variant="h2" color="primary" mr={1}>
                {subtitle}
              </Typography>
            )}
          </Box>
          {onClick && actionLabel && actionEvent && (
            <Box>
              <LoadingButton
                startIcon={<Clear style={{ transform: 'rotate(-45deg)' }} />}
                onClick={onClick}
                content={actionLabel}
                variant="dark"
                id={actionId}
              />
            </Box>
          )}
        </Box>
      )}
      {children}
    </Box>
  );
};
