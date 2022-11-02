import React from 'react';

import { storyDocsParameters } from '../../../utils';

import { DatePicker } from './index';

export default {
  title: 'Design System/Forms/Pickers/Date',
  component: DatePicker,
};

export const DefaultDatePicker = () => <DatePicker onChange={() => null} />;
DefaultDatePicker.storyName = 'Default';
DefaultDatePicker.parameters = storyDocsParameters;

export const ErrorDatePicker = () => (
  <DatePicker onChange={() => null} error errorMessage="Date required" />
);
ErrorDatePicker.storyName = 'Error';
ErrorDatePicker.parameters = storyDocsParameters;
