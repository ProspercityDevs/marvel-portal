import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import { BsSquareFill } from 'react-icons/bs';

function MovieItem() {
  return (
    <>
      <span className="checkbox">
             <BsSquareFill className={`check-icon1 ${MovieItem.checked && 'check-icon-open1'}`} />
      </span>
      <span className="item-text">{MovieItem.name}</span>  
       
    </>       
  );
}

export default MovieItem;
