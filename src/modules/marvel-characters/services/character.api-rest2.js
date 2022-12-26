import { defaultMapper } from '@/modules/core/services';
import { mapCharacterToCard } from '@/modules/marvel-characters/services';
import { getAllPaginated } from 'src/modules/core/services/marvel.api-rest2.js';

const domain = `characters`;

export async function getCharatersAtPage2(
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

export function getCharactersForGrid2(page, itemsPerPage) {
  return getCharatersAtPage2(page, itemsPerPage, {
    mappedBy: mapCharacterToCard
  });
}
