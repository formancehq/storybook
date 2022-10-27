import React, { FunctionComponent, ReactElement } from 'react';

import { Box } from '@mui/material';

import { TabButton, TabButtonProps } from '../TabButton';

export type TabsProps = {
  config: TabButtonProps[];
  action?: ReactElement;
};

export const Tabs: FunctionComponent<TabsProps> = ({ config, action }) => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: action ? 'space-between' : 'start',
      alignItems: 'center',
    }}
  >
    <Box sx={{ display: 'flex', gap: '26px' }}>
      {config.map((tab: TabButtonProps, index: number) => (
        <TabButton
          key={index}
          type={tab.type}
          label={tab.label}
          onClick={tab.onClick}
          active={tab.active}
        />
      ))}
    </Box>
    {action && action}
  </Box>
);
