import React from 'react';
import { Breadcrumbs } from './index';
import { noop } from '../utils';

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
    onClick: () => noop(),
  },
  {
    label: '12345',
    onClick: () => noop(),
  },
];

export const DefaultBreadcrumbs = () => (
  <Breadcrumbs id="default" links={links} />
);

DefaultBreadcrumbs.storyName = 'Default';
