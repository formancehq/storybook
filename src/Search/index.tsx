import React, { FunctionComponent, ReactElement, useState } from 'react';
import { Box, Modal, TextField, TextFieldProps } from '@mui/material';
import { SearchOutlined } from '@mui/icons-material';
import { isEmpty } from 'lodash';

export type SearchProps = TextFieldProps & {
  open: boolean;
  onClose: () => void;
  renderChildren: (value: string) => ReactElement;
};

export const Search: FunctionComponent<SearchProps> = ({
  onClose,
  open,
  onChange,
  onKeyDown,
  renderChildren,
  ...props
}) => {
  const [searchValue, setSearchValue] = useState<string>();
  const [openDropdown, setOpenDropdown] = useState<boolean>(false);

  const resetSearch = () => {
    setSearchValue(undefined);
    setOpenDropdown(false);
  };

  const handleOnClose = () => {
    resetSearch();
    onClose();
  };

  const handleOnChange = (event: any) => {
    const value = event.target.value;
    if (isEmpty(value)) {
      resetSearch();
    }
    if (value && !isEmpty(value)) {
      setSearchValue(value);
    }
    onChange && onChange(event);
  };

  const handleOnKeyDown = (event: any) => {
    if (event.keyCode === 13) {
      setOpenDropdown(true);
    }
    if (event.keyCode === 27) {
      resetSearch();
    }
    onKeyDown && onKeyDown(event);
  };

  return (
    <Modal
      open={open}
      onClose={handleOnClose}
      aria-labelledby="search-modal-title"
      aria-describedby="search-modal-description"
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
          <TextField
            fullWidth
            onChange={handleOnChange}
            autoComplete="off"
            onKeyDown={handleOnKeyDown}
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
            {...props}
          />
        </Box>
        {openDropdown && searchValue && renderChildren(searchValue)}
      </Box>
    </Modal>
  );
};
