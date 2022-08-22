import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete, { AutocompleteProps } from '@mui/material/Autocomplete';
import { FunctionComponent } from 'react';
import { InputLabel, useTheme } from '@mui/material';
import { ImportExport } from '@mui/icons-material';

export type FilterProps = Omit<
  AutocompleteProps<any, any, any, any>,
  'renderInput'
> & {
  name: string;
  label?: string;
  placeholder: string;
};
export const AutocompleteSelect: FunctionComponent<FilterProps> = ({
  ...props
}) => {
  const { palette, typography } = useTheme();

  return (
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
              startAdornment: <ImportExport />,
            }}
            sx={{ backgroundColor: ({ palette }) => palette.neutral[900] }}
          />
        </>
      )}
      renderTags={props.renderTags ? props.renderTags : () => null}
      sx={{
        '& ::placeholder': {
          color: `${palette.neutral[0]} !important`,
          opacity: 1 /* Firefox */,
        },
        '& .MuiAutocomplete-endAdornment .MuiButtonBase-root': {
          color: palette.neutral[0],
        },
        '& .MuiSvgIcon-root': {
          color: palette.neutral[0],
          marginRight: 2,
        },
        '& input': {
          color: palette.neutral[0],
        },
        '& .MuiInputLabel-root': {
          ...typography.body2,
        },
        '& .MuiOutlinedInput-root .MuiAutocomplete-input': {
          padding: 0,
        },
      }}
    />
  );
};
