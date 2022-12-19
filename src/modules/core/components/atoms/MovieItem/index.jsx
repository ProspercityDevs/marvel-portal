import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import { BsSquareFill } from 'react-icons/bs';

MovieItem.propTypes = {
  checked: PropTypes.bool,
  name: PropTypes.string
}

function MovieItem( {checked, name} ) {
   return (
     <>
        <span className="checkbox">
          <BsSquareFill className={`check-icon1 ${checked && 'check-icon-open1'}`} />
        </span>
        <span className="item-text">
          {name}
        </span>
      </>
   );
}

export default MovieItem;
