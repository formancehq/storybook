import React, { FunctionComponent } from 'react';

import {
  Chip as MuiChip,
  ChipProps as MuiChipProps,
  useTheme,
} from '@mui/material';

import { ColorVariants } from '../types';

export type ChipProps = Omit<MuiChipProps, 'color'> & {
  color?: ColorVariants;
};

export const Chip: FunctionComponent<ChipProps> = ({ color, sx, ...props }) => {
  const { palette, typography } = useTheme();

  if (!props.label) return null;

  const backgroundColor = color ? palette[color].light : palette.neutral[50];
  const fontColor = color ? palette[color].darker : palette.neutral[900];

  return (
    <MuiChip
      component="span"
      sx={{
        backgroundColor,
        ...typography.body1,
        color: fontColor,
        '& .MuiSvgIcon-root': {
          color: fontColor,
        },
        ':hover': {
          cursor: props.onClick ? 'pointer' : 'initial',
        },
        ...sx,
      }}
      {...props}
    />
  );
};
