import { Divider, Typography } from '@mui/material';
import React, { FunctionComponent } from 'react';

export type TitleWithBarProps = {
  title: string;
  borderColor?: string;
};

export const TitleWithBar: FunctionComponent<TitleWithBarProps> = ({
  title,
  borderColor,
}) => (
  <Typography variant="h1" sx={{ display: 'flex', alignItems: 'center' }}>
    {title}
    <Divider
      sx={{
        width: '30px',
        border: '2px solid',
        marginLeft: '20px',
        borderColor: ({ palette }) => borderColor || palette.neutral[300],
      }}
    />
  </Typography>
);
