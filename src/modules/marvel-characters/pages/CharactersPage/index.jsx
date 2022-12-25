import React from 'react';
import CharactersGrid from '@/modules/marvel-characters/components/CharacterGrid';
import FeaturedCharacters from '../../components/FeaturedCharacteres';
import MovieFilter from 'src/modules/core/components/molecules/MovieFilter';
import { useState } from 'react';
import './styles.scss';

export function CharacterPage() {
  const [search, setSearch] = useState('');
  // const [updated, setUpdated] = useState('');
  const searcher = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };
  // const handleKeyDown = (event) => {
  //   if (event.key === 'Enter') {
  //     setUpdated(search);
  //   }
  // };
  function Peticion() {
    if (search.length < 1) {
      return <CharactersGrid n={0} search={search} />;
    } else {
      return <CharactersGrid n={1} search={search} />;
    }
  }
  return (
    <div className="mvl-characters-page">
      <header className="mvl-characters-page-header">
        <h1 className="u-no-margin">MARVELS CHARACTERS</h1>
        <p>Get a list of all Marvels characters and villians</p>
      </header>

      <div className="container">
        <section className="mvl-section-card">
          <p>Use this space to add some cards and other content </p>
        </section>
        <h1>FEATURED CHARACTERS</h1>
        <FeaturedCharacters />
        <h1>MARVEL CHARACTERS LIST</h1>
        <div className="mvl-character-gri-filters">
          <div className="container">
            <div className="row">
              <div className="col">
                <input
                  value={search}
                  onChange={searcher}
                  // onKeyDown={handleKeyDown}
                  id="filter"
                  className="mvl-character-gri-input"
                  type="text"
                  placeholder="search"
                />
              </div>
              <div className="col">
                <div className="filtros">
                  <MovieFilter />
                </div>
                <hr className="linea" />
              </div>
            </div>
          </div>
        </div>
        <Peticion />
      </div>
    </div>
  );
}
