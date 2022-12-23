import { getCharacterImage } from './character.handler';

export function mapSerieToItem(serie) {
  return {
    name: serie.title,
    image: getCharacterImage(character),
    id: serie.id
  };
}
