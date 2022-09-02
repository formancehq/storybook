// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const noop: any = (_item?: any) => undefined;

export const get = <T, K>(
  value: T,
  getter: (t: T) => K,
  defaultValue: K | null = null
) => {
  try {
    return getter(value) ?? defaultValue;
  } catch {
    return defaultValue;
  }
};

export const storyDocsParameters = {
  docs: {
    source: {
      type: 'dynamic',
    },
  },
};
