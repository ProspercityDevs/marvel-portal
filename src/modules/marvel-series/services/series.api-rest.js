import { getAllPaginated } from '@/modules/core/services/marvel.api-rest';
import { defaultMapper } from '@/modules/core/services';
import { mapSerieToItemList } from '@/modules/marvel-characters/services';

const domain = `series`;

export async function getSeriesAtPage(
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

export function getSeriesForList(container, itemsPerList) {
  return getSeriesAtList(container, itemsPerList, {
    mappedBy: mapSerieToItemList
  });
}
