import React, { useState } from 'react';
import './styles.scss';
import { RiArrowDropDownFill } from 'react-icons/ri';

export default function serieFilter() {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle((prevToggle) => !prevToggle);
  };

  //Función para el contenedor de series
  function serieList() {
    return (
      <div className="series">
        <ul className="series__list">
          {series.map((item, index) => (
            <li key={index} className="series__list--item">
              <label className="series__list--text">{item}</label>
            </li>
          ))}
        </ul>
        <div className="series__buttons--container">
          <div className="series__buttons--right">
            <button className="series__buttons" onClick={close}>
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

  //Este es el "return" de <SeriesFilter />
  return (
    <div className="filters">
      <div className="filters__serie" onClick={handleToggle}>
        <div className="filters__serie--text">SERIES</div>
        <RiArrowDropDownFill
          className={`filters__serie icon ${toggle && 'filters__serie__icon-open'}`}
        />
      </div>
      {toggle && serieList()}
    </div>
  );
}

const series = [];
