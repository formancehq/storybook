import React, { FunctionComponent } from 'react';

import { Divider, Typography } from '@mui/material';

export type TitleWithBarProps = {
  title: string;
  titleColor?: string;
  borderColor?: string;
};

export const TitleWithBar: FunctionComponent<TitleWithBarProps> = ({
  title,
  titleColor,
  borderColor,
}) => (
  <Typography
    variant="h1"
    sx={{ display: 'flex', alignItems: 'center', color: titleColor }}
  >
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
