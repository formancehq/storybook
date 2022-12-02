import React, { FunctionComponent } from 'react';

import {
  Box,
  TextareaAutosize,
  TextareaAutosizeProps,
  useTheme,
} from '@mui/material';

import { FormFieldErrorProps } from '../../types';

import { FormHelper } from '../FormHelper';

export type TextAreaProps = TextareaAutosizeProps &
  FormFieldErrorProps & { json?: boolean };

export const TextArea: FunctionComponent<TextAreaProps> = ({
  errorMessage,
  error = false,
  minRows = 5,
  json = false,
  ...props
}) => {
  const { palette, typography } = useTheme();

  const typo = json ? typography.money : typography.body1;

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
            error ? palette.red.normal : palette.neutral[200]
          }`,
          borderRadius: '6px',
          padding: '16.5px 14px',
          ...typo,
        }}
        {...props}
      />
      <FormHelper error={error} errorMessage={errorMessage} />
    </Box>
  );
};
