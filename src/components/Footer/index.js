import * as React from 'react';

import { footerMenu } from '../../config/footerMenu';
import Logo from '../Header/Logo';

import Icon from '../../components/Icon';

import './Footer.scss';

import {
  Box,
  Grid,
  List,
  ListItem,
  ListSubheader,
  ListItemIcon,
  ListItemText,
  Link,
} from "@mui/material";

import { BlueButton } from '../../config/theme/buttons';


const Footer = () => (
  <>
    <Grid container direction='row' columns={2}>
      <Grid item sx={{ maxWidth: { xs: '100%', md: '25%' }, width: '100%', pr: '10px', flexWrap: 'wrap', mr: { md: '120px' }, mb: { xs: '32px' } }}>
        <Link to="/"><Logo /></Link>
        <Box sx={{ m: '24px 0', width: '100%' }}>Get a free oportunity to track your Twitter Score generate and download your daily stats and many other features with CoinsGuru</Box>
        <BlueButton sx={{ display: { xs: 'none', md: 'block' } }}>Sign up</BlueButton>
        <BlueButton sx={{ display: { xs: 'block', md: 'none' } }} size={'big'}>Sign up</BlueButton>
      </Grid>
      <Grid container item direction='row' spacing='60px' sx={{ width: 'auto', maxWidth: { xs: '100%', md: '50%' } }}>
        {Object.keys(footerMenu).map((key) => (
          <Grid item key={`key-${key}`} >
            <List key={key} dense={true} disablePadding={true}>
              <ListSubheader color='default' disableGutters={true}
                sx={{
                  background: 'none',
                  color: 'text.default',
                  fontWeight: '700',
                  fontSize: '11px',
                  lineHeight: '16px',
                  letterSpacing: '0.4px',
                  textTransform: 'uppercase',
                  mb: '24px',
                }}>
                {key}
              </ListSubheader>
              {footerMenu[key].map((elem, index) => (
                <ListItem className="listItem" key={`item-${key}-${index}`} disableGutters={true} sx={{ p: 0, mb: '15px' }}>
                  <ListItemIcon sx={{ minWidth: 'auto', mr: '10px' }}>
                    {
                      elem.icon === 'star' ?
                        <Box sx={{ color: 'primary.main', fontSize: '17px' }}><Icon image={'StarFill'} /></Box> :
                        elem.icon === 'fire' ?
                          <Box sx={{ color: 'primary.main', fontSize: '15px' }}><Icon image={'Fire'} /></Box> :
                          elem.icon === 'telegram' ?
                            <Box sx={{ color: 'twitter', fontSize: '16px' }}><Icon image={'Telegram'} /></Box> :
                            elem.icon === 'graph' ?
                              <Box sx={{ color: 'primary.main', fontSize: '24px' }}><Icon image={'Chart'} /></Box> :
                              elem.icon === 'twitter' ?
                                <Box sx={{ color: 'twitter', fontSize: '17px' }}><Icon image={'Twitter'} /></Box> :
                                elem.icon === 'twitterSmall' ?
                                  <Box sx={{ color: 'twitter', fontSize: '14px' }}><Icon image={'TwitterSmall'} /></Box> :
                                  elem.icon === 'none' ?
                                    false :
                                    <></>
                    }
                  </ListItemIcon>
                  <ListItemText sx={{ m: 0 }}>
                    <Link href='#' underline='hover' color={'text.primary'}>{elem.name}</Link>
                  </ListItemText>
                  {elem.isNew && <Box className='listItemLabel'>New</Box>}
                </ListItem>
              ))}
            </List>
          </Grid>
        ))}
      </Grid>
      {/* <Grid sx={{ color: 'text.primary', m: '88px 0 28px' }}>© {new Date().getFullYear()} CoinsGuru. All right reserved</Grid> */}
    </Grid>
    <Box sx={{ color: 'text.primary', m: '88px 0 28px' }}>© {new Date().getFullYear()} CoinsGuru. All right reserved</Box>
  </>
);

export default Footer;