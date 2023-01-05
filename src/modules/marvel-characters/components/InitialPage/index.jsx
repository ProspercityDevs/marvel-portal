import React from 'react';
import './styles.scss';
import {FeaturedGrid} from '../FeaturedGrid';
import Filter from '@/modules/core/components/molecules/Filter';
import PropTypes from 'prop-types';
import  CharacterGridPaginated  from '@/modules/marvel-characters/components/ItemGrid/index';

DefaultPage.propTypes = {
  domain: PropTypes.string,
  id: PropTypes.number
}
export function DefaultPage({domain,id}) {
  const name={};
  const itemsPerPage = 24;
  const order="";

  return (
    <div className="mvl-items-page">
      <header className="mvl-items-page-header">
        <h1 className="u-no-margin">MARVELS CHARACTERS</h1>
        <p>Get a list of all Marvels characters and villians</p>
      </header>

      <div className="container">
        <FeaturedGrid id={id}/>
        <h1>MARVEL  {domain} list</h1>
        <Filter /> 
      </div>
      
      <CharacterGridPaginated domain={domain} name={name} order={order} itemsPerPage={itemsPerPage}/>
    </div>
  );
}
