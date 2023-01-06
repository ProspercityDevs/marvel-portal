import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

SortBySelector.propTypes = {
  selectValue: PropTypes.string,
  setSelectValue: PropTypes.function
};

function SortBySelector({ selectValue, setSelectValue }) {
  const onSelectValueChange = (event) => {
    console.log(event.target.value);
    setSelectValue(event.target.value);
  };

  return (
    <>
      <div>
        <h3>Sort By</h3>
        <h3>{selectValue}</h3>
      </div>
      <div>
        <select value={selectValue} onChange={onSelectValueChange}>
          <option value={1}>A-Z</option>
          <option value={2}>Z-A</option>
        </select>
      </div>
    </>
  );
}

export default SortBySelector;
