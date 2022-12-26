import React, {useState} from 'react';
import './styles.scss';
import {SeriesGridPaginated} from '../../../../marvel-characters/components/CharacterGrid/seriesGrid.jsx';


function ShowMoviesList() {
  
  const series=SeriesGridPaginated();
  const [setShow] = useState(false);
  const handleClose = () => setShow(false);

  const handleReset = () => {};

  const handleApply = () => {};

  return (
    <div className="movies">
      <ul className="movies__list">
      {series.map((item, index) => (
          <li key={index} className="movies__list--item">
            <input value={item.name} type="radio" name="series"/>
            <label className="movies__list--text">{item.name}</label>
          </li>
        ))}
      </ul>
      <div className="movies__buttons--container">
        <div className="movies__buttons--left">
          <button className="movies__buttons" onClick={handleApply}>
            Apply
          </button>
        </div>
        <div className="movies__buttons--right">
          <button className="movies__buttons" onClick={handleReset}>
            Reset
          </button>
          <button className="movies__buttons" onClick={handleClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShowMoviesList;