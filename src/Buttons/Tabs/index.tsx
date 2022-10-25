import React, { FunctionComponent } from 'react';

import { Box } from '@mui/material';

import { TabButton, TabButtonProps } from '../TabButton';

export type TabsProps = { config: TabButtonProps[] };

export const Tabs: FunctionComponent<TabsProps> = ({ config }) => (
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
);
