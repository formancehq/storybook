export type ButtonVariants = 'light' | 'stroke' | 'primary' | 'dark';

export type ObjectOf<T> = {
  [name: string]: T;
};

export type CFunction<T> = (_item?: T) => void;
