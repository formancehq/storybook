import React from 'react';

import { storyDocsParameters } from '../../utils';

import { JsonViewer } from './index';

export default {
  title: 'Design System/Viewers/Json',
  component: JsonViewer,
};

const jsonData = {
  amount: -5000,
  apiresource: {
    lastresponse: null,
  },
};

const theme = {
  base00: '#272822',
  base01: '#383830',
  base02: '#49483e',
  base03: '#75715e',
  base04: '#a59f85',
  base05: '#f8f8f2',
  base06: '#f5f4f1',
  base07: '#f9f8f5',
  base08: '#12de56',
  base09: '#fd971f',
  base0A: '#f4bf75',
  base0B: '#f33cc8',
  base0C: '#a1efe4',
  base0D: '#66d9ef',
  base0E: '#ae81ff',
  base0F: '#cc6633',
};

export const Expanded = () => <JsonViewer jsonData={jsonData} />;

Expanded.storyName = 'Expanded';
Expanded.parameters = storyDocsParameters;

export const NotExpanded = () => (
  <JsonViewer jsonData={jsonData} expanded={false} />
);

NotExpanded.storyName = 'Not expanded';
NotExpanded.parameters = storyDocsParameters;

export const WithTheme = () => <JsonViewer jsonData={jsonData} theme={theme} />;

WithTheme.storyName = 'With Theme';
WithTheme.parameters = storyDocsParameters;

export const Empty = () => <JsonViewer jsonData={{}} theme={theme} />;

Empty.storyName = 'Empty';
Empty.parameters = storyDocsParameters;
