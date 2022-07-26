import { Box, Stack } from '@mui/material';

import Icon from '../../Icon';


const RenderHeaderFunds = () => (
  <Stack direction="row" alignItems="center">
    <Box>FUNDS LIST</Box>
    <Box sx={{ color: 'blue', fontSize: '9px', lineHeight: 0, ml: '5px' }}>
      <Icon image={'Info'} />
    </Box>
  </Stack>
);

export default RenderHeaderFunds;