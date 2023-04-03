import React, { useState } from 'react';

import { Box, List, ListItem, Typography } from '@mui/material';

import { LoadingButton } from '../../Buttons/LoadingButton';
import { Modal } from '../../Modal';
import { storyDocsParameters } from '../../utils';

import { ShellViewer } from './index';

export default {
  title: 'Design System/Viewers/Shell',
  component: ShellViewer,
};

export const Default = () => (
  <ShellViewer data="exception error id undefined" />
);

Default.storyName = 'Default';
Default.parameters = storyDocsParameters;

export const ShellModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <LoadingButton content="Open modal" onClick={handleOpen} variant="dark" />
      <Modal open={open} onClose={handleClose} title="See logs">
        <ShellViewer data="exception error id undefined" />
      </Modal>
    </>
  );
};

ShellModal.storyName = 'Modal';
ShellModal.parameters = storyDocsParameters;

export const ShellWithChildren = () => (
  <ShellViewer>
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Typography variant="money">
        Send 14690 EUR/2 from account world to account
        payment:e90f61a4_37b0_4878_9903_bbaabb1e16cd (ledger
        orchestration-000-internal)
      </Typography>
      <Typography ml={1} variant="money" color="secondary">
        Created transaction: 0
      </Typography>
      <Typography ml={1} variant="money" color="secondary">
        Reference: payment:e90f61a4_37b0_4878_9903_bbaabb1e16cd
      </Typography>
    </Box>
  </ShellViewer>
);

ShellWithChildren.storyName = 'Children';
ShellWithChildren.parameters = storyDocsParameters;

export const ShellWithoutButton = () => (
  <ShellViewer data="exception error id undefined" copy={false} />
);

ShellWithoutButton.storyName = 'Without copy';
ShellWithoutButton.parameters = storyDocsParameters;
