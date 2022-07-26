import React, { memo } from "react";
import Checkbox from "@mui/material/Checkbox";
import { Box } from "@mui/material";
import Icon from '../Icon';


const CheckboxWrapper = React.forwardRef((props, ref) => (
  <Checkbox
    icon={
      <Box sx={{ color: 'text.primary', fontSize: '17px', lineHeight: '17px' }}>
        <Icon image={'StarStroke'} />
      </Box>
    }
    checkedIcon={
      <Box sx={{ color: 'primary.main', fontSize: '17px', lineHeight: '17px' }}>
        <Icon image={'StarFill'} />
      </Box>
    }
    sx={{ outline: 'none' }}
    {...props}
  />
));

export default memo(CheckboxWrapper);
