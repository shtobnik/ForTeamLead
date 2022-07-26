import { Grid, Box, Link } from '@mui/material';


const RenderName = ({ value: { name, linkName, linkUrl, img } }) => (
  <Grid container direction="row">
    <Grid item sx={{ height: '48px', width: '48px' }}><Box sx={{ backgroundImage: `url(${img})`, height: '100%', width: '100%', backgroundSize: 'contain' }}></Box></Grid>
    <Grid container item direction="column" sx={{ width: '156px', ml: '20px' }}>
      <Grid item>{name}</Grid>
      <Grid item><Link href={linkUrl} underline="hover" sx={{ color: 'primary' }}>{linkName}</Link></Grid>
    </Grid>
  </Grid>
);

export default RenderName;