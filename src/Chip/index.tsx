import {
  Chip as MuiChip,
  ChipProps as MuiChipProps,
  useTheme,
} from '@mui/material';
import React, { FunctionComponent } from 'react';
import { ColorVariants } from '../types';

export type ChipProps = Omit<MuiChipProps, 'color'> & {
  color?: ColorVariants;
};

export const Chip: FunctionComponent<ChipProps> = ({
  label,
  variant,
  color,
}) => {
  const { palette } = useTheme();

  const backgroundColor = color ? palette[color].bright : palette.neutral[50];
  const fontColor = color ? palette[color].darker : palette.neutral[900];

  return (
    <MuiChip
      component="span"
      label={label}
      variant={variant}
      sx={{
        backgroundColor,
        color: fontColor,
      }}
    />
  );
};
