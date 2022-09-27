import React, { FunctionComponent } from 'react';

import { Box, Typography } from '@mui/material';

type ConfirmationProps = {
  title: string;
  message?: React.ReactNode;
};

export const Confirmation: FunctionComponent<ConfirmationProps> = ({
  title,
  message,
}) => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'column',
    }}
  >
    <Typography variant="body2">{title}</Typography>
    {message}
  </Box>
);
