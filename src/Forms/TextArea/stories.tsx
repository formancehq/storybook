import React from 'react';

import { storyDocsParameters } from '../../utils';

import { TextArea } from './index';

export default {
  title: 'Design System/Forms/TextArea',
  component: TextArea,
};

const Text = {
  hello: 'toto',
  bye: {
    foo: 'bar',
  },
};

export const DefaultTextArea = () => (
  <TextArea name="metadata" minRows={20} placeholder="Add some metadata" />
);
DefaultTextArea.storyName = 'Default';
DefaultTextArea.parameters = storyDocsParameters;

export const TextAreaWithData = () => (
  <TextArea
    name="metadata"
    minRows={20}
    placeholder="Add some metadata"
    value={JSON.stringify(Text)}
  />
);
TextAreaWithData.storyName = 'With data';
TextAreaWithData.parameters = storyDocsParameters;

export const TextAreaWithError = () => (
  <TextArea
    name="metadata"
    minRows={5}
    placeholder="Add some metadata"
    value="foo"
    error
    errorMessage="Wrong!"
  />
);
TextAreaWithError.storyName = 'With error';
TextAreaWithError.parameters = storyDocsParameters;

export const TextAreaWithLabel = () => (
  <TextArea
    label="Metadata"
    name="metadata"
    minRows={5}
    placeholder="Add some metadata"
    value="foo"
  />
);
TextAreaWithLabel.storyName = 'With label';
TextAreaWithLabel.parameters = storyDocsParameters;

export const TextAreaWithLabelError = () => (
  <TextArea
    label="Metadata"
    name="metadata"
    minRows={5}
    placeholder="Add some metadata"
    value="foo"
    error
    errorMessage="Wrong!"
  />
);
TextAreaWithLabelError.storyName = 'With label error';
TextAreaWithLabelError.parameters = storyDocsParameters;
