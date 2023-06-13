import React, { FunctionComponent, ReactNode } from 'react';

import {
  SelectProps as MuiSelectProps,
  MenuItem,
  FormControl,
  Select as MuiSelect,
  SelectChangeEvent,
  useTheme,
} from '@mui/material';

import { FormFieldErrorProps } from '../../types';
import { formFieldsetErrorSx } from '../../utils';

import { FormHelper } from '../FormHelper';

export type SelectItems = {
  id: string | number;
  label: string;
};
export type SelectProps = {
  select: MuiSelectProps;
  items: SelectItems[];
  placeholder: string;
} & FormFieldErrorProps;

export const Select: FunctionComponent<SelectProps> = ({
  select,
  items,
  placeholder,
  error,
  errorMessage,
}) => {
  const [value, setValue] = React.useState(placeholder);

  const { palette } = useTheme();

  const handleChange = (event: SelectChangeEvent<any>, child: ReactNode) => {
    setValue(event.target.value);
    select.onChange && select.onChange(event, child);
  };

  const menuItemSx = {
    borderRadius: 0,
    transition: 'all 0.2s ease-in-out',
    '&:hover': { borderRadius: '4px', backgroundColor: palette.neutral[50] },
    '&.Mui-selected': {
      backgroundColor: palette.neutral[100],
      borderRadius: '4px',
      color: palette.neutral[900],
    },
  };

  return (
    <>
      <FormControl
        fullWidth
        sx={{
          '& .MuiFormHelperText-root': {
            mt: 0.5,
            mx: '0!important',
          },
        }}
      >
        <MuiSelect
          displayEmpty
          value={value}
          {...select}
          onChange={handleChange}
          MenuProps={{
            PaperProps: {
              sx: {
                boxShadow: 'none!important',

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
          sx={{
            outline: 'none',
            ...formFieldsetErrorSx(error),
            '& fieldset': {
              borderColor: `${
                error ? palette.red.normal : palette.neutral[100]
              }!important`,
              borderWidth: '1px!important',
              transition: 'all 0.2s ease-in-out',
            },
            '&:hover fieldset': {
              borderColor: `${
                error ? palette.red.normal : palette.neutral[500]
              }!important`,
            },
            '&.Mui-focused fieldset': {
              borderColor: `${
                error ? palette.red.normal : palette.neutral[900]
              }!important`,
            },
          }}
        >
          <MenuItem
            value={placeholder}
            sx={{
              ...menuItemSx,
              color: `${palette.neutral[900]}!important`,
              transition: 'all 0.2s ease-in-out',
            }}
            disabled
          >
            {placeholder}
          </MenuItem>
          {items.map((item) => (
            <MenuItem key={item.id} value={item.id} sx={menuItemSx}>
              {item.label}
            </MenuItem>
          ))}
        </MuiSelect>
        <FormHelper error={error} errorMessage={errorMessage} />
      </FormControl>
    </>
  );
};
