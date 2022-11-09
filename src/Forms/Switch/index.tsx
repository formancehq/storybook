import React, { FunctionComponent } from 'react';

import {
  Box,
  Switch as MuiSwitch,
  SwitchProps as MuiSwitchProps,
  useTheme,
} from '@mui/material';
import { get } from 'lodash';

import { ColorVariants, FormFieldErrorProps } from '../../types';
import { darkKey, normalKey } from '../../utils';

import { FormHelper } from '../FormHelper';

export type SwitchProps = Omit<MuiSwitchProps, 'color'> &
  FormFieldErrorProps & { variant?: ColorVariants };

export const Switch: FunctionComponent<SwitchProps> = ({
  error,
  errorMessage,
  variant = 'primary',
  ...props
}) => {
  const { palette } = useTheme();

  const darkColor = get(palette, `${variant}.${darkKey(variant)}`);
  const normalColor = get(palette, `${variant}.${normalKey(variant)}`);

  return (
    <Box sx={{}}>
      <MuiSwitch
        {...props}
        sx={{
          '.Mui-checked': {
            color: `${darkColor} !important`,
          },
          '.MuiSwitch-track': {
            background: `${normalColor} !important`,
          },
          '.MuiButtonBase-root:hover': {
            background: 'transparent',
          },
          '.MuiButtonBase-root.Mui-checked:hover': {
            background: 'transparent',
          },
        }}
        inputProps={{ 'aria-label': 'controlled' }}
      />
      <FormHelper error={error} errorMessage={errorMessage} />
    </Box>
  );
};
