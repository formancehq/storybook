import {
  FormHelperText,
  TextareaAutosize,
  TextareaAutosizeProps,
  useTheme,
} from '@mui/material';
import React, { FunctionComponent } from 'react';

export type JsonTextAreaProps = TextareaAutosizeProps & {
  helperText?: string;
  error?: boolean;
  errorMessage?: string;
};

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
      {error && (
        <FormHelperText error={error} sx={{ color: palette.red.normal }}>
          {errorMessage}
        </FormHelperText>
      )}
    </>
  );
};
