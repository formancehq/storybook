import React, { FunctionComponent, ReactElement } from 'react';

import { Box, SxProps, Typography, useTheme } from '@mui/material';
import { get } from 'lodash';

import { Chip } from '../../Chip';
import { ColorVariants } from '../../types';

export type StatsCardProps = {
  variant?: ColorVariants;
  icon: ReactElement;
  chipValue?: string;
  title1: string;
  title2: string;
  value1: string;
  value2: string;
  type?: 'light' | 'dark';
  sx?: SxProps;
};

export const StatsCard: FunctionComponent<StatsCardProps> = ({
  icon,
  variant,
  chipValue,
  title2,
  title1,
  value2,
  value1,
  type = 'dark',
  sx,
}) => {
  const { palette } = useTheme();
  const variantsMap = {
    green: palette.green.bright,
    brown: palette.brown.bright,
    blue: palette.blue.bright,
    violet: palette.violet.bright,
    red: palette.red.bright,
    yellow: palette.yellow.bright,
    default: palette.default.bright,
  };

  const color = get(
    variantsMap,
    variant ? variant : 'green',
    variantsMap.green
  );

  return (
    <Box
      p={4}
      sx={{
        width: 258,
        height: 212,
        border: type === 'dark' ? 'none' : `2px solid ${palette.neutral[100]}`,
        backgroundColor:
          type === 'dark' ? palette.neutral[800] : palette.neutral[0],
        borderRadius: '6px',
        ...sx,
      }}
      display="flex"
      flexDirection="column"
    >
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box
          sx={{
            width: 40,
            height: 40,
            backgroundColor: color,
            borderRadius: '6px',
          }}
          display="flex"
          justifyContent="center"
        >
          <Box
            sx={{ color: palette.neutral[900] }}
            display="flex"
            alignSelf="center"
          >
            {icon}
          </Box>
        </Box>
        {chipValue && (
          <Chip label={chipValue} color={variant} variant="square" />
        )}
      </Box>
      <Box mt={3}>
        <Typography
          sx={{ textTransform: 'uppercase', color: palette.neutral[400] }}
        >
          {title1}
        </Typography>
        <Typography
          variant="h1"
          sx={{
            color: type === 'dark' ? palette.neutral[0] : palette.neutral[900],
          }}
        >
          {value1}
        </Typography>
      </Box>
      <Box mt={3}>
        <Typography
          sx={{ textTransform: 'uppercase', color: palette.neutral[400] }}
        >
          {title2}
        </Typography>
        <Typography
          variant="h1"
          sx={{
            color: type === 'dark' ? palette.neutral[0] : palette.neutral[900],
          }}
        >
          {value2}
        </Typography>
      </Box>
    </Box>
  );
};
