import './styles.scss';
import MovieFilter from '../MovieFilter';
import propTypes from 'prop-types';

Filter.propTypes = {
  totalItems: propTypes.number.isRequired
};

export default function Filter({ totalItems }) {
  return (
    <div className="mvl-character-gri-filters">
      <div className="container">
        <div className="row">
          <div className="col">
            <input className="mvl-character-gri-input" type="text" placeholder="search" />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="contenedor_totalitems">
              <h4 className="total">{totalItems} RESULTS</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col">
            <div className="filtros">
              <MovieFilter />
            </div>
            <hr className="linea" />
          </div>
        </div>
      </div>
    </div>
  );
}
