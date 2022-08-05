import React, { FunctionComponent, ReactElement, useState } from 'react';
import { Box, Modal, TextField, Typography } from '@mui/material';
import { SearchOutlined } from '@mui/icons-material';
import { CFunction } from '../types';
import { LoadingButton } from '../LoadingButton';

export type Suggestion = {
  label: string;
  icon: ReactElement;
  total?: number;
  items: {
    id: number | string;
    label: string;
    onClick: (id: number | string) => void;
  }[];
};

export type SearchProps = {
  open: boolean;
  onClose: () => void;
  onChange?: CFunction<any>;
  onKeyDown?: CFunction<any>;
  children?: ReactElement;
  suggestions: Suggestion[];
};

export const Search: FunctionComponent<SearchProps> = ({
  onClose,
  open,
  onChange,
  onKeyDown,
  suggestions,
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
          width: 600,
          margin: 0,
          overflowY: 'scroll',
          maxHeight: 500,
        }}
      >
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
        {suggestions.length > 0 && (
          <Box
            sx={{
              borderTop: ({ palette }) => `1px solid ${palette.neutral[100]}`,
            }}
          />
        )}
        {searchValue && (
          <>
            {suggestions.length === 0 ? (
              <Box
                p={2}
                sx={{
                  backgroundColor: ({ palette }) => palette.neutral[0],
                }}
              >
                <Typography variant="caption">No results</Typography>
              </Box>
            ) : (
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
                      {suggestion.total && (
                        <Typography
                          ml={1}
                          variant="footNote"
                          sx={{ color: ({ palette }) => palette.neutral[400] }}
                        >
                          {suggestion.total} results
                        </Typography>
                      )}
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
                  </Box>
                ))}
              </Box>
            )}
          </>
        )}
      </Box>
    </Modal>
  );
};
