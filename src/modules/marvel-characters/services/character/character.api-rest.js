import { getAllPaginated } from '@/modules/core/services/marvel.api-rest';

import { mapCharacterToCard } from '@/modules/marvel-characters/services/character';


export async function getCharatersAtPage(
  page,
  itemsPerPage,
  domain,
  
  { mappedBy , queryParams = {}}
) {
  return getAllPaginated(domain, page,  {
    mappedBy,
    itemsPerPage,
    ...queryParams
  });
}

export function getCharactersForGrid(page, itemsPerPage,  domain) {

  if(domain==undefined){
    domain=`characters`;
    return getCharatersAtPage(page, itemsPerPage, domain, {
      mappedBy: mapCharacterToCard
    });
  }

  return getCharatersAtPage(page, itemsPerPage, domain,  {
    mappedBy: mapCharacterToCard
  });
}
