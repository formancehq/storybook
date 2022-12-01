import React, { FunctionComponent, ReactElement, useState } from 'react';

import { SearchOutlined } from '@mui/icons-material';
import { Box, ClickAwayListener } from '@mui/material';
import { isEmpty } from 'lodash';

import { TextField, TextFieldProps } from '../Forms/TextField';

export type SearchProps = TextFieldProps & {
  open: boolean;
  onClose: () => void;
  renderChildren: (value: string) => ReactElement;
};

export const Search: FunctionComponent<SearchProps> = ({
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
    <ClickAwayListener onClickAway={() => setOpenDropdown(false)}>
      <Box width={400}>
        <TextField
          onChange={handleOnChange}
          autoComplete="off"
          onKeyDown={handleOnKeyDown}
          InputProps={{
            autoFocus: true,
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
        {openDropdown && searchValue && renderChildren(searchValue)}
      </Box>
    </ClickAwayListener>
  );
};
