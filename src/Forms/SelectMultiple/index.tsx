import React, { FunctionComponent, useState } from 'react';

import {
  MenuItem,
  FormControl,
  Select as MuiSelect,
  SelectChangeEvent,
  InputLabel,
  OutlinedInput,
  Box,
  useTheme,
} from '@mui/material';

import { Chip } from '../../Chip';
import { FormFieldErrorProps } from '../../types';

import { FormHelper } from '../FormHelper';

export type SelectMultipleProps = {
  items: string[];
  label: string;
  onChange?: (item?: any) => void;
  ref?: any;
  id: string;
  outlinedInputLabel: string;
} & FormFieldErrorProps;

export const SelectMultiple: FunctionComponent<SelectMultipleProps> = ({
  items,
  label,
  error,
  id,
  onChange,
  outlinedInputLabel,
  ref,
  errorMessage,
}) => {
  const [item, setItem] = useState<string[]>([]);
  const { typography } = useTheme();
  const handleChange = (selectedItem: SelectChangeEvent<typeof item>) => {
    const {
      target: { value },
    } = selectedItem;
    setItem(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };

  return (
    <>
      <FormControl
        sx={{
          mt: 1,
          width: 548,
          '& .MuiOutlinedInput-root': {
            height: 'auto',
            minHeight: '40px',
          },
        }}
      >
        <InputLabel
          id={id}
          shrink
          error={error}
          sx={{
            position: 'static',
            transform: 'none',
            fontSize: '12px',
            mb: 0.5,
          }}
        >
          {label}
        </InputLabel>
        <MuiSelect
          error={error}
          labelId={id}
          multiple
          value={item}
          onChange={(item) => {
            handleChange(item);
            if (onChange && item) {
              onChange(item);
            }
          }}
          input={
            <OutlinedInput
              ref={ref}
              notched
              id="select-event"
              label={outlinedInputLabel}
              sx={{
                //height: item.length > 2 ? 'auto' : '40px',
                '& fieldset': {
                  top: 0,
                  borderRadius: '6px',
                  borderWidth: '1px!important',
                  borderColor: ({ palette }) => palette.neutral[100],
                  transition: 'all 0.2s ease-in-out',

                  '&:hover': {
                    borderColor: ({ palette }) => palette.neutral[500],
                  },

                  '& legend': {
                    display: 'none',
                  },
                },

                '& .MuiSelect-select': {
                  minHeight: '40px',
                  padding: 0,
                },
              }}
            />
          }
          renderValue={(selected) => (
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 0.5,
                padding: '4px',
              }}
            >
              {selected.map((value) => (
                <Chip
                  key={value}
                  label={value}
                  variant="square"
                  sx={{
                    borderRadius: '4px',
                    padding: 0,
                  }}
                />
              ))}
            </Box>
          )}
          MenuProps={{
            PaperProps: {
              style: {
                maxHeight: 48 * 4.5 + 8,
                width: 250,
              },

              sx: {
                boxShadow: 'none!important',
                mt: 1,

                '& .MuiList-root': {
                  padding: '13px',
                  boxSizing: 'border-box',
                  my: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px',
                },
              },
            },
          }}
        >
          {items.map((currentItem) => (
            <MenuItem
              sx={{
                ':hover': {
                  borderRadius: 0,
                },
                '&.Mui-selected': {
                  borderRadius: 0,
                  background: 'transparent',
                },
              }}
              key={currentItem}
              value={currentItem}
              style={{
                fontWeight:
                  item.indexOf(currentItem) === -1
                    ? typography.body1.fontWeight
                    : 500,
              }}
            >
              {currentItem}
            </MenuItem>
          ))}
        </MuiSelect>
      </FormControl>
      <FormHelper error={error} errorMessage={errorMessage} />
    </>
  );
};
