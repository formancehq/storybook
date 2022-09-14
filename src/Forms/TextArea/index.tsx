import React, { FunctionComponent } from 'react';

import {
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
    <>
      <TextareaAutosize
        aria-label="text-area"
        minRows={minRows}
        style={{
          width: '100%',
          borderColor: error ? palette.red.normal : 'initial',
          borderRadius: '4px',
          ...typography.money,
        }}
        {...props}
      />
      <FormHelper error={error} errorMessage={errorMessage} />
    </>
  );
};
