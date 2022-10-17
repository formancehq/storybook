import React, { useState } from 'react';

import { Box, Typography } from '@mui/material';

import { LoadingButton } from '../../../Buttons/LoadingButton';
import { Modal } from '../../../Modal';
import { storyDocsParameters } from '../../../utils';

import { Confirmation } from './index';

export default {
  title: 'Design System/Modal Wrapper',
  component: Confirmation,
};

const itemMock = {
  id: '1',
  name: 'Product Name',
  description: 'Product Description',
};

export const ModalWithDeleteConfirmationWrapper = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <LoadingButton content="Open modal" onClick={handleOpen} variant="dark" />
      <Modal
        open={open}
        onClose={handleClose}
        title="Delete item"
        PaperProps={{ sx: { width: '640px' } }}
        actions={{
          cancel: {
            onClick: handleClose,
            label: 'Cancel',
          },
          save: {
            onClick: () => null,
            label: 'Delete',
            variant: 'error',
          },
        }}
      >
        <Confirmation
          title="Are you sure you want to delete the following item ?"
          message={
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography variant="action">{itemMock.name}</Typography>
              <Typography variant="action">{itemMock.description}</Typography>
            </Box>
          }
        />
      </Modal>
    </>
  );
};

ModalWithDeleteConfirmationWrapper.storyName = 'With title and message';
ModalWithDeleteConfirmationWrapper.parameters = storyDocsParameters;

export const ModalWithConfirmationWrapper = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <LoadingButton content="Open modal" onClick={handleOpen} variant="dark" />
      <Modal
        open={open}
        onClose={handleClose}
        title="Update item"
        PaperProps={{ sx: { width: '640px' } }}
        actions={{
          cancel: {
            onClick: handleClose,
            label: 'Cancel',
          },
          save: {
            onClick: () => null,
            label: 'Confirm',
          },
        }}
      >
        <Confirmation title="Are you sure you want to update this item ?" />
      </Modal>
    </>
  );
};

ModalWithConfirmationWrapper.storyName = 'With title Only';
ModalWithConfirmationWrapper.parameters = storyDocsParameters;
