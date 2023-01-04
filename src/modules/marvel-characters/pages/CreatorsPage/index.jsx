import React from 'react';
import  CharacterGridPaginated  from '@/modules/marvel-characters/components/ItemGrid/index';

function CreatorsPage() {
  const name={};
  const itemsPerPage = 24;
  const order={};
  return (
    <CharacterGridPaginated domain={`creators`} name={name} order={order} itemsPerPage={itemsPerPage}/>
  );
}

export { CreatorsPage };
