import { getAll } from '@/modules/core/services/marvel.api-rest.js';
import { defaultMapper } from './mapper';

const domain = `comics`;

export async function getComicsList(itemsPerPage, { mappedBy = defaultMapper, queryParams = {} }) {
  return getAll(domain, {
    mappedBy,
    itemsPerPage,
    ...queryParams
  });
}
export function getComics(itemsPerPage) {
  return getComicsList(itemsPerPage, {
    mappedBy: mapComicToCard
  });
}

/* traer la imagen de la api */
export function getComicImage(comic) {
  if (!comic.thumbnail) {
    return null;
  }
  const { path, extension } = comic.thumbnail;
  return `${path}.${extension}`;
}
/* trae las propiedades del comic desde la api */
export function mapComicToCard(comic) {
  return {
    title: comic.title,
    image: getComicImage(comic),
    id: comic.id
  };
}