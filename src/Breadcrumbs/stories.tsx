import React from 'react';
import { Breadcrumbs } from './index';
import { noop, storyDocsParameters } from '../utils';

export default {
  title: 'Design System/Breadcrumbs',
  component: Breadcrumbs,
};

const links = [
  {
    label: 'Accounts',
    onClick: () => noop(),
  },
  {
    label: 'World',
    onClick: () => console.log('world'),
  },
  {
    label: '12345',
  },
];

export const DefaultBreadcrumbs = () => (
  <Breadcrumbs id="default" links={links} />
);
DefaultBreadcrumbs.storyName = 'Default';
DefaultBreadcrumbs.parameters = storyDocsParameters;
