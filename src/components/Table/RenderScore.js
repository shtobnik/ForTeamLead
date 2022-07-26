import { memo } from "react";
import { Box } from "@mui/material";

const RenderScore = ({ value, size }) => {
  const type = value <= 333 ? 'third' : value > 333 && value < 666 ? 'second' : 'first';

  return (
    <Box component="div" sx={{
      fontWeight: '600',
      fontSize: size === 'small' ? '10px' : '12px',
      lineHeight: ' 16px',
      p: size === 'small' ? '0 7px' : '2px 10px',
      borderRadius: '10px',
      backgroundColor: type === 'first' ? 'score.background.first' : type === 'second' ? 'score.background.second' : 'score.background.third',
      color: type === 'first' ? 'score.text.first' : type === 'second' ? 'score.text.second' : 'score.text.third',
      textAlign: 'center',
    }}>{value}</Box>
  )
};

export default memo(RenderScore);