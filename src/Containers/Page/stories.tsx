import React from 'react';
import { Page } from './index';
import { noop, storyDocsParameters } from '../../utils';
import { ActiveFiltersTable } from '../../Table/stories';

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
    <></>
  </Page>
);
PageWithAction.storyName = 'Page with action';
PageWithAction.parameters = storyDocsParameters;

export const PageWithActionWithoutTitle = () => (
  <Page
    id="page-with-action"
    actionLabel="Add lorem"
    actionId="add-lorem"
    onClick={() => noop()}
    actionEvent="add_lorem_action"
  >
    <ActiveFiltersTable />
  </Page>
);
PageWithActionWithoutTitle.storyName = 'Page with action without title';
PageWithActionWithoutTitle.parameters = storyDocsParameters;

export const PageWithSubtitle = () => (
  <Page
    id="page-with-subtitle"
    actionLabel="Add lorem"
    actionId="add-lorem"
    actionEvent="add_lorem_action"
    title="PageTitle"
    subtitle="PageSubtitle"
  >
    <></>
  </Page>
);
PageWithSubtitle.storyName = 'Page with subtitle';
PageWithSubtitle.parameters = storyDocsParameters;

export const DefaultPage = () => (
  <Page id="default">
    <></>
  </Page>
);
DefaultPage.storyName = 'Default';
DefaultPage.parameters = storyDocsParameters;
