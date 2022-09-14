import React from 'react';

import { storyDocsParameters } from '../../utils';

import { SelectItems, Select } from './index';

export default {
  title: 'Design System/Forms/Select',
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
