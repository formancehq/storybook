import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete, { AutocompleteProps } from '@mui/material/Autocomplete';
import { FunctionComponent } from 'react';
import { InputLabel } from '@mui/material';
import { Chip } from '../../../Chip';

export type FilterProps = Omit<
  AutocompleteProps<any, any, any, any>,
  'renderInput'
> & {
  name: string;
  label?: string;
  placeholder?: string;
  icon?: React.ReactNode;
};

export type AutocompleteOption = {
  id: string;
  label: string;
};
export const AutocompleteSelect: FunctionComponent<FilterProps> = ({
  ...props
}) => (
  <Autocomplete
    {...props}
    multiple
    limitTags={1}
    renderTags={(value: AutocompleteOption[], getTagProps, ownerState) => {
      if (props.renderTags) {
        return props.renderTags(value, getTagProps, ownerState);
      } else {
        return value.map((option, index) => (
          <Chip
            label={option.label}
            size="small"
            {...getTagProps({ index })}
            key={index}
          />
        ));
      }
    }}
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
        mt: '-4px',
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
