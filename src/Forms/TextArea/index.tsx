import React, { FunctionComponent } from 'react';

import {
  Box,
  TextareaAutosize,
  TextareaAutosizeProps,
  useTheme,
} from '@mui/material';

import { FormFieldErrorProps } from '../../types';

import { FormHelper } from '../FormHelper';

export type JsonTextAreaProps = TextareaAutosizeProps & FormFieldErrorProps;

export const TextArea: FunctionComponent<JsonTextAreaProps> = ({
  errorMessage,
  error = false,
  minRows = 5,
  ...props
}) => {
  const { palette, typography } = useTheme();

  return (
    <Box
      sx={{
        'textarea:focus-visible': {
          outlineColor: error ? palette.red.normal : palette.neutral[900],
        },
        'textarea:hover': {
          border: `1px solid ${
            error ? palette.red.normal : palette.neutral[900]
          } !important`,
        },
      }}
    >
      <TextareaAutosize
        aria-label="text-area"
        minRows={minRows}
        style={{
          width: '100%',
          border: `1px solid ${
            error ? palette.red.normal : 'rgba(0, 0, 0, 0.23)'
          }`,
          borderRadius: '4px',
          ...typography.money,
        }}
        {...props}
      />
      <FormHelper error={error} errorMessage={errorMessage} />
    </Box>
  );
};
