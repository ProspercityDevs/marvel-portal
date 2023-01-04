import { getAllPaginated } from '@/modules/core/services/marvel.api-rest';
import { defaultMapper } from '@/modules/core/services';
import { mapCharacterToCard } from '@/modules/marvel-characters/services';

const domain = `characters`; // estado inicial es: characters

export async function getCharatersAtPage( 
  page,
  itemsPerPage,
  nameStarts,
  orden,

  { mappedBy = defaultMapper, queryParams = {} }
) {
  return getAllPaginated(domain, page, nameStarts, orden, {
    mappedBy,
    itemsPerPage,
    ...queryParams
  });
}

export function getCharactersForGrid(page, itemsPerPage, nameStarts, orden) {
  return getCharatersAtPage(page, itemsPerPage, nameStarts,orden, {
    mappedBy: mapCharacterToCard
  });
}
