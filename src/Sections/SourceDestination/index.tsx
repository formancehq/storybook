import React, { FunctionComponent } from 'react';

import { Box, SxProps, Theme, Tooltip } from '@mui/material';

import { Chip } from '../../Chip';
import { ColorVariants } from '../../types';

export type SourceDestinationProps = {
  label: string;
  ellipse?: boolean;
  onClick?: () => void;
  sx?: SxProps<Theme>;
  color?: ColorVariants;
};

export const SourceDestination: FunctionComponent<SourceDestinationProps> = ({
  label,
  ellipse = true,
  onClick,
  sx,
  color,
}) => {
  if (!label) return null;
  const length = label.length;
  const name =
    ellipse && length > 20
      ? `${label.substring(0, Math.floor((length * 15) / 100))}...:${
          label.split(':')[1]
        }`
      : label;

  return (
    <Box display="flex" alignItems="center" component="span">
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
