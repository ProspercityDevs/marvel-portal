import SearchBar from '../../atoms/SearchBar';
import TotalResults from '../../atoms/TotalResults';
import PropTypes from 'prop-types';
import SerieFilter from '../MovieFilter';

Filter.propTypes = {
  totalItems: PropTypes.number.isRequired
};

function Filter({ totalItems }) {
  return (
    <div className="mvl-character-gri-filters">
      <div className="filter_search">
        <SearchBar />
      </div>
      <SerieFilter />
      <TotalResults totalItems={totalItems} />
    </div>
  );
}
export default Filter;
