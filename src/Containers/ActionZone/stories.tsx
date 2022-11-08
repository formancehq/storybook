import React from 'react';

import {
  ConfirmModal,
  DefaultModal,
  ModalWithFooter,
} from '../../Modal/stories';
import { storyDocsParameters } from '../../utils';

import { ActionZone } from './index';

export default {
  title: 'Design System/Containers/ActionZone',
  component: ActionZone,
};

export const DangerZone = () => (
  <ActionZone
    actions={[
      {
        key: 'delete',
        title: 'Delete connectors',
        description: 'By deleting this connector, you will reset all payouts',
        button: <ConfirmModal />,
      },
      {
        key: 'reset',
        title: 'Reset connectors',
        description:
          'By reset this connector, you will reset all payouts and remove connector',
        button: <ConfirmModal />,
      },
    ]}
  />
);
DangerZone.storyName = 'DangerZone';
DangerZone.parameters = storyDocsParameters;

export const DefaultActionZone = () => (
  <ActionZone
    actions={[
      {
        key: 'Update status',
        title: 'Update connectors',
        description: 'Set active status of your connector',
        button: <ModalWithFooter />,
      },
      {
        key: 'See logs',
        title: 'See your logs',
        description: 'Display in live time your journal',
        button: <DefaultModal />,
      },
    ]}
  />
);
DefaultActionZone.storyName = 'Default';
DefaultActionZone.parameters = storyDocsParameters;
