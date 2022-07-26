import { Box, Stack } from '@mui/material';


const RenderFunds = ({ value }) => (
  <Stack direction="row" sx={{ height: '56px', pl: '3px', overflow: 'hidden', flexWrap: 'wrap', }}>
    {value.map((elem, key) => (
      <Box
        key={key}
        component="div"
        sx={{
          backgroundImage: `url(${elem})`,
          height: '18px',
          width: '18px',
          backgroundSize: 'contain',
          borderRadius: '60%',
          flexWrap: 'wrap',
          m: '0 0 2px -3px',
        }}>
      </Box>
    ))}
  </Stack>
);

export default RenderFunds;