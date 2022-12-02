import { theme } from '../src';
import { ThemeProvider } from '@mui/material/styles';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: theme.palette.neutral[0],
      },
      {
        name: 'dark',
        value: theme.palette.neutral[800],
      },
    ],
  },
};

export const decorators = [
  (Story) => <ThemeProvider theme={theme}>{Story()}</ThemeProvider>,
];
