import React, { useState } from 'react';
import './styles.scss';
import { RiArrowDropDownFill } from 'react-icons/ri';
import SeriesListPaginated from '../SeriesList';

export default function SerieFilter() {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle((prevToggle) => !prevToggle);
  };

  //Función para el contenedor de series
  function SeriesList() {
    return <SeriesListPaginated />;
  }

  //Este es el "return" de <SerieFilter />
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
