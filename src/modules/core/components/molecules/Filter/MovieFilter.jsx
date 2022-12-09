import React, { useState } from 'react';
import './styles.scss';
import { RiArrowDropDownFill } from 'react-icons/ri';
import MovieList from './MovieList';

export default function MavieFilter() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="filters">
      <div className="filters__movie" onClick={handleToggle}>
        <div className="filters__movie--text">MOVIE</div>
        <RiArrowDropDownFill className="filters__movie icon" />
      </div>
      {toggle && <MovieList />}
    </div>
  );
}
