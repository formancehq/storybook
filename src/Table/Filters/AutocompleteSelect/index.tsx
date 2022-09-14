import * as React from 'react';
import { FunctionComponent, useState } from 'react';

import { InputLabel, useTheme } from '@mui/material';
import Autocomplete, { AutocompleteProps } from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

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
}) => {
  const { palette } = useTheme();
  const [darkTheme, setDarkTheme] = useState<boolean>(variant === 'dark');
  const darkStyles = {
    '& fieldset.MuiOutlinedInput-notchedOutline': {
      border: 0,
    },
    '& input::placeholder': {
      color: `${palette.neutral[0]} !important`,
      opacity: 1 /* Firefox */,
    },
    '& input': {
      color: `${palette.neutral[0]} !important`,
    },
    '& .MuiOutlinedInput-root': {
      backgroundColor: palette.neutral[900],
      border: `1px solid ${palette.neutral[0]}`,
    },
    '& .MuiButtonBase-root .MuiSvgIcon-root': {
      color: palette.neutral[0],
    },
    '& .MuiButtonBase-root .MuiChip-label': {
      color: palette.neutral[0],
    },
  };
  const lightStyles = {
    '& .MuiAutocomplete-endAdornment .MuiButtonBase-root:hover': {
      backgroundColor: palette.neutral[900],
    },
    '& .MuiButtonBase-root .MuiSvgIcon-root:hover': {
      color: palette.neutral[0],
    },
    '& .MuiButtonBase-root.MuiChip-root': {
      borderRadius: '4px',
    },
  };

  const styles = darkTheme ? darkStyles : lightStyles;

  return (
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
          <TextField
            {...params}
            placeholder={props.placeholder}
            onClick={() => setDarkTheme(true)}
            onBlur={() => setDarkTheme(variant === 'dark')}
          />
        </>
      )}
      sx={styles}
    />
  );
};
