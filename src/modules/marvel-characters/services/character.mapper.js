import { getCharacterImage } from './character.handler';

export function mapCharacterToCard(character) {
  return {
    name: character.name,
    image: getCharacterImage(character),
    id: character.id
  };
}

// Se agrega función para retornar la lísta de personajes
export function mapCharacterToList(character) {
  return {
    name: character.name,
    id: character.id
  };
};

