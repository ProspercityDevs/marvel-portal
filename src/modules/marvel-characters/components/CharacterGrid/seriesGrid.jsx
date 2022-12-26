import { useState, useEffect } from 'react';


import { getSeriesForGrid } from '../../services/series/series.api.js';

const ITEMS_PER_PAGE = 24;

export function SeriesGridPaginated() {
  const [series, setSeries] = useState([]);
  useEffect(() => {
    fetchSeriesAtPage();
  }, []);
  async function fetchSeriesAtPage(page = 1) {
    const domain=`series`
    
    const data = await getSeriesForGrid(page, ITEMS_PER_PAGE, domain);

    setSeries(data.results);
    
  }
  console.log( series);
  return series
  };

  
