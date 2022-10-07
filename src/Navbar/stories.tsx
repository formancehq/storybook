import React from 'react';

import {
  AccountBalance,
  CreditCard,
  Home,
  HomeOutlined,
  MonitorOutlined,
} from '@mui/icons-material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import {
  IconButton,
  Avatar,
  Box,
  MenuItem,
  Typography,
  Menu,
} from '@mui/material';

import { Navbar } from '.';

import { theme } from '../muiTheme';
import { storyDocsParameters } from '../utils';

const routesMock = [
  {
    label: 'Overview',
    path: ['/overview', '/'],
    id: 'overview',
    icon: <Home />,
  },
  { label: 'Users', path: '/users', id: 'users', icon: <AccountBalance /> },
  { label: 'Groups', path: '/groups', id: 'groups', icon: <CreditCard /> },
  { label: 'Settings', path: '/settings', id: 'settings' },
];

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const locationMock = {
  pathname: '/transactions',
  search: '',
  hash: '',
  state: null,
  key: 'ulorypj3',
};

export default {
  title: 'Design System/Navbar',
  component: Navbar,
};

export const NavbarWithItemsAvatarAndDropDownMenu = () => {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Navbar routes={routesMock} linkWrapper={<a></a>} location={locationMock}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '120px',
        }}
      >
        <SearchIcon sx={{ color: theme.palette.grey[500] }} />
        <NotificationsIcon sx={{ color: theme.palette.grey[500] }} />

        <IconButton sx={{ p: 0 }}>
          <Avatar
            alt="User Avatar"
            sx={{ width: 24, height: 24, bgcolor: theme.palette.green.bright }}
          >
            S
          </Avatar>
        </IconButton>
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <ArrowDropDownIcon sx={{ color: theme.palette.grey[500] }} />
        </IconButton>
        <Menu
          sx={{ mt: '45px' }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          {settings.map((setting) => (
            <MenuItem key={setting} onClick={handleCloseUserMenu}>
              <Typography textAlign="center">{setting}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </Navbar>
  );
};

NavbarWithItemsAvatarAndDropDownMenu.storyName =
  'Navbar With Items Avatar And Drop Down Menu';
NavbarWithItemsAvatarAndDropDownMenu.parameters = storyDocsParameters;

export const NavBarWithNavigation = () => (
  <Navbar
    routes={routesMock}
    linkWrapper={<a></a>}
    location={locationMock}
    logo={
      <img
        alt="logo"
        src="https://www.formance.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fformance-logo-8.f0604b6c.svg&w=256&q=75"
      />
    }
  />
);

NavBarWithNavigation.storyName = 'With actions';
NavBarWithNavigation.parameters = storyDocsParameters;
