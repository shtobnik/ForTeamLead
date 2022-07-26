import React, { useEffect, useState, memo } from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { styled } from '@mui/material';
import InputBase from '@mui/material/InputBase';

import { ExpandMore } from '@mui/icons-material';

export const SelectBlock = ({ setEntriesShows, entriesShows }) => {
  const [entries, setEntries] = useState(entriesShows);

  let IsSelectOpen = false;

  const handleChange = (event) => {
    setEntries(event.target.value);
  };

  useEffect(() => {
    setEntriesShows(entries);
  }, [entries]);

  const BootstrapInput = styled(InputBase)(({ theme }) => ({
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

  const handleOpen = () => {
    IsSelectOpen = true;
  };

  const handleClose = () => {
    IsSelectOpen = false;
  };

  const iconComponent = () => {
    return (
      <ExpandMore sx={{ color: '#9e9e9e', right: '4px', position: 'absolute', userSelect: 'none', pointerEvents: 'none', transform: IsSelectOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} />
    );
  };

  const menuProps = {
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "left"
    },
    transformOrigin: {
      vertical: "top",
      horizontal: "left"
    },
  };

  return (
    <div>
      <FormControl sx={{ m: 1 }}>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={entries}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'Without label' }}
          input={<BootstrapInput />}
          IconComponent={iconComponent}
          MenuProps={menuProps}
          onOpen={handleOpen}
          onClose={handleClose}
        >
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={25}>25</MenuItem>
          <MenuItem value={50}>50</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default memo(SelectBlock);