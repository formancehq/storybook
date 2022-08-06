import { Box, Typography, useTheme } from '@mui/material';
import React, { FunctionComponent, ReactElement } from 'react';

export type EmptyStateProps = {
  title: string;
  description?: string;
  variant?: 'dark' | 'light';
  children?: ReactElement;
};

export const EmptyState: FunctionComponent<EmptyStateProps> = ({
  title,
  description,
  children,
  variant,
}) => {
  const { palette } = useTheme();
  const variantsMap = {
    light: {
      border: palette.neutral[600],
      title: palette.neutral[800],
      description: palette.neutral[600],
      backgroundColor: palette.neutral[0],
    },
    dark: {
      border: palette.neutral[800],
      title: palette.neutral[200],
      description: palette.neutral[400],
      backgroundColor: palette.neutral[800],
    },
  };
  const color = variant ? variantsMap[variant] : variantsMap.light;

  return (
    <Box
      sx={{
        border: `1px solid ${color.border}`,
        height: '200px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexFlow: 'column',
        backgroundColor: color.backgroundColor,
      }}
    >
      <Typography variant="small" sx={{ color: color.title }}>
        {title}
      </Typography>
      <Typography variant="body1" sx={{ color: color.description }}>
        {description}
      </Typography>
      {children && <Box>{children}</Box>}
    </Box>
  );
};
