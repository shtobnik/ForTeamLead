import { useEffect, useState, memo } from "react";
import { Grid, Box } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { SelectInput, menuProps, stylesTop, stylesBottom } from "./settings/TableControls";


import { ExpandMore } from '@mui/icons-material';


const TableControls = ({ setEntriesShows, position, entriesShows }) => {
  const [entries, setEntries] = useState(entriesShows);

  let IsSelectOpen = false;

  useEffect(() => {
    setEntries(entriesShows);
  }, [entriesShows]);

  const handleChange = (event) => {
    setEntries(event.target.value);
  };

  useEffect(() => {
    setEntriesShows(entries);
  }, [entries, setEntriesShows]);

  const isTop = position === 'top';

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

  return (
    <Grid container item direction="row" alignItems="center" sx={isTop ? stylesTop : stylesBottom}>
      <Grid item><Box component="span">Show entries:</Box></Grid>
      <Grid item sx={{ m: { xs: '8px -8px 8px 8px' } }}>
        <FormControl sx={{ m: 1 }}>
          <Select
            labelId="entries-select"
            id="entries-select"
            value={entries}
            onChange={handleChange}
            input={<SelectInput />}
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
      </Grid>
    </Grid>
  )
};

export default memo(TableControls);