import React, { useState } from 'react';
import './styles.scss';

const moviesList = [
  'ANT-MAN',
  'ANT-MAN AND THE WASP',
  'BLACK PANTHER',
  'BLACK PANTHER: WAKANDA FOREVER',
  'ANT-MAN AND THE WASP: QUANTUMANIA',
  'ARMOR WARS',
  'AVENGERS: AGE OF ULTRON',
  'AVENGERS: INFINITY WAR',
  'BLACK PANTHER',
  'BLACK PANTHER: WAKANDA FOREVER',
  'BLACK WIDOW',
  'CAPTAIN AMERICA: CIVIL WAR',
  'CAPTAIN AMERICA: THE FIRST AVENGER',
  'CAPTAIN AMERICA: THE WINTER SOLDIER',
  'CAPTAIN MARVEL',
  'DOCTOR STRANGE',
  'DOCTOR STRANGE IN THE MULTIVERSE OF MADNESS',
  'ETERNALS'
];

function ShowMoviesList() {
  const [checked, setChecked] = useState([]);
  const handleCheck = (e) => {
    let updatedList = [...checked];
    if (e.target.checked) {
      updatedList = [...checked, e.target.value];
    } else {
      updatedList.splice(checked.indexOf(e.target.value), 1);
    }
    setChecked(updatedList);
  };

  const [setShow] = useState(false);
  const handleClose = () => setShow(false);

  const handleReset = () => {};

  const handleApply = () => {};

  return (
    <div className="movies">
      <ul className="movies__list">
        {moviesList.map((item, index) => (
          <li key={index} className="movies__list--item">
            <input value={item} type="checkbox" onChange={handleCheck} />
            <label className="movies__list--text">{item}</label>
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