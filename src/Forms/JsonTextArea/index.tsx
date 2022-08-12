import { Box, FormHelperText, TextareaAutosize, useTheme } from '@mui/material';
import React, { FunctionComponent, useEffect, useState } from 'react';
import { LoadingButton } from '../../Buttons/LoadingButton';
import { LocalFlorist } from '@mui/icons-material';
import { ButtonVariants, CFunction } from '../../types';

export type JsonTextAreaProps = {
  button?: {
    label: string;
    variant?: ButtonVariants;
  };
  textarea: {
    onChange?: CFunction<any>;
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
  };

  useEffect(() => {
    if (value) {
      handlePrettify();
    }
  }, [value]);

  const handleOnChange = (e: any) => {
    setValue(e.currentTarget.value);
    if (textarea.onChange) textarea.onChange(value);
  };

  return (
    <>
      {button && (
        <Box display="flex" justifyContent="end" mb={1}>
          <LoadingButton
            id="prettify"
            startIcon={<LocalFlorist />}
            content={button.label}
            onClick={handlePrettify}
            variant={button.variant}
          />
        </Box>
      )}
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
