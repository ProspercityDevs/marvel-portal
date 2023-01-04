import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getSeriesForGrid } from '../../services/series/series.api.js';
import { getItemsName } from '../../services/series/series.api.js';

SeriesGridPaginated.propTypes = {
  domainTitle: PropTypes.string,
}

export function SeriesGridPaginated(domainTitle) {

  const itemsPerPage = 24;
  const [series, setSeries] = useState([]);
  useEffect(() => {
    fetchSeriesAtPage();
  }, []);
  async function fetchSeriesAtPage(page = 1) {
    const domain=domainTitle;
    const data = await getSeriesForGrid(page, itemsPerPage, domain);

    setSeries(data.results);
    
  }
  return series
  };

  ItemsName.propTypes = {
    domain: PropTypes.string,
  }
  export function ItemsName({domain}) {
    const ITEMS_PER_PAGE = 100;
    const [items, setItems] = useState([]);
    useEffect(() => {
      fetchItemsAtPage();
    }, []);
    async function fetchItemsAtPage(page = 1) {
      const data = await getItemsName(page, ITEMS_PER_PAGE, domain);
      setItems(data.results); 
    }
    return items
    };

  
