import React from 'react';
import MovieItem from '../../atoms/MovieItem';
import './styles.scss';
import PropTypes from 'prop-types';

MoviesList.propTypes = {
  checked: PropTypes.bool,
  name: PropTypes.string
};

function MoviesList({ checked, name }) {
  return (
    <>
      <MovieItem checked={checked} MovieName={name} />
    </>
  );
}

export default MoviesList;
