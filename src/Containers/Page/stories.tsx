import React from 'react';
import { Page } from './index';
import { noop, storyDocsParameters } from '../../utils';

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
PageWithAction.parameters = storyDocsParameters;

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
PageWithSubtitle.parameters = storyDocsParameters;

export const DefaultPage = () => (
  <Page id="page-with-action" title="toto">
    <>toto</>
  </Page>
);
DefaultPage.storyName = 'Default';
DefaultPage.parameters = storyDocsParameters;
