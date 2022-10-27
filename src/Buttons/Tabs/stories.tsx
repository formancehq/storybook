import React, { useState } from 'react';

import { Modal } from '../../Modal';
import { Form } from '../../Modal/stories';
import { storyDocsParameters } from '../../utils';

import { Tabs } from './index';

import { LoadingButton } from '../LoadingButton';

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
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
      action={
        <>
          <LoadingButton
            content="Open modal"
            onClick={handleOpen}
            variant="dark"
          />
          <Modal open={open} onClose={handleClose} title="Update foo">
            <Form />
          </Modal>
        </>
      }
    />
  );
};
TabsWithAction.storyName = 'Active tabs with action';
TabsWithAction.parameters = storyDocsParameters;
