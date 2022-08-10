import { Tooltip, Typography } from '@mui/material';
import React, { FunctionComponent } from 'react';
import dayjs from 'dayjs';

export type DateProps = {
  timestamp: string | Date;
  format?: string;
  message?: string;
};

export const Date: FunctionComponent<DateProps> = ({
  timestamp,
  format = 'ddd MMM D YYYY',
  message = '',
}) => (
  <Tooltip title={`${timestamp}`} placement="top">
    <Typography sx={{ color: ({ palette }) => palette.neutral[600] }}>{`${
      message ? `${message} ` : ''
    }${dayjs(timestamp).format(format)}`}</Typography>
  </Tooltip>
);
