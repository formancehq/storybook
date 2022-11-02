import React from 'react';

import { LocationCity } from '@mui/icons-material';
import { InputAdornment } from '@mui/material';

import { storyDocsParameters } from '../../utils';

import { TextField } from './index';

export default {
  title: 'Design System/Forms/TextField',
  component: TextField,
};

export const DefaultTextField = () => (
  <>
    <TextField
      name="firstname"
      label="Firstname"
      onChange={(e: any) => e}
      placeholder="Jean"
    />
    <TextField name="firstname" label="Firstname" fullWidth />
  </>
);
DefaultTextField.storyName = 'Default';
DefaultTextField.parameters = storyDocsParameters;

export const ErrorTextField = () => (
  <TextField
    name="lastname"
    label="Lastname"
    defaultValue="Dupont"
    error
    errorMessage="Wrong lastname"
  />
);
ErrorTextField.storyName = 'Error';
ErrorTextField.parameters = storyDocsParameters;

export const DisabledTextField = () => (
  <TextField name="city" label="City" defaultValue="Los Angeles" disabled />
);
DisabledTextField.storyName = 'Disabled';
DisabledTextField.parameters = storyDocsParameters;

export const StartIconTextField = () => (
  <>
    <TextField
      name="city"
      label="City"
      defaultValue="Los Angeles"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <LocationCity />
          </InputAdornment>
        ),
      }}
    />
    <TextField
      name="city"
      label="City"
      defaultValue="Los Angeles"
      error
      errorMessage="Oops !"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <LocationCity />
          </InputAdornment>
        ),
      }}
    />
    <TextField
      name="city"
      label="City"
      defaultValue="Los Angeles"
      disabled
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <LocationCity />
          </InputAdornment>
        ),
      }}
    />
  </>
);
StartIconTextField.storyName = 'Start icon';
StartIconTextField.parameters = storyDocsParameters;

export const FormTextField = () => (
  <>
    <TextField
      name="firstname"
      label="Firstname"
      onChange={(e: any) => e}
      placeholder="Jean"
    />
    <TextField name="lastname" label="Lastname" fullWidth />
    <TextField
      name="years"
      label="Years"
      fullWidth
      error
      errorMessage="Try again!"
    />
    <TextField name="city" label="City" error errorMessage="Wrong!" />
    <TextField name="country" label="Country" disabled />
    <TextField
      name="foo"
      label="Bar"
      defaultValue="Foobar"
      disabled
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <LocationCity />
          </InputAdornment>
        ),
      }}
    />
    <TextField
      name="bar"
      label="Foo"
      error
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <LocationCity />
          </InputAdornment>
        ),
      }}
    />
  </>
);
FormTextField.storyName = 'Form';
FormTextField.parameters = storyDocsParameters;

export const TextFieldWithoutLabel = () => (
  <>
    <TextField name="firstname" placeholder="Jean" />
  </>
);
TextFieldWithoutLabel.storyName = 'Without label';
TextFieldWithoutLabel.parameters = storyDocsParameters;
