import { Box, Typography } from '@mui/material';
import React, { FunctionComponent, ReactElement } from 'react';

export type OnBoardingProps = {
  title: string;
  description: string;
  width?: string;
  children: ReactElement;
};

// TODO Bring more props to make it more custom

export const OnBoarding: FunctionComponent<OnBoardingProps> = ({
  title,
  description,
  width,
  children,
}) => (
  <Box
    sx={{
      width: width || '45%',
      p: '24px',
      border: ({ palette }) => `1px ${palette.neutral[200]} solid`,
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
