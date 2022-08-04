import React from 'react';
import { Search } from './index';
import { LoadingButton } from '../LoadingButton';
import { SearchOutlined } from '@mui/icons-material';
import { Box } from '@mui/material';

export default {
  title: 'Design System/Search/Spotlight',
  component: Search,
};

export const DefaultSpotlight = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOnChange = (event: any) => {
    console.log(event);
  };

  return (
    <Box>
      <LoadingButton
        startIcon={<SearchOutlined />}
        onClick={handleOpen}
        variant="dark"
      />
      <Search open={open} onChange={handleOnChange} onClose={handleClose} />
    </Box>
  );
};

DefaultSpotlight.storyName = 'Default';
