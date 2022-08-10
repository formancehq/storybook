import React from 'react';
import { TabButton } from './index';
import { Box } from '@mui/material';

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
