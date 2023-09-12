import React, { CSSProperties, FunctionComponent } from 'react';

import { Close } from '@mui/icons-material';
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogProps,
  DialogTitle,
  SxProps,
  Theme,
  useTheme,
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';

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

const modalAnimation = {
  initial: {
    y: 30,
    x: 0,
    opacity: 0,
  },
  in: {
    x: 0,
    y: 0,
    opacity: 1,
    rotate: 0,
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
      stiffness: 100,
    },
  },
  out: {
    x: 0,
    y: 10,
    opacity: 0,
    transition: {
      duration: 0.3,
      stiffness: 100,
      ease: 'easeInOut',
    },
  },
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
  const { typography, palette } = useTheme();
  const paperSx = PaperProps ? PaperProps.sx : {};

  const modalContainerStyle: CSSProperties = {
    ...(paperSx as CSSProperties),
    backgroundColor: palette.common.white,
    borderRadius: '8px',
    boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  };

  return (
    <AnimatePresence>
      {open && (
        <Dialog
          open={open}
          onClose={onClose}
          id={id}
          sx={{
            width: '100vw',
            maxWidth: 'none',
            overflowY: 'visible',
            ...paperSx,

            '& .MuiPaper-root': {
              backgroundColor: 'transparent',
              border: 'none',
              boxShadow: 'none',
              overflowY: 'visible',
              maxWidth: 'none',
            },

            '& .MuiDialog-container': {
              width: '100vw',
            },
          }}
        >
          <motion.div
            variants={modalAnimation}
            initial="initial"
            animate="in"
            exit="out"
            style={modalContainerStyle}
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <DialogTitle sx={{ ...typography.headline }}>{title}</DialogTitle>
              <LoadingButton
                startIcon={<Close />}
                variant="transparent"
                sx={{
                  ':hover': {
                    background: 'transparent',
                    color: palette.neutral[600],
                  },
                }}
                onClick={onClose as CFunction<any>}
              />
            </Box>
            <DialogContent
              sx={{
                overflowY: 'initial',
                p: `0 24px ${actions ? '0' : '24px'} 24px`,
              }}
            >
              {children}
            </DialogContent>
            {actions && (
              <DialogActions sx={{ padding: '14px 24px' }}>
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
          </motion.div>
        </Dialog>
      )}
    </AnimatePresence>
  );
};
