import React, { FunctionComponent, useEffect, useState } from 'react';

import { Box, useTheme } from '@mui/material';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/nightOwl';
import Editor from 'react-simple-code-editor';

import { FormFieldErrorProps } from '../../types';

import { FormHelper } from '../FormHelper';

export type CodeProps = FormFieldErrorProps & {
  code: string;
  height?: number | string;
  width?: number | string;
  editor?: boolean;
  onChange?: (value: string) => void;
  onInit?: () => void;
};

export const Code: FunctionComponent<CodeProps> = ({
  code,
  height = 'auto',
  width = 'auto',
  editor = false,
  onChange,
  onInit,
  error,
  errorMessage,
}) => {
  const { typography, palette } = useTheme();
  const [value, setValue] = useState<string>(code);

  const tokenColor = {
    punctuation: '#91979c',
    ['literal-property']: '#de6fca',
    string: '#4fcfe8',
    boolean: '#2ce310',
    number: '#eb914d',
  };

  const handleChange = (val: string) => {
    setValue(val);
    onChange && onChange(val);
  };

  useEffect(() => {
    onInit && onInit();
  }, []);

  const renderHighlight = (code: string) => (
    <Box
      sx={{
        borderRadius: '6px',
        ...typography.money,
        textAlign: editor ? 'left' : 'center',
        pre: !editor
          ? {
              borderRadius: '6px',
              textAlign: 'left',
              m: 0,
              p: 1,
              overflow: 'auto',
              height,
              width,
              '.token-line': {
                ...typography.money,
              },
            }
          : {},
      }}
    >
      <Highlight {...defaultProps} code={code} language="jsx" theme={theme}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <>
            {!editor ? (
              <pre className={className} style={style}>
                {tokens.map((line, i) => (
                  <Box
                    key={i}
                    {...getLineProps({ line, key: i })}
                    sx={{ div: { display: 'table-row' } }}
                  >
                    <Box
                      component="span"
                      sx={{
                        display: 'table-cell',
                        textAlign: 'right',
                        pr: 1,
                        userSelect: 'none',
                        color: `${palette.neutral[500]} !important`,
                      }}
                    >
                      {i + 1}
                    </Box>
                    <Box
                      component="span"
                      sx={{
                        display: 'table-cell',
                      }}
                    >
                      {line.map((token, key) => (
                        <span key={key} {...getTokenProps({ token, key })} />
                      ))}
                    </Box>
                  </Box>
                ))}
              </pre>
            ) : (
              <>
                {tokens.map((line, i) => (
                  <Box key={i} {...getLineProps({ line, key: i })}>
                    {line.map((token, key) => (
                      <>
                        <Box
                          key={key}
                          component="span"
                          sx={{
                            color:
                              tokenColor[
                                token
                                  .types[0] as unknown as keyof typeof tokenColor
                              ] + '!important',
                          }}
                          {...getTokenProps({ token, key })}
                        />
                      </>
                    ))}
                  </Box>
                ))}
              </>
            )}
          </>
        )}
      </Highlight>
    </Box>
  );

  return (
    <>
      {editor ? (
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
            pre: {
              border: `2px solid ${
                error ? palette.red.normal : 'transparent'
              } !important`,
              borderRadius: '6px',
            },
          }}
        >
          <Editor
            value={value}
            onValueChange={handleChange}
            highlight={renderHighlight}
            padding={10}
            style={{
              ...theme.plain,
              boxSizing: 'border-box',
              ...typography.money,
              borderRadius: '6px',
            }}
          />
          <FormHelper error={error} errorMessage={errorMessage} />
        </Box>
      ) : (
        renderHighlight(value)
      )}
    </>
  );
};
