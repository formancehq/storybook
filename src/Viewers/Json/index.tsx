import React, { FunctionComponent } from 'react';

import { Box, useTheme } from '@mui/material';
import { JSONTree } from 'react-json-tree';

import { ObjectOf } from '../../types';

export type JsonViewerProps = {
  jsonData: ObjectOf<any>;
  theme?: ObjectOf<string>;
};

export const JsonViewer: FunctionComponent<JsonViewerProps> = ({
  jsonData,
  theme,
}) => {
  const { typography } = useTheme();

  // TODO use palette

  const defaultTheme = {
    scheme: 'monokai',
    author: 'wimer hazenberg (http://www.monokai.nl)',
    base00: '#272822',
    base01: '#383830',
    base02: '#49483e',
    base03: '#75715e',
    base04: '#a59f85',
    base05: '#f8f8f2',
    base06: '#f5f4f1',
    base07: '#f9f8f5',
    base08: '#f92672',
    base09: '#fd971f',
    base0A: '#f4bf75',
    base0B: '#a6e22e',
    base0C: '#a1efe4',
    base0D: '#66d9ef',
    base0E: '#ae81ff',
    base0F: '#cc6633',
  };

  return (
    <Box
      sx={{
        display: 'flex',
        background: ({ palette }) => palette.neutral[900],
        justifyContent: 'space-between',
        alignItems: 'self-start',
        p: 1,
        '& ul': {
          margin: '0 !important',
          background: ({ palette }) => `${palette.neutral[900]} !important`,
        },
        '& li': {
          paddingTop: '0 !important',
          ...typography.money,
        },
        borderRadius: '6px',
      }}
    >
      <JSONTree data={jsonData} theme={theme || defaultTheme} />
    </Box>
  );
};
