import React, { useState } from 'react';

import { Box } from '@mui/material';

import { LoadingButton } from '../../Buttons/LoadingButton';
import { storyDocsParameters } from '../../utils';

import { Secret } from './index';

export default {
  title: 'Design System/Sections/Secret',
  component: Secret,
};

export const DefaultSecret = () => <Secret lastDigits="13cd" />;
DefaultSecret.storyName = 'Default';
DefaultSecret.parameters = storyDocsParameters;

export const CopySecret = () => (
  <Secret lastDigits="13cd" tooltipMessage="Copied !" />
);
CopySecret.storyName = 'Copy';
CopySecret.parameters = storyDocsParameters;

export const RevealSecret = () => {
  const [secret, setSecret] = useState<string | undefined>(undefined);

  return (
    <Box>
      <LoadingButton
        content="Reveal"
        onClick={() => setSecret('azertyuiojkfuhsdkjfjlsdjf4564654654')}
        variant="dark"
      />
      <Secret lastDigits="13cd" value={secret} color="yellow" />
    </Box>
  );
};
RevealSecret.storyName = 'Reveal';
RevealSecret.parameters = storyDocsParameters;

export const RevealLastDigitCopySecret = () => {
  const [secret, setSecret] = useState<string | undefined>(undefined);

  return (
    <Box>
      <LoadingButton
        content="Reveal"
        onClick={() => setSecret('azertyuiojkfuhsdkjfjlsdjf4564654654')}
        variant="dark"
      />
      <Secret lastDigits="13cd" value={secret} tooltipMessage="Copied :)" />
    </Box>
  );
};
RevealLastDigitCopySecret.storyName = 'All';
RevealLastDigitCopySecret.parameters = storyDocsParameters;
