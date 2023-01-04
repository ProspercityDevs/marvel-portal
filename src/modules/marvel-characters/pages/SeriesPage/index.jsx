import React from 'react';
import  CharacterGridPaginated  from '@/modules/marvel-characters/components/ItemGrid/index';

function SeriesPage() {
  const name={};
  const itemsPerPage = 24;
  const order={};
  return (
    <CharacterGridPaginated domain={`series`} name={name} order={order} itemsPerPage={itemsPerPage}/>
  );
}
export { SeriesPage };
