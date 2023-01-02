import { useState, useEffect } from 'react';


import { getSeriesForGrid } from '../../services/series/series.api.js';
import { getItemsName } from '../../services/series/series.api.js';



export function SeriesGridPaginated() {
  const ITEMS_PER_PAGE = 24;
  const [series, setSeries] = useState([]);
  useEffect(() => {
    fetchSeriesAtPage();
  }, []);
  async function fetchSeriesAtPage(page = 1) {
    const domain=`series`;
    const data = await getSeriesForGrid(page, ITEMS_PER_PAGE, domain);

    setSeries(data.results);
    
  }
  return series
  };

  export function ItemsName() {
    const ITEMS_PER_PAGE = 100;
    const [items, setItems] = useState([]);
    useEffect(() => {
      fetchItemsAtPage();
    }, []);
    async function fetchItemsAtPage(page = 1) {
      const domain=`characters`;
      const data = await getItemsName(page, ITEMS_PER_PAGE, domain);
      setItems(data.results); 
    }
    return items
    };

  
