import React, { FunctionComponent, useCallback, useState } from 'react';

import { Search } from '@mui/icons-material';
import { CircularProgress } from '@mui/material';
import Autocomplete, { AutocompleteProps } from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

import { FormFieldErrorProps } from '../../types';
import { debounce } from '../../utils';

export type AutocompleteSuggestion = {
  label: string;
  value: string;
};

export type DebouncedAutocompleteProps = {
  load: (value?: string) => Promise<AutocompleteSuggestion[]>;
  placeholder: string;
} & Omit<
  AutocompleteProps<any, any, any, any>,
  'renderInput' | 'size' | 'options'
> &
  FormFieldErrorProps;

export const DebouncedAutocomplete: FunctionComponent<
  DebouncedAutocompleteProps
> = ({ load, error, errorMessage, ...props }) => {
  const [suggestions, setSuggestions] = useState<
    AutocompleteSuggestion[] | undefined
  >(undefined);
  const [loading, setLoading] = useState<boolean>(false);

  const debouncedRequest = useCallback(
    debounce({ delay: 500 }, async (value: string) => {
      const data = await load(value);
      if (data.length > 0) {
        setSuggestions(data);
      } else {
        setSuggestions(undefined);
      }
      setLoading(false);
    }),
    []
  );

  const handleOnChange = (e: any): void => {
    setLoading(true);
    const value = e.currentTarget.value;
    if (value.length > 2) {
      debouncedRequest(e.currentTarget.value);
    }
  };

  return (
    <>
      <Autocomplete
        noOptionsText="No results"
        {...props}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder={props.placeholder}
            onChange={handleOnChange}
            error={error}
            helperText={errorMessage}
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <React.Fragment>
                  {loading ? (
                    <CircularProgress color="inherit" size={16} />
                  ) : (
                    <Search fontSize="small" />
                  )}
                  {params.InputProps.startAdornment}
                </React.Fragment>
              ),
            }}
          />
        )}
        options={suggestions || []}
      />
    </>
  );
};
