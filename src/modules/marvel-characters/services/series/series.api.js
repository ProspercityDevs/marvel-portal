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
  const order="";
  return getAllPaginated(domain, page,name,order, {
    mappedBy,
    itemsPerPage,
    ...queryParams
  });
}

function mapSeriesToCard(series) {
  return {
    name: series.title,
    id: series.id,
    image: series.thumbnail, 
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
  const order="";
  return getAllPaginated(domain, page,name,order, {
    mappedBy,
    itemsPerPage,
    ...queryParams
  });
}

function mapItemsToCard(item) {
  return {
    name: item.name,
    title: item.title,
    id: item.id,
    image: item.thumbnail, 
  };
}

