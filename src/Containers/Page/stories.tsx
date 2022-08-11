import React from 'react';
import { Page } from './index';
import { noop } from '../../utils';
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
    title="PageTitle"
  >
    <div>PageTitle</div>
  </Page>
);
PageWithAction.storyName = 'Page with action';

export const PageWithSubtitle = () => (
  <Page
    id="page-with-subtitle"
    actionLabel="Add lorem"
    actionId="add-lorem"
    onClick={() => noop()}
    actionEvent="add_lorem_action"
    title="PageTitle"
    subtitle="PageSubtitle"
  >
    <div>PageSubTitle</div>
  </Page>
);
PageWithSubtitle.storyName = 'Page with subtitle';

export const DefaultPage = () => (
  <Page id="page-with-action" title="toto">
    <>toto</>
  </Page>
);
DefaultPage.storyName = 'Default';
