import { Box, Stack } from '@mui/material';

import Icon from '../../Icon';


const RenderPrice = (props) => {
  const { count, rise } = props.value;
  const riseCount = parseFloat(rise);
  const isRise = riseCount > 0;

  return (
    <Stack>
      <Box>{count}</Box>
      <Box>
        <Stack direction="row" alignItems="baseline" sx={{ color: isRise ? 'success.main' : 'error.main' }}>
          <Box sx={{ transform: `rotate(${isRise ? '0' : '180deg'})`, fontSize: '12px', lineHeight: '10px' }}>
            <Icon image={'Arrow'} />
          </Box>
          <Box sx={{ ml: '6px' }}>{rise}</Box>
        </Stack>
      </Box>
    </Stack>
  )
};

export default RenderPrice;