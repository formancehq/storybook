import React from 'react';

import { Typography } from '@mui/material';

import { storyDocsParameters } from '../../utils';

import { SelectItems, Select } from './index';

export default {
  title: 'Design System/Forms/Select/Unique',
  component: Select,
};

const items: SelectItems[] = [
  {
    id: 1,
    label: 'Foo',
  },
  {
    id: 2,
    label: 'Bar',
  },
  {
    id: 3,
    label: 'BarFoo',
  },
  {
    id: 4,
    label: 'FooBar',
  },
];

export const DefaultSelect = () => (
  <Select
    select={{ name: 'default' }}
    items={items}
    placeholder="Select a foobar"
  />
);
DefaultSelect.storyName = 'Default';
DefaultSelect.parameters = storyDocsParameters;

export const ErrorSelect = () => (
  <Select
    select={{ name: 'error' }}
    items={items}
    error
    errorMessage="You must choose a value"
    placeholder="Select a foobar"
  />
);
ErrorSelect.storyName = 'Error';
ErrorSelect.parameters = storyDocsParameters;

export const CustomRenderOption = () => (
  <Select
    select={{ name: 'default' }}
    items={items}
    placeholder="Select a foobar"
    renderOption={(item) => (
      <Typography style={{ fontWeight: 'bold' }}>{item.label}</Typography>
    )}
  />
);
CustomRenderOption.storyName = 'Custom option';
CustomRenderOption.parameters = storyDocsParameters;
