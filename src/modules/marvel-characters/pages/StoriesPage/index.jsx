import React from 'react';
import  CharacterGridPaginated  from '@/modules/marvel-characters/components/ItemGrid/index';

function StoriesPage() {
  const name={};
  const itemsPerPage = 24;
  const order={};
  return (
    <CharacterGridPaginated domain={`stories`} name={name} order={order} itemsPerPage={itemsPerPage}/>
  );
}
export { StoriesPage };
