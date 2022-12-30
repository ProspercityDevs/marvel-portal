import SearchBar from '../../atoms/SearchBar';
import TotalResults from '../../atoms/TotalResults';
import PropTypes from 'prop-types';
import SerieFilter from '../SerieFilter';
import MovieFilter from '../MovieFilter';
// import SortBySelector from '../../atoms/SortBySelector';

Filter.propTypes = {
  totalItems: PropTypes.number.isRequired
};

function Filter({ totalItems }) {
  return (
    <div className="mvl-character-gri-filters">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="container_search">
              <SearchBar />
            </div>
            <div className="col">
              <div className="container_filters">
                <MovieFilter />
                <SerieFilter />
              </div>
            </div>
          </div>
        </div>
        <div className="row_align-items_center">
          <div className="col">
            <TotalResults totalItems={totalItems} />
          </div>
          <div className="col">
            <div className="container_sort">
              <h6>SORT BY</h6>
              {/* <SortBySelector /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Filter;
