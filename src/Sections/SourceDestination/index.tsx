import { Box, Chip, SxProps, Theme, Tooltip } from '@mui/material';
import React, { FunctionComponent } from 'react';

export type SourceDestinationProps = {
  label: string;
  ellipse: boolean;
  onClick?: () => void;
  sx?: SxProps<Theme>;
};

export const SourceDestination: FunctionComponent<SourceDestinationProps> = ({
  label,
  ellipse = true,
  onClick,
  sx,
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
    <Box display="flex" alignItems="center">
      <Tooltip title={label}>
        <Chip
          key={label}
          label={name}
          variant="square"
          onClick={onClick}
          sx={sx}
        />
      </Tooltip>
    </Box>
  );
};
