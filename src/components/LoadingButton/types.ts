import * as React from 'react';
import { ReactElement } from 'react';
import { ButtonVariants } from '../../types';

export type LoadingButtonProps = {
  content?: string | ReactElement;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  onClick?: any;
  variant?: ButtonVariants;
  disabled?: boolean;
  type?: string;
  id?: string;
  fullwidth?: boolean;
};
