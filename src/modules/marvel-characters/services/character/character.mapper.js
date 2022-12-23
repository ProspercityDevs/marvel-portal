import { getCharacterImage } from './character.handler';

export function mapCharacterToCard(character) {
  return {
    name: character.title,
    image: getCharacterImage(character),
    id: character.id,
    description: character.description
  };
}
