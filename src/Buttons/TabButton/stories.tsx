import React from 'react';

import { Box } from '@mui/material';

import { storyDocsParameters } from '../../utils';

import { TabButton } from './index';

export default {
  title: 'Design System/Buttons/Tab',
  component: TabButton,
};

const stateMap = {
  transaction: true,
  accounts: true,
};

export const ActiveTabButton = () => (
  <Box>
    <TabButton
      type="transaction"
      map={stateMap}
      label="Transaction"
      onClick={() => null}
      active={true}
    />
  </Box>
);
ActiveTabButton.storyName = 'Active';
ActiveTabButton.parameters = storyDocsParameters;

export const DefaultTabButton = () => (
  <Box>
    <TabButton
      type="transaction"
      map={stateMap}
      label="Transaction"
      onClick={() => null}
      active={false}
    />
  </Box>
);
DefaultTabButton.storyName = 'Default';
DefaultTabButton.parameters = storyDocsParameters;
