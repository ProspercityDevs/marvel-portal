import { getAllPaginated } from '@/modules/core/services/marvel.api-rest';
import { defaultMapper } from '@/modules/core/services';
import { mapSerieToCard } from '../../marvel-series/services';
import { mapSerieToList } from '../../marvel-series/services';

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

export function getSeriesForGrid(page, itemsPerPage) {
  return getSeriesAtPage(page, itemsPerPage, {
    mappedBy: mapSerieToCard
  });
}

export function getSeriesForList(container, itemsPerList) {
  return getSeriesAtList(container, itemsPerList, {
    mappedBy: mapSerieToList
  });
}
