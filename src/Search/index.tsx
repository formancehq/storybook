import React, { FunctionComponent } from 'react';
import { Box, Modal, TextField } from '@mui/material';
import { SearchOutlined } from '@mui/icons-material';
import { CFunction } from '../types';

export type SearchProps = {
  open: boolean;
  onClose: () => void;
  onChange: CFunction<any>;
};

export const Search: FunctionComponent<SearchProps> = ({
  onClose,
  open,
  onChange,
}) => (
  <Modal
    open={open}
    onClose={onClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box
      sx={{
        position: 'absolute' as const,
        top: '30%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        height: '50px',
        margin: 0,
      }}
    >
      <TextField
        placeholder={'Search'}
        name="terms"
        required={true}
        fullWidth
        onChange={onChange}
        autoComplete="off"
        InputProps={{
          sx: {
            '& svg': { color: ({ palette }) => palette.neutral[400] },
            backgroundColor: ({ palette }) => palette.neutral[0],
            '& fieldset': {
              border: 'none',
            },
          },
          startAdornment: (
            <SearchOutlined
              color="primary"
              sx={{
                marginRight: 1,
                color: ({ palette }) => palette.neutral[400],
              }}
            />
          ),
        }}
      />
    </Box>
  </Modal>
);
