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
      border: palette.neutral[200],
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
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        flexFlow: 'column',
        backgroundColor: color.backgroundColor,
        p: 6,
      }}
    >
      <Box>
        <img src="/images/emptyState2.svg" alt="my image" />
      </Box>
      <Typography variant="h2" sx={{ color: color.title }} mt={4}>
        {title}
      </Typography>
      <Typography variant="body1" sx={{ color: color.description, width: 530 }}>
        {description}
      </Typography>
      {children && <Box mt={2}>{children}</Box>}
    </Box>
  );
};
