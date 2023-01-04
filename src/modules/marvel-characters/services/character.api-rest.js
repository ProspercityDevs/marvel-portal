import { getAllPaginated } from '@/modules/core/services/marvel.api-rest';
import { defaultMapper } from '@/modules/core/services';
import { mapCharacterToCard } from '@/modules/marvel-characters/services';

const domain = `characters`; // estado inicial es: characters

export async function getCharatersAtPage( 
  page,
  itemsPerPage,
  nameStarts,

  { mappedBy = defaultMapper, queryParams = {} }
) {
  return getAllPaginated(domain, page, nameStarts, {
    mappedBy,
    itemsPerPage,
    ...queryParams
  });
}

export function getCharactersForGrid(page, itemsPerPage, nameStarts) {
  return getCharatersAtPage(page, itemsPerPage, nameStarts, {
    mappedBy: mapCharacterToCard
  });
}
