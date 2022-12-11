import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import MovieFilter from './MovieFilter';

Filter.propTypes = {
  totalItems: PropTypes.number.isRequired
};

export default function Filter({ totalItems }) {
  return (
    <div>
      <section className="page__component page__component--search page__component--search_bar section__color__ firstComponent">
        <div className="search-bar">
          <div className="typeahead">
            <div className="typeahead">
              <div className="typeahead__icon">
                <span className="icon--svg icon--svg--black-stroke icon--search">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="search-icon">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </span>
              </div>
              <div className="typeahead__container">
                <input className="typeahead__input" type="text" placeholder="search" />
              </div>
            </div>
          </div>
          <MovieFilter />
        </div>
        <div>
          <h5 className="results_totalItems">{totalItems} RESULTS </h5>
        </div>
      </section>
    </div>
  );
}
