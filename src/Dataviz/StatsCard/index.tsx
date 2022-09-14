import React, { FunctionComponent, ReactElement } from 'react';

import { Box, Typography, useTheme } from '@mui/material';

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
};

export const StatsCard: FunctionComponent<StatsCardProps> = ({
  icon,
  variant,
  chipValue,
  title2,
  title1,
  value2,
  value1,
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

  const color = variant ? variantsMap[variant] : variantsMap.green;

  return (
    <Box
      p={4}
      sx={{
        width: 258,
        height: 212,
        backgroundColor: palette.neutral[800],
        borderRadius: '4px',
      }}
      display="flex"
      flexDirection="column"
    >
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box
          sx={{ width: 40, height: 40, backgroundColor: color }}
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
        {chipValue && <Chip label={chipValue} color={variant} />}
      </Box>
      <Box mt={3}>
        <Typography
          sx={{ textTransform: 'uppercase', color: palette.neutral[400] }}
        >
          {title1}
        </Typography>
        <Typography variant="h1" sx={{ color: palette.neutral[0] }}>
          {value1}
        </Typography>
      </Box>
      <Box mt={3}>
        <Typography
          sx={{ textTransform: 'uppercase', color: palette.neutral[400] }}
        >
          {title2}
        </Typography>
        <Typography variant="h1" sx={{ color: palette.neutral[0] }}>
          {value2}
        </Typography>
      </Box>
    </Box>
  );
};
