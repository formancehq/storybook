import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete, { AutocompleteProps } from '@mui/material/Autocomplete';
import { FunctionComponent } from 'react';
import { InputLabel } from '@mui/material';

export type FilterProps = Omit<
  AutocompleteProps<any, any, any, any>,
  'renderInput'
> & {
  name: string;
  label?: string;
  placeholder?: string;
  icon?: React.ReactNode;
  variant?: 'light' | 'dark';
};

export type AutocompleteOption = {
  id: string;
  label: string;
};
export const AutocompleteSelect: FunctionComponent<FilterProps> = ({
  variant = 'light',
  ...props
}) => (
  <Autocomplete
    {...props}
    multiple
    size="small"
    limitTags={2}
    renderInput={(params) => (
      <>
        {props.label && (
          <InputLabel shrink htmlFor={props.name}>
            {props.label}
          </InputLabel>
        )}
        <TextField {...params} placeholder={props.placeholder} />
      </>
    )}
    sx={{
      '& .MuiButtonBase-root.MuiChip-root': {
        borderRadius: '4px',
        backgroundColor: ({ palette }) =>
          variant === 'light' ? palette.neutral[50] : palette.neutral[900],
        color: ({ palette }) =>
          variant === 'light' ? palette.neutral[700] : palette.neutral[0],
      },
      '& .MuiButtonBase-root.MuiChip-root .MuiSvgIcon-root': {
        color: ({ palette }) => palette.default.bright,
      },
      '& .MuiButtonBase-root.MuiIconButton-root.MuiAutocomplete-clearIndicator:hover':
        {
          background: 'transparent',
          color: ({ palette }) => palette.neutral[900],
        },
      '& .MuiButtonBase-root:hover': {
        background: ({ palette }) =>
          variant === 'light' ? palette.neutral[50] : palette.neutral[900],
        color: ({ palette }) =>
          variant === 'light' ? palette.neutral[700] : palette.neutral[0],
      },
    }}
  />
);
