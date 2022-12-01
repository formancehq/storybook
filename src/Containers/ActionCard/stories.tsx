import React from 'react';

import { Add } from '@mui/icons-material';

import { LoadingButton } from '../../Buttons/LoadingButton';
import { storyDocsParameters } from '../../utils';

import { ActionCard } from './index';

export default {
  title: 'Design System/Containers/Card',
  component: ActionCard,
};

export const Default = () => (
  <ActionCard title="title" description="subtitle">
    <LoadingButton
      variant="stroke"
      sx={{ mt: '12px' }}
      startIcon={<Add />}
      content="Go to connectors"
    />
  </ActionCard>
);

Default.storyName = 'Default';
Default.parameters = storyDocsParameters;
