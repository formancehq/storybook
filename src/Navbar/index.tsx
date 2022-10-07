import React, { FunctionComponent, ReactElement } from 'react';

import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
  useTheme,
} from '@mui/material';

import { isArray } from '../utils';

export type NavbarProps = {
  routes: Array<{
    label: string;
    path: string | string[];
    id: string;
    icon?: React.ReactNode;
  }>;
  linkWrapper: ReactElement<any, any>;
  // Reason behind this weird naming is to avoid confusion with the global locations
  location: {
    pathname: string;
    search: string;
    hash: string;
    state: unknown;
    key: string;
  };
  onLogoClick?: () => void;
  children?: JSX.Element;
  logo?: React.ReactNode;
};

// TODO  Add a burger menu for responsive design
export const Navbar: FunctionComponent<NavbarProps> = ({
  routes,
  linkWrapper,
  onLogoClick,
  // Reason behind this alias is to avoid confusion with the global object locations
  location: pLocation,
  logo,
  children,
}) => {
  const { palette } = useTheme();

  return (
    <Box
      sx={{
        '& .MuiPaper-root': {
          borderRadius: '0 !important',
          boxShadow: 'none',
        },
      }}
    >
      <AppBar
        position="static"
        sx={{
          margin: 0,
          border: 'none !important',
        }}
      >
        <Toolbar
          sx={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Box>
            {/* TODO replace with CDN logo asset link when CDN is ready. Use your own asset in the mid time*/}
            {logo ? (
              <Box
                sx={{ cursor: 'pointer' }}
                component="span"
                onClick={onLogoClick}
              >
                {logo}
              </Box>
            ) : (
              <Typography
                variant="h6"
                noWrap
                sx={{ cursor: 'pointer' }}
                component="div"
                onClick={onLogoClick}
              >
                FORMANCE
              </Typography>
            )}
          </Box>
          <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
            {routes.map(({ label, path, id, icon }) => {
              const selected = isArray(path)
                ? path[0] === pLocation.pathname
                : path === pLocation.pathname;

              return React.cloneElement(
                linkWrapper,
                {
                  key: id,
                  prefetch: 'intent',
                  to: isArray(path) ? (path[0] as string) : (path as string),
                  color: selected ? palette.neutral[900] : 'inherit',
                },
                <Button
                  startIcon={icon}
                  sx={{
                    '& .MuiButton-startIcon .MuiSvgIcon-root': {
                      color: `${palette.neutral[300]} !important`,
                    },
                    '& .MuiButton-startIcon': {
                      marginRight: 0,
                    },
                    gap: '8px',
                    padding: '8px 16px',
                    margin: '0px 4px 0px 4px',
                    height: '40px',
                    minWidth: '54px',
                    textTransform: 'none',
                    backgroundColor: ({ palette }) =>
                      selected ? palette.neutral[0] : palette.neutral[900],
                    color: ({ palette }) =>
                      selected ? palette.neutral[900] : 'inherit',
                    '&:hover': {
                      backgroundColor: ({ palette }) =>
                        selected ? palette.neutral[0] : palette.neutral[800],
                    },
                  }}
                >
                  {label}
                </Button>
              );
            })}
          </Box>
          {children}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
