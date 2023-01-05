import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getCharactersForGrid } from '../../services/character/character.api-rest.js';

  ItemsName.propTypes = {
    domain: PropTypes.string,
  }
  export function ItemsName({domain}) {
    const itemsPerPage = 24;
    const name="";
    const order="";
    console.log(domain)
    const [items, setItems] = useState([]);
    useEffect(() => {
      fetchItemsAtPage();
    }, []);
    async function fetchItemsAtPage(page = 1) {
      const data = await getCharactersForGrid(page, order, domain, name, itemsPerPage);
      setItems(data.results); 
    }
    return items
    };

  
