import React, { FunctionComponent } from 'react';

import {
  Snackbar as MuiSnackbar,
  SnackbarProps as MuiSnackbarProps,
  useTheme,
} from '@mui/material';

export type SnackbarProps = MuiSnackbarProps;

export const Snackbar: FunctionComponent<SnackbarProps> = (props) => {
  const { typography } = useTheme();

  return (
    <MuiSnackbar
      {...props}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      sx={{
        '.MuiSnackbarContent-message': {
          ...typography.body1,
        },
      }}
      autoHideDuration={6000}
    />
  );
};
