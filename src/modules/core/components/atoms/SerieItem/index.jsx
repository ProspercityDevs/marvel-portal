import React from 'react';
import './styles.scss'

SerieItem.propTypes = {
  name: PropTypes.string,
  isSkeleton: PropTypes.bool
};

export default function SerieItem({ name, isSkeleton }) {
  return (
    <li key={index} className="series__list--item">
              <label className="series__list--text">
                <input value={item} type="checkbox" onChange={handleCheck} />
                {item}
              </label>
    </li>  );
}
