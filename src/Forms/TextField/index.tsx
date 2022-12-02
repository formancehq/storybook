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
      '& fieldset': {
        borderRadius: '6px',
        borderWidth: '1px',
        borderColor: ({ palette }) => palette.neutral[200],
      },
    }}
    {...props}
  />
);
