import React from 'react';

import { storyDocsParameters } from '../../../utils';

import { DateTimePicker } from './index';

export default {
  title: 'Design System/Forms/Pickers/DateTime',
  component: DateTimePicker,
};

export const DefaultDateTimePicker = () => (
  <DateTimePicker onChange={() => null} />
);
DefaultDateTimePicker.storyName = 'Default';
DefaultDateTimePicker.parameters = storyDocsParameters;

export const ErrorDateTimePicker = () => (
  <DateTimePicker onChange={() => null} error errorMessage="Date required" />
);
ErrorDateTimePicker.storyName = 'Error';
ErrorDateTimePicker.parameters = storyDocsParameters;
