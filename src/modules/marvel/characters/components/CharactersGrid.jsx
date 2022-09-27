import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

import { getAllCharacters, mapCharacterToCard } from '@/modules/marvel/characters/services';

import CharacterCard from '@/modules/marvel/characters/components/CharacterCard';
import Paginator from '@/modules/core/components/molecules/Paginator';
import '@/assets/styles/components/_character-grid.scss';

export default function CharacterGridPaginated() {
  const [totalItems, setTotalItems] = useState(0);
  const [characters, setCharacters] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const initialPage = 1;
  const itemsPerPage = 24;

  useEffect(() => {
    fetchCharactersAtPage();
  }, []);

  async function fetchCharactersAtPage(page = 1) {
    setLoading(true);
    const data = await getAllCharacters(mapCharacterToCard, {
      limit: itemsPerPage,
      offset: getOffset(page, itemsPerPage)
    });
    setTotalItems(data.total);
    setCharacters(data.results);
    setLoading(false);
  }

  function getOffset(page, itemsPerPage) {
    const currentOffset = page - 1;
    return currentOffset * itemsPerPage;
  }

  const onPageChange = useCallback((newPage) => {
    fetchCharactersAtPage(newPage);
  }, []);

  return (
    <>
      <div className="mvl-character-gri-filters">
        <input type="text" placeholder="search" />
      </div>
      <div className="mvl-grid mvl-grid-6">
        <CharacterGrid characters={characters} isLoading={isLoading} itemsPerPage={itemsPerPage} />
      </div>
      <Paginator
        pageCount
        initialPage={initialPage}
        itemsPerPage={itemsPerPage}
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
    <CharacterCard name={name} image={image} key={index} isSkeleton={isLoading} />
  ));
}

const EmptyState = () => {
  return <h1>No elements found</h1>;
};

const CharacterGridSkeleton = ({ amount }) => {
  const items = [...Array(amount).keys()];
  return items.map((value) => <CharacterCard key={value} isSkeleton />);
};
