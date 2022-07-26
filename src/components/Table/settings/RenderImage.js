import { Box } from "@mui/material";

const RenderImage = ({ value }) => <Box sx={{ background: `url(${value}) 0 0 no-repeat`, backgroundSize: 'contain', width: '48px', height: '48px' }} />

export default RenderImage;