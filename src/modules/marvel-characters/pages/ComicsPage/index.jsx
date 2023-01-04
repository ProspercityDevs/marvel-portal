import React from 'react';
import  CharacterGridPaginated  from '@/modules/marvel-characters/components/ItemGrid/index';

function ComicsPage() {
  const name={};
  const itemsPerPage = 24;
  const order={};
  return (
    <CharacterGridPaginated domain={`comics`} name={name} order={order} itemsPerPage={itemsPerPage}/>
  );
}
export { ComicsPage };
