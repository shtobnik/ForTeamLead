import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme, selectTheme } from '../redux/slices/theme/themeSlice';
import { Stack, Box, useTheme } from '@mui/material';

import Icon from '../components/Icon';

const ThemeSwitcher = () => {
  const theme = useTheme();
  const isDark = useSelector(selectTheme);
  const dispatch = useDispatch();

  return (
    <Stack direction="row" alignItems="center" spacing='9px' sx={{ color: theme.palette.text.default, cursor: 'pointer', }} onClick={() => dispatch(toggleTheme())}>
      {
        isDark ?
          <><Box>Light Theme</Box><Box sx={{ fontSize: '14px' }}><Icon image={'Sun'} /></Box></> :
          <><Box>Dark Theme</Box><Box sx={{ fontSize: '14px' }}><Icon image={'Moon'} /></Box></>
      }
    </Stack>
  );
};

export default ThemeSwitcher;