import { Box } from "@mui/material";

const RenderReturn = ({ value }) => <Box sx={{ color: parseFloat(value) > 0 ? 'success.main' : 'error.main' }}>{value}</Box>;

export default RenderReturn;