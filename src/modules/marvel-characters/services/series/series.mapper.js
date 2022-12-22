import { getCharacterImage } from './series.handler';

export function mapCharacterToCard(character) {
  return {
    name: character.name,
    image: getCharacterImage(character),
    id: character.id
  };
}
