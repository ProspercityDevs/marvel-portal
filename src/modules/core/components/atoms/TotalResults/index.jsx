import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

TotalResults.propTypes = {
  totalItems: PropTypes.number.isRequired
};

function TotalResults({ totalItems }) {
  return (
    <div>
      <h5 className="results_totalItems">{totalItems} RESULTS</h5>
    </div>
  );
}

export default TotalResults;
