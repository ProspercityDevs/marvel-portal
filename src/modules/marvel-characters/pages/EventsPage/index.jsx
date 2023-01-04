import React from 'react';
import  CharacterGridPaginated  from '@/modules/marvel-characters/components/ItemGrid/index';

function EventsPage() {
  const name={};
  const itemsPerPage = 24;
  const order={};
  return (
    <CharacterGridPaginated domain={`events`} name={name} order={order} itemsPerPage={itemsPerPage}/>
  );
}
export { EventsPage };
