import { useState, memo } from 'react';

import { Search, SearchIconWrapper, StyledInputBase } from "../config/theme/search";

import Icon from "./Icon";

const SearchBlock = ({ rows, text = "Search Twitter Account", setTableRows }) => {
  const [tableSearch, setTableSearch] = useState();

  const findPartial = (array, search) => {
    let foundArray = [];
    for (let i = 0; i < array.length; ++i) {
      if ((array[i].firstName.name.indexOf(search) >= 0)) {
        foundArray.push(array[i]);
      }
    }

    return foundArray;
  };

  const handleKeyPress = (e) => {
    if (e.code === 'Enter') {
      let findElem = '';

      if (tableSearch && setTableRows) {
        findElem = findPartial(rows, tableSearch);
      } else {
        window.location = 'https://www.president.gov.ua/';
      };

      if (setTableRows) {
        setTableRows(findElem.length ? findElem : rows);
      };
    }
  };

  const handleChange = (e) => {
    setTableSearch(e.target.value);
  };


  return (
    <Search sx={{ width: '248px' }} onKeyUp={e => handleKeyPress(e)} onChange={handleChange}>
      <SearchIconWrapper>
        <Icon image={'Search'} />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder={text}
        inputProps={{ 'aria-label': 'search' }}
      />
    </Search>
  )
};

export default memo(SearchBlock);