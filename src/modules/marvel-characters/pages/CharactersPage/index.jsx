import React from 'react';
import './styles.scss';
import FeaturedCharacters from '../../components/FeaturedCharacters';
import Filter from '@/modules/core/components/molecules/Filter';
import  CharacterGridPaginated  from '@/modules/marvel-characters/components/CharacterGrid/index';


export function CharacterPage() {
  const name={};
  console.log('characterpage')
  return (
    <div className="mvl-characters-page">
      <header className="mvl-characters-page-header">
        <h1 className="u-no-margin">MARVELS CHARACTERS</h1>
        <p>Get a list of all Marvels characters and villians</p>
      </header>

      <div className="container">
        <h1>FEATURED CHARACTERS</h1>
        <FeaturedCharacters />
      
        <section className="mvl-section-card"></section>
        <h1>MARVEL CHARACTERS LIST</h1>
        <Filter />
          
      </div>
      <CharacterGridPaginated domain={`characters`} name={name}/>
    </div>
  );
}
