import React, { FunctionComponent } from 'react';

import { Close } from '@mui/icons-material';
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogProps,
  DialogTitle,
  useTheme,
} from '@mui/material';

import { LoadingButton } from '../Buttons/LoadingButton';
import { ButtonVariants, CFunction } from '../types';

export type ModalActionsProps = {
  label: string;
  onClick: () => void;
};

export type ModalProps = DialogProps & {
  actions?: {
    cancel?: ModalActionsProps;
    save?: ModalActionsProps & { disabled?: boolean; variant?: ButtonVariants };
  };
};

export const Modal: FunctionComponent<ModalProps> = ({
  id,
  open,
  onClose,
  title,
  children,
  actions,
  PaperProps,
}) => {
  const { typography } = useTheme();
  const paperSx = PaperProps ? PaperProps.sx : {};

  return (
    <Dialog
      open={open}
      onClose={onClose}
      id={id}
      PaperProps={{ sx: { minWidth: '300px', ...paperSx } }}
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
              type="submit"
              content={actions.save.label}
              variant={actions.save?.variant || 'dark'}
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
