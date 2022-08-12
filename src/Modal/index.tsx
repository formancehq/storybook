import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogProps,
  DialogTitle,
  useTheme,
} from '@mui/material';
import React, { FunctionComponent } from 'react';
import { LoadingButton } from '../Buttons/LoadingButton';
import { Close } from '@mui/icons-material';
import { CFunction } from '../types';

export type ModalActionsProps = {
  label: string;
  onClick: () => void;
};

export type ModalProps = DialogProps & {
  actions?: {
    cancel?: ModalActionsProps;
    save?: ModalActionsProps & { disabled?: boolean };
  };
};

export const Modal: FunctionComponent<ModalProps> = ({
  id,
  open,
  onClose,
  title,
  children,
  actions,
}) => {
  const { typography } = useTheme();

  return (
    <Dialog
      open={open}
      onClose={onClose}
      id={id}
      PaperProps={{ sx: { minWidth: '300px' } }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <DialogTitle sx={{ ...typography.headline }}>{title}</DialogTitle>
        <LoadingButton
          startIcon={<Close />}
          onClick={onClose as CFunction<any>}
        />
      </Box>
      <DialogContent sx={{ overflowY: 'initial' }}>{children}</DialogContent>
      {actions && (
        <DialogActions sx={{ padding: '20px 24px' }}>
          {actions.cancel && (
            <LoadingButton
              content={actions.cancel.label}
              variant="stroke"
              onClick={actions.cancel.onClick}
              sx={{ width: '50%' }}
            />
          )}
          {actions.save && (
            <LoadingButton
              content={actions.save.label}
              variant="dark"
              onClick={actions.save.onClick}
              sx={{ width: '50%' }}
              disabled={actions.save.disabled || false}
            />
          )}
        </DialogActions>
      )}
    </Dialog>
  );
};
