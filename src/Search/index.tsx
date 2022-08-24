import React, { FunctionComponent, ReactElement, useState } from 'react';
import { Box, Modal, TextField } from '@mui/material';
import { SearchOutlined } from '@mui/icons-material';
import { CFunction } from '../types';

export type SearchProps = {
  open: boolean;
  onClose: () => void;
  onChange?: CFunction<any>;
  onKeyDown?: CFunction<any>;
  renderChildren: (value: string) => ReactElement;
};

export const Search: FunctionComponent<SearchProps> = ({
  onClose,
  open,
  onChange,
  onKeyDown,
  renderChildren,
}) => {
  const [searchValue, setSearchValue] = useState(undefined);

  const handleOnChange = (event: any) => {
    setSearchValue(event.target.value);
    onChange && onChange(event);
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: 'absolute' as const,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 800,
          margin: 0,
          maxHeight: 400,
        }}
      >
        <Box width={600} ml={12} mr={12}>
          <form>
            <TextField
              placeholder={'Search'}
              name="terms"
              required={true}
              fullWidth
              onChange={handleOnChange}
              autoComplete="off"
              onKeyDown={onKeyDown}
              InputProps={{
                sx: {
                  height: 56,
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
          </form>
        </Box>
        {searchValue && renderChildren(searchValue)}
      </Box>
    </Modal>
  );
};
