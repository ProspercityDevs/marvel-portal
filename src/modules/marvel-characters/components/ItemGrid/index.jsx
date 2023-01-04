import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getCharactersForGrid } from '@/modules/marvel-characters/services/character';
import {CharacterCard} from '@/modules/marvel-characters/components/CharacterCard';
import Paginator from '@/modules/core/components/molecules/Paginator';
import './styles.scss';

const INITIAL_PAGE = 1;


CharacterGridPaginated.propTypes = {
  domain: PropTypes.string,
  name: PropTypes.any,
  itemsPerPage: PropTypes.number,
  order: PropTypes.any
}
export default function CharacterGridPaginated({itemsPerPage,domain,name, order}) {
  const [totalItems, setTotalItems] = useState(0);
  const [characters, setCharacters] = useState([]);
  const [isLoading, setLoading] = useState(true);
  console.log(itemsPerPage)
  useEffect(() => {
    fetchCharactersAtPage();
  },[]);
  
  
  async function fetchCharactersAtPage(page = INITIAL_PAGE) {
      const data = await getCharactersForGrid(page, order, domain, name,itemsPerPage);
      setTotalItems(data.total);
      setCharacters(data.results);
      setLoading(false);
      console.log('data.results');
      console.log(data.results);


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
            domain={domain}
            // text={name} 
          />
        </div>
        <Paginator
          initialPage={INITIAL_PAGE}
          pageSize={itemsPerPage}
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
  domain: PropTypes.any
  // text:PropTypes.string
};

function CharacterGrid({ characters, isLoading, domain}) {
  if (!isLoading && characters.length === 0) {
    return <EmptyState />;
  
  } else if(domain=='series' || domain=='events' || domain=='comics' || domain=='stories'){
    return characters.map(({ title, image, description}, index) => (
      <CharacterCard name={title} image={image} description={description} key={index} isSkeleton={isLoading} />
    ))
  } else if(domain=='creators'){
    return characters.map(({ fullName, image, description}, index) => (
      <CharacterCard name={fullName} image={image} description={description} key={index} isSkeleton={isLoading} />
    ))
  }
  return characters.map(({ name, image, description}, index) => (
    <CharacterCard name={name} image={image} description={description} key={index} isSkeleton={isLoading} domain={domain}/>
  ));
}

const EmptyState = () => {
  return <h1>No elements found</h1>;
};
const EmptyState2 = () => {
  return <h1>Loading...</h1>;
};
