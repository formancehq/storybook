import React, { FunctionComponent } from 'react';

import { Button } from '@mui/material';

export type TabButtonProps = {
  type: string;
  label: string;
  onClick: () => void;
  active?: boolean;
};

export const TabButton: FunctionComponent<TabButtonProps> = ({
  type,
  label,
  onClick,
  active = false,
}) => (
  <Button
    id={type.toLowerCase()}
    sx={{
      borderRadius: 0,
      textTransform: 'none',
      fontSize: ({ typography }) => typography.h2.fontSize,
      ':hover': {
        color: ({ palette }) => palette.neutral[900],
        backgroundColor: 'transparent',
        borderRadius: 0,
      },
      color: ({ palette }) =>
        active ? palette.neutral[900] : palette.neutral[500],
      borderBottom: ({ palette }) =>
        active ? `2px solid ${palette.primary.main}` : 'none',
    }}
    onClick={() => onClick()}
  >
    {label}
  </Button>
);
