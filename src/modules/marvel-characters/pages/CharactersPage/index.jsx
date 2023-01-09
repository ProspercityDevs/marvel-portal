import React from 'react';
import CharactersGrid from '@/modules/marvel-characters/components/CharacterGrid';
import FeaturedCharacters from '../../components/FeaturedCharacteres';
import MovieFilter from 'src/modules/core/components/molecules/MovieFilter';
import { useState } from 'react';
import './styles.scss';
import ModalAuto from 'src/modules/core/components/molecules/ModalAuto/ModalAuto';
import { useEffect } from 'react';

export function CharacterPage() {
  const [search, setSearch] = useState('');
  const [updated, setUpdated] = useState('');
  const [filterEnter, setFilterEnter] = useState(false);

  const [letter, setLetter] = useState('');
  const [modalF, setModalF] = useState(false);
  const [select, setselect] = useState('A-Z');

  const modalFmod = (a) => {
    setModalF(a);
  };
  const letterMod = (a) => {
    setLetter(a);
  };
  const searcher = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };
  const modalAuto = (a) => {
    setSearch(a);
  };


  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setUpdated(search);
      setFilterEnter(true);
    }
  };
  useEffect(() => {
    Peticion();
  }, []);
  function Peticion() {
    if (select=='A-Z') {
    if (modalF == false) {
      if (filterEnter == true) {
        if (updated.length < 1) {
          return <CharactersGrid n={0} />;
        } else {
          return <CharactersGrid n={1} search={search} />;
        }
      } else {
        return <CharactersGrid n={0} search={search} />;
      }
    } else {
      return <CharactersGrid n={2} search={letter} />;
    } 
  } else {
    if (modalF == false) {
      if (filterEnter == true) {
        if (updated.length < 1) {
          return <CharactersGrid n={4} />;
        } else {
          return <CharactersGrid n={5} search={search} />;
        }
      } else {
        return <CharactersGrid n={4} search={search} />;
      }
    } else {
      return <CharactersGrid n={6} search={letter} />;
    } 
 }
}
  function Peticion2() {
    if (search.length >= 3) {
      return <ModalAuto search={search} modalAuto={modalAuto} />;
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
                  onKeyDown={handleKeyDown}
                  id="filter"
                  className="mvl-character-gri-input"
                  type="text"
                  placeholder="search"
                />
                <Peticion2 />
              </div>
              <div className="col">
                <div className="filtros">
                  <MovieFilter letterMod={letterMod} modalFmod={modalFmod} />
                </div>
                <hr className="linea" />
              </div>
            </div>
          </div>
          <div>
          <select className="Sort_selector" value={select} onChange={(e) => setselect(e.target.value)}>
          <option selected>A-Z</option>
          <option>Z-A</option>
         </select>

          </div>
        </div>
        <Peticion />
      </div>
    </div>
  );
}
