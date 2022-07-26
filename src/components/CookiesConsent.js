import { Box, Grid, Typography, Stack } from "@mui/material";
import { styled } from "@mui/material";

import { WhiteButton, BlackButton } from "../config/theme/buttons";

import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const CookiesConsent = ({ consent }) => {

  const StyledBox = styled(Box)(({ theme }) => ({
    padding: '20px 16px 20px 25px',
    backgroundColor: theme.palette.primary.main,
    position: 'fixed',
    left: '0',
    bottom: '0',
    width: '100%',
  }));

  return (
    <StyledBox component="div">
      <Grid container sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
        <Grid container item sx={{ width: '81%' }}>
          <Grid><InfoOutlinedIcon sx={{ color: '#fff' }} /></Grid>
          <Grid>
            <Typography variant="h6" sx={{ mt: '0', fontSize: '16px', color: '#fff' }}>Cookies & Privacy</Typography>
            <Box component="span" sx={{ fontWeight: '400', fontSize: '12px', lineHeight: '18px', letterSpacing: '0.1px', color: '#fff' }}>We use cookies to enhance your experience, analyze our traffic, and for security and marketing. By visiting our website you agree to our use of cookies.</Box>
          </Grid>
        </Grid>
        <Grid item>
          <Stack direction="row" spacing={0.8}>
            <BlackButton>More Information</BlackButton>
            <WhiteButton onClick={consent}>Understood</WhiteButton>
          </Stack>
        </Grid>
      </Grid>
    </StyledBox>
  )
};

export default CookiesConsent;