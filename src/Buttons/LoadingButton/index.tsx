import { LoadingButton as MuiLoadingButton } from '@mui/lab';
import React, {
  FunctionComponent,
  ReactElement,
  useEffect,
  useRef,
  useState,
} from 'react';
import { SxProps, Theme, useTheme } from '@mui/material';
import { ButtonVariants, CFunction } from '../../types';

export type LoadingButtonProps = {
  content?: string | ReactElement;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  onClick?: CFunction<any> | (() => void);
  variant?: ButtonVariants;
  disabled?: boolean;
  type?: string;
  id?: string;
  fullwidth?: boolean;
  sx?: SxProps<Theme>;
  onMouseEnter?: CFunction<any>;
  onMouseLeave?: CFunction<any>;
};

export const LoadingButton: FunctionComponent<LoadingButtonProps> = ({
  content,
  startIcon,
  endIcon,
  onClick,
  variant = 'light',
  type,
  disabled = false,
  id,
  fullwidth = false,
  sx,
  onMouseEnter,
  onMouseLeave,
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
  };
  const lightStyles = {
    ...commonStyles,
    backgroundColor: theme.palette.neutral[0],
    color: theme.palette.neutral[900],
    ':hover': {
      backgroundColor: theme.palette.neutral[50],
    },
  };
  const strokeStyles = {
    ...commonStyles,
    backgroundColor: theme.palette.neutral[0],
    color: theme.palette.neutral[900],
    border: `1px solid ${theme.palette.neutral[200]}`,
    ':hover': {
      border: `1px solid ${theme.palette.neutral[900]}`,
    },
  };
  const primaryStyles = {
    ...commonStyles,
    backgroundColor: theme.palette.default.bright,
    color: theme.palette.neutral[900],
    ':hover': {
      backgroundColor: theme.palette.default.normal,
    },
  };
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
  };

  const variantsMap = {
    light: lightStyles,
    stroke: strokeStyles,
    primary: primaryStyles,
    dark: darkStyles,
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
    }
  };

  return (
    <MuiLoadingButton
      id={id}
      data-testid={id}
      sx={variantsMap[variant]}
      fullWidth={fullwidth}
      loading={loading}
      disabled={disabled}
      type={type}
      startIcon={startIcon}
      endIcon={endIcon}
      onClick={handleClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      href=""
    >
      {content}
    </MuiLoadingButton>
  );
};
