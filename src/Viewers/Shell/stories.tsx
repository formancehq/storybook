import React, { useState } from 'react';

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
