// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Theme } from '@mui/material';

import { ColorVariants } from './types';

export const darkKey = (variant: ColorVariants) =>
  variant === 'primary' || variant === 'secondary' ? 'dark' : 'darker';
export const normalKey = (variant: ColorVariants) =>
  variant === 'primary' || variant === 'secondary' ? 'main' : 'normal';

export const copyTokenToClipboard = async (value: string): Promise<void> =>
  await navigator.clipboard.writeText(value);

export const storyDocsParameters = {
  backgrounds: { default: 'control' },
  docs: {
    source: {
      type: 'dynamic',
    },
  },
};

export const formFieldsetErrorSx = (error = false) => ({
  '& fieldset': {
    borderRadius: '6px',
    borderWidth: '2px',
    borderColor: (theme: Theme) =>
      error
        ? `${theme.palette.red.normal} !important`
        : theme.palette.neutral[200],
  },
});

export const upperCaseFirstLetter = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);

export const camelCaseToSentence = (str: string) =>
  str
    .replace(/([A-Z])/g, ' $1')
    .toLocaleLowerCase()
    .replace(/^./, (str) => upperCaseFirstLetter(str));
