import { getComicImage } from './comic.handler';

export function mapComicToCard(comic) {
  return {
    title: comic.title,
    image: getComicImage(comic),
    id: comic.id
  };
}

// Se agrega función para retornar la lísta de personajes
export function mapComicToList(comic) {
  return {
    title: comic.title,
    id: comic.id
  };
};

