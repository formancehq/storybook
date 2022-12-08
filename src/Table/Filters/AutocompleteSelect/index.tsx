import * as React from 'react';
import { FunctionComponent } from 'react';

import { InputLabel } from '@mui/material';
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
