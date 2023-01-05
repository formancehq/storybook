import React, { FunctionComponent, useState } from 'react';

import { Box, useTheme } from '@mui/material';

import { Chip } from '../../Chip';
import { ColorVariants } from '../../types';

import { CopyPasteTooltip } from '../CopyPasteTooltip';

export type SecretProps = {
  lastDigits?: string;
  value?: string;
  tooltipMessage?: string;
  color?: ColorVariants;
};

export const Secret: FunctionComponent<SecretProps> = ({
  lastDigits,
  tooltipMessage,
  value,
  color,
}) => {
  const [copiedMessage, setCopiedMessage] = useState<string>('');
  const secret = value ? value : `******************************${lastDigits}`;
  const { typography } = useTheme();
  const renderChip = () => (
    <Chip
      label={secret}
      variant="square"
      sx={{ ...typography.money }}
      color={color}
    />
  );

  return (
    <Box component="span" display="flex" alignItems="center">
      {tooltipMessage ? (
        <CopyPasteTooltip value={secret} tooltipMessage={tooltipMessage}>
          {renderChip()}
        </CopyPasteTooltip>
      ) : (
        renderChip()
      )}
    </Box>
  );
};
