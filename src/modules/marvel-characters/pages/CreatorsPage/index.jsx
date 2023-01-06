import React from 'react';
import { DefaultPage } from '../../components/InitialPage';

function CreatorsPage() {
  const domain='creators';
  const id=1009268;
  return(
    <DefaultPage
      domain={domain}
      id={id} 
    />
  )
}

export { CreatorsPage };
