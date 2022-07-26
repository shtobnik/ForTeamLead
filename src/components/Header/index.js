import { useState, memo } from 'react';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../../redux/slices/main/mainSlice';
import { useNavigate, useLocation, Link } from 'react-router-dom';

import MobileMenu from '../MobileMenu';

import TwitterLogin from "react-twitter-login";
import { CONSUMER_KEY, CONSUMER_SECRET } from '../../config/main';

import Icon from '../../components/Icon';
import Logo from './Logo';
import SearchBlock from '../SearchBlock';

import MenuIcon from '@mui/icons-material/Menu';
import ThemeSwitcher from '../ThemeSwitcher';
import { GreyButton, BlueButton } from '../../config/theme/buttons';

import './Header.scss';

import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
  Stack
} from "@mui/material/";


const Header = () => {
  const dispatch = useDispatch();
  const isAuth = false;

  // const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation().pathname;
  const pages = ['WatchList', 'Top100', 'Contacts', '🚀 TOP SCORE Grow', 'Add Project'];
  const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const routeChange = (pageName) => {
    let path = pageName;
    navigate(path);
  };

  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null);
  // };

  const handlePageChange = (e, pageName) => {
    routeChange(pageName);
    // handleCloseNavMenu();
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const authHandler = (err, data) => {
    console.log('Twitter error', err);
    console.log('Twitter data', data);
  };

  // const handleKeyPress = () => {

  // };

  // const handleChange = () => {

  // };

  const showMenu = () => {
    dispatch(toggleMenu());
  };

  return (
    <>
      {/* Mobile */}
      <MobileMenu pages={pages} authHandler={authHandler} handlePageChange={handlePageChange} />
      {/* Mobile */}

      {/* Desktop */}
      <AppBar position="fixed" color="common" >
        <Box sx={{ borderBottom: `1px solid primary.grey`, height: { xs: '24px', md: '33px' } }}>
          <Container maxWidth="xl" sx={{ maxWidth: '1290px', fontSize: '12px', marginTop: { sx: 0, md: '8px' }, marginBottom: { sx: 0, md: '10px' } }}>
            <Stack direction="row" alignItems="center" justifyContent="space-between">
              <Stack direction="row" alignItems="center" spacing="40px" sx={{ fontSize: { xs: '8px', md: '12px' } }}>
                <Stack direction="row" alignItems="center">
                  <Box sx={{ color: 'twitter', fontSize: '14px' }}>
                    <Icon image={'Twitter'} />
                  </Box>
                  <Box sx={{ marginLeft: '4px' }}>Accounts monitored:</Box>
                  <Box component="span" sx={{ color: 'link.main', marginLeft: '8px' }}>16427</Box>
                </Stack>
                <Stack direction="row" alignItems="center">
                  <Box>Coins:</Box>
                  <Box component="span" sx={{ color: 'link.main', marginLeft: '8px' }}>4538</Box>
                </Stack>
                <Stack direction="row" alignItems="center" sx={{ display: { xs: 'none', md: 'flex' }, }}>
                  <Box>Market Cap:</Box>
                  <Box sx={{ color: 'link.main', marginLeft: '8px' }}>
                    <Stack direction="row" alignItems="center">
                      <Box>$900,016,657,202</Box>
                      <Stack direction="row" alignItems="center" sx={{ color: 'success.main', marginLeft: '4px', fontSize: '12px' }}>
                        <Icon image={'Arrow'} />
                        <Box sx={{ marginLeft: '2px' }}>4.3%</Box>
                      </Stack>
                    </Stack>
                  </Box>
                </Stack>
                <Stack direction="row" alignItems="center">
                  <Box>Dominance:</Box>
                  <Stack direction="row" sx={{ color: 'link.main', marginLeft: '8px' }}>
                    <Box>BTC: 42.4%</Box>
                    <Box sx={{ ml: '4px', display: { xs: 'none', md: 'inline-block' } }}>ETH: 14.8%</Box>
                  </Stack>
                </Stack>
                <Stack direction="row" alignItems="center" sx={{ display: { xs: 'none', md: 'flex' }, }}>
                  <Box sx={{ fontSize: '14px' }}><Icon image={'Gas'} /></Box>
                  <Stack direction="row" alignItems="center" sx={{ marginLeft: '6px' }}>
                    <Box>ETH Gas:</Box>
                    <Box component="span" sx={{ color: 'link.main', marginLeft: '8px' }}>22 Gwei</Box>
                  </Stack>
                </Stack>
              </Stack>
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <ThemeSwitcher />
              </Box>
            </Stack>
          </Container>
        </Box>
        <Container maxWidth="xl" sx={{ maxWidth: '1290px' }}>
          <Toolbar disableGutters sx={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
              <Link to="/"><Logo /></Link>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} >
              <Link to="/"><Logo /></Link>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, "& .MuiButton-startIcon": { marginRight: '3.5px' } }}>
              {pages.map((page) => (
                <Button
                  sx={{
                    color: location.includes(page) ? 'menu.active' : 'menu.main',
                    fontSize: '14px',
                    textTransform: 'capitalize',
                  }}
                  page={page}
                  startIcon={
                    page === 'WatchList' ? <Box sx={{ fontSize: '14px!important' }}><Icon image={'StarFill'} /></Box> : page === 'Top100' ? <Box sx={{ fontSize: '15px!important' }}><Icon image={'Fire'} /></Box> : null
                  }
                  key={page}
                  onClick={(e) => handlePageChange(e, page)}
                >
                  {page}
                </Button>
              ))}
            </Box>

            {isAuth &&
              <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'block' } }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                  </IconButton>
                </Tooltip>
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
            }
            {!isAuth &&
              <Stack direction="row" spacing={2} sx={{ alignItems: 'center', display: { xs: 'none', md: 'flex' } }}>
                <Box>
                  <TwitterLogin
                    authCallback={authHandler}
                    consumerKey={CONSUMER_KEY}
                    consumerSecret={CONSUMER_SECRET}
                    callbackUrl="http://localhost:3000/"
                    buttonTheme="dark_short"
                    className='twitter-button'
                  />
                </Box>
                <GreyButton>Log In</GreyButton>
                <BlueButton>Sign up</BlueButton>
                <SearchBlock text={"Search..."} />
              </Stack>
            }
            <Stack direction="row" alignItems="center" sx={{ display: { xs: 'flex', md: 'none', } }}>
              <Box sx={{ fontSize: '24px', height: '24px', lineHeight: 0 }}>
                <Icon image={"Search"} />
              </Box>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={showMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
      {/* Desktop */}
    </>
  )
};

export default memo(Header);