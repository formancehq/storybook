import React, { FunctionComponent, ReactElement, useState } from 'react';
import { Box, Modal, TextField, Typography } from '@mui/material';
import { SearchOutlined } from '@mui/icons-material';
import { CFunction } from '../types';
import { LoadingButton } from '../LoadingButton';

export type Suggestion = {
  label: string;
  icon: ReactElement;
  more: {
    action: () => void;
    label: string;
  };
  total: number;
  items: {
    id: number;
    label: string;
    onClick: (id: number | string) => void;
  }[];
};

export type SearchProps = {
  open: boolean;
  onClose: () => void;
  onChange: CFunction<any>;
  children?: ReactElement;
  suggestions: Suggestion[];
};

export const Search: FunctionComponent<SearchProps> = ({
  onClose,
  open,
  onChange,
  suggestions,
}) => {
  const [searchValue, setSearchValue] = useState(undefined);

  const handleOnChange = (event: any) => {
    setSearchValue(event.target.value);
    onChange(event);
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
          width: 600,
          margin: 0,
        }}
      >
        <TextField
          placeholder={'Search'}
          name="terms"
          required={true}
          fullWidth
          onChange={handleOnChange}
          autoComplete="off"
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
        <Box
          sx={{
            borderTop: ({ palette }) => `1px solid ${palette.neutral[100]}`,
          }}
        />
        {searchValue && (
          <Box>
            {suggestions.map((suggestion, index) => (
              <Box
                key={index}
                p={2}
                sx={{
                  backgroundColor: ({ palette }) => palette.neutral[0],
                  borderBottom: ({ palette }) =>
                    `1px solid ${palette.neutral[100]}`,
                }}
              >
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Box
                    display="flex"
                    justifyContent="flex-start"
                    alignItems="center"
                  >
                    <Typography
                      ml={1}
                      sx={{ color: ({ palette }) => palette.neutral[600] }}
                    >
                      {suggestion.label}
                    </Typography>
                  </Box>
                  <LoadingButton
                    variant="dark"
                    content={suggestion.more.label}
                    onClick={suggestion.more.action}
                  />
                </Box>
                {suggestions &&
                  suggestions.length > 0 &&
                  suggestion.items.map((item) => (
                    <Box key={item.id}>
                      <LoadingButton
                        startIcon={suggestion.icon}
                        content={item.label}
                        onClick={() => item.onClick(item.id)}
                      />
                    </Box>
                  ))}
                <Box display="flex" justifyContent="end" mr={2}>
                  <Typography
                    ml={1}
                    variant="footNote"
                    sx={{ color: ({ palette }) => palette.neutral[400] }}
                  >
                    {suggestion.total} results
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        )}
      </Box>
    </Modal>
  );
};