import React from 'react';
import CharactersGrid from '@/modules/marvel-characters/components/CharacterGrid';
import './styles.scss';

export function CharacterPage() {
  return (
    <div className="mvl-characters-page">
      <header className="mvl-characters-page-header">
        <h1 className="u-no-margin">MARVELS CHARACTERS</h1>
        <p>Get a list of all Marvels characters and villians</p>
      </header>

      <div className="container">
<<<<<<< HEAD
        <section className="mvl-section-card"></section>
        <h1 className="title-List">MARVEL CHARACTERS LIST</h1>
=======
        <section className="mvl-section-card">
          {/* <p>Use this space to add some cards and other content </p> */}
        </section>

        <h1>MARVEL CHARACTERS LIST</h1>
>>>>>>> develop
        <CharactersGrid />
      </div>
    </div>
  );
}
