import React, { useState } from 'react';
import './styles.scss';
import { RiArrowDropDownFill } from 'react-icons/ri';

export default function MovieFilter() {
  const [toggle, setToggle] = useState(false);
  const [checked, setChecked] = useState([]);

  const handleToggle = () => {
    setToggle((prevToggle) => !prevToggle);
  };

  let updatedList = [...checked];

  const handleCheck = (e) => {
    if (e.target.checked) {
      updatedList = [...checked, e.target.value];
    } else {
      updatedList.splice(checked.indexOf(e.target.value), 1);
    }
    setChecked(updatedList);
    // console.log(checked);
    console.log(updatedList);
  };

  //Función para el contenedor de películas
  function MovieList() {
    return (
      <div className="movies">
        <ul className="movies__list">
          {movies.map((item, index) => (
            <li key={index} className="movies__list--item">
              <label className="movies__list--text">
                <input value={item} type="checkbox" onChange={handleCheck} />
                {item}
              </label>
            </li>
          ))}
        </ul>
        <div className="movies__buttons--container">
          <div className="movies__buttons--left">
            <button className="movies__buttons">Apply</button>
          </div>
          <div className="movies__buttons--right">
            <button className="movies__buttons">Reset</button>
            <button className="movies__buttons" onClick={close}>
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }

  const close = () => {
    setToggle(false);
  };

  //Este es el "return" de <MovieFilter />
  return (
    <div className="filters">
      <div className="filters__movie" onClick={handleToggle}>
        <div className="filters__movie--text">MOVIES</div>
        <RiArrowDropDownFill
          className={`filters__movie icon ${toggle && 'filters__movie__icon-open'}`}
        />
      </div>
      {toggle && MovieList()}
    </div>
  );
}

const movies = [
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
  'ETERNALS',
  'GUARDIANS OF THE GALAXY',
  'GUARDIANS OF THE GALAXY VOL. 2',
  'IRON MAN',
  'IRON MAN 2',
  'IRON MAN 3',
  'SHANG-CHI AND THE LEGEND OF THE TEN RINGS',
  'SPIDER-MAN: FAR FROM HOME',
  'SPIDER-MAN: HOMECOMING',
  'SPIDER-MAN: NO WAY HOME',
  'THE AVENGERS',
  'THE INCREDIBLE HULK',
  'THE MARVELS',
  'THOR',
  'THOR: LOVE AND THUNDER',
  'THOR: RAGNAROK',
  'THOR: THE DARK WORLD',
  'UNTITLED DEADPOOL MOVIE',
  'X-MEN: DARK PHOENIX'
];
