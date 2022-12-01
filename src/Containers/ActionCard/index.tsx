import React, { FunctionComponent, ReactElement } from 'react';

import { Box, Typography } from '@mui/material';

export type ActionCardProps = {
  title: string;
  description: string;
  width?: string;
  children: ReactElement;
};

// TODO Bring more props to make it more custom

export const ActionCard: FunctionComponent<ActionCardProps> = ({
  title,
  description,
  width,
  children,
}) => (
  <Box
    sx={{
      width: width || '45%',
      borderRadius: '6px',
      p: '26px',
      background: ({ palette }) => palette.neutral[0],
    }}
  >
    <Typography
      variant="headline"
      sx={{ display: 'flex', alignItems: 'center' }}
    >
      {title}
    </Typography>
    <Typography
      variant="footNote"
      sx={{
        display: 'flex',
        alignItems: 'center',
        color: ({ palette }) => palette.neutral[600],
        mt: '12px',
        mb: '12px',
      }}
    >
      {description}
    </Typography>
    {children}
  </Box>
);
