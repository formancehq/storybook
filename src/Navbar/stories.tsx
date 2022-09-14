import {
  IconButton,
  Avatar,
  Box,
  MenuItem,
  Typography,
  Menu,
} from '@mui/material';
import React from 'react';
import { Navbar } from '.';
import { storyDocsParameters } from '../utils';
import { theme } from '../muiTheme';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const routesMock = [
  { label: 'Overview', path: '/overview', id: 'overview' },
  { label: 'Users', path: '/users', id: 'users' },
  { label: 'Groups', path: '/groups', id: 'groups' },
  { label: 'Settings', path: '/settings', id: 'settings' },
];

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

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
    <Navbar routes={routesMock} linkWrapper={<a></a>}>
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
  <Navbar routes={routesMock} linkWrapper={<a></a>} />
);

NavBarWithNavigation.storyName = 'With actions';
NavBarWithNavigation.parameters = storyDocsParameters;
