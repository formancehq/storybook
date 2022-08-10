import {FormControl, FormHelperText, InputBaseProps, InputLabel, InputLabelProps, OutlinedInput,} from '@mui/material';
import React, {FunctionComponent} from 'react';

export type TextFieldProps = InputBaseProps &
  InputLabelProps & { label: string; helperText?: string };

export const TextField: FunctionComponent<TextFieldProps> = ({
  label,
  helperText,
  ...props
}) => (
  <FormControl
    variant="standard"
    sx={{ marginTop: 1, paddingTop: 1, marginRight: 1, paddingBottom: 1 }}
    fullWidth={props.fullWidth}
  >
    <InputLabel
      shrink
      htmlFor={props.name}
      sx={{
        color: ({ palette }) =>
          props.error ? palette.red.normal : palette.neutral[900],
      }}
      {...props}
    >
      {label}
    </InputLabel>
    <OutlinedInput sx={{ marginTop: '18px' }} {...props} />
    {props.error && (
      <FormHelperText sx={{ marginTop: 1 }}>{helperText}</FormHelperText>
    )}
  </FormControl>
);
