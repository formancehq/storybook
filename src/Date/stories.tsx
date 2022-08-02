import React from 'react';
import { Date } from './index';

export default {
  title: 'Design System/Sections/Date',
  component: Date,
};

export const DateWithMessageSection = () => (
  <div>
    <Date timestamp="123456789" message="Created on" />
  </div>
);
DateWithMessageSection.storyName = 'With message';

export const DefaultDateSection = () => (
  <div>
    <Date timestamp="123456789" />
  </div>
);
DefaultDateSection.storyName = 'Default';
