import { Paper, Box, Typography, Link, Button, styled } from "@mui/material";
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { DataGrid } from '@mui/x-data-grid';
import Icon from '../../components/Icon';

import useWindowDimensions from "../../Hooks/WindowDimentions";

export const StyledPaper = styled(Paper)(({ theme }) => ({
  background: theme.palette.block.backgroundColor,
  boxShadow: theme.palette.block.shadow,
  color: theme.palette.menu.main,
  height: 'auto',
  padding: '20px 16px',
  borderRadius: '16px'
}));

export const StyledBoxTitle = styled(Box)(({ theme, size }) => ({
  fontWeight: '600',
  fontSize: size ? size : { xs: '10px', md: '20px' },
  lineHeight: { xs: '16px', md: '28px' },
  letterSpacing: '0.15px',
  textTransform: 'uppercase',
}));


export const StyledPageTitle = styled(StyledBoxTitle)(({ theme }) => ({
  color: '#fff',
  textAlign: 'center',
  fontSize: '16px',
  marginBottom: '24px',
}));

export const StyledText = styled(Typography)(({ theme }) => ({
  fontWeight: '700',
  fontSize: { xs: '14px', md: '24px' },
  lineHeight: '32px',
  letterSpacing: ' 0.15px',
  background: theme.palette.gradient.main,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent"
}));

export const StyledLink = styled(Link)(({ theme, size }) => ({
  fontStyle: 'normal',
  fontWeight: '600',
  fontSize: size === 'small' ? '12px' : { xs: '12px', md: '20px' },
  lineHeight: size === 'small' ? '16px' : { xs: '16px', md: '28px' },
  letterSpacing: '0.15px',
  color: theme.palette.link.main,
}));


export const FullWidthBox = styled(Box)(({ theme, blockWidth }) => {
  const { width } = useWindowDimensions();
  const siteWidth = 1242;

  return ({
    [theme.breakpoints.down('md')]: {
      margin: '0 -16px'
    },
    [theme.breakpoints.up('md')]: {
      marginLeft: `-${(width - siteWidth) / 2}px`,
    },
    position: 'relative',
    overflow: 'hidden',
    width: '100vw',
  })
});

export const BootstrapTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  padding: '10px',
  width: '200px',
  height: '84px',
  borderRadius: '8px',
  fontWeight: '400',
  fontSize: '12px',
  lineHeight: '16px',
  textAlign: 'center',
  [`& .${tooltipClasses.arrow}`]: {
    color: 'rgba(7, 7, 7, 0.8)',
  },
  [`& .${tooltipClasses.tooltip}`]: {
    background: 'rgba(7, 7, 7, 0.8)',
  },
}));

export const FollowedByImg = styled(Box)(({ theme, img, size }) => ({
  background: `url(${img}) 0 0 no-repeat`,
  backgroundSize: 'contain',
  borderRadius: '60px',
  height: size === 'small' ? '40px' : '48px',
  width: size === 'small' ? '40px' : '48px',
}));

export const Favorite = () => {
  return (
    <Box sx={{
      backgroundColor: '#FFDE81',
      borderRadius: '50px',
      color: '#EFB008',
      fontSize: '11px',
      width: '16px',
      height: '16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      top: '-5px',
      right: '0',
    }}>
      <Icon image={'StarFill'} />
    </Box>
  )
}

export const RiseCount = styled(Box)(({ theme }) => ({
  fontWeight: '600',
  fontSize: ' 48px',
  lineHeight: '22px',
  display: 'flex',
  alignItems: 'center',
  color: theme.palette.success.main,
  position: 'absolute',
  left: '50%',
  opacity: 0.5,
  top: '50%',
  transform: 'translate3d(-50%, -50%, 0)',
}));

export const StyledDataGrid = styled(DataGrid)(({ isOne, isPagination }) => ({
  border: 'none',
  minHeight: isOne ? '161px' : '325px',
  marginBottom: isPagination ? '32px' : 0,
  m: '28px 0 70px',
  '& .MuiDataGrid-columnHeaders': {
    minHeight: isOne && '16px!important',
    lineHeight: isOne && '16px!important',
  },
  '& .MuiDataGrid-virtualScroller': {
    height: isOne && '72px!important',
    marginTop: isOne && '37px!important',
  },
  '& .MuiDataGrid-iconSeparator': {
    display: 'none',
  },
  '& .MuiDataGrid-main': {
    border: 'none',
    borderRadius: '8px'
  },
  '& .MuiDataGrid-renderingZone': {
    maxHeight: 'none!important'
  },
  '& .MuiDataGrid-cell': {
    lineHeight: 'unset!important',
    maxHeight: 'none!important',
    whiteSpace: 'normal',
    height: '72px',
  },
  '& .MuiDataGrid-row': {
    maxHeight: 'none!important',
  },
  '& .MuiDataGrid-footerContainer': {
    border: 'none',
    justifyContent: 'center',
  }
}));

export const StyledRise = styled(Box)(({ theme, rise, chart }) => ({
  color: rise ? theme.palette.success.main : theme.palette.error.main,
  [theme.breakpoints.down('md')]: {
    fontSize: chart ? '48px' : '10px'
  },
  [theme.breakpoints.up('md')]: {
    fontSize: chart ? '48px' : '16px'
  },
}));

export const StyledTab = styled(Button)(({ theme, page, location }) => ({
  borderRadius: '6px',
  padding: '8px 12px',
  color: location.includes(page) ? theme.palette.button.grey.colorActive : theme.palette.button.grey.color,
  backgroundColor: location.includes(page) ? theme.palette.button.grey.backgroundColorActive : theme.palette.button.grey.backgroundColor,
  fontWeight: '500',
  fontSize: '14px',
  lineHeight: '20px',
  height: '40px',
  minHeight: 'auto',
  minWidth: 'auto',
  textTransform: 'capitalize',
  [theme.breakpoints.down('md')]: {
    margin: '0 0 8px 8px'
  },
  [theme.breakpoints.up('md')]: {
    margin: '0 0 0 10px'
  },
  '&:hover': {
    background: location.includes(page) ? theme.palette.button.grey.backgroundColorActive : theme.palette.button.grey.backgroundColor,
    opacity: 0.8
  },
}));

export const Annotation = styled(Box)(({ theme }) => ({
  color: theme.palette.primary.gray,
  fontWeight: '700',
  fontSize: '11px',
  lineHeight: '16px',
  letterSpacing: '0.4px',
  textTransform: 'uppercase',
  display: 'flex',
  alignItems: 'baseline',
  justifyContent: 'space-between',
}));

export const Following = ({ theme, isFollow }) => (
  <Box sx={{
    fontWeight: '600',
    fontSize: '16px',
    lineHeight: ' 24px',
    textAlign: 'right',
    letterSpacing: '0.15px',
    color: isFollow ? theme.palette.success.main : theme.palette.error.main,
    width: '85px',
  }}>
    {isFollow ? 'followed' : 'unfollowed'}
  </Box>
);
