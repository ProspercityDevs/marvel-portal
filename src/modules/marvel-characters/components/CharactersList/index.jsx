import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getCharactersForList } from '@/modules/marvel-characters/services';
import CharacterItem from '../../../core/components/atoms/CharacterItem';
// import Paginator from '@/modules/core/components/molecules/Paginator';
import './styles.scss';


const INITIAL_PAGE = 1;
const ITEMS_PER_PAGE = 24;

export default function CharacterListPaginated() {
  const [totalItems, setTotalItems] = useState(0);
  const [characters, setCharacters] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [queryParams, setQueryParams] = useState({});

  useEffect(() => {
    fetchCharactersAtPage();
  }, []);

  async function fetchCharactersAtPage(page = 1) {
    setLoading(true);
    const data = await getCharactersForList(page, ITEMS_PER_PAGE);
    setTotalItems(data.total);
    setCharacters(data.results);
    setLoading(false);
    //console.log('Total Personajes: ', data.total);
  }

//   const onPageChange = (newPage) => {
//     fetchCharactersAtPage(newPage);
//   };

  const onQueryChange = (query) => {
    setQueryParams(query);
  };

  return (
    <>      
      <div className="mvl-grid mvl-grid-6">
        <CharacterList
          characters={characters}
          isLoading={isLoading}
          itemsPerPage={ITEMS_PER_PAGE}
        />
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

CharacterList.propTypes = {
  characters: PropTypes.array.isRequired,
  isLoading: PropTypes.bool,
  itemsPerPage: PropTypes.number
};

function CharacterList({ characters, isLoading, itemsPerPage }) {
  if (isLoading && characters.length === 0) {
    return <CharacterListSkeleton amount={itemsPerPage} />;
  }

  if (characters.length === 0) {
    return <EmptyState />;
  }

  return characters.map(({ name }, index) => (
    <CharacterItem name={name} key={index} isSkeleton={isLoading} />
  ));
}

const EmptyState = () => {
  return <h1>No elements found</h1>;
};

const CharacterListSkeleton = ({ amount }) => {
  const items = [...Array(amount).keys()];
  return items.map((value) => <CharacterItem key={value} isSkeleton />);
};
