import React from 'react';
import { JsonTextArea } from './index';
import { storyDocsParameters } from '../../utils';

export default {
  title: 'Design System/Forms/JsonTextArea',
  component: JsonTextArea,
};

const json = {
  hello: 'toto',
  bye: {
    foo: 'bar',
  },
};

export const DefaultJsonArea = () => (
  <JsonTextArea
    button={{ label: 'Prettify' }}
    textarea={{
      name: 'metadata',
      minRows: 20,
      placeholder: 'Add some metadata',
      onChange: (value) => console.log(value),
    }}
  />
);
DefaultJsonArea.storyName = 'Default';
DefaultJsonArea.parameters = storyDocsParameters;

export const JsonAreaRequired = () => (
  <JsonTextArea
    button={{ label: 'Prettify' }}
    textarea={{
      name: 'metadata',
      minRows: 20,
      required: true,
      placeholder: 'Add some metadata',
      onChange: (value) => console.log(value),
    }}
  />
);
JsonAreaRequired.storyName = 'Required';
JsonAreaRequired.parameters = storyDocsParameters;

export const JsonAreaWithButton = () => (
  <JsonTextArea
    textarea={{
      name: 'metadata',
      minRows: 5,
      placeholder: 'Add some metadata',
    }}
    button={{
      label: 'Prettify',
      variant: 'dark',
    }}
  />
);
JsonAreaWithButton.storyName = 'With button';
JsonAreaWithButton.parameters = storyDocsParameters;

export const JsonAreaWithData = () => (
  <JsonTextArea
    button={{ label: 'Prettify' }}
    textarea={{
      name: 'metadata',
      minRows: 20,
      placeholder: 'Add some metadata',
      json: JSON.stringify(json),
    }}
  />
);
JsonAreaWithData.storyName = 'With data';
JsonAreaWithData.parameters = storyDocsParameters;

export const JsonAreaWithError = () => (
  <JsonTextArea
    button={{ label: 'Prettify' }}
    textarea={{
      name: 'metadata',
      minRows: 20,
      placeholder: 'Add some metadata',
      json: `{"foo", "bar"}`,
    }}
  />
);

JsonAreaWithError.storyName = 'With error';
JsonAreaWithError.parameters = storyDocsParameters;
