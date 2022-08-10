import React, { useState } from 'react';
import { Search, Suggestion } from './index';
import { LoadingButton } from '../Buttons/LoadingButton';
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
      {
        id: 3,
        label: 'payout:679474',
        onClick: (id: number | string) => {
          console.log('click', id);
        },
      },
      {
        id: 4,
        label: 'payout:679475',
        onClick: (id: number | string) => {
          console.log('click', id);
        },
      },
      {
        id: 5,
        label: 'payout:679476',
        onClick: (id: number | string) => {
          console.log('click', id);
        },
      },
      {
        id: 6,
        label: 'payout:679477',
        onClick: (id: number | string) => {
          console.log('click', id);
        },
      },
      {
        id: 7,
        label: 'payout:679478',
        onClick: (id: number | string) => {
          console.log('click', id);
        },
      },
      {
        id: 8,
        label: 'payout:679479',
        onClick: (id: number | string) => {
          console.log('click', id);
        },
      },
      {
        id: 10,
        label: 'payout:6794711',
        onClick: (id: number | string) => {
          console.log('click', id);
        },
      },
      {
        id: 11,
        label: 'payout:6794712',
        onClick: (id: number | string) => {
          console.log('click', id);
        },
      },
    ],
  },
  {
    label: 'Transaction',
    icon: <DoneAll />,
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
const suggestions3: Suggestion[] = [
  {
    label: 'Payment',
    icon: <DriveFileRenameOutline />,
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
    items: [],
  },
];

export const DefaultSpotlight = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOnChange = () => noop();
  const handleOnKeyDown = () => noop();

  return (
    <Box>
      <LoadingButton
        startIcon={<SearchOutlined />}
        onClick={handleOpen}
        variant="dark"
      />
      <Search
        open={open}
        onClose={handleClose}
        onChange={handleOnChange}
        onKeyDown={handleOnKeyDown}
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

  return (
    <Box>
      <LoadingButton
        startIcon={<SearchOutlined />}
        onClick={handleOpen}
        variant="primary"
      />
      <Search open={open} onClose={handleClose} suggestions={suggestions2} />
    </Box>
  );
};
SpotlightWithoutTotalResults.storyName = 'Without total results';

export const SpotlightWithNoResults = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <LoadingButton startIcon={<SearchOutlined />} onClick={handleOpen} />
      <Search open={open} onClose={handleClose} suggestions={[]} />
    </Box>
  );
};

SpotlightWithNoResults.storyName = 'With no results';

export const SpotlightWithLoader = () => {
  const [open, setOpen] = useState(false);
  const [loading, _setLLoading] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <LoadingButton
        startIcon={<SearchOutlined />}
        onClick={handleOpen}
        variant="primary"
      />
      <Search
        open={open}
        onClose={handleClose}
        suggestions={[]}
        loading={loading}
      />
    </Box>
  );
};
SpotlightWithLoader.storyName = 'With Loader';

export const SpotlightWithEmptyItemsCategory = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <LoadingButton
        startIcon={<SearchOutlined />}
        onClick={handleOpen}
        variant="primary"
      />
      <Search open={open} onClose={handleClose} suggestions={suggestions3} />
    </Box>
  );
};
SpotlightWithEmptyItemsCategory.storyName = 'With empty category items';
