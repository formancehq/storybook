import React from 'react';
import { JsonTextArea } from './index';

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
    textarea={{
      name: 'metadata',
      minRows: 20,
      placeholder: 'Add some metadata',
      onChange: (value: string) => console.log(value),
    }}
  />
);
DefaultJsonArea.storyName = 'Default';

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

export const JsonAreaWithData = () => (
  <JsonTextArea
    textarea={{
      name: 'metadata',
      minRows: 20,
      placeholder: 'Add some metadata',
      json: JSON.stringify(json),
    }}
  />
);
JsonAreaWithData.storyName = 'With data';

export const JsonAreaWithError = () => (
  <JsonTextArea
    textarea={{
      name: 'metadata',
      minRows: 20,
      placeholder: 'Add some metadata',
      json: `{"foo", "bar"}`,
    }}
  />
);
JsonAreaWithError.storyName = 'With error';
