import React, { useState } from 'react';

import { storyDocsParameters } from '../../utils';

import { Switch } from './index';

export default {
  title: 'Design System/Forms/Switch',
  component: Switch,
};

export const DefaultSwitch = () => {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <Switch
      checked={checked}
      onChange={() => setChecked(!checked)}
      variant="blue"
    />
  );
};
DefaultSwitch.storyName = 'Default';
DefaultSwitch.parameters = storyDocsParameters;

export const SwitchWithError = () => (
  <Switch onChange={() => alert('changed')} error errorMessage="Oops" />
);
SwitchWithError.storyName = 'Error';
SwitchWithError.parameters = storyDocsParameters;
