// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { theme } from './muiTheme';
import { ColorVariants } from './types';

export const darkKey = (variant: ColorVariants) =>
  variant === 'primary' || variant === 'secondary' ? 'dark' : 'darker';
export const normalKey = (variant: ColorVariants) =>
  variant === 'primary' || variant === 'secondary' ? 'main' : 'normal';

export const copyTokenToClipboard = async (value: string): Promise<void> =>
  await navigator.clipboard.writeText(value);

export const storyDocsParameters = {
  docs: {
    source: {
      type: 'dynamic',
    },
  },
};

export const formFieldsetErrorSx = (error = false) => ({
  '& fieldset': {
    borderColor: error ? `${theme.palette.red.normal} !important` : 'inherit',
  },
});

export const upperCaseFirstLetter = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);

export const camelCaseToSentence = (str: string) =>
  str
    .replace(/([A-Z])/g, ' $1')
    .toLocaleLowerCase()
    .replace(/^./, (str) => upperCaseFirstLetter(str));
