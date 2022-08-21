import { Box, Typography, useTheme } from '@mui/material';
import React, { FunctionComponent, ReactElement } from 'react';
import { Chip } from '../../Chip';
import { ColorVariants } from '../../types';

export type StatsCardProps = {
  variant?: ColorVariants;
  icon: ReactElement;
  chipValue?: string;
  title: string;
  mainValue: string;
};

export const StatsCard: FunctionComponent<StatsCardProps> = ({
  icon,
  variant,
  chipValue,
  mainValue,
  title,
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
      sx={{ width: 258, height: 212, backgroundColor: palette.neutral[800] }}
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
        {chipValue && (
          <Chip
            label={chipValue}
            color={variant}
            sx={{ border: `1px solid ${color}`, color }}
          />
        )}
      </Box>
      <Box mt={8}>
        <Typography
          sx={{ textTransform: 'uppercase', color: palette.neutral[400] }}
        >
          {title}
        </Typography>
        <Typography variant="large" sx={{ color: palette.neutral[0] }}>
          {mainValue}
        </Typography>
      </Box>
    </Box>
  );
};
