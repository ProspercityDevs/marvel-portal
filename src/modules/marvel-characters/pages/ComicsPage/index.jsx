import React from 'react';
import { DefaultPage } from '../../components/InitialPage';
function ComicsPage() {
  const domain='comics';
  // const name={};
  // const itemsPerPage = 24;
  // const order={};
  // return (
  //   <CharacterGridPaginated domain={`comics`} name={name} order={order} itemsPerPage={itemsPerPage}/>
  // );
  return(
    <DefaultPage
      domain={domain} 
    />
  )
}
export { ComicsPage };
