import React, { FunctionComponent } from 'react';

import {
  FormControl,
  InputBaseProps,
  InputLabel,
  InputLabelProps,
  OutlinedInput,
} from '@mui/material';

import { FormFieldErrorProps } from '../../types';
import { formFieldsetErrorSx, omit } from '../../utils';

import { FormHelper } from '../FormHelper';

export type TextFieldProps = InputBaseProps &
  InputLabelProps & {
    label?: string;
  } & FormFieldErrorProps;

export const TextField: FunctionComponent<TextFieldProps> = ({
  label,
  error,
  errorMessage,
  ...props
}) => (
  <FormControl
    variant="standard"
    sx={{ marginTop: 1, paddingTop: 1, marginRight: 1, paddingBottom: 1 }}
    fullWidth={props.fullWidth}
  >
    {label && (
      <InputLabel
        shrink
        htmlFor={props.name}
        sx={{
          color: ({ palette }) =>
            error ? palette.red.normal : palette.neutral[900],
        }}
        {...omit(props, ['fullWidth', 'inputRef'])}
      >
        {label}
      </InputLabel>
    )}
    <OutlinedInput
      sx={{
        marginTop: '18px',
        ...formFieldsetErrorSx(error),
      }}
      {...props}
    />
    <FormHelper error={error} errorMessage={errorMessage} />
  </FormControl>
);
