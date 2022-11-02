import React from 'react';

import { Add } from '@mui/icons-material';
import { Box, Button } from '@mui/material';

import { OnBoarding } from './index';

import { LoadingButton } from '../Buttons/LoadingButton';
import { storyDocsParameters } from '../utils';

export default {
  title: 'Design System/OnBoarding',
  component: OnBoarding,
};

export const SimpleUsage = () => (
  <OnBoarding title="title" description="subtitle">
    <LoadingButton
      variant="stroke"
      sx={{ mt: '12px' }}
      startIcon={<Add />}
      content="Go to connectors"
    />
  </OnBoarding>
);

SimpleUsage.storyName = 'Simple Usage';
SimpleUsage.parameters = storyDocsParameters;

export const UsageWithTwoComponents = () => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'space-between',
    }}
  >
    <OnBoarding title="title" description="subtitle" width="44%">
      <Button variant="outlined" sx={{ mt: '12px' }} startIcon={<Add />}>
        Go to connectors
      </Button>
    </OnBoarding>
    <OnBoarding title="title" description="subtitle" width="44%">
      <Button variant="outlined" sx={{ mt: '12px' }} startIcon={<Add />}>
        Go to connectors
      </Button>
    </OnBoarding>
  </Box>
);

UsageWithTwoComponents.storyName = 'Usage With Two Components';
UsageWithTwoComponents.parameters = storyDocsParameters;
