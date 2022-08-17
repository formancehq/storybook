import React from 'react';
import { TextField } from './index';
import { CircleNotifications, LocationCity } from '@mui/icons-material';
import { InputAdornment } from '@mui/material';
import { storyDocsParameters } from '../../utils';

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
    helperText="Wrong lastname"
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
      startAdornment={
        <InputAdornment position="start">
          <LocationCity />
        </InputAdornment>
      }
    />
    <TextField
      name="city"
      label="City"
      defaultValue="Los Angeles"
      error
      helperText="Oops !"
      startAdornment={
        <InputAdornment position="start">
          <LocationCity />
        </InputAdornment>
      }
    />
    <TextField
      name="city"
      label="City"
      defaultValue="Los Angeles"
      disabled
      startAdornment={
        <InputAdornment position="start">
          <LocationCity />
        </InputAdornment>
      }
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
      helperText="Try again!"
    />
    <TextField name="city" label="City" error helperText="Wrong!" />
    <TextField name="country" label="Country" disabled />
    <TextField
      name="foo"
      label="Bar"
      defaultValue="Foobar"
      disabled
      startAdornment={
        <InputAdornment position="start">
          <LocationCity />
        </InputAdornment>
      }
    />
    <TextField
      name="bar"
      label="Foo"
      error
      endAdornment={
        <InputAdornment position="end">
          <CircleNotifications />
        </InputAdornment>
      }
    />
  </>
);
FormTextField.storyName = 'Form';
FormTextField.parameters = storyDocsParameters;
