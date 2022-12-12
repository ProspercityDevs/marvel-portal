import './styles.scss';
import propTypes from 'prop-types';

Filter.propTypes = {
  totalItems: propTypes.number.isRequired
};

export default function Filter({ totalItems }) {
  return (
    <div className="mvl-character-gri-filters">
      <h5>{totalItems}</h5>
      <span>{totalItems}</span>
      <input className="mvl-character-gri-input" type="text" placeholder="search" />
    </div>
  );
}
