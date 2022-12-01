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
  const { palette, typography } = useTheme();

  const defaultTheme = {
    base00: palette.neutral[0], // background of the whole container
    base01: palette.neutral[900],
    base02: palette.neutral[900],
    base03: palette.neutral[900], // secondary key
    base04: palette.neutral[900],
    base05: palette.neutral[900],
    base06: palette.neutral[900],
    base07: palette.neutral[900],
    base08: palette.default.bright,
    base09: palette.neutral[900],
    base0A: palette.yellow.darker,
    base0B: palette.default.normal,
    base0C: palette.default.darker,
    base0D: palette.neutral[900], // primary key
    base0E: palette.default.bright,
    base0F: palette.default.bright,
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
