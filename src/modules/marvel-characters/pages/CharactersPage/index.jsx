import React from 'react';
import { DefaultPage } from '../../components/InitialPage';

export function CharacterPage() {
  const id=1011299;
  const domain='characters';
  return(
    <DefaultPage
      domain={domain} 
      id={id}
    />
  )
  }
