import { getAllPaginated } from '@/modules/core/services/marvel.api-rest';

export function getSeriesForGrid(page, itemsPerPage, domain) {
  return getSeriesAtPage(page, itemsPerPage, domain, {
    mappedBy: mapSeriesToCard
  })
}

async function getSeriesAtPage(
  page,
  itemsPerPage,
  domain,
  { mappedBy, queryParams = {} }
) {
  const name="";
  return getAllPaginated(domain, page,name, {
    mappedBy,
    itemsPerPage,
    ...queryParams
  });
}

function mapSeriesToCard(series) {
  return {
    name: series.title,
    id: series.id,
    characters: series.characters.items,
    nameCharacters:series.name
  };
}



export function getItemsName(page, itemsPerPage, domain) {
  return getItemsAtPage(page, itemsPerPage, domain, {
    mappedBy: mapItemsToCard
  })
}

async function getItemsAtPage(
  page,
  itemsPerPage,
  domain,
  { mappedBy, queryParams = {} }
) {
  const name="";
  return getAllPaginated(domain, page,name, {
    mappedBy,
    itemsPerPage,
    ...queryParams
  });
}

function mapItemsToCard(items) {
  return {
    name: items.name, 
  };
}

