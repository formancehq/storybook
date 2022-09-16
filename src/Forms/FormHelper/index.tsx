import React, { FunctionComponent } from 'react';

import { FormHelperText } from '@mui/material';

import { FormFieldErrorProps } from '../../types';

export const FormHelper: FunctionComponent<FormFieldErrorProps> = ({
  errorMessage,
  error = false,
}) => (
  <>
    {error && (
      <FormHelperText
        error={error}
        sx={{
          color: ({ palette }) => palette.red.normal,
          '&.Mui-error': {
            color: ({ palette }) => palette.red.normal,
          },
        }}
      >
        {errorMessage}
      </FormHelperText>
    )}
  </>
);
