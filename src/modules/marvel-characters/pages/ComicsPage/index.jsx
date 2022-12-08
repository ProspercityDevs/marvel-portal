import React from 'react';
//import CharactersGrid from '@/modules/marvel-characters/components/CharacterGrid';
import './styles.scss';

export function ComicsPage() {
  return (
    <div className="mvl-comics-page">
      <header className="mvl-comics-page-header">
        <h1 className="u-no-margin">MARVELS COMICS</h1>
        <p>Get a list of all Marvels characters and villians</p>
      </header>

      <div className="container">
        <section className="mvl-section-card"></section>

        <h1>MARVEL COMICS LIST</h1>
        <ComicsGrid />
      </div>
    </div>
  );
}
