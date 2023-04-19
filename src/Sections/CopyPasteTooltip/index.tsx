import React, { FunctionComponent, ReactElement, useState } from 'react';

import { Box, Tooltip, TooltipProps } from '@mui/material';

import { copyTokenToClipboard } from '../../utils';

export type CopyPasteTooltipProps = Pick<TooltipProps, 'placement'> & {
  value: string;
  tooltipMessage: string;
  children: ReactElement;
};

export const CopyPasteTooltip: FunctionComponent<CopyPasteTooltipProps> = ({
  tooltipMessage,
  children,
  value,
  placement,
}) => {
  const [copiedMessage, setCopiedMessage] = useState<string>('');

  return (
    <Tooltip
      placement={placement || 'bottom-start'}
      title={copiedMessage}
      onClick={async () => {
        await copyTokenToClipboard(value);
        setCopiedMessage(tooltipMessage);
      }}
      onClose={() => setCopiedMessage('')}
    >
      <Box component="span" sx={{ cursor: 'pointer' }}>
        {children}
      </Box>
    </Tooltip>
  );
};
