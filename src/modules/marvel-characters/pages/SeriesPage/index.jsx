import React from 'react';
import { DefaultPage } from '../../components/InitialPage';

function SeriesPage() {
  const domain='series';
  const id=1011027;
  return(
    <DefaultPage
      domain={domain}
      id={id} 
    />
  )
}
export { SeriesPage };
