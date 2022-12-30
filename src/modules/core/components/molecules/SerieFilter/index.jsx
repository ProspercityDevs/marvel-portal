import React, { useState } from 'react';
import './styles.scss';
import { RiArrowDropDownFill } from 'react-icons/ri';
import SeriesListPaginated from '../SeriesList';

export default function SerieFilter() {
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

  //Función para el contenedor de series
  function SeriesList() {
    return (
      <SeriesListPaginated />
    )
  }

  const close = () => {
    setToggle(false);
  };

  //Este es el "return" de <MovieFilter />
  return (
    <div className="filters">
      <div className="filters__serie" onClick={handleToggle}>
        <div className="filters__serie--text">SERIES</div>
        <RiArrowDropDownFill
          className={`filters__serie icon ${toggle && 'filters__serie__icon-open'}`}
        />
      </div>
      {toggle && SeriesList()}
    </div>
  );
}
