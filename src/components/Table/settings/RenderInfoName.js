import { Box, Stack } from "@mui/material";

const RenderInfoName = ({ value: { name, subName } }) => (
  <Stack>
    <Box>{name}</Box>
    <Box>{subName}</Box>
  </Stack>
);

export default RenderInfoName;