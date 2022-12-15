import React from 'react';

import { storyDocsParameters } from '../../utils';

import { Code } from './index';

export default {
  title: 'Design System/Forms/Code',
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

export const CodeEditorError = () => (
  <Code code={json} editor error errorMessage="Oops" height={500} />
);

CodeEditorError.storyName = 'Editor with error';
CodeEditorError.parameters = storyDocsParameters;
