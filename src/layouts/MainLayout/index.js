import { useEffect, useState, useRef, memo } from 'react';
import { useSelector } from 'react-redux';
import { selectMenu, selectFilterShow } from '../../redux/slices/main/mainSlice';
import { Outlet } from 'react-router-dom';
import { useCookies } from 'react-cookie';

import {
  Grid,
  Container,
  Slide,
  Stack,
  Typography,
  useTheme
} from "@mui/material/";

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MobileFilter from '../../components/MobileFilter';
import CookiesConsent from '../../components/CookiesConsent';

const MainLayout = () => {
  const isFilterShow = useSelector(selectFilterShow);
  const [cookies, setCookie] = useCookies(['access_token', 'refresh_token']);
  const [isCookies, setIsCookies] = useState(cookies.cookiesConsent);

  const ref = useRef();

  useEffect(() => {
    setIsCookies(cookies.cookiesConsent);
  }, [cookies]);

  const consent = () => {
    setIsCookies(true);
    setCookie('cookiesConsent', 'true');
  };

  return (
    <>
      <Grid container direction={'column'} columns={3} sx={{ minHeight: '100%', position: 'relative' }} ref={ref}>
        <Grid item>
          <Header />
        </Grid>
        <Grid item sx={{ flexGrow: 1, pt: { xs: '80px', md: '97px' }, mb: '112px' }}>
          <Container maxWidth="xl" sx={{ maxWidth: '1290px', pt: { xs: '16px', md: '27px' } }}>
            <Outlet />
          </Container>
        </Grid>
        <Grid item>
          <Container maxWidth="xl" sx={{ maxWidth: '1290px' }}>
            <Footer />
          </Container>
        </Grid>
        <Grid>
          <MobileFilter isFilterShow={isFilterShow} />
        </Grid>
      </Grid>

      {!isCookies && <CookiesConsent consent={consent} />}
    </>
  )
};

export default memo(MainLayout);