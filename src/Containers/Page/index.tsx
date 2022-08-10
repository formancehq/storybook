import { Clear } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import React, { FunctionComponent, ReactElement, ReactNode } from 'react';
import { SxProps } from '@mui/system';
import { Theme } from '@mui/material/styles';
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
  const renderTitle = () => {
    if (typeof title === 'string') {
      return (
        <Typography variant="h1" mr={1}>
          {title}
        </Typography>
      );
    }

    return title;
  };

  return (
    <Box id={id} pt={7} pb={7} pr={20} pl={20} sx={{ ...sx }}>
      <Box
        pl={3}
        pr={3}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box display="flex">
          {renderTitle()}
          {subtitle && (
            <Typography variant="h2" color="primary" mr={1}>
              {subtitle}
            </Typography>
          )}
        </Box>
        <Box>
          {onClick && actionLabel && actionEvent && (
            <LoadingButton
              startIcon={<Clear style={{ transform: 'rotate(-45deg)' }} />}
              onClick={onClick}
              content={actionLabel}
              variant="dark"
              id={actionId}
            />
          )}
        </Box>
      </Box>
      <Box pl={3} pr={3} mt={4} mb={4}>
        {children}
      </Box>
    </Box>
  );
};
