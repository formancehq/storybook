import { Box, FormHelperText, TextareaAutosize, useTheme } from '@mui/material';
import React, { FunctionComponent, useEffect, useState } from 'react';
import { LoadingButton } from '../../Buttons/LoadingButton';
import { LocalFlorist } from '@mui/icons-material';
import { ButtonVariants } from '../../types';

export type JsonTextAreaProps = {
  button: {
    label: string;
    variant?: ButtonVariants;
  };
  textarea: {
    onChange?: (value?: string, error?: boolean, errorText?: string) => void;
    onPrettify?: (value?: string, error?: boolean, errorText?: string) => void;
    placeholder?: string;
    required?: boolean;
    minRows?: number;
    name: string;
    json?: string;
    error?: boolean;
    errorText?: string;
  };
};

export const prettyJson = (json: JSON): string =>
  JSON.stringify(json, undefined, 4);

export const JsonTextArea: FunctionComponent<JsonTextAreaProps> = ({
  button,
  textarea,
}) => {
  const { palette } = useTheme();
  const [value, setValue] = useState<string | undefined>(textarea.json);
  const [error, setError] = useState<boolean>(textarea.error || false);
  const [errorText, setErrorText] = useState<string | undefined>(
    textarea.errorText
  );

  const handlePrettify = () => {
    try {
      if (value) {
        setValue(prettyJson(JSON.parse(value)));
        setError(false);
      }
    } catch (e) {
      setError(true);
      setErrorText(`${e}`);
    }
    if (textarea.onPrettify) textarea.onPrettify(value, error, errorText);
  };

  useEffect(() => {
    if (value) {
      handlePrettify();
    }
  }, []);

  const handleOnChange = (e: any) => {
    const val = e.currentTarget.value;
    setValue(val);
    if (val) {
      if (textarea.onChange) textarea.onChange(value, error, errorText);
    } else {
      setError(textarea.required || false);
    }
  };

  return (
    <>
      <Box display="flex" justifyContent="end" mb={1}>
        <LoadingButton
          id="prettify"
          startIcon={<LocalFlorist />}
          content={button.label}
          onClick={handlePrettify}
          variant={button.variant}
        />
      </Box>
      <TextareaAutosize
        name={textarea.name}
        onChange={handleOnChange}
        value={value}
        aria-label="text-area"
        minRows={textarea?.minRows || 5}
        placeholder={textarea?.placeholder}
        style={{
          width: '100%',
          borderColor: error ? palette.red.normal : 'initial',
        }}
        required={textarea?.required || false}
      />
      {error && (
        <FormHelperText error={error} sx={{ color: palette.red.normal }}>
          {errorText}
        </FormHelperText>
      )}
    </>
  );
};
