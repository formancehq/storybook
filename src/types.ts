export type ButtonVariants =
  | 'light'
  | 'stroke'
  | 'primary'
  | 'secondary'
  | 'dark'
  | 'transparent'
  | 'error';
export type ColorVariants =
  | 'red'
  | 'blue'
  | 'default'
  | 'primary'
  | 'secondary'
  | 'brown'
  | 'yellow'
  | 'violet'
  | 'green';

export type ObjectOf<T> = {
  [name: string]: T;
};

export type CFunction<T> = (_item?: T) => void;

export type FormFieldErrorProps = {
  error?: boolean;
  errorMessage?: string;
};
