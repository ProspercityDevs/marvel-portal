import { getAllPaginated } from '@/modules/core/services/marvel.api-rest';
import { getInverseAllPaginated } from '@/modules/core/services/marvel.api-rest';
import { defaultMapper } from '@/modules/core/services';
import { mapCharacterToCard } from '@/modules/marvel-characters/services';
import { mapCharacterToList } from './character.mapper';
import { getLettersFiltered } from 'src/modules/core/services/marvel.api-rest';

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

export async function getInverseCharatersAtPage(
   page,
   itemsPerPage,
   order,
   { mappedBy = defaultMapper, queryParams = {} }
 ) {
   return getInverseAllPaginated(domain, page, order, {
     mappedBy,
     itemsPerPage,
     ...queryParams
   });
 }

export function getCharactersForGrid(page, itemsPerPage ) {
  return getCharatersAtPage(page, itemsPerPage, {
    mappedBy: mapCharacterToCard
  });
}

export function getInverseCharactersForGrid(page, itemsPerPage, order ) {
  return getInverseCharatersAtPage(page, itemsPerPage, order, {
    mappedBy: mapCharacterToCard
  });
}


export function getCharactersForList(page, itemsPerPage) {
  return getCharatersAtPage(page, itemsPerPage, {
    mappedBy: mapCharacterToList
  });
}

export function getFilteredCharactersForList(page, itemsPerPage) {
  return getLettersFiltered(page, itemsPerPage, {
    mappedBy: mapCharacterToList
  });
}