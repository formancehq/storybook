import React from 'react';

import { storyDocsParameters } from '../../utils';

import { RadioGroup } from './index';

export default {
  title: 'Design System/Forms/RadioGroup',
  component: RadioGroup,
};

export const DefaultRadioGroup = () => (
  <RadioGroup
    groups={[
      {
        label: 'Foo',
        description: 'Foo is real',
        required: true,
        name: 'foo',
        value: 'foo',
      },
      {
        label: 'Bar',
        description: 'Bar is real',
        required: true,
        name: 'bar',
        value: 'bar',
      },
    ]}
    name="some-foo-bar"
  />
);
DefaultRadioGroup.storyName = 'Default';
DefaultRadioGroup.parameters = storyDocsParameters;

export const SoonRadioGroup = () => (
  <RadioGroup
    groups={[
      {
        label: 'Foo',
        description: 'Foo is real',
        required: true,
        name: 'foo',
        value: 'foo',
      },
      {
        label: 'Bar',
        description: 'Bar is real',
        required: true,
        name: 'bar',
        value: 'bar',
        disabled: true,
        early: true,
      },
    ]}
    name="some-foo-bar"
  />
);
SoonRadioGroup.storyName = 'Soon';
SoonRadioGroup.parameters = storyDocsParameters;

export const ErrorRadioGroup = () => (
  <RadioGroup
    groups={[
      {
        label: 'Foo',
        description: 'Foo is real',
        required: true,
        name: 'foo',
        value: 'foo',
        error: true,
        errorMessage: 'Foo is required',
      },
      {
        label: 'Bar',
        description: 'Bar is real',
        required: true,
        name: 'bar',
        value: 'bar',
      },
    ]}
    name="some-foo-bar"
  />
);
ErrorRadioGroup.storyName = 'Error';
ErrorRadioGroup.parameters = storyDocsParameters;
