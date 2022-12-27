import React from 'react';
import  CharacterGridPaginated  from '@/modules/marvel-characters/components/CharacterGrid/index';
import './styles.scss';
import FeaturedCharacters from '../../components/FeaturedCharacters';
import Filter from '@/modules/core/components/molecules/Filter';
// import Paginator from '@/modules/core/components/molecules/Paginator';

export function CharacterPage() {
  // const [queryParams, setQueryParams] = useState({});
  // const INITIAL_PAGE = 1;
  // const ITEMS_PER_PAGE = 24;
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
        <Filter />
          
      </div>
      <div >
      <CharacterGridPaginated domain={"characters"}/> 
      </div>
      {/* <Paginator
        initialPage={INITIAL_PAGE}
        itemsPerPage={ITEMS_PER_PAGE}
        totalItems={totalItems}
        onPageChange={onPageChange}
      /> */}
    </div>
  );
}
