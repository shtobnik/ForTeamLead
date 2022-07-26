import { Box, Stack } from '@mui/material';

import Icon from '../../Icon';


const RenderHeaderCapScore = () => (
  <Stack direction="row" alignItems="center">
    <Box>Cap/</Box>
    <Box sx={{ color: 'twitter', m: '0 4px', lineHeight: '5px', fontSize: '15px' }}>
      <Icon image={'Twitter'} sx={{ color: 'twitter', m: '0 4px' }} />
    </Box>
    <Box>Score</Box>
  </Stack>
);

export default RenderHeaderCapScore;