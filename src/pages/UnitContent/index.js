import { memo } from 'react';
import { useNavigate, Outlet, useLocation } from 'react-router-dom';
import { Box, Grid, Stack, Typography } from "@mui/material"
import { StyledTab } from '../MainInfo/styling';
import { Search, SearchIconWrapper, StyledInputBase } from "../../config/theme/search";
import Icon from '../../components/Icon';
import { styled } from "@mui/material";


const StyledTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.h2.color
}));


const UnitContent = () => {
  const location = useLocation().pathname;

  let navigate = useNavigate();
  const goToPage = (pageName) => {
    let path = pageName;
    navigate(path);
  };

  return (
    <>
      <Grid container sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center', mb: '52px' }}>
        <Grid item><StyledTitle variant="h2">Crypto involved Twitter accounts on our daily monitoring 👀: 16 862</StyledTitle></Grid>
        <Grid item>
          <Search sx={{ width: '584px', mb: '84px' }}>
            <SearchIconWrapper>
              <Icon width={24} height={24} image={'Search'} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search Twitter Account"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Grid>
      </Grid>

      <Box sx={{ width: '100%', mb: '60px' }}>
        <Stack direction="row" justifyContent="center" sx={{ flexWrap: 'wrap' }}>
          <StyledTab page="mainInfo" startIcon={<Box sx={{ fontSize: '26px' }}><Icon image={'Lightning'} /></Box>} location={location} onClick={() => goToPage('mainInfo')}>Main Info</StyledTab>
          <StyledTab page="followedByList" startIcon={<Box sx={{ fontSize: '26px' }}><Icon image={'User'} /></Box>} location={location} onClick={() => goToPage('followedByList/all')}>Followed By List</StyledTab>
          <StyledTab page="friendshipHistory" startIcon={<Box sx={{ fontSize: '18px' }}><Icon image={'Heart'} /></Box>} location={location} onClick={() => goToPage('friendshipHistory/following')}>Friendship History</StyledTab>
          <StyledTab page="charts" startIcon={<Box sx={{ fontSize: '24px' }}><Icon image={'Chart'} /></Box>} location={location} onClick={() => goToPage('charts')}>Charts for 180 Days</StyledTab>
        </Stack>
      </Box>
      <Box sx={{ width: { xs: 'calc(100vw - 32px)', md: 'auto' } }}>
        <Outlet />
      </Box>
    </>
  )
};

export default memo(UnitContent);