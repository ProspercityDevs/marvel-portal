import React from 'react';
import './styles.scss';
import {FeaturedGrid} from '../../components/FeaturedGrid';
import Filter from '@/modules/core/components/molecules/Filter';
import  CharacterGridPaginated  from '@/modules/marvel-characters/components/ItemGrid/index';


export function CharacterPage() {
  const name={};
  const itemsPerPage = 24;
  const order={
    orderBy: "name"
  }
  console.log('characterpage')
  return (
    <div className="mvl-characters-page">
      <header className="mvl-characters-page-header">
        <h1 className="u-no-margin">MARVELS CHARACTERS</h1>
        <p>Get a list of all Marvels characters and villians</p>
      </header>

      <div className="container">
        <FeaturedGrid />
        <section className="mvl-section-card"></section>
        <h1>MARVEL CHARACTERS LIST</h1>
        <Filter />
          
      </div>
      <CharacterGridPaginated domain={`characters`} name={name} order={order} itemsPerPage={itemsPerPage}/>
    </div>
  );
}
