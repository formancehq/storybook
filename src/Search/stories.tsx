import React, { useEffect, useState } from 'react';

import { Box, SxProps, Typography } from '@mui/material';

import { Search, SearchGroup, SearchTrigger } from '.';

import { Chip } from '../Chip';
import { storyDocsParameters } from '../utils';

export default {
  title: 'Design System/Search',
  component: Search,
};

const ledgersStyle: SxProps = {
  width: '100%',
  height: '40px',
  background: '#2B2D2F',
  borderRadius: '4px',
  display: 'flex',
  alignItems: 'center',
  padding: '0 12px',
  boxSizing: 'border-box',
  cursor: 'pointer',
  transition: 'background 200ms ease-in-out',
  color: '#fff',
  textDecoration: 'none',

  '&:hover': {
    background: '#3C3F41',
  },
};

const transactionsStyle: SxProps = {
  width: '100%',
  height: '40px',
  background: '#2B2D2F',
  borderRadius: '4px',
  display: 'flex',
  alignItems: 'center',
  padding: '0 4px 0 12px',
  boxSizing: 'border-box',
  cursor: 'pointer',
  transition: 'background 200ms ease-in-out',
  justifyContent: 'space-between',
  color: '#fff',
  textDecoration: 'none',

  '&:hover': {
    background: '#3C3F41',
  },
};

const ledgersElements: SearchGroup = {
  groupTitle: 'Ledgers',
  title: 'Ledgers',
  items: [
    <a href="#" key="1" style={{ textDecoration: 'none' }}>
      <Box sx={ledgersStyle}>
        <Typography>wallet-002</Typography>
      </Box>
    </a>,
    <a href="#" key="2" style={{ textDecoration: 'none' }}>
      <Box sx={ledgersStyle}>
        <Typography>wallet-003</Typography>
      </Box>
    </a>,
  ],
  showMore: (
    <Typography
      sx={{
        opacity: 0.5,
        fontSize: 12,
        textDecoration: 'underline',
      }}
    >
      Show more
    </Typography>
  ),
};

const transactionsElements: SearchGroup = {
  groupTitle: 'Ledgers',
  title: 'Transations',
  items: [
    <a href="#" key="3" style={{ textDecoration: 'none' }}>
      <Box sx={transactionsStyle}>
        <Typography>transation-1</Typography>
        <Chip label="001" color="blue" variant="square" />
      </Box>
    </a>,
    <a href="#" key="4" style={{ textDecoration: 'none' }}>
      <Box sx={transactionsStyle}>
        <Typography>test-2</Typography>
        <Chip label="006" color="blue" variant="square" />
      </Box>
    </a>,
    <a href="#" key="5" style={{ textDecoration: 'none' }}>
      <Box sx={transactionsStyle}>
        <Typography>transation-4</Typography>
        <Chip label="001" color="blue" variant="square" />
      </Box>
    </a>,
    <a href="#" key="6" style={{ textDecoration: 'none' }}>
      <Box sx={transactionsStyle}>
        <Typography>test-5</Typography>
        <Chip label="006" color="blue" variant="square" />
      </Box>
    </a>,
  ],
  showMore: (
    <Typography
      sx={{
        opacity: 0.5,
        fontSize: 12,
        textDecoration: 'underline',
      }}
    >
      Show more
    </Typography>
  ),
};

export const Default = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Search
      isOpen={open}
      onOpenChange={(o) => {
        setOpen(o);
      }}
      placeholder="Search an element"
      elements={[ledgersElements, transactionsElements]}
      trigger={<SearchTrigger>Search an element</SearchTrigger>}
    />
  );
};

Default.storyName = 'Default';
Default.parameters = storyDocsParameters;

export const WithNavigation = () => (
  <Search
    placeholder="Search an element"
    elements={[ledgersElements, transactionsElements]}
    trigger={<SearchTrigger>Search an element</SearchTrigger>}
    navigation={
      <Box
        sx={{ padding: '16px', borderBottom: '1px solid hsl(210, 4%, 18%)' }}
      >
        <Typography
          sx={{
            color: (ds) => ds.palette.common.white,
            mb: '8px',
            opacity: 0.4,
            textTransform: 'uppercase',
          }}
        >
          Navigation
        </Typography>
        <Box sx={{ display: 'flex', gap: '12px' }}>
          <Box sx={{ flexGrow: 1 }}>
            <Typography
              sx={{
                color: '#FFFFFF',
                textTransform: 'uppercase',
                opacity: 0.6,
                mb: '8px',
              }}
            >
              Ledgers
            </Typography>
            <Box>
              <Typography sx={{ color: '#FFFFFF' }}>Ledgers</Typography>
              <Typography sx={{ color: '#FFFFFF' }}>Transactions</Typography>
              <Typography sx={{ color: '#FFFFFF' }}>Accounts</Typography>
            </Box>
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <Typography
              sx={{
                color: (ds) => ds.palette.common.white,
                textTransform: 'uppercase',
                opacity: 0.6,
                mb: '8px',
              }}
            >
              Payments
            </Typography>
            <Box>
              <Typography sx={{ color: (ds) => ds.palette.common.white }}>
                Payments
              </Typography>
              <Typography sx={{ color: (ds) => ds.palette.common.white }}>
                Accounts
              </Typography>
              <Typography sx={{ color: (ds) => ds.palette.common.white }}>
                Wallets
              </Typography>
            </Box>
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <Typography
              sx={{
                color: (ds) => ds.palette.common.white,
                textTransform: 'uppercase',
                opacity: 0.6,
                mb: '8px',
              }}
            >
              Flows
            </Typography>
            <Box>
              <Typography sx={{ color: (ds) => ds.palette.common.white }}>
                Workflows
              </Typography>
              <Typography sx={{ color: (ds) => ds.palette.common.white }}>
                Instances
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    }
  />
);

WithNavigation.storyName = 'With navigation';
WithNavigation.parameters = storyDocsParameters;

export const WithLoading = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3500);
  }, []);

  return (
    <Search
      placeholder="Search an element"
      elements={[ledgersElements, transactionsElements]}
      trigger={<SearchTrigger>Search an element</SearchTrigger>}
      isLoading={isLoading}
    />
  );
};

WithLoading.storyName = 'With loading';
WithLoading.parameters = storyDocsParameters;

export const WithNoResults = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3500);
  }, []);

  return (
    <Search
      placeholder="Search an element"
      elements={[]}
      trigger={<SearchTrigger>Search an element</SearchTrigger>}
      isLoading={isLoading}
    />
  );
};

WithNoResults.storyName = 'With no results';
WithNoResults.parameters = storyDocsParameters;
