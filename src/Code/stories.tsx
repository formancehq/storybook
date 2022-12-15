import React from 'react';

import { Code } from './index';

import { storyDocsParameters } from '../utils';

export default {
  title: 'Design System/Code',
  component: Code,
};

const json = `{
  foo: 'bar',
  metas: [
    {
      id: 'something',
      label: 'lorem',
      keys: ['red', 'blue'],
      obj: { x: '1', y: false },
    },
  ],
}`;

export const CodeViewer = () => <Code code={json} />;

CodeViewer.storyName = 'Viewer';
CodeViewer.parameters = storyDocsParameters;

export const CodeEditor = () => <Code code={json} editor />;

CodeEditor.storyName = 'Editor';
CodeEditor.parameters = storyDocsParameters;
