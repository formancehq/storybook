import React, { FunctionComponent } from 'react';
import { ListItemButton, Typography } from '@mui/material';
import { ObjectOf } from '../../types';

export type TabButtonProps = {
  type: string;
  map: ObjectOf<any>;
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
  <ListItemButton
    id={type.toLowerCase()}
    sx={{
      ':hover': {
        color: ({ palette }) => palette.neutral[900],
        backgroundColor: 'transparent',
      },
      color: ({ palette }) =>
        active ? palette.neutral[900] : palette.neutral[500],
      borderBottom: ({ palette }) =>
        active ? `2px solid ${palette.primary.main}` : 'none',
    }}
    onClick={() => onClick()}
  >
    <Typography variant="h2">{label}</Typography>{' '}
  </ListItemButton>
);
