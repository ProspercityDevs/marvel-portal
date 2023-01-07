import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { getSeriesForGrid } from '@/modules/marvel-series/services';

import SerieCard from '@/modules/marvel-series/components/SerieCard';
import Paginator from '@/modules/core/components/molecules/Paginator';
import './styles.scss';
import Filter from '@/modules/core/components/molecules/Filter';

const INITIAL_PAGE = 1;
const ITEMS_PER_PAGE = 24;

export default function SerieGridPaginated() {
  const [totalItems, setTotalItems] = useState(0);
  const [series, setSeries] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [queryParams, setQueryParams] = useState({});

  useEffect(() => {
    fetchSeriesAtPage();
  }, []);

  async function fetchSeriesAtPage(page = 1) {
    setLoading(true);
    const data = await getSeriesForGrid(page, ITEMS_PER_PAGE);
    setTotalItems(data.total);
    setSeries(data.results);
    setLoading(false);
    //console.log('Total Series: ', data.total);
  }

  const onPageChange = (newPage) => {
    fetchSeriesAtPage(newPage);
  };

  const onQueryChange = (query) => {
    setQueryParams(query);
  };

  return (
    <>
      <Filter query={queryParams} onQueryChange={onQueryChange} totalItems={totalItems} />
      <div className="mvl-grid mvl-grid-6">
        <SerieGrid
          series={series}
          isLoading={isLoading}
          itemsPerPage={ITEMS_PER_PAGE}
        />
      </div>
      <Paginator
        initialPage={INITIAL_PAGE}
        itemsPerPage={ITEMS_PER_PAGE}
        totalItems={totalItems}
        onPageChange={onPageChange}
      />
    </>
  );
}

SerieGrid.propTypes = {
  series: PropTypes.array.isRequired,
  isLoading: PropTypes.bool,
  itemsPerPage: PropTypes.number
};

function SerieGrid({ series, isLoading, itemsPerPage }) {
  if (isLoading && series.length === 0) {
    return <SerieGridSkeleton amount={itemsPerPage} />;
  }

  if (series.length === 0) {
    return <EmptyState />;
  }

  return series.map(({ name, image }, index) => (
    <SerieCard name={name} image={image} key={index} isSkeleton={isLoading} />
  ));
}

const EmptyState = () => {
  return <h1>No elements found</h1>;
};

const SerieGridSkeleton = ({ amount }) => {
  const items = [...Array(amount).keys()];
  return items.map((value) => <SerieCard key={value} isSkeleton />);
};
