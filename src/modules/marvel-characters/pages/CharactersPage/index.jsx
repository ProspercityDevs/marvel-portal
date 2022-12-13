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
        <section className="mvl-section-card">
          <h2> {clock()} </h2>
          {/*<p>Use this space to add some cards and other content </p> */}
        </section>

        <h1>MARVEL CHARACTERS LIST</h1>
        <CharactersGrid />
      </div>
    </div>
  );
}

function clock() {
  const element = (
    <div>
      <h2>The time is: {new Date().toLocaleTimeString()} .</h2>
    </div>
  );
  return element;
}
setInterval(clock, 1000);
