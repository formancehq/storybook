import React from 'react';

import { storyDocsParameters } from '../../utils';

import { TabButton } from './index';

export default {
  title: 'Design System/Buttons/Tab',
  component: TabButton,
};

export const ActiveTabButton = () => (
  <TabButton
    type="transaction"
    label="Transaction"
    onClick={() => null}
    active
  />
);
ActiveTabButton.storyName = 'Active button tab';
ActiveTabButton.parameters = storyDocsParameters;

export const UnactiveTabButton = () => (
  <TabButton
    type="transaction"
    label="Transaction"
    onClick={() => null}
    active={false}
  />
);
UnactiveTabButton.storyName = 'Unactive button tab';
UnactiveTabButton.parameters = storyDocsParameters;
