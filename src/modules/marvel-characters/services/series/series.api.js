import { getAllPaginated } from '@/modules/core/services/marvel.api-rest';
import { defaultMapper } from '@/modules/core/services';

export function getSeriesForGrid(page, itemsPerPage, domain) {

  return getSeriesAtPage(page, itemsPerPage, domain, {
    mappedBy: mapSeriesToCard
  });
}

async function getSeriesAtPage(
  page,
  itemsPerPage,
  domain,
  { mappedBy = defaultMapper, queryParams = {} }
) {
  return getAllPaginated(domain, page, {
    mappedBy,
    itemsPerPage,
    ...queryParams
  });
}

function mapSeriesToCard(series) {
  return {
    name: series.title,
    id: series.id,
    characters: series.characters.items
    
  };
}
