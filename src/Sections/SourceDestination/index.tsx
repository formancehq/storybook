import React, { FunctionComponent } from 'react';

import { Box, SxProps, Theme, Tooltip, useTheme } from '@mui/material';
import { get } from 'lodash';

import { Chip } from '../../Chip';
import { ColorVariants } from '../../types';

export type SourceDestinationProps = {
  label: string;
  onClick?: () => void;
  sx?: SxProps<Theme>;
  color?: ColorVariants;
};

export function format(str: string) {
  const maxLength = 30;
  const maxSegments = 5;

  if (str.length <= maxLength) {
    return str;
  }

  const segments: string[] = str.split(':');
  const output: string[] = [];

  // optimisation pass
  const budget = Math.floor(maxLength / maxSegments);
  let free = 0;
  const budgets: {
    key: number;
    segment: string;
    value: number;
    score: number;
  }[] = segments.map((s, i) => {
    const score = s.length > 10 ? 0 : 1;

    if (s.length <= budget) {
      free += budget - s.length;

      return {
        key: i,
        segment: s,
        value: s.length,
        score: score,
      };
    }

    return {
      key: i,
      segment: s,
      value: budget,
      score: score,
    };
  });

  // distribute free budget in multiple passes,
  // segments with highest score get priority,
  // start from the end of the list
  const pass = (): boolean => {
    let missing = false;

    budgets
      .filter((b) => b.score > 0)
      .reverse()
      .forEach((b) => {
        if (free > 0 && b.value < b.segment.length) {
          b.value++;
          free--;
          if (b.value < b.segment.length) {
            missing = true;
          }
        }
      });

    return !missing;
  };

  while (free > 0) {
    if (pass()) {
      break;
    }
  }

  // truncate according to budget for each segment
  segments.forEach((s, i) => {
    output.push(s.substring(0, budgets[i].value));
  });

  return output.join(':');
}

export const SourceDestination: FunctionComponent<SourceDestinationProps> = ({
  label,
  onClick,
  sx,
  color,
}) => {
  if (!label) return null;
  const name = format(label);
  const { palette } = useTheme();

  return (
    <Box
      display="flex"
      alignItems="center"
      component="span"
      sx={{
        '& .MuiButtonBase-root.MuiChip-root:hover': {
          backgroundColor: get(palette, `${color}.bright`),
          color: get(palette, `${color}.darker`),
        },
      }}
    >
      <Tooltip title={label}>
        <Box component="span">
          <Chip
            key={label}
            label={name}
            variant="square"
            onClick={onClick}
            color={color}
            sx={sx}
          />
        </Box>
      </Tooltip>
    </Box>
  );
};
