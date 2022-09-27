import React from 'react';
import CharactersGrid from '@/modules/marvel/characters/components/CharactersGrid';
import '@/assets/styles/components/_characters-page-header.scss';

export function CharacterPage() {
  return (
    <div>
      <header className="mvl-characters-page-header">
        <h1 className="u-no-margin">MARVELS CHARACTERS</h1>
        <p>Get a list of all Marvels characters and villians</p>
      </header>
      <div className="container">
        <h1>MARVEL CHARACTERS LIST</h1>
        <CharactersGrid />
      </div>
    </div>
  );
}
