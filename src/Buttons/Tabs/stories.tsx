import React, { useState } from 'react';

import { Add } from '@mui/icons-material';

import { storyDocsParameters } from '../../utils';

import { Tabs } from './index';

export default {
  title: 'Design System/Buttons/Tabs',
  component: Tabs,
};

export const DefaultTabs = () => {
  const [actives, setActives] = useState<{
    transaction: boolean;
    account: boolean;
  }>({ transaction: true, account: false });

  const config = [
    {
      type: 'transaction',
      label: 'Transaction',
      onClick: () => setActives({ transaction: true, account: false }),
      active: actives.transaction,
    },
    {
      type: 'account',
      label: 'Account',
      onClick: () => setActives({ transaction: false, account: true }),
      active: actives.account,
    },
  ];

  return <Tabs config={config} />;
};
DefaultTabs.storyName = 'Active tabs';
DefaultTabs.parameters = storyDocsParameters;

export const TabsWithAction = () => {
  const [actives, setActives] = useState<{
    transaction: boolean;
    account: boolean;
  }>({ transaction: true, account: false });

  const config = [
    {
      type: 'transaction',
      label: 'Transaction',
      onClick: () => setActives({ transaction: true, account: false }),
      active: actives.transaction,
    },
    {
      type: 'account',
      label: 'Account',
      onClick: () => setActives({ transaction: false, account: true }),
      active: actives.account,
    },
  ];

  return (
    <Tabs
      config={config}
      action={{ content: 'Action', startIcon: <Add />, variant: 'dark' }}
    />
  );
};
TabsWithAction.storyName = 'Active tabs with action';
TabsWithAction.parameters = storyDocsParameters;
