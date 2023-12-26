import React from 'react';

import { storyDocsParameters } from '../../utils';

import { SelectMultiple } from './index';

export default {
  title: 'Design System/Forms/Select/Multiple',
  component: SelectMultiple,
};

const items = [
  'event 1',
  'event 2 event 2 event 2',
  'event 3 event 3 event 3 event 3 event 3 ',
  'event 4 event 4 event 4 event 4 event 4 event 4 ',
  'event long char 1',
];

export const DefaultSelectMultiple = () => (
  <SelectMultiple
    label="Events"
    items={items}
    outlinedInputLabel="events"
    id="label-event"
  />
);
DefaultSelectMultiple.storyName = 'Default';
DefaultSelectMultiple.parameters = storyDocsParameters;

export const ErrorSelectMultiple = () => (
  <SelectMultiple
    label="Events"
    items={items}
    outlinedInputLabel="events"
    id="label-event"
    error
    errorMessage="Ooops"
  />
);
ErrorSelectMultiple.storyName = 'Error';
ErrorSelectMultiple.parameters = storyDocsParameters;

export const DefaultValueSelectMultiple = () => (
  <SelectMultiple
    label="Events"
    items={items}
    outlinedInputLabel="events"
    id="label-event"
    selectedValues={['event 1']}
  />
);
DefaultValueSelectMultiple.storyName = 'Default value';
DefaultValueSelectMultiple.parameters = storyDocsParameters;
