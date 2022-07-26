import { Box, Stack, Link } from "@mui/material";


const RenderLinks = ({ value }) => (
  <Stack direction="row" sx={{ height: '56px', pl: '3px', overflow: 'hidden', flexWrap: 'wrap', alignItems: 'center' }}>
    {value.map((elem, key) => (
      <Link href={elem.linkUrl} target="_blank" key={key}>
        <Box
          component="div"
          sx={{
            backgroundImage: `url(${elem.linkImage})`,
            height: '18px',
            width: '18px',
            backgroundSize: 'contain',
            borderRadius: '60%',
            flexWrap: 'wrap',
            mr: '8px'
          }}>
        </Box>
      </Link>
    ))}
  </Stack>
);

export default RenderLinks;