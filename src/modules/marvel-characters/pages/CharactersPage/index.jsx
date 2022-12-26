import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import CharactersGrid from '@/modules/marvel-characters/components/CharacterGrid';
import './styles.scss';
import FeaturedCharacters from '../../components/FeaturedCharacters';
import ButtonArrow from 'src/modules/core/components/atoms/ButtonArrow';


export function CharacterPage() {
    const [text, setText] = useState("");

    function Peticion(){
      if (text.length < 3) {
        return(<CharactersGrid n={1} busqueda={text}/>)
      } else {
        return(<CharactersGrid n={2} busqueda={text}/>)
      }
    }

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
        <div className="mvl-character-gri-filters">
          <input className="mvl-container-search-left" type={text} placeholder="SEARCH" onChange={e => setText(e.target.value)}/>
          <FontAwesomeIcon icon={faMagnifyingGlass} className="search-container__icon" />

          <div className="container-checked-two" >
            <ButtonArrow/>
          </div>
        </div>
        <Peticion />
      </div>
    </div>
  );
}
