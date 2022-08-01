import React from 'react';
import Page from './index';
import { noop } from '../utils';
import { Typography } from '@mui/material';

export default {
  title: 'Design System/Containers/Page',
  component: Page,
};

export const PageWithAction = () => (
  <Page
    id="page-with-action"
    actionLabel="Add lorem"
    actionId="add-lorem"
    onClick={() => noop()}
    actionEvent="add_lorem_action"
  >
    <>
      <Typography variant="h1">Title</Typography>
      <Typography>Content</Typography>
    </>
  </Page>
);
PageWithAction.storyName = 'Page with action';

export const DefaultPage = () => (
  <Page id="page-with-action">
    <>
      <Typography variant="h1">Title</Typography>
      <Typography>Content</Typography>
    </>
  </Page>
);
DefaultPage.storyName = 'Default';
