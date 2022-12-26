import React from 'react';
import CharactersGrid from '@/modules/marvel-characters/components/CharacterGrid';
import FeaturedCharacters from '../../components/FeaturedCharacteres';
import './styles.scss';
import CharacterProm from '@/modules/core/components/molecules/CharacterProm';
import { useState } from 'react';

export function CharactersPage() {
  const [select, setselect] = useState('A-Z');
  function Characteroder() {
    if (select == 'A-Z') {
      return <CharactersGrid n={1} />;
    } else {
      return <CharactersGrid n={2} />;
    }
  }
  return (
    <>
      <div className="mvl-characters-page">
        <header className="mvl-characters-page-header">
          <h1 className="u-no-margin-header">MARVELS CHARACTERS</h1>
          <p className="text-header">
            Get a list of all Marvels characters and villians from the humble house of ideas!
          </p>
        </header>
        <section className="section-grey"></section>
        <div className="container">
          <h1 className="featured-text">FEATURED CHARACTERS</h1>
          <FeaturedCharacters />
          <h1 className="title-character">MARVEL CHARACTERS LIST</h1>
          <div>
            <h3>Ordenar por</h3>
          </div>
          <div>
            <select
              className="Arizona"
              id="lang"
              value={select}
              onChange={(e) => setselect(e.target.value)}>
              <option value="A-Z" tabIndex="0" className="Option-order-active " type="checkbox">
                A-Z
              </option>
              <option value="Z-A" tabIndex="0" className="Option-order" type="checkbox">
                Z-A
              </option>
            </select>
          </div>
        </div>
      </div>

      <Characteroder />
      <CharacterProm />
    </>
  );
}
