import { getCharacterImage } from './character.handler';

export function mapCharacterToCard(character) {
  return {
    name: character.title,// estado inicial es : character.name 
    image: getCharacterImage(character),
    id: character.id
  };
}
