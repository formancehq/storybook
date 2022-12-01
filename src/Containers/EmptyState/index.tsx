import React, { FunctionComponent, ReactElement } from 'react';

import { Theme } from '@emotion/react';
import { Box, SxProps, Typography, useTheme } from '@mui/material';

export type EmptyStateProps = {
  title: string;
  description?: string;
  variant?: 'dark' | 'light';
  children?: ReactElement;
  sx?: SxProps<Theme>;
};

export const Placeholder: FunctionComponent = () => (
  <Box
    sx={{
      border: ({ palette }) => `1px solid ${palette.neutral[200]}`,
      width: 200,
      height: 50,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 1,
      p: '8px 16px',
      borderRadius: '6px',
    }}
  >
    <Box
      sx={{
        background: ({ palette }) => palette.neutral[300],
        width: 30,
        height: 30,
        borderRadius: '6px',
      }}
    />
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          background: ({ palette }) => palette.neutral[400],
          width: 80,
          height: 8,
          borderRadius: '2px',
        }}
      />
      <Box
        sx={{
          mt: 1,
          background: ({ palette }) => palette.neutral[300],
          width: 150,
          height: 8,
          borderRadius: '2px',
        }}
      />
    </Box>
  </Box>
);

export const EmptyState: FunctionComponent<EmptyStateProps> = ({
  title,
  description,
  children,
  variant,
  sx,
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
        borderRadius: '6px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        flexFlow: 'column',
        backgroundColor: color.backgroundColor,
        p: 6,
        ...sx,
      }}
    >
      <Box>
        <Box ml={4} mb={2}>
          <Placeholder />
        </Box>
        <Placeholder />
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
