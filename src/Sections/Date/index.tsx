import { Tooltip, Typography, TypographyVariant } from '@mui/material';
import React, { FunctionComponent } from 'react';
import dayjs from 'dayjs';

export type DateProps = {
  timestamp: string | Date;
  format?: string;
  message?: string;
  color?: string;
  variant?: TypographyVariant;
  tooltip?: boolean;
};

export const Date: FunctionComponent<DateProps> = ({
  timestamp,
  format = 'ddd MMM D YYYY',
  message = '',
  color,
  variant = 'body1',
  tooltip = true,
}) => (
  <>
    {tooltip && (
      <Tooltip title={`${timestamp}`} placement="top">
        <Typography
          variant={variant}
          sx={{ color: ({ palette }) => color || palette.neutral[600] }}
        >{`${message ? `${message} ` : ''}${dayjs(timestamp).format(
          format
        )}`}</Typography>
      </Tooltip>
    )}
  </>
);
