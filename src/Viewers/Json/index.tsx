import React, { FunctionComponent } from 'react';

import { Box, useTheme } from '@mui/material';
import { JSONTree } from 'react-json-tree';

import { ObjectOf } from '../../types';

export type JsonViewerProps = {
  jsonData: ObjectOf<any>;
  theme?: ObjectOf<string>;
  expanded?: boolean;
};

export const JsonViewer: FunctionComponent<JsonViewerProps> = ({
  jsonData,
  theme,
  expanded = true,
}) => {
  const { typography } = useTheme();
  const expand = expanded ? undefined : () => false;

  // TODO use palette

  const defaultTheme = {
    scheme: 'monokai',
    author: 'wimer hazenberg (http://www.monokai.nl)',
    base00: '#272822',
    base01: '#383830',
    base02: '#49483e',
    base03: '#91979c', // punctuation
    base04: '#a59f85',
    base05: '#f8f8f2',
    base06: '#f5f4f1',
    base07: '#f9f8f5',
    base08: '#f92672',
    base09: '#2ce310', // number + boolean
    base0A: '#f4bf75',
    base0B: '#4fcfe8', // string
    base0C: '#a1efe4',
    base0D: '#de6fca', // key
    base0E: '#ae81ff',
    base0F: '#cc6633',
  };

  return (
    <Box
      component="span"
      sx={{
        display: 'flex',
        background: '#011627',
        justifyContent: 'space-between',
        alignItems: 'self-start',
        p: 1,
        '& ul': {
          margin: '0 !important',
          background: `#011627!important`,
        },
        '& li': {
          paddingTop: '0 !important',
          ...typography.money,
          '& label': {
            wordBreak: 'break-word',
          },
        },
        borderRadius: '6px',
      }}
    >
      <JSONTree
        data={jsonData}
        theme={theme || defaultTheme}
        shouldExpandNode={expand}
      />
    </Box>
  );
};
