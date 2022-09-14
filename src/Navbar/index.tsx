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
    path: string;
    id: string;
  }>;
  linkWrapper: ReactElement<any, any>;
  onLogoClick?: () => void;
  children?: JSX.Element;
};

// TODO  Add a burger menu for responsive design

export const Navbar: FunctionComponent<NavbarProps> = ({
  routes,
  linkWrapper,
  onLogoClick,
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
            {/* TODO replace by logo*/}
            <Typography
              variant="h6"
              noWrap
              sx={{ cursor: 'pointer' }}
              component="div"
              onClick={onLogoClick}
            >
              FORMANCE
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
            {routes.map(({ label, path, id }) => {
              const selected = isArray(path)
                ? path[0] === location.pathname
                : path === location.pathname;

              return React.cloneElement(
                linkWrapper,
                {
                  key: id,
                  to: path,
                  prefetch: 'intent',
                  color: selected ? palette.neutral[900] : 'inherit',
                },
                <Button
                  sx={{
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
