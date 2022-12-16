import './styles.scss';
import MovieFilter from '../MovieFilter';
import propTypes from 'prop-types';

Filter.propTypes = {
  totalItems: propTypes.number.isRequired
};

export default function Filter({ totalItems }) {
  return (
    <div className="mvl-character-gri-filters">
      <div className="col">
        <div className="contenerdor_1">
          <input className="mvl-character-gri-input" type="text" placeholder="search" />
        </div>
      </div>

      <div className="col">
        <div className="contenerdor_2">
          <MovieFilter />
        </div>
      </div>

      <div className="col">
        <div className="contenedor_totalitems">
          <h5>Number of characters: {totalItems}</h5>
        </div>
      </div>
    </div>
  );
}
