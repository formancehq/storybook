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
};
export const AutocompleteSelect: FunctionComponent<FilterProps> = ({
  ...props
}) => (
  <Autocomplete
    {...props}
    multiple
    limitTags={1}
    renderInput={(params) => (
      <>
        {props.label && (
          <InputLabel shrink htmlFor={props.name}>
            {props.label}
          </InputLabel>
        )}
        <TextField
          {...params}
          placeholder={props.placeholder}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </>
    )}
    sx={{
      '.MuiPaper-root': {
        mt: 0,
      },
      '& .MuiAutocomplete-tag': {
        padding: 0,
        mt: '-6px',
      },
      '& .MuiAutocomplete-inputFocused': {
        padding: 0,
        mt: '-8px',
      },

      '& .MuiButtonBase-root': {
        mt: '-3px',
        backgroundColor: ({ palette }) => palette.neutral[0],
      },
      '.MuiAutocomplete-endAdornment': {
        top: '10px',
      },
    }}
  />
);
