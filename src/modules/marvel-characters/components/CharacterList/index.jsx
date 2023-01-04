import { useState, useEffect } from 'react';
import { getCharactersForGrid } from '@/modules/marvel-characters/services';
import './styles.scss';

export function CharacterList() {
  const [characters, setCharacters] = useState([]);

  const nameStarts = {};

  const ITEMS_PER_PAGE = 100;

  useEffect(() => {
    fetchCharactersAtPage();
  }, []); // para que no se ejecute continuamente,

  async function fetchCharactersAtPage(page = 1) {
    const data = await getCharactersForGrid(page, ITEMS_PER_PAGE, nameStarts);
    setCharacters(data.results);
  }
  console.log('characterName');
  console.log(characters);
  return characters;
}
