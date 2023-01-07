import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getCharactersForGrid } from '@/modules/marvel-characters/services';
import { getInverseCharactersForGrid } from '@/modules/marvel-characters/services';
import CharacterCard from '@/modules/marvel-characters/components/CharacterCard';
import Paginator from '@/modules/core/components/molecules/Paginator';
import './styles.scss';
import TotalResults from 'src/modules/core/components/atoms/TotalResults';
import MovieFilter from 'src/modules/core/components/molecules/MovieFilter';
import SerieFilter from 'src/modules/core/components/molecules/SerieFilter';

const INITIAL_PAGE = 1;
const ITEMS_PER_PAGE = 24;

const currentDate = new Date().toDateString();
// const alias = (name) => {
//   const aliasName= [...name];
//   alias.name.split('(');
//   };

CharacterGridPaginated.propTypes = {
  // searchValue: PropTypes.string,
  option: PropTypes.number
};

export default function CharacterGridPaginated({ 
  // searchValue, 
  option
}) {
  const [totalItems, setTotalItems] = useState(0);
  const [characters, setCharacters] = useState([]);
  const [isLoading, setLoading] = useState(false);
  // const [queryParams, setQueryParams] = useState({});

  // const nameStartsWith = {
  //    search: searchValue
  // };



  const order = {
     orderBy: '-name'
  };

 

  
  useEffect(() => {
    fetchCharactersAtPage();
  }, []);

  // async function fetchCharactersAtPage(page = 1) {
    
  //   setLoading(true);
  //     const data = await getCharactersForGrid(page, ITEMS_PER_PAGE);
  //     setTotalItems(data.total);
  //     setCharacters(data.results);
  //     setLoading(false);
    
  // }

  async function fetchCharactersAtPage(page = 1 ) {

     if (option == 1){
       setLoading(true);
       const data = await getCharactersForGrid(page, ITEMS_PER_PAGE);
       setTotalItems(data.total);
       setCharacters(data.results);
       setLoading(false);
     } 
  
     if(option == 2){
       setLoading(true);
       const data = await getInverseCharactersForGrid(page, ITEMS_PER_PAGE, order);
       setTotalItems(data.total);
       setCharacters(data.results);
       setLoading(false);
     }
   }

  const onPageChange = (newPage) => {
    fetchCharactersAtPage(newPage);
  };

  // const onQueryChange = (query) => {
  //   setQueryParams(query);
  // };

  return (
    <>
      <TotalResults totalItems={totalItems} />
      {/* <Filter query={queryParams} onQueryChange={onQueryChange} /> */}
      <MovieFilter />
      <SerieFilter />
      <div className="mvl-grid mvl-grid-6">
        <CharacterGrid
          characters={characters}
          isLoading={isLoading}
          itemsPerPage={ITEMS_PER_PAGE}
          order= {order}
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

CharacterGrid.propTypes = {
  characters: PropTypes.array.isRequired,
  isLoading: PropTypes.bool,
  itemsPerPage: PropTypes.number
};

function CharacterGrid({ characters, isLoading, itemsPerPage }) {
  if (isLoading && characters.length === 0) {
    return <CharacterGridSkeleton amount={itemsPerPage} />;
  }

  if (characters.length === 0) {
    return <EmptyState />;
  }

  return characters.map(({ name, image }, index) => (
    <CharacterCard
      name={name}
      image={image}
      key={index}
      currentDate={currentDate}
      // alias={alias}
      isSkeleton={isLoading}
    />
  ));
}

const EmptyState = () => {
  return <h1>No elements found</h1>;
};

const CharacterGridSkeleton = ({ amount }) => {
  const items = [...Array(amount).keys()];
  return items.map((value) => <CharacterCard key={value} currentDate={currentDate} isSkeleton />);
};
