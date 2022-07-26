import { Box, styled } from "@mui/material";

import Sprite from '../../images/sprite.png';

const Logo = styled(Box)(({ theme, size = 'big' }) => ({
  width: size === 'small' ? '134px' : '168px',
  height: size === 'small' ? '32px' : '40px',
  backgroundImage: `url(${Sprite})`,
  backgroundSize: '380px',
  backgroundPosition: theme.palette.mode === 'dark' ? '0 -38px' : '0 0',
  backgroundRepeat: 'no-repeat'
}));

export default Logo;