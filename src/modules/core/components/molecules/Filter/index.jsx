import './styles.scss';
import MovieFilter from '../MovieFilter';
import propTypes from 'prop-types';

Filter.propTypes = {
  totalItems: propTypes.number.isRequired
};

export default function Filter({ totalItems }) {
  return (
    <div className="mvl-character-gri-filters">
      <input className="mvl-character-gri-input" type="text" placeholder="search" />
    </div>
  );
}
