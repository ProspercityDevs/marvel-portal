import React from 'react';
import { useState } from 'react';
import './styles.scss';
import { RiSearch2Line } from 'react-icons/ri';

function SearchBar() {
  const [searchValue, setSearchValue] = useState('');
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <div className="filter_search">
      <RiSearch2Line className="icon_search" />
      <input
        className="input-search"
        placeholder="SEARCH"
        value={searchValue}
        onChange={onSearchValueChange}
        autoComplete="off"
        aria-autocomplete="list"
        aria-controls="reac-autowhatever-1"
      />
    </div>
  );
}

export default SearchBar;
