import React from 'react';

import { LoadingButton } from '../../Buttons/LoadingButton';
import { storyDocsParameters } from '../../utils';

import { Snackbar } from './index';

export default {
  title: 'Design System/Alerts/Snackbar',
  component: Snackbar,
};

export const DefaultSnackbar = () => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <LoadingButton
        content="Open snackbar"
        onClick={handleClick}
        variant="stroke"
      />
      <Snackbar
        open={open}
        onClose={handleClose}
        autoHideDuration={6000}
        message="Hello guys !"
      />
    </>
  );
};

DefaultSnackbar.storyName = 'Default';
DefaultSnackbar.parameters = storyDocsParameters;
