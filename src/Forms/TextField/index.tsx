import React, { FunctionComponent } from 'react';

import {
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
} from '@mui/material';

import { FormFieldErrorProps } from '../../types';

export type TextFieldProps = MuiTextFieldProps & FormFieldErrorProps;

export const TextField: FunctionComponent<TextFieldProps> = ({
  error,
  errorMessage,
  ...props
}) => (
  <MuiTextField
    InputLabelProps={{ shrink: true }}
    error={error}
    helperText={errorMessage}
    sx={{
      mt: 1,
      mb: 1,
      ...props.sx,
      '& label': {
        position: 'static',
        transform: 'none',
        fontSize: '12px',
        mb: 0.5,
      },
      '& input': {
        borderRadius: '4px',
        borderWidth: '1px',
        borderColor: ({ palette }) => palette.neutral[100],
        borderStyle: 'solid',
        padding: '0 12px',
        height: '40px',
        transition: 'all 0.2s ease-in-out',

        '&:hover': {
          borderColor: ({ palette }) => palette.neutral[500],
        },

        '&:focus': {
          borderColor: ({ palette }) => palette.neutral[900],
        },
      },
      '& fieldset': {
        borderRadius: '6px',
        borderWidth: '1px',
        borderColor: ({ palette }) => palette.neutral[200],
        display: 'none',
      },
      // Modify error styles
      '& .Mui-error': {
        '& input': {
          borderColor: ({ palette }) => palette.red.normal,
        },
      },
      '& .MuiFormHelperText-root': {
        mt: 0.5,
        mx: 0,
      },
      // Modify disabled styles
      '& .Mui-disabled': {
        '& input': {
          backgroundColor: ({ palette }) => palette.neutral[0],

          '&:hover': {
            borderColor: ({ palette }) => palette.neutral[100],
          },
        },
      },
    }}
    {...props}
  />
);
