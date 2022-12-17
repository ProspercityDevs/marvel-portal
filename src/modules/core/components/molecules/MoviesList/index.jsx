import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

MovieList.propTypes = {
    name: PropTypes.string,
    checked: PropTypes.bool
};

function MovieList( ){
    console.log('MovieList');
}

export default MovieList;
