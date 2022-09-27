import React, {
  FunctionComponent,
  ReactElement,
  useEffect,
  useRef,
  useState,
} from 'react';

import { LoadingButton as MuiLoadingButton } from '@mui/lab';
import { ButtonProps, SxProps, Theme, useTheme } from '@mui/material';

import { ButtonVariants, CFunction } from '../../types';

export type LoadingButtonProps = Omit<
  ButtonProps,
  'variant' | 'onClick' | 'sx'
> & {
  content?: string | ReactElement;
  variant?: ButtonVariants;
  sx?: SxProps<Theme>;
  onClick?: CFunction<any> | (() => void);
  id?: string;
};
export const LoadingButton: FunctionComponent<LoadingButtonProps> = ({
  content,
  variant = 'light',
  id,
  onClick,
  sx,
  ...props
}) => {
  const [loading, setLoading] = useState(false);
  const _isMounted = useRef(true);
  const theme = useTheme();

  const commonStyles = {
    margin: '1px',
    padding: '8px 16px',
    minWidth: 40,
    height: 40,
    borderRadius: '4px',
    '& .MuiButton-endIcon': {
      marginRight: 0,
      marginLeft: content ? 1 : 0,
    },
    '& .MuiButton-startIcon': {
      marginRight: content ? 1 : 0,
      marginLeft: 0,
    },
    '&.Mui-disabled': {
      backgroundColor: theme.palette.neutral[100],
      color: theme.palette.neutral[400],
      border: 'none',
    },
    textTransform: 'none',
    ...sx,
  } as SxProps;
  const lightStyles = {
    ...commonStyles,
    backgroundColor: theme.palette.neutral[0],
    color: theme.palette.neutral[900],
    ':hover': {
      backgroundColor: theme.palette.neutral[50],
    },
  } as SxProps;
  const strokeStyles = {
    ...commonStyles,
    backgroundColor: theme.palette.neutral[0],
    color: theme.palette.neutral[900],
    border: `1px solid ${theme.palette.neutral[200]}`,
    ':hover': {
      border: `1px solid ${theme.palette.neutral[900]}`,
    },
  } as SxProps;
  const primaryStyles = {
    ...commonStyles,
    backgroundColor: theme.palette.default.bright,
    color: theme.palette.neutral[900],
    ':hover': {
      backgroundColor: theme.palette.default.normal,
    },
  } as SxProps;
  const darkStyles = {
    ...commonStyles,
    backgroundColor: theme.palette.neutral[700],
    color: theme.palette.neutral[0],
    ':hover': {
      backgroundColor: theme.palette.neutral[600],
    },
    ':focus': {
      backgroundColor: theme.palette.neutral[600],
    },
  } as SxProps;

  const transparentStyles = {
    ...commonStyles,
    background: 'transparent',
  };

  const errorStyles = {
    ...commonStyles,
    background: theme.palette.red.normal,
    color: theme.palette.neutral[0],
    ':hover': {
      backgroundColor: theme.palette.red.bright,
    },
    ':focus': {
      backgroundColor: theme.palette.red.bright,
    },
  };

  const variantsMap = {
    light: lightStyles,
    stroke: strokeStyles,
    primary: primaryStyles,
    transparent: transparentStyles,
    dark: darkStyles,
    error: errorStyles,
  };

  useEffect(
    () => () => {
      _isMounted.current = false;
    },
    []
  );

  const handleClick = async () => {
    setLoading(true);
    if (onClick) {
      await onClick();
      if (_isMounted.current) {
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  };

  return (
    <MuiLoadingButton
      id={id}
      data-testid={id}
      sx={variantsMap[variant]}
      loading={loading}
      onClick={handleClick}
      {...props}
    >
      {content}
    </MuiLoadingButton>
  );
};
