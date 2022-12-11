import React, { useState } from 'react';
import './styles.scss';

export default function MovieList() {
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

  return (
    <div className="movies">
      <ul className="movies__list">
        {movies.map((item, index) => (
          <li key={index} className="movies__list--item">
            <input value={item} type="checkbox" onChange={handleCheck} />
            <label className="movies__list--text">{item}</label>
          </li>
        ))}
      </ul>
      <div className="movies__buttons--container">
        <div className="movies__buttons--left">
          <button className="movies__buttons">Apply</button>
        </div>
        <div className="movies__buttons--right">
          <button className="movies__buttons">Reset</button>
          <button className="movies__buttons">Close</button>
        </div>
      </div>
    </div>
  );
}

const movies = [
  'ANT-MAN',
  'ANT-MAN AND THE WASP',
  'BLACK PANTHER',
  'BLACK PANTHER: WAKANDA FOREVER',
  'ANT-MAN',
  'ANT-MAN AND THE WASP',
  'BLACK PANTHER',
  'BLACK PANTHER: WAKANDA FOREVER',
  'ANT-MAN',
  'ANT-MAN AND THE WASP',
  'BLACK PANTHER',
  'BLACK PANTHER: WAKANDA FOREVER',
  'ANT-MAN',
  'ANT-MAN AND THE WASP',
  'BLACK PANTHER',
  'BLACK PANTHER: WAKANDA FOREVER',
  'ANT-MAN',
  'ANT-MAN AND THE WASP',
  'BLACK PANTHER',
  'BLACK PANTHER: WAKANDA FOREVER',
  'ANT-MAN',
  'ANT-MAN AND THE WASP',
  'BLACK PANTHER',
  'BLACK PANTHER: WAKANDA FOREVER',
  'ANT-MAN',
  'ANT-MAN AND THE WASP',
  'BLACK PANTHER',
  'BLACK PANTHER: WAKANDA FOREVER'
];
