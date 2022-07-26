import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    menu: {
      main: '#5A6689',
      active: '#4C40E6'
    },
    primary: {
      main: '#4C40E6',
      contrastText: '#fff',
      grey: '#EFF0F3',
    },
    blue: '#2563EB',
    background: {
      default: '#fff',
      second: '#fff'
    },
    twitter: '#1DA1F2',
    link: {
      main: '#4C40E6',
    },
    gradient: {
      main: 'linear-gradient(90deg, #7B61FF 0%, #4C40E6 100%)',
    },
    common: {
      white: '#fff',
      grey: '#3d3e3f',
    },
    error: {
      main: '#D83232',
    },
    success: {
      main: '#419E6A',
    },
    score: {
      background: {
        first: '#E8FCF1',
        second: '#FFF5D5',
        third: '#FFEBEB'
      },
      text: {
        first: '#00632B',
        second: '#976400',
        third: '#B01212'
      },
      borderColor: '#474D65',
    },
    text: {
      default: '#000',
      primary: '#5A6689',
      secondary: '#000',
      grey: '#333743',
      black: '#202121',
      h2: {
        color: '#070707',
      },
    },
    borderColor: '#E5E7EC',
    input: {
      backgroundColor: '#fff',
    },
    block: {
      backgroundColor: '#fff',
      secondary: 'rgba(237, 237, 252, 0.2)',
      shadow: '0 2px 16px rgba(138, 156, 210, 0.15)'
    },
    control: {
      backgroundColor: '#EFF0F3',
      hover: '#e2e3e5'
    },
    button: {
      black: {
        backgroundColor: '#202121',
        hover: '#383939',
      },
      grey: {
        backgroundColor: '#EFF0F3',
        backgroundColorActive: '#EDEDFC',
        color: '#767E9C',
        border: '#C8CBD7',
        colorActive: '#1409A0',
      }
    },
    graph: {
      main: '#4D82F3',
      fall: '#EA4293',
    },
  },
  typography: {
    h2: {
      fontWeight: '600',
      fontSize: '24px',
      lineHeight: '32px',
      textAlign: 'center',
      letterSpacing: '0.15px',
      marginBottom: '32px',
    },
    h4: {
      fontStyle: 'normal',
      fontWeight: '700',
      fontSize: '16px',
      lineHeight: '24px',
      textAlign: 'center',
      letterSpacing: '0.15px',
      marginBottom: '24px',
    }
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    menu: {
      main: '#fff',
      active: '#EA4293'
    },
    primary: {
      main: '#EA4293',
      grey: '#333743',
    },
    blue: '#4D82F3',
    background: {
      default: '#202121',
      second: '#383939'
    },
    twitter: '#1DA1F2',
    link: {
      main: '#EA4293',
    },
    gradient: {
      main: 'linear-gradient(270deg, #EA4293 0%, #C131E0 100%)',
    },
    common: {
      white: '#fff',
      grey: '#3d3e3f',
    },
    error: {
      main: '#D83232',
    },
    success: {
      main: '#419E6A',
    },
    score: {
      background: {
        first: '#A5E1BF',
        second: '#FFDE81',
        third: '#FC9595'
      },
      text: {
        first: '#00401C',
        second: '#724B00',
        third: '#8C0000'
      },
    },
    text: {
      default: '#fff',
      primary: '#fff',
      secondary: '#000',
      grey: '#fff',
      black: '#fff',
      h2: {
        color: '#fff',
      },
    },
    borderColor: '#474D65',
    input: {
      backgroundColor: '#333743',
    },
    block: {
      backgroundColor: '#333743',
      secondary: 'rgba(237, 237, 252, 0.05)',
      shadow: '0 2px 16px rgba(1, 16, 63, 0.15)'
    },
    control: {
      backgroundColor: '#474D65',
      hover: '#575e7c'
    },
    button: {
      black: {
        backgroundColor: '#202121',
        hover: '#383939',
      },
      grey: {
        backgroundColor: '#333743',
        backgroundColorActive: '#EA4293',
        color: '#767E9C',
        border: '#C8CBD7',
        colorActive: '#FFFFFF',
      }
    },
    graph: {
      main: '#4D82F3',
      fall: '#EA4293',
    },
  },
  typography: {
    h2: {
      fontWeight: '600',
      fontSize: '24px',
      lineHeight: '32px',
      textAlign: 'center',
      letterSpacing: '0.15px',
      marginBottom: '32px',
    },
    h4: {
      fontStyle: 'normal',
      fontWeight: '700',
      fontSize: '16px',
      lineHeight: '24px',
      textAlign: 'center',
      letterSpacing: '0.15px',
      marginBottom: '24px',
    }
  },
});