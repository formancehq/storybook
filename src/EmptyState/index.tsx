import { Box, Typography } from '@mui/material';
import React, { FunctionComponent } from 'react';

export type EmptyStateProps = {
  title: string;
  description: string;
};

export const EmptyState: FunctionComponent<EmptyStateProps> = ({
  title,
  description,
}) => (
  <Box
    sx={{
      border: ({ palette }) => `1px solid ${palette.neutral[200]}`,
      height: '200px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexFlow: 'column',
    }}
  >
    <Typography variant="small">{title}</Typography>
    <Typography
      variant="body1"
      sx={{ color: ({ palette }) => palette.neutral[600] }}
    >
      {description}
    </Typography>
  </Box>
);
