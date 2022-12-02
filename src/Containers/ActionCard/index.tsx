import React, { FunctionComponent, ReactElement } from 'react';

import { Paper, Typography } from '@mui/material';

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
  <Paper
    elevation={0}
    variant="outlined"
    sx={{
      width: width || '45%',
      p: '26px',
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
  </Paper>
);
