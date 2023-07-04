import React, { FunctionComponent } from 'react';

import {
  Box,
  FormLabel,
  TextareaAutosize,
  TextareaAutosizeProps,
  useTheme,
} from '@mui/material';

import { FormFieldErrorProps } from '../../types';

import { FormHelper } from '../FormHelper';

export type TextAreaProps = TextareaAutosizeProps &
  FormFieldErrorProps & { json?: boolean; label?: string };

export const TextArea: FunctionComponent<TextAreaProps> = ({
  errorMessage,
  error = false,
  minRows = 5,
  json = false,
  label,
  ...props
}) => {
  const { palette, typography } = useTheme();

  const typo = json ? typography.money : typography.body1;

  return (
    <Box
      sx={{
        'textarea:focus': {
          borderSize: '1px',
          border: `1px solid ${
            error ? palette.red.normal : palette.neutral[900]
          } !important`,
          outline: 'none',
        },
        'textarea:hover': {
          border: `1px solid ${
            error ? palette.red.normal : palette.neutral[500]
          } !important`,
        },
        '.Mui-error': {
          mx: 0,
          mt: 0.5,
        },
      }}
    >
      {label && (
        <FormLabel
          sx={{
            color: ({ palette }) =>
              error ? palette.red.normal : palette.neutral[100],
          }}
        >
          Label
        </FormLabel>
      )}
      <TextareaAutosize
        aria-label="text-area"
        minRows={minRows}
        style={{
          width: '100%',
          marginTop: label ? 4 : 0,
          border: `1px solid ${
            error ? palette.red.normal : palette.neutral[100]
          }`,
          borderRadius: '4px',
          padding: '14px',
          transition: 'all 0.2s ease-in-out',
          ...typo,
        }}
        {...props}
      />
      <FormHelper error={error} errorMessage={errorMessage} />
    </Box>
  );
};
