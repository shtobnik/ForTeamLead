import { memo } from "react";
import { styled } from "@mui/material";
import Slider from '@mui/material/Slider';

const PrettySlider = styled(Slider)(({ theme, rainbow = false }) => {

  const isRainbow = rainbow === 'true';

  return ({
    display: 'inline-block',
    marginTop: '10px',
    color: 'primary',
    height: isRainbow ? 16 : 4,
    "& .MuiSlider-track": {
      border: "none",
      background: isRainbow ? 'none' : 'currentColor',
    },
    "& .MuiSlider-rail": {
      background: isRainbow ? 'linear-gradient(90deg, #FF3D00 0%, #FFE600 52.37%, #00E640 100%)' : theme.palette.control.backgroundColor,
      opacity: 1,
    },
    "& .MuiSlider-thumb": {
      height: isRainbow ? '32px' : '18px',
      width: isRainbow ? '32px' : '18px',
      background: isRainbow ? theme.palette.common.white : theme.palette.gradient.main,
      border: isRainbow ? `5px solid ${theme.palette.primary.main}` : "4px solid #D3E1FE",
      "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
        boxShadow: "inherit"
      },
      "&:before": {
        display: "none"
      },
    },
    "& .MuiSlider-valueLabel": {
      color: theme.palette.primary.gray,
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '12px',
      lineHeight: '10px',
      background: "none",
      padding: 0,
      backgroundColor: "none",
    }
  })
});

export default memo(PrettySlider);