import { getCharacterById } from '@/modules/core/services/rick-morty.api-rest.js';
import { useEffect, useState } from 'react';

export function CharactersPage() {
  const [character, setCharacter] = useState({
    name: 'loading...',
    image: 'NaN'
  });

  useEffect(() => {
    updateCharacter(1);
  }, []);

  function handleClick(event) {
    if (event.key === 'Enter') {
      updateCharacter(event.target.value);
    }
  }

  async function updateCharacter(characterId) {
    const character = await getCharacterById(characterId);
    setCharacter(character);
  }

  return (
    <>
      <input type="text" onKeyDown={handleClick} />
      <h1>Characters</h1>
      <div>
        <strong>{character.name}</strong>
      </div>
      <img src={character.image} />
    </>
  );
}
