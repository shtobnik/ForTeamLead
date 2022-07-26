import { Box } from '@mui/material';


const RenderAction = ({ value: isFollow }) => (
  <Box sx={{ color: isFollow ? 'success.main' : 'error.main' }}>{isFollow ? 'followed' : 'unfollowed'}</Box>
);

export default RenderAction;
