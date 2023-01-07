import { getAllPaginated } from '@/modules/core/services/marvel.api-rest';
import { defaultMapper } from '@/modules/core/services';
import { mapComicToCard } from '@/modules/marvel-comics/services';
import { mapComicToList } from './comic.mapper';

const domain = `comics`;

export async function getComicsAtPage(
  page,
  itemsPerPage,
  { mappedBy = defaultMapper, queryParams = {} }
) {
  return getAllPaginated(domain, page, {
    mappedBy,
    itemsPerPage,
    ...queryParams
  });
}

export function getComicsForGrid(page, itemsPerPage) {
  return getComicsAtPage(page, itemsPerPage, {
    mappedBy: mapComicToCard
  });
}

export function getComicsForList(page, itemsPerPage) {
  return getComicsAtPage(page, itemsPerPage, {
    mappedBy: mapComicToList
  });
}
