import * as React from 'react';
import { FunctionComponent } from 'react';

import { InputLabel, Paper, PaperProps } from '@mui/material';
import Autocomplete, { AutocompleteProps } from '@mui/material/Autocomplete';

import { TextField } from '../../../Forms/TextField';

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
    size="small"
    limitTags={2}
    PaperComponent={PaperComponent}
    sx={{
      '& .MuiOutlinedInput-root': {
        padding: '0px !important',
      },

      '& input': {
        padding: '0px 8px !important',
      },
    }}
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
  />
);

const PaperComponent = (props: PaperProps) => (
  <Paper
    elevation={8}
    {...props}
    sx={{
      boxShadow: 'none!important',
      mt: 1,

      '& .MuiAutocomplete-listbox': {
        padding: '13px',
        boxSizing: 'border-box',
        my: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',

        '& li': {
          flexShrink: 0,
          height: '40px',
          borderRadius: '4px',
          padding: 0,
        },
      },
    }}
  />
);
