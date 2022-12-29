import './styles.scss';
import propTypes from 'prop-types';

Filter.propTypes = {
  totalItems: propTypes.number.isRequired
};

export default function Filter({ totalItems }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="contenedor_totalitems">
            <h4 className="total">{totalItems} RESULTS</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
