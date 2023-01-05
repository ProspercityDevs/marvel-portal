import React from 'react';
import { DefaultPage } from '../../components/InitialPage';

function EventsPage() {
  const domain='events';
  const id=1010733;
  return(
    <DefaultPage
      domain={domain} 
      id={id}
    />
  )
}
export { EventsPage };
