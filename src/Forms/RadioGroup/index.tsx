import React, { FunctionComponent } from 'react';

import {
  Box,
  FormHelperText,
  FormControlLabel,
  Radio,
  RadioGroup as MuiRadioGroup,
  RadioProps,
} from '@mui/material';

import { Chip } from '../../Chip';
import { FormFieldErrorProps } from '../../types';

import { FormHelper } from '../FormHelper';

export type Group = {
  required?: boolean;
  label: string;
  description?: string;
  name: string;
  value: string;
  disabled?: boolean;
  early?: boolean;
} & FormFieldErrorProps;

export type RadioGroupProps = {
  groups: Group[];
  name: string;
} & RadioProps;

export const RadioGroup: FunctionComponent<RadioGroupProps> = ({
  groups,
  name,
  ...props
}) => (
  <MuiRadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    defaultValue={groups[0].value}
    name={name}
    sx={{ flexDirection: 'row', justifyContent: 'start' }}
  >
    {groups.map(
      (
        {
          label,
          description,
          name,
          value,
          disabled,
          error,
          errorMessage,
          early,
        },
        index
      ) => (
        <Box key={index}>
          <Box
            sx={{
              width: '420px',
              padding: 1,
              marginTop: 2,
              marginRight: '26px',
              cursor: 'pointer',
              borderRadius: '4px',
              border: ({ palette }) =>
                disabled
                  ? `2px solid ${palette.neutral[400]}`
                  : `2px solid ${palette.neutral[900]}`,
            }}
          >
            {early && (
              <Box
                sx={{
                  marginTop: -2.5,
                  display: 'flex',
                  float: 'right',
                }}
              >
                <Chip variant="square" label="Soon!" />
              </Box>
            )}
            <FormControlLabel
              value={value}
              sx={{ width: '100%' }}
              control={
                <Radio
                  sx={{
                    ':hover': {
                      backgroundColor: 'transparent',
                    },
                  }}
                  disabled={disabled}
                  name={name}
                  {...props}
                />
              }
              label={label}
            />
            <Box ml={4}>
              <FormHelperText
                sx={{
                  color: ({ palette }) =>
                    disabled ? palette.neutral[400] : 'inherit',
                }}
              >
                {description}
              </FormHelperText>
            </Box>
          </Box>
          <Box>
            <FormHelper error={error} errorMessage={errorMessage} />
          </Box>
        </Box>
      )
    )}
  </MuiRadioGroup>
);
