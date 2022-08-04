import React, { useState } from 'react';
import { Search, Suggestion } from './index';
import { LoadingButton } from '../LoadingButton';
import {
  DoneAll,
  DriveFileRenameOutline,
  EditLocation,
  SearchOutlined,
} from '@mui/icons-material';
import { Box } from '@mui/material';
import { noop } from '../utils';

export default {
  title: 'Design System/Search/Spotlight',
  component: Search,
};

const suggestions: Suggestion[] = [
  {
    label: 'Payment',
    icon: <DriveFileRenameOutline />,
    more: { action: () => console.log('go to payments'), label: 'More' },
    total: 140,
    items: [
      {
        id: 1,
        label: 'payin:679472',
        onClick: (id: number | string) => {
          console.log('click', id);
        },
      },
      {
        id: 2,
        label: 'payout:679473',
        onClick: (id: number | string) => {
          console.log('click', id);
        },
      },
    ],
  },
  {
    label: 'Transaction',
    icon: <DoneAll />,
    more: { action: () => console.log('go to transaction'), label: 'More' },
    total: 14,
    items: [
      {
        id: 1,
        label: '000679472',
        onClick: (id: number | string) => {
          console.log('click', id);
        },
      },
      {
        id: 2,
        label: '000679473',
        onClick: (id: number | string) => {
          console.log('click', id);
        },
      },
    ],
  },
  {
    label: 'Accounts',
    icon: <EditLocation />,
    more: { action: () => console.log('go to accounts'), label: 'More' },
    total: 180,

    items: [
      {
        id: 1,
        label: '000679472',
        onClick: (id: number | string) => {
          console.log('click', id);
        },
      },
      {
        id: 2,
        label: '000679473',
        onClick: (id: number | string) => {
          console.log('click', id);
        },
      },
    ],
  },
];
const suggestions2: Suggestion[] = [
  {
    label: 'Payment',
    icon: <DriveFileRenameOutline />,
    more: { action: () => console.log('go to payments'), label: 'More' },
    items: [
      {
        id: 1,
        label: 'payin:679472',
        onClick: (id: number | string) => {
          console.log('click', id);
        },
      },
      {
        id: 2,
        label: 'payout:679473',
        onClick: (id: number | string) => {
          console.log('click', id);
        },
      },
    ],
  },
  {
    label: 'Transaction',
    icon: <DoneAll />,
    more: { action: () => console.log('go to transaction'), label: 'More' },
    items: [
      {
        id: 1,
        label: '000679472',
        onClick: (id: number | string) => {
          console.log('click', id);
        },
      },
    ],
  },
];

export const DefaultSpotlight = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOnChange = () => noop();

  return (
    <Box>
      <LoadingButton
        startIcon={<SearchOutlined />}
        onClick={handleOpen}
        variant="dark"
      />
      <Search
        open={open}
        onChange={handleOnChange}
        onClose={handleClose}
        suggestions={suggestions}
      />
    </Box>
  );
};
DefaultSpotlight.storyName = 'Default';

export const SpotlightWithoutTotalResults = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOnChange = () => noop();

  return (
    <Box>
      <LoadingButton
        startIcon={<SearchOutlined />}
        onClick={handleOpen}
        variant="primary"
      />
      <Search
        open={open}
        onChange={handleOnChange}
        onClose={handleClose}
        suggestions={suggestions2}
      />
    </Box>
  );
};
SpotlightWithoutTotalResults.storyName = 'Without total results';
