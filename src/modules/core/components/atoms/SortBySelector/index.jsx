import React from 'react';
import './styles.scss';

function SortBySelector({ selectValue, setSelectValue }) {
  return (
    <>
      <div>
        <h3>Sort By</h3>
        <span>{selectValue}</span>       
      </div>
      <div>
        <select value={selectValue} onChange={(e) => setSelectValue(e.target.value)}>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
        </select>
      </div>
    </>
  );
}

export default SortBySelector;
