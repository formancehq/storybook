import React from 'react';
import { TextArea } from './index';
import { storyDocsParameters } from '../../utils';

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
