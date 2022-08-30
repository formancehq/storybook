import React from 'react';
import { DatePicker } from './index';
import { storyDocsParameters } from '../../utils';

export default {
  title: 'Design System/Forms/DatePicker',
  component: DatePicker,
};

export const DefaultDatePicker = () => <DatePicker onChange={() => null} />;
DefaultDatePicker.storyName = 'Default';
DefaultDatePicker.parameters = storyDocsParameters;
