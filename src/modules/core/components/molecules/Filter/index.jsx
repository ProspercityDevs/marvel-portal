import PropTypes from 'prop-types';
import { RiSearch2Line } from 'react-icons/ri';
import MovieFilter from './MovieFilter';

Filter.propTypes = {
  totalItems: PropTypes.number.isRequired
};

function Filter({ totalItems }) {
  return (
    <div className="mvl-character-gri-filters">
      <div>
        <RiSearch2Line />
        <input
          type="search"
          placeholder="SEARCH"
          className="input-nav"
          value=""
          autoComplete="off"
          aria-autocomplete="list"
          aria-controls="reac-autowhatever-1"
          readOnly
        />
      </div>
      <MovieFilter />
      <div>
        <h5 className="results_totalItems">{totalItems} RESULTS</h5>
      </div>
    </div>
  );
}
export default Filter;
