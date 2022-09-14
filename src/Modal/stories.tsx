import React, { useState } from 'react';

import { Box } from '@mui/material';

import { Modal } from './index';

import { LoadingButton } from '../Buttons/LoadingButton';
import { TextField } from '../Forms/TextField';
import { storyDocsParameters } from '../utils';

export default {
  title: 'Design System/Modal',
  component: Modal,
};

const Form = () => (
  <Box>
    <TextField
      name="firstname"
      label="Firstname"
      onChange={(e: any) => e}
      placeholder="Jean"
    />
    <TextField name="lastname" label="Lastname" fullWidth />
  </Box>
);

export const DefaultModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <LoadingButton content="Open modal" onClick={handleOpen} variant="dark" />
      <Modal open={open} onClose={handleClose} title="Update foo">
        <Form />
      </Modal>
    </>
  );
};
DefaultModal.storyName = 'Default';
DefaultModal.parameters = storyDocsParameters;

export const ModalWithFooter = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <LoadingButton content="Open modal" onClick={handleOpen} variant="dark" />
      <Modal
        open={open}
        onClose={handleClose}
        title="Update foo"
        actions={{
          cancel: {
            onClick: handleClose,
            label: 'Cancel',
          },
          save: {
            onClick: () => null,
            label: 'Save',
          },
        }}
      >
        <Form />
      </Modal>
    </>
  );
};
ModalWithFooter.storyName = 'With actions';
ModalWithFooter.parameters = storyDocsParameters;

export const ModalWithDisabledSaveButton = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <LoadingButton content="Open modal" onClick={handleOpen} variant="dark" />
      <Modal
        open={open}
        onClose={handleClose}
        PaperProps={{ sx: { width: '500px' } }}
        title="Update foo"
        actions={{
          cancel: {
            onClick: handleClose,
            label: 'Cancel',
          },
          save: {
            onClick: () => null,
            label: 'Save',
            disabled: true,
          },
        }}
      >
        <TextField
          name="years"
          label="Years"
          fullWidth
          error
          helperText="Try again!"
        />
      </Modal>
    </>
  );
};
ModalWithDisabledSaveButton.storyName = 'With disabled save action';
ModalWithDisabledSaveButton.parameters = storyDocsParameters;
