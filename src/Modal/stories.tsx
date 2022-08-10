import React, { useState } from 'react';
import { Modal } from './index';
import { LoadingButton } from '../Buttons/LoadingButton';
import { Box } from '@mui/material';
import { TextField } from '../Forms/TextFields';

export default {
  title: 'Design System/Modal',
  component: Modal,
};

const Form = () => (
  <Box>
    <TextField
      name="firstname"
      label="Firstname"
      onChange={(e: any) => console.log('on change', e.currentTarget.value)}
      placeholder="Jean"
    />
    <TextField name="lastname" label="Lastname" fullWidth />
    <TextField
      name="years"
      label="Years"
      fullWidth
      error
      helperText="Try again!"
    />
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
            onClick: () => console.log('save!'),
            label: 'Save',
          },
        }}
      >
        <Form />
      </Modal>
    </>
  );
};
ModalWithFooter.storyName = 'With footer';