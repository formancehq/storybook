export type ButtonVariants = 'light' | 'stroke' | 'primary' | 'dark';
export type ColorVariants =
  | 'red'
  | 'blue'
  | 'default'
  | 'brown'
  | 'yellow'
  | 'violet';

export type ObjectOf<T> = {
  [name: string]: T;
};

export type CFunction<T> = (_item?: T) => void;
