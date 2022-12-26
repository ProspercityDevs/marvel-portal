import React from 'react';
import CharacterGridPaginated  from '@/modules/marvel-characters/components/CharacterGrid';
import './styles.scss';
import FeaturedCharacters from '../../components/FeaturedCharacters';

export function CharacterPage() {
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
        <CharacterGridPaginated />    
      </div>
    </div>
  );
}
