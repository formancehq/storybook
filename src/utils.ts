// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const noop: any = (_item?: any) => undefined;

export const isArray = (value: any) => !!value && value.constructor === Array;

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
