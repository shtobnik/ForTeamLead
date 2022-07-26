import { useDispatch, useSelector } from "react-redux";
import { setIsFilterShow, selectFilterShow } from "../redux/slices/main/mainSlice";

import PrettySlider from "./PrettySlider";

import { Box, Slide, Stack, Typography, Button, useTheme } from "@mui/material";

const handleSliderChange = (e, params) => {
  console.log('params', params);
};

const MobileFilter = ({ isFilterShow }) => {
  const dispatch = useDispatch();
  const theme = useTheme();

  const sliderValueFirst = 158;
  const sliderValueSecond = 377;

  const closeHandler = (e) => {
    dispatch(setIsFilterShow(false));
  };

  return (
    <>
      <Box onClick={closeHandler} sx={{ display: isFilterShow ? 'block' : 'none', filter: 'blur(2px)', height: '100vh', width: '100vw', position: 'fixed', left: 0, top: 0, }} />
      <Slide direction="up" in={isFilterShow} mountOnEnter unmountOnExit sx={{
        position: 'fixed',
        width: '100%',
        background: theme.palette.background.default,
        boxShadow: `0 -2px 25px ${theme.palette.common.grey}`,
        borderRadius: '25px 25px 0 0',
        p: '8px 16px',
        zIndex: '100000',
        bottom: '0',
      }}>
        <Stack onClick={closeHandler} sx={{ p: '16px 32px 40px' }}>
          <Stack alignItems='center' justifyContent='center' sx={{ pb: '32px' }}>
            <Box sx={{
              height: '4px',
              width: '78px',
              backgroundColor: theme.palette.common.grey,
              borderRadius: '25px',
            }} />
          </Stack>
          <Stack direction="column">
            <Typography variant="h6" sx={{ mb: '24px' }}>Filter</Typography>
            <Typography variant="span" sx={{ color: 'primary.gray', mb: '14px' }}>Set Score Range:</Typography>
            <Box sx={{ width: '100%', mb: '6px' }}>
              <PrettySlider
                rainbow={'false'}
                min={0}
                max={1000}
                valueLabelDisplay="on"
                onChangeCommitted={handleSliderChange}
                step={1}
                defaultValue={[sliderValueFirst, sliderValueSecond]}
              />
            </Box>
            <Button variant="text">apply filter</Button>
          </Stack>

        </Stack>
      </Slide>
    </>
  )
};

export default MobileFilter;