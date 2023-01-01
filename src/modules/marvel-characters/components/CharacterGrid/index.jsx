import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { getCharactersForGrid } from '@/modules/marvel-characters/services/character';

import CharacterCard from '@/modules/marvel-characters/components/CharacterCard';
import Paginator from '@/modules/core/components/molecules/Paginator';
import './styles.scss';



const INITIAL_PAGE = 1;
const ITEMS_PER_PAGE = 24;

CharacterGridPaginated.propTypes = {
  domain: PropTypes.string
}
export default function CharacterGridPaginated({domain}) {

  const [totalItems, setTotalItems] = useState(0);
  const [characters, setCharacters] = useState([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    fetchCharactersAtPage();
  }, []);
  

  async function fetchCharactersAtPage(page = INITIAL_PAGE) {
    const data = await getCharactersForGrid(page,ITEMS_PER_PAGE, domain);
    setTotalItems(data.total);
    setCharacters(data.results);
    setLoading(false);
  }
  const onPageChange = (newPage) => {
    fetchCharactersAtPage(newPage);
  };
  if(isLoading){
    return <EmptyState2 />;
  };

  return (
    <>
      <div id="container-grid">
        <div className="mvl-grid mvl-grid-6" >
          <CharacterGrid
            characters={characters}
            isLoading={isLoading} 
          />
        </div>
        <Paginator
          initialPage={INITIAL_PAGE}
          pageSize={ITEMS_PER_PAGE}
          totalItems={totalItems}
          onPageChange={onPageChange}
        />
      </div>
    </>
  );
}


CharacterGrid.propTypes = {
  characters: PropTypes.array.isRequired,
  isLoading: PropTypes.bool,
  itemsPerPage: PropTypes.number,
};

function CharacterGrid({ characters, isLoading}) {
  if (!isLoading && characters.length === 0) {
    return <EmptyState />;
  };

  return characters.map(({ name, image, description}, index) => (
    <CharacterCard name={name} image={image} description={description} key={index} isSkeleton={isLoading} />
  ));
}

const EmptyState = () => {
  return <h1>No elements found</h1>;
};
const EmptyState2 = () => {
  return <h1>Loading...</h1>;
};
