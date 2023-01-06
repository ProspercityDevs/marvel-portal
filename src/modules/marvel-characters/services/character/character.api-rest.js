import { getAllPaginated } from '@/modules/core/services/marvel.api-rest';

import { mapCharacterToCard } from '@/modules/marvel-characters/services/character';


export async function getCharatersAtPage(
  page,
  order,
  domain,
  name,
  itemsPerPage,
  { mappedBy , queryParams = {}}
) { console.log(itemsPerPage)
  return getAllPaginated(domain, page,name, order, {
    mappedBy,
    itemsPerPage,
    ...queryParams
  });
}

export function getCharactersForGrid(page, order, domain, name,itemsPerPage) {
  return getCharatersAtPage(page, order, domain, name,itemsPerPage, {
    mappedBy: mapCharacterToCard
  });
}
