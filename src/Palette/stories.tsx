import React from 'react';

import { Box, Typography } from '@mui/material';

import { theme } from '../muiTheme';

export default {
  title: 'Design System/Palette',
};

const renderItem = (label: string, key: any, id: number) => (
  <Box display="flex" alignItems="center" key={id}>
    <Box
      sx={{
        m: 1,
        width: 50,
        height: 50,
        // TODO fix ts-ignore
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        backgroundColor: ({ palette }) => palette[label.toLowerCase()][key],
      }}
    />
    <Typography>
      {label} {key}
    </Typography>
  </Box>
);

export const PaletteNeutral = () => (
  <>
    {Object.keys(theme.palette.neutral).map((key: any, index) =>
      renderItem('Neutral', key, index)
    )}
  </>
);
PaletteNeutral.storyName = 'Neutral';

export const PaletteBrown = () => (
  <>
    {Object.keys(theme.palette.brown).map((key: any, index) =>
      renderItem('Brown', key, index)
    )}
  </>
);
PaletteBrown.storyName = 'Brown';

export const PaletteBlue = () => (
  <>
    {Object.keys(theme.palette.blue).map((key: any, index) =>
      renderItem('Blue', key, index)
    )}
  </>
);
PaletteBlue.storyName = 'Blue';

export const PaletteViolet = () => (
  <>
    {Object.keys(theme.palette.violet).map((key: any, index) =>
      renderItem('Violet', key, index)
    )}
  </>
);
PaletteViolet.storyName = 'Violet';

export const PaletteGreen = () => (
  <>
    {Object.keys(theme.palette.green).map((key: any, index) =>
      renderItem('Green', key, index)
    )}
  </>
);
PaletteGreen.storyName = 'Green';

export const PaletteRed = () => (
  <>
    {Object.keys(theme.palette.green).map((key: any, index) =>
      renderItem('Red', key, index)
    )}
  </>
);
PaletteRed.storyName = 'Red';

export const PaletteYellow = () => (
  <>
    {Object.keys(theme.palette.yellow).map((key: any, index) =>
      renderItem('Yellow', key, index)
    )}
  </>
);
PaletteYellow.storyName = 'Yellow';

export const PaletteDefault = () => (
  <>
    {Object.keys(theme.palette.default).map((key: any, index) =>
      renderItem('Default', key, index)
    )}
  </>
);
PaletteDefault.storyName = 'Default';
