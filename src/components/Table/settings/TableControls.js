import { styled } from "@mui/material";
import InputBase from '@mui/material/InputBase';

export const SelectInput = styled(InputBase)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    height: '24px',
  },
  [theme.breakpoints.up('md')]: {
    height: '40px',
  },
  '.MuiFormControl-root': {
    marginTop: '0px!important',
  },
  '& .MuiPaper-root .MuiButtonBase-root-MuiMenuItem-root.Mui-selected': {
    backgroundColor: theme.palette.control.backgroundColor,
  },
  '& .MuiInputBase-input': {
    backgroundColor: theme.palette.control.backgroundColor,
    color: theme.palette.menu.main,
    borderRadius: '4px',
    position: 'relative',
    fontWeight: '500',
    height: '24px',
    [theme.breakpoints.down('md')]: {
      fontSize: '10px',
      lineHeight: '24px',
      padding: '0 17px',
      height: '24px',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '14px',
      lineHeight: '20px',
      padding: '9px 17px',
      height: '40px',
    },
    textAlign: 'center',
    padding: '5px 17px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
    '&:hover': {
      background: theme.palette.control.hover,
    },
  },
}));

export const menuProps = {
  anchorOrigin: {
    vertical: "bottom",
    horizontal: "left"
  },
  transformOrigin: {
    vertical: "top",
    horizontal: "left"
  },
};

export const stylesTop = {
  width: 'auto',
  position: { xs: 'relative', md: 'absolute' },
  top: { xs: '0', md: '-7px' },
  right: 0
};

export const stylesBottom = {
  width: 'auto',
  position: { xs: 'relative', md: 'absolute' },
  bottom: { xs: '0', md: '-7px' },
  right: 0
};