/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { getSeriesForList } from 'src/modules/marvel-series/services/serie.api-rest';
import SerieItem from '../../atoms/SerieItem';

const INITIAL_PAGE = 1;
const ITEMS_PER_PAGE = 24;

export default function SeriesListPaginated() {
  const [totalItems, setTotalItems] = useState(0);
  const [series, setSeries] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [queryParams, setQueryParams] = useState({});

  useEffect(() => {
    fetchSeriesAtPage();
  }, []);

  async function fetchSeriesAtPage(page = 1) {
    setLoading(true);
    const data = await getSeriesForList(page, ITEMS_PER_PAGE);
    setTotalItems(data.total);
    setSeries(data.results);
    setLoading(false);
    console.log('Total Series: ', data.total);
  }

  // const onPageChange = (newPage) => {
  //   fetchSeriesAtPage(newPage);
  // };

  const onQueryChange = (query) => {
    setQueryParams(query);
  };

  return (
    <>
      <div className="series_list">
        <SerieList series={series} isLoading={isLoading} itemsPerPage={ITEMS_PER_PAGE} />
      </div>
      {/* <Paginator
        initialPage={INITIAL_PAGE}
        itemsPerPage={ITEMS_PER_PAGE}
        totalItems={totalItems}
        onPageChange={onPageChange}
      /> */}
    </>
  );
}

SerieList.propTypes = {
  series: PropTypes.array.isRequired,
  isLoading: PropTypes.bool,
  itemsPerPage: PropTypes.number
};

function SerieList({ series, isLoading, itemsPerPage }) {
  if (isLoading && series.length === 0) {
    return <SerieListSkeleton amount={itemsPerPage} />;
  }

  if (series.length === 0) {
    return <EmptyState />;
  }

  return series.map(({ title }, index) => (
    <SerieItem title={title} key={index} isSkeleton={isLoading} />
  ));
}

const EmptyState = () => {
  return <h1>No elements found</h1>;
};

const SerieListSkeleton = ({ amount }) => {
  const items = [...Array(amount).keys()];
  return items.map((value) => <SerieItem key={value} isSkeleton />);
};
