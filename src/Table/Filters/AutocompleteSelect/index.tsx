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
  icon,
  ...props
}) => (
  <Autocomplete
    {...props}
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
          InputProps={{
            ...params.InputProps,
            startAdornment: icon ? icon : icon,
          }}
        />
      </>
    )}
    renderTags={props.renderTags ? props.renderTags : () => null}
    sx={{
      '& .MuiOutlinedInput-root .MuiAutocomplete-input': {
        padding: 0,
      },
    }}
  />
);
