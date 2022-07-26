import { styled } from '@mui/system';

import { Button } from '@mui/material';


export const WhiteButton = styled(Button)`
  color: #202121;
  background: #F9F9FA;
  border: 1px solid #C8CBD7;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 6px;
  ${'' /* font-family: 'Inter'; */}
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  height: 40px;
  text-transform: Capitalize;
  &:hover {
    background: #f0f0f0;
  }
  &:disabled {
    background: #F9F9FA;
    opacity: 0.3;
  }
`;

export const GreyButton = styled(Button)(({ theme, position }) => ({
  color: theme.palette.button.grey.color,
  background: theme.palette.button.grey.backgroundColor,
  boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
  borderRadius: '6px',
  fontStyle: 'normal',
  fontWeight: '600',
  lineHeight: '22px',
  [theme.breakpoints.down('md')]: {
    height: position === 'header' ? '36px' : '24px',
    fontSize: position === 'header' ? '14px' : '10px',
  },
  [theme.breakpoints.up('md')]: {
    height: '40px',
    fontSize: '14px',
  },
  textTransform: 'capitalize',
  '& .MuiButton-startIcon': {
    margin: '0 5px 0 0',
  },
  '&:hover': {
    background: theme.palette.button.grey.backgroundColor,
  },
  '&:disabled': {
    background: theme.palette.button.grey.backgroundColor,
    opacity: 0.3,
  }
}));

export const BlueButton = styled(Button)(({ theme, position, size }) => ({
  color: '#FFFFFF',
  background: theme.palette.gradient.main,
  borderRadius: '6px',
  fontStyle: 'normal',
  fontWeight: '600',
  fontSize: '14px',
  lineHeight: '22px',
  letterSpacing: '0.3px',
  [theme.breakpoints.down('md')]: {
    height: position === 'header' ? '36px' : size === 'big' ? '40px' : '24px',
  },
  [theme.breakpoints.up('md')]: {
    height: '40px',
  },
  padding: '9px 17px',
  textTransform: 'Capitalize',
  "&:hover": {
    background: 'linear-gradient(90deg, #291CCB 0%, #291CCB 100%)',
  },
  "&:active": {
    background: ' linear-gradient(90deg, #1409A0 0%, #1409A0 100%)',
  },
  "&:disabled": {
    background: 'linear-gradient(90deg, #C6C1FF 0%, #C6C1FF 100%)',
  }
}));

export const BlackButton = styled(WhiteButton)(({ theme }) => ({
  border: 'none',
  color: '#FFFFFF',
  background: theme.palette.button.black.backgroundColor,
  '&:hover': {
    background: theme.palette.button.black.hover
  }
}));

export const TwitterButton = styled(Button)`
  color: #FFFFFF;
  background: #4C40E6;
  border-radius: 6px;
  ${'' /* font-family: 'Inter'; */}
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.3px;
  height: 40px;
  padding: 9px 17px;
  text-transform: Capitalize;
  &:hover {
    background: #291CCB;
  }
  &:active {
    background: #1409A0;
  }
  &:disabled {
    background: #C6C1FF;
  }
`;