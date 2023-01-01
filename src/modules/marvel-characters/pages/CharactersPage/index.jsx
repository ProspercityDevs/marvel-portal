import React from 'react';
import { useState } from 'react';
import CharactersGrid from '@/modules/marvel-characters/components/CharacterGrid';
import FeaturedCharacters from '../../components/FeaturedCharacteres';
import './styles.scss';
import CharacterProm from '@/modules/core/components/molecules/CharacterProm';
//import CharactersList from '../../components/CharactersList';
//import SeriesList from 'src/modules/core/components/molecules/SeriesList';
//import SerieFilter from 'src/modules/core/components/molecules/SerieFilter';
import SearchBar from 'src/modules/core/components/atoms/SearchBar';

export function CharactersPage() {

  const [searchValue, setSearchValue] = useState('');

  // let searchedCharacters=[];

  // if(!searchValue.length>=3){

  // }else{

  // }

  return (
    <>
      <div className="mvl-characters-page">
        <div className="container">
          <header className="mvl-characters-page-header">
            <h1 className="u-no-margin">MARVELS CHARACTERS</h1>
            <p>Get a list of all Marvels characters and villians</p>
          </header>
          <div className="container-characters">
            <section className="mvl-section-card"></section>
            <h1 className="u-no-margin">FEATURED CHARACTERS</h1>
            <FeaturedCharacters />
            <h1 className="u-no-margin">MARVEL CHARACTERS LIST</h1>
            <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
            <CharactersGrid searchValue={searchValue} />
          </div>              
        </div>
      </div>
      <CharacterProm />
    </>
  );
}
