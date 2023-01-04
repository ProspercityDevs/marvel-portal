import { getAllPaginated } from '@/modules/core/services/marvel.api-rest2';
import { defaultMapper } from '@/modules/core/services';
import { mapCharacterToCard } from '@/modules/marvel-characters/services';

const domain = `characters`; //estado inicial es characters

export async function getCharatersAtPage2(
  page,
  itemsPerPage,

  { mappedBy = defaultMapper, queryParams = {} }
) {
  return getAllPaginated(domain, page,  {
    mappedBy,
    itemsPerPage,
    ...queryParams
  });
}

export function getCharactersForGrid2(page, itemsPerPage) {
  return getCharatersAtPage2(page, itemsPerPage,{
    mappedBy: mapCharacterToCard
  });
}
