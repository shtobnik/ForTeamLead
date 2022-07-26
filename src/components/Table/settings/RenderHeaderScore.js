import { Box, Stack } from '@mui/material';

import Icon from '../../Icon';


const RenderHeaderScore = () => (
  <Stack direction="row" alignItems="center">
    <Box sx={{ color: 'twitter', lineHeight: '5px', fontSize: '15px' }}>
      <Icon image={'Twitter'} />
    </Box>
    <Box sx={{ m: ' 0 5px 0 2px' }}>Score</Box>
    <Box sx={{ color: 'blue', fontSize: '9px', lineHeight: 0 }}>
      <Icon image={'Info'} />
    </Box>
  </Stack>
);

export default RenderHeaderScore;