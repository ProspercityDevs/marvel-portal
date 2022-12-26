import { getAllPaginated } from '@/modules/core/services/marvel.api-rest';
import { defaultMapper } from '@/modules/core/services';
import { mapCharacterToCard } from '@/modules/marvel-characters/services';
import { mapCharacterToList } from './character.mapper';

const domain = `characters`;

export async function getCharatersAtPage(
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

export function getCharactersForGrid(page, itemsPerPage) {
  return getCharatersAtPage(page, itemsPerPage, {
    mappedBy: mapCharacterToCard
  });
}

export function getCharactersForList(page, itemsPerPage) {
  return getCharatersAtPage(page, itemsPerPage, {
    mappedBy: mapCharacterToList
  });
}
