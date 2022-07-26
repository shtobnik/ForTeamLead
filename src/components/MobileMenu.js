import { useDispatch, useSelector } from "react-redux";
import { selectMenu, toggleMenu } from '../redux/slices/main/mainSlice';
import { useLocation, Link } from 'react-router-dom';

import { Slide, Stack, Box, Button, useTheme } from "@mui/material";
import ThemeSwitcher from './ThemeSwitcher';

import TwitterLogin from "react-twitter-login";

import { GreyButton, BlueButton } from '../config/theme/buttons';
import { CONSUMER_KEY, CONSUMER_SECRET } from '../config/main';

import CloseIcon from '@mui/icons-material/Close';
import Icon from './Icon';
import Logo from './Header/Logo';

const MobileMenu = ({ pages, authHandler, handlePageChange }) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const isMenuOpen = useSelector(selectMenu);
  const location = useLocation().pathname;

  return (
    <Slide direction="down" in={isMenuOpen} mountOnEnter unmountOnExit sx={{
      position: 'fixed',
      width: '100%',
      background: theme.palette.background.default,
      p: '8px 16px',
      zIndex: '100000',
      top: 0,
    }}>
      <Stack direction="column" alignItems="center">
        <Stack direction="row" justifyContent="space-between" sx={{ width: '100%', mb: '64px' }}>
          <Link to="/"><Logo /></Link>
          <Box onClick={() => dispatch(toggleMenu())}><CloseIcon /></Box>
        </Stack>

        <Stack direction="column" spacing={2} sx={{ alignItems: 'center', mb: '48px', }}>
          <Stack direction="row" spacing="12px" sx={{ mb: '12px' }}>
            <GreyButton position={'header'} sx={{ height: '36px', fontSize: '14px' }}>Log In</GreyButton>
            <BlueButton position={'header'} sx={{ height: '36px' }}>Sign up</BlueButton>
          </Stack>
          <Box sx={{ m: '0!important' }}>
            <TwitterLogin
              authCallback={authHandler}
              consumerKey={CONSUMER_KEY}
              consumerSecret={CONSUMER_SECRET}
              callbackUrl=""
              buttonTheme="dark_short"
            />
          </Box>
        </Stack>

        <Box sx={{ mb: '48px' }}>
          <ThemeSwitcher />
        </Box>

        <Stack spacing="32px" sx={{ flexGrow: 1, mb: '130px', "& .MuiButton-startIcon": { mr: '3.5px' }, }}>
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
        </Stack>
      </Stack>
    </Slide>
  )
};

export default MobileMenu;