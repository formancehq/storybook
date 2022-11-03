// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { theme } from './muiTheme';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const noop: any = (_item?: any) => undefined;

export const isArray = (value: any) => !!value && value.constructor === Array;

export const copyTokenToClipboard = async (value: string): Promise<void> =>
  await navigator.clipboard.writeText(value);

export const storyDocsParameters = {
  docs: {
    source: {
      type: 'dynamic',
    },
  },
};

/**
 * https://github.com/rayepps/radash/blob/master/src/object.ts
 * Omit a list of properties from an object
 * returning a new object with the properties
 * that remain
 */
export const omit = <T, TKeys extends keyof T>(
  obj: T,
  keys: TKeys[]
): Omit<T, TKeys> => {
  if (!obj) return {} as Omit<T, TKeys>;
  if (!keys || keys.length === 0) return obj as Omit<T, TKeys>;

  return keys.reduce(
    (acc, key) => {
      // Gross, I know, it's mutating the object, but we
      // are allowing it in this very limited scope due
      // to the performance implications of an omit func.
      // Not a pattern or practice to use elsewhere.
      delete acc[key];

      return acc;
    },
    { ...obj }
  );
};

/**
 * Given a delay and a function returns a new function
 * that will only call the source function after delay
 * milliseconds have passed without any invocations
 */
export const debounce = <TArgs extends any[]>(
  { delay }: { delay: number },
  func: (...args: TArgs) => any
): ((...args: TArgs) => void) => {
  let timer: any = null;
  const debounced = (...args: TArgs) => {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay);
  };

  return debounced as unknown as (...args: TArgs) => void;
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
